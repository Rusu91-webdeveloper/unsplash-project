import { useState } from "react";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("cat");
  // const apikey = bR11uhOmw76jz3j9znIwKmZOnxJHEeZ_e8JV0cMS2BA;

  // ! TRICK to get hte input value and save it in a state
  function formSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements);
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearch(searchValue);
  }

  function toggleButton() {
    setToggle(!toggle);
  }

  return (
    <div
      className={`${
        !toggle ? "bg-white text-black" : "bg-gray-800 text-white"
      } min-h-screen`}
    >
      <h1 className="text-center mt-6">Images</h1>
      <ThemeToggle
        toggle={toggle}
        setToggle={setToggle}
        toggleButton={toggleButton}
      />
      <SearchForm
        search={search}
        setSearch={setSearch}
        formSubmit={formSubmit}
      />
      <Gallery search={search} />
    </div>
  );
};
export default App;
