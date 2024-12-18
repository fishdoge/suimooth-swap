"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function TradeForm() {
  const [price, setPrice] = useState("45000")
  const [amount, setAmount] = useState("")
  const [total, setTotal] = useState("")
  const [percentage, setPercentage] = useState([0])

  const handlePercentageChange = (value: number[]) => {
    setPercentage(value)
    const calculatedAmount = ((10000 * value[0]) / 100 / Number(price)).toFixed(6)
    setAmount(calculatedAmount)
    setTotal((Number(price) * Number(calculatedAmount)).toFixed(2))
  }

  const handleAmountChange = (value: string) => {
    setAmount(value)
    setTotal((Number(price) * Number(value)).toFixed(2))
  }

  const handlePriceChange = (value: string) => {
    setPrice(value)
    setTotal((Number(value) * Number(amount)).toFixed(2))
  }

  return (
    <Card className="backdrop-blur-sm bg-background/80 border-primary/20 shadow-lg shadow-primary/10">
      <CardHeader>
        <CardTitle>Trade</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="limit">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="limit">Limit</TabsTrigger>
            <TabsTrigger value="market">Market</TabsTrigger>
          </TabsList>
          <TabsContent value="limit" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Price</label>
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => handlePriceChange(e.target.value)}
                    placeholder="0.00"
                    className="transition-all duration-200 focus:ring-2 ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Amount</label>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    placeholder="0.00"
                    className="transition-all duration-200 focus:ring-2 ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Total</label>
                  <Input
                    type="number"
                    value={total}
                    readOnly
                    placeholder="0.00"
                    className="transition-all duration-200 focus:ring-2 ring-primary/20"
                  />
                </div>
                <div className="pt-4">
                  <Slider
                    value={percentage}
                    onValueChange={handlePercentageChange}
                    max={100}
                    step={25}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>
                <Button className="w-full bg-[hsl(var(--success))] hover:bg-[hsl(var(--success))]">
                  Buy BTC
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Price</label>
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => handlePriceChange(e.target.value)}
                    placeholder="0.00"
                    className="transition-all duration-200 focus:ring-2 ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Amount</label>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    placeholder="0.00"
                    className="transition-all duration-200 focus:ring-2 ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Total</label>
                  <Input
                    type="number"
                    value={total}
                    readOnly
                    placeholder="0.00"
                    className="transition-all duration-200 focus:ring-2 ring-primary/20"
                  />
                </div>
                <div className="pt-4">
                  <Slider
                    value={percentage}
                    onValueChange={handlePercentageChange}
                    max={100}
                    step={25}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>
                <Button className="w-full bg-[hsl(var(--destructive))] hover:bg-[hsl(var(--destructive))]">
                  Sell BTC
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="market" className="space-y-4">
            {/* Market order form */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Amount</label>
                  <Input type="number" placeholder="0.00" className="transition-all duration-200 focus:ring-2 ring-primary/20" />
                </div>
                <Button className="w-full bg-[hsl(var(--success))] hover:bg-[hsl(var(--success))]">
                  Buy BTC
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Amount</label>
                  <Input type="number" placeholder="0.00" className="transition-all duration-200 focus:ring-2 ring-primary/20" />
                </div>
                <Button className="w-full bg-[hsl(var(--destructive))] hover:bg-[hsl(var(--destructive))]">
                  Sell BTC
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

