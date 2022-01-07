const piano = document.querySelector(".piano");
const pianoKeys = document.querySelectorAll(".piano-key");
const fullScreenButton = document.querySelector(".fullscreen");
const btnNotes = document.querySelector(".btn-notes");
const btnLetters = document.querySelector(".btn-letters") 


function toggleToLetters(){
    btnLetters.classList.add("btn-active");
    btnNotes.classList.remove("btn-active");
    pianoKeys.forEach((el)=>{
    el.classList.add('piano-key-letter');
})
}
function toggleToNotes(event){
    btnNotes.classList.add("btn-active");
    btnLetters.classList.remove("btn-active");
    pianoKeys.forEach((el)=>{
        el.classList.remove('piano-key-letter');
    })
}
function toggleFullScreeen(){
   if (document.fullscreenElement) {
    document.exitFullscreen();
   }
   else document.documentElement.requestFullscreen();
}

function start(event){
    let note = document.getElementById(event.target.dataset.note);
    event.target.classList.add("piano-key-active");
    note.currentTime=0;
    note.play();
    pianoKeys.forEach((element)=>{
        element.addEventListener("mouseover",startSound);
        element.addEventListener("mouseout",stopSound)
    });
}

function stop(event){
    let note = document.getElementById(event.target.dataset.note);
    event.target.classList.remove("piano-key-active");
    pianoKeys.forEach((element)=>{
        element.removeEventListener("mouseover",startSound);
        element.removeEventListener("mouseout",stopSound)
    })
}

function startSound(event){
    let note = document.getElementById(event.target.dataset.note);
    event.target.classList.add("piano-key-active");
    note.currentTime=0;
    note.play();
}
function stopSound(event){
    event.target.classList.remove("piano-key-active");
}

function KeyDown(event){
    if(event.repeat) return;
   let audio = document.querySelector(`audio[data-code ='${event.keyCode}']`);
   let key = document.querySelector(`.piano-key[data-code = '${event.keyCode}']  `);
    if(!key )return;
       key.classList.add("piano-key-active");
       audio.currentTime=0;
       audio.play();
}
function KeyUp(event){
    let key = document.querySelector(`.piano-key[data-code = '${event.keyCode}']  `);
    if(!key) return;
    key.classList.remove("piano-key-active");
}


window.addEventListener("keyup",KeyUp);
window.addEventListener("keydown",KeyDown);
window.addEventListener("mouseup",stop);
btnLetters.addEventListener("click",toggleToLetters);
btnNotes.addEventListener("click",toggleToNotes)
piano.addEventListener("mousedown",start);
fullScreenButton.addEventListener("click",toggleFullScreeen)





//const letter = code.replace('Key', '')