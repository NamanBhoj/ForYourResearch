import { useEffect, useState } from 'react';
import { useUserAuth } from '../../contexts/AuthContext';
import QueryInputField from './QueryInputField';
import KeywordChip from './KeywordChip';
import axios from 'axios';
import RelevanceDropdown from '../Shared/RelevanceDropdown';
import QueryChip from './QueryChip';
import SortByDropdown from '../Shared/SortByDropdown';
import Loader from '../Shared/Loader';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Library() {
  const lambdaUrl =
    'https://cnycft3yloelqv7wobyjbwahsy0ofgpy.lambda-url.us-east-2.on.aws';

  const [keyword, setKeyword] = useState('');
  // const [keywordList, setKeywordList] = useState([]);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [paperObj, setPaperObj] = useState({ data: [], total: 0 });
  const [saving, setSaving] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [fetchedQuery, setFetchedQuery] = useState('');
  const [papers, setPapers] = useState([]);
  const { user } = useUserAuth();

  useEffect(() => {
    const fetchSavedSearchData = async () => {
      try {
        const response = await axios.get(
          `${lambdaUrl}/getCurrentSearchData/?uid=${user?.uid}`
        );
        const json = response.data;

        setPapers(json.papers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSavedSearchData();
    console.log(user.uid);
  }, [user?.uid]);

  // const handleAddKeyword = () => {
  //   if (keyword.trim() !== '') {
  //     const updatedKeywordList = [...keywordList, keyword];
  //     setKeywordList(updatedKeywordList);
  //     setQuery(updatedKeywordList.join(' '));
  //     setKeyword('');
  //   }
  // };

  const handleSearch = async () => {
    setSearching(true);

    const response = await axios.get(
      `${lambdaUrl}/search/?query=${query}&limit=100`
    );

    // This is to get the body of the response from the API
    // The body of the response will only contain an array of the papers now so can directly map it to display
    const json = response.data;

    // Setting the papers array that will be displayed in the table
    setPapers(json);

    await handleSaveCurrentData(json);

    setSearching(false);
    // console.log(response);
  };

  // const handleDelete = (chip) => {
  //   const updatedKeywordList = keywordList.filter(
  //     (keyword) => keyword !== chip
  //   );
  //   setKeywordList(updatedKeywordList);
  //   setQuery(updatedKeywordList.join(' '));
  // };

  // const handleDeleteQuery = () => {
  //   setKeywordList([]);
  //   setQuery('');
  // };

  const handleRelevanceChange = (paperId, relevance) => {
    const updatedPapers = papers.map((paper) => {
      if (paper.paperId === paperId) {
        return { ...paper, Relevance: relevance };
      }
      return paper;
    });
    console.log(updatedPapers);
    setPapers(updatedPapers);
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
    const sortedPapers = [...papers].sort((a, b) => {
      const relevanceA = a.Relevance || 'Untagged';
      const relevanceB = b.Relevance || 'Untagged';

      return sortOrder[relevanceA] - sortOrder[relevanceB];
    });

    setPapers(sortedPapers);
  };

  const handleSaveToLibrary = async () => {
    setSaving(true);

    const json = {
      uid: user?.uid,
      data: papers,
      searchQuery: query,
    };
    console.log("LOGGING THE QUERY")
    console.log(query)
    const response = await axios.post(`${lambdaUrl}/saveToLibrary`, json);
    setSaving(false);
    setShowNotification(true);

    console.log(response);
  };

  const handleSaveCurrentData = async (papers) => {
    const json = {
      uid: user?.uid,
      data: papers,
      searchQuery: query,
    };
    await axios.post(`${lambdaUrl}/saveCurrentSearchData`, json);
  };

  // const getKeyword = () => {
  //   if (fetchedQuery && keyword === '') {
  //     return fetchedQuery;
  //   }
  //   return keyword;
  // };

  return (
    <>
      {/* SEARCH CARD */}
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-center">
          <div className="max-w-4xl w-full flex items-center space-x-4">
            <div className="divide-y divide-neutral-200 overflow-hidden rounded-lg shadow border border-neutral-300 w-full">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <QueryInputField
                      keyword={query}
                      setKeyword={setQuery}
                    />
                    {/* <textarea
                      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="Text1"
                      cols="40"
                      rows="2"
                    ></textarea> */}
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
                    onClick={handleSearch}
                    disabled={searching}
                  >
                    {searching ? 'Searching' : 'Search'}
                  </button>
                </div>
              </div>
              {/* <div className="px-4 py-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {keywordList.map((keyword, index) => (
                    <KeywordChip
                      key={index}
                      text={keyword}
                      handleDelete={handleDelete}
                    />
                  ))}
                </div>
              </div> */}
              {/* <div className="px-4 py-5 sm:p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-grow">
                      <div className="flex flex-col space-y-2">
                        <span className="text-sm font-medium text-gray-600">
                          Full Search Query:
                        </span>
                        <QueryChip
                          handleDelete={handleDeleteQuery}
                          text={query}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
                      onClick={handleSearch}
                      disabled={searching}
                    >
                      {searching ? 'Searching' : 'Search'}
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {searching && (
        <div className="mt-12 flex justify-center">
          <Loader />
        </div>
      )}
      {/* TABLE */}
      {papers.length > 0 && (
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
                <button
                  type="button"
                  className="mt-auto mr-2 rounded bg-green-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleSaveToLibrary}
                  disabled={saving}
                >
                  {saving ? 'Saving..' : 'Save to library'}
                </button>{' '}
                <div className="mr-auto">
                  <span className="mt-2 inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-m font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    Total Papers: {papers.length}
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
                          {/* <th
                            scope="col"
                            className="hidden px-2 py-2 pb-24 text-center text-sm font-semibold text-neutral-900 lg:table-cell max-w-[100px] truncate"
                          >
                            Year
                          </th> */}
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
                        {papers &&
                          papers.map((paper) => (
                            <tr
                              key={paper.paperId}
                              className="hover:bg-neutral-50 transition-colors duration-150"
                            >
                              <td className="py-3 pl-3 pr-2 text-sm font-medium text-neutral-900 sm:pl-4 max-w-[100px] align-top">
                                <a
                                  className="cursor-pointer font-medium text-blue-950 underline hover:text-blue-800 dark:text-blue-500 hover:no-underline"
                                  // href={paper.openAccessPdf?.url || ''}
                                  // target="_blank"
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
                                  relevance={paper.Relevance}
                                  onRelevanceChange={(newRelevance) =>
                                    handleRelevanceChange(
                                      paper.paperId,
                                      newRelevance
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
          </div>
        </div>
      )}
      {/* Notification */}
      <div className="flex justify-center items-center">
        <Transition
          show={showNotification}
          as="div"
          enter="transition duration-300 transform"
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition duration-300 transform"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="-translate-y-full opacity-0"
          className="fixed top-0 inset-x-0 pt-4 z-50 ml-[20%]"
        >
          <div className="mx-auto max-w-lg rounded-lg bg-green-100 p-4 shadow-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircleIcon
                  className="h-6 w-6 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">
                  Papers have been stored to library!
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setShowNotification(false)}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}
