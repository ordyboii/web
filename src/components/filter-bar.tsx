import { Dispatch, SetStateAction } from "react";
import { HiSearch } from "react-icons/hi";

export default function FilterBar({
  placeholder,
  filterQuery,
  setFilterQuery
}: {
  placeholder: string;
  filterQuery: string;
  setFilterQuery: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div
      className='bg-gray-900 flex items-center gap-2 px-4 py-2 rounded-sm 
          focus-within:outline-1 focus-within:outline-dashed focus-within:outline-yellow-400'
    >
      <input
        className='bg-transparent w-full focus:outline-none'
        type='text'
        placeholder={placeholder}
        value={filterQuery}
        onChange={e => setFilterQuery(e.target.value)}
      />
      <HiSearch size={20} />
    </div>
  );
}
