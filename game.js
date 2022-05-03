var gameSettings = {
	playerSpeed: 200,
	health: 100,
	color: 0xffffff
}

var config = {
	width: 1280,
	height: 720,
	backgroundColor: 0x000000,
	scene: [Scene1, mainMenu, Scene2, endScreen, victoryScreen, optionsScene, instructionScreen],
	pixelArt: true,
	physics: {
		default: "arcade",
		arcade: {
			debug: false
		}
	}
}

var game = new Phaser.Game(config);