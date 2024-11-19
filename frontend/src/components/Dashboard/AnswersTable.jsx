import { useState, useMemo, useEffect } from 'react';
import Notification from '../Shared/Notification';
import axios from 'axios';

export default function ScreeningTable(props) {
  const [transformedResults, setTransformedResults] = useState([]);
  const [screening, setScreening] = useState(false);
  const lambdaUrl = import.meta.env.VITE_LAMBDA_URL;

  useEffect(() => {
    if (props.fullTextScreenedResults) {
      const transformedData = transformFullTextScreenedData(
        props.fullTextScreenedResults
      );
      setTransformedResults(transformedData);
    }
  }, [props.fullTextScreenedResults]);

  function transformFullTextScreenedData(input) {
    const result = [];

    input.forEach((paperObj) => {
      const paperTitle = Object.keys(paperObj)[0];
      const questionsObj = paperObj[paperTitle];
      const questions = [];

      // Iterate over questions and filter out any "No answer found."
      for (const question in questionsObj) {
        const answers = questionsObj[question];
        if (!answers.includes('No answer found.')) {
          questions.push(question);
        }
      }

      // Format the paper title to use it as the key (removing the ".pdf.md" suffix)
      const formattedTitle = paperTitle.replace('.pdf.md', '') + '.pdf';
      if (questions.length > 0) {
        result.push({ [formattedTitle]: questions });
      }
    });

    return result;
  }

  // Generate unique RQs and assign each a unique RQ number
  const uniqueResearchQuestions = useMemo(() => {
    const questionMap = new Map();
    let counter = 1;

    // Iterate over all research questions in all results to map unique RQs to RQ numbers
    transformedResults.forEach((result) => {
      const questions = Object.values(result)[0];
      questions.forEach((question) => {
        if (!questionMap.has(question)) {
          questionMap.set(question, `RQ ${counter}`);
          counter++;
        }
      });
    });

    return questionMap;
  }, [transformedResults]);

  function extractRqAnswers(data, title) {
    const result = [];
    const paperTitle = title; // Use the title directly as expected in the input data

    console.log('Extracting RQ Answers:', { data, title });

    // Iterate over each paper object to find the target paper by title
    data.forEach((paperObj) => {
      const paperObjTitle = Object.keys(paperObj)[0];
      if (paperObjTitle === paperTitle) {
        const questionsObj = paperObj[paperObjTitle];
        const rqResult = {};

        Object.entries(questionsObj).forEach(([question, answers]) => {
          const answerSegments = [];

          answers.forEach((answer) => {
            if (answer !== 'No answer found.') {
              try {
                // Parse JSON if the answer is in JSON format
                const parsedAnswer = JSON.parse(answer);
                parsedAnswer.choices.forEach((choice) => {
                  const content = choice.content.replace(/\\n/g, '').trim();
                  answerSegments.push(content);
                });
              } catch (e) {
                // If not JSON, add the raw answer text
                answerSegments.push(answer.trim());
              }
            }
          });

          // Add answers to the RQ key if there are any valid segments
          if (answerSegments.length > 0) {
            rqResult[question] = answerSegments;
          }
        });

        // Append each RQ answer grouping for the paper to the final result
        result.push(rqResult);
      }
    });

    return result;
  }

  const handlePaperClick = async (paper) => {
    const json = {
      title: paper,
      search_query: props.searchQuery,
      uid: props.user?.uid,
    };

    try {
      const response = await axios.post(`${lambdaUrl}/getHtml`, json);
      const md = response.data;
      const formattedTitle = paper.replace(/\.html$/, '').replace(/\.pdf$/, '');

      console.log('Formatted Title for Matching:', formattedTitle);
      const rqData = extractRqAnswers(
        props.fullTextScreenedResults,
        formattedTitle
      );
      console.log('Extracted rqData:', rqData);

      // Save data to sessionStorage
      sessionStorage.setItem('htmlContent', md);
      sessionStorage.setItem('rqData', JSON.stringify(rqData));

      // Open new tab
      window.open(`/view-paper`, '_blank');
    } catch (error) {
      console.error('Error fetching paper data:', error);
      Notification.error('Failed to load paper. Please try again later.');
    }
  };

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
                {transformedResults.map((result, index) => {
                  const [paper, questions] = Object.entries(result)[0];
                  return (
                    <tr key={index}>
                      <td className="whitespace-normal break-words max-w-xs py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <button
                          onClick={() => handlePaperClick(paper)}
                          href=""
                          class="text-blue-500 text-md hover:underline hover:text-blue-700 transition duration-300"
                        >
                          {paper}
                        </button>
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
