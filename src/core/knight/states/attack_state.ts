import { attackBox } from "../attackBox";
import base_state from "./base_state";
import idle_state from "./idle_state";

export default class attack_state extends base_state {

  fightTrigger = false
  attackBox!: attackBox;

  enter(): void {
    this.player.anims.play('attack_1', true)
    this.player.once('animationcomplete-attack_1', () => {
      this.fightTrigger = true
    })

    this.addAttackBox()

  }

  update(): base_state {
    if (this.fightTrigger) {
      this.removeAttackBox()
      return new idle_state()
    }
    return this
  }

  exit(): void {
    console.log('Exited attack state')
  }

  removeAttackBox() {
    this.scene.physics.world.remove(this.player.attackBox.body);
    (this.player.attackBox.body as Phaser.Physics.Arcade.Body).enable = false
    this.player.attackBox.setActive(false)
    this.player.attackBox.setAlpha(0)
  }

  addAttackBox() {
    const startHit = (_anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) => {
      if (frame.index < 4) return

      this.player.off(Phaser.Animations.Events.ANIMATION_UPDATE, startHit)

      if (!this.player.flipX) {
        this.scene.physics.world.add(this.player.attackBox.body as Phaser.Physics.Arcade.Body)
        this.player.attackBox.body!.position = new Phaser.Math.Vector2(this.player.x + 40, this.player.y - 80)
        this.player.attackBox.setPosition(this.player.x + 140, this.player.y + 30)
        this.scene.physics.add.existing(this.player.attackBox)
        this.player.attackBox.setActive(true)
        this.player.attackBox.setAlpha(1)
        this.player.attackBox.addToUpdateList()
      } else {
        this.scene.physics.world.add(this.player.attackBox.body as Phaser.Physics.Arcade.Body)
        this.player.attackBox.body!.position = new Phaser.Math.Vector2(this.player.x - 240, this.player.y - 80)
        this.player.attackBox.setPosition(this.player.x - 140, this.player.y + 30)
        this.scene.physics.add.existing(this.player.attackBox)
        this.player.attackBox.setActive(true)
        this.player.attackBox.setAlpha(1)
        this.player.attackBox.addToUpdateList()
      }

      // if (this.player.flipX) {
      //   this.attackBox = new attackBox(this.scene, this.player.x - 140, this.player.y + 30)
      //   this.player.setBodySize(-150, 180, false)
      //   this.player.setOffset(460, 120)
      // } else {
      //   this.attackBox = new attackBox(this.scene, this.player.x + 140, this.player.y + 30)
      //   this.player.setBodySize(150, 180, false)
      //   this.player.setOffset(412, 120)
      // }
    }

    this.player.on(Phaser.Animations.Events.ANIMATION_UPDATE, startHit)

  }

}