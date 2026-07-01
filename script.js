const bootScreen=document.querySelector("#boot-screen");const menuToggle=document.querySelector(".menu-toggle");const siteNav=document.querySelector(".site-nav");const answerTitle=document.querySelector("#answer-title");const answerText=document.querySelector("#answer-text");const questionButtons=document.querySelectorAll(".question-button");const copyEmail=document.querySelector(".copy-email");const cursorAura=document.querySelector(".cursor-aura");const progressBar=document.querySelector(".scroll-progress span");const answers={fit:{title:"为什么适合 AI 岗位？",text:"我关注 AI 的工程落地：如何把需求拆成数据、检索、推理、工具调用和界面交互，并做成可运行、可解释、可迭代的产品原型。"},projects:{title:"做过什么项目？",text:"当前个人站展示四类项目方向：AI 知识库、Agent 自动化、多模态 AI 应用和个人网站本身。后续可以替换为真实项目链接、截图和 Demo。"},stack:{title:"技术栈是什么？",text:"AI 侧关注 LLM、RAG、Agent、Prompt Engineering、工作流编排；工程侧关注 HTML、CSS、JavaScript、React、API、数据库和部署。"},growth:{title:"怎么学习和成长？",text:"我会把学习变成作品：先做可运行 Demo，再整理技术链路、失败点和复盘文章，最后把项目包装成面试时能讲清楚的案例。"},contact:{title:"如何联系？",text:"可以通过邮箱、GitHub 或简历入口联系。当前是占位信息，后续替换成你的真实邮箱、GitHub、微信二维码和简历文件。"}};if(bootScreen){if(bootScreen){if(bootScreen){window.addEventListener("load",()=>{setTimeout(()=>bootScreen.classList.add("hide"),1450)});}}}menuToggle.addEventListener("click",()=>{const isOpen=siteNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(isOpen))});siteNav.querySelectorAll("a").forEach(link=>{link.addEventListener("click",()=>{siteNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false")})});questionButtons.forEach(button=>{button.addEventListener("click",()=>{questionButtons.forEach(item=>item.classList.remove("active"));button.classList.add("active");const answer=answers[button.dataset.answer];answerTitle.textContent=answer.title;answerText.textContent=answer.text})});if(copyEmail){copyEmail.addEventListener("click",async()=>{const email=copyEmail.dataset.email;try{await navigator.clipboard.writeText(email);copyEmail.textContent="已复制邮箱"}catch{copyEmail.textContent=email}setTimeout(()=>copyEmail.textContent="复制邮箱",1800)})}const reveals=document.querySelectorAll(".reveal");const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})},{threshold:.12});reveals.forEach(item=>observer.observe(item));function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;const progress=max>0?window.scrollY/max*100:0;progressBar.style.width=`${progress}%`}window.addEventListener("scroll",updateProgress,{passive:true});updateProgress();let auraX=window.innerWidth/2,auraY=window.innerHeight/2,targetX=auraX,targetY=auraY;window.addEventListener("pointermove",event=>{targetX=event.clientX;targetY=event.clientY},{passive:true});function moveAura(){auraX+=(targetX-auraX)*.12;auraY+=(targetY-auraY)*.12;if(cursorAura){cursorAura.style.transform=`translate3d(${auraX-210}px,${auraY-210}px,0)`}requestAnimationFrame(moveAura)}moveAura();document.querySelectorAll(".tilt-card").forEach(card=>{card.addEventListener("pointermove",event=>{const rect=card.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width;const y=(event.clientY-rect.top)/rect.height;const rotateX=(.5-y)*8;const rotateY=(x-.5)*10;card.style.setProperty("--mx",`${x*100}%`);card.style.setProperty("--my",`${y*100}%`);card.style.transform=`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`});card.addEventListener("pointerleave",()=>{card.style.transform=""})});const canvas=document.querySelector("#neural-canvas");const ctx=canvas.getContext("2d");const pointer={x:0,y:0,active:false};let particles=[];function resizeCanvas(){const ratio=Math.min(window.devicePixelRatio||1,2);canvas.width=window.innerWidth*ratio;canvas.height=window.innerHeight*ratio;canvas.style.width=`${window.innerWidth}px`;canvas.style.height=`${window.innerHeight}px`;ctx.setTransform(ratio,0,0,ratio,0,0);createParticles()}function createParticles(){const count=Math.min(Math.floor(window.innerWidth/22),70);particles=Array.from({length:count},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.38,vy:(Math.random()-.5)*.38,r:Math.random()*1.8+.7,pulse:Math.random()*Math.PI*2}))}function drawNetwork(){ctx.clearRect(0,0,window.innerWidth,window.innerHeight);particles.forEach((particle,index)=>{particle.x+=particle.vx;particle.y+=particle.vy;particle.pulse+=.02;if(particle.x<0||particle.x>window.innerWidth)particle.vx*=-1;if(particle.y<0||particle.y>window.innerHeight)particle.vy*=-1;ctx.beginPath();ctx.arc(particle.x,particle.y,particle.r+Math.sin(particle.pulse)*.35,0,Math.PI*2);ctx.fillStyle="rgba(180, 245, 255, 0.78)";ctx.fill();for(let next=index+1;next<particles.length;next+=1){const other=particles[next];const distance=Math.hypot(particle.x-other.x,particle.y-other.y);if(distance<96){ctx.strokeStyle=`rgba(180, 245, 255, ${.24*(1-distance/96)})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(particle.x,particle.y);ctx.lineTo(other.x,other.y);ctx.stroke()}}if(pointer.active){const distance=Math.hypot(particle.x-pointer.x,particle.y-pointer.y);if(distance<180){ctx.strokeStyle=`rgba(255, 255, 255, ${.28*(1-distance/180)})`;ctx.beginPath();ctx.moveTo(particle.x,particle.y);ctx.lineTo(pointer.x,pointer.y);ctx.stroke()}}});requestAnimationFrame(drawNetwork)}window.addEventListener("resize",resizeCanvas);window.addEventListener("pointermove",event=>{pointer.x=event.clientX;pointer.y=event.clientY;pointer.active=true});window.addEventListener("pointerleave",()=>{pointer.active=false});resizeCanvas();drawNetwork();

const landingHero = document.querySelector(".landing-hero");
if (landingHero) {
  landingHero.addEventListener("pointermove", (event) => {
    const rect = landingHero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    landingHero.style.setProperty("--mx", `${x}%`);
    landingHero.style.setProperty("--my", `${y}%`);
  }, { passive: true });
}


const langSwitch = document.querySelector(".lang-switch");
let currentLang = "en";
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-en][data-cn]").forEach((node) => {
    node.textContent = node.dataset[lang];
  });
  if (langSwitch) langSwitch.textContent = lang === "en" ? "CN" : "EN";
}
if (langSwitch) {
  langSwitch.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "cn" : "en");
  });
  applyLanguage("en");
}

