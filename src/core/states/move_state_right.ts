import base_state from "./base_state";
import idle_state from "./idle_state";

export default class move_state_right extends base_state {

  moveTrigger = false

  enter(): void {
    this.player.anims.play('run', true)
    this.scene.input.keyboard?.once('keyup-D', () => {
      this.moveTrigger = true
    })
  }
  update(): base_state {
    if (this.moveTrigger) {
      this.player.flipX = false
      return new idle_state()
    }
    this.player.body?.setVelocityX(200)
    return this
  }
  exit(): void {
    console.log("Exited move right state")
  }
  
}