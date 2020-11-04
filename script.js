$("button").on("click", function (event) {
    event.preventDefault();
    var cityInput = $("#city").val().trim();
    var APIKey = "9f613adfc2ebdd9a02e12a81537c05d4";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKey;
console.log(cityInput);

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
})

});