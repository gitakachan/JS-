let init = document.querySelector("#code");
let userInput = document.querySelector(".userInput");
let reset = document.querySelector("button.reset");
let submit = document.querySelector("button.submit");

function generate() {
  let codeArr = [];
  //設定產生六位驗證碼
  for (let i = 0; i < 6; i++) {
    let code = parseInt(Math.random() * 123);
    if (code >= 48 && code <= 57) {
      codeArr.push(String.fromCharCode(code));
    } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      codeArr.push(String.fromCharCode(code));
    } else {
      i--; //其餘不是數字的符號會佔用循環次數，所以需要扣回
    }
  }
  return codeArr.join("");
}

init.innerHTML = generate();

reset.addEventListener("click", () => {
  init.innerHTML = generate();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (userInput.value == init.innerHTML) {
    console.log("驗證成功");
  } else {
    console.log("驗證失敗");
  }
  console.log(init.innerHTML);
  console.log(userInput.value);
});
