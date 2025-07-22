import Home from "./pages/Home";
import '@mantine/core/styles.css';
import { MantineProvider, Button } from '@mantine/core';

function App() {
  return (
    <>
    <MantineProvider>
      <Home></Home>
    </MantineProvider>
    </>
  );
}

export default App;
