import React from "react";

const SearchForm = ({ search, setSearch, formSubmit }) => {
  return (
    <div className="w-[50%] text-center mx-auto">
      <form onSubmit={formSubmit}>
        <input
          className="form-input search-input flex flex-col "
          type="text"
          name="search"
          placeholder="cat"
        />
        <button
          className="bg-blue-500 px-6 py-2 hover:bg-blue-300 mt-4"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
