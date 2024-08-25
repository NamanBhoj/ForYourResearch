import React, { useState, useRef, useEffect } from 'react';

const Autocomplete = ({ options, setQueryInputValue }) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setQueryInputValue(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (value) => {
    setInputValue(value);
    setQueryInputValue(value);
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={() => setIsOpen(true)}
        className="w-full px-4 py-2 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder='"Cross reality" "Highlighting" "Pointing"...'
      />
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {filteredOptions.length > 0 ? (
            <ul className="max-h-60 overflow-auto">
              {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-neutral-100 border-b border-neutral-300 whitespace-normal break-words"
                >
                  {option}
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-2 text-gray-500">No queries found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
