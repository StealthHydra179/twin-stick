import Phaser from 'phaser';

class TitleScene extends Phaser.Scene {

	constructor() {
		super({key:'titleScene'});
	}

	preload() {
		this.load.image('background', 'images/background.jpg');
	}

	create() {
		var bg = this.add.sprite(0,0,'background');
		bg.setOrigin(0,0);

		var text = this.add.text(100,100, 'Welcome to my game!');
		text.setInteractive({ useHandCursor: true });
		text.on('pointerdown', () => this.clickButton());
		
		//handle button click
		clickButton() {
			this.scene.switch('gameScene');
		}
	}
}

export default TitleScene;
