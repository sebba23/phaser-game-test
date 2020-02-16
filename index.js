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
let speedX = 50;
let speedY = 50;
let logo;

function preload () {
    this.load.setBaseURL('http://labs.phaser.io');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    text = this.add.text(10, 10, '', { fill: '#00ff00' });
}

function create () {
    rect = new Phaser.Geom.Rectangle(250, 200, 300, 200);

    graphics = this.add.graphics({ fillStyle: { color: 0x0000ff } });

    graphics.fillRectShape(rect);
    graphics.setInteractive(rect, Phaser.Geom.Rectangle.Contains);

    graphics.on('pointerdown', function() {
        console.log('clicked');
        speedX += 20;
        speedY += 20;
        logo.setVelocity(speedX, speedY);
    });

    logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(speedX, speedY);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
}

function update () {
}