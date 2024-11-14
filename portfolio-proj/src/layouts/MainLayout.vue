<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar :style="{ backgroundColor: 'var(--background-color)' }">
        <q-toolbar-title :style="{ color: 'var(--accent-color)' }">My Portfolio</q-toolbar-title>
        <q-btn flat label="Home" @click="$router.push('/')" :style="{ color: 'var(--text-color)' }" />
        <q-btn flat label="Projects" @click="$router.push('/projects')" :style="{ color: 'var(--text-color)' }" />
        
        <q-toggle
          v-model="isDark"
          color="accent"
          :label="isDark ? 'Dark Mode' : 'Light Mode'"
          right
          :style="{ color: 'var(--text-color)' }"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer
      elevated
      class="footer"
      :style="{ backgroundColor: isDark ? 'var(--clr-dark)' : 'var(--clr-light)', color: isDark ? 'var(--clr-light)' : 'var(--clr-dark)' }"
    >
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
  </q-layout>
</template>

<script>
import { Dark } from 'quasar'

export default {
  name: 'MainLayout',
  data() {
    return {
      isDark: true, // Default to dark mode
      currentYear: new Date().getFullYear()
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

<style>
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
  color: inherit; /* Inherit color from theme */
  margin-left: 15px;
  font-size: 20px;
  transition: color 0.3s;
}

.footer-icons a:hover {
  color: var(--clr-accent); /* Accent color on hover */
}
</style>


<!-- <template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar :style="{ backgroundColor: 'var(--background-color)' }">
        <q-toolbar-title :style="{ color: 'var(--accent-color)' }">My Portfolio</q-toolbar-title>
        <q-btn flat label="Home" @click="$router.push('/')" :style="{ color: 'var(--text-color)' }" />
        <q-btn flat label="Projects" @click="$router.push('/projects')" :style="{ color: 'var(--text-color)' }" />
        
        <q-toggle
          v-model="isDark"
          color="accent"
          :label="isDark ? 'Dark Mode' : 'Light Mode'"
          right
          :style="{ color: 'var(--text-color)' }"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { Dark } from 'quasar'

export default {
  name: 'MainLayout',
  data() {
    return {
      isDark: true // Default to dark mode
    }
  },
  watch: {
    isDark(val) {
      Dark.set(val) // Toggle dark mode based on the value of isDark
      document.body.setAttribute('data-theme', val ? 'dark' : 'light') // Set data-theme attribute for CSS
    }
  },
  mounted() {
    Dark.set(this.isDark) // Set dark mode on load
    document.body.setAttribute('data-theme', this.isDark ? 'dark' : 'light')
  }
}
</script> -->

