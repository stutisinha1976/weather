async function fetchData() {
    const city = document.getElementById('cityname').value;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '621ae92574mshdf0e867fb36a90dp187fccjsn8de9c6536fc8',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const cityElement = document.querySelector('.city');
        const temperatureElement = document.querySelector('.temp');
        const humidityElement = document.querySelector('.humidity');
        const windElement = document.querySelector('.wind');

        cityElement.textContent = city;
        humidityElement.textContent = `${data.humidity}%`;
        temperatureElement.textContent = `${data.temp}°C`;
        windElement.textContent = `${data.wind_speed} kmph`;
    } catch (error) {
        console.error(error);
    }
}