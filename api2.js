let baseURL = "http://api.weatherapi.com/v1/current.json";
let APIkey = "22306cb60bbc4ab49fc84147240807"; // Corrected the format

function findWeather(city) {
  let finalURL = `${baseURL}?key=${APIkey}&q=${city}`;
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(
        ".icon"
      ).style.backgroundImage = `url(${data.current.condition.icon})`;
      document.querySelector(".temp").innerHTML = `${data.current.temp_c}°C`;
      document.querySelector(".typeText").innerHTML =
        data.current.condition.text;
      document.querySelector(".date").innerHTML =
        data.current.last_updated.substr(2, 9);
      document.querySelector(".time").innerHTML =
        data.current.last_updated.substr(11, 15);
      document.querySelector(
        ".location"
      ).innerHTML = `${data.location.name},${data.location.country}`;
      document.querySelector(
        ".degree"
      ).innerHTML = `${data.current.wind_degree}°${data.current.wind_dir}`;
      document.querySelector(
        ".speed"
      ).innerHTML = `${data.current.wind_mph}mph`;
      document.querySelector(
        ".percentage"
      ).innerHTML = `${data.current.humidity}%`;
    })
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
    });
}

const btn = document.querySelector(".searchBtn");
btn.addEventListener("click", (e) => {
  const cityname = document.querySelector(".searchBar");
  findWeather(cityname.value); // Corrected the function name
});
findWeather("Delhi,India");
