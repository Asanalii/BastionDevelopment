<!-- SiteFooter.vue -->
<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="small">
        © {{ new Date().getFullYear() }} BASTION DEVELOPMENT. Все права
        защищены.
      </div>
      <div class="small">Политика конфиденциальности • Публичная оферта</div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 24px 0;
  background: rgba(7, 11, 20, 0.65);
}
.footer__inner {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
