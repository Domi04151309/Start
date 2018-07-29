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
  if(h >= 0 && h < 12){
    document.getElementById('message').innerHTML = "Good Morning";
  }else if(h >= 12 && h < 18){
    document.getElementById('message').innerHTML = "Good Afternoon";
	}else if(h >= 18 && h < 22){
    document.getElementById('message').innerHTML = "Good Evening";
	}else if(h >= 21 && h < 25){
    document.getElementById('message').innerHTML = "Good Night";
	}else{
    document.getElementById('message').innerHTML = "Hello";
	}
}
startTime();