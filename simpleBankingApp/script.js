let useramount =0;
function Deposit(){
  let amount=Number(document.getElementById("totalAmount").value)
if(useramount>=0){
document.getElementById("Withdraw").disabled = false;
}
 useramount=useramount+amount
 document.getElementById('result').textContent = useramount
}
function withdrawAmount(){
  let amount=Number(document.getElementById("totalAmount").value)
if(useramount<=0){
 document.getElementById("Withdraw").disabled = true;
}
else{
 useramount=useramount-amount
 document.getElementById("result").textContent=`your amount is ${useramount}`
 }
}