for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
    document.getElementsByClassName("drum")[i].addEventListener(
        "click",
        function fn() {
            makeSound(this.innerHTML);
            buttonAnimate(this.innerHTML);
        }
    )
}

document.addEventListener(
    "keydown",
    function fn(e) {
        buttonAnimate(e.key);
        makeSound(e.key);
    }
);

function buttonAnimate(key){
    document.querySelector("."+key).classList.add("pressed");
}

function makeSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio('/static/sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio('/static/sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            var tom3 = new Audio('/static/sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            var tom4 = new Audio('/static/sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            var snare = new Audio('/static/sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            var kick = new Audio('/static/sounds/kick-bass.mp3');
            kick.play();
            break;

        case 'l':
            var crash = new Audio('/static/sounds/crash.mp3');
            crash.play();
            break;

        default:
            console.log(`${key} doesnt play anything.`);
    }
}