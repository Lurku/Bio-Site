
// First Page Typing Animation

const textDisplay = document.getElementById('intrest')
const phrases = ['Juice Wrld Fan.', 'Valorant Player.', 'a Developer.', 'a Gamer.', 'Hindu', 'Non-Alcoholic', 'Non-Smoker', 'Anime Fanatic.', 'a Student.', 'a KSI Fan.', 'a Cultured Man.', 'a Waifu Simp', 'Virgo.', 'He/Him.', 'Indian.', '17.', 'Patient.', 'Video Editor', 'Lazy.', 'DOMB.', 'Manga Typesetter', 'Graphic Designer']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false

function loop() {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')
    if (i < phrases.length) {


        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (j == phrases[i].length) {
            isDeleting = true
            isEnd = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++

            if (i == phrases.length) {
                i = 0
            }
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (280 - 250) + 250
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

loop()

// Second Page Plane

const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 200, y: 150 },
        { x: 300, y: 100 },
        { x: 500, y: 100 },
        { x: 800, y: 150 },
        { x: 900, y: 100 },
        { x: 1000, y: 0 },
        { x: window.innerWidth, y: -50 },
    ]
}

const tween = new TimelineLite()
tween.add(
    TweenLite.to('.paper-plane', 2, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".page2",
    duration: 1355,
    triggerHook: 0.6,
})
    .setTween(tween)
    // .addIndicators()
    .addTo(controller);
