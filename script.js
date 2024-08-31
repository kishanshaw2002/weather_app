document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'eeb96c493a7a05fa86d302dabf3f04a4'; 
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('temperature').textContent = `${data.main.temp} °C`;
                const icon = data.weather[0].icon;
                document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${icon}.png`;
               document.getElementById('weatherInfo').classList.remove('hidden');
            } else {
                alert('City not found!');
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
