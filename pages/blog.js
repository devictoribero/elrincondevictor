import matter from 'gray-matter';
import Error from './_error'
import {Layout} from '../components/layout/Layout';
import {BlogMainPage} from '../components/layout/BlogMainPage';
import {Post} from '../components/layout/Post';

export default function Blog({data, related, error}) {
  if (!data) return <Error statusCode={404} />

  if(data.featured){
    return <Layout><BlogMainPage featured={data.featured}/></Layout>;
  }

  if(data.document){
    return <Layout><Post post={data.document} related={data.related}/></Layout>;
  }

  return null;
}


Blog.getInitialProps = async ({query}) => {
  const {slug} = query

  try {
    let data = {};

    if(slug) {
      const content = await require(`../content/${slug}.md`)
      const document = matter(content.default)
      data.document = document;

      // Get related posts if exist
      const {posts} = await require(`../content/${document.data.tags[0]}.json`)
      const relatedPosts = posts.filter(post=> post.slug !== document.data.slug)
      data.related = { posts: relatedPosts };

      return { data };
    }
    
    const {featured} = await require(`../content/index.json`)
    data.featured = featured;
    return {data};

  } catch (error) {
    console.log(error)
    return {error}
  }
}