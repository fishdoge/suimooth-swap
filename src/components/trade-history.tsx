"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from 'date-fns'

// 模擬訂單歷史數據
const orders = [
  {
    id: '1',
    type: 'limit',
    side: 'buy',
    price: '45000.00',
    amount: '0.1',
    filled: '0.1',
    total: '4500.00',
    status: 'completed',
    time: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
  },
  {
    id: '2',
    type: 'market',
    side: 'sell',
    price: '44950.00',
    amount: '0.05',
    filled: '0.05',
    total: '2247.50',
    status: 'completed',
    time: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
  },
  {
    id: '3',
    type: 'limit',
    side: 'buy',
    price: '44900.00',
    amount: '0.2',
    filled: '0.1',
    total: '4490.00',
    status: 'partial',
    time: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
  },
  {
    id: '4',
    type: 'limit',
    side: 'sell',
    price: '45100.00',
    amount: '0.15',
    filled: '0',
    total: '6765.00',
    status: 'open',
    time: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500/20 text-green-500 hover:bg-green-500/30'
    case 'partial':
      return 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30'
    case 'open':
      return 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30'
    default:
      return 'bg-gray-500/20 text-gray-500 hover:bg-gray-500/30'
  }
}

export default function TradeHistory() {
  return (
    <Card className="glass-effect rounded-lg border border-white/10 neon-border w-full h-[500px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Order History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="open">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="filled">Filled</TabsTrigger>
            <TabsTrigger value="canceled">Canceled</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
          <TabsContent value="open" className="space-y-4">
            <div className="rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Filled</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <span className={`capitalize ${order.side === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
                          {order.type} {order.side}
                        </span>
                      </TableCell>
                      <TableCell>{order.price}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>{order.filled}</TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={`${getStatusColor(order.status)} transition-colors capitalize`}
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDistanceToNow(order.time, { addSuffix: true })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="filled">
            <div className="h-[150px] flex items-center justify-center text-muted-foreground">
              No filled orders
            </div>
          </TabsContent>
          <TabsContent value="canceled">
            <div className="h-[150px] flex items-center justify-center text-muted-foreground">
              No canceled orders
            </div>
          </TabsContent>
          <TabsContent value="all">
            <div className="rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Filled</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <span className={`capitalize ${order.side === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
                          {order.type} {order.side}
                        </span>
                      </TableCell>
                      <TableCell>{order.price}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>{order.filled}</TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={`${getStatusColor(order.status)} transition-colors capitalize`}
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDistanceToNow(order.time, { addSuffix: true })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

