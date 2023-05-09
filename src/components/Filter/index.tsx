import { useState } from "react";

import "./style.css";
import { links } from "../../assets/image-links";
import { Box } from "@mui/material";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState<number>();
  return (
    <Box className="filter-div">
      {links.map((item, i) => (
        <Box
          key={i}
          className={`links-box ${
            i === selectedFilter ? "selected-filter" : ""
          }`}
          onClick={() => setSelectedFilter(i)}
          sx={{ cursor: "pointer" }}
        >
          <img src={item.imgSrc} className="links-img" alt="pic" />
          <p
            className={`links-label ${
              i === selectedFilter ? "selected-label" : ""
            }`}
          >
            {item.label}
          </p>
        </Box>
      ))}
    </Box>
  );
};

export default Filter;
