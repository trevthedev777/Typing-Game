// DOM Elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endgameElement = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words for game
// fetch('https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
const words = [
    "sigh",
    "tyrant",
    "religion",
    "combustion",
    "significent",
    "astounding",
    "wretched",
    "epitome",
    "antonym",
    "delicious",
    "expansion",
    "delight",
    "positivity",
    "enquiry",
    "anonymous",
    "tretcherous",
    "government",
    "universal",
    "philosophy",
    "joystick",
];

// Init Word
let randomWord;

// Init Score
let score= 0;

// Init time
let time = 10;

// Focus on Input on start
text.focus();

// Start Counting Down
const timeInterval = setInterval(updateTime, 1000); // set Interval starts the time at 1 second and calls the function

// Functions

// Generate Random Word from Array
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
};

// add word to DOM
function addWordToDom() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// Update Score
function updateScore() {
    score++;
    scoreElement.innerHTML = score;
};

// Update Time
function updateTime() {
    time--;
    timeElement.innerHTML = time + "s";

    if (time === 0) {
        clearInterval(timeInterval);
        // End Game
        gameOver();
    }
};

// Game Over, Show End Screen
function gameOver() {
    endgameElement.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
    `;

    endgameElement.style.display = "flex";
};

addWordToDom();

console.log(getRandomWord())

// Event Listeners
text.addEventListener("input", e => {
    const insertedText = e.target.value;
    

    if (insertedText === randomWord) {
        addWordToDom();
        updateScore();
        // Clear
        e.target.value = "";

        time += 5; // shorthand for append is +=

        updateTime();
    }
});