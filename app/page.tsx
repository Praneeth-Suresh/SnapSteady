"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TremorGraph } from "@/components/tremor-graph"
import { RiskAssessment } from "@/components/risk-assessment"
import { InsightsPanel } from "@/components/insights-panel"
import { StatusOverview } from "@/components/status-overview"
import { Activity, TrendingDown, TrendingUp } from "lucide-react"

export default function TremorDiagnosticApp() {
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month">("day")

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border px-4 py-4 shadow-sm">
        <div className="flex items-center gap-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">SnapSteady</h1>
            <p className="text-xs text-muted-foreground">Your tremor management companion</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Status Overview - Color Coded */}
        <StatusOverview />

        {/* Tremor Severity Graph */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tremor Severity Tracking</CardTitle>
            <CardDescription>Monitor your tremor patterns over time</CardDescription>
          </CardHeader>
          <CardContent>
            <TremorGraph timeRange={timeRange} onTimeRangeChange={setTimeRange} />
          </CardContent>
        </Card>

        {/* Risk Assessment */}
        <RiskAssessment />

        {/* AI-Generated Insights */}
        <InsightsPanel timeRange={timeRange} />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-success mb-1">
                <TrendingDown className="w-4 h-4" />
                <span className="text-2xl font-bold">12%</span>
              </div>
              <p className="text-sm text-muted-foreground">Improvement this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-foreground mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-2xl font-bold">4.2</span>
              </div>
              <p className="text-sm text-muted-foreground">Avg daily severity</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
