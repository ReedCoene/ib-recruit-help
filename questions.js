// ============================================================
// LEVEL 1: REMEMBER — Flashcards & basic definitions
// ============================================================
const level1Questions = [
    // Flashcards
    { type: "flashcard", term: "Revenue (Net Sales)", definition: "The total value of products/services a company delivers in a period. Also called Turnover under IFRS. Appears at the top of the Income Statement." },
    { type: "flashcard", term: "Cost of Goods Sold (COGS)", definition: "Expenses directly linked to the delivery of products/services, such as materials, shipping, or human labor for services. Subtracted from Revenue to get Gross Profit." },
    { type: "flashcard", term: "Gross Profit (Gross Margin)", definition: "Revenue minus COGS. Tells you how much additional profit the company earns from each additional sale before fixed expenses like salaries and rent." },
    { type: "flashcard", term: "Operating Income", definition: "Revenue minus COGS minus Operating Expenses. Shows how much the business earns from core operations before interest, side activities, and taxes." },
    { type: "flashcard", term: "Net Income", definition: "The company's bottom line: after-tax profits after ALL expenses, interest, and taxes. Also called 'earnings' or 'bottom line.' Links to the CFS and BS." },
    { type: "flashcard", term: "Accounts Receivable (AR)", definition: "An Asset representing cash owed to the company by customers for products/services already delivered. Increases when revenue is recorded but cash hasn't been collected." },
    { type: "flashcard", term: "Accounts Payable (AP)", definition: "A Liability representing cash the company owes to vendors/suppliers for products or services already received but not yet paid for in cash." },
    { type: "flashcard", term: "Deferred Revenue", definition: "A Liability representing cash collected from customers for products/services NOT yet delivered. The company has an obligation to deliver in the future." },
    { type: "flashcard", term: "Prepaid Expenses", definition: "An Asset representing cash paid in advance for services not yet received (e.g., annual insurance paid upfront). Decreases as the service is consumed over time." },
    { type: "flashcard", term: "Inventory", definition: "An Asset representing goods/materials purchased but not yet sold and delivered to customers. Linked to COGS — the expense is recognized only upon delivery." },
    { type: "flashcard", term: "Depreciation", definition: "A non-cash expense that allocates the cost of PP&E over its useful life. For example, $400K equipment with a 5-year life = $80K/year depreciation." },
    { type: "flashcard", term: "Capital Expenditures (CapEx)", definition: "Spending on long-term assets like factories, equipment, or offices. Does NOT appear on the Income Statement initially — only on the CFS under Cash Flow from Investing." },
    { type: "flashcard", term: "Net PP&E (Property, Plant & Equipment)", definition: "A long-term Asset on the Balance Sheet representing the net book value of physical assets. Increases with CapEx and decreases with Depreciation." },
    { type: "flashcard", term: "Free Cash Flow (FCF)", definition: "Cash Flow from Operations (CFO) minus Capital Expenditures (CapEx). Represents the company's discretionary cash flow after paying for what it needs to run the business." },
    { type: "flashcard", term: "EBITDA", definition: "Earnings Before Interest, Taxes, Depreciation & Amortization. A proxy for Cash Flow from Operations. Shows core, recurring business cash flow before capital structure and taxes." },
    { type: "flashcard", term: "EBIT (Operating Income)", definition: "Earnings Before Interest and Taxes. A proxy for Free Cash Flow because it indirectly deducts part of CapEx through Depreciation. Shows core profitability." },
    { type: "flashcard", term: "Working Capital", definition: "Current Operational Assets minus Current Operational Liabilities (excludes Cash, Investments, and Debt). Measures short-term operational liquidity." },
    { type: "flashcard", term: "Goodwill", definition: "An intangible Asset created in M&A deals. Equals the portion of the purchase premium that cannot be linked to identifiable assets like contracts or patents. Does NOT amortize." },
    { type: "flashcard", term: "Other Intangible Assets", definition: "Identifiable intangible assets from M&A deals: contracts, patents, trademarks, customer relationships, brand value. These DO amortize over time." },
    { type: "flashcard", term: "Deferred Tax Liability (DTL)", definition: "Represents future taxes owed because Book Taxes were lower than Cash Taxes (e.g., from accelerated depreciation for tax purposes). Increases when Book Taxes < Cash Taxes." },
    { type: "flashcard", term: "Deferred Tax Asset (DTA)", definition: "Represents potential future tax savings, often from Net Operating Losses. The DTA = NOL * Tax Rate. Decreases when NOLs are used to reduce taxable income." },
    { type: "flashcard", term: "Stock-Based Compensation (SBC)", definition: "A non-cash expense for paying employees with stock/options instead of cash. Added back on the CFS. Unlike true non-cash expenses, it creates additional shares outstanding." },
    { type: "flashcard", term: "Common Shareholders' Equity (CSE)", definition: "On the L&E side of the BS. Represents initial contributions + cumulative after-tax profits. Components: Common Stock, APIC, Retained Earnings, Treasury Stock, AOCI." },
    { type: "flashcard", term: "Retained Earnings", definition: "A component of CSE representing the company's cumulative saved-up, after-tax earnings. Each year: add Net Income to Common and subtract Dividends." },
    { type: "flashcard", term: "Leverage Ratio", definition: "Total Debt / EBITDA. Measures how much Debt a company has relative to its ability to repay. Higher = riskier, lower = less risky." },
    { type: "flashcard", term: "Interest Coverage Ratio", definition: "EBITDA / Interest Expense. Measures how easily the company can pay interest on its Debt. Higher = better (more buffer if profits fall)." },
    { type: "flashcard", term: "Days Sales Outstanding (DSO)", definition: "Accounts Receivable / Revenue * 365. Measures how many days it takes a company to collect cash from customers after a sale." },
    { type: "flashcard", term: "Cash Conversion Cycle (CCC)", definition: "DIO + DSO - DPO. Measures how long it takes to convert Inventory and Receivables into cash. Lower is better." },
    { type: "flashcard", term: "Finance Lease (Capital Lease)", definition: "A lease with ownership transfer or bargain purchase option. Both a Lease Asset and Lease Liability are recorded. Interest and Depreciation are recorded separately on the IS." },
    { type: "flashcard", term: "Operating Lease (U.S. GAAP)", definition: "A lease without ownership transfer. Records a Lease Asset and Liability on the BS. A simple Rental Expense on the IS (not split into Interest and Depreciation)." },
];

