var Numbers = require('./numbers');
var NumbersWrite = require('./numbersWrite');

var oneToHund = new Numbers();
var numbersStore = new NumbersWrite('numbersWrite1');

//Print Out Numbers READ//
oneToHund.on('data', function(chunk){
	//console.log(chunk.toString());
	console.log(chunk);
});

//Print Out Numbers WRITE//
oneToHund.pipe(numbersStore);

numbersStore.on('finish', function(){
	console.log('numbersStore:');
	for(var key in NumbersWrite.store){
		//console.log('\t',key, ':', NumbersWrite.store[key].toString());
		console.log('\t',key, ':', NumbersWrite.store[key]);
	}
});