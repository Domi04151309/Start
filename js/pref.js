const nameTxt = document.getElementById('name')
const nameInput = document.getElementById('nameInput')
const bgImage = document.getElementById('background')
const bgFile = document.getElementById('bgFile')
const colorInput = document.getElementById('colorInput')

function setName() {
	if (nameInput.value != '') {
    localStorage.setItem('name', nameInput.value)
    nameTxt.innerHTML = nameInput.value
    logTxt('Changed name to "' + nameInput.value + '"')
		nameInput.value = ''
  } else {
    logTxt('Error - Please enter a name first')
  }
}

function delName() {
  localStorage.removeItem('name')
  nameTxt.innerHTML = 'not set'
  logTxt('Deleted name')
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

function delBg() {
  localStorage.removeItem('background')
  bgImage.src = './images/bg.jpg'
  logTxt('Reset background')
}

function setTextColor() {
	localStorage.setItem('text-color', colorInput.value)
	logTxt('Changed name to "' + colorInput.value + '"')
}

function resetTextColor() {
  localStorage.removeItem('text-color')
  colorInput.value = '#ffffff'
  logTxt('Reset text color')
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

if (name != null) nameTxt.innerHTML = name
if (background != null) bgImage.src = background
if (textColor != null) colorInput.value = textColor
