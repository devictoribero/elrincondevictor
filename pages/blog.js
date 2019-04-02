import matter from 'gray-matter';
import Error from './_error'
import {BlogMainPage} from '../components/layout/BlogMainPage'
import {Post} from '../components/layout/Post'

export default function Blog({data, error}) {
  if (!data) return <Error statusCode={404} />

  if(data.list){
    return <BlogMainPage list={data.list}/>
  }

  if(data.document){
    return <Post post={data.document} />
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
      return {data};
    }
    
    const {list} = await require(`../content/index.json`)
    data.list = list;
    return {data};

  } catch (error) {
    console.log(error)
    return {error}
  }
}