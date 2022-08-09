// import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import netlify from '@sveltejs/adapter-netlify';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
	kit: {
		adapter: netlify(),
	}
};

export default config;
