import Static from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: Static({
      assets: 'build',
      pages: 'build',
      fallback: null
    }),
    target: '#svelte'
  }
};

export default config;
