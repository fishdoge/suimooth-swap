"use client"

import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

// 模擬價格數據
const data = Array.from({ length: 100 }, (_, i) => ({
  time: new Date(Date.now() - (100 - i) * 3600000).toISOString(),
  price: 45000 + Math.random() * 1000,
  volume: Math.random() * 100
}))

export default function TradingViewChart() {
  return (
    <Card className="backdrop-blur-sm bg-background/80 border-primary/20 shadow-lg shadow-primary/10">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>BTC/USDT</CardTitle>
          <Tabs defaultValue="1h">
            <TabsList>
              <TabsTrigger value="15m">15m</TabsTrigger>
              <TabsTrigger value="1h">1h</TabsTrigger>
              <TabsTrigger value="4h">4h</TabsTrigger>
              <TabsTrigger value="1d">1d</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            price: {
              label: "Price",
              color: "hsl(var(--primary))",

            },
            volume: {
              label: "Volume",
              color: "hsl(var(--secondary))",

            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis
                dataKey="time"
                tickFormatter={(time) => new Date(time).toLocaleTimeString()}
              />
              <YAxis />
              <ChartTooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="var(--color-price)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

