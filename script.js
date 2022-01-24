
// question  1
var outOfStock = true; 

if (outOfStock === true){

	console.log("Out Of Stock");
}
else {
    console.log("In Stock");
}




// question 2
for (let i = 15; i <= 25; i++) 

if (i === 17 || i === 20){

    console.log (i);
    }



// question 3
var h1 =document.querySelector('h1');

var ul =document.querySelector('ul');

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];
var text ="";

for (i =0; i <games.length; i++) {

	if (games[i].rating < 3.5) {

		text += "<li>" + games[i].title + ":" + games[i].rating + "</li>" + "<br>";
	}
}
ul.innerHTML = text;


// question 4 
function whatIDontLike(dontLike){

    if(typeof dontLike === 'string'){

        console.log("I dont like" + " " + dontLike);
    }else{

        console.log('Please send in a string');
    }
}

whatIDontLike('snake');

// question 5
function subtraccionFuc(a, b) {

    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {

        console.log('Invalid argument(s)');

    } else {
        console.log(a - b);
        return a - b;
    }
}

subtraccionFuc(5, 10);

//question 6

var h2 = document.querySelector('h2');

var ul = document.querySelector('ul');

var body = document.querySelector('body');

var title = document.querySelector('title');

var li = document.querySelector('li');

var btn = document.querySelector('button');


btn.addEventListener('click', function () {

    body.style.backgroundColor = 'yellow';
    title.innerHTML = "Updated title";

    ul.style.listStyle = "none";
    ul.style.padding = "0px";

    h2.style.color = 'green';
    h2.style.fontFamily = 'impact';

    h2.innerHTML = "<a href='#'>" + "Programming Fundations Course Assigament" + "</a>";
    
});

// question 7


