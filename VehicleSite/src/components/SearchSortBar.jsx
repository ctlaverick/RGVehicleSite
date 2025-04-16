const SearchSortBar = () => (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
      {/* Search Bar */}
      <div className="flex gap-2 w-full md:w-3/4 p-4 bg-primary rounded-2xl items-center">
        <label className="font-semibold hidden xl:inline text-white">Search</label>
        <input
          type="text"
          placeholder="Enter Vehicle Model or Brand here..."
          className="flex-1 px-3 py-2 border rounded bg-white"
        />
      </div>

      {/* Sort Dropdown */}
      <div className="flex gap-2 items-center">
        <label className="font-semibold hidden xl:inline">Sort By</label>
        <select className="px-3 py-2 border rounded">
          <option>Price Descending</option>
          <option>Price Ascending</option>
        </select>
      </div>

    </div>
);

export default SearchSortBar;