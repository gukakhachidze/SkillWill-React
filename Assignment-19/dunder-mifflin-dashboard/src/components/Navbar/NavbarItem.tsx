import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavItem } from "./types";

interface Props {
  item: NavItem;
  vertical: boolean;
}

export default function NavbarItem({ item, vertical }: Props) {
  return (
    <ListItemButton
      sx={{
        justifyContent: vertical ? "flex-start" : "center",
      }}
    >
      <ListItemIcon>{item.icon}</ListItemIcon>

      {vertical && <ListItemText primary={item.label} />}
    </ListItemButton>
  );
}
