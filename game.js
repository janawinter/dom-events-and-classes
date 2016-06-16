// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue (evt) {

  evt.target.classList.toggle('blue')
  updateCounts()
}

// CREATE FUNCTION hide HERE
function hide (evt) {
  evt.target.classList.toggle('invisible')
updateCounts()

}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
}

var score = document.getElementsByClassName('board')[0].children
for (var i=0; i < score.length; i++) {

if (score[i].classList.contains('green')){
totals.green = totals.green + 1;
 }
else if (score[i].classList.contains('blue')){
totals.blue = totals.blue + 1;
}
else if (score[i].classList.contains('invisible')){
totals.invisible=totals.invisible +1;
}
}
 displayTotals(totals)
}

// WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS


  // Once you've done the counting, this function will update the display


function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
