document.querySelector("html").addEventListener("click", function() {
  // Play the audio
  document.querySelector("audio").play();
  
  // Remove the click event listener to prevent multiple playback
});