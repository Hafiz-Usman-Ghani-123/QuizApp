// ----------------------------------
//          QUIZ APPLICATION
// ----------------------------------
// const questions = [
//   {
//     ques: `Which of the following is correct about features of JavaScript?`,
//     a: `JavaScript is complementary to and integrated with HTML.`,
//     b: `JavaScript is open and cross-platform.`,
//     c: `Both of the above.`,
//     d: `All of the above.`,
//     correct: "c",
//   },
//   {
//     ques: `Which of the following is the correct syntax to print a page using JavaScript?`,
//     a: `document.print();`,
//     b: `browser.print();.`,
//     c: `navigator.print();`,
//     d: `window.print();`,
//     correct: "d",
//   },
//   {
//     ques: `Which built-in method returns the character at the specified index?`,
//     a: `characterAt()`,
//     b: `getCharAt()`,
//     c: `charAt()`,
//     d: `None of the above.`,
//     correct: "c",
//   },
//   {
//     ques: `Which built-in method returns the characters in a string beginning at the specified location?`,
//     a: `substr()`,
//     b: `getSubstring()`,
//     c: `slice()`,
//     d: `None of the above.`,
//     correct: "a",
//   },
//   {
//     ques: `Which of the following function of Boolean object returns a string containing the source of the Boolean object?`,
//     a: `valueOf()`,
//     b: `toSource()`,
//     c: `toString()`,
//     d: `None of the above.`,
//     correct: "b",
//   },
// ];
const questions = JSON.parse(localStorage.getItem("Question"));
let quesLen = questions.length;
let num = 0; // question or option k index k liye ...
let selected = false; // to check the radio btn is checked or not ..
let correcOrNot = document.getElementById("correcOrNot"); // sahi galat print krna
let correct = 0; // for counting
let incorrect = 0; // for counting
const btn = document.getElementById("nextQuesBtn"); // to add event listener
const AllRadios = document.querySelectorAll(".radioBtn"); /// All radio inputs
const questionBox = document.getElementById("question"); // question print krny k liye
const op1 = document.getElementById("option1"); //  for option1 print
const op2 = document.getElementById("option2"); //  for option2 print
const op3 = document.getElementById("option3"); //  for option3 print
const op4 = document.getElementById("option4"); //  for option4 print

// Question and options print
function printQues() {
  //    to print A question
  questionBox.textContent = `Q ${num + 1}) ${questions[num].ques}`;
  //    to print options
  op1.textContent = questions[num].a;
  op2.textContent = questions[num].b;
  op3.textContent = questions[num].c;
  op4.textContent = questions[num].d;
}
printQues();

// function for increasing "NUM" value
btn.addEventListener("click", () => {
  // Check if any radio button is selected
  for (const option of AllRadios) {
    // console.log(num)
    if (option.checked) {
      selected = true;
      if (option.value == questions[num].correct) {
        correct++;
        correcOrNot.style.color = "green";
        correcOrNot.textContent = `Great ! Your Answer Is Correct...`;
        setTimeout(() => {
          correcOrNot.textContent = ``;
        }, 700);
      } else {
        incorrect++;
        correcOrNot.style.color = "red";
        correcOrNot.textContent = `Ooh Noo ! Your Answer Is Incorrect...`;
        setTimeout(() => {
          correcOrNot.textContent = ``;
        }, 700);
      }
      break;
    }
  }
  if (selected) {
    if (num === (quesLen - 1)) {
      setTimeout(() => {
        alert(`${correct} Correct Answer
${incorrect} Incorrect Answer `);
      }, 500);
      num = 0;
      setTimeout(() => {
        correcOrNot.textContent = "";
      }, 1000);
      printQues();
    } else {
      num++;
      printQues();
    }
  } else {
    alert("Please select an option...");
  }
});
