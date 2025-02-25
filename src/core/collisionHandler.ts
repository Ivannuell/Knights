export class CollisionHandler {
  constructor(private scene: Phaser.Scene) {
  
  }

  addCollider(
    object1: Phaser.Types.Physics.Arcade.ArcadeColliderType, 
    object2: Phaser.Types.Physics.Arcade.ArcadeColliderType, 
    callback?: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback
  ) {
    this.scene.physics.add.collider(object1, object2, undefined, () => true
    , this.scene)
  }
}