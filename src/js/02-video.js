import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function handleLoaded() {
  let seconds = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(seconds)
    .then(function (seconds) {
      console.log('The actual time that the player seeked to: ' + seconds);
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          console.log('The time was less than 0 or greater than the video’s duration');
          break;

        default:
          console.log('Some other error occurred');
          break;
      }
    });
}

function handleTimeUpdate({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log(seconds);
}

player.on('loaded', handleLoaded);
player.on('timeupdate', throttle(handleTimeUpdate, 1000));