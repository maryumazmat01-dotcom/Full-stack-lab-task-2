let label = "Read";
console.log(label);

document.querySelector("#mark").addEventListener("click", function () {
  document.querySelector("#status").textContent = label;
});