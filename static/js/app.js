// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
// console.log(tableData);

data.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });

 

  });

  //Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

//Prevent the page from refreshing
d3.event.preventDefault();

//Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

//Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);

  var date = filteredData.map(object => tableData.date);


  // Need to loop through data and filter by date and show up on the HTML WebPage
  
  
  

});