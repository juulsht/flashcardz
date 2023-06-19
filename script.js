let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const flashcardFront = document.getElementById("flashcard-front");
const flashcardBack = document.getElementById("flashcard-back");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const nextCardBtn = document.getElementById("nextCardBtn");


const wordsFromStorage = JSON.parse(localStorage.getItem('tasks')) || [];

const flashcards = [];
for(let i = 0; i < wordsFromStorage.length; i++)
{
  flashcards.push({front: wordsFromStorage[i].title, back: wordsFromStorage[i].description });
}

let currentCardIndex = 0;


function showFlashcard() {
  const currentCard = flashcards[currentCardIndex];
  flashcardFront.textContent = currentCard.front;
  flashcardBack.textContent = currentCard.back;
}


showAnswerBtn.addEventListener("click", function () {
  flashcard.classList.toggle("flipped");
});


nextCardBtn.addEventListener("click", function () {
  flashcard.classList.remove("flipped");
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  showFlashcard();
});


showFlashcard();
