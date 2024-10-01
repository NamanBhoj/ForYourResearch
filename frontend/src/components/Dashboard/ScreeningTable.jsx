import RelevanceChip from './RelevanceChip';

const papers = [
  {
    title: 'A paper on cross reality',
    link: 'https://tailwindui.com/components/application-ui/elements/badges',
    is_title_relevant: true,
    is_abstract_relevant: false,
  },
  {
    title: 'Exploring Quantum Computing in AI',
    link: 'https://quantum-computing.ai/research',
    is_title_relevant: true,
    is_abstract_relevant: true,
  },
  {
    title: 'Deep Learning for Natural Language Processing',
    link: 'https://nlp.ai/deep-learning',
    is_title_relevant: true,
    is_abstract_relevant: true,
  },
  {
    title: 'Blockchain Technology in Healthcare',
    link: 'https://blockchain.healthcare/paper',
    is_title_relevant: false,
    is_abstract_relevant: true,
  },
  {
    title: 'Augmented Reality in Retail',
    link: 'https://ar-retail.com/research',
    is_title_relevant: true,
    is_abstract_relevant: false,
  },
  {
    title: 'Cybersecurity Threats in Modern Web Applications',
    link: 'https://cybersecurity.research.web/paper',
    is_title_relevant: true,
    is_abstract_relevant: true,
  },
  {
    title: 'The Future of 5G Networks',
    link: 'https://5g.future.com/paper',
    is_title_relevant: false,
    is_abstract_relevant: false,
  },
  {
    title: 'The Role of AI in Predictive Maintenance',
    link: 'https://ai-predictive.com/maintenance-paper',
    is_title_relevant: true,
    is_abstract_relevant: true,
  },
  {
    title: 'Climate Change Modeling Using Neural Networks',
    link: 'https://climate-change.neuralnetworks.ai/paper',
    is_title_relevant: false,
    is_abstract_relevant: true,
  },
  {
    title: 'Advancements in Autonomous Vehicles',
    link: 'https://autonomous-vehicles.com/research',
    is_title_relevant: true,
    is_abstract_relevant: false,
  },
  {
    title: 'Genomics and Big Data: A New Era in Healthcare',
    link: 'https://genomics-bigdata.com/healthcare-paper',
    is_title_relevant: true,
    is_abstract_relevant: true,
  },
  {
    title: 'Ethical Considerations in AI',
    link: 'https://ethics.ai/paper',
    is_title_relevant: false,
    is_abstract_relevant: true,
  },
  {
    title: 'Virtual Reality in Education',
    link: 'https://vr-education.com/research',
    is_title_relevant: true,
    is_abstract_relevant: true,
  },
  {
    title: 'AI-Driven Drug Discovery',
    link: 'https://ai-drug-discovery.com/paper',
    is_title_relevant: true,
    is_abstract_relevant: false,
  },
  {
    title: 'Impact of Machine Learning on Climate Science',
    link: 'https://ml-climate-science.com/paper',
    is_title_relevant: false,
    is_abstract_relevant: true,
  },
  {
    title: 'Self-Supervised Learning in Computer Vision',
    link: 'https://ssl-computer-vision.com/research',
    is_title_relevant: true,
    is_abstract_relevant: true,
  },
  {
    title: 'Challenges of Data Privacy in AI Systems',
    link: 'https://dataprivacy.ai/research-paper',
    is_title_relevant: true,
    is_abstract_relevant: false,
  },
  {
    title: 'Wearable Devices in Healthcare',
    link: 'https://wearable-healthcare.com/paper',
    is_title_relevant: false,
    is_abstract_relevant: true,
  },
  {
    title: 'Quantum Cryptography for Secure Communications',
    link: 'https://quantum-cryptography.com/research',
    is_title_relevant: true,
    is_abstract_relevant: true,
  },
  {
    title: 'Applications of AI in Agriculture',
    link: 'https://ai-agriculture.com/paper',
    is_title_relevant: false,
    is_abstract_relevant: false,
  },
  {
    title: 'Sustainability and IoT in Smart Cities',
    link: 'https://iot-smartcities.com/research',
    is_title_relevant: true,
    is_abstract_relevant: true,
  },
  {
    title: 'AI for Personalized Medicine',
    link: 'https://ai-personalized-medicine.com/paper',
    is_title_relevant: true,
    is_abstract_relevant: true,
  },
  {
    title: 'The Impact of Robotics on the Manufacturing Industry',
    link: 'https://robotics-manufacturing.com/paper',
    is_title_relevant: false,
    is_abstract_relevant: true,
  },
];

const openPdf = (href) => {
  window.open(href, '_blank');
};

export default function Example() {
  return (
    <div>
      <div className="sm:flex-row sm:items-center">
        {/* <div>
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Screening
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Press the button to begin the screening process.
          </p>
        </div> */}
        <div className="mt-6">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
          >
            Start
          </button>
        </div>
      </div>
      {/* test */}
      <div className="mt-8 flow-root">
        <div className="border rounded-lg shadow  overflow-auto max-h-[700px] max-w-[1400px]">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-neutral-50 sticky top-0 z-10">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-m font-semibold text-gray-900 sm:pl-6"
                  >
                    COLLECTED PAPERS
                    <p className="mt-2 text-sm">
                      TOTAL COUNT: <span className="text-blue-600">{23}</span>
                    </p>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    TITLE SCREENING
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ABSTRACT SCREENING
                  </th>
                  {/* <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      FULL TEXT SCREENING
                    </th> */}
                  {/* <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {papers.map((paper) => (
                  <tr key={paper.title}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      <a
                        className="cursor-pointer font-medium text-blue-950 underline hover:text-blue-800 dark:text-blue-500 hover:no-underline"
                        rel="noopener noreferrer"
                        onClick={() => openPdf(paper.link)}
                      >
                        {paper.title}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <RelevanceChip relevant={paper.is_title_relevant} />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <RelevanceChip relevant={paper.is_abstract_relevant} />
                    </td>
                    {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                          Badge
                        </span>{' '}
                      </td> */}
                    {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
