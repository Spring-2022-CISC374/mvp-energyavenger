class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload(){

    }

    create(){
        this.add.text(20, 20, "loading game ...");
        this.scene.start("playGame");
    }
}