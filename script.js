//your JS code here. If required.
// const buttons = document.querySelectorAll(".btn");

// buttons.forEach(function(btn) {
//   btn.addEventListener("click", function() {
//     const sound = btn.textContent.trim();
//     const audio = new Audio("sounds/" + sound + ".mp3");
//     audio.play();
//   });
// });

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   const audio = new Audio("sounds/applause.mp3");
//   audio.play();
// });


const sounds = {
  applause: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  boo: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  gasp: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  tada: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  victory: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  wrong: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
};

const buttons = document.querySelectorAll(".btn");

let currentAudio = null;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const sound = btn.textContent.trim();

    if (sound === "stop") {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      return;
    }

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(sounds[sound]);
    currentAudio.play();
  });
});