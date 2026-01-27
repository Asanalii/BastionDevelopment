import { onMounted, onBeforeUnmount } from "vue";

export function useSpotlight(selector = ".spotlight") {
  const handlers = [];

  onMounted(() => {
    const els = Array.from(document.querySelectorAll(selector));

    els.forEach((el) => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty("--mx", `${x}%`);
        el.style.setProperty("--my", `${y}%`);
      };

      const onLeave = () => {
        el.style.removeProperty("--mx");
        el.style.removeProperty("--my");
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);

      handlers.push({ el, onMove, onLeave });
    });
  });

  onBeforeUnmount(() => {
    handlers.forEach(({ el, onMove, onLeave }) => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    });
  });
}
