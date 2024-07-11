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
  if (signForm.style.display === "block") {
    alert(`Are you a Blind ? 
That's already selected !`);
  } else {
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
    document.querySelector(".container1").style.display = "none";
    // console.log(bothForms);

    alert("Login successful !"); // Success message show karna
  } else {
    alert("Invalid username or password"); // Error message show karna
  }
});
// ----------------------------------
//          QUIZ APPLICATION
// ----------------------------------
const questions = [
  {
    ques: `Which of the following is correct about features of JavaScript?`,
    a: `JavaScript is complementary to and integrated with HTML.`,
    b: `JavaScript is open and cross-platform.`,
    c: `Both of the above.`,
    d: `All of the above.`,
    correct: this.c,
  },
  {
    ques: `Which of the following is the correct syntax to print a page using JavaScript?`,
    a: `document.print();`,
    b: `browser.print();.`,
    c: `navigator.print();`,
    d: `window.print();`,
    correct: this.d,
  },
  {
    ques: `Which built-in method returns the character at the specified index?`,
    a: `characterAt()`,
    b: `getCharAt()`,
    c: `charAt()`,
    d: `None of the above.`,
    correct: this.c,
  },
  {
    ques: `Which built-in method returns the characters in a string beginning at the specified location?`,
    a: `substr()`,
    b: `getSubstring()`,
    c: `slice()`,
    d: `None of the above.`,
    correct: this.a,
  },
  {
    ques: `Which of the following function of Boolean object returns a string containing the source of the Boolean object?`,
    a: `valueOf()`,
    b: `toSource()`,
    c: `toString()`,
    d: `None of the above.`,
    correct: this.b,
  },
];

// questions print karny k liye hy
//
let num = 0; // question or option k index k liye ...
let questionBox = document.getElementById("question");
let quesNum = document.querySelector(".quesNum");

//  options print karny k liye hy
let op1 = document.getElementById("option1");
let op2 = document.getElementById("option2");
let op3 = document.getElementById("option3");
let op4 = document.getElementById("option4");

// first question print krny k liye .
questionBox.innerHTML = questions[num].ques;
// first options print krny k liye .
op1.innerText = questions[num].a;
op2.innerText = questions[num].b;
op3.innerText = questions[num].c;
op4.innerText = questions[num].d;
// question number k liye
quesNum.innerText = `Q ${num + 1}) `;

// next question krny k liye event
document.getElementById("nextQuesBtn").addEventListener("click", () => {
  // questions ki taadaad se zada na bary
  if (num === questions.length - 1) {
    num = 0;
  } else {
    num++;
  }
  //  questions barhany k liye
  questionBox.innerText = questions[num].ques;
  ///  option barhany k liye
  op1.innerText = questions[num].a;
  op2.innerText = questions[num].b;
  op3.innerText = questions[num].c;
  op4.innerText = questions[num].d;
  // question number barhany k liye 
quesNum.innerText = `Q ${num + 1}) `;

});

// op1.innerText = questions[num].a;
// op2.innerText = questions[num].b;
// op3.innerText = questions[num].c;
// op4.innerText = questions[num].d;
// console.log(num);
document.getElementById("nextQuesBtn").addEventListener("click", () => {});
