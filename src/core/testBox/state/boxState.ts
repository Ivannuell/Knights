import stateMachine_testBox from "../stateMachine_testBox";
import { testBox } from "../testBox";

export default abstract class boxState {
  box!: testBox
  stateMachine!: stateMachine_testBox
  scene!: Phaser.Scene
  entered!: boolean

  abstract enter(): void;
  abstract update() : void;
  abstract exit() : void;
}