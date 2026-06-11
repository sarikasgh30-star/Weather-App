const apiKey = "a4cfe9642c10ceb6b24cd4cf3c3c43bf";

async function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText =
            `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").innerText =
            `Weather: ${data.weather[0].description}`;
        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;

    } catch (error) {
        alert("Error fetching weather data");
    }
}