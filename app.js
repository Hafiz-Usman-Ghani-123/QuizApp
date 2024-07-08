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
// console.log('clcik');
//
// Coming code for signup FORM submission
//
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Default form submission behavior ko rokna
  const username = document.getElementById("signupUsername").value; // Username ko read karna
  const password = document.getElementById("signupPassword").value; // Password ko read karna

  // Pehle se existing users ko `sessionStorage` se retrieve karna
  let users = JSON.parse(sessionStorage.getItem("users")) || [];

  // Naya user object
  const newUser = { username, password };

  // Check if username already exists
  const userExists = users.some((user) => user.username === username);

  if (userExists) {
    alert("Username already exists! Please choose another username.");
  } else {
    // Naya user ko users array me add karna
    users.push(newUser);

    // Updated users array ko `sessionStorage` me save karna
    sessionStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
  }
});
