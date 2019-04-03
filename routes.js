const blogIndex = require('./content/index.json')

const staticRoutes = {
  '/': {page: '/'},
  '/blog': {page: '/blog'}
}

function withBlogRoutes(staticRoutes = {}) {
  let routes = {
    ...staticRoutes
  }

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