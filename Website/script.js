// Find the HTML elements we need
const catImageElement = document.getElementById('catImage');
const newCatButtonElement = document.getElementById('newCatButton');

// This function gets a new cat image URL and puts it on the page
function loadNewCatImage() {
    // The base address for cat pictures
    const catApiUrl = 'https://cataas.com/cat';

    // Construct the new URL. Uses backticks (` `).
    // It combines the base address with "?random=" and the current time.
    // THIS IS THE CORRECT LINE:
    const uniqueUrl = `${catApiUrl}?random=${new Date().getTime()}`;

    // Tell the image element to load the picture from the new unique URL
    if (catImageElement) {
         catImageElement.src = uniqueUrl;
         console.log("Attempting to load:", uniqueUrl); // Added for checking
    } else {
         console.error("Error: Cannot find the image element with id='catImage'");
    }
}

// Make the button call our function when clicked
if (newCatButtonElement) {
    newCatButtonElement.addEventListener('click', loadNewCatImage);
} else {
    console.error("Error: Cannot find the button element with id='newCatButton'");
}

// Load the very first cat image when the page opens
loadNewCatImage();