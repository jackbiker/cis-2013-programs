 
var floatDays, floatAge, floatMonths, intFortnite, intWeeks;
	floatAge = parseFloat(prompt("What is your age in years, if you'd be so kind"));
    
	floatDays = parseFloat(floatAge*365.25);
    
	floatMonths = parseFloat(floatAge*12);
    
    intWeeks = parseInt(floatDays/7);
    
    intFortnite = parseInt(floatDays/14);
    
    
    
	alert("Your age in days is " + floatDays + ", your age in months is " + floatMonths + ", your age in weeks is " + intWeeks + ", and finally I will say your age in fortnites (lol fortnite) is " + intFortnite +".");       
