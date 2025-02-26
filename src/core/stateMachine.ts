import base_state from "./states/base_state";
import idle_state from "./states/idle_state";


export default class StateMachine {
  activeState!: base_state
  constructor(public scene: Phaser.Scene, public player: Phaser.Physics.Arcade.Sprite) {
    this.activeState = new idle_state()
    this.activeState.scene = scene
    this.activeState.player = player
  }
  
  updateState() {
    this.activeState.player.setImmovable(false)

    if (!this.activeState.entered) {
      this.activeState.entered = true
      this.activeState.enter()
    }

    if (this.activeState.update() != this.activeState) {
      this.activeState.exit()
      this.activeState = this.activeState.update()
      this.activeState.scene = this.scene
      this.activeState.player = this.player
    }

  }
}
