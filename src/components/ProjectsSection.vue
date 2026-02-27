<!-- ProjectsSection.vue -->
<script setup>
import { computed, ref } from "vue";

import GalleryModal from "../modals/GalleryModal.vue";

const imageVersion = "20102025-5";

/**
 * Для каждого проекта: превью + список всех фото.
 * Я перенес твою структуру projectImages в Vue.
 */
const projects = computed(() => [
  {
    id: 1,
    title: "Павлодарский нефтехимический завод",
    preview: "https://engineering-networks.kz/img/project1.jpg?v=20102025-5",
    images: [
      {
        url: "https://engineering-networks.kz/img/project1.jpg",
        caption: "Демонтаж участка тара пара туру пуру тирим пири lorem",
      },
      {
        url: "https://engineering-networks.kz/img/project1-1.jpg",
        caption: "Монтаж конструкций",
      },
      {
        url: "https://engineering-networks.kz/img/project1-2.jpg",
        caption:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        url: "https://engineering-networks.kz/img/project1-3.jpg",
        caption:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },

      "https://engineering-networks.kz/img/project1-4.jpg",
      "https://engineering-networks.kz/img/project1-5.jpg",
      "https://engineering-networks.kz/img/project1-6.jpg",
      "https://engineering-networks.kz/img/project1-7.jpg",
      "https://engineering-networks.kz/img/project1-8.jpg",
      "https://engineering-networks.kz/img/project1-9.jpg",
    ],
  },
  {
    id: 2,
    title: "Казахстанский электролизный завод",
    preview: "https://engineering-networks.kz/img/project2.jpg?v=20102025-5",
    images: [
      "https://engineering-networks.kz/img/project2.jpg",
      "https://engineering-networks.kz/img/project2-1.jpg",
      "https://engineering-networks.kz/img/project2-2.jpg",
      "https://engineering-networks.kz/img/project2-3.jpg",
    ],
  },
  {
    id: 3,
    title: "КазТрансОйл",
    preview: "https://engineering-networks.kz/img/project3.jpg?v=20102025-5",
    images: [
      "https://engineering-networks.kz/img/project3.jpg",
      "https://engineering-networks.kz/img/project3-1.jpg",
      "https://engineering-networks.kz/img/project3-2.jpg",
    ],
  },
  {
    id: 4,
    title:
      'Строительство интегрированного биологического реактора 5000 м3 объекта "Очистные сооружения хозяйственно-бытовых стоков г.Павлодар"',
    preview: "https://engineering-networks.kz/img/project4.jpg?v=20102025-5",
    images: [
      "https://engineering-networks.kz/img/project4.jpg",
      "https://engineering-networks.kz/img/project4-1.jpg",
      "https://engineering-networks.kz/img/project4-2.jpg",
      "https://engineering-networks.kz/img/project4-3.jpg",
      "https://engineering-networks.kz/img/project4-4.jpg",
      "https://engineering-networks.kz/img/project4-5.jpg",
      "https://engineering-networks.kz/img/project4-6.jpg",
    ],
  },
  {
    id: 5,
    title:
      "Строительство молочно-товарной фермы на 500 голов в Павлодарской области",
    preview: "https://engineering-networks.kz/img/project5.jpg?v=20102025-5",
    images: [
      "https://engineering-networks.kz/img/project5.jpg",
      "https://engineering-networks.kz/img/project5-1.jpg",
      "https://engineering-networks.kz/img/project5-2.jpg",
      "https://engineering-networks.kz/img/project5-3.jpg",
    ],
  },
  {
    id: 6,
    title:
      "Строительство магистрали осветленной воды на Экибастузской ТЭЦ г.Экибастуз",
    preview: "https://engineering-networks.kz/img/project6.jpg?v=20102025-5",
    images: [
      "https://engineering-networks.kz/img/project6.jpg",
      "https://engineering-networks.kz/img/project6-1.jpg",
      "https://engineering-networks.kz/img/project6-2.jpg",
      "https://engineering-networks.kz/img/project6-3.jpg",
      "https://engineering-networks.kz/img/project6-4.jpg",
      "https://engineering-networks.kz/img/project6-5.jpg",
    ],
  },
  {
    id: 7,
    title: 'ГОК "Строительство ремонтно-механического цеха" Акмолинская обл.',
    preview: "https://engineering-networks.kz/img/project7.jpg?v=20102025-5",
    images: [
      "https://engineering-networks.kz/img/project7.jpg",
      "https://engineering-networks.kz/img/project7-1.jpg",
      "https://engineering-networks.kz/img/project7-2.jpg",
      "https://engineering-networks.kz/img/project7-3.jpg",
      "https://engineering-networks.kz/img/project7-4.jpg",
      "https://engineering-networks.kz/img/project7-5.jpg",
      "https://engineering-networks.kz/img/project7-6.jpg",
      "https://engineering-networks.kz/img/project7-7.jpg",
    ],
  },
  {
    id: 8,
    title:
      'Реконструкция ОРУ подстанции 220 кВ насосной станции №18 филиала "Канал имени К.Сатпаева", Карагандинская область',
    preview: "https://engineering-networks.kz/img/project8-1.jpg?v=20102025-5",
    images: [
      "https://engineering-networks.kz/img/project8-1.jpg",
      "https://engineering-networks.kz/img/project8-2.jpg",
      "https://engineering-networks.kz/img/project8-3.jpg",
      "https://engineering-networks.kz/img/project8-4.jpg",
      "https://engineering-networks.kz/img/project8-5.jpg",
      "https://engineering-networks.kz/img/project8-6.jpg",
      "https://engineering-networks.kz/img/project8-7.jpg",
      "https://engineering-networks.kz/img/project8-8.jpg",
      "https://engineering-networks.kz/img/project8-9.jpg",
      "https://engineering-networks.kz/img/project8-10.jpg",
    ],
  },
  {
    id: 9,
    title: 'ТОО "Sinooil". Ремонт АЗС №3, №4. г.Астана',
    preview: "https://engineering-networks.kz/img/project9.jpg?v=20102025-5",
    images: [
      "https://engineering-networks.kz/img/project9.jpg",
      "https://engineering-networks.kz/img/project9-1.jpg",
      "https://engineering-networks.kz/img/project9-2.jpg",
      "https://engineering-networks.kz/img/project9-3.jpg",
      "https://engineering-networks.kz/img/project9-4.jpg",
      "https://engineering-networks.kz/img/project9-5.jpg",
      "https://engineering-networks.kz/img/project9-6.jpg",
      "https://engineering-networks.kz/img/project9-7.jpg",
      "https://engineering-networks.kz/img/project9-8.jpg",
      "https://engineering-networks.kz/img/project9-9.jpg",
      "https://engineering-networks.kz/img/project9-10.jpg",
      "https://engineering-networks.kz/img/project9-11.jpg",
      "https://engineering-networks.kz/img/project9-12.jpg",
    ],
  },
  {
    id: 10,
    title: "Ремонт АВП «Булаево» «Гараж на 5 автомашин»",
    preview: "https://engineering-networks.kz/img/project10.jpg?v=20102025-5",
    images: [
      "https://engineering-networks.kz/img/project10.jpg",
      "https://engineering-networks.kz/img/project10-1.jpg",
      "https://engineering-networks.kz/img/project10-2.jpg",
      "https://engineering-networks.kz/img/project10-3.jpg",
      "https://engineering-networks.kz/img/project10-4.jpg",
      "https://engineering-networks.kz/img/project10-5.jpg",
      "https://engineering-networks.kz/img/project10-6.jpg",
      "https://engineering-networks.kz/img/project10-7.jpg",
      "https://engineering-networks.kz/img/project10-8.jpg",
      "https://engineering-networks.kz/img/project10-9.jpg",
      "https://engineering-networks.kz/img/project10-10.jpg",
      "https://engineering-networks.kz/img/project10-11.jpg",
      "https://engineering-networks.kz/img/project10-12.jpg",
    ],
  },
  {
    id: 11,
    title:
      "Капитальный ремонт ограждения и освещения в западной части ПТЭЦ-2 г. Петропавловск",
    preview: "https://engineering-networks.kz/img/project11.jpg?v=20102025-5",
    images: [
      "https://engineering-networks.kz/img/project11.jpg",
      "https://engineering-networks.kz/img/project11-1.jpg",
      "https://engineering-networks.kz/img/project11-2.jpg",
      "https://engineering-networks.kz/img/project11-3.jpg",
      "https://engineering-networks.kz/img/project11-4.jpg",
      "https://engineering-networks.kz/img/project11-5.jpg",
      "https://engineering-networks.kz/img/project11-6.jpg",
    ],
  },
  {
    id: 12,
    title:
      "«Строительство вагоноремонтного депо с подъездными путями в г.Экибастуз 2-очередь»",
    preview: "https://engineering-networks.kz/img/project12.jpg?v=20102025-5",
    images: [
      "https://engineering-networks.kz/img/project12.jpg",
      "https://engineering-networks.kz/img/project12-1.jpg",
      "https://engineering-networks.kz/img/project12-2.jpg",
      "https://engineering-networks.kz/img/project12-3.jpg",
      "https://engineering-networks.kz/img/project12-4.jpg",
      "https://engineering-networks.kz/img/project12-5.jpg",
      "https://engineering-networks.kz/img/project12-6.jpg",
      "https://engineering-networks.kz/img/project12-7.jpg",
      "https://engineering-networks.kz/img/project12-8.jpg",
      "https://engineering-networks.kz/img/project12-9.jpg",
    ],
  },
]);

