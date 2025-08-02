<script>
  // Floating particle (emojis) background
  const shapes = ["🎈","✨","💖","🎉","🥳"];
  function spawnParticle() {
    const p = document.createElement("div");
    p.className = "particle";
    p.innerText = shapes[Math.floor(Math.random()*shapes.length)];
    const size = Math.random()*22 + 14;
    p.style.fontSize = size + "px";
    p.style.left = Math.random()*100 + "%";
    p.style.animationDuration = (Math.random()*11 + 9) + "s";
    p.style.opacity = Math.random()*0.6 + 0.3;
    document.getElementById("particles").appendChild(p);
    setTimeout(()=> p.remove(), 15000);
  }
  setInterval(spawnParticle, 700);
  for(let i=0;i<6;i++) setTimeout(spawnParticle, i*250);

  // Theme toggle persistence
  const toggle = document.getElementById("themeToggle");
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
    if (toggle) toggle.innerText = t === "light" ? "🌙 Dark" : "☀️ Light";
  }
  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved);
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  // Smooth digit flip animation for countdown
  function animateFlip(el, newVal) {
    if (el.innerText === newVal) return;
    const old = el.cloneNode(true);
    old.style.position = "absolute";
    old.style.top = 0;
    old.style.left = 0;
    old.style.opacity = 1;
    el.parentNode.appendChild(old);
    el.innerText = newVal;
    el.style.transform = "translateY(-5px)";
    el.style.opacity = "0.3";
    setTimeout(() => {
      el.style.transition = "all .35s var(--ease)";
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    }, 20);
    setTimeout(() => {
      if (old && old.remove) old.remove();
    }, 400);
  }
</script>
