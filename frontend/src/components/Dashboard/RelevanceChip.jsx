import React from 'react';

function RelevanceChip(props) {
  const chipClass =
    props.relevant === 'Relevant'
      ? 'bg-green-100 text-green-700'
      : props.relevant === 'Irrelevant'
      ? 'bg-red-100 text-red-700'
      : '';

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${chipClass}`}
    >
      {props.relevant}
    </span>
  );
}

export default RelevanceChip;
