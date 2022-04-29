class Lamp extends Phaser.Physics.Arcade.Sprite{
  
    health = 200;
    constructor(scene){

    var spawnX = 300;
    var spawnY = 300;
    super(scene, spawnX, spawnY, "lamp");
    scene.physics.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.add.existing(this);
    this.setInteractive();
    this.body.setCollideWorldBounds(true);
    this.setPipeline('Light2D');
    this.setScale(.1);
    
    // var lamp = this.add.sprite(300, 300, 'lamp');
    //lamp.setPipeline('Light2D');
    //lamp.setScale(.1);
    }
}
     