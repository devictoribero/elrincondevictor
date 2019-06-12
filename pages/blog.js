import matter from 'gray-matter';
import Error from './_error'
import {getRandom} from '../helpers/random'
import {Layout} from '../components/layout/Layout'
import {BlogMainPage} from '../components/pages/BlogMainPage'
import {Post} from '../components/pages/Post'

export default function Blog({pathname, data, error}) {
  if (!data) return <Error statusCode={404} />

  if (!data.isPostPage){
    return (
      <Layout route={pathname}>
        <BlogMainPage posts={data.list} randomPost={data.randomPost}/>
      </Layout>
    );
  }

  if (data.isPostPage){
    return (
      <Layout route={pathname}>
        <Post
          previous={data.previous}
          post={data.document}
          next={data.next}
          related={data.related}
          randomPost={data.randomPost}/>
      </Layout>
    );
  }

  return null;
}


Blog.getInitialProps = async ({pathname, query}) => {
  const {slug} = query

  try {
    const {list} = await require(`../content/index.json`);
    let data = {
      isPostPage: false,
      list,
      randomPost: getRandom(list)
    }
    
    if (slug) {
      let currentPostIndex;
      list.map((post,i) => {
        if(post.slug === slug) {
          currentPostIndex = i
        }
      });

      data = {
        ...data,
        isPostPage: true,
        document: await getPost({slug}),
        previous: list[currentPostIndex - 1],
        next: list[currentPostIndex + 1],
      }

      // Get related posts if exist
      try {
        const {posts} = await require(`../content/${data.document.data.tags[0]}.json`)
        const relatedPosts = posts.filter(post=> post.slug !== data.document.data.slug)
        data = {
          ...data,
          related: {
            posts: relatedPosts,
          }
        }
        console.log('asdasdadas')
      } catch(e) {console.error('we could not provide related posts')}
    }
    
    return {pathname, data};

  } catch (error) {
    console.error(error)
    return {error}
  }
}

async function getPost({slug}) {
  const content = await require(`../content/${slug}.md`)
  return matter(content.default)
}