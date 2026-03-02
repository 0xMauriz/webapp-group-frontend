const SearchBar = ({ search, setSearch }) => {
  //funzione per submit
  function clearForm(event) {
    event.preventDefault();
    setSearch("");
  }
  return (
    <form id="search-bar" onSubmit={clearForm} className="my-3">
      <input
        id="search-travel"
        type="text"
        placeholder="Cerca viaggiatore"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>All</button>
    </form>
  );
};
export default SearchBar;