// ============================================================
// LEVEL 2: UNDERSTAND — Explain WHY / conceptual
// ============================================================
const level2Questions = [
    {
        type: "mc",
        question: "Why does an increase in Accounts Receivable create a difference between Net Income and Cash Flow?",
        context: "Income Statement vs. Cash Flow",
        options: [
            "The company delivered a product and recorded Revenue, but hasn't collected the cash yet",
            "The company collected cash from customers but hasn't delivered the product or service yet",
            "The company paid an operating expense before the service period, creating a prepaid asset",
            "The company recorded a non-cash expense like Depreciation that reduced Net Income without cash"
        ],
        correct: 0,
        explanation: "When AR increases, the company has delivered products/services (so Revenue is recorded on the IS), but hasn't collected cash. Revenue goes up, but Cash does not — creating a gap between Net Income and Cash Flow. The CFS adjusts for this by showing a negative change in AR."
    },
    {
        type: "mc",
        question: "Why is Depreciation added back on the Cash Flow Statement?",
        context: "Non-cash adjustments",
        options: [
            "Because the company receives a government refund each year for the declining value of its assets",
            "Because it's a non-cash expense — the actual cash was spent when the CapEx was purchased, not when Depreciation is recorded",
            "Because recording Depreciation increases the book value of PP&E, so cash must offset it",
            "Because Depreciation is an optional accounting entry that doesn't represent real economic cost"
        ],
        correct: 1,
        explanation: "Depreciation reduced Net Income, but no cash was actually spent in the current period. The cash outflow happened when CapEx was originally purchased. So we add it back on the CFS to show that the cash wasn't really spent this period. The only cash impact is the tax savings (Depreciation * Tax Rate)."
    },
    {
        type: "mc",
        question: "Why does Deferred Revenue appear as a Liability on the Balance Sheet?",
        context: "Balance Sheet classification",
        options: [
            "Because recording it as Revenue would reduce the company's Net Income below the actual cash collected",
            "Because the company has already collected cash but has an obligation to deliver products/services in the future",
            "Because the company owes money to its suppliers for goods received but not yet paid for in cash",
            "Because it represents a future tax payment that the company must make when the revenue is recognized"
        ],
        correct: 1,
        explanation: "Deferred Revenue = cash collected upfront before delivery. The company has an obligation to deliver the product/service in the future. Since it represents a future obligation (not a future benefit), it's a Liability, not an Asset."
    },
    {
        type: "mc",
        question: "Why don't Capital Expenditures appear on the Income Statement?",
        context: "Income Statement criteria",
        options: [
            "Because the dollar amount of CapEx is typically too large to expense in a single reporting period",
            "Because CapEx lasts for more than one period, so the initial spending doesn't correspond 100% to the current period",
            "Because CapEx is always financed with Debt, and Debt issuances never appear on the Income Statement",
            "Because CapEx only affects the Cash Flow Statement and has no connection to profitability at all"
        ],
        correct: 1,
        explanation: "To appear on the IS, an item must correspond 100% to the current period. CapEx (e.g., a factory) benefits the company for many years, not just one. Instead, we allocate the cost over time as Depreciation. The initial CapEx shows up only on the CFS and BS."
    },
    {
        type: "mc",
        question: "Why do we need all three financial statements instead of just tracking Cash?",
        context: "Purpose of the 3 statements",
        options: [
            "Because SEC regulations mandate exactly three statements for all publicly traded companies",
            "Because Cash Flow could be very different from Net Income due to timing differences in revenue recognition, expenses, and long-term items",
            "Because investors and analysts prefer to see more detailed documentation before making decisions",
            "Because the Balance Sheet is only needed for calculating the company's tax obligations each year"
        ],
        correct: 1,
        explanation: "Items like AR, AP, Deferred Revenue, Inventory, and CapEx create timing differences between when revenue/expenses are recognized and when cash changes hands. The three statements work together to give a complete picture of profitability (IS), resources and obligations (BS), and actual cash movements (CFS)."
    },
    {
        type: "mc",
        question: "What's the key difference between Accounts Payable and Accrued Expenses?",
        context: "Working Capital items",
        options: [
            "AP is an Asset; Accrued Expenses is a Liability",
            "AP is for amounts owed with specific invoices; Accrued Expenses is for regular, recurring expenses without specific invoices (utilities, wages, etc.)",
            "AP appears on the IS; Accrued Expenses does not",
            "They are exactly the same thing"
        ],
        correct: 1,
        explanation: "Both are Liabilities representing cash the company owes. Accounts Payable typically has specific invoices (e.g., a bill from a supplier), while Accrued Expenses covers regular, recurring expenses that lack specific invoices — such as utilities, rent, employee wages, and insurance premiums."
    },
    {
        type: "mc",
        question: "Why is Stock-Based Compensation treated differently from 'true' non-cash expenses like Depreciation?",
        context: "SBC vs. other non-cash items",
        options: [
            "SBC doesn't affect Net Income because it's paid in stock rather than cash, so the IS ignores it",
            "SBC creates additional shares outstanding, diluting existing investors, while Depreciation just reduces an Asset balance",
            "SBC is always immediately deductible for tax purposes, unlike Depreciation which must be spread over time",
            "SBC doesn't appear on any financial statement — it's tracked only in the footnotes to the annual report"
        ],
        correct: 1,
        explanation: "Both SBC and Depreciation are non-cash IS expenses added back on the CFS. But SBC increases the share count (diluting ownership), while Depreciation just reduces Net PP&E. Because SBC dilutes existing investors, valuations often treat it as a real cash expense despite its non-cash nature."
    },
    {
        type: "mc",
        question: "Why does issuing Debt NOT appear on the Income Statement?",
        context: "Income Statement criteria",
        options: [
            "Because Debt issuance does not correspond to only the current period — it lasts for many years",
            "Because Debt issuances are considered too immaterial to report on the Income Statement each quarter",
            "Because the company receives cash but doesn't spend it, so there is no expense to recognize yet",
            "Because Debt only affects the CFS and BS, and the IS is entirely separate from those two statements"
        ],
        correct: 0,
        explanation: "Debt issuance fails the IS criteria: it doesn't correspond 100% to the current period (Debt lasts for years). It also doesn't directly affect the income available to common shareholders at the time of issuance. Instead, the issuance appears on the CFS (Cash Flow from Financing), and the Debt balance goes on the BS. Only the annual Interest Expense appears on the IS."
    },
    {
        type: "mc",
        question: "Why is an increase in Inventory a negative adjustment on the Cash Flow Statement?",
        context: "Working Capital and CFS",
        options: [
            "Because Inventory is a non-cash expense similar to Depreciation that must be added back on the CFS",
            "Because the company spent cash to buy Inventory but can't record the expense until products are delivered — so Cash went down but Net Income didn't change",
            "Because purchasing Inventory always reduces a company's profitability and therefore reduces cash flow",
            "Because Inventory is classified as a Liability on the Balance Sheet, and Liability increases reduce cash"
        ],
        correct: 1,
        explanation: "When a company buys Inventory, it pays cash but cannot record COGS on the IS until the products are actually delivered to customers. The cash is gone, but Net Income hasn't changed. So the CFS shows a negative adjustment for the increase in Inventory to reflect that cash outflow."
    },
    {
        type: "mc",
        question: "Why is the Change in Working Capital calculated as Old WC - New WC (seemingly backwards)?",
        context: "Working Capital on the CFS",
        options: [
            "It's a common error in textbooks",
            "Because when operational Assets increase (e.g., Inventory), the company spent cash, so cash flow should decrease — the 'backwards' formula ensures the correct sign on the CFS",
            "Because Working Capital is always negative",
            "Because the formula follows IFRS rules, not GAAP"
        ],
        correct: 1,
        explanation: "If Inventory (an operational Asset) increases from $200 to $300, the company spent $100 in cash. Cash flow should decrease by $100. Old WC ($200) - New WC ($300) = -$100, which correctly shows a reduction in cash flow. The formula ensures the signs match the CFS presentation."
    },
];

