import React from 'react';

function SearchTable(props) {
  const openPdf = (href) => {
    window.open(href, '_blank');
  };

  return (
    <div className="mt-8 flow-root">
      <div className="border rounded-lg shadow  overflow-auto max-h-[700px] max-w-[1400px]">
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
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-300 bg-neutral-50">
              {props.papers &&
                props.papers.map((paper) => {
                  return (
                    <tr
                      key={paper.paperId}
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
                        <span>
                          <div className="mt-2 text-red-500 font-bold">
                            Year: {paper.year}
                          </div>
                        </span>
                      </td>
                      <td className="hidden px-2 py-3 text-sm text-black sm:table-cell max-w-[200px]">
                        {paper.abstract}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SearchTable;
