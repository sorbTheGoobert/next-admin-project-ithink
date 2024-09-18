"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart with a label"

const chartData = [
  { age: "0-10", users: 0 },
  { age: "10-20", users: 0 },
  { age: "20-30", users: 0 },
  { age: "30-40", users: 0 },
  { age: "40-50", users: 0 },
  { age: "50-60", users: 0 },
  { age: "60-70", users: 0 },
  { age: "70-80", users: 0 },
  { age: "80-90", users: 0 },
  { age: "90-100", users: 0 },
  { age: "100-110", users: 0 },
]

const chartConfig = {
  users: {
    label: "User",
    color: "hsl(var(--chart-3))",
  },
}

export function AgeChart(props) {
  const { data, date } = props
  for (let i = 0; i < data.length; i++) {
    const age = Math.floor(data[i].age / 10)
    switch (age) {
      case 0:
        chartData[0].users++;
        break;
      case 1:
        chartData[1].users++;
        break;
      case 2:
        chartData[2].users++;
        break;
      case 3:
        chartData[3].users++;
        break;
      case 4:
        chartData[4].users++;
        break;
      case 5:
        chartData[5].users++;
        break;
      case 6:
        chartData[6].users++;
        break;
      case 7:
        chartData[7].users++;
        break;
      case 8:
        chartData[8].users++;
        break;
      case 9:
        chartData[9].users++;
        break;
      case 10:
        chartData[10].users++;
        break;
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Age amongst users</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="age"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="users" fill="var(--color-users)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Presenting ages of our users
        </div>
      </CardFooter>
    </Card>
  )
}
