function translateWord() {
    const word = document.getElementById('englishWord').value;
    let translation = '';

    // Example translation logic (you can enhance it or connect it with an API for actual translations)
    if (word.toLowerCase() === 'hello') {
        translation = 'سلام (Dari)';
    } else if (word.toLowerCase() === 'apple') {
        translation = 'سیب (Dari)';
    } else {
        translation = 'Translation not found.';
    }

    document.getElementById('translationResult').innerHTML = 'Translation: ' + translation;
}

function showDariTranslation() {
    document.getElementById('dariTranslation').classList.toggle('hidden');
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="question1"]:checked');
    const result = document.getElementById('quizResult');

    if (selectedOption) {
        if (selectedOption.value === 'went') {
            result.textContent = 'Correct! The past tense of "go" is "went".';
            result.style.color = 'green';
        } else {
            result.textContent = 'Incorrect. The correct answer is "went".';
            result.style.color = 'red';
        }
    } else {
        result.textContent = 'Please select an answer.';
        result.style.color = 'orange';
    }
}
// JavaScript function to toggle the word list visibility
function toggleVocabulary() {
    var wordList = document.getElementById("wordList");
    var button = document.querySelector(".toggle-btn");

    if (wordList.style.display === "none") {
        wordList.style.display = "block";  // Show the word list
        button.textContent = "Hide Vocabulary";  // Change button text
    } else {
        wordList.style.display = "none";  // Hide the word list
        button.textContent = "Show Vocabulary";  // Change button text
    }
}
// JavaScript function to toggle the word list visibility
function toggleVocabulary() {
    var wordList = document.getElementById("wordList");
    var button = document.querySelector(".toggle-btn");

    if (wordList.style.display === "none") {
        wordList.style.display = "block";  // Show the word list
        button.textContent = "Hide Vocabulary";  // Change button text
    } else {
        wordList.style.display = "none";  // Hide the word list
        button.textContent = "Show Vocabulary";  // Change button text
    }
}
// Function to show words for the selected letter
function showWords(letter) {
    // Hide all word categories
    var categories = document.querySelectorAll('.word-category');
    categories.forEach(function(category) {
        category.style.display = 'none';
    });

    // Show the selected letter category
    var selectedCategory = document.getElementById(letter);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}

