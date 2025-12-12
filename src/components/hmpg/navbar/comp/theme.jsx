// src/components/hmpg/navbar/comp/theme.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/themeSlice";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Theme = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  // debug logs
  console.log("Theme component rendered — mode:", mode);

  const handleClick = () => {
    console.log("Theme button clicked — dispatch toggleTheme");
    dispatch(toggleTheme());
  };

  return (
    <IconButton onClick={handleClick} color="inherit" sx={{ padding: 'unset' }}>
      {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

export default Theme;
