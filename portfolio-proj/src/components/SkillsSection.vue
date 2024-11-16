<template>
  <div class="skills-section q-pa-md">
    <h2 class="text-h4 skills-header">My Skills</h2>
    <div class="skills-grid">
      <div class="skill-box" v-for="(skill, index) in skills" :key="index">
        <q-card class="skill-card" bordered>
          <q-card-section class="q-pa-none">
            <div class="skill-icon">
              <img :src="skill.logo" :alt="skill.name" class="skill-logo" />
            </div>
            <div class="skill-name">
              <span>{{ skill.name }}</span>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      skills: [
      { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
        { name: "Vue.js", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
        { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
        { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
        { name: "Quasar", logo: "quasar.ico" },
        { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
        { name: "C#", logo: "https://cdn.worldvectorlogo.com/logos/c--4.svg" },
        { name: "C++", logo: "https://cdn.worldvectorlogo.com/logos/c.svg" },
        { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
        { name: "Node JS", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: "SQL", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg" },
      ],
    };
  },
};
</script>

<style scoped>
.skills-section {
  background-color: #1a1f27;
}

.skills-header {
  text-align: center; /* Center the text horizontally */
  color: #ffffff; /* White text for contrast */
  margin-bottom: 20px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 logos per line */
  gap: 20px;
  justify-items: center; /* Center items horizontally */
  padding: 16px;
}

.skill-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  text-align: center;
  border: 1px solid #ccc; /* Outline for each box */
  border-radius: 10px;
  background-color: #232323; /* Dark background */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.skill-logo {
  max-width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.skill-name {
  font-weight: bold;
  color: #fff; /* White text for visibility on dark background */
}
</style>



<!-- <template>
  <div class="skills-section q-pa-md">
    <h2 class="text-h4">My Skills</h2>
    <div class="skills-grid">
      <div class="skill-box" v-for="(skill, index) in skills" :key="index">
        <q-card class="skill-card" bordered>
          <q-card-section class="q-pa-none">
            <div class="skill-icon">
              <img :src="skill.logo" :alt="skill.name" class="skill-logo" />
            </div>
            <div class="skill-name">
              <span>{{ skill.name }}</span>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      skills: [
      { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
        { name: "Vue.js", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
        { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
        { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
        { name: "Quasar", logo: "quasar.ico" },
        { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
        { name: "C#", logo: "https://cdn.worldvectorlogo.com/logos/c--4.svg" },
        { name: "C++", logo: "https://cdn.worldvectorlogo.com/logos/c.svg" },
        { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
        { name: "Node JS", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: "SQL", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg" },
      ], // Technologies with their logos
    };
  },
};
</script>

<style scoped>
.skills-section {
  background-color: #1a1f27;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 logos per line */
  gap: 20px;
  justify-items: center; /* Center items horizontally */
  padding: 16px;
}

.skill-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  text-align: center;
  border: 1px solid #ccc; /* Outline for each box */
  border-radius: 10px;
  background-color: #232323; /* Dark background */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.skill-logo {
  max-width: 130px;
  height: auto;
  margin-bottom: 10px;
}

.skill-name {
  font-weight: bold;
  color: #fff; /* White text for visibility on dark background */
}
</style>
 -->
