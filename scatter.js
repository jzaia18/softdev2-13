//d3 select from id
var plot = d3.select('#plot');

var scaleX = function(n) {
  return n * .45 - 320;
};

var scaleY = function(n) {
  return n * 100;
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
    .attr("x", 200 )
    .attr("y", 400 )
    .text("Computer Science Doctorates awarded (US)");
  //Y
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
