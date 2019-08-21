import Phaser from 'phaser';

var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    // parent: "game-container", // ID of the DOM element to add the canvas to
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
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
    this.load.atlas('reimu', 'reimu.png', 'reimu.json');
}

var player, cursors;
function create() {
    cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({ key: 'idle', frames: this.anims.generateFrameNames('reimu', { prefix: 'idle', end: 3, zeroPad: 4 }), frameRate: 6, repeat: -1 });
    this.anims.create({ key: 'turning', frames: this.anims.generateFrameNames('reimu', { prefix: 'turning', end: 2, zeroPad: 4 }), frameRate: 18, repeat: 0 });
    this.anims.create({ key: 'moving', frames: this.anims.generateFrameNames('reimu', { prefix: 'moving', end: 2, zeroPad: 4 }), frameRate: 6, repeat: -1 });

    this.add.image(0, 0, 'menu', 'main_menu');

    player = this.physics.add.sprite(100, 100, 'reimu')
    player.setCollideWorldBounds(true);
    player.on('animationcomplete', (anim) => {
        if (anim.key === 'turning') {
            player.anims.play('moving', false);
        }
    });
}

let movingDir = 0;
function update(time, delta) {
    let playerVel = { x: 0, y: 0 };

    if (cursors.left.isDown) {
        playerVel.x -= 1;
    }
    if (cursors.right.isDown) {
        playerVel.x += 1;
    }

    if (cursors.up.isDown) {
        playerVel.y -= 1;
    }
    if (cursors.down.isDown) {
        playerVel.y += 1;
    }

    if (playerVel.x != 0) {
        // if player is not still
        if (movingDir != playerVel.x) {
            // player is moving toward the same direction
            movingDir = playerVel.x;
            player.flipX = playerVel.x > 0 ? true : false;
            player.anims.play('turning', true);
        }
    } else {
        // player is still
        movingDir = 0;
        player.anims.play('idle', true);
    }

    player.setVelocity(playerVel.x, playerVel.y);
    player.body.velocity.normalize().scale(160);
}
