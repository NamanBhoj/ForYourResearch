export default function KeywordInputField(props: any) {
  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setKeyword(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Keyword
      </label>
      <div className="mt-2">
        <input
          value={props.keyword}
          onChange={handleKeyword}
          id="keyword"
          name="keyword"
          placeholder='"medical imaging" "CT scan"...'
          className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
