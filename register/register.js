let Name = document.querySelector("#Name");
let number = document.querySelector("#number");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let errorTag = document.querySelector("#errorTag");
let submitBtn = document.querySelector("#submitBtn");





// add event

submitBtn.addEventListener("click", function() {
 if(Name.value == "" || number.value == "" || email.value == "" || password.value == ""){
  

 }

});











function showTag(show) {
  errorTag.innerHTML = show;
};
function hide(){
  errorTag.innerHTML = "";
};











































