const convertBtn = document.getElementById("convert-btn");
const viewInputG = document.getElementById("view-input");

convertBtn.addEventListener("mouseover", onMouseOver);
convertBtn.addEventListener("mouseout", onMouseOut);
convertBtn.addEventListener("click", onSubmit);

viewInputG.addEventListener("focus", onFocus);
viewInputG.addEventListener("blur", onBlur);

function onSubmit() {
  const viewInput = document.getElementById("view-input");
  const costP = document.getElementById("cost-p");

  const views = viewInput.value;

  const cost = views * 0.03;

  costP.innerText = `${cost}$`;
  viewInput.value = "";
  viewInput.setAttribute("placeholder", `${views}`);
}
function onFocus() {
  const viewInput = document.getElementById("view-input");
  viewInput.setAttribute("placeholder", "");
}
function onBlur() {
  const viewInput = document.getElementById("view-input");
  viewInput.setAttribute("placeholder", "0");
}
function onMouseOver() {
  const btnText = document.getElementById("btn-text");
  btnText.setAttribute("class", "fa-solid fa-arrow-down");
}
function onMouseOut() {
  const btnText = document.getElementById("btn-text");
  btnText.setAttribute("class", "fa-solid fa-arrow-down fa-fade");
}
