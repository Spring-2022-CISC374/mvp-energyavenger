class victoryScreen extends Phaser.Scene {

    constructor() {
        super("win-screen");
    }

    init(data)
    {
        this.wave = data.wave;
    }


    preload(){
    }

    create(){

        this.add.text(this.game.config.width / 2.5, this.game.config.height * 0.3, "You Win!", {
            fontSize: '32px',
            align: 'center'
        });
        this.add.text(this.game.config.width / 3, this.game.config.height * 0.45, "Would you like to continue?", {
            fontSize: '24px',
            align: 'center'
          });
          
          const continueButton = this.add.text(this.game.config.width/2.5, this.game.config.height/1.5, "<yes>",{
              fontSize: '24px'
          });
          continueButton.setInteractive({useHandCursor: true})  
          continueButton.on('pointerdown', () => this.scene.start("wave-scene", {wave: this.wave}));

          const endButton = this.add.text(this.game.config.width/2, this.game.config.height/1.5, "<no>",{
              fontSize: '24px'
          });
          endButton.setInteractive({useHandCursor: true})
          endButton.on('pointerdown', () => this.scene.start("main-menu"));
          endButton.on('pointerdown', () => gameSettings.health = 100);
        }


          /*
          let retryButton = this.add.image((this.game.renderer.width / 2)+ 15, this.game.renderer.height / 1.5, "retry_button").setDepth(1);
          retryButton.setScale(.2);
          retryButton.setInteractive();
          retryButton.on('pointerover', () => { console.log('pointerover'); });
          gameSettings.health = 100;
          gameSettings.color = 0xffffff;
          retryButton.on('pointerdown', () => this.scene.start("main-menu")); 
          */
    

    update(){
       
    }
}