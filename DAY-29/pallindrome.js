
//pallindrome check by logic
function isPalindrome(str){
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}


//by javascript function

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}