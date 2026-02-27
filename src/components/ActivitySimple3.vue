<!-- components/simple/ActivitySimple.vue -->
<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const sectionTitle = "Деятельность";

const activeModalKey = ref(""); // "" | "turnkey" | "general"

const activityCards = [
  {
    key: "turnkey",
    title: "Полный цикл строительства «под ключ»",
    text: "От подготовки и проектирования до сдачи объекта в эксплуатацию.",
    isModalEnabled: true,
  },
  {
    key: "general",
    title: "Общестроительные работы",
    text: "Фундаменты, несущие конструкции, кровля и фасады, отделка и благоустройство.",
    isModalEnabled: true,
  },
  {
    key: "networks",
    title: "Наружные и внутренние инженерные сети",
    text: "Вода, канализация, отопление, вентиляция, электрика, слаботочные системы.",
    isModalEnabled: false,
  },
  {
    key: "vlkl",
    title: "ВЛ и КЛ 0,4–35–110 кВ",
    text: "Строительство и реконструкция воздушных и кабельных линий, испытания и пусконаладка.",
    isModalEnabled: false,
  },
  {
    key: "license",
    title: "СМР по лицензии I категории",
    text: "Работы на технически сложных и ответственных объектах, по нормам и требованиям.",
    isModalEnabled: false,
  },
];

const modalDataMap = {
  turnkey: {
    title: "Полный цикл строительства «под ключ»",
    subtitle: "Комплексное сопровождение на всех этапах.",
    blocks: [
      {
        title: "Предпроектная подготовка",
        items: [
          "Анализ участка",
          "Получение разрешительной документации",
          "Разработка технических решений",
        ],
      },
      {
        title: "Проектирование (с партнёрскими организациями)",
        items: [
          "Архитектурные и конструктивные решения",
          "Проектирование инженерных систем",
          "Прохождение экспертизы",
        ],
      },
      {
        title: "Подготовительные работы",
        items: [
          "Организация строительной площадки",
          "Геодезические работы",
          "Земляные работы",
        ],
      },
      {
        title: "Фундаментные работы",
        items: [
          "Устройство свайных фундаментов",
          "Монолитные и сборные основания",
          "Гидроизоляция",
        ],
      },
      {
        title: "Возведение несущих конструкций",
        items: [
          "Монолитные железобетонные конструкции",
          "Металлоконструкции",
          "Кирпичная и блочная кладка",
        ],
      },
      {
        title: "Кровельные и фасадные работы",
        items: ["Монтаж кровельных систем", "Утепление и облицовка фасадов"],
      },
      {
        title: "Инженерные системы",
        items: ["Монтаж внутренних инженерных сетей", "Пусконаладочные работы"],
      },
      {
        title: "Отделочные работы и благоустройство",
        items: ["Черновая и чистовая отделка", "Благоустройство территории"],
      },
      {
        title: "Сдача объекта",
        items: [
          "Подготовка исполнительной документации",
          "Сдача в эксплуатацию",
        ],
      },
    ],
    note: "Список этапов составлен на основе описания деятельности компании: «под ключ» от подготовки до сдачи объекта. ",
  },

  general: {
    title: "Общестроительные работы",
    subtitle: "Что входит в общестрой простыми словами.",
    blocks: [
      {
        title: "Основание и каркас",
        items: [
          "Фундаменты (свайные/монолитные/сборные)",
          "Несущие конструкции (ЖБ/металл)",
          "Кладка (кирпич/блок)",
        ],
      },
      {
        title: "Контур здания",
        items: ["Кровля (монтаж систем)", "Фасады (утепление и облицовка)"],
      },
      {
        title: "Внутренние работы",
        items: [
          "Черновая и чистовая отделка",
          "Подготовка помещений под эксплуатацию",
        ],
      },
      {
        title: "Территория",
        items: [
          "Благоустройство территории",
          "Организация подъездов/площадок (при необходимости)",
        ],
      },
    ],
    note: "Формулировки основаны на разделе «Полный цикл строительства» и перечислении работ по конструкциям/кровле/фасадам/отделке.",
  },
};

