import StateMachine from "../stateMachine";

export default abstract class base_state {
  player!: Phaser.Physics.Arcade.Sprite;
  stateMachine!: StateMachine;
  scene!: Phaser.Scene
  keyboardAPI!: Phaser.Input.Keyboard.KeyboardPlugin

  entered!: boolean


  abstract enter(): void
  abstract update(): base_state
  abstract exit(): void
}