// ============================================================
// LEVEL 3: APPLY — Walk through statement changes
// ============================================================
const level3Questions = [
    {
        type: "mc",
        question: "Depreciation increases by $100 (25% tax rate). What happens to Cash on the Balance Sheet?",
        context: "Walk the statements: Non-cash IS expense",
        options: [
            "Cash increases by $100",
            "Cash increases by $25",
            "Cash decreases by $75",
            "Cash stays the same"
        ],
        correct: 1,
        explanation: "IS: Pre-Tax Income down $100, Net Income down $75. CFS: Net Income -$75, but add back $100 Depreciation, so Cash up $25. BS: Cash +$25, PP&E -$100, so Assets down $75. CSE down $75 (matching). The $25 cash increase comes from the tax savings ($100 * 25%)."
    },
    {
        type: "mc",
        question: "A company records $100 in Revenue but hasn't collected cash. At a 25% tax rate, what happens on all three statements?",
        context: "Walk the statements: AR increase",
        options: [
            "IS: Revenue +100, NI +75. CFS: NI +75, AR adjustment -100, Cash -25. BS: Cash -25, AR +100, CSE +75",
            "IS: No change. CFS: Cash +100. BS: Cash +100",
            "IS: Revenue +100, NI +100. CFS: Cash +100. BS: Cash +100",
            "IS: Revenue +100, NI +75. CFS: NI +75, Cash +75. BS: Cash +75, CSE +75"
        ],
        correct: 0,
        explanation: "Revenue +$100 on IS, Net Income +$75 after 25% tax. On CFS: NI +$75, but AR increased by $100 (negative adjustment), so Cash at bottom is -$25. On BS: Cash -$25, AR +$100 = Assets +$75. CSE +$75. Both sides balance at +$75."
    },
    {
        type: "mc",
        question: "A company spends $500 on CapEx at end of Year 1. No Depreciation yet. What changes?",
        context: "Walk the statements: Initial CapEx",
        options: [
            "IS: OpEx +500. CFS: Cash -500. BS: Cash -500",
            "IS: No change. CFS: CapEx -500, Cash -500. BS: Cash -500, PP&E +500",
            "IS: Depreciation +500. CFS: D&A +500. BS: PP&E -500",
            "IS: No change. CFS: No change. BS: Cash -500, PP&E +500"
        ],
        correct: 1,
        explanation: "CapEx does NOT go on the IS (it lasts for more than one period). On CFS: $500 CapEx in Cash Flow from Investing, Cash down $500. On BS: Cash -$500, PP&E +$500. Assets side unchanged in total. L&E side unchanged. Both sides balance."
    },
    {
        type: "mc",
        question: "Deferred Revenue increases by $50 (no delivery yet). Tax rate 25%. What happens?",
        context: "Walk the statements: Cash collected before delivery",
        options: [
            "IS: Revenue +50. CFS: Cash +50. BS: Cash +50, CSE +37.5",
            "IS: No change. CFS: Deferred Revenue adjustment +50, Cash +50. BS: Cash +50, Deferred Revenue +50",
            "IS: No change. CFS: Cash -50. BS: Cash -50, DR -50",
            "IS: Revenue +50, NI +37.5. CFS: Cash +37.5. BS: Cash +37.5"
        ],
        correct: 1,
        explanation: "No delivery = no Revenue on IS. CFS: +$50 from Deferred Revenue increase (it's a positive adjustment because cash came in). BS: Cash +$50 (Assets side), Deferred Revenue +$50 (L&E side). Both sides up by $50 and balance."
    },
    {
        type: "mc",
        question: "A company records a $100 PP&E Write-Down (NOT tax-deductible). 25% tax rate. What's the proper treatment?",
        context: "Walk the statements: Impairments and Deferred Taxes",
        options: [
            "IS: PTI -100, NI -75. CFS: NI -75, add back +100, Deferred Taxes -25, Cash unchanged. BS: PP&E -100, Net DTA +25, CSE -75",
            "IS: PTI -100, NI -100. CFS: Cash -100. BS: Cash -100, PP&E -100",
            "IS: No change. CFS: Cash -100. BS: PP&E -100",
            "IS: PTI -100, NI -75. CFS: NI -75, add back +100, Cash +25. BS: Cash +25, PP&E -100"
        ],
        correct: 0,
        explanation: "IS: PTI -$100, Book Taxes -$25, NI -$75. CFS: NI -$75, add back $100 write-down, but Deferred Taxes -$25 (because NOT cash-tax deductible, so no actual tax savings). Cash unchanged. BS: PP&E -$100, Net DTA +$25 = Assets -$75. CSE -$75. Both sides down $75."
    },
    {
        type: "mc",
        question: "A company issues $200 of Debt and uses it to buy $200 of PP&E. What happens?",
        context: "Walk the statements: Multi-item, single step",
        options: [
            "IS: Interest Expense +$200. CFS: Cash -$200. BS: Debt +$200",
            "IS: No change. CFS: Debt Issuance +200, CapEx -200, Cash unchanged. BS: PP&E +200, Debt +200",
            "IS: Depreciation +$200. CFS: Cash unchanged. BS: PP&E +$200, Debt +$200",
            "IS: No change. CFS: Cash +$200. BS: Cash +$200, Debt +$200"
        ],
        correct: 1,
        explanation: "Neither Debt issuance nor CapEx appear on the IS (both are long-term items). CFS: Debt Issuance +$200 (CFF), CapEx -$200 (CFI), so Cash is unchanged. BS: PP&E +$200 on Assets, Debt +$200 on L&E. Both sides up by $200 and balance."
    },
    {
        type: "mc",
        question: "SBC of $100 is issued. Assume it's NOT tax-deductible. 25% tax rate. What happens to the share count and Cash?",
        context: "Walk the statements: Stock-Based Compensation",
        options: [
            "Share count increases, Cash increases by $25",
            "Share count increases, Cash stays the same (Net DTA increases by $25 instead)",
            "Share count stays the same, Cash decreases by $100",
            "Share count increases, Cash decreases by $75"
        ],
        correct: 1,
        explanation: "IS: SBC expense -$100, NI -$75. CFS: NI -$75, add back SBC +$100, but Deferred Taxes -$25 (not cash-tax deductible). Cash unchanged. BS: Net DTA +$25 on Assets. CSE: -$75 from NI but +$100 from SBC = net +$25 on L&E. Share count increases because SBC creates new shares."
    },
    {
        type: "mc",
        question: "A company sells PP&E with a book value of $100 for $180. Tax rate 25%. What happens to Cash?",
        context: "Walk the statements: Gain on sale of Assets",
        options: [
            "Cash increases by $100",
            "Cash increases by $180",
            "Cash increases by $160 ($180 proceeds minus $20 in taxes on the $80 Gain)",
            "Cash increases by $80"
        ],
        correct: 2,
        explanation: "IS: $80 Gain (sold for $180, book value $100). PTI +$80, Taxes +$20, NI +$60. CFS: NI +$60, reverse Gain -$80, then proceeds +$180 in CFI. Cash +$160. BS: Cash +$160, PP&E -$100, Assets +$60. CSE +$60. Both sides up $60."
    },
    {
        type: "mc",
        question: "A company buys $60 of Inventory on credit (Accounts Payable). What happens?",
        context: "Walk the statements: Inventory purchased on credit",
        options: [
            "IS: COGS +60. CFS: Cash -60. BS: Inventory +60, AP +60",
            "IS: No change. CFS: Inv -60, AP +60, net Cash unchanged. BS: Inventory +60, AP +60",
            "IS: No change. CFS: Cash -60. BS: Cash -60, Inventory +60",
            "IS: COGS +60, NI -45. CFS: Cash -45. BS: Cash -45"
        ],
        correct: 1,
        explanation: "No delivery to customers yet, so nothing on the IS. No cash was paid (purchased on credit), so the two WC adjustments offset on the CFS: Inventory +60 (negative) and AP +60 (positive) = net zero Cash impact. BS: Inventory +60 on Assets, AP +60 on L&E. Both sides up $60."
    },
    {
        type: "mc",
        question: "Interest Expense increases by $10. Tax rate 25%. Walk through the statements.",
        context: "Walk the statements: Cash IS item",
        options: [
            "IS: PTI -10, NI -7.5. CFS: NI -7.5, Cash -7.5. BS: Cash -7.5, CSE -7.5",
            "IS: No change. CFS: Cash -10. BS: Cash -10, Debt -10",
            "IS: PTI -10, NI -10. CFS: Cash -10. BS: Cash -10",
            "IS: PTI -10, NI -7.5. CFS: NI -7.5, add back +10, Cash +2.5. BS: Cash +2.5"
        ],
        correct: 0,
        explanation: "Interest Expense is a cash IS item. IS: PTI -$10, Taxes -$2.5, NI -$7.5. CFS: NI -$7.5, no other adjustments needed (it's a cash expense). Cash down $7.5. BS: Cash -$7.5 on Assets, CSE -$7.5 on L&E. Both sides down $7.5."
    },
];

