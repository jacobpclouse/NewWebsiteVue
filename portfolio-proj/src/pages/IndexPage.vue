<template>
  <q-page class="q-pa-md">
    <HeroSection />
    <SkillsSection />
  </q-page>
</template>

<script>
import HeroSection from "components/HeroSection.vue";
import SkillsSection from "components/SkillsSection.vue";

export default {
  name: "IndexPage",
  components: {
    // HeroSection,
    // SkillsSection,
  },
};
</script>

<!-- <template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script> -->
