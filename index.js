let drums = document.querySelectorAll(".drum")

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}


document.addEventListener('keypress', function(e) {
  playSound(e.key);
  buttonAnimation(e.key);
})


function playSound(character) {
  var source
  switch (character) {
    case 'w':
      source = "sounds/tom-1.mp3";
      break;
    case 'a':
      source = "sounds/tom-2.mp3";
      break;
    case 's':
      source = "sounds/tom-3.mp3";
      break;
    case 'd':
      source = "sounds/tom-4.mp3";
      break;
    case 'j':
      source = "sounds/snare.mp3";
      break;
    case 'k':
      source = "sounds/crash.mp3";
      break;
    case 'l':
      source = "sounds/kick.mp3";
      break;
  }

  var sound = new Audio(source);
  sound.play();
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
