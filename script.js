const music = document.getElementById('bg-music');
const btn = document.getElementById('music-toggle');

// Set your single .mpeg file path here
if (music) {
  music.src = "emmy/a2.mpeg"; // Replace 'a2.mpeg' with your exact file name
}

if (btn && music) {
  btn.addEventListener('click', function() {
    if (music.paused) {
      music.play().then(() => {
        btn.innerText = "🎵 Music on";
      }).catch(err => {
        console.log("Audio playback error:", err);
      });
    } else {
      music.pause();
      btn.innerText = "🎵 Music off";
    }
  });
}

// Candle Extinguish Functionality
function extinguishCandle(element) {
  const flame = element.querySelector('.flame');
  if (flame) {
    flame.style.display = 'none';
  }
}

function blowCandles() {
  const flames = document.querySelectorAll('.flame');
  flames.forEach(flame => flame.style.display = 'none');
  
  const wishMsg = document.getElementById('wish-message');
  if (wishMsg) {
    wishMsg.style.display = 'block';
  }
}

// Love Letter Toggle
function toggleLetter() {
  const modal = document.getElementById('letter-modal');
  if (modal) {
    modal.classList.toggle('hidden');
  }
}