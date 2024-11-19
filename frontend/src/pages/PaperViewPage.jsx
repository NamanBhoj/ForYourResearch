import React, { useState, useEffect } from 'react';
import { HiChevronDown, HiOutlineChevronRight } from 'react-icons/hi';
import { FaArrowDown } from 'react-icons/fa';
import PaperViewer from '../components/Dashboard/PaperViewer';

const colorPalette = [
  'text-red-500', // RQ1 color
  'text-green-500', // RQ2 color
  'text-blue-500', // RQ3 color
  'text-yellow-500', // RQ4 color
  'text-purple-500', // RQ5 color
  'text-pink-500', // RQ6 color
];

const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
};

const modifyHtmlContent = (htmlContent, rqData) => {
  let modifiedContent = htmlContent;
  rqData.forEach((rq, index) => {
    const rqColor = colorPalette[index % colorPalette.length]; // Get a color from the palette
    Object.entries(rq).forEach(([rqKey, texts]) => {
      texts.forEach((text, textIndex) => {
        const id = `${rqKey.toLowerCase()}-text-${textIndex + 1}`;
        const spanTag = `<span id="${id}" class="${rqColor} font-semibold">${text}</span>`;
        const escapedText = escapeRegExp(text); // Escape the text
        const regex = new RegExp(escapedText, 'g');
        modifiedContent = modifiedContent.replace(regex, spanTag);
      });
    });
  });
  return modifiedContent;
};

const PaperViewPage = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [rqData, setRqData] = useState([]);

  useEffect(() => {
    // Retrieve data from sessionStorage
    const storedHtmlContent = sessionStorage.getItem('htmlContent');
    const storedRqData = sessionStorage.getItem('rqData');

    if (storedHtmlContent) setHtmlContent(storedHtmlContent);
    if (storedRqData) setRqData(JSON.parse(storedRqData));

    // Clean up sessionStorage
    return () => {
      sessionStorage.removeItem('htmlContent');
      sessionStorage.removeItem('rqData');
    };
  }, []);

  const modifiedHtmlContent = modifyHtmlContent(htmlContent, rqData);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Dynamically initialize state to expand the first RQ by default
  const [expanded, setExpanded] = useState(() => {
    const initialExpandedState = {};
    rqData.forEach((rq, index) => {
      const rqKey = Object.keys(rq)[0]; // Get the key of the current RQ
      initialExpandedState[rqKey] = index === 0; // Expand the first RQ by default
    });
    return initialExpandedState;
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-8 space-x-12">
      {/* Left RQ selectors panel */}
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-2">
          Research Questions
        </h2>
        <div className="w-full space-y-6 bg-white p-6 shadow-xl rounded-lg sticky top-8 overflow-y-auto max-h-[80vh]">
          {rqData.map((rq, index) => {
            const rqKey = Object.keys(rq)[0];
            const rqColor = colorPalette[index % colorPalette.length]; // Get the color for this RQ
            return (
              <div key={index} className="space-y-6">
                {/* Accordion header */}
                <div
                  onClick={() => toggleExpand(rqKey)}
                  className={`flex justify-between items-center cursor-pointer ${rqColor} px-4 py-2 rounded-lg bg-gray-100`}
                >
                  <h3 className="text-xl font-semibold">{rqKey}</h3>
                  {expanded[rqKey] ? (
                    <HiChevronDown className="text-black text-2xl" />
                  ) : (
                    <HiOutlineChevronRight className="text-black text-2xl" />
                  )}
                </div>

                {/* Accordion content */}
                <div
                  className={`space-y-2 ${
                    expanded[rqKey] ? 'block' : 'hidden'
                  }`}
                >
                  {rq[rqKey].map((text, idx) => (
                    <button
                      key={idx}
                      className={`w-full flex items-center px-4 py-3 bg-white text-${rqColor.slice(
                        5
                      )}-600 rounded-lg hover:bg-${rqColor.slice(
                        5
                      )}-100 focus:outline-none focus:ring-2 focus:ring-${rqColor.slice(
                        5
                      )}-300 transition-all`}
                      onClick={() =>
                        scrollToId(`${rqKey.toLowerCase()}-text-${idx + 1}`)
                      }
                    >
                      <FaArrowDown className="mr-2 text-gray-600" />
                      <span>{`Go to Text ${idx + 1}`}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* HTML Viewer */}
      <div className="w-3/4 flex flex-col h-[90vh]">
        <div className="">
          <PaperViewer htmlContent={modifiedHtmlContent} />
        </div>
      </div>
    </div>
  );
};

export default PaperViewPage;
