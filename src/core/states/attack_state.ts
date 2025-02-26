import base_state from "./base_state";
import idle_state from "./idle_state";
// import move_state_right from "./move_state_right";

export default class attack_state extends base_state {

  fightTrigger = false

  enter(): void {
    this.player.anims.play('attack_1', true)
    this.player.once('animationcomplete-attack_1', () => {
      this.fightTrigger = true
    })
  }

  update(): base_state {
    if (this.fightTrigger) {
      return new idle_state()
    }
    return this
  }

  exit(): void {
    console.log('Exited attack state')
  }
  
}