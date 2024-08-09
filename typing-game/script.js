// Array containing quotes for the typing game
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
    'The world is full of obvious things which nobody by any chance ever observes.',
    'It is a capital mistake to theorize before one has data.',
    'The best way to keep a secret is to tell no one.',
    'To a great mind, nothing is little.',
    'You see, but you do not observe. The distinction is clear.',
    'There is nothing more important than a good, safe, secure home.',
    'A man who is a master of patience is a master of everything else.',
    'It is not enough to be busy; so are the ants. The question is: What are we busy about?',
    'The truth is rarely pure and never simple.',
];

// Initialize variables to store the list of words and track the player's position
let words = [];
let wordIndex = 0;
let startTime = Date.now();

// Page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

// Event listener for the start button
document.getElementById('start').addEventListener('click', () => {
    // Select a random quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];

    // Split the quote into words
    words = quote.split(' ');

    // Reset the word index for tracking
    wordIndex = 0;

    // Update the UI
    // Create an array of span elements for each word
    const spanWords = words.map(function(word) { return `<span> ${word} </span>`; });

    // Convert the array into a string and set as innerHTML on quoteElement
    quoteElement.innerHTML = spanWords.join('');

    // Highlight the first word
    quoteElement.childNodes[0].className = 'highlight';

    // Clear any prior messages
    messageElement.innerText = '';

    // Setup the textbox
    typedValueElement.value = '';  // Clear the textbox
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