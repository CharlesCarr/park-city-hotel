// Select Inputs
const guestInformationForm = document.getElementById("guestInformationForm");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const zip = document.getElementById("zip");
const city = document.getElementById("city");
const state = document.getElementById("state");
const stateOption = document.getElementById("stateOption");
const roomSelected = document.getElementById("roomSelected");

// Array of US State abbreviations
const stateAbbreviations = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

// Adding event listener when form is submitted
guestInformationForm.addEventListener("submit", (e) => {
  // will not submit the form
  e.preventDefault();

  // call function to check inputs
  checkInputs();
  checkState();
});

function checkInputs() {
  // trim to remove the whitespaces on either ends (not between)
  // firstname, lastname, email
  const firstNameValue = fName.value.trim();
  const lastNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const addressValue = address.value.trim();
  const zipValue = zip.value.trim();
  const cityValue = city.value.trim();

  if (firstNameValue === "") {
    setErrorFor(fName, "First Name cannot be blank");
  } else {
    setSuccessFor(fName);
  }

  if (lastNameValue === "") {
    setErrorFor(lName, "Last Name cannot be blank");
  } else {
    setSuccessFor(lName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone cannot be blank");
  } else if (!isPhone(phoneValue)) {
    setErrorFor(phone, "Not a valid phone number");
  } else {
    setSuccessFor(phone);
  }

  if (addressValue === "") {
    setErrorFor(address, "Address cannot be blank");
  } else {
    setSuccessFor(address);
  }

  if (zipValue === "") {
    setErrorFor(zip, "Zip cannot be blank");
  } else if (!isZip(zipValue)) {
    setErrorFor(zip, "Not a valid zip code");
  } else {
    setSuccessFor(zip);
  }

  if (cityValue === "") {
    setErrorFor(city, "City cannot be blank");
  } else {
    setSuccessFor(city);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Function to determine valid email from regex
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
// Function to determine valid phone number from regex
function isPhone(phone) {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
    phone
  );
}
// Function to determine valid zip code from regex
function isZip(zip) {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
}

// Adding state abbreviations to the list of options for drop down
function addStates(arr) {
  // for loop to loop through the state abbreviation array
  for (let i in arr) {
    // Create option element for each
    // .createElement()
    let opt = document.createElement("option");
    opt.innerHTML = arr[i];
    // .appendChild()
    state.appendChild(opt);
  }
}
addStates(stateAbbreviations);

// Individual Validation for State b/c not input field
function checkState() {
  let e = document.getElementById("state");
  let stateOptionValue = e.options[e.selectedIndex].value;
  console.log(stateOptionValue);

  if (stateOptionValue === "Select State") {
    // appropriately select the form
    const formControl = state.parentElement;
    const smallState = document.getElementById("errorState");
    // Add error class to form control
    formControl.className = "form-control error";
    smallState.innerText = "Please select a state";
    e.style.borderColor = "#e74c3c";
  } else {
    e.style.borderColor = "#2ecc71";
    const formControl = state.parentElement;
    formControl.classList.remove("error");
    formControl.classList.add("success");
    const smallState = document.getElementById("errorState");
    smallState.innerText = "Please select";
    console.log("All good");
  }
}

// Simple back button click event to return back to the front page HTML
const backButton = document.getElementById("backButton");

// Add click event and event variable
backButton.addEventListener(
  "click",
  function () {
    // index.html is the new page that I want the user to be redirected to
    window.location = "roomPage.html";
  },
  false
);
