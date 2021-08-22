// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

//Import destyle.CSS

import '~/assets/style/destyle.css'
import '~/assets/style/main.css'
import UtilJs from '~/assets/js/util.js'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)
	Vue.use(UtilJs)
	head.htmlAttrs = {lang:'ja'}

	// Add an external JavaScript before the closing </body> tag
		/*head.script.push({
			src: '/assets/static/src/assets/js/util.js',
			body: true
		}) */
}

