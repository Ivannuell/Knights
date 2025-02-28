import stateMachine_testBox from "../stateMachine_testBox";
import boxState from "./boxState";
import takeDamage_state from "./takeDamage_state";



export default class idleBox_state extends boxState {
  constructor(scene: Phaser.Scene, stateMachine_i: stateMachine_testBox) {
    super()
    this.stateMachine = stateMachine_i
    this.scene = scene
    this.entered = false
  }

  enter() {
    this.scene.time.delayedCall(300, () => {
      this.box.setFillStyle(0xffffff)
    })
    console.log("entered idlebox state")
  }

  update() {
    //TODO: add logic when attacking
    if (this.scene.input.keyboard?.checkDown(this.scene.input.keyboard?.addKey('N'), 500)) {
      this.stateMachine.setState(new takeDamage_state(this.scene, this.stateMachine))
      return
    }
    this.stateMachine.setState(this)
  }

  exit() {

  }
}