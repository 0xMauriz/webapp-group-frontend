const SearchBar = ({ search, setSearch }) => {
  //funzione per submit
  function clearForm(event) {
    event.preventDefault();
    setSearch("");
  }
  return (
    <form id="search-bar" onSubmit={clearForm} className="my-3 ">
      <input className="border-success rounded bg-transparent"
        id="search-travel"
        type="text"
        placeholder="Cerca viaggiatore"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="rounded bg-transparent border-success text-success">All</button>
    </form>
  );
};
export default SearchBar;
