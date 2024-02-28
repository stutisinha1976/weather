const $city = document.getElementById('cityname').value;
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${$city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '621ae92574mshdf0e867fb36a90dp187fccjsn8de9c6536fc8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse response as JSON
        const cityElement = document.querySelector('.city');
        const humidityElement = document.querySelector('.humidity');
        const windElement = document.querySelector('.wind');
        
        cityElement.textContent = data.city_name; // Update city name
        humidityElement.textContent = `${data.humidity}%`; // Update humidity
        windElement.textContent = `${data.wind_speed} kmph`; // Update wind speed
    } catch (error) {
        console.error(error);
    }
}

fetchData();

