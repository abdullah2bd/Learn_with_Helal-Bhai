
// let Name = document.getElementById("name");
// let Phone = document.getElementById("Phone");
// let Email = document.getElementById("Email");
// let Password = document.getElementById("Password");
// let SubmitBtn = document.getElementById("SubmitBtn");
// let error = document.getElementById("error");

// //Event listen

// SubmitBtn.addEventListener("click", function(){
//    if(Name.value == "" ||
//      Phone.value == "" ||
//      Email.value == "" ||
//      Password.value == ""
//     ){
//    alert("Faile can be empty");
//    return;
//    };

//    if(Name.value.length < 5 ){
//     //alert('Name length should be more than 5 latters');
//     error.innerHTML = "Name length should be more than 5 latters";
//     return;
//    }
   
//    if(Phone.value.length != 11 ){
//     //alert('Phone length MUST BE 10 latters');
//     error.innerHTML = "Name length must be 11 latters";

//     return;
  //  }
   
  //  if(Password.value.length < 8 ){
  //   // alert('Password length should be more than 7 latters');
  //   error.innerHTML = "Name length should be more than 7 latters";

//     return;
//    }
// });






let Name = document.getElementById("name");
let phone = document.getElementById("Phone");
let email = document.getElementById("Email");
let password = document.getElementById("Password");
let submitBtn = document.getElementById("Submit-btn");
let errorTag = document.getElementById("error");

// event listen
SubmitBtn.addEventListener("click", function () {
  // Check blank fields
  if (
    Name.value == "" ||
    phone.value == "" ||
    email.value == "" ||
    password.value == ""
  ) {
    // alert("Fields can't be empty!");
    errorTag.innerHTML = "Fields can't be empty!";
    return;
  }

  // Name length check
  if (Name.value.length < 5) {
    //alert("Name length should be more than 5 latters.");
    errorTag.innerHTML = "Name length should be more than 5 latters.";
    return;
  }

  // Phone length check
  if (phone.value.length != 11) {
    //alert("Phone number must be in 11digits!");
    errorTag.innerHTML = "Phone number must be in 11digits!";
    return;
  }

  // Password length check
  if (password.value.length < 8) {
    //alert("Password length should more than 7 char!");
    errorTag.innerHTML = "Password length should more than 7 char!";
    return;
  }

  // end event listener
});











/*

let userName = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let passowrd = document.getElementById("password");
let submitBtn = document.getElementById("password");


// Event listen
submitBtn.addEventListener("click", function( ) {
  if (userName.vaue == "" || 
      phone.value == "" || 
      email.value == "" || 
      passowrd.value == ""
  ) {
   alert("Name failed can't be empty");
  }



  console.log
});
*/













