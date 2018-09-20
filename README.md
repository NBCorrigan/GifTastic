# GifTastic
Giphy API and JavaScript/jQuery
![DemoPic](./assets/demo.png)<br>
## Live Link
-  Live demo: <a href="https://nbcorrigan.github.io/GifTastic/">https://nbcorrigan.github.io/GitTastic</a>

## Requirements
- Generate a set of buttons based on an array of related strings
- Allow user to create new button based on text input
- Generate a set of gif images based on which button is being clicked
- Initialize gif's as stills but allow for animation once clicked

## Technologies Used
- Giphy API
- AJAX
- JavaScript
- jQuery for DOM manipulation
- HTML
- CSS

## Code Explanation
- Buttons are dynamically generated using jQuery, an array, and a for-loop
- Depending on the button clicked, that will send out an AJAX call using the appropriate query to Giphy (certain parameters must be passed in such as the search term, number of responses, and an API key)
- Given the JSON response object, we must then parse through it to display in the HTML using jQuery and the general principle of DOM manipulation
- HTML and CSS were used to style and give the page its basic structure
