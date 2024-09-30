// Task 3: Palindrome Checker
// Write a function that checks if a given string is a palindrome (a word that reads the same backward as forward).
function isPalindrome(str)
{
  console.log("str: ", str)
  var oristr = str.toLowerCase();
  console.log("original String:", oristr)
  var string = oristr.split("").reverse().join("")
  console.log("String:", string)
  if(string === oristr)
  {
    console.log("Word:", string)
    return "is Palindrome"
  }
  else
  {
    console.log("Word:", string)
    return "is not a Palindrome"
  }
}