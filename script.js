$("#icon").hide();
$(".col-md").hide();
$(".5day").hide();


$("button").on("click", function (event) {
    event.preventDefault();
    var cityInput = $("#city").val().trim();
    var APIKey = "9f613adfc2ebdd9a02e12a81537c05d4";

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + APIKey;
console.log(cityInput);

var queryURLToday = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKey;
console.log(cityInput);

// 5 day forecast
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    $(".col-md").show();
//day 1 of forecast
$(".date1").text((response.list[4].dt_txt).split(" ", 1));
var tempF1 = ((response.list[4].main.temp - 273.15) * 1.80 + 32).toFixed(2);
var day1temp = $("<p>").text("Temp: " + tempF1 + "°F");
var day1humidity = $("<p>").text("Humidity: " + response.list[4].main.humidity + "%");
//icon
var iconcode = response.list[4].weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
$('#icon1').attr('src', iconurl);

$(".day1").append(day1temp, day1humidity);

//day 2 of forecast
$(".date2").text((response.list[8].dt_txt).split(" ", 1));
var tempF2 = ((response.list[8].main.temp - 273.15) * 1.80 + 32).toFixed(2);
var day2temp = $("<p>").text("Temp: " + tempF2 + "°F");
var day2humidity = $("<p>").text("Humidity: " + response.list[8].main.humidity + "%");
//icon
var iconcode = response.list[8].weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
$('#icon2').attr('src', iconurl);

$(".day2").append(day2temp, day2humidity);

})

// today
$.ajax({
    url: queryURLToday,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    // UV Index
    var queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=" + APIKey;

    $.ajax({
      url: queryURLUV,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      
      var UVIndex = $("<p>").addClass("card-text").text("UV Index: " + response.value);
      var todayDate = $("<h5>").text((response.date_iso).split("T", 1));

      cardBody.append(UVIndex);      
      cityName.append(todayDate);
  
  })
  
  $(".5day").show();

    var cardBody = $("<div>").addClass("card-body");
    var cityName = $("<h5>").addClass("card-title").text(response.name);
    var fToday = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(1);
    var tempToday = $("<p>").addClass("card-text").text("Temperature: " + fToday + "°F");
    var humidityToday = $("<p>").addClass("card-text").text("Humidity: " + response.main.humidity + "%");
    var windyToday = $("<p>").addClass("card-text").text("Wind Speed: " + ((response.wind.speed * 2.2369)).toFixed(1) + " MPH");
    
    var iconcode = response.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon').attr('src', iconurl);
    $("#icon").show();
    
    $(".today").addClass("card");
    cardBody.append(cityName, tempToday, humidityToday, windyToday);
    $(".today").append(cardBody);


})

});