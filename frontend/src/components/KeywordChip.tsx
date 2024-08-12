function KeywordChip(props: any) {
  return (
    <span className="mx-0.5 my-0.5 inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
      {props.text}
    </span>
  );
}

export default KeywordChip;
