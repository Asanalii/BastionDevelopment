<!-- SiteHeader.vue -->
<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const links = [
  // { label: "Услуги", href: "#services" },
  // { label: "Преимущества", href: "#advantages" },
  // { label: "Процесс", href: "#process" },
  { label: "О компании", href: "#about" },
  { label: "Деятельность", href: "#activity" },
  { label: "Партнеры", href: "#partners" },
  // { label: "Проекты", href: "#projects" },
  { label: "Лицензии", href: "#licenses" },
  // { label: "Сертификаты", href: "#certificates" },
  // { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a class="brand" href="#top" aria-label="BASTION DEVELOPMENT">
        <span class="brand__mark"></span>
        <span class="brand__text">
          <strong>BASTION</strong>
          <span>DEVELOPMENT</span>
        </span>
      </a>

      <nav class="nav nav--desktop" aria-label="Навигация">
        <a
          v-for="linkItem in links"
          :key="linkItem.href"
          class="nav__link"
          :href="linkItem.href"
        >
          {{ linkItem.label }}
        </a>
      </nav>

      <div class="header__actions">
        <button
          class="burger"
          type="button"
          @click="toggleMenu"
          :aria-expanded="isOpen"
          aria-label="Открыть меню"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div v-if="isOpen" class="nav nav--mobile">
      <div class="container nav__mobileInner">
        <a
          v-for="linkItem in links"
          :key="linkItem.href"
          class="nav__link"
          :href="linkItem.href"
          @click="closeMenu"
        >
          {{ linkItem.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(7, 11, 20, 0.65);
  border-bottom: 1px solid var(--border);
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  gap: 16px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 210px;
}
.brand__mark {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background:
    radial-gradient(
      12px 12px at 30% 35%,
      rgba(201, 164, 92, 0.9),
      rgba(201, 164, 92, 0) 60%
    ),
    linear-gradient(180deg, rgba(201, 164, 92, 0.25), rgba(201, 164, 92, 0.05));
  border: 1px solid rgba(201, 164, 92, 0.35);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}
.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
  letter-spacing: 0.04em;
  font-size: 12px;
  color: var(--muted);
}
.brand__text strong {
  color: var(--text);
  font-size: 14px;
  letter-spacing: 0.08em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 18px;
}
.nav__link {
  color: var(--muted);
  font-size: 14px;
  transition: color 0.15s ease;
}
.nav__link:hover {
  color: var(--text);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.burger {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(233, 238, 246, 0.03);
  cursor: pointer;
}
.burger span {
  display: block;
  height: 2px;
  width: 18px;
  background: var(--text);
  margin: 4px auto;
  opacity: 0.85;
}

.nav--mobile {
  border-top: 1px solid var(--border);
  padding: 14px 0 18px;
}
.nav__mobileInner {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 920px) {
  .nav--desktop {
    display: none;
  }
  .burger {
    display: inline-block;
  }
}
</style>
