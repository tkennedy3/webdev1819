/* global $ */ 
$.ajax({
    url: "https://data.cityofchicago.org/resource/4arr-givg.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "CLdMIuMRVw0gJySAIYLEOacV5"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
