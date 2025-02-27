import { testBox } from "../testBox";

export default abstract class boxState {
  box!: testBox
  entered = false

  abstract enter(): void;
  abstract update() : boxState;
  abstract exit() : void;
}