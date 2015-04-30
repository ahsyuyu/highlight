var highlight = require("../highlight");
var assert = require("assert");
describe("highlight for search result",function(){

	var text = "abcdef";

	// it("test1",function(){
	// 	var realhits = [[]];

	// 	var output = highlight(text, realhits);
	// 	assert.deepEqual(output, ["","abcdef"] );
	// });

	it("test2",function(){
		var realhits = [[2,1,0]];

		var output = highlight(text, realhits);
		assert.deepEqual(output, [
			["","a"],
			["0","b"],
			["","cdef"]
		]);
	});

	it("test3",function(){
		var realhits = [[2,1,0],[3,1,0]];

		var output = highlight(text, realhits);
		assert.deepEqual(output, [
			["","a"],
			["0","b"],
			["0","c"],
			["","def"]
		]);
	});

	it("test4",function(){
		var realhits = [[2,1,0],[3,1,1],[6,1,2]];

		var output = highlight(text, realhits);
		assert.deepEqual(output, [
			["","a"],
			["0","b"],
			["1","c"],
			["","de"],
			["2","f"]
		]);
	});

	it("test5",function(){
		var realhits = [[1,1,0],[2,1,1],[6,1,2]];

		var output = highlight(text, realhits);
		assert.deepEqual(output, [
			["0","a"],
			["1","b"],
			["","cde"],
			["2","f"]
		]);
	});
})