import "./style.css";
document.querySelector(".Modebtn").addEventListener("click", function () {
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
    choiceA: "Canberra",
    choiceB: "Sydney",
    choiceC: "Melbourne",
    choiceD: "Perth",
    correctAnswer: "Canberra",
    category: "General Knowledge",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choiceA: "Jupiter",
    choiceB: "Mars",
    choiceC: "Venus",
    choiceD: "Saturn",
    correctAnswer: "Mars",
    category: "Science",
  },
  {
    question: "Who painted the Mona Lisa?",
    choiceA: "Michelangelo",
    choiceB: "Leonardo da Vinci",
    choiceC: "Raphael",
    choiceD: "Donatello",
    correctAnswer: "Leonardo da Vinci",
    category: "Entertainment",
  },
  {
    question: "What is the largest mammal on Earth?",
    choiceA: "Blue whale",
    choiceB: "Elephant",
    choiceC: "Giraffe",
    choiceD: "Hippopotamus",
    correctAnswer: "Blue whale",
    category: "Science",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choiceA: "Gold",
    choiceB: "Osmium",
    choiceC: "Oxygen",
    choiceD: "Oxide",
    correctAnswer: "Oxygen",
    category: "Science",
  },
  {
    question: "What is the fastest land animal?",
    choiceA: "Lion",
    choiceB: "Cheetah",
    choiceC: "Gazelle",
    choiceD: "Leopard",
    correctAnswer: "Cheetah",
    category: "Science",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    choiceA: "China",
    choiceB: "Russia",
    choiceC: "Brazil",
    choiceD: "Japan",
    correctAnswer: "Brazil",
    category: "General Knowledge",
  },
  {
    question: "How many continents are there on Earth?",
    choiceA: "6",
    choiceB: "7",
    choiceC: "5",
    choiceD: "8",
    correctAnswer: "7",
    category: "General Knowledge",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    choiceA: "Iron",
    choiceB: "Diamond",
    choiceC: "Gold",
    choiceD: "Quartz",
    correctAnswer: "Diamond",
    category: "Science",
  },
  {
    question: "What is the chemical formula for water?",
    choiceA: "H₂O",
    choiceB: "CO₂",
    choiceC: "HO₂",
    choiceD: "H₂O₂",
    correctAnswer: "H₂O",
    category: "Science",
  },
  {
    question: "Who played Jack in Titanic?",
    choiceA: "Brad Pitt",
    choiceB: "Tom Cruise",
    choiceC: "Leonardo DiCaprio",
    choiceD: "Johnny Depp",
    correctAnswer: "Leonardo DiCaprio",
    category: "Entertainment",
  },
  {
    question: "Which TV show features a coffee shop called Central Perk?",
    choiceA: "How I Met Your Mother",
    choiceB: "Friends",
    choiceC: "Seinfeld",
    choiceD: "The Office",
    correctAnswer: "Friends",
    category: "Entertainment",
  },
  {
    question: "Who is known as the 'King of Pop'?",
    choiceA: "Elvis Presley",
    choiceB: "Michael Jackson",
    choiceC: "Prince",
    choiceD: "Justin Timberlake",
    correctAnswer: "Michael Jackson",
    category: "Entertainment",
  },
  {
    question: "Which Marvel movie was the first to feature Black Panther?",
    choiceA: "Avengers: Infinity War",
    choiceB: "Captain America: Civil War",
    choiceC: "Black Panther",
    choiceD: "Iron Man 3",
    correctAnswer: "Captain America: Civil War",
    category: "Entertainment",
  },
  {
    question: "Which Disney movie features the song 'Let It Go'?",
    choiceA: "Frozen",
    choiceB: "Tangled",
    choiceC: "Moana",
    choiceD: "Encanto",
    correctAnswer: "Frozen",
    category: "Entertainment",
  },
  {
    question: "What is the longest river in the world?",
    choiceA: "Yangtze River",
    choiceB: "Amazon River",
    choiceC: "Nile River",
    choiceD: "Mississippi River",
    correctAnswer: "Nile River",
    category: "General Knowledge",
  },
  {
    question: "Mount Everest is located in which mountain range?",
    choiceA: "Andes",
    choiceB: "Himalayas",
    choiceC: "Rockies",
    choiceD: "Alps",
    correctAnswer: "Himalayas",
    category: "General Knowledge",
  },
  {
    question: "Which ocean is the largest?",
    choiceA: "Atlantic Ocean",
    choiceB: "Indian Ocean",
    choiceC: "Pacific Ocean",
    choiceD: "Arctic Ocean",
    correctAnswer: "Pacific Ocean",
    category: "General Knowledge",
  },
  {
    question: "Which country has the most people?",
    choiceA: "India",
    choiceB: "China",
    choiceC: "USA",
    choiceD: "Russia",
    correctAnswer: "China",
    category: "General Knowledge",
  },
  {
    question:
      "Which animal is on the Australian coat of arms alongside the emu?",
    choiceA: "Wombat",
    choiceB: "Kangaroo",
    choiceC: "Koala",
    choiceD: "Platypus",
    correctAnswer: "Kangaroo",
    category: "General Knowledge",
  },
  {
    question: "What planet is closest to the sun?",
    choiceA: "Venus",
    choiceB: "Earth",
    choiceC: "Mercury",
    choiceD: "Mars",
    correctAnswer: "Mercury",
    category: "Science",
  },
  {
    question: "What is the main gas found in the air we breathe?",
    choiceA: "Oxygen",
    choiceB: "Nitrogen",
    choiceC: "Carbon Dioxide",
    choiceD: "Hydrogen",
    correctAnswer: "Nitrogen",
    category: "Science",
  },
  {
    question: "Who is credited with inventing the telephone?",
    choiceA: "Thomas Edison",
    choiceB: "Alexander Graham Bell",
    choiceC: "Nikola Tesla",
    choiceD: "Guglielmo Marconi",
    correctAnswer: "Alexander Graham Bell",
    category: "General Knowledge",
  },
  {
    question: "How many bones are in the adult human body?",
    choiceA: "210",
    choiceB: "206",
    choiceC: "202",
    choiceD: "201",
    correctAnswer: "206",
    category: "Science",
  },
  {
    question: "Which planet has the most moons?",
    choiceA: "Saturn",
    choiceB: "Earth",
    choiceC: "Mars",
    choiceD: "Jupiter",
    correctAnswer: "Jupiter",
    category: "Science",
  },
  {
    question: "Who was the first President of the United States?",
    choiceA: "Abraham Lincoln",
    choiceB: "George Washington",
    choiceC: "Thomas Jefferson",
    choiceD: "John Adams",
    correctAnswer: "George Washington",
    category: "General Knowledge",
  },
  {
    question: "In which year did World War II end?",
    choiceA: "1947",
    choiceB: "1946",
    choiceC: "1945",
    choiceD: "1944",
    correctAnswer: "1945",
    category: "General Knowledge",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choiceA: "Charles Dickens",
    choiceB: "William Shakespeare",
    choiceC: "Mark Twain",
    choiceD: "Jane Austen",
    correctAnswer: "William Shakespeare",
    category: "Entertainment",
  },
  {
    question: "What ancient civilization built the pyramids?",
    choiceA: "Greeks",
    choiceB: "Romans",
    choiceC: "Egyptians",
    choiceD: "Mayans",
    correctAnswer: "Egyptians",
    category: "General Knowledge",
  },
  {
    question:
      "The Great Wall of China was built primarily to protect against whom?",
    choiceA: "Persians",
    choiceB: "Russians",
    choiceC: "Mongols",
    choiceD: "Japanese",
    correctAnswer: "Mongols",
    category: "General Knowledge",
  },
];

function inject(answerset) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
        <h2 class="card-question">${answerset.question}</h2>
        <h4 class="card-correctAnswer">${answerset.correctAnswer}</h4>
        <button class="btnA">${answerset.choiceA}</button>
        <button class="btnB">${answerset.choiceB}</button>
        <button class="btnC">${answerset.choiceC}</button>
        <button class="btnD">${answerset.choiceD}</button>
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
filterCard();
document.querySelector(".btnA").addEventListener("click", function () {
  if (document.ody.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
/* cd vite-project
npm run dev */
