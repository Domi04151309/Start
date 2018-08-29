function setName(){
  var nameInput = document.getElementById('nameInput');
  var name = nameInput.value;
  nameInput.value = '';
  setCookie('name', name, 365);
	if (name != '') {
    document.getElementById('name').innerHTML = 'Your name is ' + name;
  }else {
    document.getElementById('name').innerHTML = 'No name has been set';
  }
}
function getName(){
  var name = getCookie('name');
  if (name != '') {
    document.getElementById('name').innerHTML = 'Your name is ' + name;
  }
}
function setBg(){
  var bgInput = document.getElementById('bgInput');
  var background = bgInput.value;
  bgInput.value = '';
  setCookie('image', background, 365);
  if (background != '' && background.length <= 100) {
    document.getElementById('image').innerHTML = 'The image URL is <a href="' + background + '">' + background + '</a><br><br><img src="' + background + '">';
  }else if (background != '' && background.length > 100){
    document.getElementById('image').innerHTML = 'The image URL is too long to display<br><br><img src="' + background + '">';
  }else {
    document.getElementById('image').innerHTML = 'No custom background has been set';
  }
}
function getBg(){
  var background = getCookie('image');
  if (background != '' && background.length <= 100) {
    document.getElementById('image').innerHTML = 'The image URL is <a href="' + background + '">' + background + '</a><br><br><img src="' + background + '">';
  }else if (background != '' && background.length > 100){
    document.getElementById('image').innerHTML = 'The image URL is too long to display<br><br><img src="' + background + '">';
  }
}
function getBase64(file){
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    var background = reader.result
    setCookie('image', background, 365);
  if (background != '' && background.length <= 100) {
    document.getElementById('image').innerHTML = 'The image URL is <a href="' + background + '">' + background + '</a><br><br><img src="' + background + '">';
  }else if (background != '' && background.length > 100){
    document.getElementById('image').innerHTML = 'The image URL is too long to display<br><br><img src="' + background + '">';
  }else {
    document.getElementById('image').innerHTML = 'No custom background has been set';
  }
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}
function uploadBg(){
  var fileInput = document.getElementById('bgFile');
  var files = fileInput.files;
  if (files.length > 0) {
    var background = getBase64(files[0]);
    fileInput.value = '';
  }
}
function setMode(){
  var mode = getCookie('mode');
  if (mode == '') {
    setCookie('mode', 'dark', 365);
    document.getElementById('mode').innerHTML = 'Text color: black';
  }else {
    setCookie('mode', '', 365);
    document.getElementById('mode').innerHTML = 'Text color: white';
  }
}
function getMode(){
  var mode = getCookie('mode');
  if (mode == 'dark') {
    document.getElementById('mode').innerHTML = 'Text color: black';
  }else {
    document.getElementById('mode').innerHTML = 'Text color: white';
  }
}
function deleteCookies(){
  removeCookie('name');
  removeCookie('image');
  removeCookie('mode');
  document.getElementById('name').innerHTML = 'No name has been set';
  document.getElementById('image').innerHTML = 'No custom background has been set';
  document.getElementById('mode').innerHTML = 'Text color: white';
  alert('Deleted all cookies')
}