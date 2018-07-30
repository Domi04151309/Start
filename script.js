function startTime(){
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	m = checkTime(m);
	document.getElementById('time').innerHTML = h + ":" + m;
	checkMessage(h);
	var t = setTimeout(startTime, 1000);
}
function checkTime(i){
	if (i < 10) {i = "0" + i};
	return i;
}
function checkMessage(h){
  var message = "Hello";
  var name = getCookie("name");
  if(h >= 0 && h < 12){
    message = "Good Morning";
  }else if(h >= 12 && h < 18){
    message = "Good Afternoon";
	}else if(h >= 18 && h < 22){
    message = "Good Evening";
	}else if(h >= 21 && h < 25){
    message = "Good Night";
	}
  document.getElementById('message').innerHTML = message + " " + name;
}
function checkBg(){
  var background = getCookie("image");
  if (background != "" && !!document.getElementById("bg")) {
    document.getElementById("bg").style.backgroundImage = "url(" + background + ")";
  }
}
function checkMode(){
  var mode = getCookie("mode");
  if (mode == "dark" && !!document.getElementById("bg")) {
    console.log("text" + mode);
    document.getElementById("bg").style.backgroundColor = "#fff";
    document.getElementById("bg").style.color = "#000";
    document.getElementById("pref").style.backgroundImage = "url(./gear_black.svg)";
  }
}
checkBg();
checkMode();
startTime();