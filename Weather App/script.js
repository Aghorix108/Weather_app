let inp = document.getElementById("inp");
let add = document.getElementById("add");
let out = document.getElementsByClassName("container-output")[0];
let output = document.getElementById("temp");
let weather = document.getElementsByClassName("weather");

async function getWeather() {
  

  if (inp.value == "") {
    out.style.transition = "all ease 2s";
    // out.style.backgroundColor = "blue";
    out.innerHTML = "<h2>Enter a City Name Please</h2>";
  }
  try {
    
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=0973a3f4f6dd48f0a61134318241302&q=${inp.value}`
    );
    const data = await response.json();
    console.log(data);
    let name = data.location.name; 
    let state = data.location.region;
    let temp = data.current.temp_c;
    let feelsLike = data.current.feelslike_c;
    let img = data.current.condition.icon;
    let temp_f = data.current.temp_f;
    let humidity = data.current.humidity;
    if (data) {
      out.innerHTML = `
        <h3 style="margin-bottom: 5px;">${name}, ${state}</h3>
        <h3 style="margin-bottom: 5px;">${temp}°C / ${temp_f}°F</h3>
        <h3 style="margin-bottom: 5px;">Humidity: ${humidity}</h3>
        <h3 style="margin-bottom: 5px;">FeelsLike: ${feelsLike}</h3>
        <div class="weather" style="margin: 1rem;">
        <img style="height: 7rem; width: 7rem; object-fit: cover; " src="${img}">
        </div>
      `
    }
    
    
  } catch (err) {}
}
