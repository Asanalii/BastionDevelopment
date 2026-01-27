<!-- HeroSection.vue -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const hero = ref(null);
const panel = ref(null);

let raf = 0;
let targetX = 0,
  targetY = 0;
let curX = 0,
  curY = 0;

function prefersReducedMotion() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function animate() {
  // easing
  curX += (targetX - curX) * 0.08;
  curY += (targetY - curY) * 0.08;

  if (panel.value) {
    // tiny tilt + translate (premium subtle)
    panel.value.style.setProperty("--px", `${curX.toFixed(3)}`);
    panel.value.style.setProperty("--py", `${curY.toFixed(3)}`);
  }

  raf = requestAnimationFrame(animate);
}

function onMove(e) {
  if (!hero.value || prefersReducedMotion()) return;

  const r = hero.value.getBoundingClientRect();
  const nx = (e.clientX - r.left) / r.width; // 0..1
  const ny = (e.clientY - r.top) / r.height; // 0..1

  // map to -1..1 small range
  targetX = (nx - 0.5) * 2;
  targetY = (ny - 0.5) * 2;
}

onMounted(() => {
  if (prefersReducedMotion()) return;
  window.addEventListener("mousemove", onMove, { passive: true });
  raf = requestAnimationFrame(animate);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", onMove);
  cancelAnimationFrame(raf);
});
</script>

<template>
  <section id="top" class="hero section" ref="hero">
    <div class="container hero__grid">
      <div class="hero__left">
        <div class="kicker">
          <span class="icon-dot"></span>
          Управление недвижимостью (60%) • СМР по лицензии (40%)
        </div>

        <h1 class="hero__title">
          Управление объектами и строительные работы
          <span class="hero__accent">под контролем</span>
        </h1>

        <p class="hero__text">
          Берём на себя эксплуатацию, администрирование и улучшения объектов.
          Прозрачно по договору, с отчётностью и понятными сроками.
        </p>

        <div class="hero__cta">
          <a class="btn btn-accent" href="#contacts">Получить консультацию</a>
          <a class="btn" href="#services">Смотреть услуги</a>
          <span class="badge">B2B / B2C</span>
        </div>

        <div class="hero__meta">
          <div class="meta">
            <div class="meta__val">2025</div>
            <div class="meta__label">год основания</div>
          </div>
          <div class="meta">
            <div class="meta__val">СМР</div>
            <div class="meta__label">лицензии (I кат.)</div>
          </div>
          <div class="meta">
            <div class="meta__val">НДС</div>
            <div class="meta__label">плательщик</div>
          </div>
        </div>
      </div>

      <div class="hero__right card" ref="panel">
        <div class="hero__panel">
          <div class="panelTop">
            <div>
              <div class="panelTitle">Запросить расчёт</div>
              <div class="panelText">
                Ответим в рабочее время и уточним детали объекта.
              </div>
            </div>
            <span class="badge">КП за 24–48 ч*</span>
          </div>

          <div class="panelForm">
            <input class="input" placeholder="Имя" />
            <input class="input" placeholder="Телефон" />
            <input class="input" placeholder="Тип объекта (ЖК/БЦ/склад)" />
            <button class="btn btn-accent">Отправить заявку</button>
            <div class="small">
              * Срок зависит от исходных данных и объёма работ.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero__grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 18px;
  align-items: start;
}
.hero__left {
  padding-right: 10px;
}

.hero__title {
  margin: 16px 0 12px;
  font-size: 48px;
  line-height: 1.05;
  letter-spacing: -0.03em;
}
.hero__accent {
  color: var(--accent);
  text-shadow: 0 10px 30px rgba(201, 164, 92, 0.18);
}
.hero__text {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.6;
  max-width: 640px;
}

.hero__cta {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.hero__meta {
  margin-top: 22px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.meta {
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(233, 238, 246, 0.03);
  min-width: 150px;
}
.meta__val {
  font-size: 18px;
  letter-spacing: 0.04em;
}
.meta__label {
  font-size: 13px;
  color: var(--muted);
  margin-top: 4px;
}

.hero__right {
  position: relative;
  overflow: hidden;
}
.hero__panel {
  padding: 22px;
}
.panelTop {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
}
.panelTitle {
  font-size: 16px;
  letter-spacing: 0.02em;
}
.panelText {
  margin-top: 6px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
}
.panelForm {
  margin-top: 16px;
  display: grid;
  gap: 10px;
}

/* ---------- Micro parallax ---------- */
.hero__right {
  transform: perspective(900px) rotateX(calc(var(--py, 0) * -2deg))
    rotateY(calc(var(--px, 0) * 3deg))
    translate3d(calc(var(--px, 0) * 4px), calc(var(--py, 0) * 4px), 0);
  transition: transform 0.12s ease-out;
}

/* soft glow behind panel that also shifts */
.hero__right::before {
  content: "";
  position: absolute;
  inset: -40px;
  background: radial-gradient(
      420px 240px at 30% 20%,
      rgba(201, 164, 92, 0.1),
      transparent 60%
    ),
    radial-gradient(
      520px 260px at 80% 60%,
      rgba(92, 132, 255, 0.08),
      transparent 62%
    );
  transform: translate3d(
    calc(var(--px, 0) * -10px),
    calc(var(--py, 0) * -10px),
    0
  );
  opacity: 0.9;
  pointer-events: none;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero__right {
    transform: none !important;
    transition: none !important;
  }
  .hero__right::before {
    transform: none !important;
  }
}

@media (max-width: 980px) {
  .hero__grid {
    grid-template-columns: 1fr;
  }
  .hero__title {
    font-size: 40px;
  }
}
@media (max-width: 520px) {
  .hero__title {
    font-size: 34px;
  }
}
</style>
