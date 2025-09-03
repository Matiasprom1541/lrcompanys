var alert = document.getElementById("alert");
var exti = document.getElementById("exti");

document.addEventListener("click",(e) => {

  alert.style.visibility="visible";

})

exti.addEventListener("click",(e) => {

  alert.style.visibility="hidden";

})

