import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: false
		}),
		paths: {
			base: '/Curtis_Dorrington'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				if (path.includes('favicon')) return;
				throw new Error(message);
			}
		}
	}
};

export default config;
