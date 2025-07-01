const textBox = document.getElementById("text");

window.addEventListener("keydown", (Event) => {
  document.getElementById(Event.key).classList.add("button2");
  console.log(Event.key);
  textBox.innerHTML += Event.key;
});

window.addEventListener("keyup", (Event) => {
  document.getElementById(Event.key).classList.remove("button2");
});


// ------AI -----------------------
// const textBox = document.getElementById("text");
// 
// const keyMap = {
//   " ": "space",
//   Enter: "enter",
//   Backspace: "backspace",
//   Shift: "shift", // اگه همچین دکمه‌ای در HTML داری
//   Control: "ctrl",
//   Alt: "alt",
//   Meta: "meta", // برای دکمهٔ ویندوز یا cmd در مک
//   // حروف و اعداد خودشون همون id هستند
// };
// 
// window.addEventListener("keydown", (event) => {
//   const key = event.key;
//   console.log("key = ", key);
//   const keyId = keyMap[key] || key.toLowerCase(); // تطابق برای حروف بزرگ
// 
//   const button = document.getElementById(keyId);
//   console.log("button = ", button);
//   if (button) {
//     button.classList.add("button2");
//   }
// 
//   if (
//     key.length === 1 ||
//     key === "Backspace" ||
//     key === "Enter" ||
//     key === " "
//   ) {
//     if (key === "Backspace") {
//       textBox.innerHTML = textBox.innerHTML.slice(0, -1);
//     } else if (key === "Enter") {
//       textBox.innerHTML += "\n";
//     } else if (key === " ") {
//       textBox.innerHTML += " ";
//     } else {
//       textBox.innerHTML += key;
//     }
//   }
// });
// 
// window.addEventListener("keyup", (event) => {
//   const key = event.key;
//   const keyId = keyMap[key] || key.toLowerCase();
//   const button = document.getElementById(keyId);
//   if (button) {
//     button.classList.remove("button2");
//   }
// });
