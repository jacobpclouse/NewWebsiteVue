<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar :style="{ backgroundColor: 'var(--background-color)' }">
        <q-toolbar-title :style="{ color: 'var(--accent-color)' }">My Portfolio</q-toolbar-title>
        <q-btn flat label="Home" @click="$router.push('/')" :style="{ color: 'var(--text-color)' }" />
        <q-btn flat label="Projects" @click="$router.push('/projects')" :style="{ color: 'var(--text-color)' }" />
        
        <!-- Dark Mode Toggle with Dynamic Label Color -->
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
  name: 'PortfolioLayout',
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
</script>

