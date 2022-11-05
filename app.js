let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let winner = null;
let loser = null;
let buttonPlay = document.getElementById("playAgain");
document.addEventListener('keyup', shurikenThrow);


function shurikenThrow(e) {

    if(e.code == 'KeyA') {

        player2.classList.add('playing');

        if(winner) {
            return;
        }

        winner = player2;
        loser = player1;


    } else if(e.code == 'KeyB') {

        player1.classList.add('playing');
        
        if(winner) {
            return;
        }

        winner = player1;
        loser = player2;
    }


    if(!winner) {
        return;
    }

    winner.classList.add('winner');
    loser.classList.add('loser');
    buttonPlay.classList.add('playAgain-show');
}

buttonPlay.addEventListener("click", playAgain);
function playAgain(){

    player1.classList.remove('winner');
    player1.classList.remove('loser');
    player1.classList.remove('playing');
    player2.classList.remove('winner');
    player2.classList.remove('loser');
    player2.classList.remove('playing');

    buttonPlay.classList.remove('playAgain-show');

    winner = null;
    loser = null;
}