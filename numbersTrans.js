"use strict";

var Transform = require('stream').Transform;

class timesTwo extends Transform{
	_transform(chunk, encoding, callback){
		var timesMe = chunk;
		if(timesMe % 2 === 0){
			timesMe = timesMe * 2;
		};
		this.push(timesMe.toString());
		callback();
	}
};

module.exports = timesTwo;