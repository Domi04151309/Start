const nameTxt = document.getElementById('name')
const nameInput = document.getElementById('nameInput')
const bgImage = document.getElementById('background')
const bgFile = document.getElementById('bgFile')
const colorInput = document.getElementById('colorInput')
const blurInput = document.getElementById('blurInput')
const weatherInput = document.getElementById('weatherInput')

function setName() {
	localStorage.setItem('name', nameInput.value)
	nameTxt.innerHTML = nameInput.value.length > 0 ? nameInput.value : 'not set'
}

function setBg() {
  if (bgFile.files.length > 0) {
    let reader = new FileReader()
    reader.readAsDataURL(bgFile.files[0])
    reader.onload = () => {
      localStorage.setItem('background', reader.result)
      bgImage.src = reader.result
    }
    reader.onerror = error => {
      logTxt('Error: ', error)
    }
  }
}

function randomBg() {
	fetch("https://source.unsplash.com/featured/1920x1080/?nature").then(response => {
		return response.blob()
	}).then(blob => {
		let reader = new FileReader()
		reader.readAsDataURL(blob)
		reader.onload = () => {
			localStorage.setItem('background', reader.result)
			bgImage.src = reader.result
		}
		reader.onerror = error => {
			logTxt('Error: ', error)
		}
	})
}

function delBg() {
  localStorage.removeItem('background')
  bgImage.src = './images/bg.jpg'
  logTxt('Reset background')
}

function setTextColor() {
	localStorage.setItem('text-color', colorInput.value)
}

function setBlur() {
	localStorage.setItem('blur', blurInput.value)
	bgImage.style.filter = 'blur(' + (blurInput.value / 100) + 'vh)'
}

function setWeather() {
	localStorage.setItem('weather', weatherInput.checked)
}

function logTxt(action) {
	let elem = document.createElement('p')
  elem.innerHTML = action
	elem.classList.add('log')
	document.body.appendChild(elem)
	setTimeout(() => {
		document.body.removeChild(elem)
	}, 3000)
}

const name = localStorage.getItem('name')
const background = localStorage.getItem('background')
const textColor = localStorage.getItem('text-color')
const blur = localStorage.getItem('blur')
const weather = localStorage.getItem('weather') === 'true'

if (name != null && name.length > 0) {
	nameTxt.innerHTML = name
	nameInput.value = name
}
if (background != null) bgImage.src = background
if (textColor != null) colorInput.value = textColor
if (blur != null) {
	blurInput.value = blur
	bgImage.style.filter = 'blur(' + (blur / 100) + 'vh)'
}
weatherInput.checked = weather
