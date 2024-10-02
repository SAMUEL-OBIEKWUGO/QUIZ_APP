// 30 Interesting Questions Array
const originalQuestions = [
    // General Knowledge
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "Malta", "San Marino"],
      answer: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: 2
    },
    {
      question: "Who wrote the novel '1984'?",
      options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
      answer: 0
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: 1
    },
    {
      question: "Which country is home to the kangaroo?",
      options: ["India", "South Africa", "Australia", "New Zealand"],
      answer: 2
    },
    
    // Science & Technology
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "H2SO4"],
      answer: 0
    },
    {
      question: "Which element is known as the 'King of Chemicals'?",
      options: ["Oxygen", "Nitrogen", "Sulfur", "Carbon"],
      answer: 2
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      answer: 1
    },
    {
      question: "Which is the most abundant gas in Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: 1
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      answer: 2
    },
    
    // Pop Culture & Entertainment
    {
      question: "In which year was the first 'Harry Potter' movie released?",
      options: ["1999", "2000", "2001", "2002"],
      answer: 2
    },
    {
      question: "Which pop singer is known as the 'King of Pop'?",
      options: ["Elvis Presley", "Freddie Mercury", "Michael Jackson", "Prince"],
      answer: 2
    },
    {
      question: "Which movie features the quote 'I'll be back'?",
      options: ["Rocky", "Terminator", "Rambo", "Die Hard"],
      answer: 1
    },
    {
      question: "What is the highest-grossing film of all time?",
      options: ["Avatar", "Avengers: Endgame", "Titanic", "Jurassic Park"],
      answer: 0
    },
    {
      question: "Who portrayed Jack Dawson in 'Titanic'?",
      options: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Tom Hanks"],
      answer: 2
    },
    
    // History
    {
      question: "Who was the first President of the United States?",
      options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
      answer: 1
    },
    {
      question: "What year did World War I begin?",
      options: ["1912", "1914", "1916", "1918"],
      answer: 1
    },
    {
      question: "Which country gifted the Statue of Liberty to the United States?",
      options: ["Germany", "Canada", "France", "Italy"],
      answer: 2
    },
    {
      question: "Who was the first man to walk on the moon?",
      options: ["Buzz Aldrin", "Yuri Gagarin", "John Glenn", "Neil Armstrong"],
      answer: 3
    },
    {
      question: "What was the name of the ship on which the Pilgrims traveled to America in 1620?",
      options: ["Santa Maria", "Mayflower", "Endeavour", "Beagle"],
      answer: 1
    },
    
    // Trivia
    {
      question: "Which animal is known as the 'Ship of the Desert'?",
      options: ["Horse", "Camel", "Elephant", "Lion"],
      answer: 1
    },
    {
      question: "Which organ in the human body is responsible for pumping blood?",
      options: ["Brain", "Lungs", "Kidneys", "Heart"],
      answer: 3
    },
    {
      question: "How many bones are there in the adult human body?",
      options: ["206", "208", "210", "212"],
      answer: 0
    },
    {
      question: "What is the name of the longest bone in the human body?",
      options: ["Humerus", "Femur", "Tibia", "Radius"],
      answer: 1
    },
    {
      question: "Which is the fastest land animal?",
      options: ["Lion", "Horse", "Cheetah", "Elephant"],
      answer: 2
    },
    
    // More General Knowledge
    {
      question: "What is the national sport of Canada?",
      options: ["Soccer", "Cricket", "Ice Hockey", "Rugby"],
      answer: 2
    },
    {
      question: "In which city is the famous statue of Christ the Redeemer located?",
      options: ["Rome", "Rio de Janeiro", "Lisbon", "Athens"],
      answer: 1
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Mount Fuji"],
      answer: 1
    },
    {
      question: "What is the official language of Brazil?",
      options: ["Spanish", "Portuguese", "French", "English"],
      answer: 1
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      answer: 2
    }
  ];
  
  // Current question set and other variables
// let questions = [];
// let currentQuestionSet = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let selectedAnswer = null;

// Randomize the questions from the original set
function shuffleQuestions() {
  return originalQuestions.sort(() => Math.random() - 0.5).slice(0, 10); // Select 10 random questions
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    currentQuestion.options.forEach((option, index) => {
      const optionElement = document.getElementById(`option${index}`);
      optionElement.textContent = option;
      optionElement.classList.remove('selected');
      if (userAnswers[currentQuestionIndex] === index) {
        optionElement.classList.add('selected');
      }
    });
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    document.getElementById('next-btn').style.display = 'none'; 
    document.getElementById('result-container').style.display = 'none';
  }
  

  function selectAnswer(optionIndex) {
    document.querySelectorAll('.option').forEach(btn => btn.classList.remove('selected'));
    document.getElementById(`option${optionIndex}`).classList.add('selected');
    userAnswers[currentQuestionIndex] = optionIndex;
    selectedAnswer = optionIndex;
    document.getElementById('next-btn').style.display = 'inline-block';
  }
  

  function nextQuestion() {
    if (selectedAnswer !== null) {
      currentQuestionIndex++;
      if (currentQuestionIndex >= questions.length) {
        showResult();
      } else {
        loadQuestion();
      }
    }
  }
  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion();
    }
  }
  

  function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    score = userAnswers.reduce((acc, answer, index) => acc + (answer === questions[index].answer ? 1 : 0), 0);
    const resultText = `You scored ${score} out of ${questions.length}`;
    document.getElementById('result').textContent = resultText;
  }
  

  function retryQuiz() {
    questions = shuffleQuestions(); // Shuffle and select new questions
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = Array(questions.length).fill(null);
    selectedAnswer = null;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    loadQuestion();
  }
  

// Initialize the quiz with a random set of questions
questions = shuffleQuestions();
loadQuestion();