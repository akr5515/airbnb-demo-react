import "./App.css";
import { Box, Typography } from "@mui/material";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

const App = () => {
  return (
    <Box>
      <Header />
      <Filter />
      <Cards />
    </Box>
  );
};

export default App;
