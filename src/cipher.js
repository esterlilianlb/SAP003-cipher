window.cipher = {
    encode: encode,
    decode: decode, 
};

function encode (textCode, codeOffset) {
  let result="";  
  for (let i = 0; i < textCode.length; i++) {
    let message= textCode[i].charCodeAt();
    let calculo= ((message - 65 + codeOffset) % 26) + 65
      result += String.fromCharCode(calculo);
      
  }
  return result
}

function decode (textDecode, decodeOffset) {
  let result="";
  for (let i = 0; i < textDecode.length; i++) {
     let message= textDecode[i].charCodeAt();
     let calculo= ((message - 90 - decodeOffset) % 26) + 90
      result += String.fromCharCode(calculo);
  }
  return result
}

