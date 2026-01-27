<!-- ProcessSection.vue -->
<script setup>
const steps = [
  { n: "1", t: "Заявка", d: "Коротко описываете объект и задачу." },
  { n: "2", t: "Осмотр / бриф", d: "Уточняем вводные, документы и объёмы." },
  {
    n: "3",
    t: "Коммерческое предложение",
    d: "Смета/КП, сроки, формат взаимодействия.",
  },
  { n: "4", t: "Договор и старт", d: "Запуск работ и регулярная отчётность." },
];
</script>

<template>
  <section id="process" class="section">
    <div class="container">
      <h2 class="section-title">Как мы работаем</h2>
      <p class="section-subtitle">
        Четыре шага от заявки до результата. Без сюрпризов.
      </p>

      <div class="grid steps">
        <div v-for="s in steps" :key="s.n" class="card card-pad step">
          <div class="step__n">{{ s.n }}</div>
          <div class="step__t">{{ s.t }}</div>
          <div class="step__d">{{ s.d }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.steps {
  grid-template-columns: repeat(4, 1fr);
}
.step {
  box-shadow: none;
}
.step__n {
  color: var(--accent);
  letter-spacing: 0.2em;
  font-size: 12px;
}
.step__t {
  margin-top: 8px;
  font-size: 15px;
}
.step__d {
  margin-top: 8px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}

@media (max-width: 980px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
