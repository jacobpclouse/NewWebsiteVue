<template>
  <div class="hero-section q-pa-md flex flex-center text-center">
    <div>
      <h1 class="text-h2 text-bold">Your Name</h1>
      <p class="text-subtitle1">Full-Stack Developer | Designer</p>
      <q-btn
        color="primary"
        class="q-mt-md"
        label="See My Work"
        @click="$router.push('/projects')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(
    135deg,
    #ff7e5f,
    #feb47b
  ); /* Change to your preferred gradient */
  height: 50vh;
  color: white;
}
</style>
