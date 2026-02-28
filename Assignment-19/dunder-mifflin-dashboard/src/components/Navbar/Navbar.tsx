import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import MoodIcon from "@mui/icons-material/Mood";
import SettingsIcon from "@mui/icons-material/Settings";

type Variant = "vertical" | "horizontal";

interface Props {
  variant?: Variant;
}

const items = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Employees", icon: <PeopleIcon /> },
  { label: "Paper Sales", icon: <DescriptionIcon /> },
  { label: "Memes", icon: <MoodIcon /> },
  { label: "Settings", icon: <SettingsIcon /> },
];

export default function Navbar({ variant = "vertical" }: Props) {
  const vertical = variant === "vertical";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        width: vertical ? 260 : "100%",
        height: vertical ? "100vh" : 70,
        bgcolor: "#111827",
        color: "white",
      }}
    >
      {/* LOGO */}
      <Typography
        variant="h6"
        sx={{
          p: 2,
          textAlign: "center",
          borderBottom: vertical ? "1px solid #333" : "none",
        }}
      >
        Dunder Mifflin 🧻
      </Typography>

      <List
        sx={{
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          width: "100%",
        }}
      >
        {items.map((item) => (
          <ListItemButton
            key={item.label}
            sx={{
              "&:hover": {
                bgcolor: "#1f2937",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>

            {vertical && <ListItemText primary={item.label} />}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
