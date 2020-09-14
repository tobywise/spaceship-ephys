import './phaser.min.js';
import GameStart from './scenes/GameStart.js';
import GameScene from './scenes/GameScene.js';
import GameOver from './scenes/GameOver.js';
import EndScene from './scenes/EndScene.js';

// SET UP GAME
var game = new GameScene('GameScene');
var gameover = new GameOver("GameOver");

let config = {
    type: Phaser.AUTO,
    parent: 'start',
    width: 800,
    height: 600,
    scene: [
        GameStart,
        game,
        gameover,
        EndScene
    ]
};

// START GAME
var subjectID;
var check_start = function (elem) {

    subjectID = document.getElementById("subjectID").value;

    if (subjectID.length> 0) {
        document.getElementById('start').innerHTML = "";
        window.scrollTo(0,0);
        $.getJSON('./trial_info.json', function (data) {

            // Add brief instructions
            var helperText = document.createElement('div');
            helperText.innerHTML = 'Move the spaceship using the <b>up</b> and <b>down</b> keys to avoid the asteroids<br><br><br>'
            document.getElementById('start').appendChild(helperText);

            let game = new Phaser.Game(config);

            game.trial_info = data;
            game.trial = 0;
            game.player_trial = 0;
            game.subjectID = subjectID;
            game.data = {};
            game.dataKeys = ['health', 'hole1_y', 'hole2_y', 'player_y', 'score', 'subjectID', 'trial', 'trial_type'];
            game.start_time = new Date();

            ///////////////////////////////////////////
            // USE THESE SETTINGS TO MODIFY THE GAME //
            ///////////////////////////////////////////

            // The values below should be good starting values, but feel free to tweak if needed

            game.iti = 3000;  // Determines spacing between trials. Specified in milliseconds, although this does not correspond precisely to the time between trials (in reality, it's more like this number + 500ms)
            game.asteroid_velocity = -700;  // Determines the speed of the asteroid belt. Must be negative. If tweaking this, make sure that it makes it difficult for subjects to move in time to avoid getting hit once seeing the asteroid belt appear.
            game.asteroid_health_decrement = 0.05;  // Determines how much health is lost each time an asteroid is it.
            game.sampleRate = 50;  // Determines how frequently data is saved (hz)
            game.score_increment = 10;  // Determines how quickly the score increases
            game.health_increase = 0.00012; // Determines how quickly subjects' health increases

            //////////////////////////////////

        });
        return true;
    }
    else {
        alert("No subject ID entered");
        return false;
    }
};

// START PAGE
document.getElementById('header_title').innerHTML = "Spaceship game";
document.getElementById('start').innerHTML = `
<br><br>
Enter subject ID below<br>
<input id="subjectID"></input><br><br>
<p>
Click below to start
</p>
<button type=\"button\" id=\"startButton\" class=\"submit_button\">Start Experiment</button>
<br><br>
`

document.getElementById("startButton").onclick = check_start;

console.log(new Date().format("yyyy-mm-dd HH:MM:ss l"));
