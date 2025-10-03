"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Info } from "lucide-react"

export function RiskAssessment() {
  // Mock risk assessment data from AI analysis
  const riskFactors = {
    parkinsons: 28, // 28% risk
    essentialTremor: 65, // 65% likelihood
    physiological: 7, // 7% (normal tremor)
  }

  const primaryDiagnosis = "Essential Tremor"
  const confidence = riskFactors.essentialTremor

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Risk Assessment</CardTitle>
        <CardDescription>AI-powered analysis of tremor patterns</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Primary Assessment */}
        <div className="p-4 bg-accent rounded-lg">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground mb-1">Most Likely: {primaryDiagnosis}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Based on your tremor patterns, frequency, and characteristics, our AI model suggests Essential Tremor
                with {confidence}% confidence.
              </p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Confidence Level</span>
                  <span>{confidence}%</span>
                </div>
                <Progress value={confidence} className="h-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Risk Breakdown */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground">Detailed Analysis</h4>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Essential Tremor</span>
                <span className="font-medium text-foreground">{riskFactors.essentialTremor}%</span>
              </div>
              <Progress value={riskFactors.essentialTremor} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">Action tremor, bilateral, improves with rest</p>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Parkinson's Disease</span>
                <span className="font-medium text-foreground">{riskFactors.parkinsons}%</span>
              </div>
              <Progress value={riskFactors.parkinsons} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">Some resting tremor patterns detected</p>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Physiological Tremor</span>
                <span className="font-medium text-foreground">{riskFactors.physiological}%</span>
              </div>
              <Progress value={riskFactors.physiological} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">Normal tremor, typically stress-related</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-3 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong className="text-foreground">Important:</strong> This assessment is for informational purposes only
            and should not replace professional medical diagnosis. Please consult with a neurologist for proper
            evaluation.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
