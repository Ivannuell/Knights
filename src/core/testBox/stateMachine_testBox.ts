import boxState from "./state/boxState";
import idleBox_state from "./state/idleBox_state";
import { testBox } from "./testBox";
// import { testBox } from "./testBox";


export default class stateMachine_testBox {
  constructor(public scene: Phaser.Scene, public box: testBox) {
    this.activeState = new idleBox_state(scene, this)
    this.activeState.box =  box
    this.activeState.enter()
  }

  activeState!: boxState
  nextState?: boxState


  setState(newState: boxState) {
    if (this.activeState == newState) {
      return
    }

    this.activeState.exit()
    this.activeState = newState
    this.activeState.box = this.box
    this.activeState.enter()
  }

  updateState() {
    this.activeState.update()
  }

}