import { attackBox } from "../attackBox";
import base_state from "./base_state";
import idle_state from "./idle_state";

export default class attack_state extends base_state {

  fightTrigger = false
  attackBox!: attackBox

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
    this.scene.physics.world.remove(this.attackBox.body)
    this.attackBox.setActive(false)
    this.attackBox.setAlpha(0)
  }

  addAttackBox() {
    const startHit = (_anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) => {
      if (frame.index < 4) return

      this.player.off(Phaser.Animations.Events.ANIMATION_UPDATE, startHit)
      this.attackBox = new attackBox(this.scene, this.player.x + 140, this.player.y + 30)
    }

    this.player.on(Phaser.Animations.Events.ANIMATION_UPDATE, startHit)
  }

}