import matter from 'gray-matter';
import Error from './_error'
import {Layout} from '../components/layout/Layout';
import {BlogMainPage} from '../components/layout/BlogMainPage';
import {Post} from '../components/layout/Post';

export default function Blog({data, error}) {
  if (!data) return <Error statusCode={404} />

  if(data.list){
    return <Layout><BlogMainPage list={data.list}/></Layout>;
  }

  if(data.document){
    return <Layout><Post post={data.document} /></Layout>;
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