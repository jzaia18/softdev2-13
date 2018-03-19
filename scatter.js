//d3 select from id
var plot = d3.select('#plot');

var scaleX = function(n) {
  return n * .35 - 200;
};

var scaleY = function(n) {
  return 500 - n * 250;
};

var addPoints = function(plot, data) {
  plot.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx"   , function(a) { return scaleX(a[0]); } )
    .attr("cy"   , function(a) { return scaleY(a[1]); } )
    .attr("r"    , 5 )
    .attr("fill" , "black" );
};

var addAxis = function() {
  //X
  plot.append("text")
    .attr("x", 170 )
    .attr("y", 400 )
    .text("Computer Science Doctorates awarded (US)");
  for (var i = 800; i < 2000; i+=100) {
    plot.append("text").attr("x", scaleX(i)).attr("y", 350).text(i);
  }
  //Y
  plot.append("text")
    .attr("x", 20 )
    .attr("y", 300 )
    .attr("transform", "rotate(270 20 300)")
    .text("Arcade Revenue (Billions of dollars)");
  for (i = 70; i < 200; i+=10) {
    plot.append("text").attr("x", 25).attr("y", scaleY(i/100)).text(i);
  }
};

var data = [
  [ 861, 1.19, 2000],
  [ 830, 1.17, 2001],
  [ 809, 1.27, 2002],
  [ 867, 1.24, 2003],
  [ 948, 1.31, 2004],
  [1129, 1.44, 2005],
  [1453, 1.60, 2006],
  [1656, 1.65, 2007],
  [1787, 1.80, 2008],
  [1611, 1.73, 2009],
];

addAxis();
addPoints(plot, data);
