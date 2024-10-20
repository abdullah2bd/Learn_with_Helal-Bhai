
let Name = document.getElementById("name");
let Phone = document.getElementById("Phone");
let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
let SubmitBtn = document.getElementById("SubmitBtn");
let error = document.getElementById("error");

//Event listen

SubmitBtn.addEventListener("click", function(){
   if(Name.value == "" ||
     Phone.value == "" ||
     Email.value == "" ||
     Password.value == ""
    ){
   alert("Faile can be empty");
   return;
   };

   if(Name.value.length < 5 ){
    //alert('Name length should be more than 5 latters');
    error.innerHTML = "Name length should be more than 5 latters";
    return;
   }
   
   if(Phone.value.length != 11 ){
    //alert('Phone length MUST BE 10 latters');
    error.innerHTML = "Name length should be more than 5 latters";

    return;
   }
   
   if(Password.value.length < 8 ){
    //alert('Password length should be more than 7 latters');
    error.innerHTML = "Name length should be more than 5 latters";

    return;
   }
});

































