function setup() {  //設定函數，初始值的地方
  //建立一個依照視窗高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight);
  // 設定顏色模式為HSB
  colorMode(HSB);
}

function draw() {
  // 計算圓形的顏色
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定圓形的顏色
  fill(hue, 100, brightness);

  // 設定框線的顏色
  stroke(hue, 100, 100 - brightness);
  strokeWeight(5);

  // 繪製圓形
  ellipse(mouseX, mouseY, 200, 200);
}

//當視窗大小改變時，畫布的寬高也會改變
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}