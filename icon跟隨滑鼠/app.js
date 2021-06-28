let icon = document.querySelector(".icon");

window.addEventListener("mousemove", function (e) {
  icon.style.display = "inline-block";
  icon.style.left = e.clientX + +9 + "px";
  icon.style.top = e.clientY - 5 + "px";
});
