const SearchBar = () => {
  return (
    <div className="join">
      <div>
        <label className="input text-white bg-transparent">
          <input type="email" placeholder="Search..." required />
        </label>
      </div>
      <button className="btn btn-neutral join-item">Search</button>
    </div>
  );
};

export { SearchBar };
