function calcCircleArea(radius)
{
	
	var area;
	area=3.14*radius*radius;
	console.log(area);
	return area;
};

document.getElementById("area1").innerHTML="r=7, area= "+window.calcCircleArea(7);
document.getElementById("area2").innerHTML="r=1.5, area= "+window.calcCircleArea(1.5);
document.getElementById("area3").innerHTML="r=20, area= "+window.calcCircleArea(20);
