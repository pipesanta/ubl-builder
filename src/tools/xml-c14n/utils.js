'use strict'

const select = require("xpath").select;

function findAttr(node, localName, namespace) {
  for (let i = 0; i < node.attributes.length; i++) {
    const attr = node.attributes[i];

    if (
      attrEqualsExplicitly(attr, localName, namespace) ||
      attrEqualsImplicitly(attr, localName, namespace, node)
    ) {
      return attr;
    }
  }
  return null;
}

function findFirst(doc, xpath) {
  const nodes = select(xpath, doc);
  if (nodes.length == 0) throw "could not find xpath " + xpath;
  return nodes[0];
}

function findChilds(node, localName, namespace) {
  node = node.documentElement || node;
  const res = [];
  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes[i];
    if (
      child.localName == localName &&
      (child.namespaceURI == namespace || !namespace)
    ) {
      res.push(child);
    }
  }
  return res;
}

function attrEqualsExplicitly(attr, localName, namespace) {
  return (
    attr.localName == localName &&
    (attr.namespaceURI == namespace || !namespace)
  );
}

function attrEqualsImplicitly(attr, localName, namespace, node) {
  return (
    attr.localName == localName &&
    ((!attr.namespaceURI && node.namespaceURI == namespace) || !namespace)
  );
}

const xml_special_to_encoded_attribute = {
  "&": "&amp;",
  "<": "&lt;",
  '"': "&quot;",
  "\r": "&#xD;",
  "\n": "&#xA;",
  "\t": "&#x9;"
};

const xml_special_to_encoded_text = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\r": "&#xD;"
};

function encodeSpecialCharactersInAttribute(attributeValue) {
  return attributeValue
    .replace(/[\r\n\t ]+/g, " ") // White space normalization (Note: this should normally be done by the xml parser) See: https://www.w3.org/TR/xml/#AVNormalize
    .replace(/([&<"\r\n\t])/g, function(str, item) {
      // Special character normalization. See:
      // - https://www.w3.org/TR/xml-c14n#ProcessingModel (Attribute Nodes)
      // - https://www.w3.org/TR/xml-c14n#Example-Chars
      return xml_special_to_encoded_attribute[item];
    });
}

function encodeSpecialCharactersInText(text) {
  return text
    .replace(/\r\n?/g, "\n") // Line ending normalization (Note: this should normally be done by the xml parser). See: https://www.w3.org/TR/xml/#sec-line-ends
    .replace(/([&<>\r])/g, function(str, item) {
      // Special character normalization. See:
      // - https://www.w3.org/TR/xml-c14n#ProcessingModel (Text Nodes)
      // - https://www.w3.org/TR/xml-c14n#Example-Chars
      return xml_special_to_encoded_text[item];
    });
}

module.exports = {
    findAttr,
    findChilds,
    encodeSpecialCharactersInAttribute,
    encodeSpecialCharactersInText,
    findFirst
}
