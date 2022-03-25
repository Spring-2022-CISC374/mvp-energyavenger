class mainMenu extends Phaser.Scene {

    constructor() {
        super("main-menu");
    }

    preload(){
    }

    create(){

        this.add.text(20, 20, "test menu screen");

        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play_button").setDepth(1);

        let optionButton = this.add.image(this.game.renderer.width /2 , this.game.renderer.height / 2 + 100, "options_button").setDepth(1);

        playButton.setInteractive();
        playButton.on('pointerover', () => { console.log('pointerover'); });
        playButton.on('pointerdown', () => this.scene.start("playGame")); 
    }


    update(){
       
    }
}