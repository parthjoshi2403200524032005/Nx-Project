import Head from 'next/head';
import Home from './home.jsx';


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page - HealthMudraa</title>
        <meta name="description" content="Welcome to HealthMudraa" />
        <link rel="canonical" href="/" />
      </Head>
      <Home />
    </>
  );
}

