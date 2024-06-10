/* eslint-disable react/prop-types */
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      className="px-4 py-2 mb-4 border rounded-md w-[70%] ml-20"
      placeholder="Search..."
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;