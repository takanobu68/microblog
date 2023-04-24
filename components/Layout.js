import Head from 'next/head';
import styles from './Layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Shin Code';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <img src='/images/profile.png' className={utilStyles.borderCircle} />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        <main>{children}</main>
      </header>
    </div>
  );
};

export default Layout;
