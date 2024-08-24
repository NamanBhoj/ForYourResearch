import { useEffect, useState } from 'react';
import { useUserAuth } from '../contexts/AuthContext';
import axios from 'axios';
import RelevanceDropdown from '../components/Shared/RelevanceDropdown';
import SortByDropdown from '../components/Shared/SortByDropdown';
import { v4 as uuidv4 } from 'uuid';
import SearchQueryDropdown from '../components/SearchQueryDropdown';
import Loader from './Shared/Loader';

export default function Library() {
  // const { user, signOut } = useUserAuth();
  const lambdaUrl = import.meta.env.VITE_LAMBDA_URL;
  const [loading, setLoading] = useState(false);

  // const [paperRelevance, setPaperRelevance] = useState<Record<string, string>>(
  //   {}
  // );
  const [paperRelevance, setPaperRelevance] = useState({});
  const [paperObj, setPaperObj] = useState([]);

  // using these
  const [selectedQuery, setSelectedQuery] = useState('');
  const [fetchedQueryArray, setFetchedQueryArray] = useState([]);

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
        // console.log(modifiedData);
        let res = [];
        let resObj = {};
        let queryArray = [];
        for (let i = 0; i < modifiedData.length; i++) {
          if (modifiedData[i].data.data != undefined) {
            res.push(modifiedData[i].data.data);
            // searchQuery : results
            resObj[modifiedData[i].searchQuery] = modifiedData[i].data.data;
            queryArray.push(modifiedData[i].searchQuery);
          } else {
            res.push(modifiedData[i].data);
          }
        }
        setFetchedQueryArray(queryArray);
        setPapersToDisplay(res);
        // console.log(res);
        setPaperObj(resObj);
        console.log(resObj);
      } catch (error) {
        console.error('Error fetching user library:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserLibrary();
  }, [user?.uid, setPaperObj]);

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

  // const getQueriesList = () => {};
  return (
    <>
      <div className="flex justify-center items-center mb-32 mt-12">
        {loading ? (
          <Loader />
        ) : (
          <SearchQueryDropdown
            queriesList={fetchedQueryArray}
            setSelectedQuery={setSelectedQuery}
          />
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

                <div className="flex flex-col items-start mr-auto space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-gray-800">
                      Query:
                    </span>
                    <span> {selectedQuery} </span>
                  </div>

                  <span className="text-lg font-semibold text-gray-800">
                    Total papers: {getTotalNumberOfPapers}
                  </span>
                  <span> {getTotalNumberOfPapers()} </span>
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
