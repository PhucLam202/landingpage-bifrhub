"use client";

import React, { useState } from "react";
import {
  FaLink,
  FaShieldCat,
  FaRobot,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaChevronDown,
} from "react-icons/fa6";
import { cn } from "@/app/lib/utils";

const faqs = [
  {
    id: 1,
    question: "What is Liquid Staking?",
    answer:
      "Liquid staking is a revolutionary approach that allows you to stake your tokens while maintaining liquidity. When you stake through our platform, you receive Liquid Staking Tokens (LSTs) that represent your staked assets. These LSTs can be used across DeFi protocols for lending, trading, or providing liquidity while your original tokens continue earning staking rewards. This eliminates the traditional trade-off between earning staking rewards and maintaining liquidity for other opportunities.",
    icon: <FaLink className="text-violet-400 w-5 h-5" />,
  },
  {
    id: 2,
    question: "Are my staked assets safe?",
    answer:
      "Absolutely. Security is our top priority. Your assets are protected through multiple layers: audited smart contracts by leading security firms, non-custodial protocols meaning you retain control of your keys, slashing protection mechanisms, and diversified validator sets to minimize risks. We also maintain insurance coverage and emergency pause mechanisms. Our platform has undergone rigorous security audits and has been battle-tested with millions in TVL without any security incidents.",
    icon: <FaShieldCat className="text-green-400 w-5 h-5" />,
  },
  {
    id: 3,
    question: "How does the AI Portfolio Assistant work?",
    answer:
      "Our AI Portfolio Assistant uses advanced machine learning algorithms to analyze your staking profile, historical performance, market conditions, and risk tolerance. It provides personalized recommendations for optimal staking strategies, automatically rebalances your portfolio based on market conditions, identifies arbitrage opportunities between different protocols, and suggests when to compound rewards or adjust allocations. The AI continuously learns from market data and user behavior to improve recommendations over time.",
    icon: <FaRobot className="text-pink-400 w-5 h-5" />,
  },
  {
    id: 4,
    question: "What are the staking rewards?",
    answer:
      "Staking rewards vary by network and protocol but typically range from 4% to 15% APY depending on the asset and market conditions. Our platform automatically compounds your rewards, maximizing your returns through frequent reinvestment. You also earn additional rewards through our native token incentives, MEV rewards sharing, and potential airdrops from supported protocols. Real-time APY calculations are displayed on your dashboard, and you can track your earnings history and projections.",
    icon: <FaChartLine className="text-blue-400 w-5 h-5" />,
  },
  {
    id: 5,
    question: "How do I start staking?",
    answer:
      "Getting started is simple: First, connect your wallet (MetaMask, WalletConnect, or Coinbase Wallet supported). Then select the tokens you want to stake from our supported list. Choose your preferred staking strategy or let our AI assistant recommend one. Review the terms and expected returns, then confirm the transaction. Your LSTs will be minted instantly, and you can start earning rewards immediately. Our one-click staking process handles all the complex interactions with underlying protocols.",
    icon: <FaArrowUp className="text-cyan-400 w-5 h-5" />,
  },
  {
    id: 6,
    question: "Can I unstake at any time?",
    answer:
      "Yes, you have full flexibility to unstake your tokens. The process varies by protocol: some offer instant unstaking with a small fee, while others have unbonding periods ranging from 1-28 days depending on the network. During unbonding periods, your tokens stop earning rewards but remain secure. You can also trade your LSTs on secondary markets for immediate liquidity if needed. Our platform clearly displays unstaking conditions and estimated withdrawal times for each protocol.",
    icon: <FaArrowDown className="text-yellow-400 w-5 h-5" />,
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full py-20 z-10">
      {/* BG full màn hình */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1156] to-[#181024] opacity-90 -z-10" />
      {/* Nội dung dashboard style */}
      <div className="relative w-full max-w-5xl mx-auto px-8 py-12 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-md bg-white/5">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between px-8 py-6 text-white text-left hover:bg-white/10 transition-colors rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  {faq.icon}
                  <span className="font-semibold text-lg">{faq.question}</span>
                </div>
                <FaChevronDown
                  className={cn(
                    "w-5 h-5 mt-1 text-white/70 transition-transform duration-300",
                    openId === faq.id && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  openId === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-8 pb-6 text-base text-neutral-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}