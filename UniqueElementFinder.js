
//Finds the unique elements in an array

var array = new Array(9);

var amountUnique = 0;

function arrayInput(int i){
	array.push(i);
}



window.onload = function(){
	arrayInput(1);
	arrayInput(4);
	arrayInput(3);
	arrayInput(4);
	arrayInput(4);
	arrayInput(7);
	arrayInput(0);
	arrayInput(9);
	arrayInput(3);
	
	for (i = 0; i < array.length(); i++){
		for (j = 0; j < array.length(); j++){
			if (j != i){
				amountUnique += 1;
			}
		}
	}



}