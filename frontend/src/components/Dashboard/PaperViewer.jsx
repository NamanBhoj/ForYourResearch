import React from 'react';

const PaperView = ({ htmlContent }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow-lg max-w-full mx-auto mt-16"
      style={{ height: '85vh', width: '100%' }} // Adjust width and height as needed
    >
      <div
        className="overflow-y-auto h-full p-6" // Ensure content area is scrollable
        dangerouslySetInnerHTML={{ __html: htmlContent }} // Render raw HTML
      />
    </div>
  );
};

export default PaperView;
