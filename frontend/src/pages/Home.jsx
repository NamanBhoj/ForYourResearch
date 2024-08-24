import Footer from '../components/Layout/Footer';
import MainSection from '../components/MainSection';
import Navbar from '../components/Layout/Navbar';
import FeatureSection from '../components/FeatureSection/FeatureSection';

function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center mt-32 text-center mx-8 md:mx-20 lg:mx-24">
        <MainSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
