<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: 'App'
});
</script>
<style>
:root {
  --clr-light: #fff;
  --clr-dark: #303030;
  --clr-accent: #007FFF;
}

/* Dark mode colors */
body[data-theme="dark"] {
  --background-color: var(--clr-dark);
  --text-color: var(--clr-light);
  --accent-color: var(--clr-accent);
}

/* Light mode colors */
body[data-theme="light"] {
  --background-color: var(--clr-light);
  --text-color: var(--clr-dark);
  --accent-color: var(--clr-accent);
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>
