import stateMachine_testBox from "../stateMachine_testBox";
import boxState from "./boxState";
import idleBox_state from "./idleBox_state";

export default class takeDamage_state extends boxState {

  constructor(scene: Phaser.Scene, stateMachine_i: stateMachine_testBox) {
    super();
    this.stateMachine = stateMachine_i;
    this.scene = scene;
  }

  enter() {
    this.box.setFillStyle(0xff0000);
    this.box.health -= 10;
    this.box.hpText.setText(`HP: ${this.box.health}`);
  }

  update() {
    // No immediate state transition here
    //TODO: maybe better to add a separate state for dying
    if (this.box.health <= 0) {
      const randPos = Phaser.Math.Between(100, 900)
      this.box.setPosition(randPos, 350)
      this.box.body!.position.x = randPos - this.box.width / 2
      this.box.hpText.setPosition(randPos, this.box.hpText.y)
      this.box.health = 100
    }
    this.stateMachine.setState(new idleBox_state(this.scene, this.stateMachine));
  }

  exit() {
    console.log("testBox took damage");
    // No need to reset the flag here
  }
}