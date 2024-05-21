const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.getElementById("modal")
errorModal.classList.add("hidden")

const hearts = document.getElementsByClassName("like-glyph")

hearts[0].addEventListener('click', (e) => {
  mimicServerCall()
    .then(function(response) {
      hearts[0] = EMPTY_HEART
      if (hearts[0].innerText === EMPTY_HEART) {
        hearts[0].innerText = FULL_HEART
        hearts[0].classList.add("activated-heart")
      } else {
        hearts[0].innerText = EMPTY_HEART
        hearts[0].classList.remove("activated-heart")
      }
    })
    .catch(function(error){
      errorModal.classList.remove("hidden")
      setTimeout(() => {
        errorModal.classList.add("hidden")
      }, 3000)
    })
})

hearts[1].addEventListener('click', function() {
  mimicServerCall()
  .then(function(response) {
    hearts[1] = EMPTY_HEART
    if (hearts[1].innerText === EMPTY_HEART) {
      hearts[1].innerText = FULL_HEART
      hearts[1].classList.add("activated-heart")
    } else {
      hearts[1].innerText = EMPTY_HEART
      hearts[1].classList.remove("activated-heart")
    }
  })
  .catch(function(error){
    errorModal.classList.remove("hidden")
    setTimeout(() => {
      errorModal.classList.add("hidden")
    }, 3000)
  })
})

hearts[2].addEventListener('click', function() {
  mimicServerCall()
  .then(function(response) {
    hearts[2] = EMPTY_HEART
    if (hearts[2].innerText === EMPTY_HEART) {
      hearts[2].innerText = FULL_HEART
      hearts[2].classList.add("activated-heart")
    } else {
      hearts[2].innerText = EMPTY_HEART
      hearts[2].classList.remove("activated-heart")
    }
  })
  .catch(function(error){
    errorModal.classList.remove("hidden")
    setTimeout(() => {
      errorModal.classList.add("hidden")
    }, 3000)
  })
})

hearts[3].addEventListener('click', function() {
  mimicServerCall()
  .then(function(response) {
    hearts[3] = EMPTY_HEART
    if (hearts[3].innerText === EMPTY_HEART) {
      hearts[3].innerText = FULL_HEART
      hearts[3].classList.add("activated-heart")
    } else {
      hearts[3].innerText = EMPTY_HEART
      hearts[3].classList.remove("activated-heart")
    }
  })
  .catch(function(error){
    errorModal.classList.remove("hidden")
    setTimeout(() => {
      errorModal.classList.add("hidden")
    }, 3000)
  })
})

hearts[4].addEventListener('click', function() {
  mimicServerCall()
  .then(function(response) {
    hearts[4] = EMPTY_HEART
    if (hearts[4].innerText === EMPTY_HEART) {
      hearts[4].innerText = FULL_HEART
      hearts[4].classList.add("activated-heart")
    } else {
      hearts[4].innerText = EMPTY_HEART
      hearts[4].classList.remove("activated-heart")
    }
  })
  .catch(function(error){
    errorModal.classList.remove("hidden")
    setTimeout(() => {
      errorModal.classList.add("hidden")
    }, 3000)
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