// ============================================================
// LEVEL 4: ANALYZE — Calculate ratios, interpret numbers
// ============================================================
const level4Questions = [
    {
        type: "mc",
        question: "A company has Total Debt of $500 and EBITDA of $100. What is its Leverage Ratio, and what does it mean?",
        context: "Credit metrics",
        options: [
            "5.0x — The company has 5 times more Debt than its annual cash flow proxy; this is relatively high leverage",
            "0.2x — The company can easily pay off its Debt",
            "20% — The company uses 20% Debt financing",
            "500 — The absolute Debt amount is the Leverage Ratio"
        ],
        correct: 0,
        explanation: "Leverage Ratio = Total Debt / EBITDA = $500 / $100 = 5.0x. This means it would take approximately 5 years of EBITDA to pay off all Debt (ignoring interest and taxes). Generally, above 4-5x is considered highly leveraged. Lenders often set leverage covenants around 4-6x."
    },
    {
        type: "mc",
        question: "Company A: DSO=45, DIO=60, DPO=30. Company B: DSO=30, DIO=40, DPO=50. Which has a better Cash Conversion Cycle?",
        context: "Cash Conversion Metrics",
        options: [
            "Company A: CCC = 75 days (better because longer)",
            "Company B: CCC = 20 days (better because shorter — faster cash conversion)",
            "Company A: CCC = 135 days",
            "They are equal"
        ],
        correct: 1,
        explanation: "CCC = DIO + DSO - DPO. Company A: 60 + 45 - 30 = 75 days. Company B: 40 + 30 - 50 = 20 days. Lower CCC is better — it means the company converts Inventory and Receivables into cash faster. Company B collects from customers quickly and takes longer to pay suppliers."
    },
    {
        type: "mc",
        question: "NOPAT = $80, Average Invested Capital (Equity + Debt + Preferred) = $500. What is ROIC?",
        context: "Returns-based metrics",
        options: [
            "6.25x",
            "16%",
            "625%",
            "$420"
        ],
        correct: 1,
        explanation: "ROIC = NOPAT / Average Invested Capital = $80 / $500 = 16%. This means for every $1 of capital invested by ALL investor groups, the company generates $0.16 in after-tax operating income. NOPAT = EBIT * (1 - Tax Rate), which excludes interest and preferred dividends because ROIC measures returns to all investors."
    },
    {
        type: "mc",
        question: "A company has EBITDA of $200 and Interest Expense of $40. What does the Interest Coverage Ratio tell you?",
        context: "Credit metrics interpretation",
        options: [
            "5.0x — EBITDA covers interest 5 times over, meaning the company has a comfortable buffer to service its Debt",
            "0.2x — The company is in danger of defaulting",
            "160 — The company has $160 left after interest",
            "5.0x — The company should issue 5x more Debt"
        ],
        correct: 0,
        explanation: "Interest Coverage = EBITDA / Interest Expense = $200 / $40 = 5.0x. This means EBITDA could decline by 80% before the company couldn't cover its interest expense. Higher is better — lenders typically want at least 2-3x coverage. It shows the 'buffer' available if profits fall."
    },
    {
        type: "mc",
        question: "A software company has growing Revenue but its FCF growth far outpaces Revenue growth, driven largely by Stock-Based Compensation add-backs. Is this concerning?",
        context: "FCF quality analysis",
        options: [
            "No — FCF growth is always a positive signal for investors, regardless of what's driving the increase",
            "Yes — SBC is added back as a non-cash item, but it dilutes shareholders. If SBC is driving most FCF growth, the FCF overstates the true cash generation to existing shareholders",
            "No — SBC is a non-cash item that doesn't affect FCF at all, so it can't be inflating the number",
            "Yes — but only because SBC increases the effective tax rate, which will eventually reduce cash flow"
        ],
        correct: 1,
        explanation: "This is the Zendesk-type scenario from the guide. SBC is added back on the CFS, boosting FCF. But SBC creates real dilution cost. If you strip out SBC from CFO, FCF might be much lower or even negative. Always ask WHY FCF is growing — if it's from real operational improvement, that's good. If it's from non-cash add-backs like SBC, be skeptical."
    },
    {
        type: "mc",
        question: "Why do we get EBITDA's D&A from the Cash Flow Statement rather than the Income Statement?",
        context: "Calculating EBITDA correctly",
        options: [
            "Because the CFS number is always larger",
            "Because D&A is often embedded within COGS or Operating Expenses on the IS, so the IS may not show the full amount separately. The CFS always shows the all-inclusive D&A add-back",
            "Because the IS number includes taxes",
            "Because the CFS shows the tax-adjusted D&A"
        ],
        correct: 1,
        explanation: "In real life, Depreciation and Amortization are frequently embedded within COGS, SG&A, or other line items on the IS. You might see only a partial D&A number on the IS. The CFS, however, always adds back the full, all-inclusive D&A as a non-cash adjustment — so use that number for accurate EBITDA."
    },
    {
        type: "mc",
        question: "A retailer's Change in Working Capital / Revenue is consistently -2% to -4% as revenue grows. What does this tell you?",
        context: "Working Capital analysis",
        options: [
            "The company is in financial distress",
            "The company must spend cash on Inventory and other operational assets as it grows, which is normal for a retailer — FCF will be slightly lower than Net Income",
            "The company has negative revenue",
            "The company should stop growing to avoid negative WC changes"
        ],
        correct: 1,
        explanation: "For retailers, negative Change in WC is typical — they must buy Inventory before selling it. As revenue grows, Inventory and AR tend to increase, creating a cash drag. A consistent -2% to -4% of Revenue is modest and manageable. You'd worry if the percentage were large and increasing, or if WC changes were erratic."
    },
    {
        type: "mc",
        question: "ROE = 25%, ROA = 5%. What can you infer about this company's capital structure?",
        context: "Returns-based metrics comparison",
        options: [
            "The company has minimal Debt",
            "The company uses significant Debt (Leverage amplifies ROE relative to ROA — the large gap between 25% ROE and 5% ROA indicates heavy Debt financing)",
            "The company has no Assets",
            "ROA and ROE should always be equal"
        ],
        correct: 1,
        explanation: "ROE = NI / Equity, ROA = NI / Total Assets. When ROE >> ROA, it means Equity is much smaller than Total Assets, implying significant Liabilities (Debt). Leverage amplifies returns to equity holders but also amplifies risk. A 25% ROE might look great until you realize it's driven by 5x leverage, not operational excellence."
    },
];

