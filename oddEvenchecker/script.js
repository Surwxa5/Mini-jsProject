const num = document.getElementById("typeNum");

function prints() {
  let a = Number(num.value);   // FIXED

  if (a % 2 === 0) {
    document.getElementById("result1").innerText = "Even";
  } else {
    document.getElementById("result1").innerText = "Odd";
  }
}
