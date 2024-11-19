// MarkdownViewer.jsx
import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const MarkdownViewer = ({ markdown }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-7xl h-5/6 overflow-y-auto bg-white shadow-md rounded-xl p-8 prose prose-lg">
        <Markdown rehypePlugins={[rehypeRaw]}>{markdown}</Markdown>
      </div>
    </div>
  );
};

export default MarkdownViewer;
