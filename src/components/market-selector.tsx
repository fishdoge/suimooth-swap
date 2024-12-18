"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

// 模擬市場數據
const markets = [
  { pair: "BTC/USDT", price: "45000.00", change: "+2.5%", high: "45500.00", low: "44000.00", volume: "1234.56" },
  { pair: "ETH/USDT", price: "2800.00", change: "-1.2%", high: "2900.00", low: "2750.00", volume: "5678.90" },
  { pair: "BNB/USDT", price: "380.00", change: "+0.8%", high: "385.00", low: "375.00", volume: "345.67" },
  { pair: "SOL/USDT", price: "95.00", change: "+5.2%", high: "98.00", low: "90.00", volume: "789.12" },
]

export default function MarketSelector() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search markets" className="pl-8" />
          </div>
          <Tabs defaultValue="favorites" className="flex-none">
            <TabsList>
              <TabsTrigger value="favorites">★ Favorites</TabsTrigger>
              <TabsTrigger value="spot">Spot</TabsTrigger>
              <TabsTrigger value="futures">Futures</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pair</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>24h Change</TableHead>
              <TableHead className="hidden md:table-cell">24h High</TableHead>
              <TableHead className="hidden md:table-cell">24h Low</TableHead>
              <TableHead>24h Volume</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {markets.map((market) => (
              <TableRow key={market.pair} className="cursor-pointer hover:bg-muted">
                <TableCell className="font-medium">{market.pair}</TableCell>
                <TableCell>{market.price}</TableCell>
                <TableCell className={market.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                  {market.change}
                </TableCell>
                <TableCell className="hidden md:table-cell">{market.high}</TableCell>
                <TableCell className="hidden md:table-cell">{market.low}</TableCell>
                <TableCell>{market.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

