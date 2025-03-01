import stateMachine_testBox from "../stateMachine_testBox";
import boxState from "./boxState";
import takeDamage_state from "./takeDamage_state";



export default class idleBox_state extends boxState {
  constructor(scene: Phaser.Scene, stateMachine_i: stateMachine_testBox) {
    super()
    this.stateMachine = stateMachine_i
    this.scene = scene
    this.entered = false
  }

  trigger = false

  enter() {
    this.scene.time.delayedCall(300, () => {
      this.box.setFillStyle(0xffffff)
    })
    console.log("entered idlebox state")

    this.scene.physics.world.once(Phaser.Physics.Arcade.Events.OVERLAP, (obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject) => {
      console.log('obj1 --- ', obj1)
      console.log('obj2 --- ', obj2)

      if (obj2.name == 'testBox') {
        this.stateMachine.setState(new takeDamage_state(this.scene, this.stateMachine))
      }
    }, this)
  }

  update() {
    //TODO: add logic when attacking

    // if (this.trigger) {
      
    //   return
    // }
  }

  exit() {

  }
}