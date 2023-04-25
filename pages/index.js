import styles from '@/styles/Home.module.css';
import Layout from '../components/Layout';

import utilStyle from '../styles/utils.module.css';
import Link from 'next/link';
import { getPostsData } from '../lib/post';

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section>
        <p className={utilStyle.headingMd}>私はエンジニアです。</p>
      </section>
      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map((post) => (
            <article key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <img src={post.thumbnail} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${post.id}`} className={utilStyle.boldText}>
                {post.title}
              </Link>
              <br />
              <small className={utilStyle.lightText}>{post.date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
