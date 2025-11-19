const firstNum=document.getElementById('oneNum')
const Operator=document.getElementById('typeoperator')
const secondNum=document.getElementById('twoNum')

const Calbutton=document.getElementById('calButton')
const click=Calbutton.addEventListener('click',finalResult)
  function finalResult(){
const a=Number(firstNum.value);
const b=Number(secondNum.value);
const Op=Operator.value.trim();

let result;

switch(Op){
  case '+':
  result=a+b
  break;
  case'-':
 result =a-b  
 break;
 case '/':
result=b!==0 ? a/b: "cannot divide bu zero"
break;
 case '*':
result=a*b
break;
 case '%':
result=a%b
break;
default:
  result= "invalid operator"
}
console.log(result)
alert("result" +result);
}

