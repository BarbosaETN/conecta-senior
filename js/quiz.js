const questions = [
  {
    name: "question-1",
    correct: 2,
  },

  {
    name: "question-2",
    correct: 1,
  },

  {
    name: "question-3",
    correct: 1,
  },

  {
    name: "question-4",
    correct: 2,
  },

  {
    name: "question-5",
    correct: 1,
  },
];

const resultSection = document.querySelector(".quiz-result");

const resultTitle = resultSection.querySelector("h2");

const resultText = resultSection.querySelector("p");

const resultButton = document.querySelector(".quiz-actions .btn");

function getAnswers() {
  return questions.map((question) => {
    const selected = document.querySelector(
      `input[name="${question.name}"]:checked`,
    );

    return selected;
  });
}

function allQuestionsAnswered(answers) {
  return answers.every((answer) => answer !== null);
}

function calculateScore(answers) {
  let score = 0;

  answers.forEach((answer, index) => {
    const selectedValue = Number(answer.value);

    if (selectedValue === questions[index].correct) {
      score++;
    }
  });

  return score;
}

resultButton.addEventListener("click", () => {
  const answers = getAnswers();

  if (!allQuestionsAnswered(answers)) {
    alert("Responda todas as perguntas antes de ver o resultado.");

    return;
  }

  const score = calculateScore(answers);

  let title;
  let message;

  if (score === questions.length) {
    title = "🎉 Excelente!";

    message =
      `Você acertou ${score} de ${questions.length} perguntas. ` +
      "Você já conhece muito bem os principais cuidados " +
      "para utilizar a tecnologia com segurança.";
  } else if (score === 4) {
    title = "👏 Muito bem!";

    message =
      `Você acertou ${score} de ${questions.length} perguntas. ` +
      "Você está no caminho certo! Continue praticando " +
      "para ficar ainda mais seguro.";
  } else if (score === 3) {
    title = "👍 Bom trabalho!";

    message =
      `Você acertou ${score} de ${questions.length} perguntas. ` +
      "Vale a pena revisar alguns conteúdos e tentar novamente.";
  } else {
    title = "💙 Continue aprendendo!";

    message =
      `Você acertou ${score} de ${questions.length} perguntas. ` +
      "Não tem problema errar. Revise os conteúdos de " +
      "Segurança Digital e tente novamente.";
  }

  resultTitle.textContent = title;

  resultText.textContent = message;

  resultSection.scrollIntoView({
    behavior: "smooth",
  });
});
