// ============================================================
// QUESTIONS — M&A Deals & Merger Models (BIWS 04-06)
// ============================================================

const ma_level1 = [
    { type: 'flashcard', term: 'EPS Accretion', definition: 'Pro-forma combined EPS is HIGHER than the acquirer\'s standalone EPS. The deal immediately benefits existing shareholders via higher earnings per share.' },
    { type: 'flashcard', term: 'EPS Dilution', definition: 'Pro-forma combined EPS is LOWER than the acquirer\'s standalone EPS. The deal reduces per-share earnings in the near term. Requires long-term strategic justification to proceed.' },
    { type: 'flashcard', term: 'Purchase Equity Value', definition: 'The total amount paid to acquire a company\'s shareholders. = Share Price × Diluted Shares × (1 + Takeover Premium). Does NOT include assumed debt.' },
    { type: 'flashcard', term: 'Enterprise Value in M&A (TEV)', definition: 'Total acquisition cost = Purchase Equity Value + Target\'s Existing Debt Assumed – Target\'s Cash Acquired. Represents the true economic cost of owning the target\'s operations.' },
    { type: 'flashcard', term: 'Synergies', definition: 'Additional value created by combining two companies. Revenue synergies: cross-sell, pricing power, new markets. Cost synergies: eliminate duplicate headcount, facilities, systems. Cost synergies are more reliable.' },
    { type: 'flashcard', term: 'Sources & Uses of Funds', definition: 'Balance sheet of a deal: Sources (new debt, cash on hand, stock issued) must equal Uses (purchase equity value, fees, debt repaid). Starting point for any merger model.' },
    { type: 'flashcard', term: 'Goodwill', definition: 'Created in M&A = Purchase Price – Fair Value of Net Identifiable Assets. Represents unidentifiable intangible value (brand, team, customer relationships). Does NOT amortize under US GAAP but can be impaired.' },
    { type: 'flashcard', term: 'Purchase Price Allocation (PPA)', definition: 'GAAP requirement to allocate the acquisition price to identifiable assets at fair value. Excess goes to: PP&E write-up, Other Intangibles, then Goodwill (remainder).' },
    { type: 'flashcard', term: 'Other Intangible Assets (from PPA)', definition: 'Identifiable intangibles written up in an acquisition: customer contracts, patents, brand names, technology. These DO amortize over their useful lives, reducing future earnings.' },
    { type: 'flashcard', term: 'Pro-Forma', definition: 'Financial statements that combine two companies as if the merger had already occurred. "Pro-forma" means "as if" — what the combined company would look like had the deal been done from the start of the period.' },
    { type: 'flashcard', term: 'All-Cash Deal', definition: 'M&A deal funded entirely with the acquirer\'s cash on hand or new debt. No new shares issued → no equity dilution, but cash/leverage increases. EPS accretion test: Target NI > incremental after-tax interest cost.' },
    { type: 'flashcard', term: 'All-Stock Deal', definition: 'M&A deal funded by issuing new acquirer shares to Target shareholders. No new debt → no interest cost, but existing shareholders diluted by new shares. EPS accretion test: Acquirer P/E > Target P/E.' },
    { type: 'flashcard', term: 'Takeover Premium', definition: 'The percentage above the undisturbed market price that an acquirer pays to win a deal. Typically 20-40% for public company acquisitions. Must be justified by synergies and strategic benefits.' },
    { type: 'flashcard', term: 'Accretion/Dilution Analysis', definition: 'Calculates whether a deal increases or decreases the acquirer\'s EPS. The main near-term financial test for any M&A transaction from the acquirer\'s perspective.' },
    { type: 'flashcard', term: 'Contribution Analysis', definition: 'Compares what % of combined revenue, EBITDA, and equity value each company contributes vs. what % of ownership they receive. Ensures the ownership split is fair relative to fundamentals.' },
    { type: 'flashcard', term: 'Fairness Opinion', definition: 'A letter from an investment bank stating that the deal price is "fair from a financial point of view" to shareholders. Required for most public company M&A transactions. Liability protection for the board.' },
    { type: 'flashcard', term: 'Transaction Fees', definition: 'Investment banking advisory fees, legal fees, and financing fees incurred in an M&A deal. Typically 1-3% of deal value. Appear in Sources & Uses as a Use of funds.' },
    { type: 'flashcard', term: 'Cash-Free, Debt-Free Deal', definition: 'Most M&A deals are structured on a "cash-free, debt-free" basis: the target\'s cash and debt are excluded from the deal. The purchase price is the TEV paid for just the operating assets.' },
];

