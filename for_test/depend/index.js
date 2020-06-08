//依赖 id 和 class
function $id(id) {
  return document.getElementById(id);
}
function $class(class1) {
  return document.getElementsByClassName(class1);
}

//绘制正多边形
/*
@params
  n:表示几边形
  dx,dy:表示n边形中心坐标
  size:表示n边形大小；(中心到顶点的大小)
*/
function createPolygon(cxt, n, dx, dy, size) {
  cxt.beginPath();
  var degree = (2 * Math.PI) / n;
  for (let i = 0; i < n; i++) {
    let x = Math.cos(i * degree);
    let y = Math.sin(i * degree);
    cxt.lineTo(x * size + dx, y * size + dy);
  }
  cxt.closePath();
}

//绘制5角星
/*
@params
  x,y 五角星中心坐标
  maxSize 最大到圆心长度
  minSize 最小到圆心长度
*/
function FivePointedStar(cxt, X, Y, maxSize, minSize) {
  for (let i = 0; i < 5; i++) {
    cxt.lineTo(
      Math.cos(((18 + i * 72) * Math.PI) / 180) * maxSize + X,
      -Math.sin(((18 + i * 72) * Math.PI) / 180) * maxSize + Y
    );
    cxt.lineTo(
      Math.cos(((54 + i * 72) * Math.PI) / 180) * minSize + X,
      -Math.sin(((54 + i * 72) * Math.PI) / 180) * minSize + Y
    );
  }
  cxt.closePath();
}

//圆角矩形封装
/*
@params
  width,height  表示长和宽度
  r表示圆角半径
  offsetX,offsetY,分别表示左上角顶点的坐标
*/

function createRoundedRect(cxt, width, height, r, offsetX, offsetY) {
  cxt.beginPath();
  cxt.moveTo(offsetX + r, offsetY);
  cxt.lineTo(offsetX + width - r, offsetY);
  cxt.arcTo(offsetX + width, offsetY, offsetY + width, offsetY + r, r);

  cxt.lineTo(offsetX + width, offsetY + height - r);
  cxt.arcTo(offsetX + width, offsetY + height, offsetX + width - r, offsetY + height, r);

  cxt.lineTo(offsetX + r, offsetY + height);
  cxt.arcTo(offsetX, offsetY + height, offsetX, offsetY + height - r, r);

  cxt.lineTo(offsetX, offsetY + r);
  cxt.arcTo(offsetX, offsetY, offsetX + r, offsetY, r);
}
