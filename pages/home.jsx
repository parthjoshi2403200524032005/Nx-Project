// pages/home.jsx
import Head from "next/head";
import Howitworks from "../components/Howitworks";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Needhelp from "../components/Needhelp";
import Partners from "../components/Partners";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import HomePageVideos from "../components/HomePageVideos";
import { Mixpanel } from "../utils/MixPanel";
import NavBar from "../Components/NavBar";

const Home = ({ isMobile }) => {
  return (
    <>
      <Head>
        <title>HealthMudraa-HOME</title>
        <meta name="description" content="home page description comes here" />
        <link rel="canonical" href="/home" />
      </Head>
      <NavBar />
      <Hero />
      <Partners />
      <Howitworks />
      {!isMobile && (
        <>
          <HomePageVideos />
          <Pricing />
          <Needhelp />
          <FrequentlyAskedQuestions />
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  // Track the page view on the server side
  Mixpanel.track("hm_landing_page_viewed");

  // Determine if the user is on a mobile device (this example is simple, consider using more sophisticated methods)
  const userAgent = context.req.headers['user-agent'];
  const isMobile = /Mobile|Android/i.test(userAgent);

  return {
    props: { isMobile }, // Will be passed to the page component as props
  };
}

export default Home;
