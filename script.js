function getWeather(){
  $('.weatherResponse').html(''); // clears the div
  $('.city').html(''); // clears the div
  $('.col p').html(''); // clears the div

  var cityName = $('#cityName').val();
  var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q='
  + cityName + '&units=imperial&appid=0d9618f54bd40e0eef01f14b549ee010';
  //var is setting a variable
  $.getJSON(apiCall, weatherCallback); //calls the API
  //earlier we did console.log();, which prints data into the console
  //use console.log to test code
  //setting each of these as variables
  function weatherCallback(weatherData){
    var cityName = weatherData.name;
    var cityTemp = weatherData.main.temp;
    var cityHumidity = weatherData.main.humidity;

    $('.city').append(cityName);

    $('.weatherResponse').append("The weather in " + cityName
    + " is " + cityTemp + " degrees and " + cityHumidity + "% humid.");

    //HOT
    if (cityTemp > 75) {
      $('#pants').append("Wear shorts.");
      $('#top').append("Wear short-sleeved tops and loose-fitted clothing.");
      $('#outerwear').append("No need for anything thick. Wear a light cardigan or nothing at all.");
      $('#footwear').append("Wear open-toed shoes.");
      $('#hair').append("Tie or braid your hair.");
      $('#accessories').append("Don't forget a hat, sunscreen, and sunglasses.");

    }
    //COLD
    else {
      $('#pants').append("Wear long pants.");
      $('#top').append("Wear long-sleeved tops and tight-fitted clothing.");
      $('#outerwear').append("Wear a coat, hoodie, or thick jacket.");
      $('#footwear').append("Wear sneakers or boots.");
      $('#hair').append("Let your hair down.");
      $('#accessories').append("Don't forget a beanie, a pair of gloves, and earmuffs.");
    }

  }
}
