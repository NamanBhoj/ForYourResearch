import FeatureCard from './FeatureCard';
import Collect from "../assets/Collect.svg"
import Arrow from "../assets/Arrow.svg"
function FeatureSection() {
  const collectionFeatureCardContent = {
    heading: 'Collect',
    content:
      'Input your search string and let Zarathustra, our AI Agent powered by the State-of-Art Large Models find and collect relevant information from knowledge sources  ',
    image: Collect  
  };

  // const analysisFeatureCardContent = {
  //   heading: 'Analyze',
  //   content:
  //     'Analyze your research papers analyze your research papers analyze your research papers analyze your research papers analyze your research papers',
  // };

  // const answerFeatureCardContent = {
  //   heading: 'Answer',
  //   content:
  //     'Answer your research questions answer your research questions answer your research questions answer your research questions answer your research questions',
  // };

  return (
    <div className="flex flex-col items-center mt-14 mb-8">
      <span className="mt-24 text-5xl font-extrabold text-slate-900 animate">
        What we do
      </span>
      <img src={Arrow} alt="" className='animate-pulse' />
      <div className="mt-15 w-full max-w-7xl sm:px-6 lg:px-8">
        <FeatureCard
          heading={collectionFeatureCardContent.heading}
          content={collectionFeatureCardContent.content}
          image = {collectionFeatureCardContent.image}
        />
      </div>

     
      
      </div>

  
  );
}

export default FeatureSection;
