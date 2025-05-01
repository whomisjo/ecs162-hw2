import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { preprocess } from 'svelte/compiler';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  test: {
    environment: 'jsdom'
  },
  resolve: process.env.VITEST
    ? {
        conditions: ['browser']
      }
    : undefined
});
