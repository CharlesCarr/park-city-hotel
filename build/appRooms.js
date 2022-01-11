// Get submit html
const buttonOne = document.getElementById("button-one");
const buttonTwo = document.getElementById("button-two");
const backButton = document.getElementById("backButton");

// Add click event and event variable
buttonOne.addEventListener("click", goToBook);
buttonTwo.addEventListener("click", goToBook);
backButton.addEventListener("click", goToFrontPage);

function goToBook() {
  // index.html is the new page that I want the user to be redirected to
  document.location = "bookingPage.html";
}

function goToFrontPage() {
  // index.html is the new page that I want the user to be redirected to
  document.location = "index.html";
}