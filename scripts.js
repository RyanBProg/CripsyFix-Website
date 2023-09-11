const form = document.getElementById("question-form");
const formInput1 = document.getElementById("correct-opt");
const correctAnswerMessage = document.getElementById("correct-answer-message");
const incorrectAnswerMessage = document.getElementById(
  "incorrect-answer-message"
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formInput1.checked) {
    correctAnswerMessage.style.display = "block";
    incorrectAnswerMessage.style.display = "none";
  } else {
    correctAnswerMessage.style.display = "none";
    incorrectAnswerMessage.style.display = "block";
  }
});

const mobMenu = document.getElementById("dropdown-menu");
const mobMenuIcon = document.getElementById("mob-menu-icon");

mobMenuIcon.addEventListener("click", (e) => {
  if (mobMenu.style.display === "flex") {
    mobMenu.style.display = "none";
  } else {
    mobMenu.style.display = "flex";
  }
});
