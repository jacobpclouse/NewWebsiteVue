<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>My Portfolio</q-toolbar-title>
        <q-btn flat label="Home" @click="$router.push('/')" />
        <q-btn flat label="Projects" @click="$router.push('/projects')" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "PortfolioLayout",
};
</script>

<style>
/* Add any additional layout styles here */
</style>
