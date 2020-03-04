import './node_modules/phaser/dist/phaser.min.js';
import './node_modules/phaser/dist/phaser-arcade-physics.min.js';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var text;
var game = new Phaser.Game(config);
let rect;
let graphics;
let progress = 0;
let logo;

function preload () {
    //this.load.setBaseUR/L('http://labs.phaser.io');
    this.load.image('button', 'assets/arcade-ok-button.png');
    text = this.add.text(10, 10, 'progress: ' + progress, { fill: '#00ff00' });
}

function create () {
    const image = this.add.image(350, 300, 'button');
    //rect = new Phaser.Geom.Rectangle(250, 200, 300, 200);

    //graphics = this.add.graphics({ fillStyle: { color: 0x0000ff } });

    //graphics.fillRectShape(rect);
    image.setInteractive();

    image.on('pointerdown', function() {
        console.log('clicked');
        progress += 1;
    });

    // logo = this.physics.add.image(400, 100, 'logo');

    // logo.setVelocity(speedX, speedY);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);
}

function update () {
    text.text = progress;
}