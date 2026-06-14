// Centralized mock data for the SurveyPro prototype.
// Replace these with real database queries (Neon + auth) when wiring the backend.

export type Status =
  | "ongoing"
  | "completed"
  | "pending"
  | "paid"
  | "overdue"
  | "approved"
  | "rejected"

export const company = {
  name: "Meridian Land Surveyors",
  owner: "Rajesh Verma",
  license: "LS-2019-04472",
  email: "office@meridiansurvey.com",
  phone: "+91 98765 43210",
  address: "Plot 14, Survey Lane, Civic Center, Hyderabad 500081",
  gst: "36ABCDE1234F1Z5",
  established: "2014",
}

export const currentUser = {
  name: "Rajesh Verma",
  role: "Owner / Principal Surveyor",
  email: "office@meridiansurvey.com",
  initials: "RV",
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

// ---------------------------------------------------------------- Dashboard
export const dashboardStats = {
  totalProjects: 48,
  ongoingSurveys: 7,
  completedJobs: 39,
  totalRevenue: 4286000,
  pendingPayments: 612000,
  totalExpenses: 1894000,
}

export const monthlyPnl = [
  { month: "Jul", income: 312000, expense: 168000 },
  { month: "Aug", income: 358000, expense: 142000 },
  { month: "Sep", income: 298000, expense: 175000 },
  { month: "Oct", income: 412000, expense: 188000 },
  { month: "Nov", income: 389000, expense: 156000 },
  { month: "Dec", income: 466000, expense: 201000 },
]

// ---------------------------------------------------------------- Finance
export type Transaction = {
  id: string
  title: string
  category:
    | "Survey Fees"
    | "Equipment Cost"
    | "Travel"
    | "Office Rent"
    | "Salaries"
    | "Utilities"
  type: "income" | "expense"
  amount: number
  date: string
  project?: string
}

export const transactions: Transaction[] = [
  { id: "t1", title: "Boundary survey — Greenfield Estate", category: "Survey Fees", type: "income", amount: 145000, date: "2025-12-18", project: "Greenfield Estate" },
  { id: "t2", title: "GPS receiver calibration", category: "Equipment Cost", type: "expense", amount: 22000, date: "2025-12-16" },
  { id: "t3", title: "Topographic survey — Riverside Plot", category: "Survey Fees", type: "income", amount: 98000, date: "2025-12-14", project: "Riverside Plot" },
  { id: "t4", title: "Field travel — Warangal site", category: "Travel", type: "expense", amount: 8400, date: "2025-12-12" },
  { id: "t5", title: "Monthly office rent", category: "Office Rent", type: "expense", amount: 45000, date: "2025-12-05" },
  { id: "t6", title: "Cadastral survey — Hilltop Farms", category: "Survey Fees", type: "income", amount: 176000, date: "2025-12-03", project: "Hilltop Farms" },
  { id: "t7", title: "Staff salaries — November", category: "Salaries", type: "expense", amount: 96000, date: "2025-12-01" },
  { id: "t8", title: "Electricity & internet", category: "Utilities", type: "expense", amount: 7200, date: "2025-11-28" },
  { id: "t9", title: "Subdivision survey — Lakeview", category: "Survey Fees", type: "income", amount: 132000, date: "2025-11-25", project: "Lakeview Layout" },
  { id: "t10", title: "Drone battery replacement", category: "Equipment Cost", type: "expense", amount: 14500, date: "2025-11-22" },
]

// ---------------------------------------------------------------- Invoices
export type Invoice = {
  id: string
  number: string
  client: string
  location: string
  surveyType: string
  area: number
  ratePerAcre: number
  total: number
  dueDate: string
  status: Extract<Status, "paid" | "pending" | "overdue">
}

export const invoices: Invoice[] = [
  { id: "i1", number: "INV-2025-031", client: "Greenfield Developers", location: "Shamirpet, Hyderabad", surveyType: "Boundary Survey", area: 12.5, ratePerAcre: 11600, total: 145000, dueDate: "2026-01-05", status: "pending" },
  { id: "i2", number: "INV-2025-030", client: "Anand Reddy", location: "Warangal Rural", surveyType: "Topographic Survey", area: 8, ratePerAcre: 12250, total: 98000, dueDate: "2025-12-20", status: "paid" },
  { id: "i3", number: "INV-2025-029", client: "Hilltop Agro Pvt Ltd", location: "Medak District", surveyType: "Cadastral Survey", area: 22, ratePerAcre: 8000, total: 176000, dueDate: "2025-12-10", status: "overdue" },
  { id: "i4", number: "INV-2025-028", client: "Lakeview Layouts", location: "Ibrahimpatnam", surveyType: "Subdivision Survey", area: 16.5, ratePerAcre: 8000, total: 132000, dueDate: "2025-12-28", status: "pending" },
  { id: "i5", number: "INV-2025-027", client: "Sunrise Builders", location: "Kompally", surveyType: "Boundary Survey", area: 6, ratePerAcre: 10500, total: 63000, dueDate: "2025-11-30", status: "paid" },
]

// ---------------------------------------------------------------- Clients
export type Client = {
  id: string
  name: string
  contact: string
  email: string
  projects: number
  totalPaid: number
  totalOutstanding: number
}

export const clients: Client[] = [
  { id: "c1", name: "Greenfield Developers", contact: "+91 99000 11223", email: "projects@greenfield.in", projects: 6, totalPaid: 740000, totalOutstanding: 145000 },
  { id: "c2", name: "Anand Reddy", contact: "+91 98220 33445", email: "anand.reddy@gmail.com", projects: 2, totalPaid: 196000, totalOutstanding: 0 },
  { id: "c3", name: "Hilltop Agro Pvt Ltd", contact: "+91 90030 55667", email: "ops@hilltopagro.com", projects: 4, totalPaid: 410000, totalOutstanding: 176000 },
  { id: "c4", name: "Lakeview Layouts", contact: "+91 97040 77889", email: "info@lakeviewlayouts.in", projects: 3, totalPaid: 288000, totalOutstanding: 132000 },
  { id: "c5", name: "Sunrise Builders", contact: "+91 96050 99001", email: "admin@sunrisebuild.com", projects: 5, totalPaid: 522000, totalOutstanding: 0 },
]

// ---------------------------------------------------------------- Projects
export type Project = {
  id: string
  name: string
  client: string
  location: string
  surveyType: string
  status: Extract<Status, "ongoing" | "completed" | "pending">
  startDate: string
  area: number
  surveyor: string
  progress: number
  paymentStatus: Extract<Status, "paid" | "pending" | "overdue">
  documents: { name: string; size: string }[]
}

export const projects: Project[] = [
  { id: "p1", name: "Greenfield Estate", client: "Greenfield Developers", location: "Shamirpet, Hyderabad", surveyType: "Boundary Survey", status: "ongoing", startDate: "2025-12-08", area: 12.5, surveyor: "Suresh Kumar", progress: 65, paymentStatus: "pending", documents: [{ name: "Site sketch.pdf", size: "1.2 MB" }, { name: "Field notes.pdf", size: "640 KB" }] },
  { id: "p2", name: "Riverside Plot", client: "Anand Reddy", location: "Warangal Rural", surveyType: "Topographic Survey", status: "completed", startDate: "2025-11-20", area: 8, surveyor: "Priya Nair", progress: 100, paymentStatus: "paid", documents: [{ name: "Contour map.pdf", size: "2.4 MB" }, { name: "Final report.pdf", size: "1.8 MB" }] },
  { id: "p3", name: "Hilltop Farms", client: "Hilltop Agro Pvt Ltd", location: "Medak District", surveyType: "Cadastral Survey", status: "ongoing", startDate: "2025-12-01", area: 22, surveyor: "Suresh Kumar", progress: 40, paymentStatus: "overdue", documents: [{ name: "Revenue records.pdf", size: "920 KB" }] },
  { id: "p4", name: "Lakeview Layout", client: "Lakeview Layouts", location: "Ibrahimpatnam", surveyType: "Subdivision Survey", status: "pending", startDate: "2025-12-22", area: 16.5, surveyor: "Unassigned", progress: 0, paymentStatus: "pending", documents: [] },
  { id: "p5", name: "Sunrise Residency", client: "Sunrise Builders", location: "Kompally", surveyType: "Boundary Survey", status: "completed", startDate: "2025-11-10", area: 6, surveyor: "Priya Nair", progress: 100, paymentStatus: "paid", documents: [{ name: "Boundary plan.pdf", size: "1.1 MB" }] },
  { id: "p6", name: "Eastwood Acres", client: "Greenfield Developers", location: "Ghatkesar", surveyType: "Topographic Survey", status: "ongoing", startDate: "2025-12-15", area: 18, surveyor: "Mohan Das", progress: 25, paymentStatus: "pending", documents: [] },
]

// ---------------------------------------------------------------- Employees
export type Employee = {
  id: string
  name: string
  role: "Surveyor" | "Assistant" | "Office Staff" | "Drone Operator"
  contact: string
  email: string
  status: "active" | "on-leave"
  initials: string
  monthlySalary: number
}

export const employees: Employee[] = [
  { id: "e1", name: "Suresh Kumar", role: "Surveyor", contact: "+91 98111 22334", email: "suresh@meridiansurvey.com", status: "active", initials: "SK", monthlySalary: 42000 },
  { id: "e2", name: "Priya Nair", role: "Surveyor", contact: "+91 98222 33445", email: "priya@meridiansurvey.com", status: "active", initials: "PN", monthlySalary: 40000 },
  { id: "e3", name: "Mohan Das", role: "Drone Operator", contact: "+91 98333 44556", email: "mohan@meridiansurvey.com", status: "active", initials: "MD", monthlySalary: 32000 },
  { id: "e4", name: "Lakshmi Rao", role: "Office Staff", contact: "+91 98444 55667", email: "lakshmi@meridiansurvey.com", status: "active", initials: "LR", monthlySalary: 26000 },
  { id: "e5", name: "Imran Shaikh", role: "Assistant", contact: "+91 98555 66778", email: "imran@meridiansurvey.com", status: "on-leave", initials: "IS", monthlySalary: 22000 },
]

// ---------------------------------------------------------------- Attendance
export type AttendanceMark = "P" | "A" | "H"

export type AttendanceRow = {
  employeeId: string
  name: string
  initials: string
  // 30 day month, index 0 = day 1
  days: AttendanceMark[]
}

function genDays(seed: number): AttendanceMark[] {
  const out: AttendanceMark[] = []
  for (let d = 0; d < 30; d++) {
    const r = (seed * (d + 3) * 7) % 11
    if (r === 0) out.push("A")
    else if (r === 1) out.push("H")
    else out.push("P")
  }
  return out
}

export const attendance: AttendanceRow[] = employees.map((e, i) => ({
  employeeId: e.id,
  name: e.name,
  initials: e.initials,
  days: genDays(i + 2),
}))

export function attendanceSummary(days: AttendanceMark[]) {
  return {
    present: days.filter((d) => d === "P").length,
    absent: days.filter((d) => d === "A").length,
    half: days.filter((d) => d === "H").length,
  }
}

// ---------------------------------------------------------------- Salary
export type Salary = {
  employeeId: string
  name: string
  role: string
  initials: string
  base: number
  deductions: number
  bonus: number
  status: Extract<Status, "paid" | "pending">
}

export const salaries: Salary[] = employees.map((e) => {
  const deductions = Math.round(e.monthlySalary * 0.04)
  const bonus = e.role === "Surveyor" ? 5000 : 2000
  return {
    employeeId: e.id,
    name: e.name,
    role: e.role,
    initials: e.initials,
    base: e.monthlySalary,
    deductions,
    bonus,
    status: e.status === "on-leave" ? "pending" : "paid",
  }
})

export function netPay(s: Salary): number {
  return s.base - s.deductions + s.bonus
}

// ---------------------------------------------------------------- Leave
export type LeaveRequest = {
  id: string
  employee: string
  initials: string
  type: "Casual" | "Sick" | "Earned" | "Unpaid"
  from: string
  to: string
  days: number
  reason: string
  status: Extract<Status, "approved" | "pending" | "rejected">
}

export const leaveRequests: LeaveRequest[] = [
  { id: "l1", employee: "Imran Shaikh", initials: "IS", type: "Sick", from: "2025-12-15", to: "2025-12-18", days: 4, reason: "Fever and recovery", status: "approved" },
  { id: "l2", employee: "Mohan Das", initials: "MD", type: "Casual", from: "2025-12-24", to: "2025-12-25", days: 2, reason: "Family function", status: "pending" },
  { id: "l3", employee: "Lakshmi Rao", initials: "LR", type: "Earned", from: "2026-01-02", to: "2026-01-08", days: 7, reason: "Annual vacation", status: "pending" },
  { id: "l4", employee: "Suresh Kumar", initials: "SK", type: "Casual", from: "2025-12-09", to: "2025-12-09", days: 1, reason: "Personal work", status: "rejected" },
]

// ---------------------------------------------------------------- Equipment
export type Equipment = {
  id: string
  name: string
  type: "Total Station" | "GPS Receiver" | "Drone" | "Theodolite" | "Auto Level"
  serial: string
  condition: "Excellent" | "Good" | "Needs Service"
  assignedTo: string
  lastService: string
}

export const equipment: Equipment[] = [
  { id: "eq1", name: "Leica TS16 Total Station", type: "Total Station", serial: "TS16-0091", condition: "Excellent", assignedTo: "Suresh Kumar", lastService: "2025-10-12" },
  { id: "eq2", name: "Trimble R12 GPS", type: "GPS Receiver", serial: "R12-4471", condition: "Good", assignedTo: "Priya Nair", lastService: "2025-09-28" },
  { id: "eq3", name: "DJI Phantom 4 RTK", type: "Drone", serial: "P4R-2208", condition: "Needs Service", assignedTo: "Mohan Das", lastService: "2025-07-05" },
  { id: "eq4", name: "Sokkia DT740 Theodolite", type: "Theodolite", serial: "DT740-1130", condition: "Good", assignedTo: "Unassigned", lastService: "2025-11-02" },
  { id: "eq5", name: "Topcon AT-B4 Auto Level", type: "Auto Level", serial: "ATB4-7765", condition: "Excellent", assignedTo: "Imran Shaikh", lastService: "2025-10-30" },
]

// ---------------------------------------------------------------- Documents
export type DocFolder = {
  id: string
  name: string
  files: number
  size: string
  updated: string
}

export const docFolders: DocFolder[] = [
  { id: "d1", name: "Survey Maps", files: 124, size: "3.2 GB", updated: "2025-12-18" },
  { id: "d2", name: "Legal Documents", files: 56, size: "820 MB", updated: "2025-12-15" },
  { id: "d3", name: "Client Contracts", files: 38, size: "412 MB", updated: "2025-12-12" },
  { id: "d4", name: "Reports", files: 71, size: "1.1 GB", updated: "2025-12-17" },
]

export const recentDocs = [
  { id: "rd1", name: "Greenfield boundary map.pdf", folder: "Survey Maps", size: "2.4 MB", date: "2025-12-18" },
  { id: "rd2", name: "Hilltop contract.pdf", folder: "Client Contracts", size: "880 KB", date: "2025-12-12" },
  { id: "rd3", name: "Riverside final report.pdf", folder: "Reports", size: "1.8 MB", date: "2025-12-10" },
]

// ---------------------------------------------------------------- Notifications
export type AppNotification = {
  id: string
  kind: "payment" | "deadline" | "attendance" | "salary"
  title: string
  body: string
  time: string
  unread: boolean
}

export const notifications: AppNotification[] = [
  { id: "n1", kind: "payment", title: "Payment overdue", body: "Invoice INV-2025-029 for Hilltop Agro is 8 days overdue.", time: "2h ago", unread: true },
  { id: "n2", kind: "deadline", title: "Project deadline approaching", body: "Greenfield Estate survey is due in 3 days.", time: "5h ago", unread: true },
  { id: "n3", kind: "attendance", title: "Attendance reminder", body: "Mark today's attendance for 5 employees.", time: "Today, 9:00 AM", unread: true },
  { id: "n4", kind: "salary", title: "Salary processing due", body: "December payroll for 5 employees is scheduled for 1 Jan.", time: "Yesterday", unread: false },
  { id: "n5", kind: "payment", title: "Payment received", body: "Anand Reddy paid INV-2025-030 (₹98,000).", time: "2 days ago", unread: false },
]
