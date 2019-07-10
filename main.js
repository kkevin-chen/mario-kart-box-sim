// Mario Kart Item Simulator Script
'use strict';

// Global Variables
let banana = 0;
let shell = 0;
let star = 0;
let mushroom = 0;
let bullet = 0;

// Event Listeners
document.querySelector('button').addEventListener('click', simulate);
document.getElementById('sim10').addEventListener('click', simulate10)

// Event Functions
function simulate() {

    // Input and Getting Position to Permissible Value
    let position = Math.floor(document.getElementById('position').value);
    if (position < 1) {
        position = 1;
    } else if (position > 12) {
        position = 12;
    }
    document.getElementById('position').value = position;

    // Processing
    let chance = Math.random();
    let resultImage;
    let resultText;
    if (position <= 6) {
        if (chance < 0.45) {
            banana++;
            resultImage = 'images/Banana.png';
            resultText = 'Banana';
        } else if (chance < 0.8) {
            shell++;
            resultImage = 'images/Green_Shell.png';
            resultText = 'Green Shell';
        }  else if (chance < 0.95) {
            star++;
            resultImage = 'images/Star.png';
            resultText = 'Star';
        } else if (chance < 0.99) {
            mushroom++;
            resultImage = 'images/Golden_Mushroom.png';
            resultText = 'Golden Mushroom';
        } else {
            bullet++;
            resultImage = 'images/Bullet_Bill.png';
            resultText = 'Bullet Bill';
        }
    } else {
        // for positions 7-12
        if (chance < 0.05) {
            banana++;
            resultImage = 'images/Banana.png';
            resultText = 'Banana';
        } else if (chance < 0.1) {
            shell++;
            resultImage = 'images/Green_Shell.png';
            resultText = 'Green Shell';
        }  else if (chance < 0.35) {
            star++;
            resultImage = 'images/Star.png';
            resultText = 'Star';
        } else if (chance < 0.7) {
            mushroom++;
            resultImage = 'images/Golden_Mushroom.png';
            resultText = 'Golden Mushroom';
        } else {
            bullet++;
            resultImage = 'images/Bullet_Bill.png';
            resultText = 'Bullet Bill';
        }
    }

    // Output (Displaying Results and Updating Counts)
    document.getElementById('just-generated').src = resultImage;
    document.getElementById('generate-caption').innerHTML = resultText;

    document.getElementById('banana').innerHTML = banana;
    document.getElementById('shell').innerHTML = shell;
    document.getElementById('star').innerHTML = star;
    document.getElementById('mushroom').innerHTML = mushroom;
    document.getElementById('bullet').innerHTML = bullet;

    document.getElementById('item-list').innerHTML += '<img src=' + resultImage + ' class="counted-images">';
}


function simulate10() {
    for (let num = 1; num <= 10; num++) {
        simulate();
    }
}