// ============================================================
// LEVEL 5: EVALUATE — Judge scenarios, spot issues
// ============================================================
const level5Questions = [
    {
        type: "mc",
        question: "A company's FCF is positive and growing, but Revenue has been flat for 3 years. The company has been cutting CapEx each year. Should you be concerned?",
        context: "FCF quality evaluation",
        options: [
            "No — positive FCF growth is always a good sign",
            "Yes — FCF growth from CapEx cuts is unsustainable. The company may be underinvesting in its business, which will hurt future growth and competitiveness",
            "No — cutting CapEx shows good cost discipline",
            "Yes — but only if the company is in the tech sector"
        ],
        correct: 1,
        explanation: "FCF = CFO - CapEx. If CFO is flat but CapEx keeps declining, FCF mechanically increases. But underinvesting in PP&E means the company may fall behind competitors, face equipment failures, or lose market share. This is a 'red flag' — always investigate WHY FCF is growing. Sustainable FCF growth comes from revenue growth and margin improvement, not CapEx cuts."
    },
    {
        type: "mc",
        question: "A company issues $500M in Debt at 4% interest to repurchase $500M of stock. Net Income is $200M, tax rate 25%. How would you evaluate this decision?",
        context: "Capital structure evaluation",
        options: [
            "Great decision — it always increases shareholder value",
            "Bad decision — Debt is always worse than Equity",
            "It depends: the after-tax cost of the Debt ($500M * 4% * (1-25%) = $15M) reduces NI, but the buyback reduces shares outstanding, potentially boosting EPS. Evaluate whether the EPS accretion outweighs the increased leverage risk",
            "Neutral — Debt and Equity repurchases cancel out"
        ],
        correct: 2,
        explanation: "After-tax interest = $500M * 4% * 75% = $15M/year, reducing NI to $185M. But with fewer shares outstanding, EPS could increase if the share reduction % exceeds the NI reduction %. The trade-off: higher EPS now vs. higher leverage risk (higher Leverage Ratio, lower Interest Coverage). Good if the company has stable cash flows; risky if its business is cyclical."
    },
    {
        type: "mc",
        question: "A company acquired another for $200M, creating $40M in Goodwill and $20M in Other Intangibles. Two years later, it writes down $30M of Goodwill. What does this signal?",
        context: "M&A and Goodwill evaluation",
        options: [
            "Nothing — Goodwill write-downs are routine accounting adjustments",
            "The acquired business has underperformed expectations. The premium paid in the acquisition has not been justified by the acquired company's actual performance",
            "The company made a great deal and is just being conservative",
            "The acquired company's Revenue has increased significantly"
        ],
        correct: 1,
        explanation: "Goodwill represents the premium above identifiable assets. A write-down means that premium is no longer justified — the acquired business isn't generating the expected returns. While the write-down itself is non-cash (and often not tax-deductible), it signals management overpaid or the acquisition strategy failed. It's a lagging indicator of a bad deal."
    },
    {
        type: "mc",
        question: "An IFRS company reports Cash Generated from Operations starting from Operating Income, with Dividends in CFO and Lease Principal Repayments in CFF. How should you adjust this for analysis?",
        context: "IFRS vs. GAAP CFS evaluation",
        options: [
            "No adjustment needed — IFRS presentation is always correct",
            "Convert CFS to start with Net Income, move Dividends to CFF, and ensure the Lease Depreciation add-back in CFO is removed (since the full lease is a cash expense)",
            "Just ignore the IFRS CFS entirely",
            "Only change the Dividend line"
        ],
        correct: 1,
        explanation: "For comparability: (1) Start CFS with Net Income instead of Operating Income — find the reconciliation between them. (2) Move Dividends from CFO to CFF. (3) Remove Lease Depreciation add-back in CFO because the company pays the full cash lease expense — splitting it into Interest + Depreciation doesn't change the cash reality. These adjustments make the CFS comparable to U.S. GAAP presentation."
    },
    {
        type: "mc",
        question: "Company X: Leverage = 2.0x, Interest Coverage = 8.0x, ROIC = 18%. Company Y: Leverage = 6.0x, Interest Coverage = 2.5x, ROIC = 22%. Which is the better investment?",
        context: "Multi-metric evaluation",
        options: [
            "Company Y — higher ROIC means it's more efficient",
            "Company X — lower risk profile with reasonable returns",
            "It depends on the context: Company Y has higher ROIC but dangerously high leverage. If the business is stable (utilities, telecom), Y might be fine. If it's cyclical, the 2.5x interest coverage is risky. Company X is safer but may underperform in bull markets",
            "Neither — you can't compare companies with different leverage"
        ],
        correct: 2,
        explanation: "Company Y's 22% ROIC is impressive, but 6.0x leverage and only 2.5x interest coverage means a modest decline in EBITDA could cause debt covenant violations. Company X is conservatively financed with strong coverage. The 'right' answer depends on industry stability, growth prospects, and risk tolerance. In cyclical industries, Company X is far safer."
    },
    {
        type: "mc",
        question: "A subscription software company has positive and growing Change in Working Capital due to rising Deferred Revenue. Is this sustainable?",
        context: "Working Capital sustainability",
        options: [
            "No — Deferred Revenue increases always reverse and hurt cash flow later",
            "Yes — as long as the company keeps growing and adding new subscribers, Deferred Revenue will continue to rise, maintaining positive WC changes. It becomes a concern only if growth stalls",
            "No — positive Change in WC is always a red flag",
            "Yes — Deferred Revenue never has to be delivered"
        ],
        correct: 1,
        explanation: "For growing subscription companies, continual increases in Deferred Revenue are normal and sustainable — each new cohort of customers pays upfront. The positive WC change boosts FCF above Net Income. However, if growth stalls, new Deferred Revenue additions slow while old obligations get fulfilled, potentially reversing the positive WC trend. Growth is the key variable."
    },
    {
        type: "mc",
        question: "A company has Net Income of $50M and FCF of -$20M for the past 5 years. Should you invest?",
        context: "FCF vs. Net Income divergence",
        options: [
            "Yes — positive Net Income means the company is profitable",
            "Probably not. Sustained negative FCF despite positive NI means the company isn't generating real cash. Possible causes: heavy CapEx, growing WC needs, or non-cash revenue. The company relies on external financing to survive — this is a major red flag after 5 years",
            "Yes — FCF doesn't matter for valuation",
            "Need more info — but only about the company's share price"
        ],
        correct: 1,
        explanation: "A persistent NI > 0 but FCF < 0 gap is a serious concern. Common causes: (1) massive CapEx with no returns yet, (2) growing AR/Inventory faster than AP/DR, (3) aggressive revenue recognition. After 5 years, the company should be generating positive FCF. It's essentially burning cash and relying on Debt or Equity issuances. A startup gets a pass; a mature company does not."
    },
];

