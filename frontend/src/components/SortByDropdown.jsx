import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function SortByDropdown(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Sort by
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute mt-1 z-10 right- overflow-auto h-[155px] w-[120px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              className="block px-4 py-2 bg-green-200 text-sm text-gray-700 data-[focus]:bg-green-300 data-[focus]:text-gray-900"
              onClick={props.handleSortByRelevant}
            >
              Relevant first
            </a>
          </MenuItem>
          <MenuItem>
            <a
              onClick={props.handleSortByUncertain}
              className="bg-yellow-200 block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-yellow-300 data-[focus]:text-gray-900"
            >
              Uncertain first
            </a>
          </MenuItem>
          <MenuItem>
            <a
              onClick={props.handleSortByIrrelevant}
              className="block bg-red-200 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-red-300 data-[focus]:text-gray-900"
            >
              Irrelevant first
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
