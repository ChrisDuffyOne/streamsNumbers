var stream = require('stream');

function Numbers(options){
	stream.Readable.call(this, options);
	this._start = 1;
	this._end = 20;
	this._curr = this._start;
};
Numbers.prototype = Object.create(stream.Readable.prototype);
Numbers.prototype.constructor = Numbers;

Numbers.prototype._read = function() {
	var digit = this._curr;
	var buf = new Buffer(digit.toString(), 'utf8');
	this.push(buf);
	this._curr++;
	if(digit === this._end){
		this.push(null);
	}
};

module.exports = Numbers;