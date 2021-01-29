


var beClicked = document.querySelectorAll(".drum").length;

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    animateButton(this.innerHTML);
  });
}

document.addEventListener("keydown", function () {
  makeSound(event.key);
  animateButton(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:

  }
}

function animateButton (pressedKey) {
  var buttonActivated = document.querySelector("." + pressedKey);//.classList.add("pressed");
  buttonActivated.classList.add("pressed");
  setTimeout(function () {
    buttonActivated.classList.remove("pressed");
  }, 100);
}


// # quick note AUDIO is a pre-engineered constructor class
// even if we can't see it it might look like this:
// function Audio (fileLocation) {
//   this.fileLocation = fileLocation;
//   this.play = function () {
//     // tap into the audio hardware
//     // check the file at the fileLocation exists
//     // check the file at fileLocation is asound file
//     // play the file at fileLocation
//   }
// }

// document.addEventListener("keydown", function () {
//   switch (event.key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       var tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       var tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       var snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//     case "k":
//       var kick = new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//     case "l":
//       var crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     default:
//
//   }
// });





// another variant of the code
// var beClicked = document.querySelectorAll(".drum").length;
//
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     switch (this.innerHTML) {
//       case "w":
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
//       case "k":
//         var kick = new Audio("sounds/kick-bass.mp3");
//         kick.play();
//         break;
//       case "l":
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//       default: console.log(this.innerHTML);
//
//     }
//   });
// }
//
//
//
// document.addEventListener("keydown", function () {
//   makeSound(this);
// });
//
// function makeSound(key) {
//   switch (event.key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       var tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       var tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       var snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//     case "k":
//       var kick = new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//     case "l":
//       var crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     default:
//
//   }
// }
//
//
//
//
//
//
//
// //
//
//
//
// //
