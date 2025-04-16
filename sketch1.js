function setup() {  //設定函數，初始值的地方
    //建立一個依照視窗高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    // 背景顏色為fefae0
    background(254, 250, 224);
  
  
  }
  
  function draw() {
   // background(220);
   //畫圓的顏色為#e9edc9
    fill(233, 237, 201);
    //畫圓的邊框為#ccd5ae
    stroke(204, 213, 174);
    //畫圓的位置在中間
    ellipse(width/2, height/2, 200, 200);
    //依照上面的圓顏色與框線顏色與大小，不重疊，從視窗的最左邊，產生連續的圓，到視窗的坐右邊
    for (let i = 0; i < width; i = i + 200) {
      fill(233, 237, 201);
      stroke(204, 213, 174);
      ellipse(i, height/2, 200, 200);
    }
    
  }
  //當視窗大小改變時，畫布的寬高也會改變
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }