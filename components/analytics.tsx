'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, LineChart, Line } from 'recharts'

// Updated sample data for sales and market share
const salesData = [
  { year: 2018, sales: 65000 },
  { year: 2019, sales: 130000 },
  { year: 2020, sales: 156000 },
  { year: 2021, sales: 311000 },
  { year: 2022, sales: 1015000 },
  { year: 2023, sales: 1670000 },  // Added 2023 data
]

const marketShareData = [
  { year: 2020, twoWheelers: 60, threeWheelers: 35, fourWheelers: 5 },
  { year: 2021, twoWheelers: 55, threeWheelers: 38, fourWheelers: 7 },
  { year: 2022, twoWheelers: 50, threeWheelers: 40, fourWheelers: 10 },
  { year: 2023, twoWheelers: 56, threeWheelers: 38, fourWheelers: 6 }, // Updated for 2023
]

const emissionsData = [
  { year: 2020, reduction: 1000 },
  { year: 2021, reduction: 3000 },
  { year: 2022, reduction: 6000 },
  { year: 2023, reduction: 8000 }, // Added 2023 data
]

const chargingData = [
  { year: 2020, stations: 2000 },
  { year: 2021, stations: 5000 },
  { year: 2022, stations: 10000 },
  { year: 2023, stations: 15000 }, // Added 2023 data
]

export function AnalyticsComponent() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">EV Analytics and Figures</h1>
      
      {/* EV Sales Growth Chart */}
      <Card>
        <CardHeader>
          <CardTitle>EV Sales Growth in India</CardTitle>
          <CardDescription>Annual sales of electric vehicles from 2018 to 2023</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ sales: { label: "Sales", color: "hsl(var(--chart-1))" }}} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="sales" fill="var(--color-sales)" name="Sales" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* EV Market Share Chart */}
      <Card>
        <CardHeader>
          <CardTitle>EV Market Share by Vehicle Type</CardTitle>
          <CardDescription>Percentage distribution of EV types from 2020 to 2023</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{
            twoWheelers: { label: "Two Wheelers", color: "hsl(var(--chart-1))" },
            threeWheelers: { label: "Three Wheelers", color: "hsl(var(--chart-2))" },
            fourWheelers: { label: "Four Wheelers", color: "hsl(var(--chart-3))" },
          }} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketShareData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="twoWheelers" stroke="var(--color-twoWheelers)" name="Two Wheelers" />
                <Line type="monotone" dataKey="threeWheelers" stroke="var(--color-threeWheelers)" name="Three Wheelers" />
                <Line type="monotone" dataKey="fourWheelers" stroke="var(--color-fourWheelers)" name="Four Wheelers" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* CO2 Emissions Reduction Chart */}
      <Card>
        <CardHeader>
          <CardTitle>CO2 Emissions Reduction</CardTitle>
          <CardDescription>Estimated reduction in CO2 emissions from EV adoption (in thousands of tons)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ reduction: { label: "Reduction", color: "hsl(var(--chart-4))" }}} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={emissionsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="reduction" stroke="var(--color-reduction)" name="CO2 Reduction" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Charging Infrastructure Growth Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Charging Infrastructure Growth</CardTitle>
          <CardDescription>Number of EV charging stations in India from 2020 to 2023</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ stations: { label: "Stations", color: "hsl(var(--chart-5))" }}} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chargingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="stations" fill="var(--color-stations)" name="Charging Stations" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

    </div>
  )
}
