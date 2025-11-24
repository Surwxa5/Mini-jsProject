const userInput= document.getElementById("userInput")
const convertcelcius=document.getElementById("convertCelcius")
const Convertfahrenheit=document.getElementById("Convertfahrenheit")

const result=document.getElementById("result")
function convertintocelcius(){
  let val=Number(userInput.value)

  let output1 = (val-32)*5/9
  
  result.textContent="Fahrenheit converting into celcius="+output1;

}
function convertintofahrenheit(){
  let val=Number(userInput.value)

  let output2 = (val * 9/5) + 32;
  
  result.textContent="celcius converting into Fahrenheit="+output2;

}