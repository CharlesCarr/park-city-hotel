// 1. JS dealing with OpenWeather API

const weatherDisplay = document.getElementById('weather-display');

// Will need to secure for final website once on GitHub but fine for now
const apiKey = 'c46b2154ee8e0012c90397bf9c7b0460';
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
    let url = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;

    // Use fetch() to make the request to the API
    // fetch(url)
    //     .then(function(result) {
    //     return result.json();
    // }).then(function(json){
    //     displayResults(json);
    // });

        fetch(url)
            .then(response => {
                if(!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then(data => {
                let tempK = data.main.temp;
                let tempF = Math.round((tempK - 273.15) * (9/5) + 32);
                console.log(tempF);
                weatherDisplay.innerHTML = `Current Temp: ${tempF}°F <br> (Park City)`

            })
            .catch(console.err);
}

// Function to display the data to the HTML file - visible UI
// function displayResults(json) {
//     console.log(json);
// }

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
        zoom: 15
    }
    
    // New map
    map = new google.maps.Map(document.getElementById('map'), options);

    // Marker
    const marker = new google.maps.Marker({
        position: { lat: 40.646061, lng: -111.497971 },
        map: map,
        icon: "./3440906_map_marker_navigation_pin_icon (1).png"
    });


}

















// 2. JS dealing with large image timer rotations
const slideOne = document.getElementById('slide-one');
const slideTwo = document.getElementById('slide-two');
const slideThree = document.getElementById('slide-three');
const slideFour = document.getElementById('slide-four');
const slideList = document.getElementsByClassName('slide');


// Grab the HTML element for the image
let background = document.getElementById('large-image');

// Variable for tracker to use in change() function
let background_tracker = 'image-one';


// Using new technique from youtube video on changing the opacity to then be able to have smoother transition
document.getElementById('btn-one').addEventListener('click', displayImageOne);
document.getElementById('btn-two').addEventListener('click', displayImageTwo);
document.getElementById('btn-three').addEventListener('click', displayImageThree);
document.getElementById('btn-four').addEventListener('click', displayImageFour);


function displayImageOne() {
    for (let i=0; i<slideList.length; i++) {
        if (slideList[i].classList.contains('active')) {
            slideList[i].classList.remove('active');
        }
    }
    slideOne.classList.add('active');
    background_tracker = 'image-one';

    // clearTimeout(timer);
    // timer();
}

function displayImageTwo() {
    // remove dataset from (any image)
    // if image two does not have the class active then remove it from whatever slide has it
    // what is the best way to do this? 
    // for loop to loop through all of the slides with class and if that specific one has a class of active then remove that attribute
    for (let i=0; i<slideList.length; i++) {
        if (slideList[i].classList.contains('active')) {
            slideList[i].classList.remove('active');
        }
    }
    // add active class to image two
    slideTwo.classList.add('active');
    background_tracker = 'image-two';

//     clearTimeout(timer);
//     setTimeout(timer);
}

function displayImageThree() {
    for (let i=0; i<slideList.length; i++) {
        if (slideList[i].classList.contains('active')) {
            slideList[i].classList.remove('active');
        }
    }
    slideThree.classList.add('active');
    background_tracker = 'image-three';

    // clearTimeout(timer);
    // timer();
}

function displayImageFour() {
    for (let i=0; i<slideList.length; i++) {
        if (slideList[i].classList.contains('active')) {
            slideList[i].classList.remove('active');
        }
    }
    slideFour.classList.add('active');
    background_tracker = 'image-four';

    // clearTimeout(timer);
    // timer();
}

// Write a function for the timer to change the image to other images
function change() {
    
    if (background_tracker == 'image-one') {
        // background.style.backgroundImage = "url('./skiingImage.jpeg')";
        // background.src = './skiingImage.jpeg';
        // background.style.objectPosition = 'center center';
        displayImageTwo();
        background_tracker = 'image-two';
    } else if (background_tracker == 'image-two'){
        // background.style.backgroundImage = "url('./mainStreetSnow.jpeg')";
        // background.src = './mainStreetSnow.jpeg';
        // background.style.objectPosition = 'center bottom';
        displayImageThree();
        background_tracker = 'image-three';
    } else if (background_tracker == 'image-three') {
        // background.style.backgroundImage = "url('./firePitImage.jpeg')";
        // background.src = './firePitImage.jpeg';
        // background.style.objectPosition = 'center center';
        displayImageFour();
        background_tracker = 'image-four'; 
    } else if (background_tracker == 'image-four') {
        displayImageOne();
        background_tracker = 'image-one';
    }
}
let timer = setInterval(change, 8000);



















/*

 

// Click events for the buttons
document.getElementById('btn-one').addEventListener('click', changeToImageOne);
document.getElementById('btn-two').addEventListener('click', changeToImageTwo);
document.getElementById('btn-three').addEventListener('click', changeToImageThree);
document.getElementById('btn-four').addEventListener('click', changeToImageFour);


/* Write a function for
- Red is first slot - represented with first icon
- Blue is second slot - represented with second icon
- Green is third slot - represented with third icon
*/

// function changeColors() {
    // break the setInterval 
    // clearInterval

    // if id is firstIcon 
    // background image is red

    // else if id is secondIcon
    // background image is blue

    // else 
    // background image is green

    // restart interval after switch

