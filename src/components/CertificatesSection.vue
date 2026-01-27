<script setup>
import { ref } from "vue";

import GalleryModal from "../modals/GalleryModal.vue";

const imageVersion = "20102025-5";

const certificateImages = [
  "https://engineering-networks.kz/img/certificate1.jpg",
  "https://engineering-networks.kz/img/certificate2.jpg",
  "https://engineering-networks.kz/img/certificate3.jpg",
  "https://engineering-networks.kz/img/certificate4.jpg",
  "https://engineering-networks.kz/img/certificate5.jpg",
  "https://engineering-networks.kz/img/certificate6.jpg",
  "https://engineering-networks.kz/img/certificate7.jpg",
];

const isModalOpen = ref(false);

function openCertificates() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <section id="certificates" class="certificates section">
    <div class="container">
      <h2 class="section-title">ЛИЦЕНЗИИ И СЕРТИФИКАТЫ</h2>

      <p class="cert-text">
        TOO "ENGINEERING NETWORKS" обладает лицензией I категории на выполнение
        строительно-монтажных работ. Наша компания имеет все необходимые
        разрешительные документы для осуществления строительной деятельности в
        соответствии с законодательством Республики Казахстан.
      </p>

      <button class="view-btn" type="button" @click="openCertificates">
        Просмотреть сертификаты
      </button>
    </div>

    <GalleryModal
      :is-open="isModalOpen"
      title="Лицензии и сертификаты"
      :images="certificateImages"
      :start-index="0"
      :image-version="imageVersion"
      @close="closeModal"
    />
  </section>
</template>

<style scoped>
.certificates {
  padding: 56px 0;
  background: linear-gradient(
    180deg,
    rgba(11, 18, 32, 0.45),
    rgba(7, 11, 20, 0.45)
  );
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.container {
  width: min(var(--container), calc(100% - var(--gutter) * 2));
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 34px;
  margin: 0 0 14px;
  color: var(--text);
}

.cert-text {
  max-width: 820px;
  margin: 0 auto 18px;
  color: var(--muted);
  line-height: 1.65;
  text-align: left;
}

.view-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 22px;
  border-radius: 12px;
  border: 1px solid rgba(201, 164, 92, 0.35);
  background: rgba(201, 164, 92, 0.14);
  color: var(--text);
  cursor: pointer;
  transition: transform 0.2s var(--ease), background 0.2s var(--ease);
}

.view-btn:hover {
  transform: translateY(-2px);
  background: rgba(201, 164, 92, 0.2);
}
</style>
