const apiKey = "3e99c7c2d2a716096861635415381deb";
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
    const city = document.getElementById("city").value;
    if(city===""){
        alert("Please enter a city name");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.cod != 200){
            document.getElementById("weatherResult").innerHTML =
            "<h2>City not found</h2>";
            return;
        }
        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature : ${data.main.temp} °C</p>
            <p>☁ Weather : ${data.weather[0].main}</p>
            <p>💧 Humidity : ${data.main.humidity}%</p>
            <p>🌬 Wind Speed : ${data.wind.speed} m/s</p>
        `;
    });

});
