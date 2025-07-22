import { useState } from "react";
import { TextInput, Button } from "@mantine/core";
import { FaSearch } from "react-icons/fa";

function HadithSearch({ onSubmit, error }) {
  const [URL, setURL] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleURLSubmit = (e) => {
    e.preventDefault();
    onSubmit(URL);
  };

  const handleURLChange = (e) => {
    setURL(e.target.value);
  };

  return (
    <div className="search-container-contents">
      <h1 style={{ fontFamily: "NassimArabic", fontSize: "2.5rem" }}>
        Thaqalayn x Noor
      </h1>
      <form onSubmit={handleURLSubmit} className="search-form">
        <TextInput
          size="md"
          variant="filled"
          radius="lg"
          label="Hadith Search"
          description="Enter a thaqalayn.net URL"
          placeholder="https://thaqalayn.net/hadith/x/x/x/x"
          value={URL}
          onChange={handleURLChange}
          error={error}
          className="search"
        />
        <Button
          variant="light"
          color="teal"
          size="md"
          radius="md"
          type="submit"
          className="btn"
          leftSection={<FaSearch />}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default HadithSearch;
