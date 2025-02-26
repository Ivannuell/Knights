import attack_state from "./attack_state";
import base_state from "./base_state";
import move_state_left from "./move_state_left";
import move_state_right from "./move_state_right";


export default class idle_state extends base_state {
  fightTrigger = false
  keyboardAPI!: Phaser.Input.Keyboard.KeyboardPlugin

  enter() {
    this.keyboardAPI = this.scene.input.keyboard!

    this.player.body!.velocity.x = 0
    this.player.anims.play('idle', true)

    // this.scene.input.keyboard!.on('keydown-B', () => {
    //   this.fightTrigger = true
    // })

    // this.scene.input.keyboard!.on('keydown', (event: { key: string; }) => {

    //   // this.moveTrigger_right = move_state_left ? false : true
    // })

  }

  update(): base_state {
    if (this.keyboardAPI?.checkDown(this.keyboardAPI.addKey('B'), 300)) {
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