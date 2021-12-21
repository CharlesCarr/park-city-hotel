// Get submit html
// const bookButtons = document.getElementsByClassName('bookButton');
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const backButton = document.getElementById('backButton');

// Add click event and event variable
buttonOne.addEventListener("click", goToBookOne);
buttonTwo.addEventListener("click", goToBookTwo);
backButton.addEventListener("click", goToFrontPage);


// Another option that I found on Stack Overflow
/*
You need to use querySelectorAll which will return a collection.
Now use spread operator (three dots) to convert it to array and 
use forEach .Inside forEach callback add the event listener to it

[...document.querySelectorAll('.breakdown')].forEach(function(item) {
  item.addEventListener('click', function() {
    console.log(item.innerHTML);
  });
   });
*/

// function goToBook() {
//     // index.html is the new page that I want the user to be redirected to
//     document.location = "index.html";
// };

function goToFrontPage() {
    // index.html is the new page that I want the user to be redirected to
    document.location = "frontPage.html";
};


// if buttonOne is clicked save something to a variable that can then be used as intel for next js file 
// (could easily do this with two separate functions - how can I do this by keeping just one)
// Will do two for now just to see it work
let roomTracker = 0;

// export function goToBookOne() {
function goToBookOne() {
  // index.html is the new page that I want the user to be redirected to
  document.location = "index.html";
  roomTracker = 1;
  // return roomTracker;
};

// if buttonOne is clicked save something to a variable that can then be used as intel for next js file 
// (could easily do this with two separate functions - how can I do this by keeping just one)
// export function goToBookTwo() {
function goToBookTwo() {
  // index.html is the new page that I want the user to be redirected to
  document.location = "index.html";
  roomTracker = 2;
  // return roomTracker;
};


// Display Dates from Front Page - selected by user and called within the submit

// Get the html div to display
// const dates = document.getElementById('datesDisplay');

// function displayDates() {
//   console.log('working');
//   dates.innerHTML = 'test';
	
// };
