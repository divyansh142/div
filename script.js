const openLetterBtn = document.getElementById("openLetterBtn");
const envelope = document.querySelector(".envelope");
const overlay = document.getElementById("letterOverlay");
const typing = document.getElementById("typing");

const envelopeWhoosh = new Audio("music/envelope-whoosh.mp3");
envelopeWhoosh.volume = 0.35;

const letterOpen = new Audio("music/letter-open.mp3");
letterOpen.volume = 0.25;

const moonShimmer = new Audio("music/moon-shimmer.mp3");
moonShimmer.volume = 0.20;

const rainAmbience = new Audio("music/rain-ambience.mp3");
rainAmbience.volume = 0.18;

const yesMagic = new Audio("music/yes-magic.mp3");
yesMagic.volume = 0.30;


// =========================
// BACKGROUND MUSIC
// =========================

const bgMusic = document.getElementById("bgMusic");

function startMusic() {

    if (!bgMusic) return;

    bgMusic.volume = 0;

    bgMusic.currentTime = 0;

    bgMusic.play().then(() => {

        let volume = 0;

        const fadeIn = setInterval(() => {

            volume += 0.02;

            if (volume >= 0.55) {
                volume = 0.55;
                clearInterval(fadeIn);
            }

            bgMusic.volume = volume;

        }, 100);

    }).catch(() => {
        console.log("Music could not start.");
    });
}

function setMusicVolume(volume, duration = 1000) {

    if (!bgMusic) return;

    const startVolume = bgMusic.volume;
    const difference = volume - startVolume;

    const steps = 30;
    const stepTime = duration / steps;

    let step = 0;

    const fade = setInterval(() => {

        step++;

        bgMusic.volume =
            startVolume + (difference * (step / steps));

        if (step >= steps) {

            bgMusic.volume = volume;
            clearInterval(fade);

        }

    }, stepTime);
}

const message = `In a world full of faces,
somehow, my heart looks for you.

I don't know when it happened—
maybe it was your smile,
maybe the way you carry yourself,
or maybe simply something about you.

I would've liked you even if you were a tree.
And if you were the wind,
I'd still want to feel you passing by.

Even if I could shine with the stars,
I'd still choose to sit under the rain with you.

Sunsets are beautiful,
but you are the kind of beauty
the sky keeps trying to copy. ❤️

If this letter made you smile,
keep that smile—
because honestly,
it's my favorite thing about you. ❤️`;


openLetterBtn.addEventListener("click", () => {

      startMusic();
envelopeWhoosh.currentTime = 0;
envelopeWhoosh.play();

    /* BUTTON PRESS */
    openLetterBtn.style.transform = "scale(0.96)";


    /* OPEN ENVELOPE */
    envelope.classList.add("open");
letterOpen.currentTime = 0;
letterOpen.play();

    /* HIDE BUTTON */
    setTimeout(() => {

        openLetterBtn.style.opacity = "0";
        openLetterBtn.style.pointerEvents = "none";

    }, 700);


    /* SHOW LETTER */
    setTimeout(() => {

        overlay.classList.add("show");

        typing.innerHTML = "";

        startTyping();

    }, 1100);

});


/* =================================
   TYPEWRITER EFFECT
================================= */

function startTyping() {

    let index = 0;

    const scrollHint =
        document.querySelector(".scroll-hint");


    function type() {

        if (index < message.length) {

            typing.textContent +=
                message.charAt(index);

            index++;


            /* SHOW SCROLL HINT */
            const currentText =
                message.substring(0, index);

            if (
                scrollHint &&
                currentText.includes(
                    "I'd still choose to sit under the rain with you."
                )
            ) {

                scrollHint.classList.add("show");

            }


            setTimeout(type, 45);

        } else {

            /* =========================
               LETTER FINISHED
            ========================= */

            setTimeout(() => {

                /* CLOSE LETTER */
                overlay.classList.remove("show");


                /* =========================
                   SHOW MOON
                ========================= */

                setTimeout(() => {

                    const moonScene =
                        document.getElementById("moonScene");

                    if (moonScene) {

                        moonScene.classList.add("show");

                        setMusicVolume(0.38, 1200);
                         moonShimmer.currentTime = 0;
                        moonShimmer.play();

                        /* MOON STAYS 6.5 SECONDS */

                        setTimeout(() => {

                            moonScene.classList.remove("show");

                            setMusicVolume(0.45, 1200);


                            /* =========================
                               SHOW QUIET THOUGHTS
                            ========================= */

                            setTimeout(() => {

                                const quietScene =
                                    document.getElementById("quietScene");

                                if (quietScene) {

                                    quietScene.classList.add("show");

                                    setMusicVolume(0.42, 1000);


                                    /* QUIET SCENE STAYS 6.5 SECONDS */

                                    setTimeout(() => {

                                        quietScene.classList.remove("show");

                                        setMusicVolume(0.48, 1000);

                                        /* =========================
                                           SHOW FACES SCENE
                                        ========================= */

                                        setTimeout(() => {

                                            const facesScene =
                                                document.getElementById("facesScene");

                                            if (facesScene) {

                                                facesScene.classList.add("show");

                                                setMusicVolume(0.52, 1200);

                                            }

                                        }, 1200);

                                    }, 6500);

                                }

                            }, 1200);

                        }, 6500);

                    }

                }, 800);

            }, 1500);

        }

    }


    type();

}

