"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Bell, Menu, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { primaryNav, menuSections } from "@/lib/nav"
import { currentUser, notifications } from "@/lib/data"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname.startsWith(href)
}

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const unread = notifications.filter((n) => n.unread).length

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0"
                    aria-label="Open menu"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <SheetHeader className="border-b border-border px-5 py-4">
                  <SheetTitle className="flex items-center gap-2">
                    <Image
                      src="/surveypro-logo.png"
                      alt="SurveyPro logo"
                      width={28}
                      height={28}
                      className="size-7 rounded-md"
                    />
                    <span className="text-base font-semibold">SurveyPro</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-5 overflow-y-auto px-3 py-4">
                  {menuSections.map((section) => (
                    <div key={section.title}>
                      <p className="px-3 pb-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {section.title}
                      </p>
                      <ul className="flex flex-col gap-0.5">
                        {section.items.map((item) => {
                          const active = isActive(pathname, item.href)
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className={cn(
                                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                  active
                                    ? "bg-accent text-accent-foreground"
                                    : "text-foreground hover:bg-muted",
                                )}
                              >
                                <item.icon className="size-4 shrink-0" />
                                {item.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10"
                  >
                    <LogOut className="size-4" />
                    Log out
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="min-w-0">
              <h1 className="truncate text-base font-semibold leading-tight">
                {title}
              </h1>
              {subtitle ? (
                <p className="truncate text-xs text-muted-foreground">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              render={<Link href="/notifications" />}
              variant="ghost"
              size="icon"
              className="relative"
              aria-label="Notifications"
            >
              <Bell className="size-5" />
              {unread > 0 ? (
                <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-destructive" />
              ) : null}
            </Button>
            <Link href="/settings" aria-label="Settings and profile">
              <Avatar className="size-8">
                <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                  {currentUser.initials}
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 pb-24 pt-4">{children}</main>

      {/* Bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-md border-t border-border bg-card/95 backdrop-blur">
        <ul className="flex items-stretch justify-around">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href)
            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <item.icon className="size-5" />
                  {item.label}
                </Link>
              </li>
            )
          })}
          <li className="flex-1">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex w-full flex-col items-center gap-1 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Menu className="size-5" />
              More
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    completed: "bg-success/15 text-success border-success/30",
    paid: "bg-success/15 text-success border-success/30",
    approved: "bg-success/15 text-success border-success/30",
    active: "bg-success/15 text-success border-success/30",
    ongoing: "bg-primary/15 text-primary border-primary/30",
    pending: "bg-warning/20 text-warning-foreground border-warning/40",
    "on-leave": "bg-warning/20 text-warning-foreground border-warning/40",
    overdue: "bg-destructive/15 text-destructive border-destructive/30",
    rejected: "bg-destructive/15 text-destructive border-destructive/30",
  }
  const label = status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")
  return (
    <Badge
      variant="outline"
      className={cn("rounded-full font-medium capitalize", map[status] ?? "")}
    >
      {label}
    </Badge>
  )
}
