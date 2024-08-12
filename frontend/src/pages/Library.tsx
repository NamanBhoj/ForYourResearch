import { useState } from 'react';
import { useUserAuth } from '../contexts/AuthContext';
import KeywordInputField from '../components/KeywordInputField';
import KeywordChip from '../components/KeywordChip';

export default function Library() {
  const { user, signOut } = useUserAuth();
  const [keyword, setKeyword] = useState('');
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [query, setQuery] = useState('');

  const handleLogout = async () => {
    //setPending(true);
    try {
      await signOut();
    } catch (error) {
      console.log(error);
      //setPending(false);
    }
  };

  const people = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: user?.email,
      role: 'Member',
    },
    // More people...
  ];

  const handleAddKeyword = () => {
    if (keyword.trim() !== '') {
      const updatedKeywordList = [...keywordList, keyword];
      setKeywordList(updatedKeywordList);
      setQuery(updatedKeywordList.join(' '));
      setKeyword('');
    }
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-center">
          <div className="max-w-lg w-full flex items-center space-x-4">
            <div className="divide-y divide-slate-200 overflow-hidden rounded-lg bg-white shadow w-full">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <KeywordInputField
                      keyword={keyword}
                      setKeyword={setKeyword}
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    onClick={handleAddKeyword}
                  >
                    Add keyword
                  </button>
                </div>
              </div>
              <div className="px-4 py-5 sm:p-6">
                {keywordList.map((keyword, index) => (
                  <KeywordChip key={index} text={keyword} />
                ))}
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <input
                      value={query}
                      id="query"
                      name="query"
                      placeholder=""
                      className="px-1.5 py-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-auto inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    onClick={handleAddKeyword}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mt-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-slate-900">
              Users
            </h1>
            <p className="mt-2 text-sm text-slate-700">
              A list of all the users in your account including their name,
              title, email, and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              onClick={handleLogout}
            >
              Sign out
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-slate-300">
                <thead>
                  <tr className="divide-x divide-slate-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-slate-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-slate-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-slate-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-slate-900 sm:pr-0"
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {people.map((person) => (
                    <tr
                      key={person.email}
                      className="divide-x divide-slate-200"
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-slate-900 sm:pl-0">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-slate-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-slate-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-slate-500 sm:pr-0">
                        {person.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
