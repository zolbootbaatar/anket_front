"use client";
import React, { useState, useEffect, use } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Avatar,
} from "@mui/material";
import {
  Person,
  Assignment,
  ExitToApp,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { logout } = useAuth();

  console.log("Current pathname:", pathname);
  console.log("Sidebar open state:", open);

  const menuItems = [
    {
      text: "Хэрэглэгч",
      icon: <Person />,
      onClick: () => router.push("/admin/user"),
    },
    {
      text: "Анкет",
      icon: <Assignment />,
      onClick: () => router.push("/admin/merchant"),
    },
    {
      text: "Системээс гарах",
      icon: <ExitToApp />,
      onClick: () => {
        logout();
      },
    },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#f9fafb",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          bgcolor: "#3f51b5",
          color: "white",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            letterSpacing: 1,
            my: 2,
          }}
        >
          ANKET
        </Typography>
      </Box>

      <Divider />

      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
