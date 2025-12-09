import "./style.css";
document.querySelector(".modebtn").addEventListener("click", function () {
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
    choiceA: "Perth",
    choiceB: "Canberra",
    choiceC: "Sydney",
    choiceD: "Melbourne",
    correctAnswer: "Canberra",
    category: "General Knowledge",
  },
  {
    question: "How many continents are there on Earth?",
    choiceA: "7",
    choiceB: "5",
    choiceC: "8",
    choiceD: "6",
    correctAnswer: "7",
    category: "General Knowledge",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    choiceA: "Russia",
    choiceB: "Japan",
    choiceC: "Brazil",
    choiceD: "China",
    correctAnswer: "Brazil",
    category: "General Knowledge",
  },
  {
    question: "What is the longest river in the world?",
    choiceA: "Amazon River",
    choiceB: "Yangtze River",
    choiceC: "Mississippi River",
    choiceD: "Nile River",
    correctAnswer: "Nile River",
    category: "General Knowledge",
  },
  {
    question: "Mount Everest is part of which mountain range?",
    choiceA: "Rockies",
    choiceB: "Andes",
    choiceC: "Himalayas",
    choiceD: "Alps",
    correctAnswer: "Himalayas",
    category: "General Knowledge",
  },
  {
    question: "Which ocean is the largest?",
    choiceA: "Indian Ocean",
    choiceB: "Pacific Ocean",
    choiceC: "Atlantic Ocean",
    choiceD: "Arctic Ocean",
    correctAnswer: "Pacific Ocean",
    category: "General Knowledge",
  },
  {
    question: "Which country has the largest population?",
    choiceA: "USA",
    choiceB: "India",
    choiceC: "China",
    choiceD: "Russia",
    correctAnswer: "China",
    category: "General Knowledge",
  },
  {
    question:
      "Which animal appears on the Australian coat of arms along with the emu?",
    choiceA: "Kangaroo",
    choiceB: "Koala",
    choiceC: "Wombat",
    choiceD: "Platypus",
    correctAnswer: "Kangaroo",
    category: "General Knowledge",
  },
  {
    question: "Who was the first President of the United States?",
    choiceA: "Thomas Jefferson",
    choiceB: "John Adams",
    choiceC: "George Washington",
    choiceD: "Abraham Lincoln",
    correctAnswer: "George Washington",
    category: "General Knowledge",
  },
  {
    question: "In which year did World War II end?",
    choiceA: "1946",
    choiceB: "1944",
    choiceC: "1947",
    choiceD: "1945",
    correctAnswer: "1945",
    category: "General Knowledge",
  },
  {
    question: "Which ancient civilization built the pyramids?",
    choiceA: "Romans",
    choiceB: "Mayans",
    choiceC: "Greeks",
    choiceD: "Egyptians",
    correctAnswer: "Egyptians",
    category: "General Knowledge",
  },
  {
    question:
      "The Great Wall of China was built mainly to defend against which group?",
    choiceA: "Persians",
    choiceB: "Japanese",
    choiceC: "Mongols",
    choiceD: "Russians",
    correctAnswer: "Mongols",
    category: "General Knowledge",
  },
  {
    question: "What is the currency used in Japan?",
    choiceA: "USD",
    choiceB: "Yuan",
    choiceC: "Yen",
    choiceD: "Won",
    correctAnswer: "Yen",
    category: "General Knowledge",
  },
  {
    question: "What is the largest country by land area?",
    choiceA: "China",
    choiceB: "Russia",
    choiceC: "USA",
    choiceD: "Canada",
    correctAnswer: "Russia",
    category: "General Knowledge",
  },
  {
    question: "Which city is known as the Big Apple?",
    choiceA: "San Francisco",
    choiceB: "Chicago",
    choiceC: "New York City",
    choiceD: "Los Angeles",
    correctAnswer: "New York City",
    category: "General Knowledge",
  },
  {
    question: "Which continent is the Sahara Desert located on?",
    choiceA: "Africa",
    choiceB: "Australia",
    choiceC: "Asia",
    choiceD: "South America",
    correctAnswer: "Africa",
    category: "General Knowledge",
  },
  {
    question: "What is the official language of Brazil?",
    choiceA: "Spanish",
    choiceB: "Portuguese",
    choiceC: "English",
    choiceD: "French",
    correctAnswer: "Portuguese",
    category: "General Knowledge",
  },
  {
    question: "What is the capital of France?",
    choiceA: "Madrid",
    choiceB: "Paris",
    choiceC: "Rome",
    choiceD: "Berlin",
    correctAnswer: "Paris",
    category: "General Knowledge",
  },
  {
    question: "Which country invented pizza?",
    choiceA: "Greece",
    choiceB: "France",
    choiceC: "Italy",
    choiceD: "USA",
    correctAnswer: "Italy",
    category: "General Knowledge",
  },
  {
    question: "What is the national flower of Japan?",
    choiceA: "Rose",
    choiceB: "Cherry Blossom",
    choiceC: "Sunflower",
    choiceD: "Lotus",
    correctAnswer: "Cherry Blossom",
    category: "General Knowledge",
  },

  // -------------------------
  // 20 SCIENCE
  // -------------------------
  {
    question: "Which planet is known as the Red Planet?",
    choiceA: "Mars",
    choiceB: "Venus",
    choiceC: "Jupiter",
    choiceD: "Saturn",
    correctAnswer: "Mars",
    category: "Science",
  },
  {
    question: "What is the chemical symbol for Oxygen?",
    choiceA: "O",
    choiceB: "Ox",
    choiceC: "Og",
    choiceD: "O₂",
    correctAnswer: "O",
    category: "Science",
  },
  {
    question: "What is the fastest land animal?",
    choiceA: "Leopard",
    choiceB: "Cheetah",
    choiceC: "Gazelle",
    choiceD: "Lion",
    correctAnswer: "Cheetah",
    category: "Science",
  },
  {
    question: "What is the hardest natural substance?",
    choiceA: "Diamond",
    choiceB: "Gold",
    choiceC: "Quartz",
    choiceD: "Iron",
    correctAnswer: "Diamond",
    category: "Science",
  },
  {
    question: "What is the chemical formula for water?",
    choiceA: "H₂O₂",
    choiceB: "CO₂",
    choiceC: "H₂O",
    choiceD: "HO₂",
    correctAnswer: "H₂O",
    category: "Science",
  },
  {
    question: "Which planet is closest to the sun?",
    choiceA: "Venus",
    choiceB: "Mercury",
    choiceC: "Earth",
    choiceD: "Mars",
    correctAnswer: "Mercury",
    category: "Science",
  },
  {
    question: "What gas makes up most of the Earth’s atmosphere?",
    choiceA: "Oxygen",
    choiceB: "Hydrogen",
    choiceC: "Nitrogen",
    choiceD: "Carbon Dioxide",
    correctAnswer: "Nitrogen",
    category: "Science",
  },
  {
    question: "Who invented the telephone?",
    choiceA: "Nikola Tesla",
    choiceB: "Thomas Edison",
    choiceC: "Alexander Graham Bell",
    choiceD: "Guglielmo Marconi",
    correctAnswer: "Alexander Graham Bell",
    category: "Science",
  },
  {
    question: "How many bones are in the adult human body?",
    choiceA: "206",
    choiceB: "210",
    choiceC: "202",
    choiceD: "201",
    correctAnswer: "206",
    category: "Science",
  },
  {
    question: "Which planet has the most moons?",
    choiceA: "Mars",
    choiceB: "Earth",
    choiceC: "Jupiter",
    choiceD: "Saturn",
    correctAnswer: "Jupiter",
    category: "Science",
  },
  {
    question: "What type of animal is a Komodo dragon?",
    choiceA: "Reptile",
    choiceB: "Mammal",
    choiceC: "Bird",
    choiceD: "Amphibian",
    correctAnswer: "Reptile",
    category: "Science",
  },
  {
    question: "What force keeps us on the ground?",
    choiceA: "Friction",
    choiceB: "Gravity",
    choiceC: "Magnetism",
    choiceD: "Inertia",
    correctAnswer: "Gravity",
    category: "Science",
  },
  {
    question: "What organ pumps blood through the body?",
    choiceA: "Heart",
    choiceB: "Lungs",
    choiceC: "Liver",
    choiceD: "Brain",
    correctAnswer: "Heart",
    category: "Science",
  },
  {
    question: "What do bees collect from flowers?",
    choiceA: "Nectar",
    choiceB: "Water",
    choiceC: "Seeds",
    choiceD: "Leaves",
    correctAnswer: "Nectar",
    category: "Science",
  },
  {
    question: "What is the largest planet in the solar system?",
    choiceA: "Jupiter",
    choiceB: "Saturn",
    choiceC: "Neptune",
    choiceD: "Uranus",
    correctAnswer: "Jupiter",
    category: "Science",
  },
  {
    question: "What is the center of an atom called?",
    choiceA: "Proton",
    choiceB: "Electron",
    choiceC: "Nucleus",
    choiceD: "Neutron",
    correctAnswer: "Nucleus",
    category: "Science",
  },
  {
    question: "What gas do plants absorb from the air?",
    choiceA: "Nitrogen",
    choiceB: "Carbon Dioxide",
    choiceC: "Oxygen",
    choiceD: "Hydrogen",
    correctAnswer: "Carbon Dioxide",
    category: "Science",
  },
  {
    question: "What part of the cell contains DNA?",
    choiceA: "Nucleus",
    choiceB: "Ribosome",
    choiceC: "Mitochondria",
    choiceD: "Cytoplasm",
    correctAnswer: "Nucleus",
    category: "Science",
  },
  {
    question: "What is the only metal that is liquid at room temperature?",
    choiceA: "Gold",
    choiceB: "Mercury",
    choiceC: "Silver",
    choiceD: "Copper",
    correctAnswer: "Mercury",
    category: "Science",
  },
  {
    question: "What part of the body controls balance?",
    choiceA: "Cerebellum",
    choiceB: "Cerebrum",
    choiceC: "Lungs",
    choiceD: "Kidneys",
    correctAnswer: "Cerebellum",
    category: "Science",
  },

  // -------------------------
  // 20 ENTERTAINMENT
  // -------------------------
  {
    question: "Who painted the Mona Lisa?",
    choiceA: "Raphael",
    choiceB: "Leonardo da Vinci",
    choiceC: "Michelangelo",
    choiceD: "Donatello",
    correctAnswer: "Leonardo da Vinci",
    category: "Entertainment",
  },
  {
    question: "Who played Jack in Titanic?",
    choiceA: "Brad Pitt",
    choiceB: "Leonardo DiCaprio",
    choiceC: "Johnny Depp",
    choiceD: "Tom Cruise",
    correctAnswer: "Leonardo DiCaprio",
    category: "Entertainment",
  },
  {
    question: "Which TV show features the coffee shop Central Park?",
    choiceA: "Friends",
    choiceB: "The Office",
    choiceC: "Seinfeld",
    choiceD: "How I Met Your Mother",
    correctAnswer: "Friends",
    category: "Entertainment",
  },
  {
    question: "Who is known as the King of Pop?",
    choiceA: "Michael Jackson",
    choiceB: "Prince",
    choiceC: "Elvis Presley",
    choiceD: "Justin Timberlake",
    correctAnswer: "Michael Jackson",
    category: "Entertainment",
  },
  {
    question: "Which movie first introduced Black Panther?",
    choiceA: "Black Panther",
    choiceB: "Captain America: Civil War",
    choiceC: "Infinity War",
    choiceD: "Iron Man 3",
    correctAnswer: "Captain America: Civil War",
    category: "Entertainment",
  },
  {
    question: "Which Disney movie features the song 'Let It Go'?",
    choiceA: "Frozen",
    choiceB: "Moana",
    choiceC: "Tangled",
    choiceD: "Encanto",
    correctAnswer: "Frozen",
    category: "Entertainment",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choiceA: "William Shakespeare",
    choiceB: "Mark Twain",
    choiceC: "Charles Dickens",
    choiceD: "Jane Austen",
    correctAnswer: "William Shakespeare",
    category: "Entertainment",
  },
  {
    question: "Which superhero is also known as the Caped Crusader?",
    choiceA: "Batman",
    choiceB: "Superman",
    choiceC: "Iron Man",
    choiceD: "Spider-Man",
    correctAnswer: "Batman",
    category: "Entertainment",
  },
  {
    question: "Which movie features a DeLorean time machine?",
    choiceA: "Back to the Future",
    choiceB: "Terminator",
    choiceC: "Star Wars",
    choiceD: "Ghostbusters",
    correctAnswer: "Back to the Future",
    category: "Entertainment",
  },
  {
    question: "Who sang the song 'Hello'?",
    choiceA: "Rihanna",
    choiceB: "Adele",
    choiceC: "Beyoncé",
    choiceD: "Taylor Swift",
    correctAnswer: "Adele",
    category: "Entertainment",
  },
  {
    question: "Which franchise features the character Darth Vader?",
    choiceA: "Star Wars",
    choiceB: "Star Trek",
    choiceC: "Marvel",
    choiceD: "DC",
    correctAnswer: "Star Wars",
    category: "Entertainment",
  },
  {
    question: "Which Pokémon is yellow and uses electricity?",
    choiceA: "Pikachu",
    choiceB: "Bulbasaur",
    choiceC: "Charmander",
    choiceD: "Squirtle",
    correctAnswer: "Pikachu",
    category: "Entertainment",
  },
  {
    question: "Which movie features the quote 'Why so serious?'",
    choiceA: "The Dark Knight",
    choiceB: "The Joker",
    choiceC: "Batman Begins",
    choiceD: "Suicide Squad",
    correctAnswer: "The Dark Knight",
    category: "Entertainment",
  },
  {
    question: "In Harry Potter, what house is Harry in?",
    choiceA: "Slytherin",
    choiceB: "Gryffindor",
    choiceC: "Hufflepuff",
    choiceD: "Ravenclaw",
    correctAnswer: "Gryffindor",
    category: "Entertainment",
  },
  {
    question: "Which singer is known as 'Queen of Pop'?",
    choiceA: "Madonna",
    choiceB: "Ariana Grande",
    choiceC: "Billie Eilish",
    choiceD: "Whitney Houston",
    correctAnswer: "Madonna",
    category: "Entertainment",
  },
  {
    question: "Which show features dragons and the Iron Throne?",
    choiceA: "Game of Thrones",
    choiceB: "Vikings",
    choiceC: "The Witcher",
    choiceD: "Lord of the Rings",
    correctAnswer: "Game of Thrones",
    category: "Entertainment",
  },
  {
    question: "Which Pixar movie stars a robot named WALL-E?",
    choiceA: "WALL-E",
    choiceB: "Cars",
    choiceC: "Up",
    choiceD: "Brave",
    correctAnswer: "WALL-E",
    category: "Entertainment",
  },
  {
    question: "Which movie features the song 'Circle of Life'?",
    choiceA: "The Lion King",
    choiceB: "Tarzan",
    choiceC: "Aladdin",
    choiceD: "Mulan",
    correctAnswer: "The Lion King",
    category: "Entertainment",
  },
  {
    question: "What is the name of the toy cowboy in Toy Story?",
    choiceA: "Woody",
    choiceB: "Buzz",
    choiceC: "Jessie",
    choiceD: "Rex",
    correctAnswer: "Woody",
    category: "Entertainment",
  },
  {
    question: "Which classic band sang 'Hey Jude'?",
    choiceA: "The Beatles",
    choiceB: "The Rolling Stones",
    choiceC: "Queen",
    choiceD: "The Beach Boys",
    correctAnswer: "The Beatles",
    category: "Entertainment",
  },
];

