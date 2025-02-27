

export class attackBox extends Phaser.GameObjects.Rectangle {
  constructor(public scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 200, 230, 0x555555, 0.4)

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);
  }
}