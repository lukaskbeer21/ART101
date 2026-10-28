function paintPage (color) {
$("body").css( "background-color", color );
}

paintPage("pink");



//clicker button program
//we create a variable named "count", the initial value is 0

let count=0;
let colorsCount=0

let colors=["green","orange","brown","yellow","gold","purple","red","pink"];


let buttonText="";

$("#needy-button").click( function(){

count= count +1;

console.log(count);
console.log(colors[colorsCount-1]);

$("#needy-button").html( buttonText);

paintPage(colors[colorsCount]);
$("body").css("background-color", colors[colorsCount]);



//$("body").append("<img width='50' src'" +colors[count-1] +" .jpg'>");
// if we run out of colors start from the first color

colorsCount = colorsCount +1;


if (colorsCount >=8) { colorsCount = 0; } })

$("#green").click( function(){

    console.log("green was clicked");
    paintPage(green);

});

$("#orange").click( function (){

    console.log("orange was clicked");
    paintPage(orange);

});

$("#aliceblue").click( function (){

    console.log("aliceblue was clicked");
    paintPage(aliceblue);

});

$(".color-circle").click (function(){

    console.log("a circle was clicked")
    paintPage(this.id);
});