// }

/* 

function changeToImageOne() {
    // background.style.backgroundImage = "url('./firePitImage.jpeg')";
    background.src = './firePitImage.jpeg';
    background.style.objectPosition = 'center center';
}
function changeToImageTwo() {
    // background.style.backgroundImage = "url('./skiingImage.jpeg')";
    background.src = './skiingImage.jpeg';
    background.style.objectPosition = 'center center';
}
function changeToImageThree() {
    // background.style.backgroundImage = "url('./mainStreetSnow.jpeg')";
    background.src = './mainStreetSnow.jpeg';
    background.style.objectPosition = 'center bottom';
}
function changeToImageFour() {
    // background.style.backgroundImage = "url('./mainStreetSnow.jpeg')";
    background.src = './mainStreetSnow.jpeg';
    background.style.objectPosition = 'center bottom';
}

*/

// Reservation submit taking the user to another HTML page to fill out the booking form

/* Resource:

https://teamtreehouse.com/community/sending-visitors-to-another-page-on-clicking-on-the-submit-button

*/



// Get submit html
const submit = document.getElementById('submit');
const bookButton = document.getElementById('bookButton');

// Add click event and event variable
submit.addEventListener("click", function(event) {
    // Prevent the default action of any event, but in this case, stop the form from submitting data
    event.preventDefault();

    // displayDates();

    // index.html is the new page that I want the user to be redirected to
    window.location = "roomPage.html";
    
}, false);

// Add click event and event variable
bookButton.addEventListener("click", function() {
    // index.html is the new page that I want the user to be redirected to
    window.location = "roomPage.html";
});


// function displayDate() {
//     console.log('test');
// }








// NEW SECTION - for sidepanel to expand with mouseover or click to display more info/data

// grab both containers for the sidepanels
const weatherContainer = document.getElementById('weather-display');
const promoContainer = document.getElementById('topAd');


weatherContainer.addEventListener('click', expandWeather);
// weatherContainer.addEventListener('mouseover', expandContainer);
promoContainer.addEventListener('click', expandPromo);
// promoContainer.addEventListener('click', closeExpand, false);
// promoContainer.addEventListener('mouseover', expandPromo);



function expandPromo(e) {
    promoContainer.classList.add("expanded");
    promoContainer.style.animation = "none";
    weatherContainer.style.animation = "none";
    // promoContainer.style.pointer = "auto";
    promoContainer.innerHTML = '<a href="#">Promo 1</a><br><a href="#">Promo 2</a><br><a href="#">Promo 3</a>';

    /* Found below on Stack Overflow for allowing two events on same element
        to work after one another */
    e.stopImmediatePropagation();
    this.removeEventListener("click", expandPromo);
    /* closes expand with any click to the document (prob should make an exception 
        for clicking on an a tag for promos) */
    document.onclick = closeExpand;
}



function closeExpand() {
    // alert("Test");
    promoContainer.classList.remove("expanded");
    // Need to figure out how to get this to make the animations reappear and also the correct padding
    // promoContainer.style.animation = "expand";
    // weatherContainer.style.animation = "expand";
    promoContainer.innerHTML = '<a href="#" id="promo">Promotions</a>';
    promoContainer.addEventListener('click', expandPromo);
}

// Will need to build a function using the Weather API to then call it in the expand weather

function expandWeather(e) {
    weatherContainer.classList.add("expanded");
    promoContainer.style.animation = "none";
    weatherContainer.style.animation = "none";
    // weatherContainer.innerHTML = '<a href="#">Promo 1</a><br><a href="#">Promo 2</a><br><a href="#">Promo 3</a>';
    weatherAPIexpanded();

    e.stopImmediatePropagation();
    this.removeEventListener("click", expandWeather);
    document.onclick = closeWeather;
}

function closeWeather() {
    weatherContainer.classList.remove("expanded");
    // Need to figure out how to get this to make the animations reappear and also the correct padding
    // promoContainer.style.animation = "expand";
    // weatherContainer.style.animation = "expand";
    fetchResults();
    weatherContainer.addEventListener('click', expandWeather);
}













// Opening Navigation (similar to Tesla Website)

// Selecting each navigation and the respective hidden menu - adding click event to menu button
// const stayNav = document.getElementById('stayNav').addEventListener('click', openNav);



// const menuButton = document.getElementById('menuButton').addEventListener('click', openNav);
// const hiddenMenu = document.getElementById('flexHiddenMenu');
// const menuClose = document.getElementById('closeOut').addEventListener('click', closeNav);
// const fullContainer = document.getElementById('fullContainer');


// New from w3schools example

/*

function openNav() {
    hiddenMenu.style.height = "5%";
    hiddenMenu.style.zIndex = "99";
    /* In addition to changing the width to make the side menu appear
    I need to change the styling of the background to have a tint to it
    think I can add a i
    */
    // fullContainer.setAttribute('class', 'tint');
    // fullContainer.style.zIndex = "-1";

/*

}

function closeNav() {
    hiddenMenu.style.height = "0";
    hiddenMenu.style.zIndex = "-1";
    fullContainer.removeAttribute('class');
}

*/

