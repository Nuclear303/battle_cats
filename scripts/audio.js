document.body.style = "width:100vw; height:100vh;position:absolute;"
document.querySelector("body").addEventListener("click", function() {
  // Play the audio
  document.querySelector("audio").play();
  
  // Remove the click event listener to prevent multiple playback
});