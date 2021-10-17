import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 10 }}>
            Katanox
          </Typography>
          <Link className="statsButton" to="/stats">
            Hotel Stats
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
