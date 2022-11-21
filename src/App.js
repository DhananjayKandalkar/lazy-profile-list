import "./App.css";
import List from "./components/List";
import { Box, Heading } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App">
      <Heading as="h2" size="lg">Profile List</Heading>
      <List />
    </Box>
  );
}

export default App;
