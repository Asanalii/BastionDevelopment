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

const openIndex = ref(0);

function toggle(index) {
  openIndex.value = openIndex.value === index ? -1 : index;
}
</script>

<template>
  <section id="faq" class="section">
    <div class="container">
      <h2 class="section-title">FAQ</h2>
      <p class="section-subtitle">Короткие ответы на частые вопросы.</p>

      <div class="faq">
        <div
          v-for="(it, index) in items"
          :key="it.q"
          class="card card-pad faq__item"
          :class="{ 'is-open': openIndex === index }"
          @click="toggle(index)"
        >
          <button class="faq__q" type="button">
            <span>{{ it.q }}</span>
            <span class="faq__sign">{{ openIndex === index ? "—" : "+" }}</span>
          </button>

          <!-- Важно: НЕ v-if. Всегда в DOM -->
          <div class="faq__aWrap" :class="{ 'is-open': openIndex === index }">
            <div class="faq__a">
              {{ it.a }}
            </div>
          </div>
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
  cursor: pointer;
  transition: border-color 0.25s var(--ease), transform 0.25s var(--ease);
}

.faq__item:hover {
  transform: translateY(-1px);
  border-color: rgba(201, 164, 92, 0.25);
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
  transition: transform 0.25s var(--ease), opacity 0.25s var(--ease);
  opacity: 0.9;
}

.faq__item.is-open .faq__sign {
  transform: rotate(0deg);
  opacity: 1;
}

/* === Плавное открытие/закрытие === */
.faq__aWrap {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transform: translateY(-2px);
  transition: max-height 0.35s var(--ease), opacity 0.25s var(--ease),
    transform 0.25s var(--ease);
}

.faq__aWrap.is-open {
  max-height: 140px; /* хватает на 2-4 строки ответа */
  opacity: 1;
  transform: translateY(0);
}

.faq__a {
  margin-top: 10px;
  color: var(--muted);
  line-height: 1.65;
  font-size: 13px;
}
</style>
