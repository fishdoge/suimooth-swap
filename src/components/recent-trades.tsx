"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// 模擬最近成交數據
const trades = Array.from({ length: 10 }, () => ({
  price: (45000 + (Math.random() * 100 - 50)).toFixed(2),
  amount: (Math.random() * 2).toFixed(4),
  time: new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString()
}))

export default function RecentTrades() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Trades</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Price</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trades.map((trade, i) => (
              <TableRow key={i}>
                <TableCell className={Number(trade.price) >= 45000 ? "text-green-500" : "text-red-500"}>
                  {trade.price}
                </TableCell>
                <TableCell>{trade.amount}</TableCell>
                <TableCell>{trade.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

