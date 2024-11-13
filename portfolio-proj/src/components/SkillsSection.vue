<template>
  <div class="skills-section q-pa-md">
    <h2 class="text-h4">My Skills</h2>
    <div class="row q-col-gutter-md q-mt-md">
      <q-chip
        v-for="(skill, index) in skills"
        :key="index"
        color="primary"
        icon="star"
      >
        {{ skill }}
      </q-chip>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      skills: ["JavaScript", "Vue.js", "CSS", "HTML", "Quasar", "Python"], // Add your skills here
    };
  },
};
</script>

<style scoped>
.skills-section {
  background-color: #f5f5f5;
}
</style>
