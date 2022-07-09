// DOM Elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endgameElement = document.getElementById("end-game");
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
    }
})