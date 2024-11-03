'use client';

import { Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Example(props) {
  return (
    <div className="flex justify-center items-center">
      <Transition
        show={props.showNotification}
        as="div"
        enter="transition duration-300 transform"
        enterFrom="-translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition duration-300 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-full opacity-0"
        className="fixed top-0 inset-x-0 pt-4 z-50 ml-[20%]"
      >
        <div className="mx-auto max-w-lg rounded-lg bg-green-100 p-4 shadow-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <CheckCircleIcon
                className="h-6 w-6 text-green-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900">
                {props.headingText}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                type="button"
                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={() => props.setShowNotification(false)}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
