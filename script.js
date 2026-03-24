correctAnswer = ["A", "A", "A", "A", "A"]
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
let btn = document.querySelector(".button");
let questions = document.querySelectorAll(".questions");
let submit = document.querySelector(".submit");


form.addEventListener("submit", event => {
    event.preventDefault();

    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 1;
            questions[index].classList.add("correct");
        }
        else {
            questions[index].classList.add("wrong");
        }
    });
    scrollTo(0, 0)

    submit.classList.add("hide")
    result.classList.remove("hide")
    result.querySelector("p").textContent = `You Score ${score}/5!`;
})

btn.addEventListener("click", () => {
    location.reload();
})