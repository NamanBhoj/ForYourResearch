import React from 'react';

function RelevanceChip(props) {
  const chipClass = props.relevant
    ? 'bg-green-100 text-green-700'
    : 'bg-red-100 text-red-700';

  const chipText = props.relevant ? 'Relevant' : 'Irrelevant';

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${chipClass}`}
    >
      {chipText}
    </span>
  );
}

export default RelevanceChip;
