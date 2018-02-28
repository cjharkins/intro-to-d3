$(document).ready(function(){

let data = [250,132,293,128,482,257,323,193];
let data2 = [450,121,500,428,122,457,283,93];
let concatData = data.concat(data2);

d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter()
  .append("div")
  .style("width", function(d) {return d + "px"})
  .text(function(d){ return ''+d;});


//Use selector to inject data values into, in this instance, I'm selecting .chart2
d3.select(".chart2")
//The div's have yet to be produced, but when produced, the following method will target them
  .selectAll("div")
//the data method is the loop that will generate data based off the argument/value passed into the method
  .data(data)
//the enter method pushes the data received into the newly generated divs, stored in an array
  .enter()
//the append method attaches/injects the generated divs to the originally selected div, .chart
  .append("div")
//the style method dictates the look of each bar
  .style("width", function(d){return d + "px"})
//the text method dictates the representation of each value assigned to each div generated, in this case, I am using the data stored in the indices of the array
  .text(function(d){return ''+d});

  $('.concatList').hide();
  
  $('.concat').click( function(){
    $('.chart').hide();
    $('.chart2').hide();
    $('.concatList').show();
    d3.select('.concatList')
      .selectAll('div')
      .data(concatData)
      .enter()
      .append('div')
      .style('width', function(d){ return d + 'px'})
      .text(function(d){ return d});
  });
  
  
});