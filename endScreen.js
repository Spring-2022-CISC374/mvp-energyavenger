class endScreen extends Phaser.Scene {

    constructor() {
        super("end-screen");
    }

    preload(){
    }

    create(){
        this.add.text((this.game.renderer.width / 2)-50, this.game.renderer.height / 2, "game over", {
            fontSize: '24px'
          });

        let retryButton = this.add.image((this.game.renderer.width / 2)+ 15, this.game.renderer.height / 1.5, "retry_button").setDepth(1);
        retryButton.setScale(.2);
        retryButton.setInteractive();
        retryButton.on('pointerover', () => { console.log('pointerover'); });
        retryButton.on('pointerdown', () => this.scene.switch("main-menu")); 
    }

    update(){
       
    }
}