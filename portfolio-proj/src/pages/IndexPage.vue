<template>
  <q-page class="q-pa-md">
    <HeroSection />
    <AboutMe />
    <SkillsSection />
  </q-page>
</template>

<script>
import HeroSection from "components/HeroSection.vue";
import AboutMe from "components/AboutMe.vue";
import SkillsSection from "components/SkillsSection.vue";

export default {
  name: "IndexPage",
  components: {
    HeroSection,
    AboutMe,
    SkillsSection,
  },
};
</script>
