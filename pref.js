function setName(){
  var name = prompt("Please enter your name");
  setCookie("name", name, 365);
	document.getElementById('name').innerHTML = "Your name is " + name;
}
function getName(){
  var user = getCookie("name");
  if (user != "") {
    document.getElementById('name').innerHTML = "Your name is " + name;
  }
}
function deleteCookies(){
  removeCookie("name");
  alert("Deleted all cookies")
}