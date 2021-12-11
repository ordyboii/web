import Static from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: Static(),
    target: '#svelte'
  }
};

export default config;
