document.addEventListener("DOMContentLoaded", () => {

const portfolio = document.getElementById("portfolio");
const opening = document.getElementById('opening');

// center-circleの線
const circleCx = 24.5, circleCy = 24.5, radius = 15;
const lineLength = 12;
const linesGroup = opening.querySelector('#lines-group');
for(let i=0; i<10; i++){
  const angle = (2 * Math.PI / 10) * i - Math.PI/2.5;
  const x1 = circleCx + radius * Math.cos(angle);
  const y1 = circleCy + radius * Math.sin(angle);
  const x2 = circleCx + (radius + lineLength) * Math.cos(angle);
  const y2 = circleCy + (radius + lineLength) * Math.sin(angle);
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "#fff");
  line.setAttribute("stroke-width", "2");
  linesGroup.appendChild(line);
}

// 梅の花の丸
const flower = opening.querySelector('#umeFlower');
const cx = 100, cy = 100, r = 70;
for(let i=0; i<5; i++){
  const angle = (2 * Math.PI / 5) * i - Math.PI/2;
  const x = cx + r * Math.cos(angle) - 30;
  const y = cy + r * Math.sin(angle) - 30;
  const petal = document.createElement('div');
  petal.className = 'petal';
  petal.style.left = x + 'px';
  petal.style.top = y + 'px';
  petal.style.animationDelay = (0.2 + i*0.2) + 's';
  flower.appendChild(petal);
}

// タイトル文字
const text = "EarthChart's Portfolio";
const title = opening.querySelector("#title");
text.split("").forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.classList.add("bounce");
  span.style.animationDelay = `${i * 0.15}s`;
  title.appendChild(span);
});

// 最後の文字のアニメーション終了後に切り替え
  const lastChar = title.lastElementChild;
  lastChar.addEventListener("animationend", () => {
    setTimeout(() => {
    opening.style.display = "none";   // opening を隠す
    portfolio.style.display = "block"; // portfolio を表示
  }, 1000); // 1秒待ってから切り替え
  });
});

