import attack_state from "./attack_state";
import base_state from "./base_state";
import idle_state from "./idle_state";

export default class move_state_left extends base_state {

  moveTrigger = false
  attackTrigger = false

  enter(): void {
    this.player.anims.play('run', true)
    this.player.flipX = true

    this.scene.input.keyboard?.once('keyup-A', () => {
      this.moveTrigger = true
    })

    this.scene.input.keyboard?.once('keydown-B', () => {
      this.moveTrigger = true
      this.attackTrigger = true
    })
  }

  update(): base_state {
    if (this.attackTrigger && this.moveTrigger) {
          this.player.body!.velocity.x = -25
          return new attack_state()
        }

    if (this.moveTrigger) {
      return new idle_state()
    }

    this.player.body!.velocity.x = -200
    return this
  }

  exit(): void {
    console.log("Exited move left state")
  }
  
}