// ============================================================
// LEVEL 6: CREATE — Multi-step interview problems
// ============================================================
const level6Questions = [
    {
        type: "mc",
        question: "A company buys $100 of Inventory, converts it to finished goods, and sells them for $200 (25% tax rate). Walk through ALL the steps cumulatively. What is the net change in Cash?",
        context: "Multi-step: Inventory cycle",
        options: [
            "+$200 (full Revenue amount)",
            "+$75 (Net Income from $100 gross profit after tax)",
            "+$100 (Revenue minus COGS)",
            "+$150 (Revenue after tax)"
        ],
        correct: 1,
        explanation: "Step 1 (buy Inventory): No IS change, Cash -$100, Inventory +$100. Step 2 (sell & deliver): Revenue +$200, COGS +$100, PTI +$100, NI +$75. CFS: NI +$75, Inventory decreases +$100 (reversal), but cumulatively across both steps: Cash = -$100 (purchase) + $175 (NI of $75 + Inventory decrease of $100) = +$75 net. The net effect: $100 gross profit * (1 - 25%) = $75 increase in Cash."
    },
    {
        type: "mc",
        question: "A company issues $200 Debt at 10% interest, buys $200 PP&E, depreciates it for one year (10% of cost), and repays 5% of principal. Tax rate 25%. What is the net change in Cash after Year 1?",
        context: "Multi-step: Debt-funded CapEx through one year",
        options: [
            "-$20 (Interest of $20 minus tax savings of $5, minus principal of $10, plus depreciation tax savings of $5)",
            "-$10 (just the principal repayment)",
            "+$5 (tax savings from Depreciation)",
            "-$20 (after-tax Interest of $15 plus principal repayment of $10, offset by $5 Depreciation tax savings)"
        ],
        correct: 3,
        explanation: "Initial: Debt +$200, CapEx -$200, Cash unchanged. Year 1: IS: Depreciation -$20, Interest -$20, PTI -$40, NI -$30. CFS: NI -$30, D&A +$20, Principal Repayment -$10 = Cash -$20. Breakdown: After-tax interest = $20*(1-25%) = $15 cash outflow. Principal = $10 outflow. Depreciation tax savings = $20*25% = $5 inflow. Net: -$15 - $10 + $5 = -$20."
    },
    {
        type: "mc",
        question: "A company collects $50K in Deferred Revenue, then delivers the product (25% tax rate). What is the cumulative impact on the Balance Sheet after BOTH steps?",
        context: "Multi-step: Deferred Revenue cycle",
        options: [
            "Cash +$50K, DR +$50K",
            "Cash +$37.5K, CSE +$37.5K (DR returns to original level)",
            "Cash +$50K, CSE +$50K",
            "Cash +$12.5K, CSE +$37.5K"
        ],
        correct: 1,
        explanation: "Step 1 (collect cash): No IS change. Cash +$50K, DR +$50K. Step 2 (deliver): Revenue +$50K, NI +$37.5K. CFS: NI +$37.5K, DR decrease -$50K. Cumulative Cash: +$50K - $12.5K (taxes) = +$37.5K. DR: +$50K then -$50K = net zero. CSE: +$37.5K from Net Income. BS: Cash +$37.5K, CSE +$37.5K. Both sides up $37.5K."
    },
    {
        type: "mc",
        question: "A company sells PP&E (book value $100) for $120, then uses the $120 in proceeds to repay Debt. 25% tax rate. What is the cumulative change in Cash?",
        context: "Multi-step: Asset sale + Debt repayment",
        options: [
            "+$120 (just the sale proceeds)",
            "-$5 (Gain tax of $5 minus proceeds, plus Debt repayment of $120)",
            "-$5: Cash from sale is +$115 ($120 proceeds - $5 tax on Gain), then Debt repayment is -$120. Net = -$5",
            "$0 (everything cancels)"
        ],
        correct: 2,
        explanation: "Sale: IS: Gain of $20 (sold for $120, book $100), NI +$15. CFS: NI +$15, reverse Gain -$20, Proceeds +$120 in CFI. Cash +$115. Debt repayment: CFS: -$120 in CFF. Cash -$120. Cumulative Cash: +$115 - $120 = -$5. BS: PP&E -$100, Cash -$5 = Assets -$105. Debt -$120, CSE +$15 = L&E -$105. Balanced."
    },
    {
        type: "mc",
        question: "A company acquires a target for $200 in cash. Target's CSE = $150, Other Intangibles = 40% of the premium, rest is Goodwill. It then amortizes $4 of Intangibles (not tax-deductible) in Year 2. What happens to Cash from JUST the Amortization?",
        context: "Multi-step: M&A and Amortization",
        options: [
            "Cash decreases by $4",
            "Cash increases by $1 (tax savings)",
            "Cash is unchanged (Amortization of Intangibles from acquisitions is non-cash AND not tax-deductible, so Net DTA increases instead of Cash)",
            "Cash increases by $4"
        ],
        correct: 2,
        explanation: "Premium = $200 - $150 = $50. Other Intangibles = $20 (40%), Goodwill = $30. Year 2 Amortization of $4: IS: PTI -$4, Book Taxes -$1, NI -$3. CFS: NI -$3, add back Amortization +$4, Deferred Taxes -$1 (not cash-tax deductible). Cash unchanged. BS: Intangibles -$4, Net DTA +$1 = Assets -$3. CSE -$3. Both sides -$3."
    },
    {
        type: "mc",
        question: "A company signs a 10-year Finance Lease at $20/year, discount rate 6% (PV = $147). After Year 1, what is the Lease Liability balance?",
        context: "Multi-step: Finance Lease mechanics",
        options: [
            "$127 ($147 - $20 cash payment)",
            "$135.8 ($147 - Lease Principal Repayment of $11.2, where Principal = $20 cash - $8.8 Interest)",
            "$147 (unchanged)",
            "$138.2 ($147 - $8.8 Interest)"
        ],
        correct: 1,
        explanation: "Year 1 Interest = 6% * $147 = $8.8. Cash Lease Payment = $20. Lease Principal Repayment = $20 - $8.8 = $11.2. Ending Lease Liability = $147 - $11.2 = $135.8. Note: the Lease Asset decreases by the Depreciation ($147/10 = $14.7), so the Asset and Liability decrease by different amounts — this is why the BS stays balanced through CSE changes."
    },
    {
        type: "mc",
        question: "A company has $100 NOL, 25% tax rate. Next year it earns $60 Pre-Tax Income and uses NOLs to reduce taxes. What are Cash Taxes, and what happens to the DTA?",
        context: "Multi-step: NOL application",
        options: [
            "Cash Taxes = $15, DTA unchanged",
            "Cash Taxes = $0 (NOL covers all $60 of taxable income), DTA decreases by $15 ($60 * 25%)",
            "Cash Taxes = $0, DTA decreases by $25",
            "Cash Taxes = $10, DTA increases by $15"
        ],
        correct: 1,
        explanation: "The $100 NOL fully covers the $60 taxable income. Cash Taxes = $0. Book Taxes = $60 * 25% = $15. Since Cash Taxes < Book Taxes, Deferred Taxes is positive (+$15) on the CFS, reducing the DTA. DTA was $100 * 25% = $25; it decreases by $15 to $10 (remaining NOL of $40 * 25%). The $15 in tax savings boosts Cash by $15 relative to what NI would suggest."
    },
    {
        type: "mc",
        question: "Walk through everything: A company pre-sells $50K in courses (Deferred Revenue), then delivers them, AND buys $200K of equipment with Debt, depreciating for one year (5-year useful life). Tax rate 25%. What is the NET change in Cash after everything?",
        context: "Comprehensive multi-step scenario",
        options: [
            "+$37.5K (just the Deferred Revenue cycle)",
            "+$37.5K - $20K = +$17.5K",
            "+$37.5K + $10K = +$47.5K (DR cycle adds $37.5K, Depreciation tax savings add $10K)",
            "+$47.5K, but CSE is up by $7.5K"
        ],
        correct: 2,
        explanation: "DR cycle: Collect $50K cash, deliver, Revenue +$50K, NI +$37.5K. Net cash from DR = +$37.5K. CapEx/Debt: Issue $200K Debt, buy $200K PP&E (cash neutral). Depreciation = $200K/5 = $40K. IS: PTI -$40K, Taxes -$10K, NI -$30K. CFS: NI -$30K, D&A +$40K = +$10K cash from depreciation tax savings. Combined: +$37.5K + $10K = +$47.5K. CSE: +$37.5K - $30K = +$7.5K."
    },
];

