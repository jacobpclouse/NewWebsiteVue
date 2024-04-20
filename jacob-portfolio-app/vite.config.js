import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Quasar from '@quasar/vite-plugin';

export default defineConfig({
  plugins: [
    vue(),
    Quasar()
  ]
});
