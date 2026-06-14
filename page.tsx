import Link from "next/link"
import Image from "next/image"
import { Building2, BadgeCheck, LogOut } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { company } from "@/lib/data"

const fields = [
  { id: "name", label: "Company Name", value: company.name },
  { id: "owner", label: "Owner Name", value: company.owner },
  { id: "license", label: "License Number", value: company.license },
  { id: "gst", label: "GST Number", value: company.gst },
  { id: "phone", label: "Contact Number", value: company.phone },
  { id: "email", label: "Email", value: company.email },
]

export default function SettingsPage() {
  return (
    <AppShell title="Business Profile" subtitle="Company details & settings">
      <Card className="mb-4 shadow-sm">
        <CardContent className="flex items-center gap-4 p-5">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-card ring-1 ring-border">
            <Image
              src="/surveypro-logo.png"
              alt="Company logo"
              width={40}
              height={40}
              className="size-10"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-semibold">{company.name}</p>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-success">
              <BadgeCheck className="size-3.5" />
              Licensed since {company.established}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold">
            <Building2 className="size-4 text-primary" />
            Company Information
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {fields.map((f) => (
            <div key={f.id} className="flex flex-col gap-2">
              <Label htmlFor={f.id}>{f.label}</Label>
              <Input id={f.id} defaultValue={f.value} />
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" defaultValue={company.address} />
          </div>
          <Button className="mt-1 w-full">Save Changes</Button>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="p-2">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start gap-3 text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <Link href="/login">
              <LogOut className="size-4" />
              Log out
            </Link>
          </Button>
        </CardContent>
      </Card>
      <Separator className="my-4 opacity-0" />
    </AppShell>
  )
}
