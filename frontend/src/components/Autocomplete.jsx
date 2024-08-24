import { useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/react';

const people = [
  'Wade Cooper',
  'Arlene McCoy',
  'Devon Webb',
  'Tom Cook',
  'Tanya Fox',
  'Hellen Schmidt',
];

export default function Autocomplete(props) {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? props.people
      : props.people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <div className="relative w-72">
        <ComboboxInput
          className="w-full border border-gray-300 rounded-lg py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setQuery('')} // Reset the query when input is focused
          placeholder="Select a person..."
        />
        <ComboboxOptions className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {filteredPeople.length === 0 && query !== '' ? (
            <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
              No results found.
            </div>
          ) : (
            filteredPeople.map((person) => (
              <ComboboxOption
                key={person}
                value={person}
                className={({ active }) =>
                  `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                    active ? 'text-white bg-indigo-600' : 'text-gray-900'
                  }`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {person}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? 'text-white' : 'text-indigo-600'
                        }`}
                      >
                        ✓
                      </span>
                    ) : null}
                  </>
                )}
              </ComboboxOption>
            ))
          )}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
}
