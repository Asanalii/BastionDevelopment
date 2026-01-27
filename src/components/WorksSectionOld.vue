<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const works = [
  {
    title: "Капитальный ремонт фасада, трибун и ограждений",
    client: "КГКП «ДЮСШ Майского района»",
  },
  {
    title: "Ремонтно-строительные работы",
    client: "ТОО «РемСтройМонтаж-Универсал»",
  },
  {
    title: "Капитальный ремонт здания в п. Шидерты",
    client: "ТОО «Вулкан-ЛТД»",
  },
  {
    title: "Земляные работы объекта",
    client: "ТАО «Павлодарский речной порт»",
  },
  {
    title:
      "Строительство однотипной модульной районной ветеринарной лаборатории",
    client: "ТОО фирма «РЭМЭК»",
  },
  {
    title: "Строительство базы электроремонтного производства цеха №7",
    client: "ТОО фирма «РЭМЭК»",
  },
  {
    title: 'ГОК "Строительство ремонтно-механического цеха" Акмолинская обл.',
    client: 'ТОО "RG Gold"',
  },
  {
    title: "Антикоррозионная защита Цехов ЦЭА, АМО",
    client: "АО «Казахстанский электролизный завод»",
  },
  {
    title: "Ремонт участка трубопровода ППВ",
    client: "ТОО «Павлодарский нефтехимический завод»",
  },
  {
    title: "Работы по ремонту аэрируемых прудов",
    client: "ТОО «Павлодарский нефтехимический завод»",
  },
  {
    title: "Ремонт трубопроводов ХПВ",
    client: "ТОО «Павлодарский нефтехимический завод»",
  },
  {
    title:
      "Реконструкция объекта «Замены и ремонт системы коммуникаций ПАРК28». Наружный водопровод и канализация",
    client: "ТОО «DAMAK»",
  },
  {
    title:
      "Работы по горячему водоснабжению отопительных систем для ИВС УП г.Экибастуз",
    client:
      "ГУ «Департамент Павлодарской области Министерства внутренних дел Республики Казахстан",
  },
  {
    title:
      "Работы по текущему ремонту административного здания и гаражей ОП Павлодарского района",
    client:
      "ГУ «Департамент Павлодарской области Министерства внутренних дел Республики Казахстан",
  },
  {
    title:
      "Работы по текущему ремонту электроосвещения в здании приемника распределителя УП г.Павлодара",
    client:
      "ГУ «Департамент Павлодарской области Министерства внутренних дел Республики Казахстан",
  },
  { title: "Электромонтажные работы", client: "ПФ АО «Bank RBK»" },
  {
    title: "Строительство ПС 110/10 кВ в ВЛ-110 кВ «Южная Городская»",
    client: "",
  },
  { title: "Строительство ВЛ-35кВ протяженностью 18,4 км", client: "" },
  {
    title:
      "Реконструкция ОРУ подстанции 220 кВ насосной станции №18 филиала «Канал имени К.Сатпаева», Карагандинская область",
    client:
      "Филиал «Канал имени Каныша Сатпаева» Республиканского государственного предприятия на праве хозяйственного ведения «Казводхоз» Министерства водных ресурсов и ирригации Республики Казахстан",
  },
  {
    title: "Строительство приемных резервуаров сточных вод",
    client: "ТОО «Павлодарский нефтехимический завод»",
  },
  {
    title: "Демонтаж ж.б. дымовой трубы 120м",
    client: "ТОО «Павлодарский нефтехимический завод»",
  },
  {
    title:
      "Строительство молочно-товарной фермы на 500 голов в с.Ковалевка Успенского района Павлодарской области",
    client: "Крестьянское хозяйство «БИК»",
  },
  {
    title: "Окраска внутренних стен здания",
    client: "ТОО «Intensive Construction»",
  },
  {
    title: "Строительство инженерных сетей орошаемых полей",
    client: "Крестьянское хозяйство «БИК»",
  },
  {
    title: "Планировка орошаемого участка в селе Кенжеколь",
    client: "Крестьянское хозяйство «БИК»",
  },
  {
    title: "Монтаж и обвязка насосного оборудования в пойме р.Иртыш",
    client: "Крестьянское хозяйство «БИК»",
  },
  {
    title:
      'Строительство интегрированного биологического реактора 5000 м3 объекта "Очистные сооружения хозяйственно-бытовых стоков г.Павлодар"',
    client: 'ГУ "Управление строительства Павлодарской области"',
  },
  {
    title:
      "Частичная реконструкция наружного водопровода орошаемого участка в селе Кенжеколь",
    client: "Крестьянское хозяйство «БИК»",
  },
  {
    title: "Ремонтные работы трубы диаметром 500 мм",
    client: "Крестьянское хозяйство «БИК»",
  },
  {
    title: "Ремонт насосной и отделения маслоуловителей объекта №22",
    client: "АО «Казахстанский электролизный завод»",
  },
  {
    title: "Головная нефтеперекачивающая станция г.Павлодар. Ремонт здания",
    client: "АО «КазТрансОйл»",
  },
  {
    title: "Нефтеперекачивающая станция. Реконструкция здания HM3600Х230",
    client: "АО «КазТрансОйл»",
  },
  { title: "Ремонт АЗС №3, №4. г.Астана", client: "ТОО «Sinooil»" },
  {
    title: "Ремонт АВП «Булаево» «Гараж на 5 автомашин»",
    client: "АО «КазТрансОйл»",
  },
  {
    title:
      "Капитальный ремонт ограждения и освещения в западной части ПТЭЦ-2 г. Петропавловск",
    client: "АО «СЕВКАЗЭНЕРГО»",
  },
  {
    title:
      "«Строительство вагоноремонтного депо с подъездными путями в г.Экибастуз 2-очередь»",
    client: "ТОО «Деповской сервис»",
  },
  {
    title: "Насосная станция №8. Ремонтные работы",
    client:
      "ТОО «Филиал «Канал имени Каныша Сатпаева» Республиканского государственного предприятия на праве хозяйственного ведения «Казводхоз» Министерства водных ресурсов и ирригации Республики Казахстан»",
  },
  {
    title: "«Ремонт системы вентиляции воздуходувной станции ТОО «ПНХЗ»",
    client: "ТОО «Павлодарский нефтехимический завод»",
  },
  {
    title:
      "Капитальный ремонт здания химводоотчистки №1 (ХВО-1) АО «СЕВКАЗЭНЕРГО» в г.Петропавловск ПТЭЦ-2",
    client: "АО «СЕВКАЗЭНЕРГО»",
  },
  {
    title:
      "Нанесение антикоррозийных покрытий печи П-601/2, котлов утилизаторов П-402/1, П-401, электрофильтра Э-501, печей П-101, П-102 в производстве глубокой переработки нефти",
    client: "ТОО «Павлодарский нефтехимический завод»",
  },
];

