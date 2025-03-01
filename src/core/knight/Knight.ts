import { attackBox } from "./attackBox"

export default class Knight extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'knight_idle', 0)

    this.anims.play('idle')
    this.scene.physics.add.existing(this, false)
    this.scene.add.existing(this)

    this.setBodySize(65, 180, false)
    this.setOffset(412, 120)

    this.setData('onGround', false)
    this.setName('Knight')
    this.attackBox = new attackBox(scene, 0, 0)
    this.scene.physics.world.remove(this.attackBox.body as Phaser.Physics.Arcade.Body)
    this.attackBox.setActive(false)
    this.attackBox.setAlpha(0)
  }

  public attackBox!: attackBox
  
}