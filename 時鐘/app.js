let clock = document.querySelector(".clock");
let timer = document.querySelector(".timer");
let btn = document.querySelector(".switch");
setInterval(show, 1000);

function show() {
  let time = new Date();

  //year
  let year = time.getFullYear();

  //month
  let month = time.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }

  //date
  let date = time.getDate();

  //day
  let day = time.getDay();
  function getChineseDay(num) {
    let dayArr = ["日", "一", "二", "三", "四", "五", "六"];
    return dayArr[num];
  }
  day = getChineseDay(day);

  //hour
  let hour = time.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  //min
  let min = time.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  //sec
  let sec = time.getSeconds();
  if (sec < 10) {
    sec = "0" + sec;
  }

  timer.innerHTML =
    year +
    "年" +
    month +
    "月" +
    date +
    "日 " +
    "星期" +
    day +
    hour +
    ":" +
    min +
    ":" +
    sec;
}
