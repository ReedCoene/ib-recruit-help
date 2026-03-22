// ============================================================
// LESSONS — M&A Deals & Merger Models (BIWS 04-06)
// ============================================================
const LESSONS_MA = [
    {
        id: 'why-ma',
        title: 'Why Do Companies Acquire Other Companies?',
        icon: '&#x1F91D;',
        color: '#6366f1',
        audio: "ma_merger_models_overview_compressed.mp3",
        cards: [
            {
                term: 'Strategic Reasons for M&A',
                what: 'Revenue synergies (cross-selling, new markets), cost synergies (eliminating duplicate functions), acquiring technology/talent, removing a competitor, or accelerating entry into new geographies/product lines.',
                why: 'Organic growth is slow and uncertain. Acquisitions let a company buy capabilities, market share, or cash flows immediately. However, most academic research shows that acquirers overpay and struggle to capture expected synergies.',
                example: 'Microsoft acquired GitHub for $7.5B — not to sell more products immediately, but to control the developer ecosystem, cross-sell Azure, and build goodwill with developers. The "synergy" was ecosystem dominance, not just revenue.'
            },
            {
                term: 'EPS Accretion vs. Dilution',
                what: 'If the combined company\'s EPS is HIGHER than the acquirer\'s standalone EPS, the deal is accretive. If combined EPS is LOWER, it\'s dilutive. EPS = Combined Net Income / Pro-Forma Diluted Shares.',
                why: 'EPS accretion/dilution is how boards and investors judge whether an M&A deal "works" in the near term. An accretive deal signals efficiency gains; a dilutive deal requires justification (usually long-term growth or strategic value that will pay off later).',
                example: 'Acquirer EPS: $2.00. After acquiring Target: Combined Net Income / New Share Count = $2.20. Deal is 10% accretive — shareholders benefit immediately through higher EPS. If result were $1.80, it\'s 10% dilutive — investors want to know when it will become accretive.'
            },
            {
                term: 'The Merger Math Framework',
                what: 'Accretion/Dilution = (Acquisition Net Income contribution – Financing Cost) / Pro-Forma Shares. Net income from Target minus incremental interest expense (if debt-financed) or minus dilution from new shares (if stock-financed) determines the net EPS impact.',
                why: 'Understanding the mechanics lets you quickly assess any deal. Cash/Debt deal: no new shares, so you compare Target\'s NI to incremental interest cost. Stock deal: new shares issued but no interest cost. The relative comparison determines accretion/dilution.',
                example: 'Acquirer: NI $100M, 50M shares, EPS $2.00. Target acquired for $200M: NI $20M. If 100% cash (5% interest, 25% tax): incremental cost = $200M × 5% × 0.75 = $7.5M. Net NI add = $20M – $7.5M = $12.5M. New NI = $112.5M, same 50M shares, new EPS = $2.25. Accretive by 12.5%.'
            }
        ]
    },
    {
        id: 'purchase-price',
        title: 'Purchase Price & Deal Structure',
        icon: '&#x1F4B0;',
        color: '#10b981',
        audio: "ma_merger_models_overview_compressed.mp3",
        cards: [
            {
                term: 'Purchase Price Components',
                what: 'The "Purchase Price" in M&A can refer to: (1) Purchase Equity Value — what you pay the shareholders. (2) Total Enterprise Value — the total cost including assumed debt. For analysis, both matter but they mean different things.',
                why: 'A company with $500M equity value and $200M debt has $700M TEV. If you buy just the equity for $500M and assume $200M in debt, your total economic "cost" is $700M. Many analysts confuse these two and misstate what was "paid" for the company.',
                example: '"Company acquired for $500M" — does that include assumed debt? You must clarify: Purchase Equity Value $500M or TEV $500M? For IB analysis, you usually want the TEV-based purchase price to compare multiples (e.g., deal valued at 8x EBITDA on TEV basis).'
            },
            {
                term: 'Cash / Debt / Stock Mix',
                what: 'Acquirers can use Cash on hand, new Debt (the most common in large deals), or new Stock (shares issued to Target shareholders) to fund acquisitions. The mix affects EPS, leverage ratio, and how much dilution occurs.',
                why: 'Cash is simple but depletes liquidity. Debt amplifies EPS accretion but increases leverage. Stock avoids debt but dilutes existing shareholders and requires Target shareholders to accept the acquirer\'s shares (implying they believe in the combined company).',
                example: 'Deal for $1B Target: Option A: 100% debt at 5% rate → Accretive if Target\'s NI > after-tax interest. Option B: 100% stock → Accretive if Target\'s P/E < Acquirer\'s P/E. Option C: 50/50 → Blend of both effects. Banks usually model all three scenarios.'
            },
            {
                term: 'When is a Deal Accretive?',
                what: 'Cash/Debt deal: accretive when Target\'s After-Tax Yield (Net Income / Purchase Price) > After-Tax Cost of Debt. Stock deal: accretive when Target\'s P/E < Acquirer\'s P/E. Synergies can flip a dilutive deal to accretive.',
                why: 'These rules of thumb let you evaluate any M&A deal quickly. A high-P/E acquirer buying a low-P/E target in an all-stock deal will almost always be accretive — they\'re issuing expensive shares to buy cheap ones. The opposite is almost always dilutive.',
                example: 'Acquirer P/E = 25x. Target P/E = 15x. All-stock deal: acquirer issues shares at 25x earnings to buy earnings at 15x. Each dollar of earnings bought "cost" less than a dollar of earnings given up → accretive. Rule: stock deal accretive when Acquirer P/E > Target P/E.'
            }
        ]
    },
    {
        id: 'merger-model',
        title: 'The Full Merger Model',
        icon: '&#x1F4CA;',
        color: '#f59e0b',
        audio: "ma_merger_models_overview_compressed.mp3",
        cards: [
            {
                term: 'Sources & Uses of Funds',
                what: 'Sources: Where the money comes from (cash on hand, new debt issued, new equity/stock). Uses: Where the money goes (purchase equity value, transaction fees, repay existing debt, pay retention to management). Sources must equal Uses.',
                why: 'The sources & uses table is the "accounting" for an M&A transaction. It tells you exactly how the deal is financed and where every dollar goes. It\'s the starting point for all subsequent financial statement adjustments.',
                example: 'Acquiring company for $500M Purchase Equity Value. Sources: $300M new debt + $200M cash on hand = $500M. Uses: $490M purchase equity + $10M transaction fees = $500M. Every dollar is accounted for. Sources = Uses (it\'s like the BS — must balance).'
            },
            {
                term: 'Purchase Price Allocation (PPA)',
                what: 'When a company is acquired, its balance sheet is "stepped up" to fair market value. Excess paid above Net Book Value is allocated to: (1) PP&E write-up, (2) Other Intangible Assets, and (3) Goodwill (the remainder).',
                why: 'GAAP requires that the purchase price be allocated to identifiable assets at fair value. Goodwill = Purchase Price – Fair Value of Net Assets. Intangibles amortize (reduces future Net Income). Goodwill doesn\'t amortize under US GAAP but can be impaired.',
                example: 'Acquired company has $300M Book Value. Paid $500M. Premium = $200M. Allocated: $80M to PP&E write-up, $70M to customer contracts (intangibles), $50M to remaining Goodwill. Goodwill ($50M) stays; Intangibles ($70M) amortize over 5-10 years → reduces future EPS.'
            },
            {
                term: 'Pro-Forma Combined Income Statement',
                what: 'Add Target revenue and expenses to Acquirer\'s, then subtract: (1) acquisition-related D&A (from PP&E and intangible write-ups), (2) new interest expense (on acquisition debt), and add in (3) synergies. Divide by pro-forma share count for EPS.',
                why: 'The pro-forma IS shows the true annual cost of the acquisition: not just what you paid, but the ongoing earnings impact of increased D&A, higher interest costs, and any synergies. This is the number that shows whether the deal is accretive or dilutive.',
                example: 'Acquirer NI: $100M. Target NI: $20M. New D&A from intangibles: –$7M. New interest expense (net of tax): –$10M. Synergies (net of tax): +$5M. Pro-forma NI = $100 + $20 – $7 – $10 + $5 = $108M. Compare to standalone EPS to check accretion/dilution.'
            }
        ]
    },
    {
        id: 'ev-equity-in-ma',
        title: 'How EV and Equity Value Change in M&A',
        icon: '&#x1F4B9;',
        color: '#8b5cf6',
        audio: "ma_merger_models_overview_compressed.mp3",
        cards: [
            {
                term: 'Acquirer EV and Equity Value After Deal',
                what: 'In an all-cash deal using existing cash: Acquirer\'s TEV increases by the value added by the target. Equity Value stays flat (cash out, but business value in). In a new-debt deal: TEV rises (new debt adds to TEV), Equity Value may fall (more leverage = more risk).',
                why: 'TEV captures the total operations value (acquirer + target). Equity Value reflects what\'s left for common shareholders after debt. A cash deal depletes an asset (cash) and adds another (target operations) — roughly value-neutral for equity initially.',
                example: 'Acquirer: Equity Value $1,000M, TEV $1,200M. Acquires Target for $200M (TEV) in all-cash. Post-deal TEV = $1,200 + $200 = $1,400M. Cash decreases by $200M but the target\'s operating assets (worth $200M) are now included → net effect on Equity Value minimal if price was fair.'
            },
            {
                term: 'Synergies and Value Creation',
                what: 'Synergies = additional value created by combining two companies. Revenue synergies (cross-selling, pricing power) are harder to achieve and get less credit. Cost synergies (eliminating duplicate headcount, facilities, systems) are more reliable and priced in by markets.',
                why: 'A company rarely pays only intrinsic value for a target — they pay a premium. That premium is only justified if synergies exceed it. If synergies < premium paid, the deal destroys value for the acquirer\'s shareholders.',
                example: 'Acquirer pays 8x EBITDA for a target trading at 6x. The 2x premium = ~$100M. To justify this, the deal must generate at least $100M in PV of synergies. If synergies are $40M PV, the acquirer overpaid by $60M → negative NPV deal for the acquirer.'
            }
        ]
    }
];
