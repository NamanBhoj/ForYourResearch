import { useState } from 'react';
import RelevanceDropdown from '../Shared/RelevanceDropdown';
import Notification from '../Shared/Notification';

import axios from 'axios';
import RelevanceChip from './RelevanceChip';

export default function ScreeningTable(props) {
  const addRelevanceFields = (papers) => {
    return papers.map((paper) => ({
      ...paper,
      title_relevance: 'Untagged',
      abstract_relevance: 'Untagged',
    }));
  };
  const [papers, setPapers] = useState(addRelevanceFields(props.papers));
  const [screening, setScreening] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showScreeningNotification, setShowScreeningNotification] =
    useState(false);
  const [showSaveToLibraryNotification, setShowSaveToLibraryNotification] =
    useState(false);
  const [manualScreenedPapers, setManualScreenedPapers] = useState([]);
  const [screeningDone, setScreeningDone] = useState(false);
  const lambdaUrl = import.meta.env.VITE_LAMBDA_URL;
  console.log(props.papers);
  const openPdf = (href) => {
    window.open(href, '_blank');
  };

  // const handleRelevanceChange = async (title, newRelevance, relevanceType) => {
  //   const clonedPapers = [...papers];

  //   const updatedPapers = clonedPapers.map((paper) => {
  //     if (paper.title === title) {
  //       let updatedPaper = { ...paper, [relevanceType]: newRelevance };
  //       if (
  //         relevanceType === 'title_relevance' &&
  //         newRelevance === 'Irrelevant'
  //       ) {
  //         updatedPaper = { ...updatedPaper, abstract_relevance: 'Irrelevant' };
  //       }
  //       return updatedPaper;
  //     }
  //     return paper;
  //   });

  //   setPapers(updatedPapers);
  // };

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
    setAbstractScreenedPapers(updatedPapers);
    setScreening(false);
    setScreeningDone(true);
    setShowSaveToLibraryNotification(false);
    setShowScreeningNotification(true);
    console.log(updatedPapers);
  };

  const setAbstractScreenedPapers = (updatedPapers) => {
    let screenedPapers = [];
    for (let paper of updatedPapers) {
      if (paper.abstract_relevance === 'Relevant') {
        screenedPapers.push(paper);
      }
    }
    props.setAbstractScreenedPapers(screenedPapers);
  };

  const handleSaveToLibrary = async () => {
    setSaving(true);
    const json = {
      uid: props.user?.uid,
      data: papers,
      searchQuery: props.searchQuery,
    };
    // console.log(json);
    await axios.post(`${lambdaUrl}/saveToLibrary`, json);
    setSaving(false);
    setShowScreeningNotification(false);
    setShowSaveToLibraryNotification(true);
  };

  const handleManualScreening = (paper) => {
    setManualScreenedPapers((prevPapers) => {
      if (prevPapers.includes(paper)) {
        props.setAbstractScreenedPapers((prevAbstractPapers) =>
          prevAbstractPapers.filter((p) => p !== paper)
        );
        return prevPapers.filter((p) => p !== paper);
      } else {
        props.setAbstractScreenedPapers((prevAbstractPapers) => [
          ...prevAbstractPapers,
          paper,
        ]);
        return [...prevPapers, paper];
      }
    });

    setTimeout(() => {
      console.log(manualScreenedPapers);
    }, 0);
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
        <div className="flex gap-x-4 sm:justify-start sm:mt-6">
          <button
            type="button"
            onClick={handleStartScreening}
            disabled={screening}
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
          >
            {screening ? 'Screening..' : 'Start screening'}
          </button>
          <button
            type="button"
            onClick={handleSaveToLibrary}
            disabled={saving}
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
          >
            {saving ? 'Saving..' : 'Save to library'}
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
                      TOTAL COUNT:{' '}
                      <span className="text-blue-600">{papers.length}</span>
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
                  {screeningDone && (
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      ADD/REMOVE PAPERS MANUALLY
                    </th>
                  )}
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
                      {manualScreenedPapers.includes(paper) ? (
                        <RelevanceChip relevant="Relevant (Manually Marked)" />
                      ) : (
                        <RelevanceChip relevant={paper.title_relevance} />
                      )}
                      {/* <RelevanceDropdown
                        relevance={paper.title_relevance}
                        onRelevanceChange={(newRelevance) =>
                          handleRelevanceChange(
                            paper.title,
                            newRelevance,
                            'title_relevance'
                          )
                        }
                      /> */}
                    </td>
                    <td className="py-3 pl-2 pr-3 text-center text-sm font-medium sm:pr-4 max-w-[50px] align-top">
                      {manualScreenedPapers.includes(paper) ? (
                        <RelevanceChip relevant="Relevant (Manually Marked)" />
                      ) : (
                        <RelevanceChip relevant={paper.abstract_relevance} />
                      )}

                      {/* <RelevanceDropdown
                        relevance={paper.abstract_relevance}
                        onRelevanceChange={(newRelevance) =>
                          handleRelevanceChange(
                            paper.title,
                            newRelevance,
                            'abstract_relevance'
                          )
                        }
                      /> */}
                    </td>
                    {paper.abstract_relevance === 'Irrelevant' ? (
                      <td className="py-3 pl-2 pr-3 text-center text-sm font-medium sm:pr-4 max-w-[50px] align-top">
                        <button
                          type="button"
                          onClick={() => handleManualScreening(paper)}
                          className={`rounded px-2 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                            manualScreenedPapers.includes(paper)
                              ? 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600'
                              : 'bg-green-600 hover:bg-green-500 focus-visible:outline-green-600'
                          }`}
                        >
                          {manualScreenedPapers.includes(paper)
                            ? 'Remove'
                            : 'Add'}
                        </button>
                      </td>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
