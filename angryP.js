// angry professor exercise
//
// max

var professor = function(input){
	
	//console.log(input.split("\n"));	
	var inputA = input.split("\n");
		numOfClasses = inputA[0],
		x = 0,
		y = 1;

	while(numOfClasses > 0){
		var requiredStudents = inputA[y].split(" ")[1],
			onTimeStudents = takeRole(inputA[y+1]);
		
		if(onTimeStudents <= requiredStudents){
			
			console.log('YES');
		}
		else{
			console.log('NO');
		}			

		--numOfClasses,y+=2;
	}
	return 0;
}

var takeRole = function(r){
	var inClass = 0,
		ar = r.split(" ");

	for(w=ar.length, q=0;q<w;++q){
		if(ar[q] <= 0){
			++inClass;
		}	
	}	
	return inClass;
}
	


//var testInput = "2\n4 3\n-1 -3 4 2\n4 2\n0 -1 2 1";
//professor(testInput);
var testInput2 = "10\n10 4\n-93 -86 49 -62 -90 -63 40 72 11 67\n10 10\n23 -35 -2 58 -67 -56 -42 -73 -19 37\n10 9\n13 91 56 -62 96 -5 -84 -36 -46 -13\n10 8\n45 67 64 -50 -8 78 84 -51 99 60\n10 7\n26 94 -95 34 67 -97 17 52 1 86\n10 2\n19 29 -17 -71 -75 -27 -56 -53 65 83\n10 10\n-32 -3 -70 8 -40 -96 -18 -46 -21 -79\n10 9\n-50 0 64 14 -56 -91 -65 -36 51 -28\n10 6\n-58 -29 -35 -18 43 -28 -76 43 -13 6\n10 1\n88 -17 -96 43 83 99 25 90 -39 86";
professor(testInput2);
