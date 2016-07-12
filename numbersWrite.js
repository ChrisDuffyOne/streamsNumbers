var stream = require('stream');

function NumbersWrite(key, options){
	stream.Writable.call(this, options);
	this._key = key;
	this._value = null;
	this.on('finish', function(){
		NumbersWrite.store[this._key] = this._value;
	});
};
NumbersWrite.store = {};
NumbersWrite.prototype = Object.create(stream.Writable.prototype);
NumbersWrite.prototype.constructor = NumbersWrite;

NumbersWrite.prototype._write = function(chunk, encoding, callback){
	if(!this._value){
		this._value = chunk; 
	}
	else {
		this._value = Buffer.concat([this._value, chunk]);
	}
	callback();
};

module.exports = NumbersWrite;