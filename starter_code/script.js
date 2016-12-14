//Task 1: Console the year in which the song "Beat it" was relased 
console.log(library.music.eighties.Michael_Jackson[0].song,library.music.eighties.Michael_Jackson[0].year)

//Task 2: Console the name of the song Lady Gaga released in 2006 
console.log(library.music.two_thousands.Lady_Gaga[0].song,library.music.two_thousands.Lady_Gaga[0].year)


$( document ).ready(function() {
//Task 3: Have the words "Rolling in the Deep" appear on the HTML page in a div tag.    
var text = library.music.twenty_tens.Adele[0].song
	$("body").append("<div></div>").append("<h1>" + text + "</h1>");
//Task 4: (project) Create a site that can display all songs from an artist specified by a user search. (This will require an input field for the user to type into.. OR a drop down menu populated with Artist names)
});
