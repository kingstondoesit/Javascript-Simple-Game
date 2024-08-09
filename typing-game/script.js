import { quotes } from './modules/quotes.js';

// Initialize variables to store the list of words and track the player's position
let words = [];
let wordIndex = 0;
let startTime = Date.now();

// Page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const promptStart = document.getElementById('prompt_start')
const promptAgain = document.getElementById('prompt_again')

//Hide promptAgain by default
promptAgain.className = 'none' 

//Input field disabled by default
typedValueElement.disabled = true;

// Disable autocomplete and add a placeholder
typedValueElement.setAttribute('autocomplete', 'off');

// Event listener for the start button
document.getElementById('start').addEventListener('click', () => {
    // Select a random quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];

    // Split the quote into words
    words = quote.split(' ');

    // Reset the word index for tracking
    wordIndex = 0;

    /* Update the UI
    Create an array of span elements for each word
    */
    // const spanWords = words.map(function(word) { return `<span> ${word} </span>`; });
    
    const spanWords = words.map(word => `<span> ${word} </span>`);

    //Hide prompt message
    promptAgain.className = 'none'
    promptStart.className = 'none'

    // Convert the array into a string and set as innerHTML on quoteElement
    quoteElement.innerHTML = spanWords.join('');

    //transform quote text by adding text formatting class
    quoteElement.classList.add('quote')

    // Highlight the first word
    quoteElement.childNodes[0].className = 'highlight';

    // Clear any prior messages
    messageElement.innerText = '';

    // Setup the textbox
    typedValueElement.value = '';  // Clear the textbox

    //Enable input field
    typedValueElement.disabled = false;

    typedValueElement.focus();  // Focus on the textbox

    // Start the timer
    startTime = new Date().getTime();
});

// Event listener for user input in the textbox
typedValueElement.addEventListener('input', () => {
    // Get the current word and the value the user has typed
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        // End of the quote
        // Display success message
        const elapsedTime = new Date().getTime() - startTime;
        const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;

        // //Remove Event listener
        // typedValueElement.removeEventListener('input', onInput)

        typedValueElement.disabled = true; //Disables input field on completion

        //Show prompt message to play again
        promptAgain.className = '';

    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        // End of the current word
        // Clear the textbox for the next word
        typedValueElement.value = '';

        // Move to the next word
        wordIndex++;

        // Reset the class name for all words in the quote
        for (const wordElement of quoteElement.children) {
            wordElement.className = '';
        }

        // Highlight the new word
        quoteElement.children[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
        // Correct typing so far
        // Clear any error styling
        typedValueElement.className = '';
    } else {
        // Error state
        // Add error styling
        typedValueElement.className = 'error';
    }
});