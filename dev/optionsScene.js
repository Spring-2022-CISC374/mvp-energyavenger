class optionsScene extends Phaser.Scene{
    constructor(){
        super("options-scene");
    }

    create(){


        this.add.text(10, 35, "Press ESC to exit", {
            fontSize: '24px'
        });

        this.add.text(this.game.renderer.width / 2 - 50, this.game.renderer.height / 2, "COMING SOON");

        //escape keyboard input
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

    }

    update(){
        if(Phaser.Input.Keyboard.JustUp(this.escKey)){
            this.scene.start("main-menu");
        }
    }  
}