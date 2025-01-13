const hamBurger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close")
const menu = document.querySelector("nav ul")

let isClicked = false
const toggleNav = (isClicked) => {
    if(isClicked){
        menu.classList.toggle("show");
        hamBurger.classList.toggle("burger-hide");
        closeBtn.classList.toggle("show-close")
    } else{ 
        menu.classList.remove("show");
        hamBurger.classList.remove("burger-hide");
        closeBtn.classList.remove("show-close");
    }
}
hamBurger.onclick = () => {
    isClicked = true;
    toggleNav(isClicked)
}

closeBtn.onclick = () => {
    isClicked = false;
    toggleNav(isClicked)
}

/* Auto Typed */
function typeText() {
    const texts = [
        "I am Leslie Brown...",
        "I am a Frontend Web Developer",
        "I create responsive and user-friendly websites",
        "I turn ideas into visually stunning designs",
        "I strive to deliver exceptional user experiences..."

    ];
    const element = document.getElementById('typed-text');
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < texts[textIndex].length) {
            element.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed
        } else {
            setTimeout(erase, 2000); // Pause before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            element.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Adjust erasing speed
        } else {
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
            setTimeout(type, 1000); // Pause before typing the next text
        }
    }

    type();
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', typeText);

let staticBar = document.querySelector(".up-arrow");

window.addEventListener("scroll", ()=>{
    staticBar.classList.toggle("sticky", window.scrollY > 300);
});