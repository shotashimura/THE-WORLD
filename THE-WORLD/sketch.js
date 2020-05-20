// --------------------day 1ーーーーーーーーーーーーー
const sketch1 = function (p) {
  p.setup = function () {
    //create canvas at once
    p.createCanvas(1330, 650);
    p.background(0);

    //Info:処理をまとめるより、手作業で一つ一つ修正をした方が細かいデザインの修正がしやすい
    //make large sun
    p.fill("orange").ellipse(1115, 300, 850);
    // 塗りつぶしの色、三角形を生成(始点のx軸, 始点のy軸, 2点目のx軸, 2点目のy軸, 終点のx軸, 終点のy軸)
    p.fill("red").triangle(938, 78, 648, 80, 731, 180);
    //make marks
    p.fill("red").triangle(538, 378, 648, 80, 731, 180);
    p.fill("red").triangle(538, 528, 448, 680, 831, 680);
    p.fill("white").triangle(738, 528, 788, 580, 831, 680);
    p.fill("white").triangle(638, 518, 668, 580, 731, 680);
    p.fill("orange").triangle(738, 518, 568, 480, 631, 680);
    p.fill("purple").triangle(838, 328, 548, 480, 831, 480);
    p.fill("orange").rect(850, 50, 50, 850);
    p.fill("red").triangle(838, 378, 648, 380, 531, 480);
    p.fill("red").triangle(1038, 328, 948, 680, 831, 580);
    p.fill("red").triangle(1138, 128, 1048, 340, 111, 1160);
    p.fill("red").triangle(1138, 78, 1048, 140, 1011, 60);
    p.fill("orange").triangle(1138, 178, 1048, 240, 1111, 60);
    p.fill("red").triangle(1138, 178, 1298, 240, 1111, 60);
    p.fill("red").triangle(1138, 228, 1048, 80, 991, 30);
    p.fill("red").triangle(1038, 128, 948, 80, 991, 40);
    p.fill("WHITE").ellipse(1075, 600, 300);
    p.fill("WHITE").ellipse(1245, 500, 200);
    p.fill("WHITE").ellipse(1175, 800, 600);
    p.fill("pink").triangle(1038, 278, 648, 280, 831, 380);
    p.fill("purple").triangle(1138, 178, 748, 280, 881, 380);
    p.fill("purple").triangle(1158, 60, 532, 480, 671, 260);
    p.fill("yellow").ellipse(1155, 300, 200);
    p.fill("yellow").ellipse(1215, 100, 100);
    p.fill("red").triangle(138, 578, 248, 480, 231, 480);
    p.fill("red").triangle(238, 478, 348, 380, 231, 480);
    p.fill("red").triangle(238, 478, 348, 380, 331, 380);
    p.fill("red").triangle(358, 578, 648, 380, 401, 380);
  };
  //mouse move can make small red points
  p.draw = function () {
    const step = 20;
    for (let y = 0; y <= 700; y += step) {
      for (let x = 0; x <= 1300; x += step) {
        const d = p.dist(x, y, p.mouseX, p.mouseY);
        const size = p.map(p.sin(d * 0.05), -1, 1, 0, 10);
        p.fill(p.map(p.sin(d * 0.05), -1, 1, 60, 320), 100, 100);
        p.ellipse(x, y, size, size);
      }
    }
  };
};
//-------------------- day2 --------------------
const sketch2 = function (p) {
  let stars = [];
  let speed;
  class Star {
    //classの作成 処理を箱に分ける
    constructor() {
      this.x = p.random(-p.width, p.width);
      this.y = p.random(-p.height, p.height);
      this.z = p.random(p.width);
      this.pz = this.z;
    }
    update() {
      this.z = this.z - speed;
      if (this.z < 1) {
        this.z = p.width;
        this.x = p.random(-p.width, p.width);
        this.y = p.random(-p.height, p.height);
        this.pz = this.z;
      }
    }

    show() {
      p.fill(255);
      p.noStroke();

      let sx = p.map(this.x / this.z, 0, 1, 0, p.width);
      let sy = p.map(this.y / this.z, 0, 1, 0, p.height);
      let r = p.map(this.z, 0, p.width, 12, 0);
      p.ellipse(sx, sy, r, r);

      let px = p.map(this.x / this.pz, 0, 1, 0, p.width);
      let py = p.map(this.y / this.pz, 0, 1, 0, p.height);
      this.pz = this.z;

      p.stroke(255);
      p.line(px, py, sx, sy);
    }
  }

  p.setup = function () {
    p.createCanvas(1300, 650);

    star = new Star();

    // Create an array of 1600 star objects
    for (let i = 0; i < 1600; i++) {
      stars[i] = new Star();
      // This also works to populate the array
      // star = new Star();
      // append(stars, star);
    }
  };

  p.draw = function () {
    speed = p.map(p.mouseX, 0, p.width, 5, 30);
    p.background(0);
    p.translate(p.width / 2, p.height / 2);
    for (let i = 0; i < stars.length; i++) {
      stars[i].update();
      stars[i].show();
    }
  };
};

