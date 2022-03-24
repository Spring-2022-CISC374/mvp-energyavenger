var gameSettings = {
	playerSpeed: 200,
	enemySpeed: 300,
  	enemyX: 1,
  	enemyY: 1
}

var config = {
	width: 1280,
	height: 720,
	backgroundColor: 0x000000,
	scene: [Scene1, Scene2],
	pixelArt: true,
	physics: {
		default: "arcade",
		arcade: {
			debug: false
		}
	}
}

var game = new Phaser.Game(config);