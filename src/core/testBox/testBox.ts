


export class testBox extends Phaser.GameObjects.Rectangle {
  constructor(public scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 100, 200, 0xffffff, 1)

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);
  }

  health = 100
  hpText!: Phaser.GameObjects.Text
}