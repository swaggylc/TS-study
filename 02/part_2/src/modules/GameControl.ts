import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

// 游戏控制器,控制其他的所有类

class GameControl {
  // 定义三个属性
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  // 创建一个属性来存储蛇的移动方向(也就是按键的方向)
  direction: string = "";

  // 创建一个属性用来记录游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    // 记分牌
    this.scorePanel = new ScorePanel();

    this.init();
  }

  // 初始化游戏,调用后游戏开始
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }

  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    // console.log(event.key);
    // 需要检查event.key的值是否合法(用户是否按了正确的按键)

    // 修改蛇的方向
    this.direction = event.key;
  }

  // 创建一个控制蛇移动的方法
  run() {
    // 根据方向(this.direction)来使蛇的位置改变
    // 向上 top 减少
    // 向下 top 增加
    // 向左 left 减少
    // 向右 left 增加

    // 获取蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据按键方向来修改X值和Y值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        // 向上移动 top 减少
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        //向下移动top增加
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        // 向左移动 left 减少
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        // 向右移动 left 增加
        X += 10;
        break;
    }

    // 修改蛇的X和Y值
    this.snake.X = X;
    this.snake.Y = Y;

    // 开启一个定时调用
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
}

export default GameControl;
