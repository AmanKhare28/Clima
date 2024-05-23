// const u = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "4e4e75a601msheba772ade55e23dp127cddjsn8968ae3afdd3",
//     "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
//   },
// };

// async function fetchData(city) {
//   const url = u + city;
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     document.querySelector(".mainT").innerHTML = result.temp + "°C";
//     document.querySelector(".minT").innerHTML = result.min_temp + "°C";
//     document.querySelector(".maxT").innerHTML = result.max_temp + "°C";
//     document.querySelector(".windSpeed").innerHTML = result.wind_speed + "m/s";
//     document.querySelector(".degree").innerHTML = result.wind_degrees + "°";
//     document.querySelector(".humidity").innerHTML = result.humidity + "%";
//   } catch (error) {
//     console.error(error);
//   }
// }
// const x = document.querySelector("#submit");
// x.addEventListener("click", (e) => {
//   e.preventDefault();
//   const search_bar = document.querySelector(".search");
//   fetchData(search_bar.value);
// });
// fetchData("Delhi");
const u = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4e4e75a601msheba772ade55e23dp127cddjsn8968ae3afdd3",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

function weatherCategory(data) {
  if (data.cloud_pct < 20 && data.humidity < 60) {
    return "Sunny";
  } else if (data.cloud_pct > 20 && data.cloud_pct < 50 && data.humidity < 70) {
    return "Patly Cloudy";
  } else if (data.cloud_pct > 50 && data.humidity < 80) {
    return "Cloudy";
  } else if (data.cloud_pct > 80 && data.humidity > 80) {
    return "Rainy";
  }
}

async function fetchData(city) {
  try {
    const response = await fetch(u + city, options);
    const result = await response.json();
    console.log(result);
    const d = new Date();
    const date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    document.querySelector(".date").innerHTML = date;
    document.querySelector(".cityName").innerHTML = city.toUpperCase();
    document.querySelector(".mainT").innerHTML = result.temp + "°C";
    document.querySelector(".minT").innerHTML = result.min_temp + "°C";
    document.querySelector(".maxT").innerHTML = result.max_temp + "°C";
    document.querySelector(".windSpeed").innerHTML = result.wind_speed + "m/s";
    document.querySelector(".degree").innerHTML = result.wind_degrees + "°";
    document.querySelector(".humidity_content").innerHTML =
      result.humidity + "%";
    document.querySelector(".wText").innerHTML = weatherCategory(result);
  } catch (error) {
    console.error(error);
  }
}

const btn = document.querySelector(".searchBtn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const cityname = document.querySelector(".searchBar");
  fetchData(cityname.value);
});

fetchData("Delhi");
