
const crypto = require("crypto");

class SHA256 {
  /**
   * 
   * @param content string to hash
   * @param inputEncoding input encoding "utf8" | "base64" | "binary" | "hex"
   * @param outputEncoding output "utf8" | "base64" | "binary" | "hex"
   */
  getHash(content: string, inputEncoding = "utf8", outputEncoding="base64") {
    const shasum = crypto.createHash("sha256");
    shasum.update(content, inputEncoding);
    const res = shasum.digest(outputEncoding);
    return res;
  };

  getAlgorithmName(){ return "http://www.w3.org/2001/04/xmlenc#sha256"; };
}

class SHA384 {
  /**
   * 
   * @param content string to hash
   * @param inputEncoding input encoding "utf8" | "base64" | "binary" | "hex"
   * @param outputEncoding output encoding "utf8" | "base64" | "binary" | "hex"
   */
  getHash(content: string, inputEncoding = "utf8", outputEncoding = "hex") {

    const shasum = crypto.createHash("SHA384");
    shasum.update(content, inputEncoding);
    const res = shasum.digest(outputEncoding);
    return res;
  };

  getAlgorithmName() { return "http://www.w3.org/2001/04/xmlenc#sha256"; };
}

class SHA1 {
  /**
   * 
   * @param content string to hash
   * @param inputEncoding input encoding "utf8" | "base64" | "binary" | "hex"
   * @param outputEncoding output encoding "utf8" | "base64" | "binary" | "hex"
   */
  getHash(content: string, inputEncoding = "utf8", outputEncoding = "base64" ) {
    const shasum = crypto.createHash('sha1');
    shasum.update(content, inputEncoding);
    const res = shasum.digest(outputEncoding);
    return res;
  }

  getAlgorithmName() { return "http://www.w3.org/2000/09/xmldsig#sha1"; }
}

class SHA512 {

  /**
   * 
   * @param content string to hash
   * @param inputEncoding input encoding "utf8" | "base64" | "binary" | "hex"
   * @param outputEncoding output encoding "utf8" | "base64" | "binary" | "hex"
   */
  getHash(content: string, inputEncoding = "utf8", outputEncoding = "base64" ) {
    const shasum = crypto.createHash('sha512');
    shasum.update(content, inputEncoding);
    const res = shasum.digest(outputEncoding);
    return res;
  }

  getAlgorithmName() { return "http://www.w3.org/2001/04/xmlenc#sha512" }
}


// /**
//  * Signature algorithm implementation
//  *
//  */
// function RSASHA1() {

//   /**
//   * Sign the given string using the given key
//   *
//   */
//   this.getSignature = function(signedInfo, signingKey) {
//     var signer = crypto.createSign("RSA-SHA1")
//     signer.update(signedInfo)
//     var res = signer.sign(signingKey, 'base64')
//     return res
//   }

//   /**
//   * Verify the given signature of the given string using key
//   *
//   */
//   this.verifySignature = function(str, key, signatureValue) {
//     var verifier = crypto.createVerify("RSA-SHA1")
//     verifier.update(str)
//     var res = verifier.verify(key, signatureValue, 'base64')
//     return res
//   }

//   this.getAlgorithmName = function() {
//     return "http://www.w3.org/2000/09/xmldsig#rsa-sha1"
//   }

// }


// /**
//  * Signature algorithm implementation
//  *
//  */
// function RSASHA256() {

//   /**
//   * Sign the given string using the given key
//   *
//   */
//   this.getSignature = function(signedInfo, signingKey) {
//     var signer = crypto.createSign("RSA-SHA256")
//     signer.update(signedInfo)
//     var res = signer.sign(signingKey, 'base64')
//     return res
//   }

//   /**
//   * Verify the given signature of the given string using key
//   *
//   */
//   this.verifySignature = function(str, key, signatureValue) {
//     var verifier = crypto.createVerify("RSA-SHA256")
//     verifier.update(str)
//     var res = verifier.verify(key, signatureValue, 'base64')
//     return res
//   }

//   this.getAlgorithmName = function() {
//     return "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"
//   }

// }

// /**
//  * Signature algorithm implementation
//  *
//  */
// function RSASHA512() {

//   /**
//   * Sign the given string using the given key
//   *
//   */
//   this.getSignature = function(signedInfo, signingKey) {
//     var signer = crypto.createSign("RSA-SHA512")
//     signer.update(signedInfo)
//     var res = signer.sign(signingKey, 'base64')
//     return res
//   }

//   /**
//   * Verify the given signature of the given string using key
//   *
//   */
//   this.verifySignature = function(str, key, signatureValue) {
//     var verifier = crypto.createVerify("RSA-SHA512")
//     verifier.update(str)
//     var res = verifier.verify(key, signatureValue, 'base64')
//     return res
//   }

//   this.getAlgorithmName = function() {
//     return "http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"
//   }
// }

// function HMACSHA1() {
//     this.verifySignature = function(str, key, signatureValue) {
//         var verifier = crypto.createHmac("SHA1", key);
//         verifier.update(str);
//         var res = verifier.digest('base64');
//         return res === signatureValue;
//     };

//     this.getAlgorithmName = function() {
//         return "http://www.w3.org/2000/09/xmldsig#hmac-sha1";
//     };

//     this.getSignature = function(signedInfo, signingKey) {
//         var verifier = crypto.createHmac("SHA1", signingKey);
//         verifier.update(signedInfo);
//         var res = verifier.digest('base64');
//         return res;
//     };
// }

export {
  SHA256,
  SHA384,
  SHA512,
  SHA1
};
