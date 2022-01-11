// 1. JS dealing with OpenWeather API

const weatherDisplay = document.getElementById("weather-display");

// Will need to secure for final website once on GitHub but fine for now
const apiKey = "c46b2154ee8e0012c90397bf9c7b0460";
const cityId = 5779451;

// {
//     "id": 5779451,
//     "name": "Park City",
//     "state": "UT",
//     "country": "US",
//     "coord": {
//         "lon": -111.497971,
//         "lat": 40.646061
//     }

function fetchResults() {
  // Assemble the full URL
  let url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;

  // Use fetch() to make the request to the API
  // fetch(url)
  //     .then(function(result) {
  //     return result.json();
  // }).then(function(json){
  //     displayResults(json);
  // });

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      let tempK = data.main.temp;
      let tempF = Math.round((tempK - 273.15) * (9 / 5) + 32);
      // console.log(tempF);
      weatherDisplay.innerHTML = `Current Temp: ${tempF}°F <br> (Park City)`;
    })
    .catch(console.err);
}

fetchResults();

// API FOR GOOGLE MAPS BELOW
// let map: google.maps.Map;

// function initMap(): void {
//   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center: ,
//     zoom: 8,
//   });
// }

// map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });

function initMap() {
  // Map option (parameters for 'Map')
  let options = {
    center: { lat: 40.646061, lng: -111.497971 },
    zoom: 15,
  };

  // New map
  map = new google.maps.Map(document.getElementById("map"), options);

  // Marker
  const marker = new google.maps.Marker({
    position: { lat: 40.646061, lng: -111.497971 },
    map: map,
    icon: "./images/3440906_map_marker_navigation_pin_icon (1).png",
  });
}

// 2. JS dealing with large image timer rotations
const slideOne = document.getElementById("slide-one");
const slideTwo = document.getElementById("slide-two");
const slideThree = document.getElementById("slide-three");
const slideFour = document.getElementById("slide-four");
const slideList = document.getElementsByClassName("slide");

// Grab the HTML element for the image
let background = document.getElementById("large-image");

// Variable for tracker to use in change() function
let background_tracker = "image-one";

// Using new technique from youtube video on changing the opacity to then be able to have smoother transition
document.getElementById("btn-one").addEventListener("click", displayImageOne);
document.getElementById("btn-two").addEventListener("click", displayImageTwo);
document
  .getElementById("btn-three")
  .addEventListener("click", displayImageThree);
document.getElementById("btn-four").addEventListener("click", displayImageFour);

function displayImageOne() {
  for (let i = 0; i < slideList.length; i++) {
    if (slideList[i].classList.contains("active")) {
      slideList[i].classList.remove("active");
    }
  }
  slideOne.classList.add("active");
  background_tracker = "image-one";
}

function displayImageTwo() {
  // remove dataset from (any image)
  // if image two does not have the class active then remove it from whatever slide has it
  // what is the best way to do this?
  // for loop to loop through all of the slides with class and if that specific one has a class of active then remove that attribute
  for (let i = 0; i < slideList.length; i++) {
    if (slideList[i].classList.contains("active")) {
      slideList[i].classList.remove("active");
    }
  }
  // add active class to image two
  slideTwo.classList.add("active");
  background_tracker = "image-two";
}

function displayImageThree() {
  for (let i = 0; i < slideList.length; i++) {
    if (slideList[i].classList.contains("active")) {
      slideList[i].classList.remove("active");
    }
  }
  slideThree.classList.add("active");
  background_tracker = "image-three";
}

function displayImageFour() {
  for (let i = 0; i < slideList.length; i++) {
    if (slideList[i].classList.contains("active")) {
      slideList[i].classList.remove("active");
    }
  }
  slideFour.classList.add("active");
  background_tracker = "image-four";
}

// Write a function for the timer to change the image to other images
function change() {
  if (background_tracker == "image-one") {
    displayImageTwo();
    background_tracker = "image-two";
  } else if (background_tracker == "image-two") {
    displayImageThree();
    background_tracker = "image-three";
  } else if (background_tracker == "image-three") {
    displayImageFour();
    background_tracker = "image-four";
  } else if (background_tracker == "image-four") {
    displayImageOne();
    background_tracker = "image-one";
  }
}
let timer = setInterval(change, 8000);

// Get submit html
const submit = document.getElementById("submit");
const bookButton = document.getElementById("bookButton");

// Add click event and event variable
submit.addEventListener(
  "click",
  function (event) {
    // Prevent the default action of any event, but in this case, stop the form from submitting data
    event.preventDefault();

    // index.html is the new page that I want the user to be redirected to
    window.location = "roomPage.html";
  },
  false
);

// Add click event and event variable
bookButton.addEventListener("click", function () {
  // index.html is the new page that I want the user to be redirected to
  window.location = "roomPage.html";
});
