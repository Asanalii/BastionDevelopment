<!-- LicensesSection.vue -->
<script setup>
const licenses = [
  {
    num: "25029826",
    date: "21.08.2025",
    note: "Строительно-монтажные работы, I категория",
  },
  {
    num: "25026717",
    date: "16.07.2025",
    note: "Строительно-монтажные работы, I категория",
  },
];
</script>

<template>
  <section id="licenses" class="section">
    <div class="container">
      <h2 class="section-title">Лицензии и реквизиты</h2>
      <p class="section-subtitle">
        Блок доверия для B2B: подтверждения, реквизиты, документы.
      </p>

      <div class="grid lic">
        <div class="card card-pad" v-for="l in licenses" :key="l.num">
          <div class="kicker">
            <span class="icon-dot"></span> Лицензия №{{ l.num }}
          </div>
          <div class="lic__row">
            <span class="badge">Дата: {{ l.date }}</span>
            <span class="badge">Категория: I</span>
          </div>
          <p class="lic__text">{{ l.note }}</p>
        </div>

        <div class="card card-pad">
          <div class="kicker"><span class="icon-dot"></span> Реквизиты</div>
          <div class="lic__kv">
            <div>
              <span class="small">Компания</span>
              <div>ТОО “BASTION DEVELOPMENT”</div>
            </div>
            <div>
              <span class="small">БИН</span>
              <div>060940012125</div>
            </div>
            <div>
              <span class="small">Город</span>
              <div>Астана</div>
            </div>
            <div>
              <span class="small">E-mail</span>
              <div>info@bastion.kz (пример)</div>
            </div>
          </div>
          <div class="small" style="margin-top: 10px">
            * Контакты/почту подставим реальные, когда дадут.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lic {
  grid-template-columns: repeat(2, 1fr);
}
.lic__row {
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
}
.lic__text {
  margin: 12px 0 0;
  color: var(--muted);
  line-height: 1.6;
  font-size: 13px;
}
.lic__kv {
  margin-top: 14px;
  display: grid;
  gap: 10px;
}
.lic__kv > div {
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(233, 238, 246, 0.03);
}
@media (max-width: 880px) {
  .lic {
    grid-template-columns: 1fr;
  }
}
</style>
