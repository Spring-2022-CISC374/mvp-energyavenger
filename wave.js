class wave extends Phaser.Scene {
    constructor() {
        super("wave-scene");
    }

    init(data)
    {
        console.log('init', data);
        this.wave = data.wave;
    }

    create(){
        this.add.text(this.game.config.width / 2.7, this.game.config.height * 0.3, "Wave " + this.wave, {fontSize: '100px'});
        this.triggerTimer = this.time.addEvent({
            callback: this.timerEvent,
            callbackScope: this,
            delay: 4000, // 1000 = 1 second
            loop: false
        });
    }

    timerEvent() {
        console.log('timerEvent');
        this.scene.start("playGame", { wave: this.wave}); 
    }
}