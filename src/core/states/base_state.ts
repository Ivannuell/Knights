import StateMachine from "../stateMachine";

export default abstract class base_state {
  player!: Phaser.GameObjects.Sprite;
  stateMachine!: StateMachine;
  scene!: Phaser.Scene


  abstract enter(): void
  abstract update(): base_state
  abstract exit(): void
}