class endScreen extends Phaser.Scene {

    constructor() {
        super("end-screen");
    }

    init(data)
    {
        this.wave = data.wave;
    }

    preload(){
    }

    create(){
        this.add.text((this.game.renderer.width / 3), this.game.renderer.height / 2, "Game Over! You made it to wave " + this.wave + "!", {
            fontSize: '24px',
            align: 'center'
          });

        let retryButton = this.add.image((this.game.renderer.width / 2)+ 15, this.game.renderer.height / 1.5, "retry_button").setDepth(1);
        retryButton.setScale(.2);
        retryButton.setInteractive();
        retryButton.on('pointerover', () => { console.log('pointerover'); });
        gameSettings.health = 100;
        gameSettings.color = 0xffffff;
        retryButton.on('pointerdown', () => this.scene.start("main-menu")); 
    }

    update(){
       
    }
}