const ma_level2 = [
    {
        type: 'mc',
        context: 'EPS Accretion/Dilution',
        question: 'When is an all-cash (debt-financed) deal most likely to be accretive to EPS?',
        options: [
            'When the target\'s P/E ratio is higher than the acquirer\'s P/E ratio',
            'When the target\'s after-tax earnings yield (Net Income / Purchase Price) exceeds the after-tax cost of debt used to fund the deal',
            'When the deal is structured as a taxable transaction rather than a tax-free reorganization',
            'When the target has more revenue than the acquirer, ensuring the combined company is larger'
        ],
        correct: 1,
        explanation: 'In an all-cash/debt deal: you pay after-tax interest on the debt, and you gain the target\'s Net Income. The deal is accretive when NI gained > after-tax interest cost — i.e., when the Target\'s "earnings yield" (NI/price) > after-tax cost of debt. Simplest form: if you buy $100M of earnings for $1B at 5% after-tax debt cost = $50M → $50M net gain → accretive.'
    },
    {
        type: 'mc',
        context: 'Stock Deal Accretion',
        question: 'Acquirer has a P/E of 30x. Target has a P/E of 20x. Deal is all-stock. Is the deal accretive or dilutive?',
        options: [
            'Dilutive — new shares are always dilutive',
            'Accretive — acquirer issues expensive shares (30x earnings) to buy cheap earnings (20x). Each share issued "costs" less earnings than it generates.',
            'Neutral — the P/E ratio averages out between the two companies in an all-stock deal',
            'Cannot determine without knowing the exact share prices and earnings figures'
        ],
        correct: 1,
        explanation: 'In a stock deal, the acquirer issues shares priced at 30x earnings to buy a target valued at 20x earnings. Every "dollar" of earnings the acquirer gives up (via new shares) costs 30x, but every "dollar" of earnings acquired costs only 20x. You\'re buying cheap earnings with expensive shares → accretive. Rule: Stock deal accretive when Acquirer P/E > Target P/E.'
    },
    {
        type: 'mc',
        context: 'Goodwill',
        question: 'Why does an M&A deal create Goodwill on the combined company\'s Balance Sheet?',
        options: [
            'Goodwill represents the target company\'s cash balances that were not allocated elsewhere',
            'Goodwill = the amount paid above the fair market value of the target\'s net identifiable assets. It captures unidentifiable value: brand strength, employee talent, customer relationships.',
            'Goodwill is a regulatory fee imposed by the SEC on all acquisitions exceeding $100M',
            'Goodwill arises when the target company has a history of losses that the acquirer intends to turn around'
        ],
        correct: 1,
        explanation: 'When you pay $500M for a company whose net identifiable assets are worth $300M (at fair value), the $200M excess is Goodwill. This excess reflects what you\'re paying for intangible attributes that can\'t be individually identified and valued: the brand reputation, key employees, proprietary processes, or simply the PE firm\'s belief that the business is worth more than its balance sheet shows.'
    },
    {
        type: 'mc',
        context: 'Sources & Uses',
        question: 'In a Sources & Uses table, what is included in "Uses of Funds"?',
        options: [
            'Only the equity check written to Target shareholders',
            'Purchase Equity Value paid to shareholders + transaction/financing fees + any existing target debt repaid at closing',
            'Only new debt raised and stock issued',
            'All future earnout payments and contingent consideration'
        ],
        correct: 1,
        explanation: 'Uses = every dollar spent in the transaction: the equity check to sellers (Purchase Equity Value), M&A advisory/legal/financing fees, and any existing target debt that is repaid at closing (sometimes). This total must equal Sources (new debt + cash + stock issued). The "balance sheet" of the deal must always balance.'
    },
    {
        type: 'tf',
        context: 'Deal Financing',
        question: 'In a merger model, using cash to fund an acquisition has zero cost because cash earns no return sitting on the balance sheet.',
        answer: false,
        explanation: 'False. Cash used in an acquisition has a "foregone interest" cost — the interest income the acquirer gives up by spending that cash. This is a true economic cost (not just an opportunity cost) that reduces Pre-Tax Income, Net Income, and EPS. Every CFO accounts for foregone interest on cash used in deals.'
    },
    {
        type: 'tf',
        context: 'Stock Deals',
        question: 'In a 100% stock deal, if the acquirer\'s P/E is greater than the target\'s P/E at the purchase price, the deal will be accretive to the acquirer\'s EPS.',
        answer: true,
        explanation: 'True. In a 100% stock deal, the acquirer\'s weighted cost of acquisition equals the reciprocal of its P/E (i.e., 1 / Acquirer P/E). The seller\'s yield equals 1 / Seller\'s P/E at purchase price. When Acquirer P/E > Seller P/E at purchase, the cost (1/Acquirer P/E) < the yield (1/Seller P/E) → accretive.'
    },
    {
        type: 'tf',
        context: 'M&A Concepts',
        question: 'Revenue synergies are generally considered more reliable than cost synergies in M&A deals.',
        answer: false,
        explanation: 'False. Cost synergies (eliminating duplicate headcount, facilities, overlapping systems) are far more reliable because they are directly within management\'s control. Revenue synergies (cross-selling, pricing power, new markets) depend on customer behavior, competitive dynamics, and execution — all harder to guarantee. Bankers often present optimistic revenue synergy estimates, but sophisticated buyers discount them heavily.'
    },
    {
        type: 'tf',
        context: 'Goodwill',
        question: 'Under US GAAP, Goodwill created in an acquisition must be amortized over a period not exceeding 40 years.',
        answer: false,
        explanation: 'False. Under US GAAP (ASC 350), Goodwill is NOT amortized. Instead, it is tested for impairment at least annually. If the carrying value of a reporting unit exceeds its fair value, a Goodwill impairment charge is recorded. (Note: under IFRS for private companies and US GAAP for private companies under ASU 2014-02, amortization over 10 years is permitted, but for public companies under US GAAP, Goodwill is not amortized.)'
    },
    {
        type: 'tf',
        context: 'Deal Process',
        question: 'A Confidential Information Memorandum (CIM) is typically a 5-10 page document sent to buyers during the early stages of an M&A sale process.',
        answer: false,
        explanation: 'False. The CIM (also called an Information Memorandum or Offering Memorandum) is typically 50-100 pages and provides an in-depth description of the company, its financials, and strategic rationale. The shorter 5-10 page document sent in the early stages is the "Teaser," which summarizes the company without revealing its identity to protect confidentiality before NDAs are signed.'
    },
];

