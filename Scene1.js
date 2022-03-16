class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload(){
        this.load.spritesheet("player", "assets/spritesheets/player.png",{
            frameWidth: 24,
            frameHeight: 32
        });

    }

    create(){
        this.add.text(20, 20, "loading game ...");
        this.scene.start("playGame");

        this.anims.create({
            key: "forward",
            frames: this.anims.generateFrameNumbers("player",{
                start: 0,
                end: 2
            }),
            frameRate: 20,
            repeat: 0
        });
        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("player",{
                start: 3,
                end: 5
            }),
            frameRate: 20,
            repeat: 0
        });
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("player",{
                start: 6,
                end: 8
            }),
            frameRate: 20,
            repeat: 0
        });
        this.anims.create({
            key: "backward",
            frames: this.anims.generateFrameNumbers("player",{
                start: 9,
                end: 11
            }),
            frameRate: 20,
            repeat: 0
        });

    }
}