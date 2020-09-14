class GameOver extends Phaser.Scene {

    init(data) {
        this.scoreVal = data.score;
        this.topScore = data.topScore;
        this.game = data.game;
    }

    create() {

        if (this.cache.game.trial - this.cache.game.player_trial == 1) {
            this.cache.game.player_trial += 1;
        }
        this.gameOverText = this.make.text({    
            style: {
            font: '50px Bungee Shade',
            fill: 'white',
        }})
        this.gameOverText.x = 400;
        this.gameOverText.y = 100;
        this.gameOverText.originX = 0.5;
        this.gameOverText.originY = 0.5;
        this.gameOverText.setText('GAME OVER');
        this.gameOverText.setAlign('center');

        this.text = this.make.text({    
            style: {
            font: '15px Rubik',
            fill: 'white',
        }});
        this.text.x = 400;
        this.text.y = 300;
        this.text.originX = 0.5;
        this.text.originY = 0.5;
        this.text.setText('Your score: ' + this.scoreVal + '\n\nTop score: ' + this.topScore +
            '\n\n\nPress space to play again!\n\nThe game will continue until you pass (or crash into) ' + this.cache.game.n_trials + ' asteroid belts\n\nin total, regardless of how many times you see this screen');
        this.text.setAlign('center');

    }

    update() {

        var cursors = this.input.keyboard.createCursorKeys();

        if (cursors.space.isDown) {
            cursors.space.isDown = false;
            if (this.game == 'game') {
                this.scene.start('GameScene', {score: this.scoreVal});
            }
            else if (this.game == 'avoidance') {
                this.scene.start('AvoidanceScene', {score: this.scoreVal});
            }
        }
    }

}

export default GameOver;