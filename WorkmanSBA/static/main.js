/**
 * 
 */
 
 function validateLogin(){
	 if(document.login_form.fullname.value ==""){
		 alert("Please enter your full name");
		 document.login_form.fullname.focus();
		 return false;
	 }else{
		 var UNAME = document.getElementById("fullname").value;
	 }
	 
	 if(document.login_form.email.value == ""){
		alert("Please enter your email address");
		 document.login_form.email.focus();
		 return false;
	 }
	 
	 if(document.login_form.email.value !=""){
		 if(validateEmail() == true){
		 	var UEMAIL = document.getElementById("email").value;
		 }else{
			alert("Please enter valid email address");
		 	document.login_form.email.focus();
		 	return false;
	 	 }
	 }
	 if(document.login_form.password.value ==""){
		 alert("Please enter your password");
		 document.login_form.password.focus();
		 return false;
	 }else{
		 var UPASS = document.getElementById("password").value;
	 }
	 
	 if(UNAME != "" && UEMAIL != "" && UPASS != ""){
		 window.location.href = "dashboard.html?" + "name=" + UNAME;
		 return false;
	 }else{
		 alert("Invalid entry. Please try again.");
	 }
 }
 
function validateEmail(){
	let index_pass = true;
	var emailId = document.login_form.email.value;
	atpos = emailId.indexOf("@");
	dotpos = emailId.lastIndexOf(".");
	
	if(atpos < 1 || (dotpos - atpos < 2)){
		index_pass = false;
	}
	
	let email_pass = true;
	let email_regex = /^[a-zA-Z0-9.!#$%&‘+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
	if(!email_regex.test(emailId)){
		email_pass = false;
	}
	
	if(index_pass && email_pass){
		return true;
	}else{
		return false;
	}
}

function getLoggedInUserName(){
	var idx = document.URL.indexOf('?');
	var params = new Array();
	
	if(idx != -1){
		var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
		for(var i = 0; i < pairs.length; i++){
			nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
	}
	return params;
}
 
params = getLoggedInUserName();
userName = decodeURI(params["name"]);


function displayTestimonial(){
	var table = document.getElementById("testimonial-table");
	var row = table.insertRow(2);
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	
	var tTitle = document.getElementById("title").value;
	var tRating = document.getElementById("rating").value + " Stars";
	var tMessage = document.getElementById("message").value;
	var tButton1 = '<button type="button" id="edit_testimonial" class="btn">Edit</button>';
	var tButton2 =	'<button type="button" id="delete_testimonial" class="btn">Delete</button>';
	
	cell1.innerHTML = tTitle;
	cell2.innerHTML = tRating;
	cell3.innerHTML = tMessage;
	cell4.innerHTML = tButton1 + tButton2;

}

const myNodelist = document.querySelectorAll("div.reservation");
document.getElementById("demo").innerHTML = myNodeList.length;
