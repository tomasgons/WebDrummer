const keys = document.querySelectorAll(".key");
const samples = document.querySelectorAll("audio")

const playSound = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}


keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

// I added this so you can also click on the keys (or )

keys.forEach((key, index) => {
  key.addEventListener("click", () => {
    if (!samples) return;
    key.classList.add("playing");
    samples[index].currentTime = 0;
    samples[index].play();

  });
});






