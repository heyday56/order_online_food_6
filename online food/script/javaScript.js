"use strict"
let current=0;
let interval="";
function slideShow(){
	let first=document.querySelector("#firstImage");
	let second=document.querySelector("#secondImage");
	let third=document.querySelector("#thirdImage");
	let fourth=document.querySelector("#fourthImage");
	const photos=["meal1.jpg","meal2.jpg","meal3.jpg","meal4.jpg","meal5.jpg","meal6.jpg","meal7.jpg","meal8.jpg","meal9.jpg","meal10.jpg","meal11.jpg","meal12.jpg","meal13.jpg","meal14.jpg"];
	first.src="image/"+photos[current];
	second.src="image/"+photos[current+1];
	third.src="image/"+photos[current+2];
	fourth.src="image/"+photos[current+3];
	if ((current+3)==photos.length-1) {
		current=0;
	}
	else{
		current+=1;
	}
interval=window.setTimeout(slideShow,3000);
}

function stopSlideShow(){
	window.clearInterval(interval);
}
function startSlideShow(){
	slideShow();
}


//Login Script Page
function loginEmailValidate(){
	const email=document.querySelector("#loginEmail").value;
	if (email.lastIndexOf("@")<3||email.lastIndexOf(".")<10|| email.indexOf("=")>-1||email.indexOf("&")>-1||email.indexOf("-")>-1) {
		document.querySelector("#loginEmailMsg").textContent="Invalide Email. Please correct it!";
		document.querySelector("#loginEmailMsg").style.color="red";
		document.querySelector("#loginEmail").focus();
		return false;	
	}
	else{
		document.querySelector("#loginEmailMsg").textContent="Your Email*:";
		document.querySelector("#loginEmailMsg").style.color="black";
		return true;
	}
}
function loginPasswordValidate(){
	const password=document.querySelector("#loginPassword").value;
	if (password.indexOf("=")>-1|| password.length<8) {
		document.querySelector("#loginPasswordMsg").textContent="Please do not use '=', more then 8";
		document.querySelector("#loginPasswordMsg").style.color="red";
		return false;
	}
	else{
		return true;
	}
}
function loginValidate(){
	const password=document.querySelector("#loginPassword").value;
	const email=document.querySelector("#loginEmail").value;
	const msg=document.querySelector("#loginMsg");
	if (email.lastIndexOf("@")<3||email.lastIndexOf(".")<10|| email.indexOf("=")>-1||email.indexOf("&")>-1||email.indexOf("-")>-1) {
		msg.textContent="Password and Email are required, observe the role";
		return false;
	}
	if (password.indexOf("=")>-1|| password.length<8) {
		msg.textContent="Password and Email are required, observe the role";
		return false;
	}
	else{
		return true;
	}
}


/* Order Page Script */
function orderValidate(){
	const email=document.querySelector("#orderEmail").value;
	const address=document.querySelector("#orderAddress").value;
	const foodName=document.querySelector("#foodName").value;
	const date=document.querySelector("#orderDate").value;
	const time=document.querySelector("#orderTime").value;
	const amount=document.querySelector("#orderAmount").value;
	if (email.lastIndexOf("@")<3||email.indexOf(" ")>-1||email.indexOf("  ")||email.lastIndexOf(".")<10|| email.indexOf("=")>-1||email.indexOf("&")>-1||email.indexOf("-")>-1) {
		document.querySelector("#orderEmailMsg").textContent="Invalide Email. Please correct it!";
		document.querySelector("#orderEmailMsg").style.color="red";
		return false;
	}
	if(address.length<3|| foodName.length<3||date.length<10||time.length<10||amount==""){
		document.querySelector("#orderMsg").textContent="Please fill form completely!";
		return false;
	}

	return true;
}

//Contact Page Script
function contactEmailValidate(){
	const email=document.querySelector("#contactEmail").value;
	if (email.lastIndexOf("@")<3||email.lastIndexOf(".")<10|| email.indexOf("=")>-1||email.indexOf("&")>-1||email.indexOf("-")>-1) {
		document.querySelector("#contactEmailMsg").textContent="Invalide Email. Please correct it!";
		document.querySelector("#contactEmailMsg").style.color="red";
		document.querySelector("#contactEmail").focus();	
	}
	else{
		document.querySelector("#contactEmailMsg").textContent="Your Email*:";
		document.querySelector("#contactEmailMsg").style.color="black";
	}
}

