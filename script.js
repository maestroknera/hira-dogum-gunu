// ===============================
// HİRA ❤️ ARDA
// ===============================

// -------------------------------
// Daktilo Efekti
// -------------------------------

const message = `

Aşkım Hira...

Bugün senin doğum günün.

Belki sana dünyanın en pahalı hediyesini veremedim.

Ama sana kalbimden gelen küçük bir dünya hazırlamak istedim.

12 Haziran'dan beri hayatımın en güzel anıları seninle oluştu.

Her gülüşün,
her bakışın,
her sarılışın...

Benim için tarif edemeyeceğim kadar değerli.

İyi ki doğdun.

İyi ki hayatımdasın.

Birlikte daha nice güzel anılar biriktirmek dileğiyle...

Seni içime sığdıramayacak kadar çok seviyorum.

❤️

— Arda

`;

let i = 0;

function typeWriter() {

    if (i < message.length) {

        document.getElementById("typingText").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 45);

    }

}

document.getElementById("start").onclick = () => {

    document.querySelector(".story").scrollIntoView({

        behavior: "smooth"

    });

    if (i === 0) {

        setTimeout(typeWriter, 600);

    }

};


// -------------------------------
// Sayaç
// -------------------------------

const startDate = new Date("2026-06-12T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("timer").innerHTML =

        `${days} Gün <br>
         ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;

}

setInterval(updateCounter, 1000);

updateCounter();


// -------------------------------
// Kalpler
// -------------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "-30px";

    heart.style.fontSize = (18 + Math.random() * 22) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    heart.style.transition = "5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${360 + Math.random()*360}deg)`;

        heart.style.opacity = 0;

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 5200);

}

setInterval(createHeart, 350);


// -------------------------------
// Fotoğraf Büyütme
// -------------------------------

document.querySelectorAll(".slider img").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";

        overlay.style.inset = "0";

        overlay.style.background = "rgba(0,0,0,.95)";

        overlay.style.display = "flex";

        overlay.style.justifyContent = "center";

        overlay.style.alignItems = "center";

        overlay.style.zIndex = "10000";

        overlay.innerHTML = `

        <img src="${img.src}"
        style="
        max-width:90%;
        max-height:90%;
        border-radius:20px;
        box-shadow:0 0 50px rgba(255,255,255,.2);
        ">

        `;

        overlay.onclick = () => overlay.remove();

        document.body.appendChild(overlay);

    });

});


// -------------------------------
// Final Butonu
// -------------------------------

function confettiStart(){

    for(let i=0;i<250;i++){

        const c=document.createElement("div");

        c.style.position="fixed";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-20px";

        c.style.width="8px";

        c.style.height="14px";

        c.style.background=`hsl(${Math.random()*360},100%,60%)`;

        c.style.pointerEvents="none";

        c.style.zIndex="99999";

        c.style.transition=(2+Math.random()*3)+"s linear";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.style.transform=`translateY(${window.innerHeight+200}px) rotate(${Math.random()*900}deg)`;

        },50);

        setTimeout(()=>{

            c.remove();

        },5000);

    }

    alert("❤️ İyi ki doğdun Hira. Seni çok seviyorum. ❤️");

}
window.addEventListener("load", () => {
    const music = document.getElementById("music");

    music.play().catch(() => {
        console.log("Tarayıcı otomatik oynatmayı engelledi.");
    });
});
