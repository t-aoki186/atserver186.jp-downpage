// svelte.config.js
import adapter from '@sveltejs/adapter-node'; // ここを変更
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // adapter-node を使用
    adapter: adapter()
  }
};

export default config;
