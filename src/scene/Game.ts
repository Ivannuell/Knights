import { CollisionHandler } from "../components/collisionHandler";
import Knight from "../core/knight/Knight";
import { testBox } from "../core/testBox/testBox";
import MasterStateMachine from "../core/MasterStateMachine";

export default class Game extends Phaser.Scene {
  masterStateMachine!: MasterStateMachine;
  collisions = new CollisionHandler(this);

  constructor() {
    super('Game');
  }

  create() {
    const knight = this.generateKnight();
    const ground = this.generateGround();
    const damageBox_1 = this.generateDamageBox(800, 350, 'testBox_1');
    const damageBox_2 = this.generateDamageBox(300, 350, 'testBox_2')

    this.masterStateMachine = new MasterStateMachine(this);

    this.masterStateMachine.createKnightStateMachine(knight);
    this.masterStateMachine.createTestBoxStateMachine(damageBox_1);
    this.masterStateMachine.createTestBoxStateMachine(damageBox_2);

    console.log('box1 --', damageBox_1)
    console.log('box2 --', damageBox_2)

    this.collisions.addCollider(knight, ground);
    this.collisions.addCollider(damageBox_1, [ground]);
    this.collisions.addOverlap(knight.attackBox, [damageBox_1, damageBox_2]);
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

  generateDamageBox(x: number, y: number, name: string) {
    const DamageBox = new testBox(this, x, y, name);
    DamageBox.hpText = this.add.text(DamageBox.x * 0.96, DamageBox.y - DamageBox.height + 50, `HP: ${DamageBox.health}`);
    return DamageBox;
  }

  collideCallback() {
    console.log('Knight has arrived!!');
  }
}