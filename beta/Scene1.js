class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload(){
        this.load.image("background", "assets/images/map.png");
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
            frameWidth: 11,
            frameHeight: 11
        });
        this.load.spritesheet("button", "assets/spritesheets/button.png",{
            frameWidth: 44,
            frameHeight: 53
        });
        this.load.image("options_button", "assets/images/options_button.png");

        this.load.image("play_button", "assets/images/play_button.png");
        this.load.image("retry_button", "assets/images/retry.png");
        this.load.image("lamp", ["assets/images/lamp.png", "assets/images/lamp_n.png"]);
    }

    create(){
        this.add.text(20, 20, "loading game ...");
        this.scene.start("main-menu");
        
        this.anims.create({
            key: "enemy1",
            frames: this.anims.generateFrameNumbers("enemy1"),
            frameRate: 20,
            repeat: -1
          });

        // player movement animations
        this.anims.create({
            key: "right-walk",
            frames: this.anims.generateFrameNames("player", { frames: [3,7,11,15] }),
            repeat: -1,
            frameRate: 6
        });
        
        this.anims.create({
            key: "right-idle",
            frames: this.anims.generateFrameNames("player", { frame: [3]}),
        });
        
        this.anims.create({
            key: "left-walk",
            frames: this.anims.generateFrameNames("player", { frames: [1,5,9,13] }),
            repeat: -1,
            frameRate: 6
        });
        
        this.anims.create({
            key: "left-idle",
            frames: this.anims.generateFrameNames("player", { frame: [1]}),
        });
        
        this.anims.create({
            key: "up-walk",
            frames: this.anims.generateFrameNames("player", { frames: [2,6,10,14] }),
            repeat: -1,
            frameRate: 6
        });
        
        this.anims.create({
            key: "up-idle",
            frames: this.anims.generateFrameNames("player", { frame: [2]}),
        });
        
        this.anims.create({
            key: "down-walk",
            frames: this.anims.generateFrameNames("player", { frames: [0,4,8,12] }),
            repeat: -1,
            frameRate: 6
        });
        
        this.anims.create({
            key: "down-idle",
            frames: this.anims.generateFrameNames("player", { frame: [0]}),
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