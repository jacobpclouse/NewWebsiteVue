<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar :style="{ backgroundColor: 'var(--background-color)' }">
        <q-toolbar-title :style="{ color: 'var(--accent-color)' }">
          <img alt="My logo" src="~assets/logo2_black.svg" >
          My Portfolio</q-toolbar-title>
        <q-btn flat label="Home" @click="$router.push('/')" :style="{ color: 'var(--text-color)' }" />
        <q-btn flat label="Projects" @click="$router.push('/projects')" :style="{ color: 'var(--text-color)' }" />

        <q-toggle v-model="isDark" color="accent" :label="isDark ? 'Dark Mode' : 'Light Mode'" right
          :style="{ color: 'var(--text-color)' }" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer: Matches Header Theme -->
    <q-footer elevated class="footer"
      :style="{ backgroundColor: isDark ? 'var(--clr-dark)' : 'var(--clr-light)', color: isDark ? 'var(--clr-light)' : 'var(--clr-dark)' }">
      <div class="footer-content">
        <span>© {{ currentYear }} Jacob Clouse</span>

        <!-- Social Icons -->
        <div class="footer-icons">
          <a href="https://github.com/your-github" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:your-email@example.com">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </q-footer>

    <!-- Particles -->
    <div v-for="n in 100" :key="n" class="particle-container">
      <div class="particle" :class="isDark ? 'particle-dark' : 'particle-light'" :style="getParticleStyle()" />
    </div>
  </q-layout>
</template>

<script>
import { Dark } from 'quasar'

export default {
  name: 'PortfolioLayout',
  data() {
    return {
      isDark: true, // Default to dark mode
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    getParticleStyle() {
      const size = this.isDark ? (Math.random() * 2 + 2) : (Math.random() * 2 + 2); // Larger in light mode
      const x = Math.random() * window.innerWidth; // Random X position
      const y = Math.random() * window.innerHeight; // Random Y position
      const duration = Math.random() * 3 + 3; // Random speed for animation

      return {
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
        animationTimingFunction: 'linear',
        animationName: 'hyperspace, twinkle'
      };
    }
  },
  watch: {
    isDark(val) {
      Dark.set(val)
      document.body.setAttribute('data-theme', val ? 'dark' : 'light')
    }
  },
  mounted() {
    Dark.set(this.isDark)
    document.body.setAttribute('data-theme', this.isDark ? 'dark' : 'light')
  }
}
</script>

<style scoped>
/* Hyperspace Background */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background: var(--background-color);
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Twinkling Animation */
@keyframes twinkle {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

/* Hyperspace Animation */
@keyframes hyperspace {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

/* Particles */
.particle {
  position: absolute;
  border-radius: 50%;
  animation: hyperspace 1s linear infinite, twinkle 2s ease-in-out infinite;
  opacity: 0.8;
}

/* Dark Mode Particles */
.particle-dark {
  background-color: #303030;
}

/* Light Mode Particles: Darker (Almost Black) */
.particle-light {
  background-color: #1a1a1a;
  /* Darker gray/almost black */
  opacity: 0.9;
  /* More visible */
}

/* Accent Color for Particles */
.particle-accent {
  background-color: #007FFF;
}

.particle-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

.footer {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.footer-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-icons a {
  color: inherit;
  /* Inherit color from theme */
  margin-left: 15px;
  font-size: 20px;
  transition: color 0.3s;
}

.footer-icons a:hover {
  color: var(--clr-accent);
  /* Accent color on hover */
}
</style>
