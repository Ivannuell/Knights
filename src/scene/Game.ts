import { CollisionHandler } from "../core/collisionHandler"
import StateMachine from "../core/stateMachine";
import Knight from "../essentials/Knight"

export default class Game extends Phaser.Scene {
  knight!: Knight;
  ground!: Phaser.GameObjects.Rectangle
  state_machine!: StateMachine
  collisions = new CollisionHandler(this)

  constructor() {
    super('Game')
  }

  create() {
    this.knight = this.generateKnight()
    this.ground = this.generateGround()

    this.state_machine = new StateMachine(this, this.knight)
    this.collisions.addCollider(this.knight, this.ground)

  }

  update() {
    this.state_machine.updateState()
  }




  generateGround() {
    const rect = this.add.rectangle(640, 500, 1280, 100, 0x555555)
    this.physics.add.existing(rect, true)
    return rect
  }

  generateKnight() {
    const knight = new Knight(this, 500, 100)
    return knight
  }

  collideCallback() {
    console.log('Knight has arrived!!');

  }


}