//clicker button program


let count=0;
let colorsCount=0

let colors=["green","orange","brown","yellow","gold","purple","red","pink"];


let buttonText="";

$("#needy-button").click( function(){

count= count +1;

console.log(count);
console.log(colors[colorsCount-1]);

$("#needy-button").html( buttonText);

$("body").css( "background-color", colors[colorsCount] );



//$("body").append("<img width='50' src'" +colors[count-1] +" .jpg'>");
// if we run out of colors start from the first color

colorsCount = colorsCount +1;


if (colorsCount >=8) { colorsCount = 0; } })


