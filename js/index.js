let inputCity = document.querySelector(".input-city");
let cityName = document.querySelector(".information-city");
let temp = document.querySelector(".temp");
let description = document.querySelector(".description");
let wind = document.querySelector(".wind");

let city = "London"

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        let value = inputCity.value;
        if(!value) return false;
        city = value;
        init()
        inputCity.value = ''
    }
})

function init() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c5ff3ad26f0e53b020f4c3493a1e820&units=metric`)
        .then(res => {return res.json()})
        .then(data => {
            function temperature() {
                return Math.floor(data.main.temp);
            }
            cityName.textContent = city;
            temp.textContent = `Temperature: ${temperature()}°C`;
            description.textContent = data.weather[0].main;
            wind.textContent = `Wind speed: ${data.wind.speed}m/s`
    
        })
        .catch(() => {
        alert("This city not found");
        city = "London";
        init();
    })
}

init();