// Print Name
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);
//Print Role
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);
//Add Internalizae Button
$("#header").append(internationalizeButton);
//Print Contact - mobile
$("#header").append(HTMLcontactsStart);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#contacts").append(formattedMobile);
//Print Contact - email
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#contacts").append(formattedEmail);
//Print Contact - github
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#contacts").append(formattedGithub);
//Print Contact - twitter
var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#contacts").append(formattedtwitter);
//Print Contact - location
var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#contacts").append(formattedlocation);
//Print Bio Pic
var formattedPic = HTMLbioPic.replace("%data%", bio.picUrl);
$("#header").append(formattedPic);
//Print Welcome Message
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);
//Check for Skills
if (bio.skills === null)
	{}
else {
	$("#header").append(HTMLskillsStart);
	var i = 0;
	while ( i < bio.skills.length){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
		i++;
	}
}
//Display Work
function displayWork(){
for (var job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedworkTitle = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(formattedworkTitle);
	var formattedworkDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedworkDate);
	var formattedworkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedworkLocation);
	var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedworkDescription);
	}
}
displayWork();
//Internationalize Name
function inName(name){
	//Split Name
	var names = name.split(" ");
	var fname;
	for( var i = 0; i < names.length; i++){
		//Convert the Last Entry of the Array to Upper Case
		if (i === (names.length - 1)){
			names[i] = names[i].toUpperCase();
		}
		if (i === 0){
			fname = names[i];
		}
		else{
			fname = fname + ' ' + names[i];
		}
	}
	return(fname);
}
//Display Projects
projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);
	}
};
projects.display();
//Display Education Details
function displayEducation(){
	for (var school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name) + HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedschoolName);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}
}
displayEducation();
//Display Education Details
function displayOnlineEducation(){
	for (var school in education.onlineCourseInfo){
		$(".education-entry:last").append(HTMLonlineClasses);
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourseInfo[school].name) + HTMLonlineSchool.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedTitle);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourseInfo[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLonlineURL.replace("%data%",education.onlineCourseInfo[school].url);
		$(".education-entry:last").append(formattedLocation);
	}
}
displayOnlineEducation();
//Display Locations on Google Map
$('#mapDiv').append(googleMap);