<!-- GalleryModal.vue -->
<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps({
  isOpen: { type: Boolean, required: true },
  title: { type: String, default: "" },
  images: { type: Array, default: () => [] }, // массив строк (url)
  startIndex: { type: Number, default: 0 },
  imageVersion: { type: String, default: "" }, // например "20102025-5"
});

const emit = defineEmits(["close"]);

const currentIndex = ref(props.startIndex);

watch(
  () => props.startIndex,
  (newIndex) => {
    currentIndex.value = newIndex ?? 0;
  },
);

watch(
  () => props.isOpen,
  (isOpenValue) => {
    if (isOpenValue) currentIndex.value = props.startIndex ?? 0;
  },
);

const totalSlides = computed(() => props.images.length);

const currentSlide = computed(() => {
  return props.images[currentIndex.value] || null;
});

const currentImageUrl = computed(() => {
  const rawUrl = currentSlide.value?.url || "";
  if (!rawUrl) return "";

  if (!props.imageVersion) return rawUrl;

  const hasQuery = rawUrl.includes("?");
  const separator = hasQuery ? "&" : "?";
  return `${rawUrl}${separator}v=${props.imageVersion}`;
});

const currentCaption = computed(() => {
  return currentSlide.value?.caption || "";
});
// const currentImageUrl = computed(() => {
//   const rawUrl = props.images[currentIndex.value] || "";
//   if (!rawUrl) return "";

//   if (!props.imageVersion) return rawUrl;

//   const hasQuery = rawUrl.includes("?");
//   const separator = hasQuery ? "&" : "?";
//   return `${rawUrl}${separator}v=${props.imageVersion}`;
// });

function goNext() {
  if (!totalSlides.value) return;
  const nextIndex = currentIndex.value + 1;
  currentIndex.value = nextIndex >= totalSlides.value ? 0 : nextIndex;
}

function goPrev() {
  if (!totalSlides.value) return;
  const prevIndex = currentIndex.value - 1;
  currentIndex.value = prevIndex < 0 ? totalSlides.value - 1 : prevIndex;
}

function closeModal() {
  emit("close");
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) closeModal();
}

function onKeydown(event) {
  if (!props.isOpen) return;

  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowRight") goNext();
  if (event.key === "ArrowLeft") goPrev();
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <teleport to="body">
    <div v-if="isOpen" class="modal" @click="onBackdropClick">
      <button class="close" type="button" @click="closeModal">×</button>

      <div class="modal-content">
        <div class="modal-top">
          <div class="modal-title" v-if="title">{{ title }}</div>
          <div class="numbertext" v-if="totalSlides">
            {{ currentIndex + 1 }} / {{ totalSlides }}
          </div>
        </div>

        <img
          v-if="currentImageUrl"
          class="modal-image"
          :src="currentImageUrl"
          alt="gallery"
        />

        <div v-if="currentCaption" class="modal-caption">
          {{ currentCaption }}
        </div>

        <button
          class="nav prev"
          type="button"
          @click="goPrev"
          aria-label="Prev"
        >
          ‹
        </button>
        <button
          class="nav next"
          type="button"
          @click="goNext"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
}

.modal-content {
  position: relative;
  width: 92%;
  max-width: 1200px;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 42px 0;
  box-sizing: border-box;
}

.modal-top {
  position: absolute;
  top: 12px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  color: rgba(233, 238, 246, 0.92);
  font-size: 13px;
}

.modal-title {
  font-size: 14px;
  color: var(--text);
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.numbertext {
  opacity: 0.9;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--radius);
  border: 1px solid rgba(233, 238, 246, 0.12);
  box-shadow: var(--shadow);
}

.modal-caption {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 14px;

  padding: 12px 14px;
  border-radius: 12px;

  background: rgba(11, 18, 32, 0.65);
  border: 1px solid rgba(233, 238, 246, 0.12);
  box-shadow: var(--shadow);

  color: var(--text);
  font-size: 13px;
  line-height: 1.5;

  backdrop-filter: blur(8px);
}

.close {
  position: absolute;
  top: 14px;
  right: 18px;
  z-index: 2001;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 32px;
  line-height: 1;
  color: var(--text);
  background: rgba(11, 18, 32, 0.6);
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2001;
  width: 48px;
  height: 64px;
  border: none;
  cursor: pointer;
  color: var(--text);
  font-size: 34px;
  background: rgba(11, 18, 32, 0.35);
  border-radius: 12px;
}

.nav:hover {
  background: rgba(0, 0, 0, 0.7);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
