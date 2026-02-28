import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import MoodIcon from "@mui/icons-material/Mood";
import SettingsIcon from "@mui/icons-material/Settings";

const items = [
  { label: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { label: "Employees", icon: <PeopleIcon />, path: "/employees" },
  { label: "Paper Sales", icon: <DescriptionIcon />, path: "/sales" },
  { label: "Memes", icon: <MoodIcon />, path: "/memes" },
  { label: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* ✅ NAVBAR */}
      <Navbar items={items} variant="vertical" />

      {/* ✅ CONTENT */}
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f5f5",
          p: 4,
        }}
      >
        <Typography variant="h4">Welcome to Dunder Mifflin 😄</Typography>
      </Box>
    </Box>
  );
}
