const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");
  const correct = document.getElementById("correct");
  const ques = document.getElementById("question");
  if (
    ques.value == "" ||
    op1.value == "" ||
    op2.value == "" ||
    op3.value == "" ||
    op4.value == "" ||
    correct.value == ""
  ) {
    alert("Please Fill All Inputs !!!");
  } else {
    let questions = localStorage.getItem("Question");
    let prevQues = questions ? JSON.parse(questions) : [];
    const fulQues = {
      ques: ques.value,
      a: op1.value,
      b: op2.value,
      c: op3.value,
      d: op4.value,
      correct: correct.value,
    };
    // // written question ko previous question ki array k sath kar diya
    prevQues?.push(fulQues);

    localStorage.setItem("Question", JSON.stringify(prevQues));

    alert("This Question Has Been saved !!! ");
  }
});
