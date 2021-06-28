let cubes = document.querySelectorAll("div");

window.addEventListener("mousemove", function (e) {
  //從後面順序開始移動!!
  //移動到前一個的位置
  for (let i = cubes.length - 1; i > 0; i--) {
    cubes[i].style.left = cubes[i - 1].style.left;
    cubes[i].style.top = cubes[i - 1].style.top;

    //也可以用offsetLeft, offsetTop計算
    //cubes[i].style.left = cubes[i - 1].offsetLeft + "px";
    //cubes[i].style.top = cubes[i - 1].offsetTop + "px";
  }

  //第一個div跟隨滑鼠移動
  cubes[0].style.left = e.clientX + +9 + "px";
  cubes[0].style.top = e.clientY - 5 + "px";
});
