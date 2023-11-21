function getFormvalue() {
    //Write your code here

	let fname=document.getElementById("first name");
	let lname=document.getElementById("last name");

	let name=fname.value + " " + lname.value;

	alert(name);

}
