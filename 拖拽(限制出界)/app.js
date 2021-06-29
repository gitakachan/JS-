let item = document.querySelector(".item");

drag(item);

//拖拽函數
function drag(el) {
  el.onmousedown = function (e) {
    //紀錄鼠標按下時位置和被拖拽物體的相對距離

    //滑鼠和物件相對位置 = 鼠標距左位置 - 物體距左位置;
    let offsetX = e.pageX - this.offsetLeft;
    //滑鼠和物件相對位置 = 鼠標距左位置 - 物體距左位置;
    let offsetY = e.pageY - this.offsetTop;

    //移動時是在document上綁定鼠標移動事件
    document.onmousemove = function (e) {
      let l = e.pageX - offsetX;
      let h = e.pageY - offsetY;
      let windowWidth = document.body.scrollWidth;
      let windowHeight = document.body.scrollHeight;

      //寬度設定
      if (l < 0) {
        l = 0;
      } else if (l >= windowWidth - el.offsetWidth) {
        l = windowWidth - el.offsetWidth;
      }
      el.style.left = l + "px";

      //高度設定
      if (h < 0) {
        h = 0;
      } else if (h >= windowHeight - el.offsetHeight) {
        h = windowHeight - el.offsetHeight;
      }
      el.style.top = h + "px";
    };
  };

  //mouseup時取消mousedown
  document.onmouseup = function () {
    document.onmousemove = null;
  };
}
