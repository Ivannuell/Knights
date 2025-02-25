import attack_state from "./attack_state";
import base_state from "./base_state";
import fight_state from "./fight_state";
import move_state_left from "./move_state_left";
import move_state_right from "./move_state_right";


export default class idle_state extends base_state {
  fightTrigger = false
  moveTrigger_right = false
  moveTrigger_left = false

  enter() {
    this.player.body.setVelocityX(0)
    this.player.anims.play('idle', true)
    this.scene.input.keyboard!.once('keydown-B', () => {
      this.fightTrigger = true
    })
    this.scene.input.keyboard!.once('keydown-D', () => {
      this.player.flipX = false
      this.moveTrigger_right = true
    })
    this.scene.input.keyboard!.once('keydown-A', () => {
      this.player.flipX = true
      this.moveTrigger_left = true
    })
  }

  update(): base_state {
    if (this.fightTrigger){
      return new attack_state()
    }

    if (this.moveTrigger_right){
      return new move_state_right()
    }

    if (this.moveTrigger_left){
      return new move_state_left()
    }
    return this
  }

  exit() {
    console.log('Exited idle state')
  }
}