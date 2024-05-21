const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.getElementById("modal")
errorModal.classList.add("hidden")

const hearts = document.getElementsByClassName("like-glyph")
heartsArray = [...hearts]

heartsArray.forEach (function (heart) {
  heart.addEventListener('click', (e) => {
    mimicServerCall()
      .then(function(response) {
        if (heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART
          heart.classList.add("activated-heart")
        } else {
          heart.innerText = EMPTY_HEART
          heart.classList.remove("activated-heart")
        }
      })
      .catch(function(error){
        errorModal.classList.remove("hidden")
        setTimeout(() => {
          errorModal.classList.add("hidden")
        }, 3000)
      })
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
