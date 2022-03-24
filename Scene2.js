// import Enemy1 from './enemy1.js';

class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create(){
        // this.add.text(20,20, "playing", {
        //     font: "25px Arial", 
        //     fill: "yellow"
        // });

        this.player = this.physics.add.sprite(config.width / 2 -8, config.height - 64, "player");

        //this.player.frame = 12;
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setInteractive();
        this.player.body.setCollideWorldBounds(true)
        /*
        leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        */
        this.physics.world.setBoundsCollision();

        this.enemy1Group = new Phaser.GameObjects.Group(this)
        var enemy1Count = Phaser.Math.Between(3, 5);
        for(let i=0; i<enemy1Count; i++){
          this.enemy1Group.add(new Enemy1(this))
        }
    }

    update(){
        this.movePlayerManager();
        
        for(let i=0; i<this.enemy1Group.getLength(); i++){
          this.enemy1Group.getChildren()[i].changeEnemySpeed();
          this.enemy1Group.getChildren()[i].moveEnemy();
        }


        // this.test.changeEnemySpeed();
        // this.test.moveEnemy();

        // for(let i=0; i<gameSettings.enemy1_arr.length; i++){
        //   this.changeEnemySpeed(i);
        //   this.moveEnemy(gameSettings.enemy1_arr[i], i);
        // }
    }
    movePlayerManager(){

        this.player.setVelocity(0);
        let keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        let keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        if(keyW.isDown) {
         this.player.setVelocityY(-gameSettings.playerSpeed);
         this.player.play("player_forward");
        }
        else if(keyA.isDown) {
          this.player.setVelocityX(-gameSettings.playerSpeed);
          this.player.play("player_left");
        } 
        else if(keyS.isDown) {
          this.player.setVelocityY(gameSettings.playerSpeed);
          this.player.play("player_backward");
        } 
        else if(keyD.isDown) {
          this.player.setVelocityX(gameSettings.playerSpeed);
          this.player.play("player_right");
        }
    
        // need to figure out how to smoothly change which direction player faces
        // if(this.cursorKeys.left.isDown){
        //   this.player.setVelocityX(-gameSettings.playerSpeed);
        //   this.player.play("player_left");
        // }else if(this.cursorKeys.right.isDown){
        //   this.player.setVelocityX(gameSettings.playerSpeed);
        //   this.player.play("player_right");
        // }
    
        // if(this.cursorKeys.up.isDown){
        //   this.player.setVelocityY(-gameSettings.playerSpeed);
        //   this.player.play("player_forward");
        // }else if(this.cursorKeys.down.isDown){
        //   this.player.setVelocityY(gameSettings.playerSpeed);
        //   this.player.play("player_backward");
        // }


        // interaction key - shift
        if (this.cursorKeys.shift.isDown){
          //this.player.play("player_interact")
        }
    }
}