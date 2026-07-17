const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
    const city = document.getElementById("city").value;
    document.getElementById("weather").innerHTML = `
        <h2>${city}</h2>
        <p>🌡 Temperature : 30°C</p>
        <p>☁ Weather : Clear Sky</p>
        <p>💧 Humidity : 60%</p>
        <p>🌬 Wind Speed : 10 km/h</p>
    `;
});
