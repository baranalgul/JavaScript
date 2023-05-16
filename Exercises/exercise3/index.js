let bgButton = document.getElementById("bgButton");
bgButton.addEventListener("click", function() {
  let body = document.getElementsByTagName('body')[0];
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "white";
  }
})
