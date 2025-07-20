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
      <Paper shadow="xl" radius="xl" withBorder p="xl">
        <HadithSearch onSubmit={handleURLSubmit}></HadithSearch>
      </Paper>
      <Paper shadow="xl" radius="xl" withBorder p="xl">
        {chains &&
          chains.map((chain, index) => (
            <div key={index}>
              <h3>Chain {index + 1}:</h3>
              <Chain chain={chain}></Chain>
              <Divider my="md"></Divider>
            </div>
          ))}
      </Paper>
    </>
  );
}

export default Home;
