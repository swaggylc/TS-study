// 定义表示记分牌的类

class ScorePanel {
  score = 0; // 分数
  level = 1; // 等级
  scoreEle: HTMLElement; // 分数和等级的元素
  levelEle: HTMLElement;

  // 设置一个变量限制等级
  maxLevel: number;
  // 设置一个变量表示多少分时升级
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById("scoreEle")!;
    this.levelEle = document.getElementById("levelEle")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 设置一个加分的方法
  addScore() {
    // 分数自增
    this.scoreEle.innerHTML = ++this.score + "";
    // 判断分数是多少
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }
  // 提升等级的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}

export default ScorePanel;
