const input=document.getElementById("text-input");
const check=document.getElementById("check-btn");
const result=document.getElementById("result");

check.addEventListener("click", checkpalindrome);

function checkpalindrome(){
  let filteredInput=input.value.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
  const len = filteredInput.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
        // validate the first and last characters are the same  
        if (filteredInput[i] !== filteredInput[len - 1 - i]) {  
          alert( 'It is not palindrome'); 
          result.innerText=`${input.value} is not a palindrome`;
          return;
        }  
    }  
  // If they are not the same, then it is not a palindrome
    if(len!==0){
    alert( 'It is a palindrome');  
    result.innerText=`${input.value} is a palindrome`;}
    else{
      alert("Please input a value");
    }
}