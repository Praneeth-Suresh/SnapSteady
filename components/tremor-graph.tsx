"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { Button } from "@/components/ui/button"

interface TremorGraphProps {
  timeRange: "day" | "week" | "month"
  onTimeRangeChange: (range: "day" | "week" | "month") => void
}

// Mock data representing realistic tremor patterns
const generateDayData = () => [
  { time: "6 AM", severity: 1.2, label: "6 AM" },
  { time: "7 AM", severity: 1.8, label: "7 AM" },
  { time: "8 AM", severity: 2.5, label: "8 AM" }, // Morning coffee
  { time: "9 AM", severity: 3.2, label: "9 AM" },
  { time: "10 AM", severity: 2.8, label: "10 AM" },
  { time: "11 AM", severity: 2.3, label: "11 AM" },
  { time: "12 PM", severity: 2.0, label: "12 PM" },
  { time: "1 PM", severity: 1.8, label: "1 PM" },
  { time: "2 PM", severity: 2.1, label: "2 PM" },
  { time: "3 PM", severity: 2.6, label: "3 PM" }, // Afternoon fatigue
  { time: "4 PM", severity: 3.0, label: "4 PM" },
  { time: "5 PM", severity: 2.7, label: "5 PM" },
  { time: "6 PM", severity: 2.2, label: "6 PM" },
  { time: "7 PM", severity: 1.9, label: "7 PM" },
  { time: "8 PM", severity: 1.5, label: "8 PM" },
  { time: "9 PM", severity: 1.3, label: "9 PM" },
]

const generateWeekData = () => [
  { time: "Mon", severity: 2.3, label: "Monday" },
  { time: "Tue", severity: 2.8, label: "Tuesday" },
  { time: "Wed", severity: 2.1, label: "Wednesday" },
  { time: "Thu", severity: 2.6, label: "Thursday" },
  { time: "Fri", severity: 3.2, label: "Friday" }, // End of week stress
  { time: "Sat", severity: 1.8, label: "Saturday" },
  { time: "Sun", severity: 1.5, label: "Sunday" },
]

const generateMonthData = () => [
  { time: "Week 1", severity: 2.4, label: "Week 1" },
  { time: "Week 2", severity: 2.8, label: "Week 2" },
  { time: "Week 3", severity: 2.2, label: "Week 3" },
  { time: "Week 4", severity: 2.0, label: "Week 4" },
]

export function TremorGraph({ timeRange, onTimeRangeChange }: TremorGraphProps) {
  const getData = () => {
    switch (timeRange) {
      case "day":
        return generateDayData()
      case "week":
        return generateWeekData()
      case "month":
        return generateMonthData()
    }
  }

  const data = getData()

  return (
    <div className="space-y-4">
      {/* Time Range Selector */}
      <div className="flex gap-2 p-1 bg-muted rounded-lg">
        <Button
          variant={timeRange === "day" ? "default" : "ghost"}
          size="sm"
          onClick={() => onTimeRangeChange("day")}
          className="flex-1"
        >
          Day
        </Button>
        <Button
          variant={timeRange === "week" ? "default" : "ghost"}
          size="sm"
          onClick={() => onTimeRangeChange("week")}
          className="flex-1"
        >
          Week
        </Button>
        <Button
          variant={timeRange === "month" ? "default" : "ghost"}
          size="sm"
          onClick={() => onTimeRangeChange("month")}
          className="flex-1"
        >
          Month
        </Button>
      </div>

      {/* Graph */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="time" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <YAxis
              domain={[0, 10]}
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              label={{
                value: "Severity",
                angle: -90,
                position: "insideLeft",
                style: { fill: "hsl(var(--muted-foreground))", fontSize: 12 },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`${value.toFixed(1)}/10`, "Severity"]}
            />
            <Line
              type="monotone"
              dataKey="severity"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Severity Scale Reference */}
      <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success" />
          <span>Low (0-3)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-warning" />
          <span>Moderate (3-6)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <span>High (6-10)</span>
        </div>
      </div>
    </div>
  )
}