/* =========================================
   RAIN SCENE TRIGGER
========================================= */

/* =========================================
   MAIN SCENE TRIGGER
========================================= */

const facesScene = document.getElementById("facesScene");
const rainScene = document.getElementById("rainScene");
const finalMoonScene = document.getElementById("finalMoonScene");

if (facesScene && rainScene && finalMoonScene) {

    const rainObserver = new MutationObserver(() => {

        if (facesScene.classList.contains("show")) {

            setTimeout(() => {

                /* Hide Faces */
                facesScene.classList.remove("show");

                /* Show Rain */
                setTimeout(() => {

                    rainScene.classList.add("show");

                    setMusicVolume(0.58, 1500);

                    rainAmbience.currentTime = 0;
                    rainAmbience.play();

                    /* After Rain → Final Moon */
                    setTimeout(() => {

                        rainScene.classList.remove("show");
rainAmbience.pause();
rainAmbience.currentTime = 0;
                        finalMoonScene.classList.add("show");

                        setMusicVolume(0.62, 1200);

                        setTimeout(() => {

    finalMoonScene.classList.remove("show");

    setMusicVolume(0.68, 1000);

    const photoSlideshow = document.getElementById("photoSlideshow");
    const slideshowPhotos = document.querySelectorAll(".slideshow-photo");

    photoSlideshow.classList.add("show");
    setMusicVolume(0.72, 1200);
    slideshowPhotos[0].classList.add("active");

    let photoIndex = 0;

const photoTimer = setInterval(() => {

    slideshowPhotos[photoIndex].classList.remove("active");

    photoIndex++;

    if (photoIndex >= slideshowPhotos.length) {

    clearInterval(photoTimer);

    setTimeout(() => {

        photoSlideshow.classList.remove("show");

        setMusicVolume(0.58, 1500);

        const memoryWall = document.getElementById("memoryWall");

        memoryWall.classList.add("show");

        setMusicVolume(0.52, 1200);

        setTimeout(() => {

    memoryWall.classList.remove("show");

    const finalProposal = document.getElementById("finalProposal");

    finalProposal.classList.add("show");

    setMusicVolume(0.40, 1800);

}, 10000);

    }, 800);

    return;
}

    slideshowPhotos[photoIndex].classList.add("active");

}, 4500);

}, 9000);

                    }, 9000);

                }, 1200);

            }, 6500);

            rainObserver.disconnect();
        }

    });

    rainObserver.observe(facesScene, {
        attributes: true,
        attributeFilter: ["class"]
    });

}

// =========================
// FINAL PROPOSAL BUTTONS
// =========================

const proposalYes = document.getElementById("yesBtn");
const proposalNo = document.getElementById("noBtn");

proposalYes.addEventListener("click", () => {
setMusicVolume(0.75, 1200);
yesMagic.currentTime = 0;
yesMagic.play();
    const content = document.querySelector(".proposal-content");

    content.style.display = "none";

    const celebration = document.createElement("div");

    celebration.className = "proposal-celebration";

    celebration.innerHTML = `
        <div class="celebration-content">
            <h1>Then it's a yes.</h1>

            <p>
                I can't promise to love you perfectly,
                but I can promise to love you endlessly.
            </p>

            <p>
    If I had another thousand lives to live,<br>
    I'd still hope to find you in every single one.
           </p>
        </div>
    `;

    document.getElementById("finalProposal").appendChild(celebration);


    /* create subtle particles */

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("span");

        particle.className = "celebration-particle";

        particle.style.left = Math.random() * 100 + "%";

        particle.style.top =
            (70 + Math.random() * 30) + "%";

        particle.style.animationDelay =
            Math.random() * 4 + "s";

        particle.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        celebration.appendChild(particle);
    }
showFinalPage();

});

proposalNo.addEventListener("click", () => {

    setMusicVolume(0.28, 1500);

    const content = document.querySelector(".proposal-content");

    content.innerHTML = `
        <h1>It's okay.</h1>

        <p class="proposal-text">
            Maybe someday, you'll wonder what could have been
            if you had said yes that day.
        </p>

        <p class="proposal-question">
            Maybe you'll look back at this little moment
            and realize how genuinely I meant it.
        </p>

        <p class="proposal-question">
            But by then, this moment will already be a memory.
        </p>

        <p class="proposal-question">
            And I'll still be glad that, for a little while,
            I got to hope it could be us.
        </p>
    `;

     showFinalPage(7000);

});


function showFinalPage(delay = 5000) {

    setTimeout(() => {

        const finalPage = document.getElementById("finalPage");
        const proposalContent = document.querySelector(".proposal-content");

        if (!finalPage) return;

        /* Hide old proposal completely */
        if (proposalContent) {
            proposalContent.style.display = "none";
        }

        /* Show final page */
        finalPage.classList.add("show");

        /* Fade music out */
        setMusicVolume(0, 3000);

    }, 5000);

}