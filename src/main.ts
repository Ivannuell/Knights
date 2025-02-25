
import Phaser from "phaser";
import Start from "./scene/Start";
import Game from "./scene/Game";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  physics: 
  {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {x: 0, y: 300},
      checkCollision: {
        down: true,
        up: true,
        left: true,
        right: true
      }
    }
  },
  title: 'Knights', 
  parent: 'game-container',
  width: 1280,
  height: 720,
  pixelArt: false,
  backgroundColor: 0x191970,
  scene: [
      Start, Game
  ],
  scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
  },
}
new Phaser.Game(config);