//-------------------- day3 --------------------
const sketch3 = function (p) {
  p.setup = function () {
    p.createCanvas(1330, 650);
    p.noStroke();
    p.background(0);
    let x = 0;
    let y = 300;
    while (x < p.width) {
      p.fill("#FBEC5D");
      p.ellipse(x, y, 10, 10);
      x = x + 30;
      y = y - 5;
    }
    // make earth
    p.fill("#1e50a2").ellipse(515, 300, 850);

    // 先に大陸などを描画して、その上に雲を配置する
    //paragraph 1
    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(25)
      .text("二十億年の孤独    谷川俊太郎", 200, 70);

    //paragraph 2 行を変えるときは４０、そのほかはheightを２０ずつ空けること
    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("人類は小さな球の上で", 200, 140);

    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("眠り起きそして働き", 200, 160);

    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("ときどき火星に仲間を欲しがったりする", 200, 180);

    //paragraph 3
    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("火星人は小さな球の上で", 200, 220);

    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("何をしてるか　僕は知らない", 200, 240);

    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("（或いは　ネリリし　キルルし　ハララしているか）", 200, 260);

    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("しかしときどき地球に仲間を欲しがったりする", 200, 280);

    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("それはまったくたしかなことだ", 200, 300);

    //paragraph 4
    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("万有引力とは", 200, 340);

    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("ひき合う孤独の力である", 200, 360);

    //paragraph 5
    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("宇宙はひずんでいる", 200, 400);

    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("それ故みんなはもとめ合う", 200, 420);

    //paragraph 6
    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("宇宙はどんどん膨らんでゆく", 200, 460);

    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("それ故みんなは不安である", 200, 480);

    //paragraph 7
    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("二十億光年の孤独に", 200, 520);

    p.fill("LimeGreen")
      .textStyle("bold")
      .textSize(20)
      .text("僕は思わずくしゃみをした", 200, 540);
  };
};
//-------------------- day4 --------------------
const sketch4 = function (p) {
  const barWidth = 20;
  let lastBar = -1;
  p.setup = function () {
    p.createCanvas(1330, 650);
    p.colorMode(p.HSB, p.height, p.height, p.height);
    p.noStroke();
    p.background("#1e50a2");
  };
  p.draw = function () {
    const whichBar = p.mouseX / barWidth;
    if (whichBar !== lastBar) {
      let barX = whichBar * barWidth;
      p.fill(p.mouseY, p.height, p.height);
      p.rect(barX, 0, barWidth, p.height);
      lastBar = whichBar;
    }
  };
};
//-------------------- day5 --------------------
const sketch5 = function (p) {
  let drop = [];
  class Drop {
    constructor() {
      this.x = p.random(0, p.width);
      this.y = p.random(0, -p.height);
      this.show = function () {
        p.noStroke();
        p.fill(255);
        p.ellipse(this.x, this.y, 2, 10);
      };
      this.update = function () {
        this.speed = p.random(5, 10);
        this.y = this.y + this.speed;
        if (this.y > p.height) {
          this.y = p.random(0, -p.height);
        }
      };
    }
  }

  p.setup = function () {
    p.createCanvas(1330, 650);
    p.noStroke();
    p.background("skyblue");
    for (let i = 0; i < 400; i++) {
      drop[i] = new Drop();
    }
  };

  p.draw = function () {
    for (let i = 0; i < 400; i++) {
      drop[i].show();
      drop[i].update();
    }
    p.fill("red").ellipse(p.mouseX, p.mouseY, 20);
    p.fill("orange").ellipse(p.mouseX + 15, p.mouseY + 15, 20);
    p.fill("yellow").ellipse(p.mouseX + 30, p.mouseY + 30, 20);
    p.fill("green").ellipse(p.mouseX + 45, p.mouseY + 45, 20);
    p.fill("blue").ellipse(p.mouseX + 60, p.mouseY + 60, 20);
    p.fill("purple").ellipse(p.mouseX + 75, p.mouseY + 75, 20);
    p.fill("pink").ellipse(p.mouseX + 90, p.mouseY + 90, 20);
  };
};
//-------------------- day6 --------------------
const sketch6 = function (p) {
  const tokyowords = [
    "",
    "愛",
    "時間",
    "自由",
    "東京という街で",
    "僕の言葉は",
    "いつも空虚",
    "気がつけば迷子",
    "救いの手は",
    "遂に途絶え",
    "迷ったまま",
    "踊るだけ",
  ];
  let index = 0;
  p.setup = function () {
    p.createCanvas(1330, 650);
  };

  p.draw = function () {
    p.background(0);
    p.noFill();
    //front designs
    p.stroke(0, 153, 255).line(0, p.height * 0.33, p.width, p.height * 0.33);

    p.stroke(0, 153, 255).line(0, p.height * 0.34, p.width, p.height * 0.34);
    p.stroke(255, 153, 0).rect(
      p.width * 0.4,
      p.height * 0.2,
      p.width * 0.2,
      p.height * 0.4
    );
    p.stroke(255, 153, 0).rect(
      p.width * 0.39,
      p.height * 0.19,
      p.width * 0.19,
      p.height * 0.39
    );
    p.stroke(255, 153, 0).rect(
      p.width * 0.37,
      p.height * 0.17,
      p.width * 0.17,
      p.height * 0.37
    );
    p.stroke(255, 153, 0).rect(
      p.width * 0.34,
      p.height * 0.14,
      p.width * 0.14,
      p.height * 0.34
    );
    p.stroke(255, 153, 0).rect(
      p.width * 0.31,
      p.height * 0.11,
      p.width * 0.11,
      p.height * 0.31
    );
    p.fill(255).textSize(32);
    p.text(tokyowords[index], 70, 200);
  };
  let countUp = function () {
    index += 1;
    if (index === 12) {
      index = 0;
    }
  };
  //automatic change words
  setInterval(countUp, 500);
};

//-------------------- day7 --------------------
const sketch7 = function (p) {
  p.setup = function () {
    p.createCanvas(1330, 650);
    p.background("#E5E5E5");
    p.noStroke();

    p.fill("pink").triangle(0, 0, 0, 80, 731, 180);
    p.fill("pink").triangle(731, 180, 831, 180, 920, 200);
    p.fill("yellow").triangle(0, 650, 378, 90, 631, 310);

    //road sign
    p.fill("white").ellipse(1015, 250, 300);
    p.fill("red").ellipse(1015, 250, 280);
    p.fill("white").rect(915, 235, 200, 40);

    //word
    p.fill(255).textSize(32).text("Think Diffrent", 40, 200);
  };

  p.draw = function () {
    //make sprayArt
    if (p.mouseIsPressed == true) {
      let color = p.color(p.random(255), p.random(255), p.random(255));
      p.fill(color).ellipse(p.mouseX, p.mouseY, 15, 15);
    }
  };
};

// --------------------------- p5js calling ----------------------------
new p5(sketch1, "container1");
new p5(sketch2, "container2");
new p5(sketch3, "container3");
new p5(sketch4, "container4");
new p5(sketch5, "container5");
new p5(sketch6, "container6");
new p5(sketch7, "container7");
