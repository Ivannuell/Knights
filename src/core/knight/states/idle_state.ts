import { KEY_BINDINGS, keys } from "../../../components/constants";
import attack_state from "./attack_state";
import base_state from "./base_state";
import move_state_left from "./move_state_left";
import move_state_right from "./move_state_right";


export default class idle_state extends base_state {
  KEYS!: keys;

  enter() {
    this.keyboardAPI = this.scene.input.keyboard!

    this.player.body!.velocity.x = 0
    this.player.anims.play('idle', true)

    this.player.setBodySize(65, 180, false)
    this.player.setOffset(412, 120)
    this.KEYS = this.scene.input.keyboard?.addKeys(KEY_BINDINGS) as keys

  }

  update(): base_state {
    if (this.KEYS.attack.isDown) {
      return new attack_state()
    }

    if (this.scene.input.keyboard?.addKey('D').isDown){
      return new move_state_right()
    } else if (this.scene.input.keyboard?.addKey('A').isDown){
      return new move_state_left()
    }


    return this
  }

  exit() {
    console.log('Exited idle state')
  }
}