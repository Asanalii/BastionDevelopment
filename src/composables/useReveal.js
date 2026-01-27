import { onMounted, onBeforeUnmount } from "vue";

export function useReveal(
  selector = ".section",
  options = { threshold: 0.12 }
) {
  let io;

  onMounted(() => {
    const els = Array.from(document.querySelectorAll(selector));
    els.forEach((el) => el.classList.add("reveal"));

    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, options);

    els.forEach((el) => io.observe(el));
  });

  onBeforeUnmount(() => {
    if (io) io.disconnect();
  });
}
