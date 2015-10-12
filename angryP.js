// angry professor exercise
//
// max

var professor = function(input){
	var amtOfClasses = input.split("\n")[0],
		counter = 0,
		allData = input.split("\n");
		
	while(amtOfClasses > 0){
		counter+=2;
	 	console.log(takeRole(allData[counter-1],allData[counter]));
		--amtOfClasses;
	}
}


var takeRole = function(required, attendance){

	var minStudents = required.split(" ")[1],
		amtOfStudents = required.split(" ")[0],
		students = attendance.split(" "),
		counter = 0;

	while(amtOfStudents >= 0){
		if(students[amtOfStudents] >= 0){
			++counter;
		}
		--amtOfStudents;
	}
	if(counter >= minStudents){
		return 'YES';
	}
	
	return 'NO';
}


var testInput = "2\n4 3\n-1 -3 4 2\n4 2\n0 -1 2 1";
professor(testInput);
