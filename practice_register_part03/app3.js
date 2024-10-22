
let Name = document.querySelector("#Name"); 
let phone = document.querySelector("#phone"); 
let email = document.querySelector("#email"); 
let password = document.querySelector("#password"); 
let errorTag = document.querySelector("#errorTag"); 
let submitBtne = document.querySelector("#submitBtn");


let hideErrorTag = document.querySelector("#hideErrorTag"); 
let showErrorTag = document.querySelector("#showErrorTag");


// add event listener

submitBtne.addEventListener("click", function () {
  if(Name.value == "" || phone.value == "" || email.value == "" || password.value == ""){
    alert("Please chack");
    return;
  }
  if(Name.value.length < 5){
    errorTag.innerHTML = "Your name must be more than 5 charactor";
    return;
  }
  if(phone.value.length != 11){
    errorTag.innerHTML = "Your Number must be 11 charactor";
    return;
  }
  if(password.value.length < 8){
    errorTag.innerHTML = "Your Number must be more than 8 charactor";
    return;
  }
});


//function

function hideErrorTag(){
  errorTag.innerHTML = "";
}




