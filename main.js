// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById("modal").hidden = true

const hearts = document.getElementsByClassName("like-glyph")

hearts[0].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      console.log(response, "I've been clicked!")
    })
    .catch(function(error){
      console.log(error, "there's been an error!")
    })
})

hearts[1].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      console.log(response, "I've been clicked!")
    })
    .catch(function(error){
      console.log(error, "there's been an error!")
    })
})

hearts[2].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      console.log(response, "I've been clicked!")
    })
    .catch(function(error){
      console.log(error, "there's been an error!")
    })
})

hearts[3].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      console.log(response, "I've been clicked!")
    })
    .catch(function(error){
      console.log(error, "there's been an error!")
    })
})

hearts[4].addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      console.log(response, "I've been clicked!")
    })
    .catch(function(error){
      console.log(error, "there's been an error!")
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
