// ============================================================
// LESSONS — Equity Value, Enterprise Value & Multiples (BIWS 04-04)
// ============================================================
const LESSONS_EV = [
    {
        id: 'ev-vs-equity',
        title: 'Equity Value vs. Enterprise Value',
        icon: '&#x1F4B9;',
        color: '#6366f1',
        audio: "ev_enterprise_value_overview_compressed.mp3",
        cards: [
            {
                term: 'Equity Value (Market Cap)',
                what: 'The value of EVERYTHING a company has (Total Assets – Total Liabilities) attributable ONLY to common equity investors. For public companies: Current Share Price × Diluted Shares Outstanding.',
                why: 'Equity Value represents what\'s left after ALL liabilities are paid off. It changes when the capital structure changes (e.g., adding Debt lowers Equity Value even if the business itself is unchanged) — making it less useful for cross-company comparisons.',
                example: 'Company has a $10 share price and 1,000 shares outstanding → Equity Value = $10,000. If the company takes on $2,000 in new Debt and holds the cash, the share price falls and Equity Value changes — even though the business is the same.'
            },
            {
                term: 'Enterprise Value (TEV)',
                what: 'The value of the company\'s CORE BUSINESS OPERATIONS (Operating Assets – Operating Liabilities) attributable to ALL INVESTORS: equity, debt, preferred, etc. Formula: Equity Value + Debt + Preferred – Cash & Cash Equivalents.',
                why: 'Enterprise Value strips out capital structure effects. A company with $500K in core operations is worth $500K to an acquirer whether it has $0 debt or $200K in debt (the acquirer just pays off the debt as part of the deal). TEV stays constant as leverage changes.',
                example: 'House analogy: $500K house with 50% mortgage → Down Payment (Equity) = $250K, Mortgage (Debt) = $250K. Enterprise Value = $500K regardless. Change to 20% down payment → Down Payment = $100K, Mortgage = $400K. EV is still $500K — the HOUSE hasn\'t changed.'
            },
            {
                term: 'The TEV Bridge Formula',
                what: 'Enterprise Value = Equity Value + Debt + Preferred Stock + Noncontrolling Interest – Cash & Equivalents. Moving from Equity Value to TEV: ADD items that represent other investor claims, SUBTRACT non-operating assets like Cash.',
                why: 'When you acquire a company, you inherit its Debt (so you pay it) and you keep its Cash (so it reduces your cost). Preferred and NCI represent other investor claims you also need to compensate. The bridge standardizes what you\'re actually paying for the operations.',
                example: 'Company: Equity Value $10,000, Debt $2,000, Preferred $500, Cash $1,500. TEV = $10,000 + $2,000 + $500 – $1,500 = $11,000. An acquirer pays $10K to existing shareholders, assumes $2K debt, pays $500 for preferred — net cost offset by $1.5K cash. Total "cost of operations" = $11K.'
            },
            {
                term: 'Why We Need Both',
                what: 'Some analyses produce Implied Equity Value (e.g., DDM, FCFE analysis), while others produce Implied Enterprise Value (e.g., DCF with FCFF, EBITDA multiples). You need the bridge to move between them and ultimately arrive at an implied share price.',
                why: 'Different metrics pair with different valuation methods. Revenue, EBIT, EBITDA are "all-investor" metrics → pair with TEV. EPS, Net Income are equity-only → pair with Equity Value. Mixing them (EV/Net Income or P/EBITDA) produces meaningless numbers.',
                example: 'DCF produces Implied TEV of $11,000. Subtract Debt ($2K) + Preferred ($500), add Cash ($1.5K) → Implied Equity Value = $10,000. Divide by 1,000 shares → Implied Share Price = $10. That\'s the number you compare to the current market price.'
            }
        ]
    },
    {
        id: 'equity-value-calc',
        title: 'Calculating Diluted Equity Value',
        icon: '&#x1F4C4;',
        color: '#10b981',
        audio: "ev_enterprise_value_overview_compressed.mp3",
        cards: [
            {
                term: 'Basic vs. Diluted Shares',
                what: 'Basic shares: shares currently outstanding (common stock only). Diluted shares: basic shares + all "in-the-money" options, warrants, RSUs, and convertible securities — items that COULD become shares.',
                why: 'Options and warrants, if exercised, dilute existing shareholders by creating new shares. You always use diluted shares for Equity Value because they represent the maximum potential share count — the most conservative approach for buyers.',
                example: 'Company: 1,000 basic shares. 100 options outstanding with $8 strike, stock price $10 (in-the-money). Treasury Stock Method: proceeds = 100 × $8 = $800; new shares bought back = $800 / $10 = 80; net new shares = 100 – 80 = 20. Diluted shares = 1,020.'
            },
            {
                term: 'Treasury Stock Method (TSM)',
                what: 'For options and warrants: assumes the company uses exercise proceeds to repurchase shares at current market price. Net dilution = options exercised – shares repurchased. Only applies to in-the-money options (strike price < current price).',
                why: 'The company doesn\'t just issue new shares for free — it receives cash from option exercises. The TSM models the realistic net impact: shares issued minus shares the company could buy back with those proceeds.',
                example: 'Options: 100 shares at $5 strike. Stock price: $12. Proceeds = 100 × $5 = $500. Shares repurchased = $500 / $12 = 41.7. Net dilution = 100 – 41.7 = 58.3 shares. Only include these if strike price < current price.'
            },
            {
                term: 'Other Dilutive Items',
                what: 'RSUs (Restricted Stock Units): always dilutive because the exercise price is $0. Convertible Bonds: convert to shares using If-Converted Method — add shares that WOULD be issued, remove interest expense from Net Income (since the debt is gone). Convertible Preferred: similar.',
                why: 'RSUs are simpler than options (always in the money at $0 cost to the holder). For convertibles, you evaluate whether converting would increase or decrease EPS — if it increases EPS (anti-dilutive), you EXCLUDE it from diluted shares.',
                example: 'RSUs: 50 shares vesting in the future. They count in diluted shares (at $0 strike, fully dilutive). Convertible bond: $500 face, converts to 50 shares. If including those 50 shares and adding back $20 in after-tax interest increases EPS, the convert is anti-dilutive → exclude.'
            }
        ]
    },
    {
        id: 'valuation-metrics',
        title: 'Valuation Metrics: EBITDA, EBIT, FCF',
        icon: '&#x1F4CA;',
        color: '#f59e0b',
        audio: "ev_enterprise_value_overview_compressed.mp3",
        cards: [
            {
                term: 'EBITDA',
                what: 'Earnings Before Interest, Taxes, Depreciation & Amortization. Approximates cash-based operating profit before capital structure effects. Formula: EBIT + D&A. Often used as a proxy for operating cash flow.',
                why: 'EBITDA removes the effects of capital structure (interest), accounting policy (D&A), and taxes. It allows comparison across companies regardless of how they\'re financed, how they depreciate assets, or their tax situations. Almost universal in M&A and credit analysis.',
                example: 'Company A: EBIT $100, D&A $30 → EBITDA $130. Company B: EBIT $80, D&A $50 → EBITDA $130. They\'re equally profitable on an operating cash basis despite different accounting for their assets. EBITDA exposes this equivalence.'
            },
            {
                term: 'EBIT (Operating Income)',
                what: 'Earnings Before Interest and Taxes. Revenue – COGS – OpEx – D&A. Removes capital structure effects (interest) but keeps the impact of D&A (which reflects CapEx). Better proxy for Free Cash Flow than EBITDA for capital-intensive businesses.',
                why: 'Because EBIT deducts D&A (which is tied to CapEx), it accounts for the cost of maintaining the asset base. EBITDA ignores this, making it misleading for asset-heavy industries where CapEx is a real, recurring economic cost.',
                example: 'Airlines, manufacturers, and utilities should be compared on EBIT (high CapEx means D&A is significant). SaaS companies with minimal PP&E can reasonably use EBITDA. CapEx ≈ D&A in stable businesses → EBIT ≈ FCF before taxes and working capital.'
            },
            {
                term: 'Free Cash Flow (FCF) — Two Types',
                what: 'FCFF (Free Cash Flow to Firm / Unlevered FCF): cash available to ALL investors before debt payments. FCFE (Free Cash Flow to Equity / Levered FCF): cash remaining for EQUITY investors after debt payments. FCFF pairs with TEV; FCFE pairs with Equity Value.',
                why: 'The distinction matters for valuation: discounting FCFF at WACC gives Implied TEV. Discounting FCFE at Cost of Equity gives Implied Equity Value. Mixing the wrong cash flow with the wrong rate destroys the analysis.',
                example: 'FCFF = EBIT × (1 – Tax Rate) + D&A – CapEx – ΔWC. Start from an all-investor metric. FCFE = Net Income + D&A – CapEx – ΔWC + Net Borrowing. Start from the equity metric. A company with $100M FCFF and $50M interest (after-tax $37.5M at 25% tax) has FCFE ≈ $62.5M.'
            }
        ]
    },
    {
        id: 'multiples',
        title: 'Valuation Multiples',
        icon: '&#x1F522;',
        color: '#ec4899',
        audio: "ev_enterprise_value_overview_compressed.mp3",
        cards: [
            {
                term: 'How to Pair Metrics with Multiples',
                what: 'Enterprise Value metrics (TEV) pair with metrics available to ALL investors: Revenue, EBIT, EBITDA, FCFF. Equity Value metrics pair with equity-only items: Net Income, EPS, Book Value of Equity, FCFE. Never pair TEV with an equity metric.',
                why: 'If you divide TEV by Net Income (which belongs to equity holders only), you\'re comparing apples and oranges. The numerator includes Debt holders\' value; the denominator excludes their cash flows. The multiple is meaningless.',
                example: 'Correct: TEV/EBITDA, TEV/Revenue, P/E (Equity Value / Net Income), P/Book. Wrong: TEV/Net Income, P/EBITDA (unless you subtract debt/add cash first — which would just recreate TEV). The pairing must be internally consistent.'
            },
            {
                term: 'Common Multiples & What They Measure',
                what: 'TEV/Revenue: growth and scalability for early-stage or high-growth companies. TEV/EBITDA: most common in M&A — profitability relative to operating cash flow. TEV/EBIT: better for capital-intensive businesses. P/E: earnings valuation for mature businesses.',
                why: 'No single multiple works for every company. PE and Financials use P/Book or P/E. Tech uses TEV/Revenue or P/E. Industrials use TEV/EBITDA. Energy uses TEV/EBITDA or EV/production metrics. Always use metrics that reflect the company\'s actual economics.',
                example: 'For Amazon in 2010: Revenue multiple made sense — EBITDA and earnings were near zero, but revenue was growing fast. For a stable utility: TEV/EBITDA or P/E. For a bank: P/Book (1.0x book = fair value). Different businesses, different metrics.'
            },
            {
                term: 'Using Multiples in Comparable Companies Analysis (Public Comps)',
                what: 'Step 1: Select 5-10 similar public companies. Step 2: Calculate their current TEV/EBITDA (and other multiples). Step 3: Apply the median multiple to your target company\'s EBITDA. Step 4: Output = Implied Enterprise Value → convert to equity value and share price.',
                why: 'Multiples are relative valuation tools — they tell you what the MARKET is paying for similar businesses. They don\'t tell you if those prices are "right," but they tell you if a deal is in range vs. recent market transactions.',
                example: 'Peer group 5-company median TEV/EBITDA = 9.0x. Target\'s LTM EBITDA = $50M. Implied TEV = 9.0x × $50M = $450M. Subtract net debt of $100M → Implied Equity Value = $350M. Divide by 50M shares → Implied share price = $7.00.'
            }
        ]
    },
    {
        id: 'ev-adjustments',
        title: 'Enterprise Value Adjustments',
        icon: '&#x1F527;',
        color: '#8b5cf6',
        audio: "ev_enterprise_value_overview_compressed.mp3",
        cards: [
            {
                term: 'How Events Impact Equity Value vs. Enterprise Value',
                what: 'Operating changes that grow the business increase BOTH TEV and Equity Value. Pure capital structure changes (issuing debt and holding cash) change Equity Value but NOT TEV. Investing cash in operating assets increases TEV and Equity Value together.',
                why: 'TEV measures the VALUE of the business itself. Shifting between Debt and Equity, or between Cash and Debt, is just a rearrangement of claims — it doesn\'t create or destroy business value. But truly growing the business (improving margins, growing revenue) does.',
                example: 'Company raises $200 in Debt and holds as Cash: Equity Value falls by ~$200 (higher risk), Debt rises $200, Cash rises $200 → TEV unchanged (the $200 in new cash offsets the $200 in new debt). Contrast: company uses $200 cash to fund a profitable expansion → Equity Value and TEV both rise.'
            },
            {
                term: 'NOLs, Pensions, Leases in Enterprise Value',
                what: 'NOLs (Net Operating Loss carryforwards): subtract the PV of tax savings from TEV to get Equity Value (NOLs create future cash savings = like an asset). Pension obligations: add unfunded portion to TEV (it\'s debt-like). Operating leases: add lease liability back to TEV under IFRS 16 / ASC 842.',
                why: 'Standard TEV/EBITDA multiples don\'t include these adjustments, but acquirers care about them in deals. An unfunded pension = real cash outflow coming in the future. An NOL = real cash tax savings. Ignoring them means mispricing the acquisition.',
                example: 'Target has: $1M TEV/EBITDA-implied value, $100K unfunded pension deficit, $50K NOL with PV of tax savings $12.5K. Adjusted TEV = $1M + $100K – $12.5K = $1,087.5K for acquisition pricing purposes.'
            }
        ]
    }
];
