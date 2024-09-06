import { useEffect, useState } from 'react';
import { useUserAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import RelevanceDropdown from '../Shared/RelevanceDropdown';
import SortByDropdown from '../Shared/SortByDropdown';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../Shared/Loader';
import Autocomplete from '../Autocomplete';
import { XCircleIcon } from '@heroicons/react/16/solid';

export default function Library() {
  // const { user, signOut } = useUserAuth();
  const lambdaUrl =
    'https://cnycft3yloelqv7wobyjbwahsy0ofgpy.lambda-url.us-east-2.on.aws';

  const [loading, setLoading] = useState(false);

  // const [paperRelevance, setPaperRelevance] = useState<Record<string, string>>(
  //   {}
  // );
  const [paperRelevance, setPaperRelevance] = useState({});
  const [paperObj, setPaperObj] = useState([]);
  const [queryInputValue, setQueryInputValue] = useState('');
  // using these
  const [selectedQuery, setSelectedQuery] = useState('');
  const [fetchedQueryArray, setFetchedQueryArray] = useState([]);
  const [error, setError] = useState(false);

  const { user } = useUserAuth();

  useEffect(() => {
    const fetchUserLibrary = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${lambdaUrl}/fetchUserLibrary/?uid=${user?.uid}`
        );

        const modifiedData = response.data.map((paper) => ({
          ...paper,
          uniqueKey: uuidv4(),
        }));

        let resObj = {};
        let queryArray = [];
        modifiedData.forEach((item) => {
          if (item.data.data) {
            resObj[item.searchQuery] = item.data.data;
            queryArray.push(item.searchQuery);
          }
        });

        setFetchedQueryArray(queryArray);
        setPaperObj(resObj);
      } catch (error) {
        console.error('Error fetching user library:', error);
      } finally {
        // Delay to ensure the loader is shown
        setTimeout(() => {
          setLoading(false);
        }, 500); // Adjust delay as necessary
      }
    };

    fetchUserLibrary();
  }, [user?.uid]);

  // const handleLogout = async () => {
  //   try {
  //     await signOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getTotalNumberOfPapers = () => {
    return paperObj[selectedQuery].length >= 1000
      ? 1000
      : paperObj[selectedQuery].length;
  };

  const handleRelevanceChange = (paperId, relevance) => {
    setPaperRelevance((prevRelevance) => ({
      ...prevRelevance,
      [paperId]: relevance,
    }));
  };

  const handleLoadPapers = () => {
    if (fetchedQueryArray.includes(queryInputValue)) {
      setSelectedQuery(queryInputValue);
      setError(false);
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
      Unselected: 3,
    });
  };

  const sortUncertainFirst = () => {
    handleSortByRelevance({
      Relevant: 1,
      Uncertain: 0,
      Irrelevant: 2,
      Unselected: 3,
    });
  };

  const sortIrrelevantFirst = () => {
    handleSortByRelevance({
      Relevant: 2,
      Uncertain: 1,
      Irrelevant: 0,
      Unselected: 3,
    });
  };

  const handleSortByRelevance = (sortOrder) => {
    const sortedData = paperObj[selectedQuery].sort((a, b) => {
      return sortOrder[a.relevance] - sortOrder[b.relevance];
    });

    setPaperObj((prevPaperObj) => ({
      ...prevPaperObj,
      data: sortedData,
    }));
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mb-32 mt-12">
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

      {selectedQuery && (
        <div className="bg-white py-10">
          <div className="mx-auto max-w-7xl">
            <div className="bg-neutral-100 rounded-lg border px-4 sm:px-6 lg:px-8">
              <div className=" mr-2 flex flex-row-reverse sm:flex sm:items-center">
                {/* add text for table info */}
                <div className="z-20 mt-4">
                  {' '}
                  <SortByDropdown
                    handleSortByRelevant={sortRelevantFirst}
                    handleSortByUncertain={sortUncertainFirst}
                    handleSortByIrrelevant={sortIrrelevantFirst}
                  />
                </div>

                <div className="flex flex-col items-start mr-auto space-y-2 mt-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-m font-semibold text-gray-800">
                      Query:
                    </span>
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-m mt-auto font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {selectedQuery}
                    </span>{' '}
                  </div>

                  <span className="text-m font-semibold text-gray-800">
                    Total papers:{' '}
                    <span className="font-normal">
                      {getTotalNumberOfPapers()}
                    </span>
                  </span>
                </div>
              </div>
              <div className="mt-8 flow-root">
                <div className="border rounded-lg shadow  overflow-auto max-h-[700px] max-w-full">
                  <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-neutral-50 sticky top-0 z-10">
                        <tr>
                          <th
                            scope="col"
                            className="py-2 pl-3 pr-2 text-left text-sm font-semibold text-neutral-900 sm:pl-4"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="hidden px-2 py-2 text-center text-sm font-semibold text-neutral-900 sm:table-cell max-w-[200px] truncate"
                          >
                            Abstract
                          </th>
                          <th
                            scope="col"
                            className="z-auto hidden px-2 py-2 text-center text-sm font-semibold text-neutral-900 lg:table-cell max-w-[100px] truncate"
                          >
                            <div className="flex items-center justify-center">
                              Relevance
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody className="bg-white divide-y divide-neutral-300 bg-neutral-50">
                        {selectedQuery &&
                          paperObj[selectedQuery].map((paper) => {
                            return (
                              <tr
                                //using uuidv4 because some papers were overlapping in the entire library array
                                //so nothing was unique among all papers
                                key={paper.uniqueKey}
                                className="hover:bg-neutral-50 transition-colors duration-150"
                              >
                                <td className="py-3 pl-3 pr-2 text-sm font-medium text-neutral-900 sm:pl-4 max-w-[100px] align-top">
                                  <a
                                    className="cursor-pointer font-medium text-blue-950 underline hover:text-blue-800 dark:text-blue-500 hover:no-underline"
                                    rel="noopener noreferrer"
                                    onClick={() =>
                                      openPdf(paper.openAccessPdf?.url || '')
                                    }
                                  >
                                    {paper.title}
                                  </a>
                                </td>
                                <td className="hidden px-2 py-3 text-sm text-black sm:table-cell max-w-[200px]">
                                  {paper.abstract}
                                </td>

                                <td className="py-3 pl-2 pr-3 text-center text-sm font-medium sm:pr-4 max-w-[50px] align-top">
                                  <RelevanceDropdown
                                    relevance={paper.relevance}
                                    isDisabled={true}
                                  />
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
          </div>
        </div>
      )}
    </>
  );
}
