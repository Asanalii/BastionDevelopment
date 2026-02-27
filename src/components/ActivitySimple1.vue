<!-- components/simple/ActivitySimple.vue -->
<script setup>
const sectionTitle = "Деятельность";

const activityCards = [
  {
    title: "Управление объектами",
    text: "Организация эксплуатации, подрядчиков, заявок и контроль качества работ.",
  },
  {
    title: "Эксплуатация и техобслуживание",
    text: "Плановые работы, аварийные заявки, регламенты и прозрачная отчётность.",
  },
  {
    title: "Строительно-монтажные работы",
    text: "СМР по договору: ремонт, реконструкция, улучшения помещений и общих зон.",
  },
  {
    title: "Администрирование аренды",
    text: "Договоры, счета, взаимодействие с арендаторами и собственником.",
  },
  {
    title: "Проектирование и улучшения",
    text: "Подбор решений, расчёты, сметы и сопровождение до результата.",
  },
];
</script>

<template>
  <section class="activitySimple" id="activity">
    <div class="activitySimple__container">
      <h2 class="activitySimple__title">{{ sectionTitle }}</h2>

      <div class="activitySimple__grid">
        <div
          v-for="card in activityCards"
          :key="card.title"
          class="activitySimple__card"
        >
          <div class="activitySimple__cardTitle">{{ card.title }}</div>
          <div class="activitySimple__cardText">{{ card.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.activitySimple {
  padding: 70px 0;
  background: #fafafa;
  border-top: 1px solid #eee;
}

.activitySimple__container {
  width: min(1100px, 92%);
  margin: 0 auto;
}

.activitySimple__title {
  text-align: center;
  margin: 0 0 26px;
  font-size: 28px;
}

.activitySimple__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.activitySimple__card {
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 16px;
  padding: 18px;
}

.activitySimple__cardTitle {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}

.activitySimple__cardText {
  color: #4b4b4b;
  line-height: 1.65;
  font-size: 14px;
}

@media (max-width: 980px) {
  .activitySimple__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .activitySimple__grid {
    grid-template-columns: 1fr;
  }
}
</style>
