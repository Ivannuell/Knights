import base_state from "./base_state";
import idle_state from "./idle_state";

export default class move_state_left extends base_state {

  moveTrigger = false

  enter(): void {
    this.player.anims.play('run', true)
    this.scene.input.keyboard?.once('keyup-A', () => {
      this.moveTrigger = true
    })
  }
  update(): base_state {
    if (this.moveTrigger) {
      this.player.flipX = true
      return new idle_state()
    }
    this.player.body?.setVelocityX(-200)
    return this
  }
  exit(): void {
    console.log("Exited move left state")
  }
  
}