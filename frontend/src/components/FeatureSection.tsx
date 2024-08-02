import Analyse from '../assets/svg/Analyse';
import Answer from '../assets/svg/Answer';
import Collect from '../assets/svg/Collect';

const features = [
  {
    title: 'Collect',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aut quis? Tempora asperiores enim autem fugit? Rem, quo ipsam. Dolores corrupti odio esse saepe magni corporis ea incidunt, consequatur alias.',
    svgComponent: <Collect />,
  },
  {
    title: 'Analyse',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aut quis? Tempora asperiores enim autem fugit? Rem, quo ipsam. Dolores corrupti odio esse saepe magni corporis ea incidunt, consequatur alias.',
    svgComponent: <Analyse />,
  },
  {
    title: 'Answer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aut quis? Tempora asperiores enim autem fugit? Rem, quo ipsam. Dolores corrupti odio esse saepe magni corporis ea incidunt, consequatur alias.',
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
            className="flex flex-col md:flex-row items-center bg-white shadow-lg border border-slate-300 hover:shadow-2xl transition transform duration-500 hover:-translate-y-2 hover:scale-105 w-full rounded-lg overflow-hidden"
          >
            <div className="w-full md:w-1/5 p-6 order-2 md:order-1 flex flex-col items-start">
              <h2 className="text-4xl font-bold mb-4 text-left text-gray-800">
                {feature.title}
              </h2>
              <p className="text-slate-700 text-xl text-left">
                {feature.description}
              </p>
            </div>
            <div className="w-full md:w-4/5 flex justify-center items-center bg-slate-100 p-6 order-1 md:order-2">
              {feature.svgComponent}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