const ma_level3 = [
    {
        type: 'mc',
        context: 'Apply: Merger Math',
        question: 'Acquirer: NI=$150M, shares=75M, EPS=$2.00. Acquires Target for $300M (all debt at 6%, tax 25%). Target NI=$30M. What is the pro-forma EPS and is it accretive/dilutive?',
        options: [
            '$2.10, accretive by 5%',
            '$2.19, accretive by 9.5%',
            '$1.93, dilutive by 3.5%',
            '$2.30, accretive by 15%'
        ],
        correct: 1,
        explanation: 'Incremental after-tax interest = $300M × 6% × (1–25%) = $13.5M. Pro-forma NI = $150M + $30M – $13.5M = $166.5M. Shares unchanged at 75M (all-debt deal). Pro-forma EPS = $166.5M / 75M = $2.22/share. That\'s $0.22 above $2.00 → accretive by 11%. Target earnings ($30M) exceed financing cost ($13.5M) → deal makes financial sense immediately.'
    },
    {
        type: 'mc',
        context: 'Apply: Sources & Uses',
        question: 'Acquisition of Target at $1,000M equity value. 60% financed with new debt, 40% with cash on hand. Transaction fees = $20M. What are total Uses, and total Sources?',
        options: [
            'Uses: $1,020M. Sources: $600M new debt + $420M cash.',
            'Uses: $1,000M. Sources: $600M debt + $400M cash.',
            'Uses: $1,020M. Sources: $600M new debt + $400M cash + $20M from fees.',
            'Uses: $980M. Sources: $600M debt + $380M cash.'
        ],
        correct: 0,
        explanation: 'Uses = Purchase Equity Value + Fees = $1,000M + $20M = $1,020M. Sources: New Debt = 60% × $1,000M = $600M. Cash = 40% × $1,000M = $400M, PLUS $20M for fees → but wait, fees are part of Uses. The $20M fees are typically funded proportionally or from cash. Total Sources = $600M + $420M cash = $1,020M. Sources always = Uses.'
    },
    {
        type: 'tf',
        context: 'Merger Model Mechanics',
        question: 'In a merger model, the combined company\'s pro-forma financials are based on the projected figures for the year AFTER the deal closes, not the most recent historical year.',
        answer: true,
        explanation: 'True. A merger model is always based on projected figures — you need forward-looking Revenue, Operating Income, Pre-Tax Income, and Net Income for each company. Using historical figures would fail to capture the expected financial performance of both companies as they operate going forward, and would not reflect the deal\'s impact on future earnings.'
    },
    {
        type: 'tf',
        context: 'Weighted Cost of Acquisition',
        question: 'A deal is accretive whenever the Seller\'s earnings yield (NI / Purchase Equity Value) exceeds the acquirer\'s Weighted Cost of Acquisition.',
        answer: true,
        explanation: 'True. The Weighted Cost of Acquisition blends the after-tax costs of cash, debt, and stock used to fund the deal. If the Seller\'s yield (what you get per dollar spent) exceeds that blended cost (what you give up per dollar spent), you\'re gaining more earnings than you\'re paying → accretive. This generalizes the simpler all-cash and all-stock accretion rules.'
    },
    {
        type: 'tf',
        context: 'Deal Financing',
        question: 'Stock is generally the cheapest form of acquisition financing because the acquirer does not pay any interest on shares issued.',
        answer: false,
        explanation: 'False. Stock is typically the most expensive financing method in M&A. The cost of equity in this context equals Net Income / Equity Value (the reciprocal of the P/E multiple), which is often 5-10% or more — higher than after-tax debt costs of 3-5%. Cash is cheapest (near-zero foregone interest rate), then debt (tax-deductible interest), then equity. Companies issue stock when they have high P/E multiples or insufficient debt capacity.'
    },
];

