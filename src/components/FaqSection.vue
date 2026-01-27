<!-- FaqSection.vue -->
<script setup>
import { ref } from "vue";

const items = [
  {
    q: "С какими объектами вы работаете?",
    a: "ЖК, БЦ, офисы, склады, торговые помещения. Формат уточняем на брифе.",
  },
  {
    q: "Вы работаете по договору?",
    a: "Да, фиксируем объём, сроки, ответственность, формат отчётности и коммуникаций.",
  },
  {
    q: "Можно ли заказать только СМР без управления?",
    a: "Да, возможно. Оптимально — когда СМР встроены в эксплуатацию.",
  },
  {
    q: "Как формируется стоимость?",
    a: "После исходных данных: площадь/состав работ/состояние объекта/сроки.",
  },
  {
    q: "Сколько занимает подготовка КП?",
    a: "Обычно 24–48 часов, зависит от полноты исходных данных.",
  },
];

const open = ref(0);
</script>

<template>
  <section id="faq" class="section">
    <div class="container">
      <h2 class="section-title">FAQ</h2>
      <p class="section-subtitle">Короткие ответы на частые вопросы.</p>

      <div class="faq">
        <div
          v-for="(it, i) in items"
          :key="it.q"
          class="card card-pad faq__item"
        >
          <button class="faq__q" @click="open = open === i ? -1 : i">
            <span>{{ it.q }}</span>
            <span class="faq__sign">{{ open === i ? "—" : "+" }}</span>
          </button>
          <div v-if="open === i" class="faq__a">{{ it.a }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  display: grid;
  gap: 12px;
}
.faq__item {
  box-shadow: none;
}
.faq__q {
  width: 100%;
  text-align: left;
  background: transparent;
  border: 0;
  color: var(--text);
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  padding: 0;
}
.faq__sign {
  color: var(--accent);
  font-size: 18px;
  line-height: 1;
}
.faq__a {
  margin-top: 10px;
  color: var(--muted);
  line-height: 1.65;
  font-size: 13px;
}
</style>
