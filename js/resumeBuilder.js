var myName = 'Aleksey',
	role = 'Web Developer';
var awesomeThoughts = "I am Aleksey and I am AWESOME!";
var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');

console.log(funThoughts);


var formattedName = HTMLheaderName.replace('%data%', myName);
var formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var skills = ["css", "html", "javascript", "programming", "CMS"]

var bio = {
	"name" : myName,
	"role" : role,
	"contacts" : {
		"mobile" : "+380963974481",
		"email" : "info@proverstka.com.ua",
		"location" : "Dnepr"
	},
	"pic" : "/images/197x148.gif",
	"welcomeMessage" : "Welcome to my test file",
	"skills" : [
		"css", "html", "javascript", "programming", "CMS"
		]
};



// Работа с объектами
var work = {};
work.position = 'freelance';
work.employer = 'proverstka';
work.years = 10;


var education = {};
education['name'] = 'NMetAU';
education['years'] = '2000-2008';
education['city'] = 'Dnepr, UA';


$('#main').append(work['position']).append(education.name);