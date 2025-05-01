// components/FilterChips.jsx
import React from 'react';

const FilterChips = ({ appliedFilters, onRemove }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {appliedFilters.map((filter, idx) => (
        <span
          key={idx}
          className="bg-green-100 text-gray-800 rounded-full px-4 py-1 text-sm flex items-center"
        >
          {filter.label}
          <button
            className="ml-2 text-gray-600 hover:text-red-500"
            onClick={() => onRemove(filter.key)}
          >
            ✕
          </button>
        </span>
      ))}
    </div>
  );
};

export default FilterChips;
