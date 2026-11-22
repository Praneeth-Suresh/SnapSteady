import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const exampleContext = [
  { title: "Routine", detail: "Example note: A routine activity was logged next to a reading." },
  { title: "Sleep", detail: "Example note: A sleep entry appeared in the same timeline." },
  { title: "Activity", detail: "Example note: An activity marker was added for later review." },
]

export function InsightsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Example context</CardTitle>
        <CardDescription>Fictional notes showing how context could appear next to readings</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {exampleContext.map(({ title, detail }) => (
            <li key={title} className="rounded-lg border border-border p-4">
              <h3 className="font-medium text-sm">{title}</h3>
              <p className="text-sm text-muted-foreground">{detail}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
