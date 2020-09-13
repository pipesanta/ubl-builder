'use strict'

const DOMParser = require("xmldom").DOMParser;

const c14n = require('./c14n-canonicalization');
const execC14n = require('./exclusive-canonicalization');
const EnvelopedSignature = require('./enveloped-signature').EnvelopedSignature;

const canonicalizationAlgorithms = {
  'http://www.w3.org/TR/2001/REC-xml-c14n-20010315': c14n.C14nCanonicalization,
  'http://www.w3.org/TR/2001/REC-xml-c14n-20010315#WithComments': c14n.C14nCanonicalizationWithComments,
  'http://www.w3.org/2001/10/xml-exc-c14n#': execC14n.ExclusiveCanonicalization,
  'http://www.w3.org/2001/10/xml-exc-c14n#WithComments': execC14n.ExclusiveCanonicalizationWithComments,
  'http://www.w3.org/2000/09/xmldsig#enveloped-signature': EnvelopedSignature
}
const defaultNsForPrefix = {
    ds: 'http://www.w3.org/2000/09/xmldsig#'
  };


  /**
   * 
   * @param {String[]} transforms 
   * @param {String} xmlContent 
   * @param {any} options 
   */
function getCanonXml(xmlContent, transforms, options) {
  const node = new DOMParser().parseFromString(`<item>${xmlContent}</item>`).documentElement.firstChild;
  options = options || {};
  options.defaultNsForPrefix = options.defaultNsForPrefix || defaultNsForPrefix;

  let canonXml = node.cloneNode(true) // Deep clone

  for (let t in transforms) {
    if (!transforms.hasOwnProperty(t)) continue;

    const transform = findCanonicalizationAlgorithm(transforms[t])
    canonXml = transform.process(canonXml, options);
    //TODO: currently transform.process may return either Node or String value (enveloped transformation returns Node, exclusive-canonicalization returns String).
    //This eitehr needs to be more explicit in the API, or all should return the same.
    //exclusive-canonicalization returns String since it builds the Xml by hand. If it had used xmldom it would inccorectly minimize empty tags
    //to <x/> instead of <x></x> and also incorrectly handle some delicate line break issues.
    //enveloped transformation returns Node since if it would return String consider this case:
    //<x xmlns:p='ns'><p:y/></x>
    //if only y is the node to sign then a string would be <p:y/> without the definition of the p namespace. probably xmldom toString() should have added it.
  }
  return canonXml.toString()
}

function findCanonicalizationAlgorithm(name) {
    const algo = canonicalizationAlgorithms[name]
    if (algo) return new algo()
    else throw new Error("canonicalization algorithm '" + name + "' is not supported");
  }

module.exports = {
    getCanonXml
}