import * as Phaser from 'phaser';

var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
        pack: { // assets to be preloaded
            files: [
                {
                    type: 'atlas',
                    key: 'menu',
                    textureURL: './assets/img/menu.png',
                    atlasURL: './assets/img/menu.json'
                }
            ]
        }
    }
};

var game = new Phaser.Game(config);

function preload() {
    // loading screen
    this.add.image(0, 0, 'menu', 'loading_screen');

    //#region Loading progress bar
    // var progressBar = this.add.graphics();
    // var progressBox = this.add.graphics();
    // progressBox.fillStyle(0x222222, 0.5);
    // progressBox.fillRect(240, 270, 320, 50);

    // this.load.on('progress', function (value) {
    //     console.log(value);
    //     progressBar.clear();
    //     progressBar.fillStyle(0xffffff, 1);
    //     progressBar.fillRect(250, 280, 300 * value, 30);
    // });

    // this.load.on('fileprogress', function (file) {
    //     console.log(file.src);
    // });

    // this.load.on('complete', function () {
    //     console.log('complete!');
    // });
    //#endregion

    this.load.setBaseURL('./assets/img');
    this.load.atlas('reimu', 'reimu.png', 'reimu_test.json');
}

function create() {
    // this.add.image(100, 100, 'reimu', 'idle');
    let player = this.physics.add.image(100, 100, 'reimu', 'idle');
    // let player = this.add.sprite(100, 100, 'reimu')
    // player.anims.add('idle', Phaser.Animation.generateFrameNames('reimux', 0, 1, '', 4), 30, true);
    // player.anims.play('idle');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
}

function update() {

}
