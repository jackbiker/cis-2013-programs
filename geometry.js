
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{

//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
	var floatRectArea;
	var floatRectPerim;
	var floatS;
	var floatTriangeArea;
	var floatTrianglePerim;
	var floatCircleArea;
	var floatCircleCircum;	

//calculate the rectangle area and perimeter
	floatRectArea = floatRectWidth * floatRectHeight;
	floatRectPerim = 2 * floatRectWidth + 2 * floatRectHeight;

//calculate the triangle area using Heron's formula (don't remember it? look it up...) and perimeter	
	floatS = (floatTriSide2 + floatTriSide2 + floatTriSide3)/2;
	floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1)*(floatS-floatTriSide2)*(floatS-floatTriSide3)));
	floatTrianglePerim = floatTriSide1 + floatTriSide2 + floatTriSide3;

//calculate the circle area and circumference using convenient Math Object methods	
	floatCircleArea = Math.PI * Math.pow(floatRadius,2);
	floatCircleCircum = 2 * Math.PI * floatRadius;  
	
	alert ("The Rectangle area is " + floatRectArea.toFixed(2) + " and the perimeter is " + floatRectPerim.toFixed(2) + "\n\n" +
		"The Triangle area is " + floatTriangleArea.toFixed(2) + " and the perimeter is " + floatTrianglePerim.toFixed(2) + "\n\n" +
		"The Circle area is " + floatCircleArea.toFixed(2) + " and the circumference is " + floatCircleCircum.toFixed(2));

};

var calcRectArea = function()
{
	var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
	alert ("The rectangle area is " + rectArea(floatRectWidth, floatRectHeight));	
};
function rectArea(floatRectWidth_par, floatRectHeight_par){
    
    var floatRectArea = floatRectWidth_par * floatRectHeight_par;
    return floatRectArea.toFixed(2);
}

var calcRectPerim = function() {
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
        alert("The Rectangle Perimiter is " + rectPerim(floatRectWidth, floatRectHeight));
};

function rectPerim(floatRectWidth_par, floatRectHeight_par) {
    var floatRectPerim = floatRectWidth_par * 2 + floatRectHeight_par * 2;
    return floatRectPerim.toFixed(2);
}
//triangles baby
var calcTriangleArea = function() {
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    var floatTriSide3 = parseFloat($("tri_side3").value);
        alert("The traingle area is " + triangleArea(floatTriSide1, floatTriSide2, floatTriSide3));

};

 

function triangleArea(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par) {

    var floatS = (floatTriSide2_par + floatTriSide2_par + floatTriSide3_par)/2;

    var floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1_par)*(floatS-floatTriSide2_par)*(floatS-floatTriSide3_par)));

    return floatTriangleArea.toFixed(2);

}

//triangle perem baby

var calcTrianglePerim = function() {

    var floatTriSide1 = parseFloat($("tri_side1").value);

    var floatTriSide2 = parseFloat($("tri_side2").value);

    var floatTriSide3 = parseFloat($("tri_side3").value);

        alert("The triangle peremeter is " + trianglePerim(floatTriSide1, floatTriSide2, floatTriSide3));

};

 

function trianglePerim(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par) {

    var floatTrianglePerim = floatTriSide1_par + floatTriSide2_par + floatTriSide3_par;

    return floatTrianglePerim.toFixed(2);

}

//circle circum

var calcCircleCircum = function()

{

    var floatRadius = parseFloat($("radius").value);

    alert ("The circle circumference is " + circleCircum(floatRadius));

};

function circleCircum(floatRadius_par) {

    var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);

    return floatCircum.toFixed(2);

}

//circle area

var calcCircleArea = function () {

    var floatRadius = parseFloat($("radius").value);

    alert ("The circle area is " + circleArea(floatRadius));

};

 

function circleArea(floatRadius_par) {

    var floatCircleArea = parseFloat(Math.PI * Math.pow(floatRadius_par,2));

    return floatCircleArea.toFixed(2);

}

 

window.onload = function () {

    $("radius").focus();

    $("calc_all").onclick = do_it;

    $("calc_circle_circum").onclick = calcCircleCircum;

    $("calc_rect_area").onclick = calcRectArea;

    $("calc_rect_perim").onclick = calcRectPerim;

    $("calc_circle_area").onclick = calcCircleArea;

    $("calc_tri_area").onclick = calcTriangleArea;

    $("calc_tri_perim").onclick = calcTrianglePerim;

};