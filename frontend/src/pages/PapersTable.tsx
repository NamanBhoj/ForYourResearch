import { useState } from 'react';
// import { useUserAuth } from '../contexts/AuthContext';
import KeywordInputField from '../components/KeywordInputField';
import KeywordChip from '../components/KeywordChip';
import axios from 'axios';
import RelevanceDropdown from '../components/RelevanceDropdown';
import QueryChip from '../components/QueryChip';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import SortByDropdown from '../components/SortByDropdown';

export default function Library() {
  interface Paper {
    title: string;
    paperId: string;
    abstract: string;
    openAccessPdf: { url: string; status: string };
    year: number;
  }

  interface PaperResponse {
    data: Paper[];
  }
  // const { user, signOut } = useUserAuth();
  const [keyword, setKeyword] = useState('');
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  // const [papers, setPapers] = useState<any[]>([]);
  const [paperRelevance, setPaperRelevance] = useState<Record<string, string>>(
    {}
  );
  const [paperObj, setPaperObj] = useState<PaperResponse>({ data: [] });

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
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/search/?query=${keywordList.join('+')}`
      );
      setPaperObj(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching papers:', error);
    }
  };

  const handleDelete = (chip: string) => {
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

  const handleRelevanceChange = (paperId: string, relevance: string) => {
    setPaperRelevance((prevRelevance) => ({
      ...prevRelevance,
      [paperId]: relevance,
    }));
  };

  const handleSortByRelevance = (): void => {
    type Relevance = 'Relevant' | 'Uncertain' | 'Irrelevant' | 'Unselected';
    const sortOrder = {
      Relevant: 0,
      Uncertain: 1,
      Irrelevant: 2,
      Unselected: 3,
    };

    const sortedData = paperObj.data.sort((a, b) => {
      const relevanceA = (paperRelevance[a.paperId] ||
        'Unselected') as Relevance;
      const relevanceB = (paperRelevance[b.paperId] ||
        'Unselected') as Relevance;

      return sortOrder[relevanceA] - sortOrder[relevanceB];
    });

    setPaperObj((prevPaperObj) => ({
      ...prevPaperObj,
      data: sortedData,
    }));
  };

  return (
    <>
      {/* SEARCH CARD */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-center">
          <div className="max-w-lg w-full flex items-center space-x-4">
            <div className="divide-y divide-slate-200 overflow-hidden rounded-lg shadow border border-slate-300 w-full">
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
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                {/* add text for table info */}
              </div>
              <div className="mt-8 flow-root">
                <div className="border rounded-lg shadow  overflow-auto max-h-[700px] max-w-full">
                  <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-slate-200 sticky top-0 z-10">
                        <tr>
                          <th
                            scope="col"
                            className="py-2 pl-3 pr-2 text-left text-sm font-semibold text-slate-900 sm:pl-4"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="hidden px-2 py-2 text-center text-sm font-semibold text-slate-900 sm:table-cell max-w-[200px] truncate"
                          >
                            Abstract
                          </th>
                          <th
                            scope="col"
                            className="hidden px-2 py-2 text-center text-sm font-semibold text-slate-900 lg:table-cell max-w-[100px] truncate"
                          >
                            Year
                          </th>
                          <th
                            scope="col"
                            className="z-auto hidden px-2 py-2 text-center text-sm font-semibold text-slate-900 lg:table-cell max-w-[100px] truncate"
                          >
                            <div className="flex items-center justify-center">
                              Relevance
                              {/* <SortByDropdown /> */}
                              <ChevronDownIcon
                                onClick={handleSortByRelevance}
                                aria-hidden="true"
                                className="cursor-pointer hover:bg-slate-100 hover:rounded-lg hover:text-slate-900 ml-1 h-5 w-5 text-slate-400"
                              />
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody className="bg-white divide-y divide-slate-300 bg-slate-50">
                        {paperObj.data.map((paper) => (
                          <tr
                            key={paper.paperId}
                            className="hover:bg-slate-50 transition-colors duration-150"
                          >
                            <td className="py-3 pl-3 pr-2 text-sm font-medium text-slate-900 sm:pl-4 max-w-[100px] align-top">
                              <a
                                className="font-medium text-blue-950 underline hover:text-blue-800 dark:text-blue-500 hover:no-underline"
                                href={paper.openAccessPdf?.url || ''}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {paper.title}
                              </a>
                            </td>
                            <td className="hidden px-2 py-3 text-sm text-black sm:table-cell max-w-[200px]">
                              {paper.abstract}
                            </td>
                            <td className="hidden text-center px-2 py-3 text-sm text-black lg:table-cell max-w-[100px] truncate align-top">
                              {paper.year}
                            </td>
                            <td className="py-3 pl-2 pr-3 text-center text-sm font-medium sm:pr-4 max-w-[50px] align-top">
                              <RelevanceDropdown
                                relevance={
                                  (paperRelevance[paper.paperId] as any) ||
                                  'Unselected'
                                }
                                onRelevanceChange={(newRelevance: any) =>
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
      )}{' '}
      <SortByDropdown />
    </>
  );
}
