// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config()
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
		const { data } = await axios
			.get('https://starplutinum.microcms.io/api/v1/project', {
			headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY }
			})

		const news = actions.addCollection({
			typeName: 'Projects'
		})

		for (const item of data.contents) {
			news.addNode({
			id: item.id,
			url_slug: item.url_slug,
			main_image: item.main_image,
			main_description: item.main_description,
			table: item.table
			})
		}
	})

	api.createPages(({ createPage }) => {
	// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}
