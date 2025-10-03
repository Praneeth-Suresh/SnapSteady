"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, AlertTriangle } from "lucide-react"

export function StatusOverview() {
  // Mock current status - in real app, this would come from latest AI analysis
  const currentSeverity = 2.1 // Scale 0-10
  const trend = "improving" // improving, stable, worsening

  const getStatusConfig = () => {
    if (currentSeverity < 3) {
      return {
        color: "bg-success",
        textColor: "text-success-foreground",
        borderColor: "border-success",
        icon: CheckCircle2,
        status: "Good Control",
        message: "Your tremors are well-managed today",
      }
    } else if (currentSeverity < 6) {
      return {
        color: "bg-warning",
        textColor: "text-warning-foreground",
        borderColor: "border-warning",
        icon: AlertTriangle,
        status: "Moderate Activity",
        message: "Tremor levels are elevated, consider your triggers",
      }
    } else {
      return {
        color: "bg-destructive",
        textColor: "text-destructive-foreground",
        borderColor: "border-destructive",
        icon: AlertCircle,
        status: "High Activity",
        message: "Significant tremor activity detected today",
      }
    }
  }

  const config = getStatusConfig()
  const Icon = config.icon

  return (
    <Card className={`border-2 ${config.borderColor}`}>
      <CardContent className={`${config.color} ${config.textColor} p-6 rounded-lg`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <Icon className="w-8 h-8" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold mb-1">{config.status}</h2>
            <p className="text-sm opacity-90 mb-3">{config.message}</p>
            <div className="flex items-center gap-4 text-sm">
              <div>
                <span className="opacity-75">Current Severity: </span>
                <span className="font-semibold">{currentSeverity.toFixed(1)}/10</span>
              </div>
              <div className="h-4 w-px bg-current opacity-30" />
              <div>
                <span className="opacity-75">Trend: </span>
                <span className="font-semibold capitalize">{trend}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
