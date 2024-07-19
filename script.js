window.addEventListener("keydown", (Event) => {
  document.getElementById(Event.key).classList.add("button2");
});

window.addEventListener("keyup", (Event) => {
  document.getElementById(Event.key).classList.remove("button2");
});
