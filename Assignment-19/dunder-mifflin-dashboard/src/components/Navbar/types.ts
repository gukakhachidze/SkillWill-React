export type NavbarVariant = "vertical" | "horizontal";

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface NavbarProps {
  items: NavItem[];
  variant?: NavbarVariant;
}
