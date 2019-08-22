

function encode1() {
   let textCode= document.getElementById('textcode').value;
   let codeOffset= Number(document.getElementById('codeoffset').value);
   let result = cipher.encode(textCode, codeOffset);
   document.getElementById("result").innerHTML=`${result}`   
   
}


function decode1() {
    let textDecode= document.getElementById('textdecode').value;
    let decodeOffset= Number(document.getElementById('decodeoffset').value);
    let result = cipher.decode (textDecode, decodeOffset);
   document.getElementById("result").innerHTML=`${result}` 
    
}

