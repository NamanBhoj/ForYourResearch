import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

type Relevance = 'Irrelevant' | 'Uncertain' | 'Relevant' | 'Untag';

interface RelevanceDropdownProps {
  relevance?: Relevance;
  onRelevanceChange: (newRelevance: Relevance) => void;
}

export default function RelevanceDropdown({
  relevance = 'Untag',
  onRelevanceChange,
}: RelevanceDropdownProps) {
  const relevanceOptions: Record<Relevance, string> = {
    Relevant:
      'bg-green-200 text-green-700 ring-green-600/20 hover:bg-green-100 hover:text-green-800',
    Uncertain:
      'bg-yellow-200 text-yellow-800 ring-yellow-600/20 hover:bg-yellow-100 hover:text-yellow-900',
    Irrelevant:
      'bg-red-200 text-red-700 ring-red-600/10 hover:bg-red-100 hover:text-red-800',
    Untag: 'bg-white text-slate-700 ring-slate-300 hover:text-slate-800',
  };

  const getColor = () => relevanceOptions[relevance];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className={`inline-flex w-full justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset hover:bg-gray-50 ${getColor()}`}
        >
          {relevance === 'Untag' ? 'Tag Relevance' : relevance}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-slate-400"
          />
        </MenuButton>
      </div>

      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {Object.keys(relevanceOptions).map((key) => (
            <MenuItem key={key}>
              {({ close }) => (
                <a
                  href="#"
                  className={
                    'block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100'
                  }
                  onClick={(event) => {
                    event.preventDefault();
                    onRelevanceChange(key as Relevance);
                    close();
                  }}
                >
                  {key}
                </a>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
