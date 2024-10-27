let Name = document.querySelector("#Name");
let number = document.querySelector("#number");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let errorTag = document.querySelector("#errorTag");
let submitBtn = document.querySelector("#submitBtn");

// all input
let input = document.querySelectorAll("input");






// add event

submitBtn.addEventListener("click", function() {
 if(Name.value == "" || number.value == "" || email.value == "" || password.value == ""){
  errorTag.innerHTML = "Please Chack";
  return;
 };
if(Name.value.length < 5){
  errorTag.innerHTML = "Name must be more than 5 charactar";
  return
 };
 
 if(number.value.length != 11){
  errorTag.innerHTML = "Number must be 11 charactar";
  return
 };
 if(password.value.length < 8){
  errorTag.innerHTML = "Password must be more than 8 charactar";
  return
 };
});








// my function 

function showTag(show) {
  errorTag.innerHTML = show;
};

function hide(){
  errorTag.innerHTML = "";
};

// addd key down 

input.forEach(function(item){
  item.addEventListener('keydown', function(){
    hide();
  });

});









































