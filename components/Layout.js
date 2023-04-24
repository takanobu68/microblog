import Head from 'next/head';

const name = 'Shin Code';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <img src='/images/profile.png' />
        <h1>{name}</h1>
        <main>{children}</main>
      </header>
    </div>
  );
};

export default Layout;
