import { use, useState } from "react";
import Chain from "../components/Chain";
import { getChain } from "../services/api";
import HadithSearch from "../components/HadithSearch";

function Home() {
  const [URL, setURL] = useState("");
  const [chains, setChains] = useState([]);

  const handleURLSubmit = async (submittedURL) => {
    setURL(submittedURL);
    setChains(await getChain(submittedURL));
  };

  return (
    <>
      <HadithSearch onSubmit={handleURLSubmit}></HadithSearch>
      {chains &&
        chains.map((chain, index) => (
          <>
            <h3>Chain {index + 1}:</h3>
            <Chain chain={chain} key={index}></Chain>
          </>
        ))}
    </>
  );
}

export default Home;
