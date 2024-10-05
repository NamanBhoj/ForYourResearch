import { useEffect, useState } from 'react';
import { useUserAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import RelevanceDropdown from '../Shared/RelevanceDropdown';
import SortByDropdown from '../Shared/SortByDropdown';
import Loader from '../Shared/Loader';
import Autocomplete from '../Autocomplete';
import { XCircleIcon } from '@heroicons/react/16/solid';
import LibraryTable from './LibraryTable';
import StatsTable from './StatsTable';

export default function Library() {
  // const { user, signOut } = useUserAuth();
  const lambdaUrl = import.meta.env.VITE_LAMBDA_URL;

  // const lambdaUrl = 'http://127.0.0.1:8000';

  const [loading, setLoading] = useState(false);

  const [queryInputValue, setQueryInputValue] = useState('');
  const [selectedQuery, setSelectedQuery] = useState('');
  const [fetchedQueryArray, setFetchedQueryArray] = useState([]);
  const [error, setError] = useState(false);
  const [papersToDisplay, setPapersToDisplay] = useState([]);
  const [activeTable, setActiveTable] = useState('collection');
  const [paperSources, setPaperSources] = useState({});

  const { user } = useUserAuth();

  useEffect(() => {
    const fetchUserLibrary = async () => {
      setLoading(true);
      const response = await axios.get(
        `${lambdaUrl}/fetchAllQueries/?uid=${user?.uid}`
      );
      const papersArray = response.data;
      setFetchedQueryArray(papersArray);
      setLoading(false);
    };

    fetchUserLibrary();
  }, [user?.uid]);

  const getTotalNumberOfPapers = () => {
    return papersToDisplay.length >= 1000 ? 1000 : papersToDisplay.length;
  };

  const handleRelevanceChange = async (title, relevance) => {
    const clonedPapersToDisplay = [...papersToDisplay];

    const updatedPapers = clonedPapersToDisplay.map((paper) => {
      if (paper.title === title) {
        return { ...paper, relevance: relevance };
      }
      return paper;
    });
    setPapersToDisplay(updatedPapers);
    const json = {
      title: title,
      relevance_value: relevance,
      uid: user.uid,
      search_query: selectedQuery,
    };
    // console.log(json);
    await axios.post(`${lambdaUrl}/updatePaperRelevance`, json);
  };

  const handleLoadPapers = async () => {
    if (fetchedQueryArray.includes(queryInputValue)) {
      setSelectedQuery(queryInputValue);
      const json = {
        uid: user.uid,
        search_query: queryInputValue,
      };
      const response = await axios.post(
        `${lambdaUrl}/fetchPapersRelatedToQuery`,
        json
      );
      const papers = response.data;
      // console.log(papers);

      setPapersToDisplay(papers);
      const paperSources = getPaperSources(papers);
      setPaperSources(paperSources);
      console.log(paperSources);
      // console.setError(false);
    } else {
      setError(true);
    }
  };

  const openPdf = (href) => {
    window.open(href, '_blank');
  };

  const sortRelevantFirst = () => {
    handleSortByRelevance({
      Relevant: 0,
      Uncertain: 1,
      Irrelevant: 2,
      Untagged: 3,
    });
  };

  const sortUncertainFirst = () => {
    handleSortByRelevance({
      Relevant: 1,
      Uncertain: 0,
      Irrelevant: 2,
      Untagged: 3,
    });
  };

  const sortIrrelevantFirst = () => {
    handleSortByRelevance({
      Relevant: 2,
      Uncertain: 1,
      Irrelevant: 0,
      Untagged: 3,
    });
  };

  const handleSortByRelevance = (sortOrder) => {
    const sortedPapers = [...papersToDisplay].sort((a, b) => {
      const relevanceA = a.relevance || 'Untagged';
      const relevanceB = b.relevance || 'Untagged';

      return sortOrder[relevanceA] - sortOrder[relevanceB];
    });
    setPapersToDisplay(sortedPapers);
  };

  const getPaperSources = (papers) => {
    let res = {};
    papers.forEach((paper) => {
      const url = paper.url;
      if (url != null) {
        try {
          const parsedUrl = new URL(url);
          const hostname = parsedUrl.hostname;
          const domain = hostname
            .replace(/^www\./, '')
            .split('.')
            .slice(0, -1)
            .join('.');
          const obj = { domain, hostname };
          const key = JSON.stringify(obj);
          res[key] = (res[key] || 0) + 1;
        } catch (error) {
          console.error(`Invalid URL: ${url}`);
        }
      }
    });
    // console.log(res);
    return res;
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-12">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="text-center mb-4">
              <p className="text-gray-700 text-lg font-semibold">
                Start typing to search and select from your saved searches
                below:
              </p>
            </div>

            <div className="flex items-center space-x-2 w-full max-w-3xl">
              <div className="flex-grow">
                <Autocomplete
                  options={fetchedQueryArray}
                  setQueryInputValue={setQueryInputValue}
                  setPapersToDisplay={setPapersToDisplay}
                />
              </div>
              <button
                type="button"
                onClick={handleLoadPapers}
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
              >
                Load
              </button>
            </div>
            {error && (
              <div className="rounded-md bg-red-50 py-2 px-4 mt-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <XCircleIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-red-400"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      The entered search query does not exist in your library,
                      please enter a valid search query that you had previously
                      saved.
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {papersToDisplay.length > 0 && (
        <div className="bg-white py-10 ">
          <div className="mx-auto max-w-7xl mb-4">
            <div className="flex justify-center">
              <div className="bg-neutral-100 rounded-lg border px-4 py-2 sm:px-6 lg:px-8 flex space-x-4">
                <button
                  className={`px-4 py-2 text-sm font-semibold rounded transition-colors duration-300 ${
                    activeTable === 'stats'
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-neutral-200 text-gray-700 hover:bg-neutral-300'
                  }`}
                  onClick={() => setActiveTable('stats')}
                >
                  Stats
                </button>
                <button
                  className={`px-4 py-2 text-sm font-semibold rounded transition-colors duration-300 ${
                    activeTable === 'collection'
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-neutral-200 text-gray-700 hover:bg-neutral-300'
                  }`}
                  onClick={() => setActiveTable('collection')}
                >
                  Collection
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="bg-neutral-100 rounded-lg border px-4 sm:px-6 lg:px-8">
              <div className=" mr-2 flex flex-row-reverse sm:flex sm:items-center">
                {/* add text for table info */}
                <div className="z-20 mt-auto">
                  {' '}
                  {/* <SortByDropdown
                    handleSortByRelevant={sortRelevantFirst}
                    handleSortByUncertain={sortUncertainFirst}
                    handleSortByIrrelevant={sortIrrelevantFirst}
                  /> */}
                </div>

                <div className="flex flex-col items-start mr-auto space-y-2 mt-4">
                  <div className="flex items-center space-x-2"></div>

                  <span className="text-m font-semibold text-gray-800">
                    Total papers:{' '}
                    <span className="font-normal">
                      {getTotalNumberOfPapers()}
                    </span>
                  </span>
                </div>
              </div>
              {activeTable === 'collection' ? (
                <div>
                  <div className="mr-2 flex flex-row-reverse sm:flex sm:items-center">
                    <div className="mr-auto">
                      {/* <span className="mt-2 inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-m font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {`Top ${getTotalNumberOfPapers()} papers`}
                      </span> */}
                    </div>
                  </div>
                  <LibraryTable papers={papersToDisplay} />
                </div>
              ) : activeTable === 'stats' ? (
                <StatsTable paperSources={paperSources} />
              ) : (
                ''
              )}
              {/* {<LibraryTable papers={papersToDisplay} />} */}
              {/* <StatsTable papers={papersToDisplay} /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
