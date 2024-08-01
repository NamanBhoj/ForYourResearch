import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import Navbar from '../components/Navbar';
function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-32 text-center mx-8 md:mx-20 lg:mx-40">
        <MainSection />
        <FeatureSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