const ma_level4 = [
    {
        type: 'mc',
        context: 'Analyze: Deal Structure',
        question: 'Two acquirers both want to buy the same Target at $500M. Bidder A offers 100% cash (funded by new debt at 5%, tax 25%). Bidder B offers 100% stock. Target has $30M NI. Acquirer A P/E = 20x; Acquirer B P/E = 15x. Which deal is more likely to be accretive?',
        options: [
            'Bidder A (cash deal): $30M NI vs. $18.75M interest cost → accretive. Bidder B (stock deal): B\'s P/E (15x) < Target P/E (16.7x) → dilutive. Bidder A\'s deal is more accretive.',
            'Bidder B (stock deal): higher P/E acquirer always produces more accretion',
            'Both are equally accretive since they\'re paying the same price',
            'Neither deal is accretive because the Target P/E is too high relative to both acquirers'
        ],
        correct: 0,
        explanation: 'Bidder A: After-tax interest = $500M × 5% × 0.75 = $18.75M. Target NI adds $30M. Net EPS gain → accretive. Bidder B: Target P/E = $500M / $30M = 16.7x. Acquirer B P/E = 15x. Since Target P/E (16.7) > Acquirer P/E (15), the stock deal is DILUTIVE. Bidder B is issuing cheap shares to buy expensive earnings. Bidder A\'s deal is accretive.'
    },
    {
        type: 'mc',
        context: 'Analyze: PPA Impact',
        question: 'Acquirer pays $400M for Target with $250M book value of net assets (at fair value). $100M is allocated to Other Intangibles (5-year life, not tax-deductible). How does this amortization affect pro-forma net income annually?',
        options: [
            'Reduces NI by $20M/year (not tax-deductible, so no tax offset)',
            'Reduces NI by $15M/year ($20M amortization × (1–25%) tax shield)',
            'No impact — amortization of acquisition intangibles is excluded from "cash earnings"',
            'Reduces NI by $20M/year but creates a $5M DTA offset'
        ],
        correct: 0,
        explanation: 'Annual amortization = $100M / 5 years = $20M. Since it\'s NOT tax-deductible, there is no tax shield. The full $20M hits the IS as an expense. NI falls by $20M × (1–0) = $20M. Compare to tax-deductible amortization: $20M × (1–25%) = $15M NI impact. The non-deductibility is why goodwill impairment and purchase accounting charges are so painful — no tax offset.'
    },
    {
        type: 'tf',
        context: 'Contribution Analysis',
        question: 'If Company A contributes 60% of combined EBITDA but receives only 45% ownership in a merger, the contribution analysis suggests the deal may be unfavorable to Company A\'s shareholders.',
        answer: true,
        explanation: 'True. A contribution analysis compares what percentage of key metrics (Revenue, EBITDA, Net Income, Equity Value) each company contributes versus what percentage of combined ownership each receives. If A contributes 60% of EBITDA but gets only 45% ownership, it is "giving away" value relative to its earnings power. This would typically be a negotiating point for A\'s board and bankers.'
    },
    {
        type: 'tf',
        context: 'Deal Motivations',
        question: 'Acquiring a competitor primarily to prevent it from disrupting your business is classified as a "financial" rather than a "fuzzy" reason for an acquisition.',
        answer: false,
        explanation: 'False. A defensive acquisition (buying a competitor to prevent disruption) is a "fuzzy" reason for an acquisition. Financial reasons are those you can quantify — consolidation economies of scale, geographic expansion for measurable revenue growth, gaining market share. Defensive acquisitions and acqui-hires are "fuzzy" because the financial impact (preventing a future threat) is speculative and hard to model precisely.'
    },
    {
        type: 'tf',
        context: 'M&A Process',
        question: 'In a sell-side M&A process, the investment banker\'s primary role is to negotiate the Definitive Agreement directly with buyers on behalf of the seller.',
        answer: false,
        explanation: 'False. The Definitive Agreement is negotiated by the Buyer and Seller (supported by bankers and lawyers), not by bankers acting alone. The banker\'s primary sell-side roles are: creating marketing materials (Teaser, CIM), contacting and screening potential buyers, running the bid process, providing valuation support, and issuing a Fairness Opinion. Lawyers negotiate the actual legal terms of the Definitive Agreement.'
    },
];

