import attack_state from "./attack_state";
import base_state from "./base_state";
import idle_state from "./idle_state";


export default class fight_state extends base_state {
  attackTrigger = false
  idleTrigger = false;

  enter(): void {
    this.player.anims.play('fight', true)
    this.scene.input.keyboard?.once('keydown-B', () => {
      this.attackTrigger = true
    })

    this.scene.input.keyboard?.once('keydown-V', () => {
      this.idleTrigger = true
    })
  }

  update(): base_state {
    if (this.attackTrigger) {
      return new attack_state()
    } else if (this.idleTrigger) {
      return new idle_state()
    }
    return this
  }

  exit(): void {
    console.log('Exited fight state')
  }
  
}