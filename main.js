// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById("modal")
errorModal.classList.add("hidden")

const hearts = document.getElementsByClassName("like-glyph")

hearts[0].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      errorModal.classList.add("hidden")
      hearts[0].innerHTML = FULL_HEART
      hearts[0].classList.add("activated-heart")
    })
    .catch(function(error){
      errorModal.classList.remove("hidden")
      setTimeout(errorModal.classList.remove("hidden"), 3000)
      hearts[0].innerHTML = EMPTY_HEART
      hearts[0].classList.remove("activated-heart")
    })
})

hearts[1].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      errorModal.classList.add("hidden")
      hearts[1].innerHTML = FULL_HEART
      hearts[1].classList.add("activated-heart")
    })
    .catch(function(error){
      setTimeout(errorModal.classList.remove("hidden"), 3000)
      hearts[1].innerHTML = EMPTY_HEART
      hearts[1].classList.remove("activated-heart")
    })
})

hearts[2].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      errorModal.classList.add("hidden")
      hearts[2].innerHTML = FULL_HEART
      hearts[2].classList.add("activated-heart")
    })
    .catch(function(error){
      setTimeout(errorModal.classList.remove("hidden"), 3000)
      hearts[2].innerHTML = EMPTY_HEART
      hearts[2].classList.remove("activated-heart")
    })
})

hearts[3].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      errorModal.classList.add("hidden")
      hearts[3].innerHTML = FULL_HEART
      hearts[3].classList.add("activated-heart")
    })
    .catch(function(error){
      setTimeout(errorModal.classList.remove("hidden"), 3000)
      hearts[3].innerHTML = EMPTY_HEART
      hearts[3].classList.remove("activated-heart")
    })
})

hearts[4].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      errorModal.classList.add("hidden")
      hearts[4].innerHTML = FULL_HEART
      hearts[4].classList.add("activated-heart")
    })
    .catch(function(error){
      setTimeout(errorModal.classList.remove("hidden"), 3000)
      hearts[4].innerHTML = EMPTY_HEART
      hearts[4].classList.remove("activated-heart")
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
