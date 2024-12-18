"use client"

import TradingViewChart from "@/components/trading-view-chart"
import OrderBook from "@/components/order-book"
import TradeForm from "@/components/trade-form"
import MarketSelector from "@/components/market-selector"
import TradeHistory from "@/components/trade-history"
import Banner from "@/components/banner"
import Footer from "@/components/footer"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { createNetworkConfig, SuiClientProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@mysten/dapp-kit/dist/index.css';


import dynamic from 'next/dynamic';

const WalletProvider = dynamic(() => import('@mysten/dapp-kit').then(mod => mod.WalletProvider), {
	ssr: false,
});


const { networkConfig } = createNetworkConfig({
	localnet: { url: getFullnodeUrl('localnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
	devnet:{url: 'https://fullnode.devnet.sui.io:443' }
});

const queryClient = new QueryClient();


export default function webPage(){
  return(
    <QueryClientProvider client={queryClient}>
			<SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
				<WalletProvider>
					<TradingPage/>
				</WalletProvider>
			</SuiClientProvider>
		</QueryClientProvider>
  );
}


function TradingPage() {
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

            {/* 橫向區域 */}
            <div className="flex justify-start items-start space-x-4 ">
              <div className="flex flex-col space-y-4">
                {/* 圖表區域 */}
                <div className="lg:col-span-3 w-[1100px] flex items-center justify-center mr-16">
                  <div className="glass-effect rounded-lg border border-white/10 neon-border p-4 ml-12">
                    <TradingViewChart />
                  </div>
                </div>
                {/* 歷史訂單 */}
                <div className="lg:col-span-4 w-[1150px] flex items-center justify-center">
                  <TradeHistory />
                </div>
              </div>

                {/* 訂單簿和最近成交 */}
                <div className="lg:col-span-1 space-y-4 flex items-center justify-center">
                  <div className="glass-effect rounded-lg border border-white/10 neon-border">
                    <OrderBook />
                  </div>
                </div>
            </div>

            {/*
            <div className="glass-effect rounded-lg border border-white/10 neon-border">
                    <RecentTrades />
            </div> */}


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