function inject(answerset) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-question">${answerset.question}</h2>
        <button class="btnA">${answerset.choiceA}</button>
        <button class="btnB">${answerset.choiceB}</button>
        <button class="btnC">${answerset.choiceC}</button>
        <button class="btnD">${answerset.choiceD}</button>
      </div>`
  );
  const newCard = container.lastElementChild;
  addAnswerListeners(newCard, answerset);
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

let userAnswer = [];
function addAnswerListeners(card) {
  const buttons = card.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("selected");
      });
      btn.classList.add("selected");
      buttons.forEach((b) => {
        if (b.classList.contains("selected")) {
        }
      });
    });
  });
}
document.querySelector(".gradeBtn").addEventListener("click", () => {
  let score = 0;
  document.querySelectorAll(".card").forEach((card) => {
    const questionText = card.querySelector(".card-question").textContent;
    const item = answerset.find((q) => q.question === questionText);
    const buttons = card.querySelectorAll("button");

    buttons.forEach((btn) => {
      const choice = btn.textContent;
      const correct = item.correctAnswer;
      if (choice === correct) {
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
      }
    });
    if (userAnswer[questionText] === item.correctAnswer) {
      score++;
    }
  });
  console.log(score);
});

/* cd vite-project
npm run dev */
/* function addAnswerListeners(card, item) {
  const buttons = card.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.textContent === item.correctAnswer;

      if (isCorrect) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("incorrect");
      }
    });
  });
}
 */
