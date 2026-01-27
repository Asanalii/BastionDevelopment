<!-- ServicesSection.vue -->
<script setup>
const management = [
  {
    title: "Управление объектами",
    text: "Организация процессов, подрядчиков, контроль качества и бюджета.",
  },
  {
    title: "Эксплуатация и техобслуживание",
    text: "Плановое обслуживание, аварийные заявки, регламенты.",
  },
  {
    title: "Администрирование аренды",
    text: "Договоры, счета, взаимодействие с арендаторами и собственниками.",
  },
];

const construction = [
  {
    title: "Строительно-монтажные работы",
    text: "Выполнение СМР по договору, соблюдение сроков и требований.",
  },
  {
    title: "Ремонт и реконструкция",
    text: "Обновление помещений, инженерных систем, общих зон.",
  },
];
</script>

<template>
  <section id="services" class="section">
    <div class="container">
      <h2 class="section-title">Услуги</h2>
      <p class="section-subtitle">
        Основной фокус — управление и эксплуатация (60%). Дополнительно —
        строительные работы и улучшения (40%).
      </p>

      <div class="services">
        <div class="block card card-pad">
          <div class="block__head">
            <div class="kicker">
              <span class="icon-dot"></span> Управление недвижимостью • 60%
            </div>
          </div>
          <div class="grid services__grid">
            <div v-for="s in management" :key="s.title" class="item spotlight">
              <div class="item__title">{{ s.title }}</div>
              <div class="item__text">{{ s.text }}</div>
            </div>
          </div>
        </div>

        <div class="block card card-pad">
          <div class="block__head">
            <div class="kicker">
              <span class="icon-dot"></span> Строительно-монтажные работы • 40%
            </div>
          </div>
          <div class="grid services__grid">
            <div
              v-for="s in construction"
              :key="s.title"
              class="item spotlight"
            >
              <div class="item__title">{{ s.title }}</div>
              <div class="item__text">{{ s.text }}</div>
            </div>
          </div>
        </div>
      </div>

      <hr class="hr" />

      <div class="note card card-pad">
        <div class="note__title">Форматы объектов</div>
        <div class="note__text">
          ЖК • Бизнес-центры • Складские и торговые помещения • Офисы
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: start;
}

.block__head {
  margin-bottom: 14px;
}

.services__grid {
  grid-template-columns: 1fr;
}
.item {
  padding: 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(233, 238, 246, 0.03);
}
.item__title {
  font-size: 15px;
  letter-spacing: 0.01em;
}
.item__text {
  margin-top: 6px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
}

.note__title {
  font-size: 14px;
}
.note__text {
  color: var(--muted);
  margin-top: 6px;
}

@media (max-width: 980px) {
  .services {
    grid-template-columns: 1fr;
  }
}
</style>
