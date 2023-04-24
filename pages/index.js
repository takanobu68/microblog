import styles from '@/styles/Home.module.css';
import Layout from '../components/Layout';

import utilStyle from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <section>
        <p className={utilStyle.headingMd}>私はエンジニアです。</p>
      </section>
      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href={'/'}>
              <img
                src='/images/thumbnail01.jpg'
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href={'/'} className={utilStyle.boldText}>
              SSGとSSRの使い分け
            </Link>
            <br />
            <small className={utilStyle.lightText}>2020年</small>
          </article>
          <article>
            <Link href={'/'}>
              <img
                src='/images/thumbnail01.jpg'
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href={'/'} className={utilStyle.boldText}>
              SSGとSSRの使い分け
            </Link>
            <br />
            <small className={utilStyle.lightText}>2020年</small>
          </article>
          <article>
            <Link href={'/'}>
              <img
                src='/images/thumbnail01.jpg'
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href={'/'} className={utilStyle.boldText}>
              SSGとSSRの使い分け
            </Link>
            <br />
            <small className={utilStyle.lightText}>2020年</small>
          </article>
          <article>
            <Link href={'/'}>
              <img
                src='/images/thumbnail01.jpg'
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href={'/'} className={utilStyle.boldText}>
              SSGとSSRの使い分け
            </Link>
            <br />
            <small className={utilStyle.lightText}>2020年</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
