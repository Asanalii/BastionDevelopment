<!-- ContactSection.vue -->
<script setup>
import { ref, computed } from "vue";

function submit(event) {
  event.preventDefault();
  alert("Заявка отправлена (заглушка). Подключим обработку позже.");
}

/**
 * 1) Вставь сюда свои ссылки embed:
 * - Google: “Share” -> “Embed a map”
 * - Yandex: “Поделиться” -> “HTML-код”
 * - 2GIS: в карточке организации “Поделиться” -> “Встроить”
 */
const mapProvider = ref("google");

const mapEmbeds = {
  google: "https://www.google.com/maps?q=Astana&output=embed",
  yandex: "https://yandex.ru/map-widget/v1/?text=Astana&z=12",
  dgis: "https://widgets.2gis.com/widget?type=firm&id=70000001000000000",
};

const mapTitle = computed(() => {
  if (mapProvider.value === "google") return "Google Maps";
  if (mapProvider.value === "yandex") return "Яндекс Карты";
  return "2GIS";
});

const mapSrc = computed(() => mapEmbeds[mapProvider.value]);
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

          <div class="social">
            <a class="btn" href="#">WhatsApp</a>
            <a class="btn" href="#">Telegram</a>
          </div>

          <hr class="hr" />

          <!-- ===== MAP ===== -->
          <div class="map">
            <div class="map__head">
              <div class="small">Карта</div>

              <!-- <div class="map__tabs" role="tablist" aria-label="Выбор карты">
                <button
                  class="map__tab"
                  :class="{ 'is-active': mapProvider === 'google' }"
                  type="button"
                  @click="mapProvider = 'google'"
                >
                  Google
                </button>
                <button
                  class="map__tab"
                  :class="{ 'is-active': mapProvider === 'dgis' }"
                  type="button"
                  @click="mapProvider = 'dgis'"
                >
                  2GIS
                </button>
                <button
                  class="map__tab"
                  :class="{ 'is-active': mapProvider === 'yandex' }"
                  type="button"
                  @click="mapProvider = 'yandex'"
                >
                  Yandex
                </button>
              </div> -->
            </div>

            <div class="map__frame">
              <iframe
                class="map__iframe"
                :title="mapTitle"
                :src="mapSrc"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
              ></iframe>
            </div>
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

.social {
  margin-top: 14px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* ===== Map block ===== */
.map {
  display: grid;
  gap: 10px;
}

.map__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.map__tabs {
  display: inline-flex;
  gap: 6px;
  padding: 6px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(233, 238, 246, 0.03);
}

.map__tab {
  border: 1px solid transparent;
  background: transparent;
  color: var(--muted);
  padding: 8px 10px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.2s var(--ease), color 0.2s var(--ease),
    border-color 0.2s var(--ease);
}

.map__tab:hover {
  color: var(--text);
  border-color: rgba(233, 238, 246, 0.12);
  background: rgba(233, 238, 246, 0.05);
}

.map__tab.is-active {
  color: var(--text);
  border-color: rgba(201, 164, 92, 0.35);
  background: linear-gradient(
    180deg,
    rgba(201, 164, 92, 0.12),
    rgba(201, 164, 92, 0.04)
  );
}

.map__frame {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(233, 238, 246, 0.12);
  background: rgba(7, 11, 20, 0.35);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
}

.map__iframe {
  width: 100%;
  height: 260px;
  border: 0;
  display: block;
}

.map__hint {
  opacity: 0.95;
}

@media (max-width: 980px) {
  .contact {
    grid-template-columns: 1fr;
  }
  .map__iframe {
    height: 240px;
  }
}
</style>
