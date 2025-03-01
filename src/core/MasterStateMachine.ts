import stateMachine_testBox from "./testBox/stateMachine_testBox";
import StateMachine from "./knight/stateMachine";
import Knight from "./knight/Knight";
import { testBox } from "./testBox/testBox";

export default class MasterStateMachine {
  private stateMachines: (stateMachine_testBox | StateMachine)[] = [];

  constructor(private scene: Phaser.Scene) {}

  createKnightStateMachine(knight: Knight): StateMachine {
    const stateMachine = new StateMachine(this.scene, knight);
    this.stateMachines.push(stateMachine);
    return stateMachine;
  }

  createTestBoxStateMachine(damageBox: testBox): stateMachine_testBox {
    const stateMachine = new stateMachine_testBox(this.scene, damageBox);
    this.stateMachines.push(stateMachine);
    return stateMachine;
  }

  update() {
    this.stateMachines.forEach(stateMachine => stateMachine.updateState());
  }
}