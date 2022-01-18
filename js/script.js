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

const mainStyle = document.documentElement.style
const background = localStorage.getItem('background')
const textColor = localStorage.getItem('text-color')
const blur = localStorage.getItem('blur')

if (background != null) mainStyle.setProperty('--bg', 'url(' + background + ')')
if (textColor != null) mainStyle.setProperty('--text-color', textColor)
if (blur != null) mainStyle.setProperty('--blur', (blur / 10) + 'px')

startTime()
