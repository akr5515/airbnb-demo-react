import { Box } from "@mui/material";
import "./styles.css";
import Logo from "../../assets/logo/long-logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import BasicMenu from "./profileMenu";
import SimpleBottomNavigation from "./bottomNav";
import MobileSearchBar from "../MobileSearchBar";

const Header = () => {
  return (
    <Box className="navbar">
      <img src={Logo} alt="logo" className="navbar-logo" />

      <Box className="search-bar">
        <Box className="search-bar-text">Anywhere </Box>
        <Box className="search-bar-text">Any week </Box>
        <Box className="search-bar-text2">Add guests </Box>
        <SearchRoundedIcon className="search-bar-icon" />
      </Box>
      <Box className="profile-container">
        <Box className="airbnb-your-home">Airbnb your home</Box>
        <Box className="airbnb-your-home">
          <LanguageRoundedIcon sx={{ fontSize: "1.3 rem" }} />
        </Box>
        <Box className="profile-Box">
          <BasicMenu />
        </Box>
      </Box>

      <MobileSearchBar />
      <SimpleBottomNavigation />
    </Box>
  );
};

export default Header;
