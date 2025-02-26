
export default class Knight extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene,
               x: number,
               y: number
   ) {
    super(scene, x, y, 'knight_idle', 0)

    this.anims.play('idle')
    this.scene.physics.add.existing(this, false)
    this.scene.add.existing(this)


    this.setData('onGround', false)
  }
}