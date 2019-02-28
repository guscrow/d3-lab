var animalMaker = function(name,color,cuteness)
{
	return {
		name: name,
		color: color,
		cute:cuteness
	}
}

var data = [
	animalMaker("Puppy","white","10"),
	animalMaker("Red Panda","Red","10"),
	animalMaker("angler fish","grey","0")
];

var table = d3.select("body").append("table")


var rows = table.selectAll("tr")
		.data(data)
		.enter()
		.append("tr")



rows.append("td")
	.text(function(d) {return d.name})
	.attr("style","font-family: Courier");

rows.append("td")
	.text(function(d) {return d.color});

rows.append("td")
	.text(function(d) {return d.cute})
	.style("background-color","cyan");
