
//封装传入元素,获取当前鼠标所对应坐标
//获取鼠标控制方向
export default {
  getMouse(ele) {
    var mouse = { x: 0, y: 0 };
    addEvent(ele, "mousemove", e => {
      var x, y;
      var e = e || window.event;
      //获取鼠标当前位置,并且做出一定的兼容
      if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY
      } else {
        x = e.clientX + document.body.scrollLeft || document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop || document.documentElement.scrollTop;

        x -= element.offsetLeft;
        y -= element.offsetTop;
      }
      mouse.x = x;
      mouse.y = y;
    })
    return mouse;
  },
  getKey() {
    var key = {};
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 38 || e.keyCode == 87) {
        key.direction = 'up';
      } else if (e.keyCode == 39 || e.keyCode == 68) {
        key.direction = 'right';
      } else if (e.keyCode == 40 || e.keyCode == 83) {
        key.direction = 'down'
      } else if (e.keyCode == 37 || e.keyCode == 65) {
        key.direction = 'left'
      } else {
        key.direction = ''
      }
    }, false)
    return key
  }
}