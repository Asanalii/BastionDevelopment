<!-- CertificatesSection.vue -->
<script setup>
import { ref } from "vue";
import GalleryModal from "../modals/GalleryModal.vue";

import licenseImage from "../assets/license.jpg";
import prilozhenie1Image from "../assets/prilozhenie1.jpg";
import prilozhenie2Image from "../assets/prilozhenie2.jpg";
import prilozhenie3Image from "../assets/prilozhenie3.jpg";

const imageVersion = "20102025-5";

//  один документ
const licenseImages = [
  licenseImage,
  prilozhenie1Image,
  prilozhenie2Image,
  prilozhenie3Image,
];

const isModalOpen = ref(false);

function openLicense() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <section id="certificates" class="certificates section">
    <div class="container">
      <div class="certHead">
        <h2 class="section-title">Лицензия</h2>
        <p class="section-subtitle certSubtitle">
          ТОО “Bastion Development” обладает лицензией I категории на
          строительно-монтажные работы (СМР).
        </p>
      </div>

      <div class="certGrid">
        <!-- ✅ Превью лицензии -->
        <button type="button" class="licenseCard card" @click="openLicense">
          <img
            class="licenseImg"
            :src="`${licenseImages[0]}?v=${imageVersion}`"
            alt="Лицензия I категории (СМР)"
            loading="lazy"
          />
          <div class="licenseFooter">
            <span class="badge">Лицензия I категории</span>
            <span class="small licenseHint">Открыть</span>
          </div>
        </button>

        <!-- ✅ Инфо-блок -->
        <div class="certInfo card card-pad">
          <div class="kicker">
            <span class="icon-dot"></span> Лицензия I категории (СМР)
          </div>

          <ul class="certList">
            <li>
              Право выполнять работы на технически сложных и особо ответственных
              объектах
            </li>
            <li>
              Возможность реализации крупных инфраструктурных и промышленных
              проектов
            </li>
            <li>Наличие квалифицированного инженерно-технического персонала</li>
            <li>
              Соответствие требованиям законодательства и строительных норм
            </li>
            <li>Высокий уровень материально-технической базы</li>
          </ul>

          <div class="small certNote">
            Наличие лицензии I категории — это подтверждение профессионального
            статуса и надёжности компании.
          </div>

          <div class="certActions">
            <button class="btn btn-accent" type="button" @click="openLicense">
              Открыть лицензию
            </button>
          </div>
        </div>
      </div>
    </div>

    <GalleryModal
      :is-open="isModalOpen"
      title="Лицензия I категории (СМР)"
      :images="licenseImages"
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

.certHead {
  text-align: center;
  margin-bottom: 18px;
}

.certSubtitle {
  max-width: 920px;
  margin: 0 auto;
}

.certGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: start;
}

/* превью лицензии */
.licenseCard {
  padding: 12px;
  cursor: pointer;
  transition:
    transform 0.22s var(--ease),
    border-color 0.22s var(--ease);
}

.licenseCard:hover {
  transform: translateY(-4px);
  border-color: rgba(201, 164, 92, 0.35);
}

.licenseImg {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(233, 238, 246, 0.1);
  display: block;
}

.licenseFooter {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.licenseHint {
  opacity: 0.9;
}

/* инфо-блок */
.certList {
  margin: 14px 0 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.65;
  font-size: 13px;
}

.certList li {
  margin: 8px 0;
}

.certNote {
  margin-top: 12px;
  opacity: 0.95;
}

.certActions {
  margin-top: 14px;
}

/* адаптив */
@media (max-width: 980px) {
  .certGrid {
    grid-template-columns: 1fr;
  }
  .licenseImg {
    height: 300px;
  }
}
</style>
