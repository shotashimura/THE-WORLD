// ーーーーーーーーーーfirst day sun[start]ーーーーーーーーーーーーー

let sketch1 = function(p) {
  p.setup = function() {
    //最初に一回実行される処理
    p.createCanvas(1330, 650);
    // p.noStroke();
    p.background(0);

    p.fill("orange"); //巨大な太陽
    p.ellipse(1115, 300, 850);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(938, 78, 648, 80, 731, 180); // 三角形を生成(始点のx軸, 始点のy軸, 2点目のx軸, 2点目のy軸, 終点のx軸, 終点のy軸)

    p.fill("red"); // 塗りつぶしの色
    p.triangle(538, 378, 648, 80, 731, 180);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(538, 528, 448, 680, 831, 680);

    p.fill("white"); // 塗りつぶしの色
    p.triangle(738, 528, 788, 580, 831, 680);

    p.fill("white"); // 塗りつぶしの色
    p.triangle(638, 518, 668, 580, 731, 680);

    p.fill("orange"); // 塗りつぶしの色
    p.triangle(738, 518, 568, 480, 631, 680);

    p.fill("purple"); // 塗りつぶしの色
    p.triangle(838, 328, 548, 480, 831, 480);

    p.fill("orange");
    p.rect(850, 50, 50, 850);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(838, 378, 648, 380, 531, 480);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(1038, 328, 948, 680, 831, 580);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(1138, 128, 1048, 340, 111, 1160);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(1138, 78, 1048, 140, 1011, 60);

    p.fill("orange"); // 塗りつぶしの色
    p.triangle(1138, 178, 1048, 240, 1111, 60);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(1138, 178, 1298, 240, 1111, 60);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(1138, 228, 1048, 80, 991, 30);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(1038, 128, 948, 80, 991, 40);

    p.fill("WHITE");
    p.ellipse(1075, 600, 300);

    p.fill("WHITE");
    p.ellipse(1245, 500, 200);

    p.fill("WHITE");
    p.ellipse(1175, 800, 600);

    p.fill("pink"); // 塗りつぶしの色
    p.triangle(1038, 278, 648, 280, 831, 380);

    p.fill("purple"); // 塗りつぶしの色
    p.triangle(1138, 178, 748, 280, 881, 380);

    p.fill("purple"); // 塗りつぶしの色
    p.triangle(1158, 60, 532, 480, 671, 260);

    p.fill("yellow");
    p.ellipse(1155, 300, 200);

    p.fill("yellow");
    p.ellipse(1215, 100, 100);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(138, 578, 248, 480, 231, 480);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(238, 478, 348, 380, 231, 480);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(238, 478, 348, 380, 331, 380);

    p.fill("red"); // 塗りつぶしの色
    p.triangle(358, 578, 648, 380, 401, 380);
  };

  p.draw = function() {
    //繰り返し実行される処理
    // p.background(0);

    const step = 20;

    for (let y = 0; y <= 700; y += step) {
      for (let x = 0; x <= 1300; x += step) {
        const d = p.dist(x, y, p.mouseX, p.mouseY);
        // const size = d / 10;
        const size = p.map(p.sin(d * 0.05), -1, 1, 0, 10);
        p.fill(p.map(p.sin(d * 0.05), -1, 1, 60, 320), 100, 100);
        p.ellipse(x, y, size, size);
      }
    }
  };
};
// ーーーーーーーーーーfirst day sun[end]--------------------

