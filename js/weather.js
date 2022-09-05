const API_KEY = "1baacec649f48041f2b000b7936d1f97";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}6&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector("#weather span:last-child")
      const weather = document.querySelector("#weather span:first-child")
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].description} ${data.main.temp}°`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

