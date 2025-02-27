const { KeyCodes } = Phaser.Input.Keyboard

export interface keys {
  moveLeft: Phaser.Input.Keyboard.Key,
  moveRight: Phaser.Input.Keyboard.Key,
  attack: Phaser.Input.Keyboard.Key
}

export const KEY_BINDINGS = {
  moveLeft:   KeyCodes.A,
  moveRight:  KeyCodes.D,
  attack:     KeyCodes.B
}