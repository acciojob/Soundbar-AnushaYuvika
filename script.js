//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const sound = btn.textContent.trim();
    const audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
  });
});

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const audio = new Audio("sounds/applause.mp3");
  audio.play();
});