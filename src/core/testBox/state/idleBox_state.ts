import boxState from "./boxState";



export default class idleBox_state extends boxState {

  enter() {
    this.box.setFillStyle(0xffffff)
  }

  update() {
    //TODO: add logic when attacking
    return this
  }

  exit() {

  }
}