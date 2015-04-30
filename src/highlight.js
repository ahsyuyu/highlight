var highlight = function(text, hits){
	if(hits.length == 0) return;
	var out = [];

	var substrString = function(start, nextStart, len, hl){
		var keyWord = [hl, text.substr(start-1, len)];
		var word = ["",text.substr(start-1+len, nextStart-start-1)];
		if(word[1]) return [keyWord, word];
		else return [keyWord];
	}

	var i = 0;
	if(text.substr(0,hits[0][0]-1)) out.push(["",text.substr(0,hits[0][0]-1)]);
	while(hits[i+1]){
		out = out.concat(substrString(hits[i][0], hits[i+1][0], hits[i][1], hits[i][2]));
		i++;
	}

	out = out.concat(substrString(hits[i][0], text.length+1, hits[i][1], hits[i][2]));

	return out;
}

module.exports = highlight;