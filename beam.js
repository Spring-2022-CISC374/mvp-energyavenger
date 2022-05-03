class Beam extends Phaser.GameObjects.Sprite{
    constructor(scene, direction){
  
      var x = scene.player.x;
      var y = scene.player.y;
  
      super(scene, x, y, "beam");
  
      scene.add.existing(this);
  
      this.play("beam_anim");
      scene.physics.world.enableBody(this);


      if(direction == 'UP'){
        this.body.velocity.y = - 250;
      }
      else if(direction == 'DOWN'){
        this.body.velocity.y = 250;
      }
      else if(direction == 'LEFT'){
        this.body.velocity.x = - 250;
      }
      else if(direction == 'RIGHT'){
        this.body.velocity.x = 250;
      }

      scene.beams.add(this);
  
    }

    destroyBeam(){
      if(this.y > config.height || this.y < 0 ){
        this.destroy();
      }
      else if(this.x > config.width || this.x < 0 ){
        this.destroy();
      }
    }
  }
  