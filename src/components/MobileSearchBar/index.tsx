import "./style.css";
import SearchIcon from "@mui/icons-material/Search";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { Box } from "@mui/material";

const MobileSearchBar = () => {
  return (
    <Box className="mobile-search-bar">
      <Box className="search-icon">
        <SearchIcon />
      </Box>

      <Box className="Anywhere">
        <Box className="where-to">Where to?</Box>
        <span className="Anywhere-name" id="p1">
          Anywhere
          <span className="Anywhere-dot">.</span>
          <span className="Anywhere-name">AnyWeek</span>
          <span className="Anywhere-dot">.</span>
          <span className="Anywhere-name">AddGuests</span>
        </span>
      </Box>
      <Box className="filter">
        <TuneOutlinedIcon sx={{ width: 15, height: 15 }} />
      </Box>
    </Box>
  );
};

export default MobileSearchBar;