const butterflyLoader = document.querySelector(".butterfly-loader");
const butterflyLoaderVideo = document.querySelector(".butterfly-loader-video");
const butterflyHeroVideo = document.querySelector(".butterfly-hero-video");
let butterflyDuration = 8;
let butterflyIntroEnd = 2.8;
let butterflyAmbientStart = 3.1;
let butterflyAmbientEnd = 5.8;
let butterflyEndingStart = 5.9;

function configureButterflyVideo(duration) {
  if (!Number.isFinite(duration) || duration <= 0) return;
  butterflyDuration = duration;
  butterflyIntroEnd = Math.min(3, duration * 0.32);
  butterflyAmbientStart = Math.min(duration - 0.8, Math.max(butterflyIntroEnd + 0.15, duration * 0.36));
  butterflyAmbientEnd = Math.min(duration - 0.45, Math.max(butterflyAmbientStart + 1.2, duration * 0.68));
  butterflyEndingStart = Math.min(duration - 0.35, Math.max(butterflyAmbientEnd, duration * 0.72));
}

function enterFromButterflyLoader() {
  if (butterflyLoader) butterflyLoader.classList.add("done");
  document.body.classList.add("video-entered");
  if (butterflyHeroVideo) {
    butterflyHeroVideo.currentTime = butterflyAmbientStart;
    butterflyHeroVideo.play().catch(() => {});
  }
}

if (butterflyLoaderVideo) {
  butterflyLoaderVideo.addEventListener("loadedmetadata", () => {
    configureButterflyVideo(butterflyLoaderVideo.duration);
  });
  butterflyLoaderVideo.addEventListener("timeupdate", () => {
    if (butterflyLoaderVideo.currentTime >= butterflyIntroEnd) enterFromButterflyLoader();
  });
  setTimeout(enterFromButterflyLoader, 3800);
}

if (butterflyHeroVideo) {
  butterflyHeroVideo.addEventListener("loadedmetadata", () => {
    configureButterflyVideo(butterflyHeroVideo.duration);
    butterflyHeroVideo.currentTime = butterflyAmbientStart;
    butterflyHeroVideo.play().catch(() => {});
  });
  butterflyHeroVideo.addEventListener("timeupdate", () => {
    if (!document.documentElement.classList.contains("video-scroll-ending") && butterflyHeroVideo.currentTime >= butterflyAmbientEnd) {
      butterflyHeroVideo.currentTime = butterflyAmbientStart;
    }
  });
}

function updateButterflyScrollVideo() {
  if (!butterflyHeroVideo) return;
  const hero = document.querySelector(".landing-hero");
  if (!hero) return;
  const rect = hero.getBoundingClientRect();
  const progress = Math.min(Math.max((-rect.top) / Math.max(window.innerHeight * 0.9, 1), 0), 1);
  const useEnding = progress > 0.08;
  document.documentElement.classList.toggle("video-scroll-ending", useEnding);
  if (useEnding && Number.isFinite(butterflyHeroVideo.duration)) {
    const end = Math.max(butterflyDuration - 0.08, butterflyEndingStart + 0.2);
    butterflyHeroVideo.pause();
    butterflyHeroVideo.currentTime = butterflyEndingStart + (end - butterflyEndingStart) * progress;
  } else if (butterflyHeroVideo.paused) {
    butterflyHeroVideo.play().catch(() => {});
  }
}

window.addEventListener("scroll", updateButterflyScrollVideo, { passive: true });
window.addEventListener("resize", updateButterflyScrollVideo);
updateButterflyScrollVideo();

// Homepage video mouse-follow parallax only; loader and typography stay untouched.
(() => {
  const hero = document.querySelector(".landing-hero");
  const video = document.querySelector(".butterfly-hero-video");
  if (!hero || !video) return;

  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    targetX = x * -34;
    targetY = y * -22;
  }, { passive: true });

  hero.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
  });

  function animateHeroVideoFollow() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    hero.style.setProperty("--hero-video-x", `${currentX.toFixed(2)}px`);
    hero.style.setProperty("--hero-video-y", `${currentY.toFixed(2)}px`);
    requestAnimationFrame(animateHeroVideoFollow);
  }

  animateHeroVideoFollow();
})();



