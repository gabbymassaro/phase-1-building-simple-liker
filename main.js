// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById("modal").hidden = true

const hearts = document.getElementsByClassName("like-glyph")

hearts[0].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      document.getElementById("modal").hidden = true
      hearts[0].innerHTML = FULL_HEART
      hearts[0].classList.add("activated-heart")
    })
    .catch(function(error){
      console.log(error, "there's been an error!")
      document.getElementById("modal").hidden = false
      hearts[0].classList.add("hidden")
    })
})

hearts[1].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      document.getElementById("modal").hidden = true
      hearts[1].innerHTML = FULL_HEART
      hearts[1].classList.add("activated-heart")
    })
    .catch(function(error){
      console.log(error, "there's been an error!")
      document.getElementById("modal").hidden = false
    })
})

hearts[2].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      document.getElementById("modal").hidden = true
      hearts[2].innerHTML = FULL_HEART
      hearts[2].classList.add("activated-heart")
    })
    .catch(function(error){
      console.log(error, "there's been an error!")
      document.getElementById("modal").hidden = false
    })
})

hearts[3].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      document.getElementById("modal").hidden = true
      hearts[3].innerHTML = FULL_HEART
      hearts[3].classList.add("activated-heart")
    })
    .catch(function(error){
      console.log(error, "there's been an error!")
      document.getElementById("modal").hidden = false
    })
})

hearts[4].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      document.getElementById("modal").hidden = true
      hearts[4].innerHTML = FULL_HEART
      hearts[4].classList.add("activated-heart")
    })
    .catch(function(error){
      console.log(error, "there's been an error!")
      document.getElementById("modal").hidden = false
    })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
