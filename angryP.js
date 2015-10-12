// angry professor exercise
//
// max

var takeRole = function(input){

	var rows = input.split("\n"),
		minStudents = rows[0].split(" ")[1],
		amtOfStudents = rows[0].split(" ")[0],
		students = rows[1].split(" "),
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

var testInput = "4 3\n-1 -3 4 2",
	testInput2 = "4 2\n0 -1 2 1";
console.log(takeRole(testInput));
console.log(takeRole(testInput2));
