function checkCode() {
  const code = document.getElementById("code").value;
  if (code === "110111") {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    startHearts();
  } else {
    document.getElementById("msg").innerText = "Kode salah 💔 coba lagi";
  }
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "🤍";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "24px";
    document.body.appendChild(heart);

    let fall = 0;
    const drop = setInterval(() => {
      fall += 2;
      heart.style.top = fall + "px";
      if (fall > window.innerHeight) {
        heart.remove();
        clearInterval(drop);
      }
    }, 20);
  }, 300);
}
