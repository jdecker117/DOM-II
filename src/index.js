import './less/index.less'

// Your code goes here!
//Function Fun
function highlight(evt) {
    evt.target.style.color = "blue"
}
function reset(evt) {
    evt.target.style.color = "black"
}
function bgSwitch (evt) {
    const pressedKey = evt.key;
    switch(pressedKey){
        case "f": bodyTag.style.backgroundColor = "fuchsia"; break;
        case "d": bodyTag.style.backgroundColor = "darkcyan"; break;
        case "s": bodyTag.style.backgroundColor = "steelblue"; break;
        case "a": bodyTag.style.backgroundColor = "antiquewhite"; break;
    }
}
let scale = 1;
function zoom(evt){
    evt.preventDefault();
    if(evt.deltaY < 0){
        scale += evt.deltaY * -0.01;
    }
    else{
        scale -= evt.deltaY * 0.01;
    }
    scale = Math.min(Math.max(.1, scale), 1);
    evt.target.style.transform = `scale(${scale})`;
}

let font = parseInt(prompt("Choose your font-size", ""));
if(font!=null){
    document.querySelector("*").style.fontSize = font + "px";
}

function blurred(evt){
    evt.target.style.color = "purple"
}

function scared(evt){
    alert("Woah WOAH WOAHHH!!!");
}

function addP(evt){
    const myTag = document.createElement('p');
    const myText = document.createTextNode("Press 'a', 's', 'd', or 'f' to change the background color.")
    myTag.appendChild(myText);
    header.appendChild(myTag);
}

function txtChanger(evt){
   let pageTop = window.pageYOffset;

   switch(true){
    case pageTop < 250 : bodyTag.style.color = "darkorange"; break;
    case pageTop < 500 : bodyTag.style.color = "limegreen"; break;
    // case pageTop < 300 : bodyTag.style.color = "darksalmon"; break;
   }
}

function txtSelection(evt){
    const selection = evt.target.textContent.substring(evt.target.selectionStart, evt.target.selectionEnd);
    console.log(selection);
}

//Grabbers
const navLinks = document.querySelectorAll(".nav-link")
const title = document.querySelector("h1");
const bodyTag = document.querySelector("body");
const images = document.querySelectorAll("img");
const header = document.querySelector('.intro');

//Application
navLinks.forEach(item => {item.addEventListener("mouseover", highlight)})
navLinks.forEach(item => {item.addEventListener("mouseleave", reset)})
navLinks.forEach(item => {item.addEventListener("blur", blurred)})
bodyTag.addEventListener("keydown", bgSwitch);
images.forEach(item => item.addEventListener("wheel", zoom));
window.addEventListener('resize', scared);
window.addEventListener('load', addP);
window.addEventListener('scroll', txtChanger)
bodyTag.addEventListener('select', txtSelection);



// document.addEventListener("wheel", evt => {
//     console.log("X: ", evt.deltaX);
//     console.log("Y: ", evt.deltaY);
//   })

