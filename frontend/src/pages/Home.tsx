import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import Navbar from '../components/Navbar';
import FeatureSection from '../components/FeatureSection';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-32 text-center mx-8 md:mx-20 lg:mx-24">
        <MainSection />
        <FeatureSection />
        {/* <FeatureSection /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
