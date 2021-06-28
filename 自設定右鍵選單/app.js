let menu = document.querySelector(".menu");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let reload = document.querySelector(".reload");

//不顯示原本右鍵選單
window.oncontextmenu = function () {
  return false;
};

//自定義右鍵選單
window.addEventListener("mousedown", function (e) {
  if (e.button === 2) {
    menu.style.display = "block";
    menu.style.left = e.clientX + "px";
    menu.style.top = e.clientY + "px";
  } else {
    menu.style.display = "none";
  }
});

menu.addEventListener("mousedown", function (e) {
  e.stopPropagation();
});

//去上一頁
prev.addEventListener("click", function (e) {
  history.back();
});

//去下一頁
next.addEventListener("click", function (e) {});

//重載
reload.addEventListener("click", function (e) {
  history.go(0);
});
