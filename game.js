var gameSettings = {
	playerSpeed: 200,
	enemySpeed: 300,
	enemy1_arr: [],
	enemy1_postions: []
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