// ============================================================
// ORDERING QUESTIONS (used at various levels)
// ============================================================
const orderQuestions = [
    {
        level: 2,
        question: "Put the Income Statement line items in the correct order (top to bottom):",
        items: ["Revenue", "Cost of Goods Sold", "Gross Profit", "Operating Expenses", "Operating Income (EBIT)", "Interest Expense", "Pre-Tax Income", "Income Taxes", "Net Income"],
        explanation: "The IS flows: Revenue - COGS = Gross Profit - OpEx = Operating Income - Interest Expense = Pre-Tax Income - Taxes = Net Income. Each level strips away more costs to reveal the company's 'bottom line.'"
    },
    {
        level: 2,
        question: "Order the Cash Flow Statement sections (top to bottom):",
        items: ["Net Income (starting point)", "Non-cash adjustments (D&A, SBC)", "Changes in Working Capital", "Cash Flow from Operations (CFO)", "Cash Flow from Investing (CFI)", "Cash Flow from Financing (CFF)", "Net Change in Cash"],
        explanation: "The CFS starts with Net Income, adjusts for non-cash items and WC changes to get CFO, then adds CFI and CFF to arrive at the Net Change in Cash. This structure reconciles accrual-basis NI to actual cash movements."
    },
    {
        level: 3,
        question: "When answering a 'walk the statements' interview question, put these steps in order:",
        items: ["Explain Income Statement changes (if any)", "Explain Cash Flow Statement changes (including Deferred Taxes)", "Explain Balance Sheet changes", "Verify the Balance Sheet still balances (Assets = L + E)"],
        explanation: "Always follow IS → CFS → BS → Balance check. Start with the IS because it determines Net Income, which flows into the CFS. The CFS determines Cash and other adjustments that link to the BS. Finally, confirm Assets = L + E."
    },
    {
        level: 4,
        question: "Rank these from MOST to LEAST inclusive of expenses (i.e., which deducts the most costs?):",
        items: ["Net Income (deducts ALL costs including Interest and Taxes)", "EBIT / Operating Income (deducts operating costs and D&A, but NOT Interest or Taxes)", "EBITDA (deducts operating costs but NOT D&A, Interest, or Taxes)", "Revenue (deducts nothing — top line)"],
        explanation: "Revenue is the 'top line' with no deductions. EBITDA removes operating costs. EBIT also removes D&A. Net Income removes everything including Interest and Taxes. Each step down 'peels away' more costs."
    },
];

