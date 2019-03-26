import Head from 'next/head';
import MainNavigation from '../components/MainNavigation'
import Post from '../components/Post';
import Footer from '../components/Footer';
import {post1} from '../config/post-example';

export default function Page({post}) {
  return (
    <div className="page">
      <Head>
        <title key="title">Elrincondevictor · Bienvenido a mi mente</title>
        <meta
          key="description"
          name="description"
          content="Productividad, reflexiones, cosas que aprendo y una filosofía de vida para tener una vida equilibrada."
        />
      </Head>

      <MainNavigation/>
      <Post post={post}/>
      <Footer/>

      <style jsx>{`
      `
      }</style>
    </div>
  )
}

Page.getInitialProps = async ({ req }) => {
  return { post: post1 };
};