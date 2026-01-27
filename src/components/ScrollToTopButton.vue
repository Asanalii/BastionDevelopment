<!-- ScrollToTopButton.vue -->
<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const isVisible = ref(false);

function handleScroll() {
  const pageScrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  isVisible.value = pageScrollTop > 300;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <button
    id="scrollToTopBtn"
    class="scrollToTopBtn"
    type="button"
    :class="{ 'is-visible': isVisible }"
    @click="scrollToTop"
    aria-label="Наверх"
  >
    ↑
  </button>
</template>

<style scoped>
.scrollToTopBtn {
  position: fixed;
  right: 20px;
  bottom: 20px;

  width: 50px;
  height: 50px;

  border: 1px solid rgba(233, 238, 246, 0.14);
  border-radius: 14px;

  background: rgba(7, 11, 20, 0.7);
  color: var(--text);

  display: grid;
  place-items: center;

  cursor: pointer;
  z-index: 60;

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);

  opacity: 0;
  pointer-events: none;
  transform: translateY(10px) scale(0.98);
  transition: opacity 0.2s var(--ease), transform 0.2s var(--ease),
    border-color 0.2s var(--ease);
}

.scrollToTopBtn.is-visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}

.scrollToTopBtn:hover {
  border-color: rgba(201, 164, 92, 0.35);
  transform: translateY(-2px) scale(1.02);
}
</style>