const isModalOpen = computed(() => Boolean(activeModalKey.value));
const currentModal = computed(() => modalDataMap[activeModalKey.value] || null);

function openModalByCard(card) {
  if (!card?.isModalEnabled) return;
  activeModalKey.value = card.key;
}

function closeModal() {
  activeModalKey.value = "";
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) closeModal();
}

function onKeydown(event) {
  if (!isModalOpen.value) return;
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <section class="activitySimple section" id="activity">
    <div class="container">
      <h2 class="section-title">{{ sectionTitle }}</h2>
      <p class="section-subtitle">Что именно делаем — простыми словами.</p>

      <div class="grid activitySimple__grid">
        <button
          v-for="card in activityCards"
          :key="card.key"
          type="button"
          class="card card-pad activitySimple__card"
          :class="{ 'activitySimple__card--clickable': card.isModalEnabled }"
          @click="openModalByCard(card)"
        >
          <div class="activitySimple__cardTitle">
            {{ card.title }}
            <span v-if="card.isModalEnabled" class="activitySimple__hint"
              >Подробнее</span
            >
          </div>
          <div class="activitySimple__cardText">{{ card.text }}</div>
        </button>
      </div>
    </div>

    <!-- Modal -->
    <teleport to="body">
      <div v-if="isModalOpen" class="activityModal">
        <div class="activityModal__panel card">
          <button
            class="activityModal__close"
            type="button"
            @click="closeModal"
            aria-label="Close"
          >
            ×
          </button>

          <div class="activityModal__head">
            <div class="activityModal__title">{{ currentModal?.title }}</div>
            <div class="activityModal__subtitle">
              {{ currentModal?.subtitle }}
            </div>
          </div>

          <div class="activityModal__content">
            <div
              v-for="block in currentModal?.blocks || []"
              :key="block.title"
              class="activityModal__block"
            >
              <div class="activityModal__blockTitle">{{ block.title }}</div>
              <ul class="activityModal__list">
                <li v-for="item in block.items" :key="item">{{ item }}</li>
              </ul>
            </div>

            <div v-if="currentModal?.note" class="activityModal__note small">
              {{ currentModal.note }}
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </section>
</template>

<style scoped>
.activitySimple {
  border-top: 1px solid var(--border);
}

.activitySimple__grid {
  grid-template-columns: repeat(3, 1fr);
}

.activitySimple__card {
  width: 100%;
  text-align: left;
  cursor: default;
}

.activitySimple__card--clickable {
  cursor: pointer;
}

.activitySimple__card--clickable:hover {
  border-color: rgba(201, 164, 92, 0.35);
}

.activitySimple__cardTitle {
  font-size: 15px;
  letter-spacing: 0.01em;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.activitySimple__hint {
  font-size: 12px;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 6px 10px;
  background: rgba(233, 238, 246, 0.03);
  flex: 0 0 auto;
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

/* ===== Modal ===== */
.activityModal {
  position: fixed;
  inset: 0;
  z-index: 2500;
  background: rgba(0, 0, 0, 0.86);
  display: grid;
  place-items: center;
  padding: 18px;
}

.activityModal__panel {
  width: min(980px, 96vw);
  max-height: 86vh;
  overflow: auto;
  border-radius: var(--radius);
  position: relative;
}

.activityModal__close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(11, 18, 32, 0.6);
  color: var(--text);
  cursor: pointer;
  font-size: 28px;
  line-height: 1;
}

.activityModal__head {
  padding: 18px 18px 0;
}

.activityModal__title {
  font-size: 18px;
  color: var(--text);
}

.activityModal__subtitle {
  margin-top: 6px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
}

.activityModal__content {
  padding: 14px 18px 18px;
  display: grid;
  gap: 14px;
}

.activityModal__block {
  border: 1px solid rgba(233, 238, 246, 0.08);
  border-radius: 14px;
  padding: 14px;
  background: rgba(7, 11, 20, 0.25);
}

.activityModal__blockTitle {
  color: var(--text);
  font-size: 14px;
  margin-bottom: 8px;
}

.activityModal__list {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.65;
  font-size: 13px;
}

.activityModal__note {
  opacity: 0.9;
}
</style>
