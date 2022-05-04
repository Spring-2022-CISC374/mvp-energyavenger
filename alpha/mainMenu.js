class mainMenu extends Phaser.Scene {

    constructor() {
        super("main-menu");
    }

    preload(){
    }

    create(){

        this.add.text(config.width / 3.2, config.height / 3.5, "Energy Avenger", {
            font: "Bold 65px Arial",
            fontFamily: "PressStart2P-Regular",
            fill: "#ff0044",
            align: "center"
        });

        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play_button").setDepth(1);

        let optionButton = this.add.image(this.game.renderer.width /2 , this.game.renderer.height / 2 + 100, "options_button").setDepth(1);

        playButton.setInteractive();
        playButton.on('pointerover', () => { console.log('pointerover'); });
        playButton.on('pointerdown', () => this.scene.start("instruction-menu")); 

        optionButton.setInteractive();
        optionButton.on('pointerover', () => { console.log('pointerover'); });
        optionButton.on('pointerdown', () => {this.scene.start("options-scene");
    });
    }


    update(){
       
    }
}