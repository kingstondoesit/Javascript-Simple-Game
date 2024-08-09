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
    'The mind is its own master, and with it, one can conquer any obstacle.',
    'In the darkness of ignorance, knowledge is the only beacon.',
    'To deduce is to dissect, and in dissection, lies the truth.',
    'The curious mind never rests, for it is always in search of the unknown.',
    'Every mystery, however obscure, has its solution waiting to be uncovered.',
    'Logic is the sword, and reason the shield, in the battle against deception.',
    'The smallest detail, when observed, can unravel the grandest of schemes.',
    'A silent mind is not idle, but is contemplating the complexities of the world.',
    'In the maze of facts, only the most discerning can find the way out.',
    'Patience is the cornerstone of every successful investigation.',
    'There is no enigma that cannot be solved by the relentless pursuit of truth.',
    'The world is a puzzle, and it is our duty to piece it together.',
    'What appears ordinary is often the key to understanding the extraordinary.',
    'An unsolved case is merely a challenge waiting to be met.',
    'The truth is often hidden in plain sight, awaiting the perceptive eye.',
    'One must question everything, for certainty is the enemy of discovery.',
    'In every lie, there is a seed of truth waiting to sprout.',
    'The greatest secrets are often found in the most mundane of places.',
    'A mind unburdened by prejudice sees the world in its true colors.',
    'To understand the whole, one must first comprehend the smallest part.',
    'It is often the case that when one path seems closed, another quietly opens, revealing a different truth.',
    'I have found that when the mind is free from distraction, the solution often presents itself with startling clarity.',
    'One must be wary of accepting the obvious, for it is often a veil for something far more intricate.',
    'In my experience, a conclusion reached in haste is usually the farthest from the truth.',
    'There are times when the simplest explanation is the correct one, though it is rarely so at first glance.',
    'The mind, once expanded by knowledge, cannot easily return to ignorance, nor should it.',
    'When confronted with the improbable, it is prudent to consider all possibilities before dismissing them.',
    'It has become clear to me that truth is often buried beneath layers of deception, requiring a sharp mind to uncover.',
    'I have learned that a thorough examination of the facts will often yield a surprising revelation.',
    'In the course of an investigation, one must be prepared to question even the most deeply held assumptions.',
    'The true nature of a thing is often revealed when one takes the time to observe it from a different perspective.',
    'I have often noted that when a theory seems to fall apart, it is usually because a crucial detail has been overlooked.',
    'It is a peculiar fact that the most extraordinary events often have the simplest explanations.',
    'I have found that the greatest insights often come when one is on the brink of abandoning the search.',
    'When the facts do not fit the theory, it is the theory that must be adjusted, not the facts.',
    'I have observed that in the labyrinth of human thought, the most unexpected conclusions are often the correct ones.',
    'In matters of deduction, it is essential to remain open to the possibility that what seems impossible may indeed be true.',
    'One must always be prepared to abandon a cherished hypothesis when the facts no longer support it.',
    'It is a curious thing, but often the most complex problems have the simplest solutions, hidden in plain sight.',
    'In my experience, the most perplexing mysteries are often resolved by the smallest of details, overlooked by the untrained eye.',
];

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