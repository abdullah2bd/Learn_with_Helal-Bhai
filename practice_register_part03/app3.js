
let Name = document.querySelector("#Name"); 
let phone = document.querySelector("#phone"); 
let email = document.querySelector("#email"); 
let password = document.querySelector("#password"); 
let errorTag = document.querySelector("#errorTag"); 
let submitBtne = document.querySelector("#submitBtn");



// add event listener

submitBtne.addEventListener("click", function () {
  if(Name.value == "" || phone.value == "" || email.value == "" || password.value == ""){
    alert("Please chack");
    return;
  }
  if(Name.value.length < 5){
    //errorTag.innerHTML = "Your name must be more than 5 charactor";
    showError("Your name must be more than 5 charactor");
    return;
  }
  if(phone.value.length != 11){
   // errorTag.innerHTML = "Your Number must be 11 charactor";
   showError("Your Number must be 11 charactor");
    return;
  }
  if(password.value.length < 8){
   // errorTag.innerHTML = "Your Number must be more than 8 charactor";
    showError("Your password must be more than 8 charactor");
    return;
  }
});


//function
function showError(showText){
  errorTag.innerHTML = showText;
}
function hideErrorTag(){
  errorTag.innerHTML = "";
}




