import matter from 'gray-matter';
import Error from './_error'
import {randomElement} from '../helpers/random';
import {Layout} from '../components/layout/Layout';
import {BlogMainPage} from '../components/pages/BlogMainPage';
import {Post} from '../components/pages/Post';

export default function Blog({data, error}) {
  if (!data) return <Error statusCode={404} />

  if(data.featured){
    return <Layout><BlogMainPage featured={data.featured} randomPost={data.randomPost}/></Layout>;
  }

  if(data.document){
    return <Layout><Post post={data.document} related={data.related} randomPost={data.randomPost}/></Layout>;
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
      data.related = {};

      // Get related posts if exist
      try {
        const {posts} = await require(`../content/${document.data.tags[0]}.json`)
        const relatedPosts = posts.filter(post=> post.slug !== document.data.slug)
        data.related.posts = relatedPosts;
      } catch(e) { console.error('we could not provide related posts')}

      const {list} = await require(`../content/index.json`)
      const randomPost = randomElement(list);
      data.randomPost  = randomPost;
      
      return { data };
    }
    
    const {featured, list} = await require(`../content/index.json`)
    const randomPost = randomElement(list);
    data.featured = featured;
    data.randomPost = randomPost;
    return {data};

  } catch (error) {
    console.log(error)
    return {error}
  }
}