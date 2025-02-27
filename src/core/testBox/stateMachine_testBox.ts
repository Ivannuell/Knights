import boxState from "./state/boxState";
import idleBox_state from "./state/idleBox_state";
import { testBox } from "./testBox";


export default class stateMachine_testBox {
  activeState!: boxState

  constructor(public scene: Phaser.Scene, public testBox: testBox) {
    this.activeState = new idleBox_state()
    this.activeState.box = testBox
  }

  updateBoxState() {
    if (!this.activeState.entered) {
      this.activeState.entered = true
      this.activeState.enter()
    }

    if (this.activeState.update() != this.activeState) {
      this.activeState.exit()
      this.activeState = this.activeState.update()
      this.activeState.box = this.testBox
    }
  }


}