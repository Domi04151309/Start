const timeTxt = document.getElementById('time')
const messageTxt = document.getElementById('message')
let date, h, m, message

function startTime() {
	date = new Date()
	h = date.getHours()
	m = date.getMinutes()
  if (m < 10) m = '0' + m
	timeTxt.innerHTML = h + ':' + m

	message = 'Hello'
  if (h < 12) {
    message = 'Good Morning'
  } else if (h < 18) {
    message = 'Good Afternoon'
	} else if (h < 22) {
    message = 'Good Evening'
	} else if (h < 25) {
    message = 'Good Night'
	}
  messageTxt.innerHTML = [message, localStorage.getItem('name')].filter(x => x != null && x.length > 0).join(' ')
	setTimeout(startTime, 60000)
}

const backgroundView = document.getElementById('bg')
const background = localStorage.getItem('background')
const mode = localStorage.getItem('mode')

if (background != null) {
  backgroundView.style.backgroundImage = 'url(' + background + ')'
}
if (mode == 'dark') {
  backgroundView.style.backgroundColor = '#fff'
  backgroundView.style.color = '#000'
  document.getElementById('pref').style.backgroundImage = 'url(./images/gear_black.svg)'
}

startTime()
