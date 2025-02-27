import boxState from "./boxState"
import idleBox_state from "./idleBox_state"


export default class takeDamage_state extends boxState{

  enter() {
    this.box.setFillStyle(0xff0000)
    this.box.health -= 10
  }

  update() {
    this.box.hpText.setText(`HP: ${this.box.health}`)
    return new idleBox_state()
  }

  exit() {
    console.log("testBox took damage")
  }
}