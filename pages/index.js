import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home({posts}) {
  return (
    <>
      <h1>Home pageiadsfasfasdfa</h1>
      <ul>
        {posts.map((data, index) => {
          return (
            <>
              <li key={index}>
                <Link href={`/post/${data.id}`}>{data.title}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  console.log(posts);
  return {
    props: {
      posts: posts.slice(0,10)
    }
  }
}
