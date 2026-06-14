import type { LucideIcon } from "lucide-react"
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  UsersRound,
  Wallet,
  FileText,
  TrendingUp,
  CalendarCheck,
  IndianRupee,
  CalendarOff,
  Boxes,
  FolderOpen,
  Bell,
  Settings,
} from "lucide-react"

export type NavItem = {
  label: string
  href: string
  icon: LucideIcon
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const primaryNav: NavItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Finance", href: "/finance", icon: Wallet },
  { label: "Team", href: "/employees", icon: UsersRound },
]

export const menuSections: NavSection[] = [
  {
    title: "Finance",
    items: [
      { label: "Income & Expenses", href: "/finance", icon: Wallet },
      { label: "Invoices", href: "/invoices", icon: FileText },
      { label: "Profit & Loss", href: "/reports", icon: TrendingUp },
    ],
  },
  {
    title: "Projects & Clients",
    items: [
      { label: "Projects", href: "/projects", icon: FolderKanban },
      { label: "Clients", href: "/clients", icon: Users },
    ],
  },
  {
    title: "Employees & HR",
    items: [
      { label: "Employees", href: "/employees", icon: UsersRound },
      { label: "Attendance", href: "/attendance", icon: CalendarCheck },
      { label: "Salary", href: "/salary", icon: IndianRupee },
      { label: "Leave", href: "/leave", icon: CalendarOff },
    ],
  },
  {
    title: "Equipment & Operations",
    items: [
      { label: "Equipment", href: "/equipment", icon: Boxes },
      { label: "Documents", href: "/documents", icon: FolderOpen },
    ],
  },
  {
    title: "General",
    items: [
      { label: "Notifications", href: "/notifications", icon: Bell },
      { label: "Settings", href: "/settings", icon: Settings },
    ],
  },
]
