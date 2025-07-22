import { useState } from "react";
import Chain from "../components/Chain";
import { LoadingOverlay, Divider, Paper } from "@mantine/core";
import { getChain } from "../services/api";
import HadithSearch from "../components/HadithSearch";

function Home() {
  const [URL, setURL] = useState("");
  const [chains, setChains] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleURLSubmit = async (submittedURL) => {
    setLoading(true);
    setURL(submittedURL);

    try {
      const fetchedChains = await getChain(submittedURL);
      setChains(fetchedChains);
    } catch (error) {
      console.error("Error fetching chain:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoadingOverlay
        visible={loading}
        overlayProps={{ blur: 2 }}
      ></LoadingOverlay>
      <div className="content-container">
        <div className="search-container">
          <Paper shadow="xl" radius="xl" withBorder p="xl">
            <HadithSearch onSubmit={handleURLSubmit}></HadithSearch>
          </Paper>
        </div>
        <div className="chains-container">
          {chains &&
            chains.map((chain, index) => (
              <div key={index}>
                <Paper shadow="xl" radius="xl" withBorder p="xl">
                  <div className="english-text" style={{ fontSize: "1.8rem" }}>Chain {index + 1}:</div>
                  <Chain chain={chain}></Chain>
                </Paper>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
