//挑需要的用就好，不用全部都用

//防止滑鼠右鍵
document.oncontextmenu = function () {
  return false;
};

//防止反白選取
document.onselectstart = function () {
  return false;
};

//防止ctrl+c
document.onkeydown = function (e) {
  if (e.keyCode === 67) {
    return false;
  }
};

//防止所有滑鼠點選(包含上述所有功能)
document.onmousedown = function () {
  return false;
};
