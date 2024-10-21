  let Name = document.querySelector("#name");
  let phone = document.querySelector("#phone");
  let email = document.querySelector("#email");
  let passowrd = document.querySelector("#passowrd");
  let errortag = document.querySelector("#errortag");
  let submitBtn = document.querySelector("#submitBtn");

  // add event listner


  submitBtn.addEventListener("click", function() {
    if(Name.value == "" || phone.value == "" || email.value == "" || passowrd.value == "") 
      {
      errortag.innerHTML = "Something wrong";
      return;
      }
    // Name length Chack  
    
    

    if(Name.value.length < 5) 
      {
     // errortag.innerHTML = "Name  length must be more than 5 charactor";
      showError("Name  length must be more than 5 charactor");
      return;
      }


    if(phone.value.length != 11) 
      {
      //errortag.innerHTML = "Phone  length must be 11 charactor";
      showError("Phone  length must be 11 charactor")
      return;
      }

    if(passowrd.value.length < 8) 
      {
      //errortag.innerHTML = "Password length must be more than 7 charactor";
      showError("Password length must be more than 7 charactor")
      return;
      }
  });
function showError(errorText) {
  errortag.innerHTML = errorText;
}

function hideError() {
  errortag.innerHTML = "";
}

































































