const isModalOpen = ref(false);
const modalTitle = ref("");
const modalImages = ref([]);
const modalStartIndex = ref(0);

function openProject(project) {
  modalTitle.value = project.title;
  modalImages.value = project.images;
  modalStartIndex.value = 0;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <section id="projects" class="projects section">
    <div class="container">
      <h2 class="section-title">ГАЛЕРЕЯ ПРОЕКТОВ</h2>

      <div class="projects-grid">
        <button
          v-for="project in projects"
          :key="project.id"
          type="button"
          class="project-card"
          @click="openProject(project)"
        >
          <img
            class="project-image"
            :src="project.preview"
            :alt="project.title"
            loading="lazy"
          />
          <h3 class="project-title" :title="project.title">
            {{ project.title }}
          </h3>
        </button>
      </div>
    </div>

    <GalleryModal
      :is-open="isModalOpen"
      :title="modalTitle"
      :images="modalImages"
      :start-index="modalStartIndex"
      :image-version="imageVersion"
      @close="closeModal"
    />
  </section>
</template>

<style scoped>
.projects {
  padding: 56px 0;
  background: linear-gradient(
    180deg,
    rgba(16, 26, 46, 0.35),
    rgba(7, 11, 20, 0.35)
  );
  border-top: 1px solid var(--border);
}

.container {
  width: min(var(--container), calc(100% - var(--gutter) * 2));
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 34px;
  margin-bottom: 22px;
  color: var(--text);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.project-card {
  background: linear-gradient(
    180deg,
    rgba(16, 26, 46, 0.95),
    rgba(11, 18, 32, 0.95)
  );
  border: 1px solid rgba(233, 238, 246, 0.1);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px;
  cursor: pointer;
  text-align: center;
  transition:
    transform 0.25s var(--ease),
    border-color 0.25s var(--ease);
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(201, 164, 92, 0.35);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  margin-bottom: 12px;
  border: 1px solid rgba(233, 238, 246, 0.1);
}

.project-title {
  margin: 0;
  font-size: 15px;
  color: var(--text);
  line-height: 1.25;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* одинаковая высота по тексту */
  -webkit-box-orient: vertical;
  overflow: hidden;

  min-height: 38px; /* фиксируем высоту заголовка, чтобы карточки не прыгали */
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .project-image {
    height: 190px;
  }
}
</style>
