var typeOfTemp=prompt("typeOfTemp")
var temp= prompt("enter temp")
// convertTemp(temp,typeOfTemp);

function convertTemp(typeOfTemp,temp){
if(typeOfTemp === "C") {
	console.log((temp-32)*5/9);
}
else if(typeOfTemp === "F"){
	console.log((temp*9/5)+32);
}
else{
	console.log('convert temp to F');
}
}
convertTemp(typeOfTemp,temp);