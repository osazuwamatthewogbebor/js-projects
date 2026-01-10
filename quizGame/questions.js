const Questions = [
    {
        question: "What is the biggest advantage of building businesses in emerging markets?",
        answer: [
            { text: "Lower competition and faster growth", correct: true },
            { text: "No regulations", correct: false },
            { text: "Easy funding", correct: false },
            { text: "Guaranteed profits", correct: false }
        ]
    },
    {
        question: "What is arbitrage in emerging markets?",
        answer: [
            { text: "Buying low in one market and selling higher in another", correct: true },
            { text: "Avoiding taxes", correct: false },
            { text: "Currency exchange", correct: false },
            { text: "Government subsidies", correct: false }
        ]
    },
    {
        question: "What is the main risk of frontier market investing?",
        answer: [
            { text: "Overvaluation", correct: false },
            { text: "Political and regulatory instability", correct: true },
            { text: "Too much liquidity", correct: false },
            { text: "High transparency", correct: false }
        ]
    },
    {
        question: "Which indicator best signals consumer demand growth in Africa?",
        answer: [
            { text: "Urbanization rate", correct: true },
            { text: "Gold reserves", correct: false },
            { text: "Foreign debt", correct: false },
            { text: "Export tariffs", correct: false }
        ]
    },
    {
        question: "What is the purpose of hedging currency risk?",
        answer: [
            { text: "Increase volatility", correct: false },
            { text: "Protect against exchange rate losses", correct: true },
            { text: "Speculate on FX", correct: false },
            { text: "Avoid regulation", correct: false }
        ]
    },
    {
        question: "Why is informal market data harder to analyze?",
        answer: [
            { text: "It is unstructured and underreported", correct: true },
            { text: "It is illegal", correct: false },
            { text: "It is taxed heavily", correct: false },
            { text: "It is centralized", correct: false }
        ]
    },
    {
        question: "What is a key advantage of local partnerships in African markets?",
        answer: [
            { text: "Access to political favors", correct: false },
            { text: "Cultural and regulatory navigation", correct: true },
            { text: "Free labor", correct: false },
            { text: "Guaranteed customers", correct: false }
        ]
    },
    {
        question: "What is the main function of development finance institutions (DFIs)?",
        answer: [
            { text: "Maximize profit", correct: false },
            { text: "De-risk private investment", correct: true },
            { text: "Fund only governments", correct: false },
            { text: "Control inflation", correct: false }
        ]
    },
    {
        question: "Why do many African startups fail after Series A?",
        answer: [
            { text: "Too much capital", correct: false },
            { text: "Weak unit economics", correct: true },
            { text: "Lack of marketing", correct: false },
            { text: "Too many competitors", correct: false }
        ]
    },
    {
        question: "What does 'patient capital' mean?",
        answer: [
            { text: "Capital with long investment horizons", correct: true },
            { text: "Capital from healthcare", correct: false },
            { text: "Government money", correct: false },
            { text: "Low interest loans", correct: false }
        ]
    },

    {
        question: "What metric best reflects real profitability in high-inflation economies?",
        answer: [
            { text: "Nominal profit", correct: false },
            { text: "Real return after inflation", correct: true },
            { text: "Revenue growth", correct: false },
            { text: "Market share", correct: false }
        ]
    },
    {
        question: "Why is logistics a dominant bottleneck in Africa?",
        answer: [
            { text: "Low demand", correct: false },
            { text: "Infrastructure gaps increase costs", correct: true },
            { text: "No technology", correct: false },
            { text: "High wages", correct: false }
        ]
    },
    {
        question: "What is FX repatriation risk?",
        answer: [
            { text: "Currency theft", correct: false },
            { text: "Inability to move profits out of a country", correct: true },
            { text: "Exchange rate volatility", correct: false },
            { text: "Capital gains tax", correct: false }
        ]
    },
    {
        question: "Why are platform business models powerful in emerging markets?",
        answer: [
            { text: "They remove intermediaries and aggregate fragmented supply", correct: true },
            { text: "They avoid taxes", correct: false },
            { text: "They eliminate competition", correct: false },
            { text: "They work only in tech hubs", correct: false }
        ]
    },
    {
        question: "What is the risk of dollar-denominated debt in local-currency revenue businesses?",
        answer: [
            { text: "Lower interest", correct: false },
            { text: "Currency mismatch", correct: true },
            { text: "Tax penalties", correct: false },
            { text: "More dilution", correct: false }
        ]
    },
    {
        question: "Why do conglomerates often succeed in Africa?",
        answer: [
            { text: "They lobby governments", correct: false },
            { text: "They internalize weak markets and infrastructure", correct: true },
            { text: "They avoid competition", correct: false },
            { text: "They have foreign backing", correct: false }
        ]
    },
    {
        question: "What does “last-mile” advantage mean?",
        answer: [
            { text: "Access to the end consumer in fragmented markets", correct: true },
            { text: "Fast internet", correct: false },
            { text: "Cheap transport", correct: false },
            { text: "Urban dominance", correct: false }
        ]
    },
    {
        question: "Why is vertical integration strategic in weak institutional environments?",
        answer: [
            { text: "It increases bureaucracy", correct: false },
            { text: "It reduces dependency on unreliable partners", correct: true },
            { text: "It lowers profits", correct: false },
            { text: "It attracts regulators", correct: false }
        ]
    },
    {
        question: "What is regulatory capture?",
        answer: [
            { text: "Avoiding regulation", correct: false },
            { text: "Influencing regulation to favor incumbents", correct: true },
            { text: "Bribing officials", correct: false },
            { text: "Ignoring laws", correct: false }
        ]
    },
    {
        question: "Why do mobile money systems scale faster than banks in Africa?",
        answer: [
            { text: "They are less secure", correct: false },
            { text: "They leverage telecom distribution and trust", correct: true },
            { text: "They avoid regulation", correct: false },
            { text: "They have better branding", correct: false }
        ]
    },

    {
        question: "What is a dual-class share structure used for?",
        answer: [
            { text: "Tax optimization", correct: false },
            { text: "Founder control after raising capital", correct: true },
            { text: "Increasing dividends", correct: false },
            { text: "Reducing dilution", correct: false }
        ]
    },
    {
        question: "Why are family offices becoming active in African private markets?",
        answer: [
            { text: "High liquidity", correct: false },
            { text: "Search for uncorrelated long-term returns", correct: true },
            { text: "Political influence", correct: false },
            { text: "Tax avoidance", correct: false }
        ]
    },
    {
        question: "What is blended finance?",
        answer: [
            { text: "Mixing equity and debt", correct: false },
            { text: "Using concessional capital to crowd in private capital", correct: true },
            { text: "Combining currencies", correct: false },
            { text: "Joint ventures", correct: false }
        ]
    },
    {
        question: "What is a balance sheet moat?",
        answer: [
            { text: "High revenue", correct: false },
            { text: "Strong capital reserves that competitors lack", correct: true },
            { text: "Brand recognition", correct: false },
            { text: "Customer loyalty", correct: false }
        ]
    },
    {
        question: "Why do infrastructure assets attract patient capital?",
        answer: [
            { text: "Fast exits", correct: false },
            { text: "Stable, long-term cash flows", correct: true },
            { text: "High volatility", correct: false },
            { text: "Low entry costs", correct: false }
        ]
    },
    {
        question: "What is the role of sovereign wealth funds in Africa?",
        answer: [
            { text: "Short-term trading", correct: false },
            { text: "Stabilization and long-term national investment", correct: true },
            { text: "Private venture funding", correct: false },
            { text: "Currency control", correct: false }
        ]
    },
    {
        question: "What is the biggest challenge of cross-border African expansion?",
        answer: [
            { text: "Marketing", correct: false },
            { text: "Regulatory fragmentation", correct: true },
            { text: "Talent shortages", correct: false },
            { text: "Currency exchange", correct: false }
        ]
    },
    {
        question: "Why are toll roads, ports, and power plants considered strategic assets?",
        answer: [
            { text: "They grow fast", correct: false },
            { text: "They control essential economic flows", correct: true },
            { text: "They are trendy", correct: false },
            { text: "They are subsidized", correct: false }
        ]
    },
    {
        question: "What is “embedded finance”?",
        answer: [
            { text: "Hidden banking", correct: false },
            { text: "Financial services integrated into non-financial platforms", correct: true },
            { text: "Illegal lending", correct: false },
            { text: "Shadow banking", correct: false }
        ]
    },
    {
        question: "Why is data a strategic asset in emerging markets?",
        answer: [
            { text: "It improves ads only", correct: false },
            { text: "It reduces information asymmetry", correct: true },
            { text: "It replaces capital", correct: false },
            { text: "It avoids taxes", correct: false }
        ]
    },

    {
        question: "What is the danger of over-subsidized growth?",
        answer: [
            { text: "Slow adoption", correct: false },
            { text: "Unsustainable unit economics", correct: true },
            { text: "Low valuation", correct: false },
            { text: "Regulatory risk", correct: false }
        ]
    },
    {
        question: "Why is control over distribution often more valuable than the product itself?",
        answer: [
            { text: "Distribution shapes customer access and pricing power", correct: true },
            { text: "Products change faster", correct: false },
            { text: "Distribution is cheaper", correct: false },
            { text: "Products are easily copied", correct: false }
        ]
    },
    {
        question: "What is geopolitical risk?",
        answer: [
            { text: "Risk from competitors", correct: false },
            { text: "Risk from political events affecting markets", correct: true },
            { text: "Risk from inflation", correct: false },
            { text: "Risk from currency", correct: false }
        ]
    },
    {
        question: "What is a capital stack?",
        answer: [
            { text: "Pile of money", correct: false },
            { text: "Hierarchy of funding sources by risk and return", correct: true },
            { text: "Debt only", correct: false },
            { text: "Shareholder list", correct: false }
        ]
    },
    {
        question: "Why is pricing power the ultimate moat?",
        answer: [
            { text: "It increases volume", correct: false },
            { text: "It allows margin expansion without losing customers", correct: true },
            { text: "It avoids taxes", correct: false },
            { text: "It attracts investors", correct: false }
        ]
    },
    {
        question: "What is a corridor economy?",
        answer: [
            { text: "Urban centers", correct: false },
            { text: "Trade routes that concentrate economic activity", correct: true },
            { text: "Digital platforms", correct: false },
            { text: "Free trade zones", correct: false }
        ]
    },
    {
        question: "What is the biggest risk of founder-led empires?",
        answer: [
            { text: "Too much vision", correct: false },
            { text: "Key-person dependency", correct: true },
            { text: "Too much capital", correct: false },
            { text: "Low innovation", correct: false }
        ]
    },
    {
        question: "Why is institutional trust more important than brand in some emerging markets?",
        answer: [
            { text: "Brand is irrelevant", correct: false },
            { text: "Trust substitutes for weak formal institutions", correct: true },
            { text: "People dislike brands", correct: false },
            { text: "Advertising is banned", correct: false }
        ]
    },
    {
        question: "What is an economic rent?",
        answer: [
            { text: "Profit from real estate", correct: false },
            { text: "Excess returns from control over scarce resources", correct: true },
            { text: "Illegal income", correct: false },
            { text: "Tax revenue", correct: false }
        ]
    },
    {
        question: "What defines an empire business?",
        answer: [
            { text: "Large revenue", correct: false },
            { text: "Control over critical economic infrastructure", correct: true },
            { text: "Many employees", correct: false },
            { text: "Global presence", correct: false }
        ]
    },
    {
        question: "What is path dependency?",
        answer: [
            { text: "Stuck in old systems", correct: false },
            { text: "Early decisions shape long-term outcomes", correct: true },
            { text: "Slow innovation", correct: false },
            { text: "Regulatory risk", correct: false }
        ]
    },
    {
        question: "Why do emerging market billionaires often come from logistics, energy, or finance?",
        answer: [
            { text: "High glamour", correct: false },
            { text: "They control economic chokepoints", correct: true },
            { text: "They are trendy sectors", correct: false },
            { text: "They get subsidies", correct: false }
        ]
    },
    {
        question: "What is capital intensity?",
        answer: [
            { text: "Number of employees", correct: false },
            { text: "Amount of capital required to generate revenue", correct: true },
            { text: "Speed of growth", correct: false },
            { text: "Market size", correct: false }
        ]
    },
    {
        question: "What is the role of exit strategy in empire building?",
        answer: [
            { text: "To sell quickly", correct: false },
            { text: "To structure optionality and capital recycling", correct: true },
            { text: "To impress investors", correct: false },
            { text: "To avoid taxes", correct: false }
        ]
    }
];
