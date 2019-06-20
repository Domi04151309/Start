var today = new Date()
var h = today.getHours()
var m = today.getMinutes()
var message = "Hello"
const timeTxt = document.getElementById('time')
const messageTxt = document.getElementById('message')
const bg = document.getElementById("bg")
const name = localStorage.getItem("name")
const displayName = (name == null) ? "" : " " + name
const background = localStorage.getItem("background")
const mode = localStorage.getItem("mode")

function startTime() {
	h = today.getHours()
	m = today.getMinutes()
  if (m < 10) {
    m = "0" + m
  }
	timeTxt.innerHTML = h + ":" + m
  if (h >= 0 && h < 12) {
    message = "Good Morning"
  } else if (h >= 12 && h < 18) {
    message = "Good Afternoon"
	} else if (h >= 18 && h < 22) {
    message = "Good Evening"
	} else if (h >= 21 && h < 25) {
    message = "Good Night"
	} else {
    message = "Hello"
  }
  messageTxt.innerHTML = message + displayName
	setTimeout(startTime, 1000)
}

if (background != null && !!document.getElementById("bg")) {
  bg.style.backgroundImage = "url(" + background + ")"
}

if (mode == "dark" && !!document.getElementById("bg")) {
  bg.style.backgroundColor = "#fff"
  bg.style.color = "#000"
  document.getElementById("pref").style.backgroundImage = "url(./images/gear_black.svg)"
}

startTime()
