var cityInput = $("input").val().trim();
var APIKey = "9f613adfc2ebdd9a02e12a81537c05d4";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKey;



$("button").on("click", function (event) {
    event.preventDefault();
console.log(cityInput);

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
})

});