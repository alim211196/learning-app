import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { menuItems } from "./menuItems";
import { ChevronRight } from "@mui/icons-material";

const Sidebar = ({ open }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <List sx={{ p: open && 2.5, pt: 1.5 }}>
      {menuItems.map((item) => (
        <ListItem
          key={item.name}
          disablePadding
          sx={{ display: "block", py: 0.5 }}
        >
          <ListItemButton
            onClick={() => handleNavigation(item.path)}
            sx={{
              justifyContent: "initial",
              borderRadius: open && "5px",
              padding: "7px 15px",
              color: "#9DA2B4",
              "&:hover": {
                padding: "7px 15px",
                borderRadius: open && "5px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                "& .MuiListItemIcon-root": {
                  color: "white",
                },
              },
              ...(location.pathname === item.path && {
                backgroundColor: "#1B2850",
                color: "white",
                "& .MuiListItemIcon-root": {
                  color: "white",
                },
              }),
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 1 : 3.5,
                justifyContent: "center",
                color: "#9DA2B4",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              sx={{
                opacity: 1,
                color: "inherit",
                fontSize: "15px",
                fontWeight: 500,
                "& span": {
                  fontSize: "15px",
                  fontWeight: 500,
                },
              }}
            />

            <ListItemIcon
              sx={{
                minWidth: 0,
                ml: 1,
                justifyContent: "flex-end",
                color: "#9DA2B4",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <ChevronRight />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
