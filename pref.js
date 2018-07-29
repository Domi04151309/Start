function setName(){
  var name = prompt("Please enter your name");
  setCookie("name", name, 365);
	if (name != "") {
    document.getElementById('name').innerHTML = "Your name is " + name;
  }else {
    document.getElementById('name').innerHTML = 'No name has been set';
  }
}
function getName(){
  var name = getCookie("name");
  if (name != "") {
    document.getElementById('name').innerHTML = "Your name is " + name;
  }
}
function setBg(){
  var background = prompt("Please enter an image URL");
  setCookie("image", background, 365);
  if (background != "") {
    document.getElementById('image').innerHTML = 'The image URL is <a href="' + background + '">' + background + '</a><br><br><img src="' + background + '">';
  }else {
    document.getElementById('image').innerHTML = 'No custom background has been set';
  }
}
function getBg(){
  var background = getCookie("image");
  if (background != "") {
    document.getElementById('image').innerHTML = 'The image URL is <a href="' + background + '">' + background + '</a><br><br><img src="' + background + '">';
  }
}
function deleteCookies(){
  removeCookie("name");
  removeCookie("image");
  document.getElementById('name').innerHTML = 'No name has been set';
  document.getElementById('image').innerHTML = 'No custom background has been set';
  alert("Deleted all cookies")
}