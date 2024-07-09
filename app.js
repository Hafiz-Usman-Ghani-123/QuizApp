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
  if (signForm.style.display === "block"){ 
    alert(`Are you a Blind ? 
That's already selected !`)
  }else{
    logForm.style.display = "none";
    signForm.style.display = "block";
  }
});
// agar signup form pehly se select ho to

//
// Coming code for signup FORM submission
//
document.getElementById("signupF").addEventListener("submit", function (e) {
  e.preventDefault(); // Default form submission behavior ko rokna
  const email = document.getElementById("email1").value; // Username ko read karna
  const password = document.getElementById("pass1").value; // Password ko read karna

  // Pehle se existing users ko `localStorage` se retrieve karna YA phr new array banana
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Naya user object
  const newUser = { email, password };

  // Naya user ko users array me add karna
  users.push(newUser);

  // Updated users array ko `localStorage` me save karna
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful!");
});

// Login Form Submission
// 
document.getElementById("loginF").addEventListener("submit", function (e) {
  e.preventDefault(); // Default form submission behavior ko rokna
  const email = document.getElementById("email2").value; // Username ko read karna
  const password = document.getElementById("pass2").value; // Password ko read karna

  // `localStorage` se stored users data ko retrieve karna
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // User validation
  const validUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (validUser) {
    // window.open("https://google.com"); // <- This is what makes it open in a new window.;
    document.querySelector(".container").style.display = 'none'
    // console.log(bothForms);
    
    alert("Login successful !"); // Success message show karna
  } else {
    alert("Invalid username or password"); // Error message show karna
  }
});
// 
