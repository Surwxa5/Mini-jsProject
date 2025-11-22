const inputWord=document.getElementById("inputWord")
const wordChecker=document.getElementById("wordChecker")
const result=document.getElementById("result")

wordChecker.addEventListener('click',PalindromeChecking)

function PalindromeChecking(){
let word=inputWord.value.trim();
 let reversed = word.split("").reverse().join("");
if(word==reversed)
{
  result.textContent="yes it is Palindrome"

  }
  else{
    result.textContent="its not palindrome"
  }


}