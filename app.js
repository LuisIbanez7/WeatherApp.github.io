

function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
    var description = d.weather[0].description; 
    var longitude = d.coord.lon;
    var latitude = d.coord.lat;

     
    document.getElementById('description').innerHTML = d.name +": "+ description;
    document.getElementById('temp').innerHTML = "Temperature: " + fahrenheit + " F";
    document.getElementById('location').innerHTML = "Coord: " + latitude + ", " + longitude;
}

$(document).ready(function() { 
    $('form').submit(function() {
          // your code here (build up your url)
        let city = document.getElementById("inCity").value;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=72893dbbba9bff51f2b92ba03bda22c6`;

        $.get( url, function( res ) {
            drawWeather(res);
          }, "json" );
        // don't forget to return false so the page doesn't refresh
        return false;
    });
    
});