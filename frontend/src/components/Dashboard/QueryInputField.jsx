import { useNavigate } from 'react-router-dom';

export default function QueryInputField(props) {
  const navigate = useNavigate();
  const handleKeyword = (e) => {
    props.setKeyword(e.target.value);
  };

  return (
    <div>
      <div className="flex">
        <label
          htmlFor="keyword"
          className="block text-sm font-medium leading-6 text-neutral-900"
        >
          Enter your search string
        </label>
        <a
          className="ml-2 mt-auto"
          target="_blank"
          href="/info"
        >
          {/* <Link to={'/info'}>info</Link> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            color = "red"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </a>
      </div>
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
