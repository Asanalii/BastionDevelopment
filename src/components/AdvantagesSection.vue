<!-- AdvantagesSection.vue -->
<script setup>
const points = [
  {
    t: "Договор и прозрачная отчётность",
    d: "Фиксируем объём работ, сроки, зоны ответственности.",
  },
  {
    t: "Лицензии на СМР",
    d: "Работы выполняются в правовом поле и по регламентам.",
  },
  {
    t: "Системный подход к эксплуатации",
    d: "Регламенты, контроль подрядчиков, план-графики.",
  },
  {
    t: "Коммуникация без “провалов”",
    d: "Единая точка входа, статус по задачам и заявкам.",
  },
];
</script>

<template>
  <section id="advantages" class="section">
    <div class="container">
      <h2 class="section-title">Почему BASTION DEVELOPMENT</h2>
      <p class="section-subtitle">
        Позиционирование “премиум” — это не про золото в дизайне, а про
        дисциплину в работе.
      </p>

      <div class="grid adv">
        <div v-for="p in points" :key="p.t" class="card card-pad adv__item">
          <div class="adv__title">{{ p.t }}</div>
          <div class="adv__text">{{ p.d }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adv {
  grid-template-columns: repeat(2, 1fr);
}
.adv__item {
  box-shadow: none;
}
.adv__title {
  font-size: 15px;
}
.adv__text {
  margin-top: 8px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}
@media (max-width: 880px) {
  .adv {
    grid-template-columns: 1fr;
  }
}
</style>
