import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  CssBaseline,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Drawer as MuiDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppBar, Drawer, DrawerHeader } from "./helper";
import Sidebar from "./Sidebar";
import { logout } from "../redux/slices/authSlice";

export default function MiniDrawer({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleMobileDrawer = (open) => () => {
    setMobileOpen(open);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} isMobile={isMobile}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              open ? handleDrawerClose() : handleDrawerOpen();
            }}
            edge="start"
            sx={{
              marginRight: 5,
              // ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box component="div" sx={{ flexGrow: 1 }}>
            {!open && (
              <img
                src="/src/assets/logo-login.png"
                alt="Company Logo"
                style={{ height: "auto", width: "140px" }}
              />
            )}
          </Box>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      {isMobile ? (
        <MuiDrawer
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
          variant="temporary" // Makes it appear as an overlay
          ModalProps={{ keepMounted: true }} // Improves performance
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 2, // Ensures it appears above AppBar
            "& .MuiDrawer-paper": {
              width: 240, // Adjust width as needed
            },
          }}
        >
          <DrawerHeader>
            {open && (
              <img
                src="/src/assets/logo-login.png"
                alt="Company Logo"
                style={{ height: "auto", width: "140px" }}
              />
            )}
          </DrawerHeader>
          <Sidebar open={open} />
        </MuiDrawer>
      ) : (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            {open && (
              <img
                src="/src/assets/logo-login.png"
                alt="Company Logo"
                style={{ height: "auto", width: "140px" }}
              />
            )}
          </DrawerHeader>

          <Sidebar open={open} />
        </Drawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
