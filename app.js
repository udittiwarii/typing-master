let scoreis = 0;
let intervalcontrol;
let clickufo = true;
let timeinterval = 1200;
function moveufo() {
    let containerWidth = document.querySelector('.incontainer').offsetWidth;
    let containerHeight = document.querySelector('.incontainer').offsetHeight;
    let imageufo = document.querySelector('#image2')
    let image2h = imageufo.offsetHeight;
    let image2w = imageufo.offsetWidth


    let leftposition = (Math.floor(Math.random() * (containerWidth - image2w)))
    let topposition = (Math.floor(Math.random() * (containerHeight - image2h)))
    document.querySelector('#image2').style.left = `${leftposition}px`;
    document.querySelector('#image2').style.top = `${topposition}px`;
    document.querySelector('#image2').style.opacity = 1;
}

function startinterval() {
    intervalcontrol = setInterval(moveufo, timeinterval);
}
function stopinterval() {
    clearInterval(intervalcontrol)
}
startinterval()

function score() {
    scoreis += 1;
    document.querySelector('.num').innerHTML = scoreis;
}
let ufo = document.querySelector('#container');
if (clickufo == true) {
    ufo.addEventListener('click', function (dets) {
        if ((dets.target.id) === 'image2') {
            console.log('doner')
            score()
            document.getElementById('click').play();
            stopinterval();
            clickufo = false;
            setTimeout(() => {
                startinterval();
                clickufo = true;
                document.querySelector('#image2').style.opacity = 0;
            }, 500)

        }
    })
}

let modebtn = document.querySelector('#modeButtons')
let difficultyDisplay = document.getElementById('difficultyDisplay');

modebtn.addEventListener('click', (dets) => {
    if (dets.target.classList.contains('modebtn')) {
        document.querySelector('#toggle').play();
        timeinterval = parseInt(dets.target.getAttribute('data-time'));
        console.log(timeinterval)
        let difficultyText = dets.target.textContent;
        difficultyDisplay.textContent = `The Game Mode  ${difficultyText} Start!`;
        let button = modebtn.querySelectorAll('.modebtn')
        difficultyDisplay.style.opacity = 1;
        stopinterval();
        document.querySelector('#image2').style.opacity = 0;


        setTimeout(() => {
            difficultyDisplay.style.opacity = 0;
            startinterval();
            document.querySelector('#image2').style.opacity = 1;

        }, 1500);
        button.forEach(function (k) {
            k.classList.remove('active')
        })

        dets.target.classList.add('active');
    }
})
