function KeywordChip(props: any) {
  return (
    <span className="inline-flex items-center gap-x-0.5 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
      {props.text}
      <button
        type="button"
        className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-green-600/20"
      >
        <span className="sr-only">Remove</span>
        <svg
          viewBox="0 0 14 14"
          className="h-3.5 w-3.5 stroke-green-700/50 group-hover:stroke-green-700/75"
        >
          <path d="M4 4l6 6m0-6l-6 6" />
        </svg>
        <span
          className="absolute -inset-1"
          onClick={() => props.handleDelete(props.text)}
        />
      </button>
    </span>
  );
}

export default KeywordChip;
