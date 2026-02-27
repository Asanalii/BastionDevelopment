<!-- App.vue -->
<script setup>
import { useReveal } from "./composables/useReveal";
import { useSpotlight } from "./composables/useSpotlight";

import HeroSimple from "./components/HeroSimple.vue";
import AboutSimple from "./components/AboutSimple.vue";
import ActivitySimple from "./components/ActivitySimple.vue";

import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import AdvantagesSection from "./components/AdvantagesSection.vue";
import ProcessSection from "./components/ProcessSection.vue";
import LicensesSection from "./components/LicensesSection.vue";
import FaqSection from "./components/FaqSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import GallerySection from "./components/GallerySection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import CertificatesSection from "./components/CertificatesSection.vue";
import WorksSection from "./components/WorksSection.vue";
import ScrollToTopButton from "./components/ScrollToTopButton.vue";

useReveal(".section");
useSpotlight(".spotlight");
</script>

<template>
  <div class="app">
    <SiteHeader />
    <main>
      <HeroSimple />

      <AboutSimple />

      <ActivitySimple />

      <!-- <HeroSection />
      <ServicesSection />
      <AdvantagesSection /> -->

      <GallerySection />

      <!-- <ProjectsSection /> -->
      <CertificatesSection />

      <!-- <WorksSection /> -->
      <!-- <ProcessSection /> -->
      <!-- <LicensesSection /> -->
      <!-- <FaqSection /> -->
      <ContactSection />
    </main>
    <SiteFooter />

    <ScrollToTopButton />
  </div>
</template>

<style scoped>
#app {
  position: relative;
  z-index: 1;
}
</style>
