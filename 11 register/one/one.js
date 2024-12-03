const Name = document.getElementById("Name");
const Username = document.getElementById("Username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");
const p = document.getElementById("p");
let input = document.querySelectorAll("input");



button.addEventListener("click", function () {
  //  console.log("aSDFW E W");
  onclick();
});

// on click
function onclick() {
  if (
    Name.value == "" ||
    Username.value == "" ||
    email.value == "" ||
    password.value == ""
  ) {
    p.innerHTML = "Please chack";
    return;
  }
  if (Name.value.length < 5) {
    p.innerHTML = "Name charactor must be more than 4";
    return;
  }
  if (Username.value.length < 7) {
    p.innerHTML = "Username charactor must be more than 7";
    return;
  }
  if (password.value.length < 7) {
    p.innerHTML = "password charactor must be more than 8";
    return;
  }




  
}
function showTag(show) {
  p.innerHTML = show;
}
function hide() {
  p.innerHTML = "";
}
input.forEach(function (item) {
  item.addEventListener("keydown", function () {
    hide();
  });
});


