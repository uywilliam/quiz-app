const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who painted the famous painting 'The Starry Night'?",
      options: [
        "Leonardo da Vinci",
        "Vincent van Gogh",
        "Pablo Picasso",
        "Claude Monet",
      ],
      answer: "Vincent van Gogh",
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Elephant", "Whale", "Lion", "Giraffe"],
      answer: "Whale",
    },
    {
      question: "Which music group's debut album was titled 'Please Please Me'?",
      options: ["The Rolling Stones", "The Beatles", "The Who", "The Beach Boys"],
      answer: "The Beatles",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Hg", "Pb"],
      answer: "Au",
    },
    {
      question: "Who wrote the famous novel 'To Kill a Mockingbird'?",
      options: [
        "F. Scott Fitzgerald",
        "Harper Lee",
        "Jane Austen",
        "J.K. Rowling",
      ],
      answer: "Harper Lee",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      answer: "Vatican City",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Saturn", "Jupiter", "Uranus"],
      answer: "Jupiter",
    },
    {
      question: "What is the chemical symbol for silver?",
      options: ["Ag", "Au", "Hg", "Pb"],
      answer: "Ag",
    },
    // Add more questions as needed
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let questionTimeout;
  
  function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
      const questionObj = quizData[currentQuestionIndex];
  
      document.getElementById("question").innerText = questionObj.question;
  
      const optionsContainer = document.getElementById("options");
      optionsContainer.innerHTML = "";
  
      questionObj.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => handleAnswer(option, button);
        optionsContainer.appendChild(button);
      });
  
      // Clear previous result message
      document.getElementById("result").innerText = "";
    } else {
      endQuiz();
    }
  }
  
  function handleAnswer(selectedOption, button) {
    const questionObj = quizData[currentQuestionIndex];
  
    // Disable all buttons
    document.querySelectorAll("#options button").forEach((btn) => {
      btn.disabled = true;
      if (btn.innerText === questionObj.answer) {
        btn.classList.add("correct");
      } else if (
        btn.innerText === selectedOption &&
        btn.innerText !== questionObj.answer
      ) {
        btn.classList.add("incorrect");
      }
    });
  
    if (selectedOption === questionObj.answer) {
      score++;
    }
  
    // Display result message
    document.getElementById("result").innerText =
      selectedOption === questionObj.answer ? "Correct!" : "Wrong!";
  
    // Move to the next question after 1000ms
    clearTimeout(questionTimeout);
    questionTimeout = setTimeout(() => {
      currentQuestionIndex++;
      loadQuestion();
    }, 1000);
  }
  
  function endQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `<h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>`;
  
    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart";
    restartButton.addEventListener("click", () => location.reload());
  
    quizContainer.appendChild(restartButton);
  }
  
  // Start the quiz
  loadQuestion();