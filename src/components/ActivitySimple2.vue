<!-- components/simple/ActivitySimple.vue -->
<script setup>
const sectionTitle = "Деятельность";

const activityCards = [
  {
    title: "Полный цикл строительства «под ключ»",
    text: "От подготовки и проектирования до сдачи объекта в эксплуатацию.",
  },
  {
    title: "Общестроительные работы",
    text: "Фундаменты, несущие конструкции, кровля и фасады, отделка и благоустройство.",
  },
  {
    title: "Наружные и внутренние инженерные сети",
    text: "Вода, канализация, отопление, вентиляция, электрика, слаботочные системы.",
  },
  {
    title: "ВЛ и КЛ 0,4–35–110 кВ",
    text: "Строительство и реконструкция воздушных и кабельных линий, испытания и пусконаладка.",
  },
  {
    title: "СМР по лицензии I категории",
    text: "Работы на технически сложных и ответственных объектах, по нормам и требованиям.",
  },
];
</script>

<template>
  <section class="activitySimple section" id="activity">
    <div class="container">
      <h2 class="section-title">{{ sectionTitle }}</h2>
      <p class="section-subtitle">Что именно делаем - простыми словами.</p>

      <div class="grid activitySimple__grid">
        <div
          v-for="card in activityCards"
          :key="card.title"
          class="card card-pad"
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
  border-top: 1px solid var(--border);
}

.activitySimple__grid {
  grid-template-columns: repeat(3, 1fr);
}

.activitySimple__cardTitle {
  font-size: 15px;
  letter-spacing: 0.01em;
  color: var(--text);
}

.activitySimple__cardText {
  margin-top: 8px;
  color: var(--muted);
  line-height: 1.65;
  font-size: 13px;
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
