import React, { useState } from "react";
import "./SearchBar.css";

interface Props {
  myEvent: (term: string) => void;
}

const SearchBar = ({ myEvent }: Props) => {
  const [term, setTerm] = useState("");

  // const handleSearchClick = () => {
  //   myEvent(term);
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // the value that you send to this method
    setTerm(event.target.value);
  };

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();

    myEvent(term);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmitForm}>
        <label>Enter the search term</label>
        <input value={term} onChange={handleChange} />
      </form>
      {/* <button onClick={handleSearchClick}> Click me</button> */}
    </div>
  );
};

export default SearchBar;
