import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./styles.css";
import { Box } from "@mui/material";

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <MenuRoundedIcon sx={{ color: "grey" }} />
        <AccountCircleRoundedIcon sx={{ color: "grey" }} />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            marginTop: "1rem",
            borderRadius: "1rem",
            minWidth: "250px",
            boxShadow: "0 1px 2px rgb(0 0 0 / 15%),0 4px 12px rgb(0 0 0 /10%)",
          },
        }}
      >
        <MenuItem className="menu-item" onClick={handleClose}>
          Sign up
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleClose}>
          Log in
        </MenuItem>
        <Box
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100%",
          }}
        />
        <MenuItem className="menu-item" onClick={handleClose}>
          Airbnb your home
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleClose}>
          Host an experience
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleClose}>
          Help
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default BasicMenu;
