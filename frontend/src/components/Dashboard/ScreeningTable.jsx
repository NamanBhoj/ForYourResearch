import { useState } from 'react';
import RelevanceDropdown from '../Shared/RelevanceDropdown';
import axios from 'axios';

export default function ScreeningTable(props) {
  const [papers, setPapers] = useState(props.papers);
  const [screening, setScreening] = useState(false);

  const lambdaUrl = import.meta.env.VITE_LAMBDA_URL;

  const openPdf = (href) => {
    window.open(href, '_blank');
  };

  const handleRelevanceChange = async (title, newRelevance, relevanceType) => {
    const clonedPapers = [...papers];

    const updatedPapers = clonedPapers.map((paper) => {
      if (paper.title === title) {
        let updatedPaper = { ...paper, [relevanceType]: newRelevance };

        if (
          relevanceType === 'title_relevance' &&
          newRelevance === 'Irrelevant'
        ) {
          updatedPaper = { ...updatedPaper, abstract_relevance: 'Irrelevant' };
        }
        return updatedPaper;
      }
      return paper;
    });

    setPapers(updatedPapers);
  };

  const handleStartScreening = async () => {
    setScreening(true);
    const json = {
      uid: props.user?.uid,
      data: papers,
      searchQuery: props.searchQuery,
    };
    const response = await axios.post(
      `${lambdaUrl}/screenTitlesAndAbstracts`,
      json
    );
    const updatedPapers = response.data;
    setPapers(updatedPapers);
    setScreening(false);
    console.log(updatedPapers);
  };

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
            onClick={handleStartScreening}
            disabled={screening}
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
          >
            {screening ? 'Screening..' : 'Start screening'}
          </button>
        </div>
      </div>
      {/* test */}
      <div className="mt-8 flow-root">
        <div className="border rounded-lg shadow overflow-auto max-h-[700px] max-w-full">
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
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {papers.map((paper) => (
                  <tr key={paper.title}>
                    <td className="whitespace-normal break-words max-w-xs py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      <a
                        className="cursor-pointer font-medium text-blue-950 underline hover:text-blue-800 dark:text-blue-500 hover:no-underline"
                        rel="noopener noreferrer"
                        onClick={() => openPdf(paper.link)}
                      >
                        {paper.title}
                      </a>
                    </td>
                    <td className="py-3 pl-2 pr-3 text-center text-sm font-medium sm:pr-4 max-w-[50px] align-top">
                      <RelevanceDropdown
                        relevance={paper.title_relevance}
                        onRelevanceChange={(newRelevance) =>
                          handleRelevanceChange(
                            paper.title,
                            newRelevance,
                            'title_relevance'
                          )
                        }
                      />
                    </td>
                    <td className="py-3 pl-2 pr-3 text-center text-sm font-medium sm:pr-4 max-w-[50px] align-top">
                      <RelevanceDropdown
                        relevance={paper.abstract_relevance}
                        onRelevanceChange={(newRelevance) =>
                          handleRelevanceChange(
                            paper.title,
                            newRelevance,
                            'abstract_relevance'
                          )
                        }
                      />
                    </td>
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
