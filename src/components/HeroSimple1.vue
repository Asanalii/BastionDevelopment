<!-- components/simple/HeroSimple.vue -->
<script setup>
const heroImageUrl =
  "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=2200&q=80";

const heroTitle = "Управление объектами и строительные работы";
const heroSubtitle =
  "ТОО “BASTION DEVELOPMENT” — управление недвижимостью и СМР по лицензии. Следите за обновлениями.";
const heroBadgeText = "01.01.26 ОТКРЫТИЕ";
</script>

<template>
  <section class="heroSimple" id="top">
    <div
      class="heroSimple__bg"
      :style="{ backgroundImage: `url(${heroImageUrl})` }"
    ></div>
    <div class="heroSimple__overlay"></div>

    <div class="heroSimple__content">
      <div class="heroSimple__text">
        <h1 class="heroSimple__title">{{ heroTitle }}</h1>
        <p class="heroSimple__subtitle">{{ heroSubtitle }}</p>

        <div class="heroSimple__badge">
          <span class="heroSimple__badgeText">{{ heroBadgeText }}</span>
          <span class="heroSimple__line"></span>
        </div>

        <div class="heroSimple__actions">
          <a
            class="heroSimple__button heroSimple__buttonPrimary"
            href="#contacts"
          >
            Получить консультацию
          </a>
          <a class="heroSimple__button" href="#about"> О компании </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heroSimple {
  position: relative;
  min-height: 78vh;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.heroSimple__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
}

.heroSimple__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.42),
    rgba(0, 0, 0, 0.55)
  );
}

.heroSimple__content {
  position: relative;
  width: min(1100px, 92%);
  padding: 60px 0;
}

.heroSimple__text {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}

.heroSimple__title {
  font-size: 44px;
  line-height: 1.1;
  margin: 0;
}

.heroSimple__subtitle {
  margin: 16px auto 0;
  max-width: 680px;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.92;
}

.heroSimple__badge {
  margin-top: 22px;
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.heroSimple__badgeText {
  font-size: 14px;
  letter-spacing: 0.04em;
  opacity: 0.95;
}

.heroSimple__line {
  width: 160px;
  height: 3px;
  background: rgba(255, 255, 255, 0.9);
  position: relative;
  overflow: hidden;
}

.heroSimple__line::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 35%;
  background: rgba(220, 50, 50, 0.95);
}

.heroSimple__actions {
  margin-top: 22px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.heroSimple__button {
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
}

.heroSimple__buttonPrimary {
  background: rgba(220, 50, 50, 0.95);
  border-color: rgba(220, 50, 50, 0.95);
}

@media (max-width: 900px) {
  .heroSimple__title {
    font-size: 36px;
  }
}
@media (max-width: 520px) {
  .heroSimple {
    min-height: 70vh;
  }
  .heroSimple__title {
    font-size: 30px;
  }
}
</style>
