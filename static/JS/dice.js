var p1Dice = Math.floor(Math.random() * 6)+1;
var p2Dice = Math.floor(Math.random() * 6)+1;

document.querySelector("img.img1").setAttribute("src","static/images/dice/dice"+p1Dice+".png");
document.querySelector("img.img2").setAttribute("src", "static/images/dice/dice"+p2Dice+".png");

if(p1Dice > p2Dice) {
    document.getElementsByTagName("h1")[0].innerHTML = "🎖️ Player 1 Wins"
}
else if (p2Dice > p1Dice) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins 🎖"
}
else {
    document.getElementsByTagName("h1")[0].innerHTML = "Its a Draw, Play again"
}