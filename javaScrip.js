// CURRENT WEATHER
function temperature(response) {
  console.log(response.data.temperature.current);
  let tempelement = document.querySelector("#temp");
  let temp = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  tempelement.innerHTML = temp;
}

// FORM FUNCTION
function search(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#city-Name");
  let city = inputElement.value;
  //waether API
  let apikey = "btad2798317eea8fb2a646fa879ofa05";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
  axios.get(apiUrl).then(temperature);
}

// WEATHER FOCUST
// function monday(response) {
//   console.log(response.data.temperature.forecas);
//   let mondayElement = document.querySelector("#first");
//   let first = Math.round(response.data.temperature.forecast);
//   mondayElement.innerHTML = first;
// }
// function weatherForecast(event) {
//   event.preventDefault();
//   let inputElement = document.querySelector("#city-Name");
//   let city = inputElement.value;
//   let apikey = "btad2798317eea8fb2a646fa879ofa05";
//   let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apikey}`;
//   axios.get(apiUrl).then(monday);
// }
let form = document.querySelector("#search-City");
form.addEventListener("submit", search);

let now = new Date();
// let h3 = document.querySelector("h3");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
//we selected the h3 using its ID
document.getElementById(
  "currentDate"
).innerHTML = `${day}, ${date} ${month} ${year}, ${hours}:${minutes} `;

//FUNCTION FOR DATES
