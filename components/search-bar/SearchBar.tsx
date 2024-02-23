'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(
    searchParams.get('query')?.toString() ?? '',
  );

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }, 500);

  return (
    <div className="w-full">
      <div className="relative m-[5%]">
        <label htmlFor="search" className="sr-only">
          Search Bar
        </label>
        <div>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            aria-hidden="true"
          >
            <IoMdSearch
              className="mr-3 h-4 w-4 text-orange"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="h-10 block w-full rounded-t-md bg-gray border-b-2 border-orange pl-9 text-md text-orange placeholder:text-orange outline-none"
            placeholder={placeholder}
            onChange={(e) => {
              setQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            value={query}
          />
        </div>

        {!isPending && (
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
            <IoMdCloseCircleOutline
              className="mr-3 h-4 w-4 text-orange"
              aria-hidden="true"
              onClick={() => {
                setQuery('');
                handleSearch('');
              }}
            />
          </div>
        )}

        {isPending && (
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
