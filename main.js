// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById("modal");
modal.classList.add("hidden");
let btn = document.querySelectorAll(".like-glyph").forEach((like) => {
  like.addEventListener("click", (event) => {
    let heart = event.target;

    mimicServerCall()
      .then(function () {
        if (heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART;
          heart.classList.add("activated-heart");
        } else {
          heart.innerText = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
      })
      .catch(function (error) {
        modal.classList.remove("hidden");
        modal.innerText = error;
        setTimeout(() => modal.classList.add("hidden"), 5000);
      });

  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
