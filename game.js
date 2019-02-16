// Function declarations declare a function into existence. Calling a function that is not yet declared, or is an expression, will not work. 

// Works: Call --> function declaration
// Works: function expression --> Call
// Not Work: Call --> function expression

const btnStart = document.querySelector(".btnStart");
const gameOverEle = document.getElementById("gameOverEle")
const container = document.getElementById("container");
const box = document.querySelector(".box");
// Returns the center of the box
const boxCenter = [box.offsetLeft + (box.offsetWidth/2),
    box.offsetTop + (box.offsetHeight/2)];

let gamePlay = false;
let player;
let animateGame

btnStart.addEventListener("click", startGame);
container.addEventListener("mousedown", mouseDown);
container.addEventListener("mousemove", movePosition);

function movePosition (event) {
    let mouseAngle = getDeg(event)
    console.log(mouseAngle) // Returns degrees around the center point
}

function mouseDown (event) {
    if (gamePlay) {
        console.log("fire");
    }
}

function getDeg(event) {
    let angle = Math.atan2(event.clientX-boxCenter[0], - (event.clientY - boxCenter[1]))
    return angle * (180/Math.PI);
}


function startGame () {
    gamePlay = true;
    gameOverEle.style.display = "none";
    player = {
        score: 0,
        barwidth: 100,
        lives: 100
    }
    // Setup bad guys
    animateGame = requestAnimationFrame(playGame);// Tells the browswer to perform an animation and call a function between each frame
    }

function playGame () {
    if (gamePlay) {
        // Move shots
        // Update dashboard with new score
        // Move enemies
        animateGame = requestAnimationFrame(playGame);
    }
    
}

// Math.atan2(y,x) function returns the arctangent of the quotient of its arguments. Used to calculate the rotational point of a triangle's angle on a plane.

// Math.sin() returns the sine of a number, which is the triangle line opposite of the arctangent.

// Math.cos() returns a number that takes a triangle's adjacent length and divides it by its hypotenuse.

// transform: rotate() allows you to take a CSS property and rotate it x amount of degrees