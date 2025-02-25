export default class Start extends Phaser.Scene {
  constructor() {
    super("Start");
  }

  preload() {
    this.load.spritesheet("knight_run", "public/animationSprites/knight/run.png", {frameWidth: 900, frameHeight: 350})
    this.load.spritesheet("knight_rest", "public/animationSprites/knight/rest.png", {frameWidth: 200, frameHeight: 200})
    this.load.spritesheet("knight_jump", "public/animationSprites/knight/jump.png", {frameWidth: 200, frameHeight: 300})
    this.load.spritesheet("knight_idle", "public/animationSprites/knight/idle.png", {frameWidth: 900, frameHeight: 350})
    this.load.spritesheet("knight_attack_1", "public/animationSprites/knight/singleattack.png", {frameWidth: 900, frameHeight: 350})
    this.load.spritesheet("knight_fight", "public/animationSprites/knight/drawpose.png", {frameWidth: 900, frameHeight: 350})
  }

  create() {
    this.generateKnightAnimation()
    this.scene.switch('Game')
  }


  generateKnightAnimation() {
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('knight_idle', {start: 0, end: 11}),
      frameRate: 12,
      repeat: -1
    })

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('knight_run', {start: 0, end: 11}),
      frameRate: 12,
    })

    this.anims.create({
      key: 'rest',
      frames: this.anims.generateFrameNumbers('knight_rest', {start: 0, end: 32}),
      frameRate: 12,
      repeat: -1
    })

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('knight_jump', {start: 0, end: 11}),
      frameRate: 12,
      repeat: -1
    })

    this.anims.create({
      key: 'fight',
      frames: this.anims.generateFrameNumbers('knight_fight', {start: 0, end: 5}),
      frameRate: 12,
      repeat: -1
    })

    this.anims.create({
      key: 'attack_1',
      frames: this.anims.generateFrameNumbers('knight_attack_1', {start: 0, end: 6}),
      frameRate: 12,
      repeat: 0
    })
  }
}