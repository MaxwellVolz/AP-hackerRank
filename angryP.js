// angry professor exercise
//
// max

var professor = function(x){
	var s = x.split("\n"),
		a = parseInt(s[0]);

	for(x=1,y=s.length;x<y;x+=2){
		var r = s[x].split(" ")[1],
			p = s[x+1].split(" "),
			m = p.length,
			k = 0;
		for(d=0,c=m; d<c; ++d){
			if(p[d] >= 0){
				++k;
			}
		}
		
		if(k > r){
			console.log('NO');
		}
		else{
			console.log('YES');
		}
	}
	
}


var testInput = "2\n4 3\n-1 -3 4 2\n4 2\n0 -1 2 1";
professor(testInput);
