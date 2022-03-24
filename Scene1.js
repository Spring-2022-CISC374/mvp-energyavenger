class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload(){
        this.load.spritesheet("player", "assets/spritesheets/player2.png",{
            frameWidth: 48,
            frameHeight: 48,
            number_of_frames: 12
        });
        this.load.spritesheet("enemy1", "assets/spritesheets/enemy1.png",{
            frameWidth: 24,
            frameHeight: 24
        });
        this.load.spritesheet("beam", "assets/spritesheets/beam.png",{
            frameWidth: 16,
            frameHeight: 16
        });
    }

    create(){
        this.add.text(20, 20, "loading game ...");
        this.scene.start("playGame");
        
        this.anims.create({
            key: "enemy1",
            frames: this.anims.generateFrameNumbers("enemy1"),
            frameRate: 20,
            repeat: -1
          });

        // player movement animations
        this.anims.create({
            key: "player_right",
            frames: this.anims.generateFrameNames("player", { frames: [3,7,11,15] }),
            repeat: -1,
            frameRate: 6
        });

        this.anims.create({
            key: "player_left",
            frames: this.anims.generateFrameNames("player", { frames: [1,5,9,13] }),
            repeat: -1,
            frameRate: 6
        });

        this.anims.create({
            key: "player_forward",
            frames: this.anims.generateFrameNames("player", { frames: [2,6,10,14] }),
            repeat: -1,
            frameRate: 6
        });

        this.anims.create({
            key: "player_backward",
            frames: this.anims.generateFrameNames("player", { frames: [0,4,8,12] }),
            repeat: -1,
            frameRate: 6
        });

        // interaction animations
        this.anims.create({
            key: "player_interact",
            
            repeat: -1,
            frameRate: 6
        });

        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
          });


    }
}