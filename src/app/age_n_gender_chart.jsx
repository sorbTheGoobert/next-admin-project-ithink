"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A multiple bar chart"

const chartData = [
  { age: "0-10", male: 0, female: 0 },
  { age: "10-20", male: 0, female: 0 },
  { age: "20-30", male: 0, female: 0 },
  { age: "30-40", male: 0, female: 0 },
  { age: "40-50", male: 0, female: 0 },
  { age: "50-60", male: 0, female: 0 },
  { age: "60-70", male: 0, female: 0 },
  { age: "70-80", male: 0, female: 0 },
  { age: "80-90", male: 0, female: 0 },
  { age: "90-100", male: 0, female: 0 },
  { age: "100-110", male: 0, female: 0 },
]

const chartConfig = {
  male: {
    label: "Male",
    color: "hsl(var(--chart-4))",
  },
  female: {
    label: "Female",
    color: "hsl(var(--chart-2))",
  },
}

export function AgeNGenderChart(props) {
  const { data, date } = props
  for (let i = 0; i < data.length; i++) {
    const age = Math.floor(data[i].age / 10)
    switch (age) {
      case 0:
        if (data[i].gender == "Male") {
          chartData[0].male++;
        } else {
          chartData[0].female++;
        }
        break;
      case 1:
        if (data[i].gender == "Male") {
          chartData[1].male++;
        } else {
          chartData[1].female++;
        }
        break;
      case 2:
        if (data[i].gender == "Male") {
          chartData[2].male++;
        } else {
          chartData[2].female++;
        }
        break;
      case 3:
        if (data[i].gender == "Male") {
          chartData[3].male++;
        } else {
          chartData[3].female++;
        }
        break;
      case 4:
        if (data[i].gender == "Male") {
          chartData[4].male++;
        } else {
          chartData[4].female++;
        }
        break;
      case 5:
        if (data[i].gender == "Male") {
          chartData[5].male++;
        } else {
          chartData[5].female++;
        }
        break;
      case 6:
        if (data[i].gender == "Male") {
          chartData[6].male++;
        } else {
          chartData[6].female++;
        }
        break;
      case 7:
        if (data[i].gender == "Male") {
          chartData[7].male++;
        } else {
          chartData[7].female++;
        }
        break;
      case 8:
        if (data[i].gender == "Male") {
          chartData[8].male++;
        } else {
          chartData[8].female++;
        }
        break;
      case 9:
        if (data[i].gender == "Male") {
          chartData[9].male++;
        } else {
          chartData[9].female++;
        }
        break;
      case 10:
        if (data[i].gender == "Male") {
          chartData[10].male++;
        } else {
          chartData[10].female++;
        }
        break;
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Age and gender amongs users</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="age"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="male" fill="var(--color-male)" radius={4} />
            <Bar dataKey="female" fill="var(--color-female)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this age <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Presenting age and gender of our users
        </div>
      </CardFooter>
    </Card>
  )
}