const ma_level5 = [
    {
        type: 'mc',
        context: 'Evaluate: Synergy Reality',
        question: 'A company pays a 35% premium (above undisturbed share price) to acquire a Target. The premium = $350M in extra cost. The banker presents "synergies" of $500M NPV. Should the board approve?',
        options: [
            'Yes — NPV of synergies ($500M) > premium ($350M), so the deal creates $150M of net value',
            'Cautiously yes, but with heavy skepticism — synergy estimates are notoriously optimistic. The board should stress-test how much synergies can decline before the deal breaks even.',
            'No — paying a premium always destroys value because you can never capture expected synergies',
            'Yes — revenue synergies are the most reliable type and should always be fully credited'
        ],
        correct: 1,
        explanation: 'Synergy estimates from bankers are systematically optimistic. Academic research shows ~70-80% of acquisitions destroy shareholder value. The $500M synergy figure is a best case. The board should ask: at what synergy realization level does the deal break even? At $350M PV? What\'s the probability of achieving that? Cost synergies (headcount, facility cuts) are far more reliable than revenue synergies (cross-selling, pricing).'
    },
    {
        type: 'tf',
        context: 'Deal Economics',
        question: 'In theory, a company should pursue an acquisition if the target\'s asking price is less than the present value of the target\'s future free cash flows as perceived by the acquirer.',
        answer: true,
        explanation: 'True. This is the fundamental M&A value-creation test: if the asking price < implied intrinsic value (PV of future cash flows), the acquirer is buying something for less than it\'s worth. Equivalently, the expected IRR from the acquisition exceeds the acquirer\'s discount rate (WACC). In practice, companies also model EPS accretion/dilution as a real-world check on shareholder reaction.'
    },
    {
        type: 'tf',
        context: 'Merger vs. Acquisition',
        question: 'A "merger" and an "acquisition" have distinct mechanical differences in how the transaction is modeled in a merger model.',
        answer: false,
        explanation: 'False. There is no mechanical difference between modeling a merger and an acquisition. The only distinction is size: in a merger, the companies are closer in size and stock financing is more common; in an acquisition, the buyer is typically much larger. The financial modeling — combining income statements, calculating EPS accretion/dilution, building Sources & Uses — works identically regardless of whether the deal is called a merger or acquisition.'
    },
    {
        type: 'tf',
        context: 'Takeover Premium',
        question: 'An acquirer must pay a takeover premium when buying a public target because acquiring 100% of shares changes the supply/demand dynamic and existing shareholders demand compensation for giving up full ownership.',
        answer: true,
        explanation: 'True. Buying shares in the open market is very different from acquiring 100% of a public company. When you seek to buy 100% of shares, you dramatically shift demand, which drives up the price. Existing shareholders know they are giving up future upside and the right to their stake — they demand a premium. Typical premiums range from 20-40% above the undisturbed share price for public companies.'
    },
];

