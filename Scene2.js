class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create(){
        this.add.text(20,20, "playing", {
            font: "25px Arial", 
            fill: "yellow"
        });

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
        this.enemy = this.physics.add.sprite(config.width / 2 - 50, config.height / 2, "enemy1");
        this.enemy.setInteractive();
        this.enemy.play("enemy1");
        this.enemy.setCollideWorldBounds(true);
        this.physics.world.setBoundsCollision();
    }

    update(){
        this.movePlayerManager();
        this.changeEnemySpeed();
        this.moveEnemy(this.enemy);
    }
    movePlayerManager(){

        // prevents player from moving off screen
        

        this.player.setVelocity(0);

        /*
        if(Phaser.Input.Keyboard.JustDown(upKey)){
          this.player.play("player_forward");
        }
        if(Phaser.Input.Keyboard.JustDown(downKey)){
          this.player.play("player_backward");
        }
        if(Phaser.Input.Keyboard.JustDown(leftKey)){
          this.player.play("player_left");
        }
        if(Phaser.Input.Keyboard.JustDown(rightKey)){
          this.player.play("player_right");
        }
        */

        
    
        // need to figure out how to smoothly change which direction player faces
        if(this.cursorKeys.left.isDown){
          this.player.setVelocityX(-gameSettings.playerSpeed);
          this.player.play("player_left");
        }else if(this.cursorKeys.right.isDown){
          this.player.setVelocityX(gameSettings.playerSpeed);
          this.player.play("player_right");
        }
    
        if(this.cursorKeys.up.isDown){
          this.player.setVelocityY(-gameSettings.playerSpeed);
          this.player.play("player_forward");
        }else if(this.cursorKeys.down.isDown){
          this.player.setVelocityY(gameSettings.playerSpeed);
          this.player.play("player_backward");
        }

        // interaction key - shift
        if (this.cursorKeys.shift.isDown){
          //this.player.play("player_interact")
        }


    }

    changeEnemySpeed(){
      var changeSpeed = Phaser.Math.Between(1, 50);
      var randomX = Phaser.Math.Between(-1, 1);
      var randomY = Phaser.Math.Between(-1, 1);
  
      if(changeSpeed == 3){
        gameSettings.enemyX = randomX;
        gameSettings.enemyY = randomY; 
      }
    }
  
    moveEnemy(enemy) {
      if(gameSettings.enemyY == 0 && gameSettings.enemyX == 0){
        enemy.play("enemy1");
        console.log('STAND')
      }
      else{
        console.log('WALK')
      }
      enemy.y += gameSettings.enemyY;
      enemy.x += gameSettings.enemyX;
    }
}