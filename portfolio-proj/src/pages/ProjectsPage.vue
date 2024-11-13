<template>
  <q-page class="q-pa-md">
    <h2 class="text-h4 text-center">Projects</h2>
    <ProjectsGrid />
  </q-page>
</template>

<script>
import ProjectsGrid from "components/ProjectsGrid.vue";

export default {
  name: "ProjectsPage",
  components: {
    ProjectsGrid,
  },
};
</script>
