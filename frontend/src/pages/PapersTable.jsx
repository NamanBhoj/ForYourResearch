import { useState } from 'react';
import { useUserAuth } from '../contexts/AuthContext';
import KeywordInputField from '../components/KeywordInputField';
import KeywordChip from '../components/KeywordChip';
import axios from 'axios';
import RelevanceDropdown from '../components/RelevanceDropdown';
import QueryChip from '../components/QueryChip';
import SortByDropdown from '../components/SortByDropdown';

export default function Library() {
  // const { user, signOut } = useUserAuth();
  const [keyword, setKeyword] = useState('');
  const [keywordList, setKeywordList] = useState([]);
  const [query, setQuery] = useState('');
  const [paperRelevance, setPaperRelevance] = useState({});

const [paperObj, setPaperObj] = useState({ data: [], total: 0 });

  const { user } = useUserAuth();

  // const handleLogout = async () => {
  //   try {
  //     await signOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleAddKeyword = () => {
    if (keyword.trim() !== '') {
      const updatedKeywordList = [...keywordList, keyword];
      setKeywordList(updatedKeywordList);
      setQuery(updatedKeywordList.join(' '));
      setKeyword('');
    }
  };

  const handleSearch = async () => {
    // try {
    const response = await axios.get(
      `http://127.0.0.1:8000/search/?query=${keywordList.join('+')}`
    );

    const data = response.data;
    const paperArray = data['papersArray'];
    const newPaperObj = {
      data: paperArray.map((paper) => ({
        ...paper,
        relevance: 'Untagged',
      })),
      total: data.length,
    };
    setPaperObj(newPaperObj);
    console.log(newPaperObj);
  };

  const handleDelete = (chip) => {
    const updatedKeywordList = keywordList.filter(
      (keyword) => keyword !== chip
    );
    setKeywordList(updatedKeywordList);
    setQuery(updatedKeywordList.join(' '));
  };

  const handleDeleteQuery = () => {
    setKeywordList([]);
    setQuery('');
  };

  const handleRelevanceChange = (paperId, relevance) => {
    setPaperRelevance((prevRelevance) => ({
      ...prevRelevance,
      [paperId]: relevance,
    }));

    const newPaperObj = {
      ...paperObj,
      data: paperObj.data.map((paper) =>
        paper.paperId === paperId ? { ...paper, relevance } : paper
      ),
    };

    setPaperObj(newPaperObj);
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
    const sortedData = paperObj.data.sort((a, b) => {
      const relevanceA = paperRelevance[a.paperId] || 'Untagged';
      const relevanceB = paperRelevance[b.paperId] || 'Untagged';

      return sortOrder[relevanceA] - sortOrder[relevanceB];
    });

    setPaperObj((prevPaperObj) => ({
      ...prevPaperObj,
      data: sortedData,
    }));
  };

  const getTotalNumberOfPapers = () => {
    return paperObj.data.length >= 1000 ? 1000 : paperObj.data.length;
  };

  const handleSaveToLibrary = async () => {
    const json = {
      uid: user?.uid,
      data: paperObj,
      searchQuery: query,
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/saveToLibrary/`,
      json
    );

    console.log(response);
  };

  return (
    <>
      {/* SEARCH CARD */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-center">
          <div className="max-w-lg w-full flex items-center space-x-4">
            <div className="divide-y divide-neutral-200 overflow-hidden rounded-lg shadow border border-neutral-300 w-full">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <KeywordInputField
                      keyword={keyword}
                      setKeyword={setKeyword}
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    onClick={handleAddKeyword}
                  >
                    Add Keyword
                  </button>
                </div>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {keywordList.map((keyword, index) => (
                    <KeywordChip
                      key={index}
                      text={keyword}
                      handleDelete={handleDelete}
                    />
                  ))}
                </div>
              </div>
              <div className="px-4 py-5 sm:p-6">
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
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TABLE */}
      {paperObj.data.length > 0 && (
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
                >
                  Save to library
                </button>{' '}
                <div className="mr-auto">
                  <span className="mt-2 inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-m font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    Total Papers: {getTotalNumberOfPapers()}
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
                        {paperObj &&
                          paperObj.data.map((paper) => (
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
                                  relevance={
                                    paperRelevance[paper.paperId] || 'Untagged'
                                  }
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
    </>
  );
}
