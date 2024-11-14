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
    HeroSection,
    // SkillsSection,
  },
};
</script>
