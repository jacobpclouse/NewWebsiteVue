<template>
  <div class="projects-grid row q-col-gutter-md q-mt-md">
    <q-card
      v-for="(project, index) in projects"
      :key="index"
      class="col-xs-12 col-sm-6 col-md-4"
    >
      <q-img :src="project.image" ratio="16/9" />
      <q-card-section>
        <div class="text-h6">{{ project.title }}</div>
        <div class="text-subtitle2">{{ project.description }}</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="View" @click="viewProject(project.link)" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "ProjectsGrid",
  data() {
    return {
      projects: [
        {
          title: "Project 1",
          description: "Description of project 1",
          image: "path/to/image1.jpg",
          link: "#",
        },
        {
          title: "Project 2",
          description: "Description of project 2",
          image: "path/to/image2.jpg",
          link: "#",
        },
        // Add more projects here
      ],
    };
  },
  methods: {
    viewProject(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
