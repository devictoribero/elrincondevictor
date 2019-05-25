const blogIndex = require('./content/index.json')
const routesConfiguration = require('./config/routes.js')
const staticRoutes = routesConfiguration

function withBlogRoutes() {
  let routes = routesConfiguration

  blogIndex.list.forEach(post => {
    const file = `/blog/${post.slug}`

    routes[file] = {
      page: '/blog',
      query: {slug: post.slug}
    }
  })

  return routes
}

module.exports = withBlogRoutes(staticRoutes)