const listElement = ref(null);
let intersectionObserver = null;

onMounted(() => {
  if (!listElement.value) return;

  const items = Array.from(listElement.value.querySelectorAll(".work-item"));

  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.18 }
  );

  items.forEach((item) => intersectionObserver.observe(item));
});

onBeforeUnmount(() => {
  if (intersectionObserver) intersectionObserver.disconnect();
});
</script>

<template>
  <section id="works" class="works section">
    <div class="container">
      <div class="works-shell">
        <h2 class="section-title">ОСНОВНЫЕ ВЫПОЛНЕННЫЕ РАБОТЫ</h2>

        <ul ref="listElement" class="works-list">
          <li
            v-for="(work, index) in works"
            :key="`${index}-${work.title}`"
            class="work-item"
          >
            <div class="work-row">
              <div class="work-bullet" aria-hidden="true"></div>

              <div class="work-content">
                <h3 class="work-title">
                  {{ work.title }}
                </h3>

                <p v-if="work.client" class="work-client">
                  {{ work.client }}
                </p>
              </div>
            </div>

            <div
              v-if="index !== works.length - 1"
              class="work-divider"
              aria-hidden="true"
            ></div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.works {
  padding: 64px 0;
  position: relative;
  z-index: 1;

  background: radial-gradient(
      900px 520px at 70% -20%,
      rgba(201, 164, 92, 0.12),
      transparent 60%
    ),
    radial-gradient(
      820px 480px at 10% 15%,
      rgba(92, 132, 255, 0.08),
      transparent 58%
    ),
    linear-gradient(180deg, rgba(7, 11, 20, 0.65), rgba(11, 18, 32, 0.65));

  border-top: 1px solid var(--border);
}

.container {
  width: min(var(--container), calc(100% - var(--gutter) * 2));
  margin: 0 auto;
}

.works-shell {
  background: rgba(11, 18, 32, 0.55);
  border: 1px solid rgba(233, 238, 246, 0.1);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 26px;
  position: relative;
  overflow: hidden;
}

.works-shell::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    700px 240px at 30% 0%,
    rgba(201, 164, 92, 0.08),
    transparent 60%
  );
}

.section-title {
  margin: 0 0 18px;
  text-align: center;
  font-size: 32px;
  color: var(--text);
  letter-spacing: 0.4px;
}

.works-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.work-item {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
}

.work-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.work-row {
  display: grid;
  grid-template-columns: 14px 1fr;
  gap: 14px;
  align-items: start;
  padding: 16px 12px;
  border-radius: 16px;
  transition: background 0.25s var(--ease), border-color 0.25s var(--ease);
}

.work-row:hover {
  background: rgba(16, 26, 46, 0.55);
}

.work-bullet {
  width: 10px;
  height: 10px;
  margin-top: 7px;
  border-radius: 999px;
  background: rgba(201, 164, 92, 0.95);
  box-shadow: 0 0 0 4px rgba(201, 164, 92, 0.12);
}

.work-title {
  margin: 0;
  font-size: 16px;
  line-height: 1.35;
  color: var(--text);
}

.work-client {
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.5;
  font-size: 14px;
}

.work-divider {
  height: 1px;
  margin: 0 12px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(233, 238, 246, 0.14),
    transparent
  );
}

@media (max-width: 640px) {
  .works-shell {
    padding: 18px;
    border-radius: 18px;
  }

  .section-title {
    font-size: 26px;
  }

  .work-row {
    padding: 14px 10px;
  }
}
</style>
