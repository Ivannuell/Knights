

export class attackBox extends Phaser.GameObjects.Rectangle {
  constructor(public scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 200, 230, 0x555555, 0.4)

    this.scene.physics.add.existing(this, true);
    this.setName('attackBox');
    (this.body as Phaser.Physics.Arcade.StaticBody).setSize(200, 200);
    (this.body as Phaser.Physics.Arcade.StaticBody).onOverlap = true
  
  }
}