import boxState from "./state/boxState";
import idleBox_state from "./state/idleBox_state";
import takeDamage_state from "./state/takeDamage_state";
import { testBox } from "./testBox";
// import { testBox } from "./testBox";


export default class stateMachine_testBox {
  constructor(public scene: Phaser.Scene, public box: testBox) {
    this.activeState = new idleBox_state(scene, this)
    this.activeState.box =  box
    this.activeState.enter()

    this.scene.events.addListener('takeDamage', () => {
      this.setState(new takeDamage_state(scene, this))
    })
  }

  activeState!: boxState
  nextState?: boxState


  setState(newState: boxState) {
    this.nextState = newState
  }

  updateState() {
    if (this.activeState == this.nextState || this.nextState == undefined) {
      this.activeState.update()
    } else {
      this.activeState.exit()
      this.activeState = this.nextState!
      this.activeState.box = this.box

      this.activeState.enter()
      this.activeState.update()
    }
  }

}