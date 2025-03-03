let errorname = document.getElementById("errorname");
let erroremail = document.getElementById("erroremail");
let errorpassword = document.getElementById("errorpassword");
let errorconfirmPassword = document.getElementById("errorconfirmpassword");

// All Form Validation Starts----
function formValidation() {
  console.log("Hello World");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  console.log(name, email, password, confirmPassword);

  if (name === "") {
    errorname.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #e21212;"></i>  Name is required`;
    document.getElementById("name").style.borderColor = "red";
    return false;
  }
  if (name != "") {
    errorname.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #0dd91a;"></i>     correct`;
    errorname.style.color = "green";
    document.getElementById("name").style.borderColor = "green";
  }

  if (email === "") {
    erroremail.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #e21212;"></i>  Email is required`;
    document.getElementById("email").style.borderColor = "red";
    return false;
  }
  if (email != "") {
    erroremail.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #0dd91a;"></i>     correct`;
    erroremail.style.color = "green";
    document.getElementById("email").style.borderColor = "green";
  }

  if (password === "") {
    errorpassword.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #e21212;"></i>  Password is required`;
    document.getElementById("password").style.borderColor = "red";
    return false;
  }
  if (password != "") {
    errorpassword.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #0dd91a;"></i>     correct`;
    errorpassword.style.color = "green";
    document.getElementById("password").style.borderColor = "green";
  }

  if (confirmPassword === "") {
    errorconfirmPassword.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #e21212;"></i>  Confirm Password is required`;
    document.getElementById("confirmPassword").style.borderColor = "red";
    return false;
  }
  if (confirmPassword != "") {
    errorconfirmPassword.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #0dd91a;"></i>     correct`;
    errorconfirmPassword.style.color = "green";
    document.getElementById("confirmPassword").style.borderColor = "green";
  }

  if (
    !(
      password.match(/[a-z]/) &&
      password.match(/[A-Z]/) &&
      password.match(/[0-9]/) &&
      password.match(/[^a-zA-Z\d]/) &&
      password.length >= 8
    )
  ) {
    errorpassword.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #e21212;"></i>  Password must contain at least 8 characters, including UPPER/lowercase and numbers`;
    errorpassword.style.color = "red";
    document.getElementById("password").style.borderColor = "red";
    return false;
  }

  if (password !== confirmPassword) {
    errorconfirmPassword.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #e21212;"></i>  Password and Confirm Password must be same`;
    errorconfirmPassword.style.color = "red";
    document.getElementById("confirmPassword").style.borderColor = "red";
    return false;
  }

  let name1 = document.getElementById("name").value;
  let email1 = document.getElementById("email").value;
  let password1 = document.getElementById("password").value;
  let confirmPassword1 = document.getElementById("confirmPassword").value;
  let data = {
    name: name1,
    email: email1,
    password: password1,
    confirmPassword: confirmPassword1,
  };

  let convertdata = localStorage.setItem("userdata", JSON.stringify(data));
}

// Get Local Storage Data----
function localStorg() {
  let finaldata = JSON.parse(localStorage.getItem("userdata"));

  let validEmail = finaldata.email;
  let validPassword = finaldata.confirmPassword;

  let email2 = document.querySelector("#email2").value;
  let password2 = document.querySelector("#password2").value;

  if (email2 === validEmail) {
    document.querySelector(
      "#erroremail2"
    ).innerHTML = `<i class="fa-solid fa-circle-check" style="color: #0dd91a;"></i>Correct `;
    document.querySelector("#erroremail2").style.color = "green";
    document.querySelector("#email2").style.border = "1px solid green";
  }

  if (email2 != validEmail) {
    document.querySelector(
      "#erroremail2"
    ).innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #e21212;"></i>Invalid  Email `;
    document.querySelector("#email2").style.border = "1px solid red";
    return false;
  }
  if (password2 === validPassword) {
    document.querySelector(
      "#errorpassword2"
    ).innerHTML = `<i class="fa-solid fa-circle-check" style="color: #0dd91a;"></i>Correct `;
    document.querySelector("#errorpassword2").style.color = "green";
    document.querySelector("#password2").style.border = "1px solid green";
  }
  if (password2 != validPassword) {
    document.querySelector(
      "#errorpassword2"
    ).innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #e21212;"></i>Invalid  Password `;
    document.querySelector("#password2").style.border = "1px solid red";
    return false;
  }

  document.querySelector("#email2").value = "";
}
// Get Local Storage Data Ends----

// All Form Validation Ends------

// Div Slider Javascript
function sliderLeft() {
  document.querySelector(".form-signup").style.transform = "translateX(0px)";
  document.querySelector(".form-signup").style.opacity = "1";
  document.querySelector(".form-signin").style.opacity = "0";
}
function sliderRight() {
  document.querySelector(".form-signup").style.opacity = "0";
  document.querySelector(".form-signin").style.opacity = "1";

  setTimeout(() => {
    document.querySelector(".form-signup").style.transform =
      "translateX(750px)";
  }, 800);
}
