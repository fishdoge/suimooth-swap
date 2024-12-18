import TradingViewChart from "@/components/trading-view-chart"
import OrderBook from "@/components/order-book"
import TradeForm from "@/components/trade-form"
import MarketSelector from "@/components/market-selector"
import RecentTrades from "@/components/recent-trades"
import Banner from "@/components/banner"
import Footer from "@/components/footer"
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function TradingPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* 動態背景 */}
      <AnimatedBackground />
      
      {/* 網格圖案 */}
      <div className="fixed inset-0 grid-pattern opacity-20" />
      
      {/* 漸變光暈 */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Banner */}
      <Banner />
      
      {/* 主要內容 */}
      <main className="flex-1 relative">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* 市場選擇器 */}
            <div className="lg:col-span-4">
              <div className="glass-effect rounded-lg border border-white/10 neon-border">
                <MarketSelector />
              </div>
            </div>
            
            {/* 圖表區域 */}
            <div className="lg:col-span-3">
              <div className="glass-effect rounded-lg border border-white/10 neon-border p-4">
                <TradingViewChart />
              </div>
            </div>
            
            {/* 訂單簿和最近成交 */}
            <div className="lg:col-span-1 space-y-4">
              <div className="glass-effect rounded-lg border border-white/10 neon-border">
                <OrderBook />
              </div>
              <div className="glass-effect rounded-lg border border-white/10 neon-border">
                <RecentTrades />
              </div>
            </div>
            
            {/* 交易表單 */}
            <div className="lg:col-span-4">
              <div className="glass-effect rounded-lg border border-white/10 neon-border">
                <TradeForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

