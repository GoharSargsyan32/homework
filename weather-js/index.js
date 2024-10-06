const apiKey = "8b9e2be349e0fae7cb27931765f71e12";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-image i");

async function cheakWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  document.querySelector(".qaxaq").innerHTML = data.name;
  document.querySelector(".erkir").innerHTML = data.sys.country;
  document.querySelector(".celsius").innerHTML =
    Math.round(data.main.temp - 273, 15) + "&#8451";

  if (data.weather[0].main === "Clear") {
    weatherIcon.className = "fa-solid fa-sun";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.className = "fa-solid fa-cloud-rain";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.className = "fa-solid fa-cloud-mist";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.className = "fa-solid fa-cloud-drizzle";
  }
}

searchInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    cheakWeather(searchInput.value);
    searchInput.value = "";
  }
});