// ============================================================
// FILL-IN-THE-BLANK: Walk the Statements
// ============================================================
const fillinQuestions = [
    {
        level: 3,
        type: "fillin",
        scenario: "Depreciation increases by $10. Tax rate is 25%. Fill in the impact on each statement.",
        is_fields: [
            { label: "Pre-Tax Income", answer: -10, hint: "Depreciation is an expense — it reduces Pre-Tax Income by the full amount." },
            { label: "Taxes (saved)", answer: -2.5, hint: "Lower Pre-Tax Income means lower taxes. How much tax on $10 at 25%?" },
            { label: "Net Income", answer: -7.5, hint: "Net Income = Pre-Tax Income change minus the tax savings." }
        ],
        cfs_fields: [
            { label: "Net Income", answer: -7.5, hint: "This flows directly from the IS." },
            { label: "D&A add-back", answer: 10, hint: "Depreciation is non-cash — add back the full amount." },
            { label: "Net Cash change", answer: 2.5, hint: "NI of -7.5 + D&A add-back of +10 = ?" }
        ],
        bs_fields: [
            { label: "Cash", answer: 2.5, hint: "Flows from the bottom of the CFS." },
            { label: "Net PP&E", answer: -10, hint: "Depreciation reduces PP&E by the full amount." },
            { label: "CSE (Retained Earnings)", answer: -7.5, hint: "CSE changes by Net Income." }
        ],
        explanation: "IS: PTI -$10, Taxes -$2.5, NI -$7.5. CFS: NI -$7.5 + D&A add-back +$10 = Cash +$2.5. BS Assets: Cash +$2.5, PP&E -$10 = -$7.5. BS L&E: CSE -$7.5. Both sides down $7.5. The $2.5 cash increase is the tax savings ($10 × 25%)."
    },
    {
        level: 3,
        type: "fillin",
        scenario: "A company records $100 in Revenue but hasn't collected the cash. Tax rate 25%. Fill in each impact.",
        is_fields: [
            { label: "Revenue", answer: 100, hint: "Revenue is recognized when delivered, regardless of cash collection." },
            { label: "Pre-Tax Income", answer: 100, hint: "Revenue flows straight to PTI (no matching expense here)." },
            { label: "Net Income", answer: 75, hint: "PTI × (1 - tax rate) = ?" }
        ],
        cfs_fields: [
            { label: "Net Income", answer: 75, hint: "Flows from the IS." },
            { label: "Change in AR", answer: -100, hint: "AR increased (cash not collected) — that's a negative CFS adjustment." },
            { label: "Net Cash change", answer: -25, hint: "NI +75, AR adjustment -100 = ?" }
        ],
        bs_fields: [
            { label: "Cash", answer: -25, hint: "From the CFS bottom line." },
            { label: "Accounts Receivable", answer: 100, hint: "Customer owes $100." },
            { label: "CSE", answer: 75, hint: "CSE increases by Net Income." }
        ],
        explanation: "IS: Revenue +$100, NI +$75. CFS: NI +$75, AR adjustment -$100 = Cash -$25. BS Assets: Cash -$25, AR +$100 = +$75. BS L&E: CSE +$75. Both sides up $75. Cash is negative because taxes were owed on revenue that hasn't been collected yet."
    },
    {
        level: 3,
        type: "fillin",
        scenario: "A company spends $500 on CapEx (end of year, no Depreciation yet). Fill in each impact.",
        is_fields: [
            { label: "Pre-Tax Income", answer: 0, hint: "CapEx benefits multiple years — it does NOT go on the IS." },
            { label: "Net Income", answer: 0, hint: "No IS impact means no NI change." }
        ],
        cfs_fields: [
            { label: "Net Income", answer: 0, hint: "No IS impact." },
            { label: "CapEx (in CFI)", answer: -500, hint: "CapEx is a cash outflow in Cash Flow from Investing." },
            { label: "Net Cash change", answer: -500, hint: "Only the CapEx outflow." }
        ],
        bs_fields: [
            { label: "Cash", answer: -500, hint: "Cash went out to buy the equipment." },
            { label: "Net PP&E", answer: 500, hint: "The equipment was added to PP&E." },
            { label: "CSE", answer: 0, hint: "No Net Income impact, so CSE doesn't change." }
        ],
        explanation: "IS: No change (CapEx fails the 'current period' rule). CFS: CapEx -$500 in CFI. BS: Cash -$500, PP&E +$500. Total Assets unchanged. L&E unchanged. Balance sheet still balances."
    },
    {
        level: 3,
        type: "fillin",
        scenario: "Interest Expense of $20 is incurred and paid in cash. Tax rate 25%. Fill in each impact.",
        is_fields: [
            { label: "Pre-Tax Income", answer: -20, hint: "Interest Expense reduces PTI." },
            { label: "Taxes (saved)", answer: -5, hint: "Interest is tax-deductible. Tax savings = $20 × 25%." },
            { label: "Net Income", answer: -15, hint: "PTI change × (1 - tax rate)." }
        ],
        cfs_fields: [
            { label: "Net Income", answer: -15, hint: "Flows from the IS." },
            { label: "Non-cash adjustments", answer: 0, hint: "Interest is a cash expense — nothing to add back." },
            { label: "Net Cash change", answer: -15, hint: "Cash expense, no adjustments needed." }
        ],
        bs_fields: [
            { label: "Cash", answer: -15, hint: "After-tax cost of interest." },
            { label: "Total Assets change", answer: -15, hint: "Only Cash changed on the Assets side." },
            { label: "CSE", answer: -15, hint: "CSE changes by Net Income." }
        ],
        explanation: "IS: PTI -$20, Taxes -$5, NI -$15. CFS: NI -$15, no adjustments (cash expense). Cash -$15. BS: Cash -$15 on Assets. CSE -$15 on L&E. Both sides down $15. The after-tax cost of interest = $20 × (1 - 25%) = $15."
    },
    {
        level: 3,
        type: "fillin",
        scenario: "Deferred Revenue increases by $50 (cash collected, product NOT yet delivered). Tax rate 25%. Fill in each impact.",
        is_fields: [
            { label: "Revenue", answer: 0, hint: "No delivery = no revenue recognition." },
            { label: "Net Income", answer: 0, hint: "Nothing on the IS." }
        ],
        cfs_fields: [
            { label: "Net Income", answer: 0, hint: "No IS impact." },
            { label: "Change in Deferred Rev", answer: 50, hint: "DR increased = positive CFS adjustment (cash came in)." },
            { label: "Net Cash change", answer: 50, hint: "Cash collected, nothing else." }
        ],
        bs_fields: [
            { label: "Cash", answer: 50, hint: "Cash was collected from the customer." },
            { label: "Deferred Revenue", answer: 50, hint: "Obligation to deliver in the future." },
            { label: "CSE", answer: 0, hint: "No Net Income = no CSE change." }
        ],
        explanation: "IS: No change (no delivery). CFS: DR adjustment +$50 = Cash +$50. BS: Cash +$50 on Assets. DR +$50 on L&E. Both sides up $50. CSE unchanged. Revenue will be recognized when the product is delivered."
    },
    {
        level: 6,
        type: "fillin",
        scenario: "SBC of $40 is issued (NOT tax-deductible). Tax rate 25%. Fill in each impact, including Deferred Taxes.",
        is_fields: [
            { label: "SBC Expense", answer: -40, hint: "SBC is an operating expense on the IS." },
            { label: "Book Taxes saved", answer: -10, hint: "Book taxes decrease: $40 × 25%." },
            { label: "Net Income", answer: -30, hint: "$40 × (1 - 25%) = ?" }
        ],
        cfs_fields: [
            { label: "Net Income", answer: -30, hint: "Flows from the IS." },
            { label: "SBC add-back", answer: 40, hint: "Non-cash expense — add back the full amount." },
            { label: "Deferred Taxes", answer: -10, hint: "NOT tax-deductible, so no real tax savings. DT offsets the book tax benefit." },
            { label: "Net Cash change", answer: 0, hint: "NI -30 + SBC +40 + DT -10 = ?" }
        ],
        bs_fields: [
            { label: "Cash", answer: 0, hint: "No cash impact from SBC." },
            { label: "Net DTA change", answer: 10, hint: "Future tax savings created (not deductible now)." },
            { label: "CSE (from NI)", answer: -30, hint: "Net Income reduces retained earnings." },
            { label: "CSE (from SBC)", answer: 40, hint: "SBC creates equity (new shares issued to employees)." }
        ],
        explanation: "IS: Expense -$40, Book Taxes -$10, NI -$30. CFS: NI -$30, SBC +$40, Deferred Taxes -$10 = Cash unchanged. BS Assets: DTA +$10. BS L&E: CSE net +$10 (-$30 NI + $40 SBC). Both sides up $10. Share count also increases (dilution)."
    },
    {
        level: 6,
        type: "fillin",
        scenario: "A company issues $200 Debt at 10% interest, buys $200 PP&E, then records Year 1 Depreciation (5-year life) and pays interest. Tax rate 25%. Net Cash change after Year 1?",
        is_fields: [
            { label: "Depreciation", answer: -40, hint: "$200 / 5 years = $40/year." },
            { label: "Interest Expense", answer: -20, hint: "10% × $200 = $20." },
            { label: "Net Income", answer: -45, hint: "PTI = -$60, Taxes saved = $15, NI = ?" }
        ],
        cfs_fields: [
            { label: "Net Income", answer: -45, hint: "From the IS." },
            { label: "D&A add-back", answer: 40, hint: "Full Depreciation added back." },
            { label: "Debt Issuance (CFF)", answer: 200, hint: "Cash inflow from borrowing." },
            { label: "CapEx (CFI)", answer: -200, hint: "Cash outflow for equipment." },
            { label: "Net Cash change", answer: -5, hint: "NI -45 + D&A +40 + Debt +200 - CapEx -200 = ?" }
        ],
        bs_fields: [
            { label: "Cash", answer: -5, hint: "From the CFS." },
            { label: "Net PP&E", answer: 160, hint: "+$200 CapEx - $40 Depreciation." },
            { label: "Total Debt", answer: 200, hint: "New Debt issued." },
            { label: "CSE", answer: -45, hint: "Changes by Net Income." }
        ],
        explanation: "Initial: Debt +$200 and CapEx -$200 offset = Cash unchanged. Year 1 IS: D&A -$40 + Interest -$20 = PTI -$60, Taxes -$15, NI -$45. CFS: NI -$45 + D&A +$40 = Cash -$5. BS: Cash -$5, PP&E +$160 = Assets +$155. Debt +$200, CSE -$45 = L&E +$155. Balanced."
    }
];

// Export all questions
const ALL_QUESTIONS = {
    1: level1Questions,
    2: level2Questions,
    3: level3Questions,
    4: level4Questions,
    5: level5Questions,
    6: level6Questions,
    order: orderQuestions,
    fillin: fillinQuestions
};
