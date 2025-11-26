
const Answer=["Asia",'Kathmandu',"Mount Everest","Momo","Buddha"]

function answerCheck(){
  let q1=document.getElementById("question1").value.trim();
  let q2=document.getElementById("question2").value.trim();
  let q3=document.getElementById("question3").value.trim();
  let q4=document.getElementById("question4").value.trim();
  let q5=document.getElementById("question5").value.trim();

  let useranswer=[q1,q2,q3,q4,q5]

  let score=0
  for(let i=0;i<Answer.length;i++){
    if(useranswer[i]===Answer[i])
    {
      score++;
    }
  }

 document.getElementById("result").textContent=`you got ${score} out of 5`
}