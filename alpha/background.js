private background: Phaser.GameObjects.TileSprite;
this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, "background");
this.background.setOrigin(0,0);
this.enemies = [];
this.player = new Player(this, data.player.x, data.player.y);

