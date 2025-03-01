import stateMachine_testBox from "../stateMachine_testBox"
import boxState from "./boxState"
import idleBox_state from "./idleBox_state"


export default class takeDamage_state extends boxState{
  constructor(scene: Phaser.Scene, stateMachine_i: stateMachine_testBox) {
    super()
    this.stateMachine = stateMachine_i
    this.scene = scene
  }

  enter() {
    this.box.setFillStyle(0xff0000)
    this.box.health = this.box.health - 10
    this.scene.time.delayedCall(500, () => {
      this.stateMachine.setState(new idleBox_state(this.scene, this.stateMachine))
    }, [], this)
  }

  update() {
    this.box.hpText.setText(`HP: ${this.box.health}`)
    // this.stateMachine.setState(new idleBox_state(this.scene, this.stateMachine))
    return
  }

  exit() {
    console.log("testBox took damage")
  }
}