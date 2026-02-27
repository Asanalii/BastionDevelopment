<script setup>
import { computed } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const swiperModules = [Autoplay];

const partners = computed(() => [
  {
    id: "partner-1",
    name: "АО «ПАВЛАДАРЭНЕРГО»",
    imageUrl: "https://pavlodarenergo.kz/images/logo_ru.png",
    imageAlt: "Партнер 1",
  },
  {
    id: "partner-2",
    name: "АО «СЕВКАЗЭНЕРГО»",
    imageUrl: "https://www.sevkazenergo.kz/images/logo_ru.png",
    imageAlt: "Партнер 2",
  },
  {
    id: "partner-3",
    name: "АО «Павлодарская Распределительная Электросетевая Компания»",
    imageUrl: "https://pavlodarenergo.kz/images/logo_ru.png",
    imageAlt: "Партнер 3",
  },
  {
    id: "partner-4",
    name: "АО «Северо-Казахстанская Распределительная Электросетевая Компания»",
    imageUrl: "https://www.sevkazenergo.kz/images/logo_ru.png",
    imageAlt: "Партнер 4",
  },
  {
    id: "partner-5",
    name: "АО «Акмолинская распределительная электросетевая компания»",
    imageUrl: "https://www.arek.kz/assets/templates/main/images/logo_ru.png",
    imageAlt: "Партнер 5",
  },
]);

// const partners = computed(() => [
//   {
//     id: "partner-1",
//     name: "АО «Казахстанский электролизный завод»",
//     imageUrl: "https://engineering-networks.kz/img/partner1.png?v=20102025-5",
//     imageAlt: "Партнер 1",
//     caption:
//       "Казахстанский электролизный завод — работы на объекте (пример подписи).",
//   },
//   {
//     id: "partner-2",
//     name: "АО «КазТрансОйл»",
//     imageUrl: "https://engineering-networks.kz/img/partner2.png?v=20102025-5",
//     imageAlt: "Партнер 2",
//     caption: "КазТрансОйл — выполненные работы / проект (пример подписи).",
//   },
//   {
//     id: "partner-3",
//     name: "ТОО «Павлодарский нефтехимический завод»",
//     imageUrl: "https://engineering-networks.kz/img/partner3.png?v=20102025-5",
//     imageAlt: "Партнер 3",
//     caption: "ПНХЗ — участок работ, реконструкция (пример подписи).",
//   },
//   {
//     id: "partner-1",
//     name: "АО «Казахстанский электролизный завод»",
//     imageUrl: "https://engineering-networks.kz/img/partner1.png?v=20102025-5",
//     imageAlt: "Партнер 1",
//     caption:
//       "Казахстанский электролизный завод — работы на объекте (пример подписи).",
//   },
//   {
//     id: "partner-2",
//     name: "АО «КазТрансОйл»",
//     imageUrl: "https://engineering-networks.kz/img/partner2.png?v=20102025-5",
//     imageAlt: "Партнер 2",
//     caption: "КазТрансОйл — выполненные работы / проект (пример подписи).",
//   },
//   {
//     id: "partner-3",
//     name: "ТОО «Павлодарский нефтехимический завод»",
//     imageUrl: "https://engineering-networks.kz/img/partner3.png?v=20102025-5",
//     imageAlt: "Партнер 3",
//     caption: "ПНХЗ — участок работ, реконструкция (пример подписи).",
//   },
// ]);
</script>

<template>
  <section id="partners" class="partners section">
    <div class="partners-container">
      <div class="section-head">
        <h2 class="section-title">НАШИ ПАРТНЕРЫ</h2>
        <p class="section-subtitle-partner">
          Компании, с которыми мы работаем и которым доверяем.
        </p>
      </div>

      <Swiper
        class="partners-swiper"
        :modules="swiperModules"
        :loop="true"
        :speed="5000"
        :space-between="14"
        :slides-per-view="1.3"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :breakpoints="{
          480: { slidesPerView: 1.6 },
          768: { slidesPerView: 2.4 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 },
        }"
      >
        <SwiperSlide v-for="partner in partners" :key="partner.id">
          <article class="partner-card">
            <div class="logo-wrap">
              <img
                class="partner-logo"
                :src="partner.imageUrl"
                :alt="partner.imageAlt"
                loading="lazy"
              />
            </div>

            <!-- фиксированная зона под текст: одинаковая высота карточек -->
            <div class="name-wrap">
              <p class="partner-name" :title="partner.name">
                {{ partner.name }}
              </p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
/* ====== Section background under your palette ====== */
.partners {
  position: relative;
  padding: 64px 0;
  z-index: 1;

  background:
    radial-gradient(
      900px 520px at 72% -10%,
      rgba(201, 164, 92, 0.12),
      transparent 60%
    ),
    radial-gradient(
      820px 480px at 10% 15%,
      rgba(92, 132, 255, 0.1),
      transparent 58%
    ),
    linear-gradient(180deg, rgba(11, 18, 32, 0.7), rgba(7, 11, 20, 0.7));

  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.partners::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 164, 92, 0.06),
    transparent
  );
  opacity: 0.9;
}

/* ====== Container ====== */
.partners-container {
  /* width: min(var(--container), calc(100% - var(--gutter) * 2)); */
  width: 100%;

  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-head {
  text-align: center;
  margin-bottom: 22px;
}

.section-title {
  font-size: 34px;
  margin: 0;
  color: var(--text);
  letter-spacing: 0.4px;
}

.section-subtitle-partner {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 15px;
}

/* ====== Swiper ====== */
.partners-swiper {
  padding: 14px 0 6px;
}

/* ====== Card (fixed height) ====== */
.partner-card {
  height: 260px; /* одинаковая высота карточек */
  width: 100%;
  border-radius: var(--radius);
  background: linear-gradient(
    180deg,
    rgba(16, 26, 46, 0.95),
    rgba(11, 18, 32, 0.95)
  );
  border: 1px solid rgba(233, 238, 246, 0.09);
  box-shadow: var(--shadow);

  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;
  justify-items: center;

  padding: 18px 16px;
  transition:
    transform 0.25s var(--ease),
    border-color 0.25s var(--ease);
}

.partner-card:hover {
  transform: translateY(-4px);
  border-color: rgba(201, 164, 92, 0.35);
}

/* зона под логотип: занимает всё свободное место */
.logo-wrap {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.partner-logo {
  max-width: 78%;
  max-height: 110px;
  object-fit: contain;
  filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.35));
}

/* фиксированная зона под текст — чтобы высота карточки не прыгала */
.name-wrap {
  width: 100%;
  min-height: 48px; /* одинаковая высота под текст */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 6px 0;
}

.partner-name {
  margin: 0;
  max-width: 100%;
  text-align: center;

  color: var(--text);
  font-size: 14px;
  line-height: 1.2;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* максимум 2 строки */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* чуть компактнее на мобилках */
@media (max-width: 480px) {
  .partner-card {
    height: 250px;
  }
  .section-title {
    font-size: 28px;
  }
}
</style>
