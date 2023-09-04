var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize audio when the document is loaded
  audio.load();

  const welcomeScreen = document.querySelector('.welcome-screen');
  const startButton = document.getElementById('start-button');
  const car = document.querySelector('.car');
  const wheels = document.querySelectorAll('.wheel img');
  const track = document.querySelector('.track');
  let gameStarted = false; // Track if the game has started

  // Car is static behind the welcome screen
  car.style.display = 'block';
  track.style.display = 'block';
  car.style.animationPlayState = 'paused';
  wheels.forEach(wheel => {
    wheel.style.animationPlayState = 'paused';
  });
  track.style.animationPlayState = 'paused';

   
  startButton.addEventListener('click', () => {
    welcomeScreen.style.display = 'none'; // Hide welcome screen
    car.style.animationPlayState = 'running';
    wheels.forEach(wheel => {
      wheel.style.animationPlayState = 'running';
    });
    track.style.animationPlayState = 'running';


      // Play the audio only if the game has started
      if (!gameStarted) {
        audio.play();
        gameStarted = true; // Set gameStarted to true once the game starts
      }
    });
   

  document.addEventListener('keydown', (event) => {
    if (gameStarted && event.key === 's') {
      if (car.style.animationPlayState === 'running') { // if s is pressed while car is running, then it will stop
        car.style.animationPlayState = 'paused';
        wheels.forEach(wheel => {
          wheel.style.animationPlayState = 'paused';
        });
        track.style.animationPlayState = 'paused';
        audio.pause(); 
      } else {
        car.style.animationPlayState = 'running'; //else, the car will start moving if it is static and s is pressed 
        wheels.forEach(wheel => {
          wheel.style.animationPlayState = 'running';
        });
        track.style.animationPlayState = 'running';
        audio.play(); 
      }
    }
  });
});






