function setup() {  //設定函數，初始值的地方
    //建立一個依照視窗高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    // 背景顏色為fefae0
    background(254, 250, 224);
  }
  
  function draw() {
    // 清除背景
    background(254, 250, 224);
  
    // 計算圓形和方形的大小
    let size = map(mouseX, 0, windowWidth, 100, 500);
  
    // 計算每個形狀之間的間距
    let spacing = size + 20;
  
    // 繪製方形和圓形
    for (let x = spacing / 2; x < windowWidth; x += spacing) {
      for (let y = spacing / 2; y < windowHeight; y += spacing) {
        // 繪製方形
        rectMode(CENTER);
        rect(x, y, size, size);
  
        // 繪製圓形
        fill("#dde5b6");
        stroke("#adc178");
        strokeWeight(20);
        ellipse(x, y, size, size);
      }
    }
  }
  
  //當視窗大小改變時，畫布的寬高也會改變
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }