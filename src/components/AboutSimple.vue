<!-- components/simple/AboutSimple.vue -->
<script setup>
const aboutTitle = "О компании";

const aboutText = [
  "ТОО «Bastion Development» - строительная компания в сфере гражданского и промышленного строительства.",
  "Наш принцип простой: сказал - построил. Работаем по договору, соблюдаем сроки и качество.",
  "Цель - завершать каждый проект вовремя, по нормам и требованиям безопасности.",
];

const aboutImageUrl =
  "https://avatars.mds.yandex.net/get-altay/5120632/2a0000018d42265148268ecef389964bb684/orig";
</script>

<template>
  <section class="aboutSimple section" id="about">
    <div class="container">
      <h2 class="section-title">{{ aboutTitle }}</h2>
      <!-- <p class="section-subtitle">Коротко и понятно: кто мы и как работаем.</p> -->

      <div class="aboutSimple__grid">
        <div class="card card-pad aboutSimple__text">
          <p v-for="paragraph in aboutText" :key="paragraph">
            {{ paragraph }}
          </p>

          <div class="aboutSimple__chips">
            <span class="badge">Сроки</span>
            <span class="badge">Качество</span>
            <span class="badge">Безопасность</span>
          </div>
        </div>

        <div class="card aboutSimple__imageWrap">
          <img
            class="aboutSimple__image"
            :src="aboutImageUrl"
            alt="О компании"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aboutSimple__grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 16px;
  align-items: start;
}

.aboutSimple__text p {
  margin: 0 0 12px;
  line-height: 1.7;
  color: var(--text);
}

.aboutSimple__chips {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.aboutSimple__imageWrap {
  overflow: hidden;
  border-radius: var(--radius);
}

.aboutSimple__image {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  filter: saturate(0.95) contrast(1.05);
}

@media (max-width: 900px) {
  .aboutSimple__grid {
    grid-template-columns: 1fr;
  }
  .aboutSimple__image {
    height: 240px;
  }
}
</style>
