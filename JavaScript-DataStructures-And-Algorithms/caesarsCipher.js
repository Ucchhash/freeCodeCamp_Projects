function rot13(str) {
  
  var decoded = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      decoded.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      decoded.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      decoded.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  return decoded.join("");
}

rot13("SERR PBQR PNZC");