function MainSection() {
  const handleScroll = () => {
    const section = document.getElementById('what-we-do');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="!scroll-smooth">
        <div className="text-center mb-14 mt-12">
          <h1 className="text-7xl font-bold text-slate-900 mb-4">
            Automating tedious parts of literature reviews
          </h1>
          <p className="text-lg font-bold text-slate-700 mb-8 mt-2">
            Save time, effort and avoid frustration while conducting Literature
            Reviews
          </p>

          <a href="https://app.youform.com/forms/pvtbohr1" target="_blank">
            <button
              type="button"
              className="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get early access!
            </button>
          </a>
        </div>

        <div className="flex justify-center mt-32 mb-44">
          <button
            onClick={handleScroll}
            className="animate-bounce flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default MainSection;