function contactValidate(){
	const email=document.querySelector("#contactEmail").value;
	const text=document.querySelector("#contactText").value;
	if (email.lastIndexOf("@")<3||email.lastIndexOf(".")<10|| email.indexOf("=")>-1||email.indexOf("&")>-1||email.indexOf("-")>-1 ||text.length<3||text==""||text=="   ") {
		document.querySelector("#contactMsg").textContent="Please Fill Email and textArea correctly!";
		return false;
	}
	return true;

}
// Add Food Script Page
function addNameValidate(){
	const foodName=document.querySelector("#addFoodName").value;
	let ch=foodName[foodName.length-1];
	if (0<=Number(ch)<=9||ch=="=",ch=="-"||ch=="+"||ch=="!"||ch=="?"||foodName=="") {
		document.querySelector("#addNameMsg").textContent="Name is required and type real name!";
		document.querySelector("#addNameMsg").style.color="red";
		return false;
	}
	return true;
}

//Add category Script Page
function addCategoryNameValidate(){
	const foodName=document.querySelector("#addCategoryName").value;
	let ch=foodName[foodName.length-1];
	if ((0<=Number(ch) && Number(ch)<=9)||ch=="="||ch=="-"||ch=="+"||ch=="!"||ch=="?"||foodName=="") {
		document.querySelector("#addCategoryMsg").textContent="Name is required and type real category name!";
		document.querySelector("#addCategoryMsg").style.color="red";
		return false;
	}
	return true;
}

// Change Password Script Page 
function currentEmailValidate(){
	const email=document.querySelector("#currentEmail").value;
	if (email.lastIndexOf("@")<3||email.lastIndexOf(".")<10|| email.indexOf("=")>-1||email.indexOf("&")>-1||email.indexOf("-")>-1) {
		document.querySelector("#currentEmailMsg").textContent="Invalide Email. Please correct it!";
		document.querySelector("#currentEmailMsg").style.color="red";
		document.querySelector("#currentEmail").focus();
		return false;	
	}
	else{
		document.querySelector("#currentEmailMsg").textContent="Your Email*:";
		document.querySelector("#currentEmailMsg").style.color="black";
		return true;
	}
}
function currentPasswordValidate(){
	const password=document.querySelector("#currentPassword").value;
	if (password.indexOf("=")>-1) {
		document.querySelector("#currentPasswordMsg").textContent="Please do not use '='";
		document.querySelector("#currentPasswordMsg").style.color="red";
		return false;
	}
	else{
		return true;
	}
}
function changePasswordValidate(){
	const password=document.querySelector("#currentPassword").value;
	const email=document.querySelector("#currentEmail").value;
	const msg=document.querySelector("#currentMsg");
	if (email.lastIndexOf("@")<3||email.lastIndexOf(".")<10|| email.indexOf("=")>-1||email.indexOf("&")>-1||email.indexOf("-")>-1) {
		msg.textContent="Password and Email are required, observe the role";
		return false;
	}
	if (password.indexOf("=")>-1) {
		msg.textContent="Password and Email are required, observe the role";
		return false;
	}
	else{
		return true;
	}
}

//New Password Script Page
function newEmailValidate(){
	const email=document.querySelector("#newEmail").value;
	if (email.lastIndexOf("@")<3||email.lastIndexOf(".")<10|| email.indexOf("=")>-1||email.indexOf("&")>-1||email.indexOf("-")>-1) {
		document.querySelector("#newEmailMsg").textContent="Invalide Email. Please correct it!";
		document.querySelector("#newEmailMsg").style.color="red";
		document.querySelector("#newEmail").focus();
		return false;	
	}
	else{
		document.querySelector("#newEmailMsg").textContent="Your Email*:";
		document.querySelector("#newEmailMsg").style.color="black";
		return true;
	}
}
function newPasswordValidate(){
	const password=document.querySelector("#newPassword").value;
	if (password.indexOf("=")>-1|| password.length<8) {
		document.querySelector("#newPasswordMsg").textContent="Please do not use '=', more then 8";
		document.querySelector("#newPasswordMsg").style.color="red";
		return false;
	}
	else{
		return true;
	}
}
function newValidate(){
	const password=document.querySelector("#newPassword").value;
	const email=document.querySelector("#newEmail").value;
	const msg=document.querySelector("#newMsg");
	if (email.lastIndexOf("@")<3||email.lastIndexOf(".")<10|| email.indexOf("=")>-1||email.indexOf("&")>-1||email.indexOf("-")>-1) {
		msg.textContent="Password and Email are required, observe the role";
		return false;
	}
	if (password.indexOf("=")>-1|| password.length<8) {
		msg.textContent="Password and Email are required, observe the role";
		return false;
	}
	else{
		return true;
	}
}
