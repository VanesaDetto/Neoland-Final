import "./SearchBar.css";

const SearchBar = ({ setFilterWord }) => {
  // const [type, setType] = useState("")
  // const valueFilter = () =>{ button.value?
  //   (search.value.toLowerCase()+button.value
  //   ) : (
  //   search.value.toLowerCase())
  // }

  return (
    <>

      <input
        type="text"
        id="search"
        className="searchbar"
        onChange={() => setFilterWord(search.value.toLowerCase())}
        placeholder="busca por nombre o ciudad 🔍"
      />

    </>
  );
};

export default SearchBar;
