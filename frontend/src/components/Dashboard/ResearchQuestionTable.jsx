import { useState } from 'react';
import Notification from '../Shared/Notification';
import axios from 'axios';
import ResearchQuestionField from './ResearchQuestionField';

export default function ScreeningTable(props) {
  const addRelevanceFields = (papers) => {
    return papers.map((paper) => ({
      ...paper,
      title_relevance: 'Untagged',
      abstract_relevance: 'Untagged',
    }));
  };

  const [papers, setPapers] = useState(addRelevanceFields(props.papers));
  const [researchQuestions, setResearchQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [screening, setScreening] = useState(false);
  const [showScreeningNotification, setShowScreeningNotification] =
    useState(false);
  const [showSaveToLibraryNotification, setShowSaveToLibraryNotification] =
    useState(false);

  const lambdaUrl = import.meta.env.VITE_LAMBDA_URL;
  // console.log(props.papers);
  const openPdf = (href) => {
    window.open(href, '_blank');
  };

  const handleAddResearchQuestion = () => {
    if (currentQuestion.trim()) {
      setResearchQuestions([...researchQuestions, currentQuestion]);
      setCurrentQuestion('');
    }
  };

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

  const handleScreening = async () => {
    setScreening(true);
    const json = {
      uid: props.user?.uid,
      data: papers,
      searchQuery: props.searchQuery,
      researchQuestions: researchQuestions,
    };

    const response = await axios.post(
      `${lambdaUrl}/screenForResearchQuestions`,
      json
    );
    // console.log(json);
    const returnedData = response.data;
    const transformedData = transformFullTextScreenedData(returnedData);
    // console.log(returnedData);
    props.setFullTextScreeningDone(true);
    props.setFullTextScreenedResults(returnedData);
    setScreening(false);
  };

  return (
    <div>
      <div className="sm:flex-row sm:items-center">
        <div className="mt-2">
          <ResearchQuestionField
            researchQuestion={currentQuestion}
            setResearchQuestion={setCurrentQuestion}
          />{' '}
        </div>
        <div className="flex gap-x-4 sm:justify-start sm:mt-6">
          <button
            type="button"
            onClick={handleAddResearchQuestion}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
          >
            {'Add research question'}
          </button>
          <button
            type="button"
            onClick={handleScreening}
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
          >
            {/* {'Start screening'} */}
            {screening ? 'Screening..' : 'Star screening'}
          </button>
        </div>
      </div>

      {/* Research Questions Table */}
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
                    No.
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-m font-semibold text-gray-900 sm:pl-6 text-center"
                  >
                    RESEARCH QUESTIONS (RQs)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white text-center">
                {researchQuestions.map((researchQuestion, index) => (
                  <tr key={researchQuestion}>
                    <td className="py-4 pl-4 pr-3 text-sm font-semibold text-blue-600 sm:pl-6">
                      RQ {index + 1}
                    </td>
                    <td className="whitespace-normal break-words max-w-xs py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      <p>{researchQuestion}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="flex items-center justify-center">
        <Notification
          showNotification={showScreeningNotification}
          setShowNotification={setShowScreeningNotification}
          headingText={'Papers have been screened!'}
        />
      </div>
      <div className="flex items-center justify-center">
        <Notification
          showNotification={showSaveToLibraryNotification}
          setShowNotification={setShowSaveToLibraryNotification}
          headingText={'Papers have been saved to library!'}
        />
      </div>
    </div>
  );
}
