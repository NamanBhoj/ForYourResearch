import FeatureCard from './FeatureCard';

function FeatureSection() {
  const collectionFeatureCardContent = {
    heading: 'Collect',
    content:
      'Collect papers we collect papers we collect papers we collect papers we collect papers we collect papers we collect papers',
  };

  const analysisFeatureCardContent = {
    heading: 'Analyze',
    content:
      'Analyze your research papers analyze your research papers analyze your research papers analyze your research papers analyze your research papers',
  };

  const answerFeatureCardContent = {
    heading: 'Answer',
    content:
      'Answer your research questions answer your research questions answer your research questions answer your research questions answer your research questions',
  };

  return (
    <div className="flex flex-col items-center mt-14 mb-8">
      <span className="mt-24 text-5xl font-extrabold text-slate-900">
        What we do
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-7xl sm:px-6 lg:px-8">
        <FeatureCard
          heading={collectionFeatureCardContent.heading}
          content={collectionFeatureCardContent.content}
        />
        <FeatureCard
          heading={analysisFeatureCardContent.heading}
          content={analysisFeatureCardContent.content}
        />
        <FeatureCard
          heading={answerFeatureCardContent.heading}
          content={answerFeatureCardContent.content}
        />
      </div>
    </div>
  );
}

export default FeatureSection;
