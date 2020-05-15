const articles = require('./content/index.json')

module.exports = {
	webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    return config
  },
	// exportPathMap is used to include data when exporting the application.
	// by default, `req` and `res` are empty objects at export time.
	exportPathMap: async function(defaultPathMap) {
		// we remove this because the defaultPathMap has it, and we don't want to export it
		// becase we'll generate the export for each plant dynamically
		delete defaultPathMap["/blog/[slug]"]
		
    
		let routes = {
			// we spread defaultPathMap because it contains:
			// '/plants/[semanticUrl]': { page: '/plants/[semanticUrl]' },
			// but this does not work when we go SSR
			...defaultPathMap,
			"/": { page: "/" },
			"/blog": { page: "/blog" },
			// Dynamically generated for each plant /name-slugged-of-the-plant
			...await getArticleUrls()
		}

		return routes
	},
}

async function getArticleUrls() {
	let routes = []
	articles.list.forEach(article => {
		if (!article) { return }

		const {slug: articleSlug} = article
		const articlePath = `/blog/${articleSlug}`
		routes[articlePath] = { page: "/blog/[slug]", query: { slug : articleSlug}}
	})

	return routes
}