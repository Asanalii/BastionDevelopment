<!-- ContactSection -->
<script setup>
function submit(e) {
  e.preventDefault();
  alert("Заявка отправлена (заглушка). Подключим обработку позже.");
}
</script>

<template>
  <section id="contacts" class="section">
    <div class="container">
      <h2 class="section-title">Контакты</h2>
      <p class="section-subtitle">
        Оставьте заявку — уточним задачу и подготовим коммерческое предложение.
      </p>

      <div class="contact">
        <form class="card card-pad" @submit="submit">
          <div class="grid form">
            <input class="input" placeholder="Имя" required />
            <input class="input" placeholder="Телефон" required />
            <input class="input" placeholder="E-mail" />
            <textarea
              class="input"
              placeholder="Коротко опишите задачу"
              rows="4"
            ></textarea>
            <button class="btn btn-accent" type="submit">Отправить</button>
            <div class="small">
              Нажимая “Отправить”, вы соглашаетесь на обработку данных.
            </div>
          </div>
        </form>

        <div class="card card-pad">
          <div class="kicker">
            <span class="icon-dot"></span> Связаться напрямую
          </div>
          <div class="kv">
            <div>
              <span class="small">Телефон</span>
              <div>+7 (___) ___-__-__</div>
            </div>
            <div>
              <span class="small">Почта</span>
              <div>info@bastion.kz</div>
            </div>
            <div>
              <span class="small">Адрес</span>
              <div>Астана</div>
            </div>
            <div>
              <span class="small">Время</span>
              <div>Пн–Пт, 09:00–18:00</div>
            </div>
          </div>

          <div
            style="margin-top: 14px; display: flex; gap: 10px; flex-wrap: wrap"
          >
            <a class="btn" href="#">WhatsApp</a>
            <a class="btn" href="#">Telegram</a>
          </div>

          <hr class="hr" />
          <div class="small">
            TODO Тут карту нужно указать
            <!-- Здесь можно вставить карту (Google/2GIS) позже. -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 16px;
  align-items: start;
}
.form {
  gap: 10px;
}

.kv {
  margin-top: 14px;
  display: grid;
  gap: 10px;
}
.kv > div {
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(233, 238, 246, 0.03);
}

@media (max-width: 980px) {
  .contact {
    grid-template-columns: 1fr;
  }
}
</style>
