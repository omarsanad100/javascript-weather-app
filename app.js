const apiKey = "d25d0dd5a30c4d7abf0eeaa793efd8ba";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async (location) => {
  try {
    //fetching data
    const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
    const data = await response.json();

    // Display data on the front end
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent =
      Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").textContent = data.main.humidity + " %";
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";

    // change the picture when data change
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    }

    document.querySelector(".weather").style.display = "block";
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

checkWeather();

const inputValue = document.querySelector(".searching-input");
const clickBtn = document.querySelector(".click-btn");

clickBtn.addEventListener("click", async () => {
  if (inputValue.value === Number || inputValue.value === "") {
    alert("Pls enter location😼");
  } else {
    await checkWeather(inputValue.value);
  }
});
