/*var myName = 'Aleksey',
	role = 'Web Developer';
var awesomeThoughts = "I am Aleksey and I am AWESOME!";
var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');

console.log(funThoughts);


var formattedName = HTMLheaderName.replace('%data%', myName);
var formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
*/

// var skills = ["css", "html", "javascript", "programming", "CMS"]

var bio = {
	"name" : "Aleksey",
	"role" : "Web Developer",
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
var work = {
	"jobs" : [
		{
			"position" : "freelance",
			"employer" : "proverstka",
			"years" : 10
		},
		{
			"position" : "developer",
			"employer" : "promarmatura",
			"years" : 4
		}
	]
};


var projects = {
	"projects" : [
		{
			"title" : "Project1",
			"dates" : "2010",
			"description" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."
		}
	]	
}


var education = {
	"school" : [
		{
			"name" : "College",
			"city" : "Dnepr",
			"majors" : ["CS"],
			"minors" : "rea",
			"years" : "1996-2000"
		},
		{
			"name" : "Academy",
			"city" : "Dnepr",
			"majors" : ["HT"],
			"minors" : "metal",
			"years" : "2000-2008"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JS Courses",
			"school" : "Udacity",
			"dates" : 2016
		}
	]
}

// console.log(work.jobs[0].position);

// $('#main').append(work.jobs[0].position).append(education.school[0].name);


// console.log(document.getElementsByClassName("text-atom")[0]);

if (bio.skills.length > 0){
	$('#header').append(HTMLskillsStart);
	// console.log(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$('#skills').append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$('#skills').append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$('#skills').append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$('#skills').append(formattedSkill);
}

