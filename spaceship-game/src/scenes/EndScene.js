class EndScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'EndScene',
        });
    }

    init(data) {
        this.scoreVal = data.score;
        this.topScore = data.topScore;
    }

    create() {
        this.text = this.make.text({    
            style: {
            font: '20px Rubik',
            fill: 'white',
        }});
        this.text.x = 400;
        this.text.y = 300;
        this.text.originX = 0.5;
        this.text.originY = 0.5;
        this.text.setText('End of the game!\n\n\n\nTop score: ' + this.topScore +
            '\n\n\nClick here to finish the task');
        this.text.setAlign('center');
        this.text.setInteractive();
        this.text.on('pointerup', function() {
            window.location.href = './saveData.html';
        });
    }

    update() {
    }


}

export default EndScene;