const ma_level6 = [
    {
        type: 'mc',
        context: 'Create: Full Merger Model',
        question: 'Acquirer: EPS $3.00, shares 100M, P/E 20x → stock price $60. Target: NI $40M, shares 50M, stock price $20 (P/E 25x). Deal: All-stock at $24/share (20% premium). Exchange ratio = $24/$60 = 0.4x. New shares issued = 50M × 0.4 = 20M shares. Pro-forma NI = $300M + $40M = $340M. Pro-forma shares = 120M. New EPS = $2.83. Accretive or dilutive?',
        options: [
            'Accretive by 5.7% — EPS rose from $3.00 to $3.17',
            'Dilutive by 5.7% — EPS fell from $3.00 to $2.83',
            'Neutral — the deal has no EPS impact because no debt was used',
            'Accretive because the acquirer pays a premium, which always creates value'
        ],
        correct: 1,
        explanation: 'Pro-forma EPS = $340M / 120M shares = $2.83 vs. standalone $3.00 → dilutive by ($3.00–$2.83)/$3.00 = 5.7%. WHY? Target P/E (25x) > Acquirer P/E (20x). You issued shares at 20x earnings to buy earnings at 25x — each share given up was cheaper than each share acquired. Dilutive by design. This confirms the rule: stock deal is accretive when Acquirer P/E > Target P/E.'
    },
    {
        type: 'mc',
        context: 'Create: Goodwill',
        question: 'Deal: Purchase Equity Value $600M. Target Book Value of Equity $200M. PP&E write-up $50M, Other Intangibles $100M. What is Goodwill created?',
        options: ['$400M', '$250M', '$300M', '$350M'],
        correct: 1,
        explanation: 'Goodwill = Purchase Price – Fair Value of Net Identifiable Assets. Fair value of net assets = Book value $200M + PP&E write-up $50M + Other Intangibles $100M = $350M. Goodwill = $600M – $350M = $250M. The Other Intangibles ($100M) are IDENTIFIABLE (contracts, patents) so they\'re allocated separately. Goodwill = the unidentifiable remainder.'
    }
];

