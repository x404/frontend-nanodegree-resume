/*
This is empty on purpose! Your code to build the resume will go here.
 */



var myName = 'Aleksey',
	role = 'Web Developer';
var awesomeThoughts = "I am Aleksey and I am AWESOME!";
var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');

console.log(funThoughts);


var formattedName = HTMLheaderName.replace('%data%', myName);
var formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);