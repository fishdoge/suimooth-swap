"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// 模擬訂單簿數據
const asks = Array.from({ length: 10 }, (_, i) => ({
  price: (45000 + i * 10).toFixed(2),
  amount: (Math.random() * 2).toFixed(4),
  total: ((45000 + i * 10) * (Math.random() * 2)).toFixed(2)
}))

const bids = Array.from({ length: 10 }, (_, i) => ({
  price: (44990 - i * 10).toFixed(2),
  amount: (Math.random() * 2).toFixed(4),
  total: ((44990 - i * 10) * (Math.random() * 2)).toFixed(2)
}))

export default function OrderBook() {
  return (
    <Card className="backdrop-blur-sm bg-background/80 border-primary/20 shadow-lg shadow-primary/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Order Book
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Price</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {asks.reverse().map((ask, i) => (
              <TableRow key={i}>
                <TableCell className="text-[hsl(var(--destructive))]">{ask.price}</TableCell>
                <TableCell>{ask.amount}</TableCell>
                <TableCell>{ask.total}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} className="text-center font-bold">
                45000.00
              </TableCell>
            </TableRow>
            {bids.map((bid, i) => (
              <TableRow key={i}>
                <TableCell className="text-[hsl(var(--success))]">{bid.price}</TableCell>
                <TableCell>{bid.amount}</TableCell>
                <TableCell>{bid.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