const ma_order = [
    {
        level: 2,
        question: 'Order the steps to determine whether an M&A deal is accretive or dilutive:',
        items: [
            '1. Calculate the Acquirer\'s standalone EPS before the deal',
            '2. Determine deal financing: all-cash/debt, all-stock, or mix',
            '3. Calculate pro-forma Net Income (Acquirer NI + Target NI – financing costs ± synergies)',
            '4. Calculate pro-forma diluted shares (existing shares + any new shares issued)',
            '5. Divide pro-forma NI by pro-forma shares = pro-forma EPS',
            '6. Compare pro-forma EPS to standalone EPS: higher = accretive, lower = dilutive'
        ],
        explanation: 'The accretion/dilution analysis follows a clean framework. The key variables are: what does the Target contribute to NI, and what does the financing cost (interest for debt, dilution for stock). If the contribution exceeds the cost, the deal is accretive.'
    },
    {
        level: 3,
        question: 'In a merger model, order these adjustments to the Income Statement:',
        items: [
            '1. Add Target\'s Revenue and Expenses to Acquirer\'s',
            '2. Add/subtract synergies (cost reductions, revenue uplift)',
            '3. Subtract incremental D&A from PP&E and intangible write-ups',
            '4. Subtract new interest expense on acquisition debt',
            '5. Calculate combined Pre-Tax Income and apply blended tax rate',
            '6. Divide by pro-forma diluted shares to get pro-forma EPS'
        ],
        explanation: 'The IS combination follows this sequence: start with both companies combined, then add the deal effects (synergies, PPA amortization, interest costs). The deal-specific adjustments (steps 2-4) are what make a merger model different from simply adding two standalone models together.'
    }
];

const ma_fillin = [
    {
        level: 4,
        type: 'fillin',
        scenario: 'All-cash deal. Acquirer: NI $200M, 100M shares, EPS $2.00. Acquires Target for $500M (NI $45M). Funded with new debt at 6%, tax rate 25%.',
        is_fields: [
            { label: 'Target NI contribution ($M)', answer: 45, hint: 'Given in scenario.' },
            { label: 'After-tax interest cost ($M)', answer: 22.5, hint: '$500M × 6% × (1–25%) = $22.5M.' }
        ],
        cfs_fields: [
            { label: 'Net NI contribution ($M)', answer: 22.5, hint: '$45M – $22.5M = $22.5M.' },
            { label: 'Pro-forma NI ($M)', answer: 222.5, hint: '$200M + $22.5M = $222.5M.' }
        ],
        bs_fields: [
            { label: 'Pro-forma EPS ($)', answer: 2.225, hint: '$222.5M / 100M shares = $2.225.' },
            { label: 'Accretion/Dilution (%)', answer: 11.25, hint: '($2.225 – $2.00) / $2.00 = 11.25% accretive.' }
        ],
        explanation: 'After-tax interest = $500M × 6% × 0.75 = $22.5M. Target NI = $45M. Net EPS contribution = $45M – $22.5M = $22.5M. Pro-forma NI = $222.5M. Pro-forma EPS = $222.5M / 100M = $2.225. Accretion = 11.25%. Target\'s earnings yield ($45M/$500M = 9%) > after-tax cost of debt (4.5%) → deal is accretive.'
    }
];

// ============================================================
// FITB — M&A Deals & Merger Models
// ============================================================

