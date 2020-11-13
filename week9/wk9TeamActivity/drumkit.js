


function playSound(e){
   console.log(e);
   const playAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

   if(!playAudio) return;
   key.classList.add('playing');
   //key.style.down = "10px";
   playAudio.currentTime = 0;
   playAudio.play();
}

function removeTransition(e){
    //console.log(this);
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);