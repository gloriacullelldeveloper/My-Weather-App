function refreshWeather(response) {
    
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let city = response.data.city;

    cityElement.innerHTML = city;
    temperatureElement.innerHTML = Math.round(temperature);

    
 }

function searchCity(city) {

    let apiKey = "c71c7bae8f4otf0ad66fa62c747c8831";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(refreshWeather);

}

function handleSearchSubmit(event) {


    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
 
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