// ーーーーーーーーーーday2 stars[start]--------------------
// https://www.youtube.com/watch?v=17WoOqgXsRM　参考その１
// https://www.youtube.com/watch?v=ljZ43OX1uO4 参考その２
let sketch2 = function(p) {
  let stars = [];
  let speed;

  class Star {
    //classの作成　処理を箱に分ける
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

  p.setup = function() {
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

  p.draw = function() {
    speed = p.map(p.mouseX, 0, p.width, 5, 30);
    p.background(0);
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < stars.length; i++) {
      stars[i].update();
      stars[i].show();
    }
  };
};

// ーーーーーーーーーーday2 stars[end]--------------------

// ーーーーーーーーーーday3 earth[start]--------------------
let sketch3 = function(p) {
  p.setup = function() {
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

    p.fill("#1e50a2"); //青い地球
    p.ellipse(515, 300, 850);

    // 先に大陸などを描画して、その上に雲を配置する
    //段落その１
    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(25);
    p.text("二十億年の孤独    谷川俊太郎", 200, 70);

    //段落その２　行を変えるときは４０、そのほかはheightを２０ずつ空けること
    p.fill("LimeGreen");
    p.textStyle("bold");
    // p.textFont("Impact");
    p.textSize(20);
    p.text("人類は小さな球の上で", 200, 140);

    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("眠り起きそして働き", 200, 160);

    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("ときどき火星に仲間を欲しがったりする", 200, 180);

    //段落その３
    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("火星人は小さな球の上で", 200, 220);

    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("何をしてるか　僕は知らない", 200, 240);

    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("（或いは　ネリリし　キルルし　ハララしているか）", 200, 260);

    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("しかしときどき地球に仲間を欲しがったりする", 200, 280);

    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("それはまったくたしかなことだ", 200, 300);

    //段落その4
    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("万有引力とは", 200, 340);

    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("ひき合う孤独の力である", 200, 360);

    //段落その5
    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("宇宙はひずんでいる", 200, 400);

    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("それ故みんなはもとめ合う", 200, 420);

    //段落その6
    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("宇宙はどんどん膨らんでゆく", 200, 460);

    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("それ故みんなは不安である", 200, 480);

    //段落その7
    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("二十億光年の孤独に", 200, 520);

    p.fill("LimeGreen");
    p.textStyle("bold");
    p.textSize(20);
    p.text("僕は思わずくしゃみをした", 200, 540);
  };

  // p.draw = function() {
  //   let x = 0;
  //   while (x < p.width) {
  //     p.fill(255);
  //     p.ellipse(x, 100, 10, 10);
  //     x = x + 50;
  //   }
  // };
};

// ーーーーーーーーーーday3 earth[end]--------------------

// ーーーーーーーーーーday4 ozonelayer&boundary[start]--------------------
let sketch4 = function(p) {
  const barWidth = 20;
  let lastBar = -1;

  p.setup = function() {
    p.createCanvas(1330, 650);
    p.colorMode(p.HSB, p.height, p.height, p.height);
    p.noStroke();
    p.background("#1e50a2");
  };

  p.draw = function() {
    let whichBar = p.mouseX / barWidth;
    if (whichBar !== lastBar) {
      let barX = whichBar * barWidth;
      p.fill(p.mouseY, p.height, p.height);
      p.rect(barX, 0, barWidth, p.height);
      lastBar = whichBar;
    }
  };
};

// 参考
// https://p5js.org/examples/color-hue.html

// ーーーーーーーーーーday4 ozonelayer&boundary[end]--------------------

// ーーーーーーーーーーday5 about the sky[start]--------------------
let sketch5 = function(p) {
  let drop = [];

  class Drop {
    constructor() {
      this.x = p.random(0, p.width);
      this.y = p.random(0, -p.height);
      this.show = function() {
        p.noStroke();
        p.fill(255);
        p.ellipse(this.x, this.y, 2, 10);
      };
      this.update = function() {
        this.speed = p.random(5, 10);
        this.y = this.y + this.speed;
        if (this.y > p.height) {
          this.y = p.random(0, -p.height);
        }
      };
    }
  }

  p.setup = function() {
    p.createCanvas(1330, 650);
    p.noStroke();
    p.background("skyblue");
    for (let i = 0; i < 400; i++) {
      drop[i] = new Drop();
    }
  };

  p.draw = function() {
    // p.background("skyblue");
    for (let i = 0; i < 400; i++) {
      drop[i].show();
      drop[i].update();
    }

    p.fill("red");
    p.ellipse(p.mouseX, p.mouseY, 20);
    p.fill("orange");
    p.ellipse(p.mouseX + 15, p.mouseY + 15, 20);
    p.fill("yellow");
    p.ellipse(p.mouseX + 30, p.mouseY + 30, 20);
    p.fill("green");
    p.ellipse(p.mouseX + 45, p.mouseY + 45, 20);
    p.fill("blue");
    p.ellipse(p.mouseX + 60, p.mouseY + 60, 20);
    p.fill("purple");
    p.ellipse(p.mouseX + 75, p.mouseY + 75, 20);
    p.fill("pink");
    p.ellipse(p.mouseX + 90, p.mouseY + 90, 20);
  };
};

// ーーーーーーーーーーday5 about the sky[end]--------------------

// ーーーーーーーーーーday6 city lights[start]--------------------
let sketch6 = function(p) {
  let tokyowords = [
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
    "踊るだけ"
  ];
  let index = 0;

  // let bubbles = [];

  p.setup = function() {
    p.createCanvas(1330, 650);
    // for (let i = 0; i < 2; i++) {
    //   bubbles[i] = new Bubble(200, 200, 40);
    // }
  };

  // day6 orange => basic color is yellow
  p.draw = function() {
    // /////tokyo city lights basic[start]////////////////////////////////
    p.background(0);
    p.noFill();

    p.stroke(0, 153, 255); //　線の色
    p.line(0, p.height * 0.33, p.width, p.height * 0.33); // 横の位置(始点), 縦の位置(始点),　横の位置(終点), 縦の位置(終点)に線を引く

    p.stroke(0, 153, 255); //　線の色
    p.line(0, p.height * 0.34, p.width, p.height * 0.34);

    p.stroke(255, 153, 0); // 線の色
    p.rect(p.width * 0.4, p.height * 0.2, p.width * 0.2, p.height * 0.4); // 四角形 横の始点, 縦の始点, 横幅, 縦幅
    p.stroke(255, 153, 0); // 線の色
    p.rect(p.width * 0.39, p.height * 0.19, p.width * 0.19, p.height * 0.39);
    p.stroke(255, 153, 0); // 線の色
    p.rect(p.width * 0.37, p.height * 0.17, p.width * 0.17, p.height * 0.37);
    p.stroke(255, 153, 0); // 線の色
    p.rect(p.width * 0.34, p.height * 0.14, p.width * 0.14, p.height * 0.34);
    p.stroke(255, 153, 0); // 線の色
    p.rect(p.width * 0.31, p.height * 0.11, p.width * 0.11, p.height * 0.31);
    // /////tokyo city lights basic[end]////////////////////////////////
    // ////////text[start]/////////////////////////
    p.fill(255);
    p.textSize(32);
    p.text(tokyowords[index], 70, 200);
    // ////////////text[end]//////////////////
    // for (let i = 0; i < 2; i++) {
    //   p.bubbles[i].move();
    //   p.bubbles[i].move();
    // }
  };
  p.mousePressed = function() {
    index += 1;
    if (index == 12) {
      index = 0;
    }
  };

  /// bubble zone

  // class Bubble {
  //   constructor(x, y, z) {
  //     this.x = x;
  //     this.y = y;
  //     this.z = z;
  //     this.move = function() {
  //       this.x = this.x + p.random(-5, 5);
  //       this.y = this.y + p.random(-5, 5);
  //     };
  //   }
  // }

  // p.move = function() {
  //   this.x = this.x + p.random(-5, 5);
  //   this.y = this.y + p.random(-5, 5);
  // };

  // p.show = function() {
  //   p.background(0);
  //   p.stroke(255);
  //   p.strokeWeight(4);
  //   p.noFill();
  //   p.ellipse(this.x, this.y, this.r * 2);
  // };
};

// ーーーーーーーーーーday6 city lights[end]--------------------

// ーーーーーーーーーday7 sunrise in the sea[start]--------------------
let sketch7 = function(p) {
  // let streetwords = [
  //   "Think Diffrent",
  //   "Imagine",
  //   "Become a Geek",
  //   "SHIMURA CLEANING",
  //   "アイ・ラブ・ユー"
  // ];

  // let bangou = 0;

  let img;

  let c1, c2;

  // p.preload = function() {
  //   img = p.loadImage("wall.jpg");
  // };

  p.setup = function() {
    p.createCanvas(1330, 650);
    // p.image(img, 0, 0, p.width, p.height);

    p.background("#E5E5E5");
    p.noStroke();

    p.fill("pink"); // 塗りつぶしの色
    p.triangle(0, 0, 0, 80, 731, 180); // 三角形を生成(始点のx軸, 始点のy軸, 2点目のx軸, 2点目のy軸, 終点のx軸, 終点のy軸)

    p.fill("pink"); // 塗りつぶしの色
    p.triangle(731, 180, 831, 180, 920, 200);

    p.fill("yellow"); // 塗りつぶしの色
    p.triangle(0, 650, 378, 90, 631, 310);

    // // 標識みたいなやつ
    p.fill("white");
    p.ellipse(1015, 250, 300);
    p.fill("red");
    p.ellipse(1015, 250, 280);
    p.fill("white"); // 線の色
    p.rect(915, 235, 200, 40);

    //words
    p.fill(255);
    p.textSize(32);
    p.text("Think Diffrent", 40, 200);

    // c1 = p.color(p.random(255), p.random(255), p.random(255));
    // c2 = p.color(p.random(255), p.random(255), p.random(255));

    // // words board
    // p.fill("black");
    // p.rect(765, 460, 480, 140, 10, 10, 10, 10);
    // p.fill("white"); // 線の色
    // p.rect(769, 462, 472, 135, 10, 10, 10, 10);
  };

  p.draw = function() {
    // //spray
    if (p.mouseIsPressed == true) {
      // c1 = p.color(p.random(255), p.random(255), p.random(255));
      // let radious = (1.0 - p.pow(p.random(1), 1.0 / 2.0)) * 100;
      // let angle = p.random(p.TWO_PI);
      // let v = 1.0 - (p.frameCount % 200) / 200.0;

      // p.fill(c1);
      // p.ellipse(
      //   p.mouseX + radious * p.cos(angle),
      //   p.mouseY + radious * p.sin(angle),
      //   1,
      //   1
      // );

      c1 = p.color(p.random(255), p.random(255), p.random(255));
      p.fill(c1);
      p.ellipse(p.mouseX, p.mouseY, 15, 15);
    }
  };

  // p.mousePressed = function() {
  //   p.fill(c1);
  //   p.ellipse(p.mouseX, p.mouseY, 20, 20);
  // };
};

// ーーーーーーーーーーday7 sunrise in the sea[end]--------------------

// ------------------------------ p5js calling[start] --------------------------------------------
new p5(sketch1, "container1");
new p5(sketch2, "container2");
new p5(sketch3, "container3");
new p5(sketch4, "container4");
new p5(sketch5, "container5");
new p5(sketch6, "container6");
new p5(sketch7, "container7");

// ------------------------------ p5js calling[end]--------------------------------------------
