<!-- components/simple/HeroSimple.vue -->
<script setup>
const heroImageUrl =
  "https://avatars.mds.yandex.net/i?id=523e4a7c47981a165e23cbd73c9ec183_l-12884893-images-thumbs&n=13";

const heroTitle = 'ТОО "BASTION DEVELOPMENT"';
const heroSubtitle = "Управление объектами и строительные работы";

function scrollToNextSection() {
  const nextSection =
    document.querySelector("#about") || document.querySelector("main section");
  if (!nextSection) return;

  nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
</script>

<template>
  <section class="heroSimple" id="top">
    <div
      class="heroSimple__bg"
      :style="{ backgroundImage: `url(${heroImageUrl})` }"
    ></div>

    <!-- <div class="heroSimple__overlay"></div> -->

    <div class="heroSimple__content">
      <div class="heroSimple__text">
        <h1 class="heroSimple__title">{{ heroTitle }}</h1>
        <p class="heroSimple__subtitle">{{ heroSubtitle }}</p>
      </div>
    </div>

    <!-- ↓ кнопка прокрутки -->
    <button class="heroSimple__down" type="button" @click="scrollToNextSection">
      <span class="heroSimple__downIcon" aria-hidden="true"></span>
    </button>
  </section>
</template>

<style scoped>
.heroSimple {
  position: relative;
  height: 100vh; /* ✅ весь экран */
  min-height: 640px;
  overflow: hidden;
  display: grid;
  place-items: center;
}

.heroSimple__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.03);
}

.heroSimple__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.55),
    rgba(0, 0, 0, 0.55)
  );
}

.heroSimple__content {
  position: relative;
  width: min(1100px, 92%);
  padding: 0 0;
}

.heroSimple__text {
  text-align: center;
  color: #fff;
  padding: 0 10px;
}

.heroSimple__title {
  margin: 0;
  font-size: 48px;
  line-height: 1.1;
  letter-spacing: 0.01em;
}

.heroSimple__subtitle {
  margin: 14px auto 0;
  max-width: 760px;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.95;
}

/* кнопка вниз */
.heroSimple__down {
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translateX(-50%);
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 999px;
  padding: 10px 14px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(6px);
}

.heroSimple__downText {
  font-size: 13px;
  opacity: 0.95;
}

.heroSimple__downIcon {
  width: 10px;
  height: 10px;
  border-right: 2px solid rgba(255, 255, 255, 0.9);
  border-bottom: 2px solid rgba(255, 255, 255, 0.9);
  transform: rotate(45deg);
  margin-top: -2px;
  animation: bounceDown 1.2s infinite;
}

@keyframes bounceDown {
  0%,
  100% {
    transform: rotate(45deg) translate(0, 0);
    opacity: 0.9;
  }
  50% {
    transform: rotate(45deg) translate(3px, 3px);
    opacity: 1;
  }
}

@media (max-width: 900px) {
  .heroSimple__title {
    font-size: 38px;
  }
}

@media (max-width: 520px) {
  .heroSimple {
    min-height: 560px;
  }
  .heroSimple__title {
    font-size: 30px;
  }
  .heroSimple__subtitle {
    font-size: 14px;
  }
}
</style>
