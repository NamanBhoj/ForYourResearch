import React from 'react';

function StatsTable(props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Paper Sources
      </h2>
      <div className="max-h-[500px] overflow-y-auto">
        <div className="space-y-4">
          {Object.entries(props.paperSources).map(([source, count]) => (
            <div
              key={source}
              className="bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:bg-gray-200 transition-colors duration-200"
            >
              <span className="text-gray-700 font-medium">{source}</span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-semibold">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsTable;
