var Numbers = require('./numbers');
var NumbersWrite = require('./numbersWrite');
var NumbersTrans = require('./numbersTrans');

var oneToHund = new Numbers();
var numbersStore = new NumbersWrite('numbersWrite1');

//Print Strings || UTF8
var printStrings;
if(process.argv[2] === 'string')
	printStrings = true;
else
	printStrings = false;

//READ Stream//
oneToHund.on('data', function(chunk){
	if(printStrings) console.log(chunk.toString());
	if(!printStrings) console.log(chunk);
});

//TRANSFORM Stream//
var timesTwo = new NumbersTrans();
oneToHund.pipe(timesTwo)
		 .pipe(numbersStore);

//WRITE Stream//
numbersStore.on('finish', function(){
	console.log('numbersStore:');
	for(var key in NumbersWrite.store){
		if(printStrings)  console.log('\t',key, ':', NumbersWrite.store[key].toString());
		if(!printStrings)  console.log('\t',key, ':', NumbersWrite.store[key]);
	}
});