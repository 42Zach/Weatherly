const weatherKey = "bfea7a5e43f41fc9b64b496e9820fc63";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const cityInput = document.querySelector('.search input');
const cityButton = document.querySelector('.search button');

async function weatherUpdate(city) {
    const reply = await fetch(weatherUrl + city + `&appid=${weatherKey}`);
    var weatherData = await reply.json();

    if(cityInput == '') {
        document.querySelector('.city').innerHTML = ' ';
    }

    console.log(weatherData);

    document.querySelector('.city').innerHTML = weatherData.name;
    document.querySelector('.temp').innerHTML = Math.round(weatherData.main.temp) + '°';
    document.querySelector('.humidity').innerHTML = weatherData.main.humidity + '%';
    document.querySelector('.wind').innerHTML = Math.round(weatherData.wind.speed) + 'mph';
    document.querySelector('.weatherType').innerHTML = weatherData.weather[0].description;
    document.querySelector('.detM1').style.display = 'block';
    document.querySelector('.detM2').style.display = 'block';

    console.log(new Date(weatherData.dt*1000-(weatherData.timezone*1000))); // minus 
    console.log(new Date(weatherData.dt*1000+(weatherData.timezone*1000)));

    const currentTime1 = new Date(weatherData.dt*1000-(weatherData.timezone*1000))
    //var currentTime15 = currentTime1.toLocaleTimeString('it-IT');
    var CTHour1 = currentTime1.getHours();
    const currentTime2 = new Date(weatherData.dt*1000+(weatherData.timezone*1000));
    var CTHour2 = currentTime2.getHours();
    //var currentTime25 = currentTime2.toLocaleTimeString('it-IT');
    var currentTime = CTHour2;
    currentTime += 6;

    console.log(CTHour1, CTHour2);

    if(currentTime <= 5 || currentTime >= 19 || currentTime == 12) {
        document.querySelector('.card').style.backgroundImage = 'url(WANight.jpg)';
        document.querySelector('.temp').style.color = 'rgb(207, 205, 205)';
        document.querySelector('.city').style.color = 'rgb(207, 205, 205)';
        document.querySelector('.sBtn').style.background = 'rgb(207, 205, 205)';
        document.querySelector('.humidity').style.color = 'rgb(207, 205, 205)';
        document.querySelector('.wind').style.color = 'rgb(207, 205, 205)';
        document.querySelector('.weatherType').style.color = 'rgb(207, 205, 205)';
    } else {
        document.querySelector('.card').style.backgroundImage = 'url(WADay.jpg)';
        document.querySelector('.sBtn').style.background = 'rgb(226, 226, 226)';
        document.querySelector('.temp').style.color = 'rgb(50, 50, 50)';
        document.querySelector('.city').style.color = 'rgb(50, 50, 50)';
        document.querySelector('.sBtn').style.background = 'rgb(226, 226, 226)';
        document.querySelector('.humidity').style.color = 'rgb(50, 50, 50)';
        document.querySelector('.wind').style.color = 'rgb(50, 50, 50)';
        document.querySelector('.weatherType').style.color = 'rgb(50, 50, 50)';
    }
    console.log(currentTime)
}

cityButton.addEventListener('click', ()=>{
    weatherUpdate(cityInput.value);
});