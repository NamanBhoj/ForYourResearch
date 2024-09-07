export default function KeywordInputField(props) {
  const handleKeyword = (e) => {
    props.setKeyword(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="keyword"
        className="block text-sm font-medium leading-6 text-neutral-900"
      >
        Enter your Search String
      </label>
      <div className="mt-2">
        <input
          value={props.keyword}
          onChange={handleKeyword}
          id="keyword"
          name="keyword"
          placeholder='("medical imaging" OR "Tumour") AND  ("Deep Learning" OR "Machine Learning") '
          className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
