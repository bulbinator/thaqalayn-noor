import { useState } from "react";
import { getChain } from "../services/api";

function HadithSearch({onSubmit}) {
  const [URL, setURL] = useState("");
  const handleURLSubmit = (e) => {
    e.preventDefault();
    onSubmit(URL)
  };

  const handleURLChange = (e) => {
    setURL(e.target.value);
  };
  return (
    <>
      <h1>Hellow</h1>
      <form onSubmit={handleURLSubmit}>
        <input
          type="text"
          placeholder="Thaqalayn URL"
          value={URL}
          onChange={handleURLChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default HadithSearch;
