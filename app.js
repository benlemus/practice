const smileBtn = document.querySelector(".smileBtn");
const smileIconContainer = document.querySelector(".smileIcon-container");

smileBtn.addEventListener("click", function () {
  console.log("clicked");
  let smileSpan = document.createElement("span");

  smileSpan.className = "material-symbols-outlined";
  smileSpan.innerText = "sentiment_satisfied";

  smileIconContainer.appendChild(smileSpan);
});
