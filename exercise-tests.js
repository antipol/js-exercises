function checkPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    return str[i] === str[str.length - 1 - i];
  }
}

console.log(checkPalindrome("raviver"));
