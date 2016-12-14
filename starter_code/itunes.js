$(document).ready(function(){
$('#inputSub').click(function(){
	itunes($('#inputText').val()	)
});

var url = "https://itunes.apple.com/search?parameterkeyvalue"
console.log("luis sucks")

function itunes(input){
	$.getJSON("https://itunes.apple.com/search?term=" + input,function(data){
		console.log(data);

		for(i = 0; i <= 9; i ++){
			var artistName = data.results[i].artistName;
			var songImage = data.results[i].artworkUrl100;
			var songName = data.results[i].trackName;
			$('#content').append('<div>' + '<h1>' + artistName + '</h1>' + '<img src=' + songImage + '></img>' + '<h3>' + songName + '</h3>' + '</div>')
		}

	});
}
});