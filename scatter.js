var arcadeScale = 100; // a constant (CHANGE THIS)
var csScale = 1/10; // a constant (CHANGE THIS)

//d3 select from id
var plot = d3.select('#plot');

var addPoints = function(plot,data) {
	plot.selectAll("circle")
		.data(data)
		.enter()
		.append("circle")
		.attr("cx"   , function(a) { return (a[0] - 2000)*50 + 10; } )
		.attr("cy"   , function(a) { return a[1] * a[2]; } )
		.attr("r"    , function(a) { return 5;    } )
		.attr("style", function(a) { return "fill: " + a[3]; } );
};

var Data = [
	[2000, 1.19, arcadeScale, "red"],
	[2001, 1.17, arcadeScale, "red"],
	[2002, 1.27, arcadeScale, "red"],
	[2003, 1.24, arcadeScale, "red"],
	[2004, 1.31, arcadeScale, "red"],
	[2005, 1.44, arcadeScale, "red"],
	[2006, 1.60, arcadeScale, "red"],
	[2007, 1.65, arcadeScale, "red"],
	[2008, 1.80, arcadeScale, "red"],
	[2009, 1.73, arcadeScale, "red"],
	[2000,  861, csScale, "black"],
	[2001,  830, csScale, "black"],
	[2002,  809, csScale, "black"],
	[2003,  867, csScale, "black"],
	[2004,  948, csScale, "black"],
	[2005, 1129, csScale, "black"],
	[2006, 1453, csScale, "black"],
	[2007, 1656, csScale, "black"],
	[2008, 1787, csScale, "black"],
	[2009, 1611, csScale, "black"],
];

addPoints(plot,Data);
