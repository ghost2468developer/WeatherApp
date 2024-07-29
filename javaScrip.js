// CURRENT WEATHER
function CurrentTemperature(response) {
  console.log(response.data.temperature.current);
  let tempElement = document.querySelector("#temp");
  let temp = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#windS");

  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = `${temp}°C`;
  humidityElement.innerHTML = `Humidity:${response.data.temperature.humidity}%`;
  windElement.innerHTML = `Wind:${response.data.wind.speed} km/h`;

  getWeatherForecast(response.data.city);
}

//FORM FUNCTION(INPUT )
function search(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#city-Name");
  let city = inputElement.value;
  //waether API
  let apikey = "btad2798317eea8fb2a646fa879ofa05";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
  axios.get(apiUrl).then(CurrentTemperature);
}

//WEATHER FORCAST(CURRENT DAY)
function updateCurrentDay(response) {
  let day = response.date.daily;

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days.forEach((day, index) => {
    let currentDayElement = document.querySelector(`#${day}`);
    let currentDay = day[index];
    currentDayElement.innerHTML = `<p>${
      days[index].charAt(0).toLocaleUpperCase() + days[index].slice(1)
    }<br/>
  ${getWeatheIcon(currentDay.condition.icon)}<br/><span>${Math.round(
      currentDay.temperature.min
    )}° ${Math.round(currentDay.temperature.max)}°</span>
  </P>`;
  });
}

//weather icons
function getWeatheIcon(icon) {
  const icons = {
    "clear-sky-day": "☀️",
    "clear-sky-night": "🌕",
    "few-clouds-day": "🌤️",
    "few-clouds-night": "🌥️",
    "shower-rain-day": "🌧️",
    "thunderstorm-day": "⛈️",
    "Clear sky": "",
    "snow-day": "❄️",
  };
  return icons[icon] || "❓";
}

let form = document.querySelector("#search-City");
form.addEventListener("submit", function (event) {
  search(event);
  let inputElement = document.querySelector("city-Name");
  let city = inputElement.value;
  getWeatherForecast(city);
});

//date and time
let now = new Date();
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
).innerHTML = `${day}, ${date} ${month} ${year}, ${hours}:${
  minutes < 10 ? "0" + minutes : minutes
} `;
//function get weather forecast
function getWeatherForecast(city) {
  let apikey = "btad2798317eea8fb2a646fa879ofa05";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apikey}`;
  axios.get(apiUrl).then(displayforecast);
}
//Weather forecast for next 5 days
function displayforecast(response) {
  console.log(response);
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  let forecastHtml = "";
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weekdays-forecast">
    <div class="day-of-week">${day}</div>
    <div class="icon">🌥️</div>
    <div class="forecast-temp">
      <div class="temperature-forecast"><strong>16°</strong></div>
      <div class="temperature-forecast">22°</div>
    </div>
  </div>`;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}
//Initialize with default city

displayforecast();
