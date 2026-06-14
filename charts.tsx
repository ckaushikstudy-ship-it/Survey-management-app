"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const inr = (v: number) =>
  "₹" + new Intl.NumberFormat("en-IN", { notation: "compact" }).format(v)

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid var(--border)",
  background: "var(--card)",
  color: "var(--card-foreground)",
  fontSize: 12,
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
}

export function ProfitLossArea({
  data,
}: {
  data: { month: string; income: number; expense: number }[]
}) {
  const chart = data.map((d) => ({ ...d, profit: d.income - d.expense }))
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={chart} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.3} />
            <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="var(--border)" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          stroke="var(--muted-foreground)"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          fontSize={11}
          width={48}
          stroke="var(--muted-foreground)"
          tickFormatter={inr}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v: number) => inr(v)}
          cursor={{ stroke: "var(--border)" }}
        />
        <Area
          type="monotone"
          dataKey="profit"
          name="Net profit"
          stroke="var(--chart-1)"
          strokeWidth={2.5}
          fill="url(#profitFill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function IncomeExpenseBars({
  data,
}: {
  data: { month: string; income: number; expense: number }[]
}) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="var(--border)" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          stroke="var(--muted-foreground)"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          fontSize={11}
          width={48}
          stroke="var(--muted-foreground)"
          tickFormatter={inr}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v: number) => inr(v)}
          cursor={{ fill: "var(--muted)" }}
        />
        <Legend
          iconType="circle"
          wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
        />
        <Bar
          dataKey="income"
          name="Income"
          fill="var(--chart-1)"
          radius={[4, 4, 0, 0]}
          maxBarSize={18}
        />
        <Bar
          dataKey="expense"
          name="Expense"
          fill="var(--chart-4)"
          radius={[4, 4, 0, 0]}
          maxBarSize={18}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function NetProfitLine({
  data,
}: {
  data: { month: string; income: number; expense: number }[]
}) {
  const chart = data.map((d) => ({ ...d, profit: d.income - d.expense }))
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={chart} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="var(--border)" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          stroke="var(--muted-foreground)"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          fontSize={11}
          width={48}
          stroke="var(--muted-foreground)"
          tickFormatter={inr}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v: number) => inr(v)}
          cursor={{ stroke: "var(--border)" }}
        />
        <Line
          type="monotone"
          dataKey="profit"
          name="Net profit"
          stroke="var(--chart-1)"
          strokeWidth={2.5}
          dot={{ r: 3, fill: "var(--chart-1)" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function CategoryDonut({
  data,
}: {
  data: { name: string; value: number }[]
}) {
  const colors = [
    "var(--chart-1)",
    "var(--chart-2)",
    "var(--chart-3)",
    "var(--chart-4)",
    "var(--chart-5)",
  ]
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={48}
          outerRadius={78}
          paddingAngle={2}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={colors[i % colors.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => inr(v)} />
        <Legend
          iconType="circle"
          wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
