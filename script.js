//your JS code here. If required.
let sound = ["applause", "boo", "gasp", "tada", "victory", "wrong", "stop"];
document.querySelectorAll(".btn").forEach((button) => {
	button.addEventListener("click", () => {
		stopSound();

		const sound = button.textContent.trim();
	    const audio = document.createElement("audio");
	    audio.src = `./sounds/${sound}.mp3`; 
	    audio.play();
	    audio.id = "current-audio";
	    document.body.appendChild(audio);
	})
})

document.querySelector(".stop").addEventListener("click", () => {
  stopSounds();
});

function stopSounds() {
  const current = document.getElementById("current-audio");
  if (current) {
    current.pause();
    current.remove();
  }
}