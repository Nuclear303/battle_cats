document.addEventListener("keydown", function(event) {
  if (event.key === "m") {
    // Get the audio element
    var audio = document.querySelector("audio");
    
    // Check if the audio is playing
    if (!audio.paused) {
      // Pause the audio
      audio.pause();
    } else {
      // Start playing the audio
      audio.play();
    }
  }
});