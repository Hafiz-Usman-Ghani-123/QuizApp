// Variables
let signForm = document.querySelector("#signupF");
let logForm = document.querySelector("#loginF");
// buttons for changing form
let signBtn = document.querySelector("#btn1");
let logBtn = document.querySelector("#btn2");
//
// for changing  sign up ==> login form
logBtn.addEventListener("click", () => {
  logForm.style.display = "block";
  signForm.style.display = "none";
});
// for changing login  ==>  sign up form
signBtn.addEventListener("click", () => {
  logForm.style.display = "none";
  signForm.style.display = "block";
});
//
// Coming code for signup FORM submission
//
document.getElementById("signupF").addEventListener("submit", function (e) {
  e.preventDefault(); // Default form submission behavior ko rokna
  const email = document.getElementById("email1").value; // Username ko read karna
  const password = document.getElementById("pass1").value; // Password ko read karna

  // Naya user object
  const newUser = {
    email: email,
    password: password,
  };

  // tamam users ki aik array
  let users = [];
  //
  const userExists = users.some((user) => user.email === username);

  if (userExists) {
    alert("Username already exists! Please choose another username.");
  } else {
    // Naya user ko users array me add karna
    users.push(newUser);

    // Updated users array ko `localStorage` me save karna
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
  }
});
