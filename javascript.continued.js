function changeColor(name) {
	
	var r = Math.random()*256; /* built in function */
	var g = Math.random()*256; 
	var b = Math.random()*256;
	
	var color= "rgb("+r+","+g+","+b+")";
	document.getElementById(name).style.backgroundColor= color; 
}
// list in Javascript is like any other list, collection of similar items (i.e grocery list) //
	groceyList=["potatoes","oat milk", "eggs", "blackberries"];
		/* indecies:  0   ,    1     ,    2  ,   3   */
intList=[1,2,2378];
//indecies is the location within the list//

// var favoriteFood=groceryList[1]; 
// console.log(favoriteFood); 
// Math.floor --> chops of decimal point
 
function randomItem () {
	var randIndex= Math.floor(Math.random()*3); // bound of index 0-3
	console.log(randIndex);
	document.getElementById("two").innerHTML= groceyList[randIndex];
	
	changeColor("two"); 
}
