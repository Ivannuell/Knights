import { KEY_BINDINGS, keys } from "../../../components/constants";
import attack_state from "./attack_state";
import base_state from "./base_state";
import idle_state from "./idle_state";

export default class move_state_right extends base_state {
  KEYS!: keys

  enter(): void {
    this.player.anims.play('run', true)
    this.player.flipX = false
    this.KEYS = this.scene.input.keyboard?.addKeys(KEY_BINDINGS) as keys
  }

  update(): base_state {
    if (this.KEYS.attack.isDown && this.KEYS.moveRight.isDown) {
      this.player.body!.velocity.x = 25
      return new attack_state()
    }

    if (!this.KEYS.moveRight.isDown) {
      return new idle_state()
    }


    this.player.body!.velocity.x = 200

    return this

  }
  exit(): void {
    console.log("Exited move right state")
  }

}