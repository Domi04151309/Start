const log = document.getElementById('log')
const nameTxt = document.getElementById('name')
const nameInput = document.getElementById('nameInput')
const colorTxt = document.getElementById('mode')
const bgImage = document.getElementById('background')
const bgInput = document.getElementById('bgInput')
const bgFile = document.getElementById('bgFile')

function setName() {
  var _name = nameInput.value
	if (_name != '') {
    nameInput.value = ''
    localStorage.setItem('name', _name)
    nameTxt.innerHTML = 'Your name is ' + _name
    logTxt('Changed name')
  } else {
    logTxt('Error - Please enter a name first')
  }
}

function delName() {
  localStorage.removeItem('name')
  nameTxt.innerHTML = 'No name has been set'
  logTxt('Deleted name')
}

function setBg() {
  var _background = bgInput.value;
  if (_background != '') {
    bgInput.value = ''
    localStorage.setItem('background', _background)
    bgImage.src = background
    logTxt('Changed background image')
  }else {
    logTxt('Error - Please enter a URL first')
  }
}

function delBg() {
  localStorage.removeItem('background')
  bgImage.src = './images/bg.jpg'
  logTxt('Reset background')
}

function uploadBg() {
  var files = bgFile.files;
  if (files.length > 0) {
    var reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = function () {
      var _background = reader.result
      localStorage.setItem('background', _background)
      bgImage.src = _background
    }
    reader.onerror = function (error) {
      logTxt('Error: ', error)
    }
  }
}

function setMode() {
  if (localStorage.getItem('mode') == null) {
    localStorage.setItem('mode', 'dark');
    colorTxt.innerHTML = 'Text color: black'
  } else {
    localStorage.removeItem('mode')
    colorTxt.innerHTML = 'Text color: white'
  }
  logTxt('Changed text color')
}

function logTxt(param) {
  log.innerHTML = 'Last Action: ' + param
}

if (name != null) {
  nameTxt.innerHTML = 'Your name is ' + name
}
if (background != null) {
  bgImage.src = background
}
if (mode == 'dark') {
  colorTxt.innerHTML = 'Text color: black'
} else {
  colorTxt.innerHTML = 'Text color: white'
}
