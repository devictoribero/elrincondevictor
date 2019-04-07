import matter from 'gray-matter';
import Error from './_error'
import {randomElement} from '../helpers/random';
import {Layout} from '../components/layout/Layout';
import {BlogMainPage} from '../components/pages/BlogMainPage';
import {Post} from '../components/pages/Post';

export default function Blog({data, error}) {
  if (!data) return <Error statusCode={404} />

  if(!data.isPostPage){
    return (
      <Layout>
        <BlogMainPage featured={data.featured} randomPost={data.randomPost}/>
      </Layout>
    );
  }

  if(data.isPostPage){
    return (
      <Layout>
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


Blog.getInitialProps = async ({query}) => {
  const {slug} = query

  try {
    const {featured, list} = await require(`../content/index.json`);
    let data = {
      isPostPage: false,
      featured,
      randomPost: randomElement(list)
    }
    
    if(slug) {
      let currentPostIndex;
      list.map((post,i) => {
        if(post.slug === slug) {
          currentPostIndex = i
        }
      })

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
      } catch(e) {console.error('we could not provide related posts')}
    }
    
    return {data};

  } catch (error) {
    console.log(error)
    return {error}
  }
}

async function getPost({slug}) {
  const content = await require(`../content/${slug}.md`)
  return matter(content.default)
}