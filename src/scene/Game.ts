import { CollisionHandler } from "../components/collisionHandler";
import Knight from "../core/knight/Knight";
import { testBox } from "../core/testBox/testBox";
import MasterStateMachine from "../core/MasterStateMachine";

export default class Game extends Phaser.Scene {
  knight!: Knight;
  damageBox!: testBox;
  
  ground!: Phaser.GameObjects.Rectangle;

  masterStateMachine!: MasterStateMachine;
  collisions = new CollisionHandler(this);

  constructor() {
    super('Game');
  }

  create() {
    this.knight = this.generateKnight();
    this.ground = this.generateGround();
    this.damageBox = this.generateDamageBox(800, 350);
    // const damageBox_2 = this.generateDamageBox(300, 350)

    this.masterStateMachine = new MasterStateMachine(this);

    const knightStateMachine = this.masterStateMachine.createKnightStateMachine(this.knight);
    const boxStateMachine = this.masterStateMachine.createTestBoxStateMachine(this.damageBox);
    // const boxStateMachine_2 = this.masterStateMachine.createTestBoxStateMachine(damageBox_2);

    this.collisions.addCollider(this.knight, this.ground);
    this.collisions.addCollider(this.damageBox, [this.ground]);
    this.collisions.addOverlap(this.knight.attackBox, this.damageBox);
  }

  update() {
    this.masterStateMachine.update();
  }

  generateGround() {
    const rect = this.add.rectangle(640, 500, 1280, 100, 0x555555);
    this.physics.add.existing(rect, true);
    return rect;
  }

  generateKnight() {
    const knight = new Knight(this, 500, 100);
    return knight;
  }

  generateDamageBox(x: number, y: number) {
    const DamageBox = new testBox(this, x, y);
    DamageBox.hpText = this.add.text(DamageBox.x * 0.96, DamageBox.y - DamageBox.height + 50, `HP: ${DamageBox.health}`);
    return DamageBox;
  }

  collideCallback() {
    console.log('Knight has arrived!!');
  }
}