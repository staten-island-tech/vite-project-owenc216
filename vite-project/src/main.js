import "./style.css";
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
const answerset = [
  {
    question: "What is the capital city of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
    category: "General Knowledge",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    category: "Science",
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
    correctAnswer: "Leonardo da Vinci",
    category: "Entertainment",
  },
  {
    question: "What is the largest mammal on Earth?",
    choices: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue whale",
    category: "Science",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Gold", "Osmium", "Oxide"],
    correctAnswer: "Oxygen",
    category: "Science",
  },
  {
    question: "What is the fastest land animal?",
    choices: ["Cheetah", "Lion", "Gazelle", "Leopard"],
    correctAnswer: "Cheetah",
    category: "Science",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    choices: ["China", "Brazil", "Russia", "Japan"],
    correctAnswer: "Brazil",
    category: "General Knowledge",
  },
  {
    question: "How many continents are there on Earth?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: "7",
    category: "General Knowledge",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    choices: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: "Diamond",
    category: "Science",
  },
  {
    question: "What is the chemical formula for water?",
    choices: ["CO₂", "H₂O", "HO₂", "H₂O₂"],
    correctAnswer: "H₂O",
    category: "Science",
  },
  {
    question: "Who played Jack in Titanic?",
    choices: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Johnny Depp"],
    correctAnswer: "Leonardo DiCaprio",
    category: "Entertainment",
  },
  {
    question: "Which TV show features a coffee shop called Central Perk?",
    choices: ["Friends", "How I Met Your Mother", "Seinfeld", "The Office"],
    correctAnswer: "Friends",
    category: "Entertainment",
  },
  {
    question: "Who is known as the 'King of Pop'?",
    choices: [
      "Michael Jackson",
      "Elvis Presley",
      "Prince",
      "Justin Timberlake",
    ],
    correctAnswer: "Michael Jackson",
    category: "Entertainment",
  },
  {
    question: "Which Marvel movie was the first to feature Black Panther?",
    choices: [
      "Black Panther",
      "Captain America: Civil War",
      "Avengers: Infinity War",
      "Iron Man 3",
    ],
    correctAnswer: "Captain America: Civil War",
    category: "Entertainment",
  },
  {
    question: "Which Disney movie features the song 'Let It Go'?",
    choices: ["Tangled", "Moana", "Frozen", "Encanto"],
    correctAnswer: "Frozen",
    category: "Entertainment",
  },
  {
    question: "What is the longest river in the world?",
    choices: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    correctAnswer: "Nile River",
    category: "General Knowledge",
  },
  {
    question: "Mount Everest is located in which mountain range?",
    choices: ["Himalayas", "Andes", "Rockies", "Alps"],
    correctAnswer: "Himalayas",
    category: "General Knowledge",
  },
  {
    question: "Which ocean is the largest?",
    choices: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
    category: "General Knowledge",
  },
  {
    question: "Which country has the most people?",
    choices: ["USA", "China", "India", "Russia"],
    correctAnswer: "China",
    category: "General Knowledge",
  },
  {
    question:
      "Which animal is on the Australian coat of arms alongside the emu?",
    choices: ["Koala", "Kangaroo", "Wombat", "Platypus"],
    correctAnswer: "Kangaroo",
    category: "General Knowledge",
  },
  {
    question: "What planet is closest to the sun?",
    choices: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury",
    category: "Science",
  },
  {
    question: "What is the main gas found in the air we breathe?",
    choices: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Nitrogen",
    category: "Science",
  },
  {
    question: "Who is credited with inventing the telephone?",
    choices: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Guglielmo Marconi",
    ],
    correctAnswer: "Alexander Graham Bell",
    category: "General Knowledge",
  },
  {
    question: "How many bones are in the adult human body?",
    choices: ["202", "206", "210", "201"],
    correctAnswer: "206",
    category: "Science",
  },
  {
    question: "Which planet has the most moons?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
    category: "Science",
  },
  {
    question: "Who was the first President of the United States?",
    choices: [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson",
      "John Adams",
    ],
    correctAnswer: "George Washington",
    category: "General Knowledge",
  },
  {
    question: "In which year did World War II end?",
    choices: ["1944", "1945", "1946", "1947"],
    correctAnswer: "1945",
    category: "General Knowledge",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen",
    ],
    correctAnswer: "William Shakespeare",
    category: "Entertainment",
  },
  {
    question: "What ancient civilization built the pyramids?",
    choices: ["Romans", "Egyptians", "Greeks", "Mayans"],
    correctAnswer: "Egyptians",
    category: "General Knowledge",
  },
  {
    question:
      "The Great Wall of China was built primarily to protect against whom?",
    choices: ["Persians", "Mongols", "Japanese", "Russians"],
    correctAnswer: "Mongols",
    category: "General Knowledge",
  },
];
function inject(answerset) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
        <h2 class="card-header">${answerset.question}</h2>
        <h3 class="card-img" src="${answerset.choices}"/>
        <h4 class="card-price">$${answerset.correctAnswer}</h4>
      </div>`
  );
}
let id = 0;
answerset.forEach((item) => inject(item));
function filterCard() {
  const tabs = document.querySelectorAll("[data-category]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".card").forEach((card) => card.remove());
      const category = tab.getAttribute("data-category");
      if (category !== "All") {
        const filters = answerset.filter(
          (answerset) => answerset.category === category
        );
        filters.forEach((answerset) => inject(answerset));
      } else {
        answerset.forEach((answerset) => inject(answerset));
      }
      addToCart();
    });
  });
}
filterCard(); /* cd vite-project
npm run dev */