const ma_fitb = [
    {
        level: 1,
        type: 'fitb',
        context: 'EPS Accretion Rule',
        question: 'In an all-stock deal, a deal is EPS accretive if the acquirer\'s P/E is ___ than the target\'s P/E at the purchase price.',
        answer: 'higher',
        explanation: 'When the acquirer\'s P/E is higher, the cost of each share issued (1/Acquirer P/E) is lower than the earnings yield received from the target (1/Target P/E). You are issuing expensive shares to buy cheap earnings — boosting EPS.'
    },
    {
        level: 1,
        type: 'fitb',
        context: 'Sources & Uses',
        question: 'In a Sources & Uses table, total Sources must always equal total ___.',
        answer: 'Uses',
        explanation: 'The Sources & Uses table is the "balance sheet" of a deal. Sources (new debt, cash on hand, stock issued) fund the Uses (purchase equity value, fees, debt repaid). If they don\'t balance, the model has an error.'
    },
    {
        level: 2,
        type: 'fitb',
        context: 'Goodwill Formula',
        question: 'Goodwill created in an acquisition = Purchase Price minus the fair value of net ___ assets.',
        answer: ['identifiable', 'net identifiable'],
        explanation: 'Goodwill is the residual after allocating the purchase price to all identifiable assets (PP&E write-ups, customer contracts, patents, brand names) at fair value. The unidentifiable remainder — brand, team quality, relationships — becomes Goodwill.'
    },
    {
        level: 2,
        type: 'fitb',
        context: 'Cash Deal Accretion Test',
        question: 'In an all-debt deal, accretion occurs when the target\'s Net Income exceeds the incremental after-tax ___ cost.',
        answer: ['interest', 'interest expense'],
        explanation: 'The deal adds target NI to the acquirer\'s combined earnings but subtracts new after-tax interest expense on acquisition debt. Net Income gained > after-tax interest cost = accretive. This is the fundamental accretion test for cash/debt-funded deals.'
    },
    {
        level: 3,
        type: 'fitb',
        context: 'Weighted Cost of Acquisition',
        question: 'A deal is accretive when the seller\'s earnings yield is ___ than the acquirer\'s Weighted Cost of Acquisition.',
        answer: ['greater', 'higher'],
        explanation: 'The Weighted Cost of Acquisition blends the after-tax costs of cash, debt, and stock. The seller\'s yield = NI / Purchase Equity Value. When yield > weighted cost, the acquirer is gaining more earnings per dollar than it is giving up — EPS rises.'
    },
    {
        level: 3,
        type: 'fitb',
        context: 'PPA',
        question: 'In Purchase Price Allocation, the excess purchase price not assigned to identifiable assets or PP&E write-ups flows to ___.',
        answer: 'Goodwill',
        explanation: 'PPA follows a waterfall: (1) allocate to PP&E at fair value write-up, (2) allocate to identifiable intangibles (patents, contracts, brands), (3) any remaining excess = Goodwill. Goodwill cannot be further subdivided into identifiable components.'
    },
    {
        level: 4,
        type: 'fitb',
        context: 'Deal Financing Cost Ranking',
        question: 'From cheapest to most expensive, the typical order of acquisition financing is: Cash, ___, then Stock.',
        answer: 'Debt',
        explanation: 'Cash is cheapest (foregone interest near risk-free rate, ~1-2%). Debt is next (after-tax cost of ~3-5%, tax-deductible interest). Stock is most expensive (cost = 1/P/E, often 5-10%+ depending on valuation). Companies use cash first, then debt, then stock as a last resort to avoid dilution.'
    },
    {
        level: 4,
        type: 'fitb',
        context: 'Takeover Premium',
        question: 'Typical takeover premiums for public company acquisitions range from ___ to 40% above the undisturbed share price.',
        answer: ['20%', '20'],
        explanation: 'Most public company acquisitions involve premiums of 20-40% above the undisturbed (pre-announcement) share price. The acquirer must pay this premium to convince shareholders to tender their shares. Premiums below 20% are rare and often indicate a "friendly" deal where the target board aggressively supports it.'
    },
];

const QUESTIONS_MA = {
    1: ma_level1,
    2: ma_level2,
    3: ma_level3,
    4: ma_level4,
    5: ma_level5,
    6: ma_level6,
    order: ma_order,
    fillin: ma_fillin,
    fitb: ma_fitb
};
