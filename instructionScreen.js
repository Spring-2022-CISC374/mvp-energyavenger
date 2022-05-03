class instructionScreen extends Phaser.Scene {

    constructor() {
        super("instruction-menu");
    }

    preload(){
    }

    create(){

        this.add.text(this.game.config.width / 3, this.game.config.height * 0.3, "Welcome, Energy Avenger", {fontSize: '32px'});
        this.add.text(this.game.config.width / 5, this.game.config.height * 0.45, "Your job is to protect the environment and save energy! \nUse the WASD keys or the arrow keys to move and use the space \nbar to defeat the evil carbon monsters! Find and turn off \nall the lights and appliances!", {fontSize: '24px', align: 'center'});
        

        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.75, "play_button").setDepth(1);

        playButton.setInteractive();
        playButton.on('pointerover', () => { console.log('pointerover'); });
        playButton.on('pointerdown', () => this.scene.start("wave-scene", { wave: 1})); 

    }


    update(){
       
    }
}