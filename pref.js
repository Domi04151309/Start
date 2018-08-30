var log = document.getElementById('log');
var nameTxt = document.getElementById('name');
var nameInput = document.getElementById('nameInput');
var bgTxt = document.getElementById('image');
var colorTxt = document.getElementById('mode');
var bgInput = document.getElementById('bgInput');
var bgFile = document.getElementById('bgFile');
function setName(){
  var name = nameInput.value;
	if (name != '') {
    nameInput.value = '';
    setCookie('name', name, 365);
    nameTxt.innerHTML = 'Your name is ' + name;
    logTxt('Changed name');
  }else {
    error(nameTxt);
  }
}
function delName(){
  removeCookie('name');
  nameTxt.innerHTML = 'No name has been set';
  logTxt('Deleted name');
}
function getName(){
  var name = getCookie('name');
  if (name != '') {
    nameTxt.innerHTML = 'Your name is ' + name;
  }
}
function setBg(){
  var background = bgInput.value;
  if(background != ''){
    bgInput.value = '';
    setCookie('image', background, 365);
    if (background.length <= 100) {
      bgTxt.innerHTML = 'The image URL is <a href="' + background + '">' + background + '</a><br><br><img src="' + background + '">';
      logTxt('Changed background image');
    }else if (background.length > 100){
      bgTxt.innerHTML = 'The image URL is too long to display<br><br><img src="' + background + '">';
      logTxt('Changed background image');
    }else {
      error(bgTxt);
    }
  }
}
function delBg(){
  removeCookie('image');
  bgTxt.innerHTML = 'No custom background has been set';
  logTxt('Reset background');
}
function getBg(){
  var background = getCookie('image');
  if (background.indexOf('base64') > -1 && background.startsWith('data%3A')){
    background = decodeURIComponent(background);
  }
  if (background != '' && background.length <= 100) {
    bgTxt.innerHTML = 'The image URL is <a href="' + background + '">' + background + '</a><br><br><img src="' + background + '">';
  }else if (background != '' && background.length > 100){
    bgTxt.innerHTML = 'The image URL is too long to display<br><br><img src="' + background + '">';
  }
}
function getBase64(file){
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    var background = reader.result;
    var bgCookie = encodeURIComponent(background);
    setCookie('image', bgCookie, 365);
    if (background != '' && background.length <= 100){
      bgTxt.innerHTML = 'The image URL is <a href="' + background + '">' + background + '</a><br><br><img src="' + background + '">';
    }else if (background != '' && background.length > 100){
      bgTxt.innerHTML = 'The image URL is too long to display<br><br><img src="' + background + '">';
    }else{
      bgTxt.innerHTML = 'No custom background has been set';
    }
  };
  reader.onerror = function (error) {
    logTxt('Error: ', error);
  };
}
function uploadBg(){
  alert('Experimental feature!');
  var files = bgFile.files;
  if (files.length > 0) {
    var background = getBase64(files[0]);
    bgFile.value = '';
  }
}
function setMode(){
  var mode = getCookie('mode');
  if (mode == '') {
    setCookie('mode', 'dark', 365);
    colorTxt.innerHTML = 'Text color: black';
  }else {
    setCookie('mode', '', 365);
    colorTxt.innerHTML = 'Text color: white';
  }
  logTxt('Changed text color');
}
function getMode(){
  var mode = getCookie('mode');
  if (mode == 'dark') {
    colorTxt.innerHTML = 'Text color: black';
  }else {
    colorTxt.innerHTML = 'Text color: white';
  }
}
function deleteCookies(){
  removeCookie('name');
  removeCookie('image');
  removeCookie('mode');
  nameTxt.innerHTML = 'No name has been set';
  bgTxt.innerHTML = 'No custom background has been set';
  colorTxt.innerHTML = 'Text color: white';
  logTxt('Deleted all cookies');
}
function logTxt(param){
  log.innerHTML = 'Last Action: ' + param;
}
function error(param){
  logTxt('An unexpected error occured');
  param.innerHTML = 'An unexpected error occured';
}