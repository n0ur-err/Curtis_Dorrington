import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/Curtis_Dorrington' : ''
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore favicon errors
				if (path.includes('favicon')) {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
