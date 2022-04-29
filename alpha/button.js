class Button extends Phaser.GameObjects.Sprite{
    constructor(scene){
  
      var x = config.width / 2
      var y = config.height / 2;
  
      super(scene, x, y, "button");
      scene.add.existing(this);
      // this.play("button");
      scene.physics.world.enableBody(this);
      this.body.setEnable();
      this.body.setImmovable();
    }
  }
  