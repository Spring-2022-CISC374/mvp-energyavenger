// import Enemy1 from './enemy1.js';

class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create(){
        this.physics.world.setBoundsCollision();
        this.player = this.spawnPlayer()
        this.enemy1Group = new Phaser.GameObjects.Group(this);
        this.beams = new Phaser.GameObjects.Group(this);
        var enemy1Count = Phaser.Math.Between(5, 8);
        for(let i=0; i<enemy1Count; i++){
          this.enemy1Group.add(new Enemy1(this))
        }

        this.physics.add.overlap(this.player, this.enemy1Group, this.hurtPlayer);
        this.physics.add.overlap(this.beams, this.enemy1Group, this.hitEnemy, null, this);
    }

    update(){
        this.player.movePlayerManager();
        
        for(let i=0; i<this.enemy1Group.getLength(); i++){
          this.enemy1Group.getChildren()[i].changeEnemySpeed();
          this.enemy1Group.getChildren()[i].moveEnemy();
        }
        this.shootBeamManager()
    }

    shootBeamManager(){
      let keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      let keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
      let keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      let keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    
       if(Phaser.Input.Keyboard.JustDown(keyUp)) {
        // this.player.play("player_forward");
        this.shootBeam("UP")
       }
       else if(Phaser.Input.Keyboard.JustDown(keyDown)) {
        //  this.player.play("player_left");
        this.shootBeam("DOWN")
       } 
       else if(Phaser.Input.Keyboard.JustDown(keyLeft)) {
        //  this.player.play("player_backward");
        this.shootBeam("LEFT")
       } 
       else if(Phaser.Input.Keyboard.JustDown(keyRight)) {
        //  this.player.play("player_right");
        this.shootBeam("RIGHT")
       }
    }

    spawnPlayer(){
      return new Player(this);
    }

    hurtPlayer(){
      console.log("Player Hurt!")
    }
    hitEnemy(projectile, enemy) {
      projectile.destroy();
      enemy.destroy();
      console.log("Enemy Hit!")
    }
    shootBeam(direction) {
      var beam = new Beam(this, direction);
    }
}