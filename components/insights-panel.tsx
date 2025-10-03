"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Coffee, Moon, Dumbbell, Pill, Calendar } from "lucide-react"

interface InsightsPanelProps {
  timeRange: "day" | "week" | "month"
}

export function InsightsPanel({ timeRange }: InsightsPanelProps) {
  // Mock AI-generated insights based on tremor patterns
  const insights = [
    {
      icon: Coffee,
      title: "Caffeine Correlation",
      description:
        "Your tremors increase 40% within 1-2 hours of caffeine intake. Consider reducing coffee to 1 cup before 10 AM.",
      priority: "high",
    },
    {
      icon: Moon,
      title: "Sleep Quality Impact",
      description:
        "Better sleep (7+ hours) correlates with 25% lower tremor severity the next day. Maintain consistent sleep schedule.",
      priority: "medium",
    },
    {
      icon: Dumbbell,
      title: "Stress Management",
      description:
        "Tremors spike during high-stress periods (3-5 PM). Try deep breathing exercises or short walks during these times.",
      priority: "high",
    },
    {
      icon: Pill,
      title: "Medication Timing",
      description:
        "Your tremor control is optimal 2-4 hours after medication. Consider timing important tasks during this window.",
      priority: "medium",
    },
  ]

  const recommendations = [
    {
      icon: Calendar,
      title: "Recommended Actions",
      items: [
        "Schedule neurologist follow-up within 2 weeks",
        "Consider propranolol or primidone consultation",
        "Track caffeine intake in app for better correlation",
        "Practice stress-reduction techniques daily",
      ],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">AI-Powered Insights</CardTitle>
        <CardDescription>Personalized recommendations based on your patterns</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Key Insights */}
        <div className="space-y-3">
          {insights.map((insight, index) => {
            const Icon = insight.icon
            return (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  insight.priority === "high" ? "bg-warning/10 border-warning" : "bg-accent border-primary"
                }`}
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-foreground mb-1">{insight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Recommendations */}
        <div className="pt-4 border-t border-border">
          {recommendations.map((rec, index) => {
            const Icon = rec.icon
            return (
              <div key={index}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <h4 className="font-medium text-sm text-foreground">{rec.title}</h4>
                </div>
                <ul className="space-y-2 ml-7">
                  {rec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Treatment Information */}
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <h4 className="font-medium text-sm text-foreground mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-primary" />
            Common Treatment Options
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">First-line medications:</strong> Propranolol (beta-blocker) or
              Primidone (anticonvulsant) are typically prescribed for Essential Tremor.
            </p>
            <p>
              <strong className="text-foreground">Alternative options:</strong> Topiramate, Gabapentin, or Botox
              injections for specific cases.
            </p>
            <p>
              <strong className="text-foreground">Non-pharmacological:</strong> Occupational therapy, weighted utensils,
              stress management, and avoiding triggers.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
