let tasks = JSON.parse(localStorage.getItem("tasks"))     || [];

const flashcardFront = document.getElementById("flashcard-front");
const flashcardBack = document.getElementById("flashcard-back");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const nextCardBtn = document.getElementById("nextCardBtn");

// Define your flashcards with vocabulary, phrases, or grammar rules
const wordsFromStorage = localStorage.getItem('tasks');
const frenchWords = Object.keys(wordsFromStorage); // => return array from the keys

const flashcards = [
  { front: frenchWords, back: wordsFromStorage[0]['description']},
  { front: "Comment ça va?", back: "How are you?" },
  { front: "Je m'appelle", back: "My name is" },
  // Add more flashcards here
];

let currentCardIndex = 0;

// Display the current flashcard
function showFlashcard() {
  const currentCard = flashcards[currentCardIndex];
  flashcardFront.textContent = currentCard.front;
  flashcardBack.textContent = currentCard.back;
}

// Event listener for the "Show Answer" button
showAnswerBtn.addEventListener("click", function () {
  flashcard.classList.toggle("flipped");
});

// Event listener for the "Next Card" button
nextCardBtn.addEventListener("click", function () {
  flashcard.classList.remove("flipped");
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  showFlashcard();
});

// Initialize the app
showFlashcard();