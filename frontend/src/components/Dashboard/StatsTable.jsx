import React, { useState } from 'react';

function StatsTable(props) {
  const [copied, setCopied] = useState(false);

  const sortedPaperSources = Object.entries(props.paperSources).sort(
    ([keyA, countA], [keyB, countB]) => countB - countA
  );

  const handleCopy = () => {
    const paperSourcesString = sortedPaperSources
      .map(([key, count]) => {
        const { domain } = JSON.parse(key);
        return `${domain} : ${count}`;
      })
      .join('\n');
    navigator.clipboard.writeText(paperSourcesString);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 flex justify-between items-center">
        Paper Sources
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-auto"
          disabled={copied}
        >
          {copied ? 'Copied' : 'Copy to clipboard'}
        </button>
      </h2>
      <div className="max-h-[500px] overflow-y-auto">
        <div className="space-y-4">
          {sortedPaperSources.map(([key, count]) => {
            const { domain, hostname } = JSON.parse(key);
            return (
              <div
                key={key}
                className="bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:bg-gray-200 transition-colors duration-200"
              >
                <a
                  href={`https://${hostname}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer font-medium text-blue-950 underline hover:text-blue-800 dark:text-blue-500 hover:no-underline"
                >
                  {domain}
                </a>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-semibold">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StatsTable;
