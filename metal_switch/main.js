import "./style.css";

let dotStatus = "left";

document.querySelector(".cssDot").addEventListener("click", (e) => {
  const dot = e.target.closest(".underDot");
  const blick = document.querySelector(".blick");


  if (dotStatus == "left") {
    dot.style.left = "92px";
    blick.style.left ='70px'
    dotStatus = "right";
  } else if (dotStatus == "right") {
    dot.style.left = "2px";
    blick.style.left ='-90px'
    dotStatus = "left";
  }
});
