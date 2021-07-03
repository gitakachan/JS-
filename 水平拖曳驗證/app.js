let container = document.querySelector(".container");
let block = document.querySelector(".block");
let fill = document.querySelector(".fill");

block.onmousedown = function (e) {
  //記錄鼠標和方塊的相對位置
  let offsetX = e.clientX - block.offsetLeft;

  document.onmousemove = function (e) {
    let l = e.clientX - offsetX;
    if (l <= 0) {
      l = 0;
    } else if (l >= 480) {
      l = 480;
    }
    block.style.left = l + "px";
    fill.style.width = block.offsetLeft + "px";
    //console.log(fill.offsetWidth);

    if (fill.offsetWidth >= 479) {
      document.onmousemove = null;
      setTimeout(function () {
        container.style.display = "none";
        alert("驗證成功");
      }, 1000);
    }
  };
};

block.onmouseup = function () {
  document.onmousemove = null;
};
