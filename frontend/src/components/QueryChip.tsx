function QueryChip(props: any) {
  if (!props.text) return null;

  return (
    <span className="inline-flex items-center min-w-0 max-w-fit gap-x-2 rounded-md bg-green-200 px-2 py-1 text-sm font-medium text-black ring-1 ring-inset ring-green-600/20">
      {props.text}
      <button
        type="button"
        className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-red-200"
        onClick={() => props.handleDelete(props.text)}
      >
        <span className="sr-only">Remove</span>
        <svg
          viewBox="0 0 14 14"
          className="h-3.5 w-3.5 stroke-red-700 group-hover:stroke-red-700"
        >
          <path d="M4 4l6 6m0-6l-6 6" />
        </svg>
      </button>
    </span>
  );
}

export default QueryChip;
