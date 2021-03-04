
const play =()=>{

    const start =()=>{

        //introScreen to fadeout
const playbtn = document.querySelector('.intro button');
const drumkit = document.querySelector('.keys');
const introscreen = document.querySelector('.intro');
playbtn.addEventListener('click',()=>{
    introscreen.classList.add('fadeout');
    drumkit.classList.remove('fadeout');
    
});
    }
    //main kit working
const drumplay =()=>{
window.addEventListener('keydown',function(e){
           
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    
    if(!audio)return;
    audio.play();
    audio.currentTime =0;
    key.classList.add('playing');
});

function removeTransition(e){
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
}
start();
const playbtn = document.querySelector('.intro button');
playbtn.addEventListener('click',drumplay);

}
play();