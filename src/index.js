document.getElementById("sendcode").addEventListener("click", encode1);
function encode1() {
  let textCode= document.getElementById("textcode").value;
  let codeOffset= Number(document.getElementById("codeoffset").value);
  let result = cipher.encode(textCode, codeOffset);
  document.getElementById("result").innerHTML=`${result}`;

  if (codeOffset<0) {
    return document.getElementById("result").innerHTML="Insira um núemro maior que 0";
  } 
}

document.getElementById("senddecode").addEventListener("click", decode1);
function decode1() {
  let textDecode= document.getElementById("textdecode").value;
  let decodeOffset= Number(document.getElementById("decodeoffset").value);
  let result = cipher.decode (textDecode, decodeOffset);
  document.getElementById("result").innerHTML=`${result}`;

  if (decodeOffset<0) {
    return document.getElementById("result").innerHTML="Insira um número maior que 0";
  }
}

