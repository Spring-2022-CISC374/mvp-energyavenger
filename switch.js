class Switch extends Phaser.GameObjects.Sprite{
    constructor(scene,){
  
      super(scene, x, y, "switch");
      scene.add.existing(this);
      this.play("beam_anim");
      scene.physics.world.enableBody(this);
    }
  }
  