 
var floatMiles, floatGallons, floatMpg;
	floatMiles = prompt("Enter miles driven");
	floatGallons = prompt("Enter gallons of gas used");
	floatMpg = parseFloat(floatMiles/floatGallons).toFixed(2);
	alert("Miles per gallon = " + floatMpg);       
