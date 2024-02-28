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
        const feelsLikeElement = document.querySelector('.feels-like'); 
        const humidityElement = document.querySelector('.humidity');
        const windElement = document.querySelector('.wind');
        const windDegreeElement = document.querySelector('.wind-degree'); 

        cityElement.textContent = city;
        temperatureElement.textContent = `${data.temp}°C`;
        feelsLikeElement.textContent = ` ${data.feels_like}°C`;
        humidityElement.textContent = ` ${data.humidity}%`;
        windElement.textContent = ` ${data.wind_speed} kmph`;
        windDegreeElement.textContent = ` ${data.wind_degrees}°`; 
    } catch (error) {
        console.error(error);
    }
}
