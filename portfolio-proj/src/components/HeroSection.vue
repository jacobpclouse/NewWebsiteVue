
<template>
  <div class="hero-section q-pa-md flex flex-center text-center text-secondary">
    <div class="hero-box">
      <img class="hero-image" src="profile.jpg" alt="Jacob Clouse" />
      <div class="hero-text">
        <h4 class="text-h4 text-secondary" style="margin-bottom: 5px;">Hello, my name is</h4>
        <h1 class="text-h1 text-primary" style="margin-top: 0;">Jacob Clouse</h1>
        <p class="text-subtitle1">Full-Stack Developer | Designer</p>
        <q-btn color="primary" class="q-mt-md" label="See My Work" @click="$router.push('/projects')" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  height: 50vh; /* Ensures the hero section covers the full screen */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-box {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Translucent background */
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(5px); /* Adds the blur effect */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Floating shadow */
  animation: float 5s ease-in-out infinite; /* Gentle floating animation */
  max-width: 80%;
  width: fit-content;

  /* Faint glow effect using box-shadow */
  box-shadow: 0 0 15px 5px rgba(0, 123, 255, 0.3); /* Light blue glow */
}

.hero-image {
  border-radius: 10px;
  width: 300px; /* Adjust based on your preference */
  height: auto;
  margin-right: 20px;
}

.hero-text {
  text-align: left;
}

.hero-text h1 {
  margin-bottom: 10px;
}

.hero-text p {
  margin-top: 0;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>



<!-- <template>
  <div class="hero-section q-pa-md flex flex-center text-center text-secondary shadow-bottom-large">
    <div class="hero-box">
      <img class="hero-image" src="profile.jpg" alt="Jacob Clouse" />
      <div class="hero-text">
        <h4 class="text-h4 text-secondary" style="margin-bottom: 5px;">Hello, my name is</h4>
        <h1 class="text-h1 text-primary" style="margin-top: 0;">Jacob Clouse</h1> 
        <p class="text-subtitle1">Full-Stack Developer | Designer</p>
        <q-btn color="primary" class="q-mt-md" label="See My Work" @click="$router.push('/projects')" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  height: 50vh; /* Ensures the hero section covers the full screen */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-box {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
  /* Translucent background */
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(5px); /* Adds the blur effect */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Floating shadow */
  animation: float 5s ease-in-out infinite; /* Gentle floating animation */
  max-width: 80%;
  width: fit-content;
}

.hero-image {
  border-radius: 10px;
  width: 300px; /* Adjust based on your preference */
  height: auto;
  margin-right: 20px;
}

.hero-text {
  text-align: left;
}

.hero-text h1 {
  margin-bottom: 10px;
}

.hero-text p {
  margin-top: 0;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
 -->
