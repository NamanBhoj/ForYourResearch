import Analyse from '../assets/svg/Analyse';
import Answer from '../assets/svg/Answer';
import Collect from '../assets/svg/Collect';

const features = [
  {
    title: 'We Collect',
    description:
      'Our AI agent, takes your input and goes to the knowledge sources to collect relevant papers in your own database, which you can then annotate easily by you.',
    svgComponent: <Collect />,
  },
  {
    title: 'We Analyse',
    description:
      'Based on what information you are looking for in papers our AI agent analyses papers and gives you the final set of most relevant papers. ',
    svgComponent: <Analyse />,
  },
  {
    title: 'We Answer',
    description: 'Finally we tell you which collected papers answers your Research Question and generate Relevant Citations making it easier for you to write.'
      ,
    svgComponent: <Answer />,
  },
  {
    title: 'We Summarise and Report',
    description: 'We summarise and generate report of the key findings of your Research Questions from the Literature Review, and generate key insights like Future work and Open Questions.'
      ,
    svgComponent: <Answer />,
  },
];

function App() {
  return (
    <div className="w-screen py-12 bg-gray-100">

      <div id="what-we-do" className="space-y-12 px-4 md:px-12 lg:px-24 mt-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800">How we do it!</h1>
          <p className="text-lg text-gray-600 mt-4">
            Fastest way to conduct your Literature Reviews.
          </p>
          <div className="w-24 h-1 mx-auto bg-indigo-600 mt-4 rounded"></div>
        </div>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg border border-neutral-300 hover:shadow-2xl transition transform duration-500 hover:-tranneutral-y-2 hover:scale-105 w-full rounded-lg overflow-hidden"
          >
            <div className="w-full md:w-1/5 p-6 order-2 md:order-1 flex flex-col items-start">
              <h2 className="text-4xl animate-pulse font-bold mb-4 text-left text-neutral-800">
                {feature.title}
              </h2>
              <p className="text-neutral-700 font-semibold text-xl text-left">
                {feature.description}
              </p>
            </div>
            <div className="w-full md:w-4/5 flex justify-center items-center bg-neutral-100 p-6 order-1 md:order-2">
              {feature.svgComponent}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
