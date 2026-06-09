document
.getElementById("scrollBtn")
.addEventListener("click",()=>{

document
.getElementById("story")
.scrollIntoView({
behavior:"smooth"
});

});

document
.getElementById("revealBtn")
.addEventListener("click",()=>{

const letter =
document.getElementById("letter");

if(letter.style.display==="block"){
letter.style.display="none";
}
else{
letter.style.display="block";
}

});

const heartsContainer =
document.getElementById("hearts-container");

function createHeart() {

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "💘"
];

    heart.innerHTML =
    hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);

const startDate =
new Date("2025-10-10");

const today =
new Date();

const diff =
today - startDate;

const days =
Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("days-counter")
.innerText =
`${days} days of choosing you ❤️`;
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = "⏸ Pause Music";
    } else {
        bgMusic.pause();
        musicBtn.textContent = "🎵 Play Music";
    }

});