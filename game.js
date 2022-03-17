var gameSettings = {
	playerSpeed: 200,
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
			debug: true
		}
	}
}

var game = new Phaser.Game(config);