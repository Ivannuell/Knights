import { KEY_BINDINGS } from "../constants";
import attack_state from "./attack_state";
import base_state from "./base_state";
import idle_state from "./idle_state";
import { keys } from "../constants";


export default class move_state_left extends base_state {
  KEYS!: keys

  enter(): void {
    this.player.anims.play('run', true)
    this.player.flipX = true
    this.KEYS = this.scene.input.keyboard?.addKeys(KEY_BINDINGS) as keys
  }

  update(): base_state {
    if (this.KEYS.attack.isDown) {
          this.player.body!.velocity.x = -25
          return new attack_state()
        }

    if (!this.KEYS.moveLeft.isDown) {
      return new idle_state()
    }

    this.player.body!.velocity.x = -200
    return this
  }

  exit(): void {
    console.log("Exited move left state")
  }
  
}