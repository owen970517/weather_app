const apiKey = "your api key"; 
 
 const main = document.querySelector('.main');  
 const form = document.querySelector('.form');  
 const search = document.querySelector('.search');  
 const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;  
 async function getWeatherByLocation(city){  
      const resp = await fetch(url(city), {  
        origin: "cros" });  
      const respData = await resp.json();  
       getWeather(respData);  
    }  
function getWeather(data){  
      const temp = Celsius(data.main.temp);  
      const weather = document.createElement('div');
      const body = document.querySelector("body");
      if(data.weather[0].main === "Clouds" || data.weather[0].main === "Mist") {
        body.style.background = "";
        body.style.background = "linear-gradient(300deg, #757b87, #909d9d)";
    } else if(data.weather[0].main === "Rain") {
        body.style.background = "";
        body.style.background = "linear-gradient(300deg, #95a1af, #92bad2)";
        
    } else if(data.weather[0].main === "Clear") {
        body.style.background = "";
        body.style.background = "linear-gradient(360deg, #ffc946, #f8bf66)";
    } 
    else if (data.weather[0].main === "Snow") {
        body.style.background = "linear-gradient(360deg, #dadfec, #98b0d7)";
    }
    weather.classList.add('weather');  
    weather.innerHTML = `  
      <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>  
      <small>${data.weather[0].main}</small>  
      `;  
     //  cleanup   
    main.innerHTML= "";  
    main.appendChild(weather);  
       
    };  
    function Celsius(K){  
      return Math.floor(K - 273.15);  
    }  
    form.addEventListener('submit',(e) =>{  
     e.preventDefault();  
     const city = search.value;
     if(city) {
        getWeatherByLocation(city);
     }
    });  
