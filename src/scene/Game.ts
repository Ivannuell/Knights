import { CollisionHandler } from "../components/collisionHandler"
import StateMachine from "../core/knight/stateMachine";
import Knight from "../core/knight/Knight"
import { testBox } from "../core/testBox/testBox";

export default class Game extends Phaser.Scene {
  knight!: Knight;
  damageBox!: testBox
  
  ground!: Phaser.GameObjects.Rectangle

  state_machine!: StateMachine
  collisions = new CollisionHandler(this)

  constructor() {
    super('Game')
  }

  create() {
    this.knight = this.generateKnight()
    this.ground = this.generateGround()
    this.damageBox = this.generateDamageBox()

    this.state_machine = new StateMachine(this, this.knight)
    
    this.collisions.addCollider(this.knight, this.ground)
    this.collisions.addCollider(this.damageBox, [this.ground, this.knight])
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

  generateDamageBox() {
    const DamageBox = new testBox(this, 800, 350)
    DamageBox.hpText = this.add.text(DamageBox.x * 0.96, DamageBox.y - DamageBox.height + 50, `HP: ${DamageBox.health}`)
    return DamageBox
  }

  collideCallback() {
    console.log('Knight has arrived!!');

  }


}