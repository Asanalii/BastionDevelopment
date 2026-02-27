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

    <div class="heroSimple__content container">
      <div class="heroSimple__text">
        <h1 class="heroSimple__title">{{ heroTitle }}</h1>
        <p class="heroSimple__subtitle">{{ heroSubtitle }}</p>
      </div>
    </div>

    <button class="heroSimple__down" type="button" @click="scrollToNextSection">
      <span class="heroSimple__downIcon" aria-hidden="true"></span>
    </button>
  </section>
</template>

<style scoped>
.heroSimple {
  position: relative;
  height: calc(100vh - 70px);
  min-height: 620px;
  overflow: hidden;
  display: grid;
  place-items: center;
  isolation: isolate;
}

.heroSimple__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.03);
  filter: saturate(0.95) contrast(1.05);
  z-index: -2;
}

.heroSimple__overlay {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    to bottom,
    rgba(7, 11, 20, 0.55),
    rgba(7, 11, 20, 0.75)
  );
}

.heroSimple__content {
  position: relative;
  padding-top: 90px;
  padding-bottom: 90px;
}

.heroSimple__text {
  text-align: center;
  max-width: 820px;
  margin: 0 auto;
}

.heroSimple__title {
  margin: 0;
  color: var(--text);
  font-size: 52px;
  line-height: 1.08;
  letter-spacing: -0.02em;
  text-shadow: 0 18px 60px rgba(0, 0, 0, 0.65);
}

.heroSimple__subtitle {
  margin: 14px auto 0;
  max-width: 760px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.65;
  text-shadow: 0 14px 40px rgba(0, 0, 0, 0.55);
}

/* кнопка вниз */
.heroSimple__down {
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  border: 1px solid var(--border);
  background: rgba(7, 11, 20, 0.35);
  color: var(--text);
  border-radius: 999px;
  padding: 12px 16px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
}

.heroSimple__downIcon {
  width: 10px;
  height: 10px;
  border-right: 2px solid rgba(233, 238, 246, 0.9);
  border-bottom: 2px solid rgba(233, 238, 246, 0.9);
  transform: rotate(45deg);
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
    font-size: 40px;
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
