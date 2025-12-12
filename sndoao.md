<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Honk&family=Pacifico&family=Roboto:ital,wght@0,100..900;1,100..900&family=Splash&display=swap"
      rel="stylesheet"
    />
    <title>Trivia Games for ochen da</title>
  </head>
  <body class="cool">
    <h1 class="hero">Trivia project for ochen da</h1>
    <button class="gradeBtn">Grade Quiz</button>
    <section class="container"></section>
    <script type="module" src="src/main.js"></script>
  </body>
</html>

async function getDatar(poke) {
try {
//get data from API
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
if (response.status != 200) {
throw new Error(response);
} else {
//converts response into json we can use
const data = await response.json();
document.getElementById("api-response").textContent = data.name;
}
} catch (error) {
console.log(error);
}
}

getData("Squirtle");
