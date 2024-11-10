import { useState, useMemo } from 'react';
import Notification from '../Shared/Notification';

export default function ScreeningTable(props) {
  const [showScreeningNotification, setShowScreeningNotification] =
    useState(false);
  const [showSaveToLibraryNotification, setShowSaveToLibraryNotification] =
    useState(false);

  // Helper to open a PDF
  const openPdf = (href) => {
    window.open(href, '_blank');
  };

  const fullTextScreenedResults = [
    {
      'paper_1.pdf': [
        'What future work can be conducted in virtual reality?',
        'What are the dangers of virtual reality?',
        'How does virtual reality impact social interactions?',
      ],
    },
    {
      'paper_2.pdf': [
        'How is virtual reality used in education?',
        'What are the dangers of virtual reality?',
      ],
    },
    {
      'paper_3.pdf': [
        'What future work can be conducted in virtual reality?',
        'How does virtual reality impact mental health?',
      ],
    },
    {
      'paper_4.pdf': [
        'What are the educational benefits of virtual reality?',
        'How can virtual reality be applied in medical training?',
      ],
    },
    {
      'paper_5.pdf': [
        'What are the psychological effects of virtual reality?',
        'How can virtual reality help with remote work?',
      ],
    },
    {
      'paper_6.pdf': [
        'What are the ethical concerns surrounding virtual reality?',
        'How does virtual reality enhance learning experiences?',
      ],
    },
    {
      'paper_7.pdf': [
        'What are the challenges in implementing virtual reality in schools?',
        'How can virtual reality impact physical therapy?',
      ],
    },
    {
      'paper_8.pdf': [
        'What is the future of virtual reality technology?',
        'What are the risks of addiction in virtual reality usage?',
      ],
    },
    {
      'paper_9.pdf': [
        'How can virtual reality improve collaboration in teams?',
        'What are the environmental impacts of virtual reality?',
      ],
    },
    {
      'paper_10.pdf': [
        'What role does virtual reality play in entertainment?',
        'How can virtual reality be used for mental health treatment?',
      ],
    },
    {
      'paper_11.pdf': [
        'What advancements are expected in virtual reality hardware?',
        'How can virtual reality be integrated into online education?',
      ],
    },
    {
      'paper_12.pdf': [
        'What is the impact of virtual reality on children’s development?',
        'How is virtual reality used in military training?',
      ],
    },
    {
      'paper_13.pdf': [
        'What are the privacy concerns with virtual reality?',
        'How can virtual reality be used for job training?',
      ],
    },
    {
      'paper_14.pdf': [
        'What are the potential dangers of virtual reality in gaming?',
        'How can virtual reality be used to simulate dangerous environments?',
      ],
    },
    {
      'paper_15.pdf': [
        'How does virtual reality impact human perception?',
        'What is the potential of virtual reality in marketing?',
      ],
    },
    {
      'paper_16.pdf': [
        'How can virtual reality enhance storytelling?',
        'What are the cognitive effects of prolonged virtual reality use?',
      ],
    },
    {
      'paper_17.pdf': [
        'What are the limitations of current virtual reality technology?',
        'How can virtual reality be used for remote healthcare consultations?',
      ],
    },
    {
      'paper_18.pdf': [
        'What role does virtual reality play in rehabilitation?',
        'How can virtual reality be used in architectural design?',
      ],
    },
    {
      'paper_19.pdf': [
        'What are the ethical implications of using virtual reality for research?',
        'How can virtual reality be used for public speaking training?',
      ],
    },
    {
      'paper_20.pdf': [
        'How does virtual reality affect user behavior?',
        'What are the future trends in virtual reality gaming?',
      ],
    },
    {
      'paper_21.pdf': [
        'What are the challenges in virtual reality content creation?',
        'How does virtual reality influence spatial awareness?',
      ],
    },
    {
      'paper_22.pdf': [
        'How can virtual reality improve empathy?',
        'What are the cognitive benefits of using virtual reality?',
      ],
    },
    {
      'paper_23.pdf': [
        'How is virtual reality being used in professional sports training?',
        'What are the social implications of virtual reality?',
      ],
    },
    {
      'paper_24.pdf': [
        'What is the relationship between virtual reality and artificial intelligence?',
        'How does virtual reality influence creativity?',
      ],
    },
    {
      'paper_25.pdf': [
        'What are the potential health risks of long-term virtual reality usage?',
        'How can virtual reality enhance the travel experience?',
      ],
    },
  ];

  // Generate unique RQs and assign each a unique RQ number
  const uniqueResearchQuestions = useMemo(() => {
    const questionMap = new Map();
    let counter = 1;

    // Iterate over all research questions in all results to map unique RQs to RQ numbers
    props.fullTextScreenedResults.forEach((result) => {
      const questions = Object.values(result)[0];
      questions.forEach((question) => {
        if (!questionMap.has(question)) {
          questionMap.set(question, `RQ ${counter}`);
          counter++;
        }
      });
    });

    return questionMap;
  }, [props.fullTextScreenedResults]);

  return (
    <div>
      {/* Lookup list for RQs */}
      <div className="mb-4 mt-4 max-h-[300px] overflow-y-auto bg-white p-4 border border-gray-200 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Research Question Lookup
        </h3>
        <ul className="list-none space-y-2">
          {[...uniqueResearchQuestions.entries()].map(
            ([question, rqNumber], index) => (
              <li
                key={index}
                className="text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-lg"
              >
                <span className="font-semibold text-blue-600">{rqNumber}:</span>{' '}
                {question}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Table for papers and research questions */}
      <div className="mt-8 flow-root mb-4">
        <div className="border rounded-lg shadow overflow-auto max-h-[700px] max-w-full">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-neutral-50 sticky top-0 z-10">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-m font-semibold text-gray-900 sm:pl-6 text-center"
                  >
                    PAPER
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    RESEARCH QUESTIONS ANSWERED BY PAPER
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {props.fullTextScreenedResults.map((result, index) => {
                  const [paper, questions] = Object.entries(result)[0];
                  return (
                    <tr key={index}>
                      <td className="whitespace-normal break-words max-w-xs py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <a
                          href=""
                          class="text-blue-500 text-md hover:underline hover:text-blue-700 transition duration-300"
                        >
                          {paper}
                        </a>
                      </td>
                      <td className="py-3 px-3 text-left text-sm font-medium max-w-[200px] align-top text-center">
                        <ul className="list-disc list-inside">
                          {questions.map((question, qIndex) => {
                            const rqNumber =
                              uniqueResearchQuestions.get(question);
                            return (
                              <li key={qIndex} className="text-green-600">
                                {rqNumber}
                              </li>
                            );
                          })}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
