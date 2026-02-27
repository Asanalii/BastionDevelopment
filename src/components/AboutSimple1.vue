<!-- components/simple/AboutSimple.vue -->
<script setup>
const aboutTitle = "О компании";

const aboutText = [
  "ТОО “BASTION DEVELOPMENT” работает в сфере управления недвижимостью и строительных работ.",
  "Мы организуем процессы на объекте: подрядчиков, регламенты, контроль качества и бюджета.",
  "Наша цель — чтобы собственнику было понятно: что делается, когда будет готово и сколько это стоит.",
];

const aboutImageUrl =
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80";
</script>

<template>
  <section class="aboutSimple" id="about">
    <div class="aboutSimple__container">
      <h2 class="aboutSimple__title">{{ aboutTitle }}</h2>

      <div class="aboutSimple__grid">
        <div class="aboutSimple__text">
          <p v-for="paragraph in aboutText" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <div class="aboutSimple__imageWrap">
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
.aboutSimple {
  padding: 70px 0;
  background: #fff;
}

.aboutSimple__container {
  width: min(1100px, 92%);
  margin: 0 auto;
}

.aboutSimple__title {
  text-align: center;
  margin: 0 0 26px;
  font-size: 28px;
}

.aboutSimple__grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 26px;
  align-items: start;
}

.aboutSimple__text p {
  margin: 0 0 12px;
  line-height: 1.7;
  color: #2a2a2a;
}

.aboutSimple__imageWrap {
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  border: 1px solid #ececec;
}

.aboutSimple__image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
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
