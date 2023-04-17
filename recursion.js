let word = "ABCDCBAX"
let check = true
for(let i=0 ;i<word.length; i++){
console.log(word[i])
console.log(word[word.length-1])
    if (word[i] !== word[word.length-1-i]){
        check = false
    } 
}
if (check){console.log("the word is palindrome")} else {
    console.log("the word is not palindrome")}
