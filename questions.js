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
    // NEW FLASHCARDS
    { type: "flashcard", term: "Financial Investments", definition: "Stocks and bonds purchased with excess Cash. Appear as Assets on the BS. Interest Income from them appears on the IS. Purchase shows in Cash Flow from Investing." },
    { type: "flashcard", term: "Net Operating Loss (NOL)", definition: "Accumulated losses from negative Pre-Tax Income. Component of the DTA. NOL reduces future taxable income, saving cash taxes. DTA from NOL ≈ Tax Rate × NOL Balance." },
    { type: "flashcard", term: "Amortization of Intangibles", definition: "Systematic allocation of Other Intangible Assets' cost over their useful life. Similar to Depreciation. Non-cash IS expense, added back on CFS. Typically NOT cash-tax deductible." },
    { type: "flashcard", term: "Goodwill Impairment", definition: "A write-down of Goodwill when an acquired company is worth less than expected. Non-cash IS expense, added back on CFS. Typically NOT cash-tax deductible, so DTA increases instead of Cash." },
    { type: "flashcard", term: "Treasury Stock", definition: "A contra-equity account within CSE that decreases when the company repurchases its own shares. Reduces total CSE and the shares outstanding." },
    { type: "flashcard", term: "NOPAT", definition: "Net Operating Profit After Taxes = EBIT × (1 - Tax Rate). Used in ROIC calculation. Capital structure-neutral measure of operating profitability." },
    { type: "flashcard", term: "Return on Equity (ROE)", definition: "Net Income / Shareholders' Equity. Measures how efficiently the company uses equity to generate profit. Can be artificially boosted by leverage." },
    { type: "flashcard", term: "Return on Assets (ROA)", definition: "Net Income / Total Assets. Measures how efficiently a company uses all its assets to generate profit. More useful for asset-heavy industries like banking." },
    { type: "flashcard", term: "Days Inventory Outstanding (DIO)", definition: "Inventory / COGS × 365. How many days inventory sits before being sold. Lower is generally better." },
    { type: "flashcard", term: "Days Payable Outstanding (DPO)", definition: "Accounts Payable / COGS × 365. How many days the company takes to pay suppliers. Higher can indicate market power." },
    { type: "flashcard", term: "Accrued Expenses", definition: "A Liability for recurring expenses without invoices (utilities, wages). Similar to AP but for recurring items. Expense recognized on IS before cash payment." },
    { type: "flashcard", term: "Preferred Stock", definition: "A hybrid funding source between Debt and Equity. Has fixed dividends (like interest) but is NOT tax-deductible. Preferred Dividends reduce Net Income to Common but NOT Preferred Stock balance." },
    // FITB — Level 1
    { type: 'fitb', context: 'Income Statement', question: 'Revenue minus COGS equals ___', answer: ['Gross Profit', 'Gross Margin'], explanation: 'Gross Profit = Revenue - COGS. It shows how much additional profit the company earns from each sale before fixed operating expenses.' },
    { type: 'fitb', context: 'Cash Flow Statement', question: 'The Cash Flow Statement begins with ___ at the top line.', answer: ['Net Income'], explanation: 'Under U.S. GAAP (indirect method), the CFS starts with Net Income and adjusts downward for non-cash items, working capital changes, and then shows investing and financing activities.' },
    { type: 'fitb', context: 'Balance Sheet', question: 'Assets = Liabilities + ___', answer: ['Equity', "Shareholders' Equity", 'Common Shareholders Equity'], explanation: 'This is the fundamental accounting equation. The Balance Sheet must always balance — every dollar of assets is funded by either a liability (debt, payables) or equity (shareholder contributions and retained earnings).' },
    { type: 'fitb', context: 'Working Capital', question: 'Free Cash Flow = Cash Flow from Operations minus ___', answer: ['CapEx', 'Capital Expenditures'], explanation: 'FCF = CFO - CapEx. It represents the discretionary cash the company generates after paying for the capital investment needed to maintain and grow the business.' },
    { type: 'fitb', context: 'Metrics', question: 'EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and ___', answer: ['Amortization'], explanation: 'The A in EBITDA stands for Amortization — the non-cash allocation of intangible asset costs over time, analogous to depreciation for physical assets.' },
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
    // NEW LEVEL 2 QUESTIONS
    {
        type: "mc",
        question: "What are the three financial statements, and why do we need all three rather than just one or two?",
        context: "The Three Financial Statements",
        options: [
            "IS, BS, and CFS. We need all three because each one covers a dimension the others miss: profitability (IS), resources and obligations at a point in time (BS), and real cash generation (CFS)",
            "IS, BS, and CFS. We need all three primarily because regulators require them — any single statement would suffice for investment analysis purposes",
            "IS, BS, and CFS. We need all three only because investors demand them — management can run the business using just the Income Statement alone",
            "IS, BS, and CFS. We need all three because each one measures revenue differently, giving three independent estimates of the company's true revenue"
        ],
        correct: 0,
        explanation: "The IS shows profitability over a period, the BS shows the company's resources (Assets) and funding (L&E) at a point in time, and the CFS shows how much real cash the business generated. Cash can differ from Net Income because of non-cash items, working capital changes, and long-term items like CapEx. You need all three for a complete picture."
    },
    {
        type: "mc",
        question: "How do the three financial statements link together?",
        context: "Linking the Statements",
        options: [
            "They don't actually link — each statement is prepared independently by different departments within the company",
            "The IS feeds Revenue into the CFS, the CFS feeds Cash into the BS, and the BS feeds Assets back into the IS for the next period",
            "Net Income flows from the IS to the top of the CFS. After non-cash adjustments, working capital changes, investing, and financing, the CFS produces the Net Change in Cash, which updates the BS Cash balance. Net Income also flows into Retained Earnings within CSE on the BS",
            "The CFS produces Net Income, which flows to the IS. The IS then produces Revenue, which flows to the Balance Sheet as an Asset"
        ],
        correct: 2,
        explanation: "The linkage: (1) Net Income from the IS flows to the top of the CFS. (2) After adjustments (non-cash, WC, CFI, CFF), the CFS produces Net Change in Cash, updating the BS Cash balance. (3) Net Income also flows into Retained Earnings on the BS. (4) Items like D&A on the CFS reduce PP&E on the BS, and CapEx increases it."
    },
    {
        type: "mc",
        question: "If you could only look at one financial statement, which would be the most important and why?",
        context: "Statement Importance",
        options: [
            "The Income Statement, because Net Income is the single most important metric and tells you everything about a company's financial health",
            "The Balance Sheet, because it provides a complete snapshot of Assets, Liabilities, and Equity at one point in time and reveals the company's true worth",
            "The Cash Flow Statement, because it shows real cash generation, is harder to manipulate with accounting assumptions, and a company can survive with negative NI but not negative cash for long",
            "None is more important — they are all perfectly equal, and asking which is most important is a trick question with no valid answer"
        ],
        correct: 2,
        explanation: "The CFS is generally considered most important because cash is king: a company can have positive NI but go bankrupt if it runs out of cash. The CFS is also harder to manipulate because it tracks real cash movements. However, you'd ideally want all three — the IS shows profitability trends and the BS shows financial health."
    },
    {
        type: "mc",
        question: "Could you use only two financial statements to construct the third one?",
        context: "Statement Construction",
        options: [
            "Yes — with any two statements you can always perfectly reconstruct the third one without any additional information needed",
            "No — it is mathematically impossible to derive any statement from the other two because they measure completely different things",
            "Yes — with the IS and BS from two periods, you can derive the CFS. But you CANNOT go the other way: the CFS and IS alone can't give you the full BS without a starting balance sheet",
            "Yes — but only if you use the CFS and BS together, because the IS is simply the difference between two balance sheets"
        ],
        correct: 2,
        explanation: "With the IS and two BS periods, you can construct the CFS: Net Income comes from the IS, changes in BS items give you working capital adjustments and investing/financing flows. However, the CFS + IS alone can't give you the BS without a starting BS, because you need beginning balances to calculate ending balances."
    },
    {
        type: "mc",
        question: "How might financial statements prepared under IFRS differ from those prepared under U.S. GAAP?",
        context: "IFRS vs. U.S. GAAP",
        options: [
            "They are identical in all respects because international accounting standards have been fully harmonized across all countries worldwide",
            "The IS may start with Gross Profit rather than Revenue, the CFS may start with Operating Income rather than NI, Dividends may appear in CFO rather than CFF, and lease accounting treatment may differ for operating leases",
            "The only difference is that IFRS uses a different currency than GAAP, requiring conversion of all monetary amounts before comparison",
            "IFRS statements exclude the Cash Flow Statement entirely because it is not required under international accounting standards for public companies"
        ],
        correct: 1,
        explanation: "Key IFRS vs. GAAP differences: (1) IFRS IS may start at Gross Profit or a different subtotal. (2) IFRS CFS often starts with Operating Income, not NI. (3) Dividends and Interest may appear in CFO under IFRS vs. CFF under GAAP. (4) IFRS does not distinguish between Operating and Finance Leases on the IS — all leases are treated like Finance Leases."
    },
    {
        type: "mc",
        question: "If an IFRS Cash Flow Statement starts with Operating Income rather than Net Income, what should you do to make it comparable?",
        context: "Converting IFRS CFS",
        options: [
            "Nothing — simply use Operating Income in place of Net Income for all calculations and comparisons with GAAP companies",
            "Find the reconciliation between Operating Income and Net Income (add Interest, Other Income/Expense, and Taxes back) and re-state the CFS starting from Net Income for comparability",
            "Multiply Operating Income by (1 - Tax Rate) to approximate Net Income, then ignore all other differences between the two frameworks",
            "Discard the CFS entirely and calculate cash flow manually from the Income Statement and Balance Sheet, since IFRS CFS cannot be converted"
        ],
        correct: 1,
        explanation: "When an IFRS CFS starts with Operating Income, you need to trace from Operating Income to Net Income by accounting for Interest, Other Income/Expense, and Taxes. Then re-state the CFS starting from NI. You should also move Dividends from CFO to CFF, and handle lease adjustments to make it comparable to a U.S. GAAP presentation."
    },
    {
        type: "mc",
        question: "How do you determine whether an item should appear on the Income Statement?",
        context: "Income Statement Criteria",
        options: [
            "An item appears on the IS if it involves a cash payment or cash receipt during the current accounting period, regardless of timing",
            "An item appears on the IS if it affects the income available to common shareholders AND corresponds to the current period only — items spanning multiple periods (like CapEx or Debt issuance) do not qualify",
            "An item appears on the IS only if it has been approved by the company's board of directors and disclosed in the annual report footnotes",
            "An item appears on the IS if it changes the company's total Asset balance by more than 5% of the prior period's total Assets"
        ],
        correct: 1,
        explanation: "Two criteria for IS inclusion: (1) The item must affect the income available to common shareholders. (2) It must correspond to the current period only. CapEx fails because it benefits multiple years. Debt issuance fails because it lasts for years and doesn't directly affect income. Revenue, COGS, OpEx, Interest, and Taxes all pass both tests."
    },
    {
        type: "mc",
        question: "What is the fundamental difference between Assets, Liabilities, and Equity on the Balance Sheet?",
        context: "Balance Sheet Classification",
        options: [
            "Assets are things the company will sell, Liabilities are things the company will buy, and Equity is the cash the company has in the bank",
            "Assets represent future benefits to the company (cash, receivables, equipment). Liabilities represent future obligations (debt, payables). Equity is the residual: Assets minus Liabilities, representing ownership value",
            "Assets are always tangible physical items, Liabilities are always amounts owed to banks, and Equity is always equal to the company's stock price times shares outstanding",
            "Assets are items on the left side of the IS, Liabilities are items on the right side of the IS, and Equity is the difference between Revenue and Expenses"
        ],
        correct: 1,
        explanation: "Assets = future economic benefits (Cash, AR, Inventory, PP&E, Goodwill). Liabilities = future obligations (AP, Debt, Deferred Revenue). Equity = the residual claim: Assets - Liabilities. This is the fundamental accounting equation: Assets = Liabilities + Equity. Equity represents what shareholders would receive if all assets were sold and all liabilities paid."
    },
    {
        type: "mc",
        question: "How can you tell if an item should appear on the Cash Flow Statement?",
        context: "CFS Criteria",
        options: [
            "An item appears on the CFS only if it involves a direct bank transfer or check payment between the company and an external party",
            "An item appears on the CFS if there is a DIFFERENCE between what appears on the IS and what the company actually paid or received in cash — or if there's a cash inflow/outflow with no IS impact at all (like CapEx or Debt issuance)",
            "An item appears on the CFS only if it also appears on the Income Statement, since the CFS is simply a reformatted version of the IS",
            "An item appears on the CFS only if it changes the total Equity balance on the Balance Sheet by more than a material threshold"
        ],
        correct: 1,
        explanation: "Items appear on the CFS when: (1) There's a gap between IS recognition and cash reality (e.g., D&A reduces NI but isn't cash, AR increases NI but no cash collected). (2) There's a cash flow with no IS impact (CapEx, Debt issuance/repayment, Equity issuance). The CFS bridges the gap between accrual accounting (IS) and cash reality."
    },
    {
        type: "mc",
        question: "Why is Accounts Receivable classified as an Asset but Deferred Revenue is classified as a Liability?",
        context: "AR vs. Deferred Revenue",
        options: [
            "Both represent the same underlying transaction but are recorded on different sides of the BS due to an arbitrary accounting convention that could go either way",
            "AR represents a future benefit (cash the company will collect), while Deferred Revenue represents a future obligation (products/services the company must deliver), so they fall on opposite sides of the BS",
            "AR is an Asset because it always converts to cash within 30 days, while Deferred Revenue is a Liability because it never converts to cash at all",
            "AR is an Asset because it increases Net Income, while Deferred Revenue is a Liability because it decreases Net Income when initially recorded"
        ],
        correct: 1,
        explanation: "AR = the company delivered a product but hasn't collected cash yet. It's a future benefit (incoming cash), so it's an Asset. Deferred Revenue = the company collected cash but hasn't delivered the product yet. It's a future obligation (must deliver), so it's a Liability. Both involve timing gaps, but in opposite directions."
    },
    {
        type: "mc",
        question: "How are Prepaid Expenses different from Accounts Payable and Accrued Expenses?",
        context: "Working Capital Classification",
        options: [
            "Prepaid Expenses is an Asset (cash paid BEFORE the expense is recognized), while AP and Accrued Expenses are Liabilities (expense recognized BEFORE cash is paid). They represent opposite timing mismatches",
            "Prepaid Expenses and AP are both Liabilities, while Accrued Expenses is an Asset — they differ only in size and the types of vendors involved",
            "Prepaid Expenses only applies to insurance, while AP and Accrued Expenses apply to all other vendor payments and recurring costs",
            "There is no meaningful difference — Prepaid Expenses, AP, and Accrued Expenses are three names for the same Balance Sheet line item"
        ],
        correct: 0,
        explanation: "Prepaid Expenses = cash paid in advance for a service not yet received (Asset, future benefit). AP = invoice received for goods/services already delivered, cash not yet paid (Liability, future obligation). Accrued Expenses = recurring expense recognized, no invoice yet, cash not yet paid (Liability). Prepaid is the mirror image of AP/Accrued."
    },
    {
        type: "mc",
        question: "Could a company have negative Common Shareholders' Equity (CSE)? What would cause this?",
        context: "Negative Equity",
        options: [
            "No — negative CSE is mathematically impossible because Assets can never be less than Liabilities under accounting rules",
            "Yes — if the company has accumulated large losses (negative Retained Earnings) or done massive share buybacks (Treasury Stock), CSE can go negative. The company may still operate fine if it has positive cash flow",
            "Yes — but only during bankruptcy proceedings, as negative CSE immediately triggers mandatory liquidation under all circumstances",
            "No — if Retained Earnings go negative, the company must issue new stock to bring CSE back to zero before filing its financial statements"
        ],
        correct: 1,
        explanation: "Negative CSE is possible and not uncommon. Causes: (1) Accumulated losses making Retained Earnings deeply negative. (2) Large share repurchases creating massive Treasury Stock (e.g., McDonald's, Starbucks). The company can still function if it generates enough cash. Negative CSE simply means Liabilities > Assets, which leverage-heavy or buyback-heavy companies may have."
    },
    {
        type: "mc",
        question: "Why do Goodwill and Other Intangible Assets appear on the Balance Sheet after an M&A deal?",
        context: "M&A and Intangibles",
        options: [
            "They appear because the acquirer always pays more than the target's net assets (Assets minus Liabilities). The premium is split into identifiable intangibles (contracts, patents, brand) and the residual unidentifiable premium (Goodwill)",
            "They appear because the target company internally generated these assets before the acquisition, and the acquirer simply transfers them to its own Balance Sheet unchanged",
            "They appear only as a temporary placeholder and must be written off within one year of the acquisition closing date under both GAAP and IFRS rules",
            "They appear because regulators require acquirers to create fictional assets equal to the Debt used to finance the acquisition to keep the Balance Sheet balanced"
        ],
        correct: 0,
        explanation: "When a company acquires a target, it usually pays more than the target's book value (CSE). The premium above CSE is allocated: first to identifiable intangibles (customer relationships, patents, brand value = Other Intangible Assets), and the remainder to Goodwill. Goodwill is the unidentifiable portion of the premium — the 'catchall' for value that can't be linked to specific assets."
    },
    {
        type: "mc",
        question: "How do Goodwill and Other Intangible Assets change over time after an acquisition?",
        context: "Intangibles Over Time",
        options: [
            "Both Goodwill and Other Intangible Assets are amortized over their useful lives, steadily declining each year until they reach zero on the Balance Sheet",
            "Other Intangible Assets amortize over their useful lives (reducing each year). Goodwill does NOT amortize — it stays constant unless an impairment test reveals the acquired company is worth less than expected, triggering a write-down",
            "Neither Goodwill nor Other Intangible Assets ever change after the acquisition — they remain at their original values permanently on the Balance Sheet",
            "Goodwill increases each year by the inflation rate, while Other Intangible Assets decrease by the same amount, keeping the total constant"
        ],
        correct: 1,
        explanation: "Other Intangible Assets amortize (e.g., a patent over 10 years). This Amortization is a non-cash IS expense, added back on the CFS. Goodwill does NOT amortize — it remains on the BS at its original value unless an impairment test shows the acquired company underperformed, triggering a Goodwill write-down (also non-cash, typically not tax-deductible)."
    },
    // TF — Level 2
    { type: 'tf', context: 'Income Statement Criteria', question: 'CapEx appears on the Income Statement because the company spends real cash to purchase the asset.', answer: false, explanation: 'CapEx does NOT appear on the IS. To appear on the IS, an item must correspond 100% to the current period. CapEx benefits multiple years, so only Depreciation (the annual allocation) hits the IS. The initial purchase goes on the CFS (CFI) and BS (PP&E).' },
    { type: 'tf', context: 'Balance Sheet', question: 'Deferred Revenue is classified as a Liability because the company has already collected cash but has not yet delivered the product or service.', answer: true, explanation: 'Deferred Revenue represents a future obligation — the company must still deliver the product/service. Since it results in a future outflow of effort/resources (not a future benefit), it is a Liability, not an Asset.' },
    { type: 'tf', context: 'Non-cash Items', question: 'Stock-Based Compensation is identical to Depreciation in its effect on the financial statements because both are non-cash expenses added back on the Cash Flow Statement.', answer: false, explanation: 'Both are non-cash IS expenses added back on the CFS, but SBC creates additional shares outstanding, diluting existing investors. Depreciation simply reduces PP&E — it does not change the share count or capital structure. SBC is often treated as a real economic cost in valuation.' },
    // FITB — Level 2
    { type: 'fitb', context: 'Linking the Statements', question: 'Net Income from the Income Statement flows into ___ on the Balance Sheet.', answer: ['Retained Earnings'], explanation: 'Each period, Net Income is added to Retained Earnings (a component of Common Shareholders Equity). Dividends are subtracted. This is one of the key links between the IS and BS.' },
    { type: 'fitb', context: 'IFRS vs. GAAP', question: 'Under IFRS, Operating Leases on the Income Statement are treated like ___ Leases — split into Interest and Depreciation.', answer: ['Finance', 'Finance Leases', 'Capital'], explanation: 'Under IFRS 16, all leases (Operating and Finance) are treated the same way on the IS: the lease expense is split into an Interest component and a Depreciation component, front-loading the total expense. Under U.S. GAAP, Operating Leases show a single flat Rental Expense.' },
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
    // NEW LEVEL 3 QUESTIONS
    {
        type: "mc",
        question: "A company sells a factory with a book value of $100 for $80 (a loss). Tax rate 25%. What happens to Cash?",
        context: "Walk the statements: Loss on sale of Assets",
        options: [
            "Cash decreases by $20, because the company lost $20 on the sale and must pay that difference in cash to settle the transaction",
            "Cash increases by $80, because the full $80 proceeds flow in and the $20 Loss is non-cash — but taxes saved $5, so net Cash change is +$85",
            "Cash increases by $85: you receive $80 proceeds, and the $20 Loss saves $5 in taxes ($20 × 25%), giving a net Cash increase of $85",
            "Cash stays the same because the Loss exactly offsets the proceeds after taxes, leaving no net cash impact on the Balance Sheet"
        ],
        correct: 2,
        explanation: "IS: Loss of $20 (sold for $80, book $100). PTI -$20, Taxes -$5, NI -$15. CFS: NI -$15, add back Loss +$20, then proceeds +$80 in CFI. Cash +$85. BS: Cash +$85, PP&E -$100 = Assets -$15. CSE -$15. Both sides down $15. The tax savings on the Loss boost Cash above the $80 proceeds."
    },
    {
        type: "mc",
        question: "An employee switches from a $100 cash salary to $120 in Stock-Based Compensation (NOT tax-deductible). 25% tax rate. What is the net impact on Cash vs. the original cash salary?",
        context: "Walk the statements: Cash salary to SBC",
        options: [
            "Cash improves by $75 — the company saves the full after-tax cash salary cost of $75, since SBC has zero cash impact when not tax-deductible",
            "Cash improves by $100 — the company no longer pays any cash salary, and the SBC has no effect on Cash whatsoever regardless of the tax treatment",
            "Cash worsens by $20 — the additional $20 in SBC expense ($120 vs $100) creates a larger expense that reduces Cash through higher tax payments",
            "Cash improves by $50 — the company saves $75 from eliminating the cash salary but loses $25 from the non-deductible SBC creating a deferred tax adjustment"
        ],
        correct: 0,
        explanation: "Old: $100 cash salary, after-tax cost = $75. Cash down $75. New: $120 SBC (not tax-deductible). IS: Expense -$120, Book Taxes -$30, NI -$90. CFS: NI -$90, SBC +$120, Deferred Taxes -$30. Cash unchanged. Compared to old scenario (Cash -$75), the company saves $75 in Cash. But share count increases, diluting existing shareholders."
    },
    {
        type: "mc",
        question: "A company prepays $20 for utilities (Prepaid Expense created). Later, the expense is recognized. Tax rate 25%. What is the cumulative Cash impact after both steps?",
        context: "Walk the statements: Prepaid Expense cycle",
        options: [
            "Cash decreases by $20 — the full prepayment amount flows out and is never recovered, regardless of when the expense is recognized",
            "Cash decreases by $15 — the $20 payment goes out, but when the expense is recognized, the $5 tax savings partially offsets the outflow",
            "Cash stays the same — the prepayment and expense recognition are purely Balance Sheet reclassifications with no Cash Flow Statement impact",
            "Cash decreases by $5 — the prepayment reduces Cash by $20, but the expense recognition creates $15 in tax savings that flow back as cash"
        ],
        correct: 1,
        explanation: "Step 1 (prepay): No IS impact. CFS: Prepaid Expense increase = -$20 adjustment. Cash -$20. BS: Cash -$20, Prepaid +$20. Step 2 (expense recognized): IS: Expense -$20, NI -$15. CFS: NI -$15, Prepaid decrease = +$20. Cash +$5. Cumulative: -$20 + $5 = -$15 Cash. The net Cash impact equals the after-tax expense: $20 × (1-25%) = $15."
    },
    {
        type: "mc",
        question: "A company buys $400 of Inventory for cash, then sells and delivers all of it for $600. Tax rate 25%. What is the cumulative change in Cash?",
        context: "Walk the statements: Full Inventory cycle",
        options: [
            "Cash increases by $600, since the company receives the full Revenue amount and the Inventory cost was already deducted earlier",
            "Cash increases by $200, which equals the gross profit ($600 Revenue minus $400 COGS) before any tax consideration is applied",
            "Cash increases by $150 — the gross profit is $200, and after 25% tax the net after-tax profit of $150 equals the cumulative Cash change",
            "Cash increases by $400, because the original Inventory cost is recovered and the remaining $200 profit is reduced by taxes to zero"
        ],
        correct: 2,
        explanation: "Step 1 (buy Inventory): No IS impact. Cash -$400, Inventory +$400. Step 2 (sell/deliver): Revenue +$600, COGS +$400, Gross Profit +$200, NI +$150. CFS: NI +$150, Inventory decrease +$400. Cash from Step 2 = +$550. Cumulative: -$400 + $550 = +$150. Net = Gross Profit × (1 - Tax Rate) = $200 × 75% = $150."
    },
    {
        type: "mc",
        question: "A company receives $200 of goods on credit (AP created). Later, it pays the $200 in cash. What is the cumulative impact on Cash?",
        context: "Walk the statements: AP cycle",
        options: [
            "Cash is unchanged cumulatively — the AP creation and cash payment offset each other, and since no revenue was recorded, there's no net Cash impact",
            "Cash decreases by $200 — the company ultimately paid $200 in cash for the goods, and that cash outflow is the only cumulative Cash impact",
            "Cash decreases by $150 — the $200 payment is partially offset by $50 in tax savings from the expense recognition on the Income Statement",
            "Cash increases by $200 — receiving goods on credit generates a positive Cash Flow Statement adjustment that persists even after payment"
        ],
        correct: 1,
        explanation: "Step 1 (receive goods on credit): No IS impact, no Cash impact. Inventory/Asset +$200, AP +$200. Step 2 (pay cash): No IS impact. CFS: AP decrease = -$200 adjustment. Cash -$200. BS: Cash -$200, AP -$200. Cumulative Cash = -$200. The goods were received but not yet sold, so no IS impact. Cash simply went out when the company paid."
    },
    {
        type: "mc",
        question: "A company collects $1,200 in Deferred Revenue upfront for a 12-month subscription, then delivers $100/month of service. After the first month, what has happened cumulatively?",
        context: "Walk the statements: Deferred Revenue with partial delivery",
        options: [
            "Cash +$1,200, DR +$1,100, Revenue +$100, NI +$75, CSE +$75. The BS balances with Assets up $1,275 and L&E up $1,275",
            "Cash +$1,125, DR +$1,100, Revenue +$100, NI +$75, CSE +$75. The BS balances with Assets up $1,175 and L&E up $1,175",
            "Cash +$1,175, DR +$1,100, Revenue +$100, NI +$75, CSE +$75. The BS balances with Assets up $1,175 and L&E up $1,175",
            "Cash +$1,200, DR +$1,200, Revenue +$0, NI +$0, CSE +$0. No revenue is recognized until all 12 months of service have been fully delivered"
        ],
        correct: 2,
        explanation: "Step 1 (collect $1,200): No IS. Cash +$1,200, DR +$1,200. Step 2 (deliver 1 month = $100): Revenue +$100, NI +$75. CFS: NI +$75, DR decrease -$100. Cash from step 2 = -$25. Cumulative Cash: +$1,200 - $25 = +$1,175. DR: +$1,200 - $100 = +$1,100. BS Assets: Cash +$1,175. BS L&E: DR +$1,100, CSE +$75 = +$1,175. Balanced."
    },
    {
        type: "mc",
        question: "A company issues $100 of Common Stock. Tax rate 25%. What happens on all three statements?",
        context: "Walk the statements: Equity issuance",
        options: [
            "IS: No change. CFS: Common Stock Issuance +$100 in CFF. Cash +$100. BS: Cash +$100, CSE +$100 (Common Stock & APIC). Both sides up $100",
            "IS: Revenue +$100. CFS: Cash +$100. BS: Cash +$100, CSE +$100. The stock issuance is treated as Revenue because the company receives cash",
            "IS: No change. CFS: No change. BS: Cash +$100, CSE +$100. Stock issuances bypass the CFS entirely and go directly to the Balance Sheet",
            "IS: Expense -$100 (dilution cost). CFS: NI -$75, Stock add-back +$100. Cash +$25. BS: Cash +$25, CSE +$25. Dilution creates an IS expense"
        ],
        correct: 0,
        explanation: "Equity issuance does NOT go on the IS (fails both criteria — it's not current-period and doesn't affect income). CFS: +$100 in Cash Flow from Financing. Cash +$100. BS: Cash +$100 on Assets, CSE +$100 (Common Stock & APIC) on L&E. Both sides up $100. Share count increases."
    },
    {
        type: "mc",
        question: "Compare: A company issues $100 in Dividends vs. repurchasing $100 of stock. How do they differ on the financial statements?",
        context: "Walk the statements: Dividends vs. Buybacks",
        options: [
            "They are identical: both reduce Cash by $100 and CSE by $100, with no IS impact and the same CFS treatment in Cash Flow from Financing",
            "Dividends reduce Retained Earnings within CSE by $100. Buybacks increase Treasury Stock (a contra-equity) by $100, reducing CSE by $100. Both reduce Cash by $100 via CFF. Net BS impact is the same, but Buybacks reduce share count while Dividends do not",
            "Dividends appear on the IS as an expense reducing NI by $75 (after-tax), while Buybacks have no IS impact. This makes Buybacks strictly better than Dividends in all cases",
            "Dividends reduce Cash by $100 but do not affect CSE at all. Buybacks reduce both Cash and CSE by $100. Only Buybacks change the Balance Sheet's equity section"
        ],
        correct: 1,
        explanation: "Both: No IS impact, Cash -$100 via CFF, CSE -$100, total Assets and L&E both down $100. Difference in CSE components: Dividends reduce Retained Earnings. Buybacks increase Treasury Stock (contra-equity). Key difference: Buybacks reduce shares outstanding (boosting EPS), while Dividends do not change share count."
    },
    {
        type: "mc",
        question: "U.S. GAAP: A company signs a 10-year Operating Lease at $1,000/year, discount rate 6% (PV ≈ $7,360). What happens on Day 1 and after Year 1?",
        context: "Walk the statements: U.S. GAAP Operating Lease",
        options: [
            "Day 1: Lease Asset +$7,360, Lease Liability +$7,360. Year 1 IS: Rental Expense of $1,000. CFS: add back $1,000 (non-cash portion) and show $1,000 lease payment in CFF. Cash -$1,000",
            "Day 1: Lease Asset +$7,360, Lease Liability +$7,360. Year 1 IS: simple Rental Expense = $1,000. CFS: NI impact + add back non-cash portion of Rental Expense. Lease Asset and Liability decrease by different amounts but BS still balances",
            "Day 1: No BS impact — Operating Leases are off-balance-sheet under U.S. GAAP. Year 1 IS: Rental Expense $1,000. CFS: Cash -$1,000. Only Finance Leases appear on the BS",
            "Day 1: Lease Asset +$7,360, Lease Liability +$7,360. Year 1 IS: Interest $442 + Depreciation $736 separately. CFS: add back D&A $736, lease payment split between CFO and CFF"
        ],
        correct: 1,
        explanation: "Under current U.S. GAAP (ASC 842), Operating Leases DO go on the BS: Day 1 Lease Asset and Liability both = PV of $7,360. Year 1: IS shows a simple Rental Expense of $1,000. CFS: the non-cash portion of the Rental Expense is added back. The Lease Asset decreases by $1,000 - $442 interest = $558 (straight-line adjustment). Lease Liability decreases by $1,000 - $442 = $558 principal. BS balances through CSE."
    },
    {
        type: "mc",
        question: "Under IFRS, how does a 10-year Operating Lease at $1,000/year (6% discount rate, PV ≈ $7,360) differ from U.S. GAAP treatment?",
        context: "Walk the statements: IFRS Lease treatment",
        options: [
            "IFRS treats it identically to U.S. GAAP — a simple Rental Expense on the IS with the Lease Asset and Liability on the BS decreasing symmetrically each year",
            "IFRS does not recognize Operating Leases on the Balance Sheet at all — they remain off-balance-sheet with only a Rental Expense on the Income Statement",
            "Under IFRS, there is no Operating vs. Finance distinction on the IS. All leases show Interest Expense ($442 in Year 1) and Depreciation ($736/year) separately, just like a Finance Lease. BS Day 1 is the same ($7,360 Asset and Liability)",
            "IFRS capitalizes the lease at the undiscounted total ($10,000) rather than the present value, making the Lease Asset and Liability significantly larger than under GAAP"
        ],
        correct: 2,
        explanation: "Under IFRS 16, ALL leases are treated like Finance Leases on the IS: Interest Expense (6% × $7,360 = $442) and Depreciation ($7,360/10 = $736) shown separately. Total Year 1 IS expense = $1,178 (front-loaded vs. GAAP's flat $1,000). BS Day 1 is the same. The Lease Asset decreases by Depreciation ($736), and the Lease Liability decreases by principal ($1,000 - $442 = $558)."
    },
    {
        type: "mc",
        question: "Book Depreciation is $20 but Tax Depreciation is $40 (accelerated). Tax rate 25%. What happens to Cash and Deferred Taxes?",
        context: "Walk the statements: Book vs. Tax Depreciation",
        options: [
            "Cash increases by $10. DTL increases by $5. The company saves an extra $5 in real cash taxes now because Tax Depreciation exceeds Book Depreciation by $20",
            "Cash increases by $5. DTA increases by $5. Tax Depreciation being higher creates a Deferred Tax Asset because the company will owe more taxes in the future",
            "Cash is unchanged. The difference between Book and Tax Depreciation is a memo item only — it does not affect Cash or the Deferred Tax accounts on the BS",
            "Cash decreases by $5. DTL increases by $5. Higher Tax Depreciation means the company pays more taxes now and defers a benefit to the future"
        ],
        correct: 0,
        explanation: "IS: Book Depreciation -$20, PTI -$20, Book Taxes -$5, NI -$15. CFS: NI -$15, D&A +$20, Deferred Taxes +$5 (Cash Taxes < Book Taxes, so positive CFS adjustment). Cash +$10. BS: Cash +$10, PP&E -$20, DTL +$5 (owe more taxes later). The extra $5 Cash vs. the normal $5 ($20 × 25%) comes from the accelerated tax deduction. DTL increases because you'll pay that $5 back later."
    },
    {
        type: "mc",
        question: "A company records a $100 PP&E Write-Down that is NOT cash-tax deductible. 25% tax rate. What happens to Cash?",
        context: "Walk the statements: Non-deductible write-down",
        options: [
            "Cash decreases by $100 because the write-down represents a real economic loss that must be funded with cash reserves from the Balance Sheet",
            "Cash decreases by $75 because the write-down reduces NI by $75 (after tax), and since it's not deductible, the full after-tax amount comes out of Cash",
            "Cash is unchanged — the write-down is added back on the CFS as non-cash, and Deferred Taxes of -$25 offsets the book tax benefit since it's NOT cash-tax deductible",
            "Cash increases by $25 because the $100 non-cash add-back exceeds the $75 reduction in NI, creating a net positive Cash impact of $25"
        ],
        correct: 2,
        explanation: "IS: PTI -$100, Book Taxes -$25, NI -$75. CFS: NI -$75, add back write-down +$100, Deferred Taxes -$25 (not cash-tax deductible — no real tax savings, so DT offsets the book tax benefit). Cash unchanged. BS: PP&E -$100, DTA +$25 = Assets -$75. CSE -$75. Both sides down $75. Cash is unchanged because the write-down is non-cash and not tax-deductible."
    },
    // TF — Level 3
    { type: 'tf', context: 'Walk the Statements', question: 'When Deferred Revenue increases by $50 and no product has been delivered, Revenue increases by $50 on the Income Statement.', answer: false, explanation: 'No delivery = no Revenue. Under accrual accounting, Revenue is only recognized when the product or service is delivered. Collecting cash upfront creates Deferred Revenue (a Liability) on the BS and a positive Cash Flow adjustment on the CFS — not Revenue on the IS.' },
    { type: 'tf', context: 'Walk the Statements', question: 'When a company issues $200 of Debt and uses the proceeds to purchase $200 of PP&E, Cash on the Balance Sheet is unchanged.', answer: true, explanation: 'The Debt issuance brings in $200 of Cash (positive CFF), and the CapEx purchase spends $200 of Cash (negative CFI). The two flows exactly offset, leaving Net Cash unchanged. BS: PP&E +$200 on Assets, Debt +$200 on L&E. Both sides up $200.' },
    { type: 'tf', context: 'Walk the Statements', question: 'A Loss on the sale of an asset is considered a non-cash expense on the Cash Flow Statement because no additional cash is spent in the current period beyond the proceeds received.', answer: true, explanation: 'The Loss represents the gap between book value and sale price — it was "spent" in a prior period when the asset was purchased. The actual cash impact is the sale proceeds (shown in CFI). On the CFS, the Loss is added back to remove it from CFO, and the full proceeds are shown in CFI.' },
    // FITB — Level 3
    { type: 'fitb', context: 'Walk the Statements', question: 'Depreciation increases by $100 at a 25% tax rate. Cash on the Balance Sheet increases by $___', answer: ['25', '$25'], explanation: 'IS: PTI -$100, Taxes -$25, NI -$75. CFS: NI -$75, add back D&A +$100 = Cash +$25. The only real cash impact of Depreciation is the tax savings: $100 × 25% = $25.' },
    { type: 'fitb', context: 'Walk the Statements', question: 'A $100 PP&E write-down that is NOT tax-deductible leaves Cash ___ (unchanged / higher / lower).', answer: ['unchanged'], explanation: 'IS: PTI -$100, Book Taxes -$25, NI -$75. CFS: NI -$75, add back write-down +$100, Deferred Taxes -$25 (no real tax savings). Net Cash = $0. Because the write-down is non-cash and not tax-deductible, Cash is completely unaffected.' },
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
    // NEW LEVEL 4 QUESTIONS
    {
        type: "mc",
        question: "What is Free Cash Flow (FCF) and what does it mean if a company has positive and growing FCF?",
        context: "FCF Interpretation",
        options: [
            "FCF = Net Income - Dividends. Positive/growing FCF means the company is retaining more earnings each year, which always guarantees future share price appreciation",
            "FCF = CFO - CapEx. Positive/growing FCF means the company generates more cash than it needs to maintain/grow its asset base, giving it flexibility for Debt repayment, Dividends, Buybacks, or M&A",
            "FCF = Revenue - Total Expenses. Positive/growing FCF means the company's revenue exceeds its costs, which is the basic definition of profitability on the Income Statement",
            "FCF = EBITDA - Taxes. Positive/growing FCF means the company's tax burden is declining, freeing up more pre-tax earnings for distribution to shareholders"
        ],
        correct: 1,
        explanation: "FCF = Cash Flow from Operations minus Capital Expenditures. Positive/growing FCF means the business generates real cash beyond what it needs to reinvest. This cash can be used for Debt repayment, Dividends, Buybacks, or acquisitions. It's the best measure of a company's true cash-generating ability after necessary reinvestment."
    },
    {
        type: "mc",
        question: "What does it mean if a company has negative or decreasing Free Cash Flow?",
        context: "Negative FCF Analysis",
        options: [
            "Negative FCF always means the company is failing and should be avoided by investors — there are no circumstances where negative FCF is acceptable",
            "Negative FCF simply means Revenue is declining, which is always a sign of fundamental business deterioration requiring immediate management intervention",
            "Negative/decreasing FCF means the company spends more on CapEx than it generates from operations. This could be fine for a high-growth company investing heavily, but concerning for a mature company — it must rely on external financing (Debt/Equity) to fund operations",
            "Negative FCF only occurs during recessions and automatically corrects itself when the broader economy recovers, so it requires no further analysis"
        ],
        correct: 2,
        explanation: "Negative FCF means CFO < CapEx. For early-stage or high-growth companies (e.g., Amazon in its early years), this can be acceptable if the heavy CapEx is generating future returns. For mature companies, sustained negative FCF is a red flag — the company must raise Debt or Equity to survive. Always investigate WHY FCF is negative: high-return investments vs. deteriorating operations."
    },
    {
        type: "mc",
        question: "Why might you need to adjust the FCF calculation for a company reporting under IFRS?",
        context: "IFRS FCF Adjustment",
        options: [
            "IFRS companies report FCF directly on their financial statements, so no calculation or adjustment is needed — you can read it off the CFS",
            "Under IFRS, operating lease payments may be split between CFO (interest) and CFF (principal), artificially inflating CFO. You may need to subtract the full lease payment from CFO to get a comparable FCF figure",
            "IFRS uses a different definition of CapEx that includes all operating expenses, so you must subtract OpEx from the IFRS CFO to get the correct FCF number",
            "IFRS FCF is always higher than GAAP FCF because IFRS allows companies to exclude Depreciation from their Capital Expenditure calculations entirely"
        ],
        correct: 1,
        explanation: "Under IFRS 16, ALL leases are Finance Leases. The lease payment is split: Interest portion stays in CFO, Principal portion goes to CFF. This inflates CFO (and therefore FCF) compared to GAAP, where Operating Lease payments are entirely in CFO. To compare: subtract the full lease cash payment from CFO, or add back the principal portion that was moved to CFF."
    },
    {
        type: "mc",
        question: "What is Working Capital in the operational (non-GAAP) definition used for financial analysis?",
        context: "Working Capital Definition",
        options: [
            "Working Capital = Total Current Assets minus Total Current Liabilities, including Cash, Short-Term Investments, Debt, and all other current items without exception",
            "Working Capital = Current Operational Assets (AR, Inventory, Prepaid Expenses) minus Current Operational Liabilities (AP, Accrued Expenses, Deferred Revenue). It EXCLUDES Cash, Investments, and Debt",
            "Working Capital = Cash plus Accounts Receivable minus Accounts Payable only. All other current items are excluded because they are considered non-operational by definition",
            "Working Capital = Total Assets minus Total Liabilities, including both current and long-term items. It is the same as Shareholders' Equity on the Balance Sheet"
        ],
        correct: 1,
        explanation: "Operational Working Capital = Current Operational Assets (AR, Inventory, Prepaid Expenses) minus Current Operational Liabilities (AP, Accrued Expenses, Deferred Revenue). We exclude Cash, Short-Term Investments, and Short-Term Debt because those are financing items, not operational items. This definition measures the cash tied up in day-to-day operations."
    },
    {
        type: "mc",
        question: "Is negative Working Capital a bad sign for a company?",
        context: "Negative Working Capital",
        options: [
            "Yes — negative WC always indicates financial distress because it means the company cannot pay its short-term obligations with its current operational assets",
            "Not necessarily. Negative WC can be a sign of strength: companies like Amazon and Walmart collect from customers quickly but pay suppliers slowly, meaning suppliers effectively finance their operations for free",
            "Negative WC is impossible under GAAP because auditors require companies to maintain a minimum WC ratio of 1.0x at all times during the fiscal year",
            "Negative WC is always bad for retailers but always good for software companies, with no exceptions to this industry-based rule of thumb"
        ],
        correct: 1,
        explanation: "Negative WC means Current Operational Liabilities > Current Operational Assets. For companies like Amazon or Walmart, this is actually positive: they collect cash from customers immediately (low AR, low Inventory relative to sales) and pay suppliers on extended terms (high AP, high DPO). Suppliers are essentially providing free financing. It's only bad if the company can't pay its bills."
    },
    {
        type: "mc",
        question: "Should Operating Lease Assets and Liabilities be included in the Change in Working Capital calculation?",
        context: "Lease Accounting and Working Capital",
        options: [
            "Yes — Operating Lease Assets and Liabilities are operational items that should always be included in Working Capital, just like Inventory and Accounts Payable",
            "No — Operating Lease Assets and Liabilities should be excluded from WC because they are long-term financing items (like Debt and PP&E). Including them would distort the WC calculation and make it less comparable",
            "Only the current portion of Operating Lease Liabilities (due within 12 months) should be included, while the long-term portion and the entire Lease Asset should be excluded",
            "It depends entirely on the company's industry — manufacturing companies include them while service companies exclude them from the Working Capital calculation"
        ],
        correct: 1,
        explanation: "Operating Lease Assets and Liabilities should be EXCLUDED from WC. They are financing-related items (similar to Debt and PP&E), not operational items. If you include them, the WC calculation gets distorted by lease signing/expiration activity that has nothing to do with day-to-day operations. Stick to operational items: AR, Inventory, Prepaid on Assets; AP, Accrued Expenses, DR on Liabilities."
    },
    {
        type: "mc",
        question: "Working Capital increased from $50 to $200 over the year. The Cash Flow Statement shows a Change in Working Capital of -$150. Why is it negative?",
        context: "Change in WC Sign Convention",
        options: [
            "It's an error in the financial statements — if WC increased, the Change in WC should be a positive $150 to reflect the growth in operational assets",
            "The CFS uses Old WC minus New WC ($50 - $200 = -$150). When operational Assets grow, the company spent cash to fund that growth, so Cash decreases. The negative sign correctly reflects that cash was consumed",
            "The -$150 represents the tax impact on the $200 increase in Working Capital at the company's effective tax rate of 25%, not the full WC change itself",
            "It's negative because the company had net losses during the year, and the CFS always shows WC changes as negative when Net Income is negative"
        ],
        correct: 1,
        explanation: "Change in WC on CFS = Old WC - New WC = $50 - $200 = -$150. This is 'backwards' on purpose: when operational Assets increase (e.g., Inventory or AR grew), the company spent cash. The -$150 correctly shows that $150 of cash was consumed to fund the WC increase. This reduces CFO and therefore FCF."
    },
    {
        type: "mc",
        question: "What does the Change in Working Capital on the CFS actually tell you about the business?",
        context: "Interpreting Change in WC",
        options: [
            "It tells you the total amount of Debt the company repaid during the period, since all WC changes are ultimately funded by borrowing from lenders",
            "It tells you the net cash impact of operational timing differences — how much more (or less) cash the company spent on operational items like Inventory and AR vs. what it deferred through AP, Accrued Expenses, and Deferred Revenue",
            "It tells you the company's profit margin after adjusting for all non-cash expenses like Depreciation, Amortization, and Stock-Based Compensation",
            "It tells you nothing useful — the Change in WC is a technical accounting adjustment with no real business meaning or analytical value for investors"
        ],
        correct: 1,
        explanation: "Change in WC shows the net cash impact of operational timing gaps. Negative means the company tied up more cash in operations (e.g., built Inventory faster than AP grew). Positive means the company freed up cash (e.g., collected AR faster or increased Deferred Revenue). It's a key driver of the gap between Net Income and Cash Flow from Operations."
    },
    // TF — Level 4
    { type: 'tf', context: 'Credit Metrics', question: 'A higher Interest Coverage Ratio (EBITDA / Interest Expense) means the company is better able to service its Debt.', answer: true, explanation: 'Interest Coverage = EBITDA / Interest Expense. Higher means EBITDA can decline further before the company cannot cover its interest. A ratio of 5.0x means EBITDA could fall 80% before interest goes uncovered. Lenders typically require at least 2-3x.' },
    { type: 'tf', context: 'Working Capital', question: 'Negative Working Capital is always a sign of financial distress because it means current liabilities exceed current operational assets.', answer: false, explanation: 'Negative WC can be a sign of strength. Companies like Amazon and Walmart collect cash from customers immediately (low DSO) and pay suppliers slowly (high DPO), resulting in negative WC. Suppliers effectively finance the business for free. It only signals distress if the company cannot meet its obligations.' },
    // FITB — Level 4
    { type: 'fitb', context: 'Metrics', question: 'Leverage Ratio = Total Debt / ___', answer: ['EBITDA'], explanation: 'Leverage Ratio = Total Debt / EBITDA. It measures how many years of EBITDA it would take to repay all Debt. Above 4-5x is generally considered highly leveraged. Lenders often set covenant limits around this ratio.' },
    { type: 'fitb', context: 'Metrics', question: 'Cash Conversion Cycle = DIO + DSO minus ___', answer: ['DPO', 'Days Payable Outstanding'], explanation: 'CCC = DIO + DSO - DPO. A lower CCC is better — it means the company converts Inventory and Receivables into cash faster. A high DPO (slow supplier payments) reduces the CCC, which is why market-powerful companies like Walmart have very low CCCs.' },
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
    // NEW LEVEL 5 QUESTIONS
    {
        type: "mc",
        question: "A company's FCF is growing, but the Change in Working Capital has become more negative each year (-$10M, -$25M, -$50M, -$80M). Revenue is growing 15% annually. Should you be concerned?",
        context: "FCF quality with deteriorating WC",
        options: [
            "No — as long as FCF is positive and growing, the increasingly negative Change in WC is irrelevant because total cash generation is still improving",
            "Yes — the increasingly negative WC change means the company is tying up more and more cash in operations (AR, Inventory growing faster than payables). This trend is unsustainable and could eventually overwhelm FCF growth, especially if Revenue growth slows",
            "No — negative Change in WC is always good because it means the company is investing in future growth by building up Inventory and extending credit to customers",
            "Yes — but only because the Change in WC is affecting the Income Statement, which will eventually reduce Net Income and cause the stock price to decline"
        ],
        correct: 1,
        explanation: "Increasingly negative WC changes mean operational Assets (AR, Inventory) are growing much faster than operational Liabilities (AP, DR). This is a cash drain that accelerates. If Revenue growth slows while WC keeps deteriorating, FCF could turn negative rapidly. Investigate: Is DSO increasing (collection problems)? Is DIO rising (excess Inventory)? Is DPO shrinking (losing supplier leverage)?"
    },
    {
        type: "mc",
        question: "A company has positive and growing EBITDA every year, yet it filed for bankruptcy. How is this possible?",
        context: "EBITDA Limitations",
        options: [
            "It's not possible — positive EBITDA guarantees the company can meet all its financial obligations, so bankruptcy with positive EBITDA indicates accounting fraud",
            "EBITDA excludes Interest, Taxes, and CapEx. A company with high Debt could have growing EBITDA but insufficient cash to cover interest payments, Debt maturities, required CapEx, and working capital needs. EBITDA is a cash flow proxy, not actual cash flow",
            "The company must have had negative Revenue that was hidden by one-time gains which inflated EBITDA above zero — this is the only scenario that explains the outcome",
            "Bankruptcy was caused by the company's stock price declining, which is unrelated to EBITDA. Companies go bankrupt when their stock price falls below $1, regardless of their operating performance"
        ],
        correct: 1,
        explanation: "EBITDA ignores: (1) Interest Expense — high-leverage companies may not generate enough cash after interest. (2) CapEx — asset-heavy businesses must reinvest heavily. (3) Working Capital needs — growing companies tie up cash. (4) Debt maturities — principal repayments aren't in EBITDA. A company can have growing EBITDA but negative FCF and insufficient cash to service Debt, leading to default."
    },
    {
        type: "mc",
        question: "What is ROIC, and what does it tell you that ROE and ROA do not?",
        context: "ROIC vs. ROE vs. ROA",
        options: [
            "ROIC = Net Income / Total Assets. It tells you the same thing as ROA but uses a slightly different denominator that includes only tangible assets, making it more accurate",
            "ROIC = NOPAT / Invested Capital. It measures returns to ALL capital providers (Debt + Equity + Preferred) on a capital-structure-neutral basis. Unlike ROE (which is inflated by leverage) or ROA (which is diluted by non-operating assets), ROIC shows true operating efficiency",
            "ROIC = EBITDA / Revenue. It measures operating margin efficiency and tells you how much of each dollar of Revenue becomes operating cash flow before capital structure effects",
            "ROIC = FCF / Market Capitalization. It measures the cash yield on the company's stock price, which ROE and ROA cannot capture because they use book values instead of market values"
        ],
        correct: 1,
        explanation: "ROIC = NOPAT (EBIT × (1 - Tax Rate)) / Invested Capital (Equity + Debt + Preferred - Cash). It's capital-structure-neutral: it measures returns BEFORE interest and preferred dividends, against ALL capital. ROE is inflated by leverage (less equity = higher ROE). ROA is diluted by non-operating assets. ROIC gives the cleanest view of operating performance."
    },
    {
        type: "mc",
        question: "What are the advantages and disadvantages of ROE vs. ROA vs. ROIC when comparing companies?",
        context: "Returns Metrics Comparison",
        options: [
            "ROE is always the best metric because equity holders are the most important stakeholders. ROA and ROIC are inferior because they include Debt holders' perspective, which is irrelevant to equity investors",
            "ROE is simple but distorted by leverage (high Debt = high ROE). ROA includes all assets but is diluted by Cash and non-operating items. ROIC is the most comprehensive — it's capital-structure-neutral and uses only operating metrics — but requires more data to calculate",
            "All three metrics are identical for companies with no Debt, and all three give the same ranking across companies regardless of capital structure differences or industry",
            "ROA is always the best metric because Total Assets is the most reliable denominator. ROE and ROIC use subjective denominators that can be manipulated through accounting choices"
        ],
        correct: 1,
        explanation: "ROE: simple, relevant to equity investors, but heavily distorted by leverage — a company can boost ROE just by adding Debt. ROA: uses Total Assets (includes Cash, Investments), so excess Cash dilutes it — better for asset-heavy industries like banking. ROIC: most rigorous — uses NOPAT (capital-structure-neutral) and Invested Capital (excludes Cash). Best for cross-company comparison."
    },
    {
        type: "mc",
        question: "A company has ROE of 30% but you suspect leverage is driving it. How would you detect whether ROE is artificially inflated by Debt?",
        context: "Detecting Leverage-Driven ROE",
        options: [
            "Compare ROE to the company's Revenue growth rate — if ROE exceeds Revenue growth, leverage must be the cause of the high return metric",
            "Compare ROE to ROA and ROIC. If ROE is 30% but ROA is 6% and ROIC is 12%, the large gap confirms that leverage (not operating excellence) is driving the high ROE. Also check the Leverage Ratio and Debt/Equity ratio",
            "Look at the Income Statement — if Interest Expense is greater than zero, then ROE is being artificially inflated by leverage and should be ignored entirely",
            "Calculate ROE using Total Assets instead of Equity as the denominator — if the result is lower, that confirms the original ROE number was inflated by Debt"
        ],
        correct: 1,
        explanation: "If ROE >> ROA, it means Equity is much smaller than Total Assets, implying heavy Debt. A 30% ROE with 6% ROA means roughly 5x leverage (Assets/Equity). Cross-check with ROIC: if ROIC is 12%, the company earns solid operating returns but ROE is amplified by leverage. Also check Leverage Ratio (Debt/EBITDA) and Interest Coverage to assess whether the leverage is sustainable."
    },
    {
        type: "mc",
        question: "A company has DSO of ~5 days but DPO of ~60 days. What does this tell you about the business?",
        context: "Working Capital Efficiency Metrics",
        options: [
            "The company is in financial distress — a DPO of 60 days means it cannot afford to pay its suppliers on time and is stretching payment terms out of desperation",
            "The company collects from customers almost immediately (5-day DSO, suggesting cash/credit card sales) but takes 60 days to pay suppliers. This indicates strong market power — the company dictates payment terms and uses supplier financing to fund operations",
            "The company has poor collections practices (5-day DSO is too low) and should extend more credit to customers to boost Revenue while paying suppliers faster to maintain relationships",
            "DSO and DPO are unrelated metrics that cannot be compared — DSO measures revenue efficiency while DPO measures cost efficiency, and they operate independently"
        ],
        correct: 1,
        explanation: "Low DSO (~5 days) means the company collects cash almost immediately — typical of retailers or subscription companies with upfront payment. High DPO (~60 days) means the company takes a long time to pay suppliers, which is a sign of market power (like Walmart or Amazon). The combination means the company has excellent WC management: it uses suppliers' money to fund operations (negative WC)."
    },
    {
        type: "mc",
        question: "Company A has a Cash Conversion Cycle of 5 days. Company B has a CCC of 30 days. Both are in the same industry with similar revenue. What can you conclude?",
        context: "Cash Conversion Cycle Comparison",
        options: [
            "Company A is more efficient at converting its operations into cash — it collects receivables faster, turns Inventory over quicker, or takes longer to pay suppliers (or all three). Company B has $$ tied up in operations for 25 more days",
            "Company B is more efficient because a higher CCC means the company holds onto its cash longer before paying it out, which is always a sign of better financial management",
            "The 25-day difference is immaterial and does not indicate any meaningful operational difference between the two companies in the same industry",
            "Company A's low CCC means it has less Inventory, which indicates it cannot meet customer demand and is likely losing market share to Company B"
        ],
        correct: 0,
        explanation: "CCC = DIO + DSO - DPO. Lower CCC means the company converts operations to cash faster. Company A (5 days) has a 25-day advantage over Company B (30 days). This means Company A either: collects from customers faster (lower DSO), sells Inventory faster (lower DIO), or pays suppliers slower (higher DPO). In the same industry, this indicates superior working capital management."
    },
    // TF — Level 5
    { type: 'tf', context: 'FCF Quality', question: 'A company with consistently growing Free Cash Flow is always a strong investment, regardless of what is driving that FCF growth.', answer: false, explanation: 'FCF quality matters as much as FCF level. If growth is driven by CapEx cuts (underinvesting), aggressive working capital extension (stretching suppliers), or large SBC add-backs (which dilute shareholders), the FCF may be misleading. Sustainable FCF growth comes from revenue growth and margin improvement.' },
    { type: 'tf', context: 'EBITDA Limitations', question: 'A company with positive and growing EBITDA can still go bankrupt.', answer: true, explanation: 'EBITDA excludes Interest Expense, CapEx, working capital needs, and Debt principal repayments. A highly leveraged company could have growing EBITDA but insufficient cash after interest payments and required reinvestment to service its Debt, leading to default. EBITDA is a proxy for cash flow, not actual cash flow.' },
    { type: 'tf', context: 'Goodwill', question: 'A Goodwill impairment charge signals that the acquired company has performed better than expected since the acquisition closed.', answer: false, explanation: 'A Goodwill impairment means the acquired company is worth less than initially expected — the premium paid in the acquisition is no longer justified by actual performance. It is a lagging indicator of a deal that overpaid or a business that has underperformed post-acquisition.' },
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
    // NEW LEVEL 6 MC QUESTIONS
    {
        type: "mc",
        question: "Walmart buys $200 of Inventory on credit (AP), sells all of it for $400, and has $100 of additional Operating Expenses (paid in cash). Tax rate 25%. What is the cumulative change in Cash?",
        context: "Multi-step: Full retail cycle with AP",
        options: [
            "+$400 — the full Revenue amount flows in as Cash, and all expenses are offset by the AP credit terms with suppliers",
            "+$75 — Revenue of $400 minus COGS of $200 minus OpEx of $100 = $100 Pre-Tax Income, after 25% tax = $75 NI and Cash increase",
            "-$25 — the company spent $100 on OpEx (after-tax = $75) and the AP payment of $200 exceeds the Revenue collected, netting to -$25",
            "+$275 — the company collects $400 Revenue but only pays $100 in OpEx (after-tax $75) and defers the $200 AP payment indefinitely"
        ],
        correct: 1,
        explanation: "Step 1 (buy Inventory on credit): No IS. Inventory +$200, AP +$200. Cash unchanged. Step 2 (sell for $400, $100 OpEx): Revenue $400, COGS $200, OpEx $100 = PTI $100, NI $75. CFS: NI +$75, Inventory decrease +$200, AP decrease -$200 (paid suppliers). Cash = +$75. The AP creation and payment net out, and the $100 gross profit after OpEx, taxed at 25%, gives $75."
    },
    {
        type: "mc",
        question: "A company issues $200 Preferred Stock to buy $200 of Financial Investments (8% coupon bonds, 10% yield). After 1 year: 8% Preferred Dividend (not tax-deductible), 10% Interest Income from investments. Tax rate 25%. What happens to Cash?",
        context: "Multi-step: Preferred Stock funding Financial Investments",
        options: [
            "Cash increases by $15: Interest Income of $20 after-tax ($15) flows in, and the $16 Preferred Dividend doesn't reduce Cash because it's not tax-deductible",
            "Cash decreases by $1: Interest Income of $20 brings in $15 after-tax, but the $16 Preferred Dividend (not tax-deductible, so full $16 cash outflow) nets to -$1",
            "Cash increases by $4: the $20 Interest Income minus $16 Preferred Dividend = $4 net, and neither amount is affected by taxes in this scenario",
            "Cash stays the same: the Interest Income exactly offsets the Preferred Dividend after accounting for the tax rate differential between the two items"
        ],
        correct: 1,
        explanation: "Interest Income = 10% × $200 = $20. IS: PTI +$20, Taxes +$5, NI +$15. But wait — Preferred Dividends: 8% × $200 = $16. Preferred Dividends are NOT tax-deductible (no IS impact, paid from after-tax income). CFS: NI +$15, Preferred Dividends -$16. Cash = -$1. The Preferred Dividend costs more than the after-tax Investment income because it's not tax-deductible."
    },
    {
        type: "mc",
        question: "A company acquires a target for $500 (50% Debt, 50% Stock). Target has $300 in Assets, no Liabilities (CSE = $300). The $200 premium is split 50/50 between Goodwill and Other Intangible Assets. What happens to the acquirer's BS immediately?",
        context: "Multi-step: M&A Balance Sheet impact",
        options: [
            "Assets: +$300 (target's Assets) + $100 Goodwill + $100 Other Intangibles = +$500. L&E: +$250 Debt + $250 CSE (new stock) = +$500. Both sides up $500 and balance",
            "Assets: +$500 Cash from the Debt and Stock issuance. L&E: +$250 Debt + $250 CSE = +$500. The target's individual Assets are not broken out on the BS",
            "Assets: +$300 (target's Assets) + $200 Goodwill = +$500. L&E: +$500 Debt. The Stock portion doesn't affect the BS because shares aren't real cash",
            "Assets: +$300 (target's Assets) only. L&E: +$250 Debt + $50 CSE = +$300. The premium is written off immediately as an acquisition expense on the IS"
        ],
        correct: 0,
        explanation: "The acquirer consolidates the target's $300 of Assets. The $200 premium ($500 price - $300 CSE) is split: $100 Goodwill + $100 Other Intangibles. Total new Assets = $500. Funded by: $250 Debt + $250 new Stock (CSE). L&E up $500. Both sides increase by $500. No Cash changes hands from the acquirer's perspective (Debt and Stock fund the deal)."
    },
    {
        type: "mc",
        question: "A company issues $200 of Debt at 4% interest to repurchase $200 of its own stock. Before: 1,000 shares at $1 each, NI = $300. After one full year, what is the new EPS?",
        context: "Multi-step: Debt-funded buyback and EPS impact",
        options: [
            "EPS = $0.30 — the same as before because the Debt interest expense and share reduction exactly cancel each other out in the EPS calculation",
            "EPS = $0.37 — NI drops by $6 (after-tax interest: $200 × 4% × 75%) to $294, shares drop by 200 to 800. New EPS = $294/800 = $0.3675, which rounds to $0.37",
            "EPS = $0.38 — NI drops to $292 and shares drop to 800, giving $292/800 = $0.365, which rounds up to $0.38 due to the tax shield on interest",
            "EPS = $0.25 — the additional interest expense of $8 reduces NI to $200, and with 800 shares remaining the new EPS is $200/800 = $0.25"
        ],
        correct: 1,
        explanation: "Before: EPS = $300/1,000 = $0.30. After buyback: Interest = $200 × 4% = $8. After-tax Interest = $8 × 75% = $6. New NI = $300 - $6 = $294. Shares bought back = $200/$1 = 200 shares. New shares = 800. New EPS = $294/800 = $0.3675. EPS increased from $0.30 to ~$0.37 — the buyback is 'accretive' because the earnings yield (30%) exceeds the after-tax cost of Debt (3%)."
    },
    {
        type: "mc",
        question: "Year after acquisition: Target generates $200 Revenue, $100 OpEx. Acquirer has $250 Debt at 8% interest. Other Intangible Assets ($100) amortize over 5 years (not tax-deductible). Tax rate 25%. What is the Cash impact from the target's operations in Year 1?",
        context: "Multi-step: Post-acquisition Year 1",
        options: [
            "Cash increases by $55: Revenue $200, OpEx $100, Interest $20, Amortization $20. PTI = $60, NI = $45. CFS: NI $45 + Amort $20 - DT $5 = Cash +$60. But wait, that's $60",
            "Cash increases by $55: Revenue $200, OpEx $100, Interest $20, Amort $20 = PTI $60, Book Tax $15, NI $45. CFS: NI $45 + Amort add-back $20, Deferred Taxes -$5 (not cash-deductible), minus nothing else. Cash = +$60",
            "Cash increases by $60: Revenue $200, OpEx $100, Interest $20, Amort $20 = PTI $60, Tax $15, NI $45. CFS: NI +$45, Amort add-back +$20, DT -$5 = Cash +$60. The Amort adds back but DT offsets part of it since it's not cash-tax deductible",
            "Cash increases by $45: just the Net Income amount, because the Amortization add-back is fully offset by the Deferred Tax adjustment and the Interest Expense is already reflected in NI"
        ],
        correct: 2,
        explanation: "IS: Revenue $200, OpEx $100, Amortization $20 ($100/5), Interest $20 ($250 × 8%). PTI = $60. Book Taxes = $15. NI = $45. CFS: NI +$45, Amortization add-back +$20, Deferred Taxes -$5 (Amort not cash-tax deductible, so $5 book tax benefit isn't real). Cash = +$60. The $60 = after-tax operating profit ($75) minus after-tax interest ($15), since Amort is fully non-cash."
    },
    {
        type: "mc",
        question: "A Goodwill Impairment of $100 is recorded (NOT cash-tax deductible). Tax rate 25%. What happens to Cash, the DTA, and CSE?",
        context: "Multi-step: Goodwill Impairment",
        options: [
            "Cash unchanged, DTA +$25, CSE -$75. The impairment is non-cash and not tax-deductible: NI -$75, CFS adds back $100 but DT -$25 offsets, so Cash is flat. DTA rises because future tax savings are created",
            "Cash -$100, DTA unchanged, CSE -$100. The full impairment amount comes out of Cash because Goodwill was originally purchased with Cash in the acquisition",
            "Cash -$75, DTA +$25, CSE -$75. The after-tax impairment of $75 reduces Cash, and the DTA increases by $25 for the book tax benefit that has no cash realization",
            "Cash +$25, DTA unchanged, CSE -$75. The impairment creates a $25 tax savings that flows through as a Cash increase, while CSE decreases by the after-tax NI impact"
        ],
        correct: 0,
        explanation: "IS: Impairment -$100, Book Taxes -$25, NI -$75. CFS: NI -$75, add back Impairment +$100, Deferred Taxes -$25 (not cash-tax deductible, so no real tax savings). Cash unchanged. BS: Goodwill -$100, DTA +$25 = Assets -$75. CSE -$75. Both sides down $75. Cash is unchanged because the impairment is non-cash and generates no real tax benefit."
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
    // NEW ORDERING QUESTIONS
    {
        level: 2,
        question: "Order the steps for linking the three financial statements from scratch (starting from the Income Statement):",
        items: [
            "Complete the Income Statement to get Net Income",
            "Start the CFS with Net Income and add back non-cash charges (D&A, SBC)",
            "Adjust for Changes in Working Capital (AR, Inventory, AP, DR, etc.)",
            "Add Cash Flow from Investing (CapEx, asset sales, acquisitions)",
            "Add Cash Flow from Financing (Debt issuance/repayment, Dividends, Buybacks)",
            "Calculate Net Change in Cash and update the BS Cash balance",
            "Flow Net Income into Retained Earnings on the BS and verify Assets = L + E"
        ],
        explanation: "The linking process: IS first (determines NI), then CFS (NI → adjustments → CFO → CFI → CFF → Net Cash Change), then BS (update Cash from CFS, update Retained Earnings from NI, update PP&E from CapEx/D&A, update Debt from issuance/repayment, verify balance)."
    },
    {
        level: 3,
        question: "Order the Balance Sheet items from most liquid (closest to cash) to least liquid:",
        items: [
            "Cash & Cash Equivalents",
            "Short-Term Financial Investments",
            "Accounts Receivable",
            "Inventory",
            "Prepaid Expenses",
            "Net PP&E (Property, Plant & Equipment)",
            "Goodwill & Other Intangible Assets"
        ],
        explanation: "Liquidity = how quickly an item can be converted to cash. Cash is already cash. Short-term investments can be sold quickly. AR is collected within weeks/months. Inventory must be sold then collected. Prepaid Expenses are consumed, not converted. PP&E takes time to sell. Goodwill/Intangibles can't be sold separately at all."
    },
    {
        level: 4,
        question: "Order these metrics from MOST to LEAST affected by capital structure (Debt vs. Equity mix):",
        items: [
            "Net Income (affected by Interest Expense, which depends directly on Debt levels)",
            "EBIT / Operating Income (excludes Interest but includes D&A, so partially affected if Debt funds CapEx)",
            "EBITDA (excludes Interest AND D&A, so minimally affected by capital structure)",
            "Revenue (completely unaffected by capital structure — it's the top line)"
        ],
        explanation: "Revenue is the top line — unaffected by how the company is financed. EBITDA excludes Interest and D&A, making it nearly capital-structure-neutral. EBIT includes D&A (indirectly linked to CapEx funding) but excludes Interest. Net Income is the most affected because it includes Interest Expense, which is directly determined by Debt levels."
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
    },
    // NEW FILL-IN-THE-BLANK QUESTIONS
    {
        level: 6,
        type: "fillin",
        scenario: "Buy a factory for $200 with Debt. Year 1: 10% interest rate, 10% depreciation (straight-line), 5% principal repayment. Tax rate 25%. Fill in Year 1 impacts.",
        is_fields: [
            { label: "Depreciation", answer: -20, hint: "10% × $200 = $20/year straight-line depreciation expense." },
            { label: "Interest Expense", answer: -20, hint: "10% × $200 Debt = $20 annual interest expense." },
            { label: "Pre-Tax Income", answer: -40, hint: "Depreciation + Interest = total PTI impact." },
            { label: "Net Income", answer: -30, hint: "PTI × (1 - 25%) = -$40 × 0.75 = ?" }
        ],
        cfs_fields: [
            { label: "Net Income", answer: -30, hint: "Flows from IS." },
            { label: "D&A add-back", answer: 20, hint: "Full Depreciation added back as non-cash." },
            { label: "Debt Issuance (CFF)", answer: 200, hint: "Cash inflow from borrowing $200." },
            { label: "CapEx (CFI)", answer: -200, hint: "Cash outflow for factory purchase." },
            { label: "Principal Repayment (CFF)", answer: -10, hint: "5% × $200 = $10 principal repayment." },
            { label: "Net Cash change", answer: -20, hint: "NI -30 + D&A +20 + Debt +200 - CapEx -200 - Principal -10 = ?" }
        ],
        bs_fields: [
            { label: "Cash", answer: -20, hint: "From the CFS bottom line." },
            { label: "Net PP&E", answer: 180, hint: "+$200 CapEx - $20 Depreciation = $180 net." },
            { label: "Total Debt", answer: 190, hint: "$200 issued - $10 principal repaid = $190." },
            { label: "CSE", answer: -30, hint: "Changes by Net Income of -$30." }
        ],
        explanation: "Initial: Debt +$200, CapEx -$200 (cash neutral). Year 1 IS: D&A -$20, Interest -$20 = PTI -$40, Tax -$10, NI -$30. CFS: NI -$30, D&A +$20, Principal -$10 = Cash -$20. BS: Cash -$20, PP&E +$180 = Assets +$160. Debt +$190, CSE -$30 = L&E +$160. Balanced."
    },
    {
        level: 6,
        type: "fillin",
        scenario: "Sell the factory at end of Year 1 for $220. Net PP&E is $180 (after depreciation), remaining Debt is $190. Tax rate 25%. Fill in the sale and Debt repayment impacts.",
        is_fields: [
            { label: "Gain on Sale", answer: 40, hint: "Sale price $220 - Book Value $180 = $40 Gain." },
            { label: "Pre-Tax Income", answer: 40, hint: "The Gain flows to PTI." },
            { label: "Taxes", answer: 10, hint: "25% × $40 Gain = $10 in taxes." },
            { label: "Net Income", answer: 30, hint: "$40 Gain × (1 - 25%) = $30." }
        ],
        cfs_fields: [
            { label: "Net Income", answer: 30, hint: "From IS." },
            { label: "Reverse Gain", answer: -40, hint: "Remove the Gain from CFO (it's in CFI)." },
            { label: "Sale Proceeds (CFI)", answer: 220, hint: "Full $220 received in Cash Flow from Investing." },
            { label: "Debt Repayment (CFF)", answer: -190, hint: "Repay remaining $190 Debt." },
            { label: "Net Cash change", answer: 20, hint: "NI +30 - Gain 40 + Proceeds +220 - Debt -190 = ?" }
        ],
        bs_fields: [
            { label: "Cash", answer: 20, hint: "From CFS. ($220 proceeds - $190 Debt repaid - $10 taxes)." },
            { label: "Net PP&E", answer: -180, hint: "Factory is gone (was $180 book value)." },
            { label: "Total Debt", answer: -190, hint: "Debt fully repaid." },
            { label: "CSE", answer: 30, hint: "Changes by Net Income of +$30." }
        ],
        explanation: "IS: Gain $40 ($220-$180), Tax $10, NI $30. CFS: NI +$30, reverse Gain -$40, Proceeds +$220, Debt repayment -$190 = Cash +$20. BS: Cash +$20, PP&E -$180 = Assets -$160. Debt -$190, CSE +$30 = L&E -$160. Balanced."
    },
    {
        level: 6,
        type: "fillin",
        scenario: "Walmart buys $200 Inventory with Debt. Year 1: sells all for $400, $100 OpEx, 4% interest on $200 Debt, 10% principal repayment. Tax rate 25%.",
        is_fields: [
            { label: "Revenue", answer: 400, hint: "Sells all Inventory for $400." },
            { label: "COGS", answer: -200, hint: "Cost of the $200 Inventory sold." },
            { label: "Operating Expenses", answer: -100, hint: "$100 additional operating costs." },
            { label: "Interest Expense", answer: -8, hint: "4% × $200 = $8." },
            { label: "Pre-Tax Income", answer: 92, hint: "$400 - $200 - $100 - $8 = $92." },
            { label: "Net Income", answer: 69, hint: "$92 × (1 - 25%) = $69." }
        ],
        cfs_fields: [
            { label: "Net Income", answer: 69, hint: "From the IS." },
            { label: "Inventory change", answer: 0, hint: "Inventory went up $200 (purchase) then down $200 (sold). Net = 0." },
            { label: "Debt Issuance (CFF)", answer: 200, hint: "$200 borrowed." },
            { label: "Principal Repayment (CFF)", answer: -20, hint: "10% × $200 = $20." },
            { label: "Net Cash change", answer: 249, hint: "NI $69 + Inv $0 + Debt $200 - Principal $20 = ?" }
        ],
        bs_fields: [
            { label: "Cash", answer: 249, hint: "From CFS." },
            { label: "Inventory", answer: 0, hint: "All Inventory was sold." },
            { label: "Total Debt", answer: 180, hint: "$200 issued - $20 repaid = $180." },
            { label: "CSE", answer: 69, hint: "Changes by Net Income." }
        ],
        explanation: "IS: Rev $400, COGS $200, OpEx $100, Interest $8 = PTI $92, Tax $23, NI $69. CFS: NI $69, Inventory net 0 (bought and sold), Debt +$200, Principal -$20 = Cash +$249. BS: Cash +$249. Debt +$180, CSE +$69 = L&E +$249. Balanced."
    },
    {
        level: 6,
        type: "fillin",
        scenario: "Buy $200 Inventory on credit (AP). Sell for $400. $100 OpEx paid in cash. Then pay suppliers the $200. Tax rate 25%.",
        is_fields: [
            { label: "Revenue", answer: 400, hint: "Sell Inventory for $400." },
            { label: "COGS", answer: -200, hint: "$200 Inventory cost." },
            { label: "Operating Expenses", answer: -100, hint: "Additional OpEx." },
            { label: "Pre-Tax Income", answer: 100, hint: "$400 - $200 - $100 = $100." },
            { label: "Net Income", answer: 75, hint: "$100 × 75% = $75." }
        ],
        cfs_fields: [
            { label: "Net Income", answer: 75, hint: "From IS." },
            { label: "Inventory change", answer: 0, hint: "Bought $200, sold $200 = net zero." },
            { label: "AP change", answer: 0, hint: "Created $200 AP, then paid $200 = net zero." },
            { label: "Net Cash change", answer: 75, hint: "NI $75, WC changes net to zero. Cash = $75." }
        ],
        bs_fields: [
            { label: "Cash", answer: 75, hint: "Received $400, paid $100 OpEx, paid $200 AP, paid $25 taxes." },
            { label: "Inventory", answer: 0, hint: "All sold." },
            { label: "AP", answer: 0, hint: "All paid." },
            { label: "CSE", answer: 75, hint: "Net Income." }
        ],
        explanation: "Cumulative: Rev $400, COGS $200, OpEx $100, PTI $100, NI $75. Inventory bought and sold = net 0. AP created and paid = net 0. Cash inflows: $400 revenue. Cash outflows: $100 OpEx + $200 AP + $25 taxes = $325. Net Cash = +$75 = NI."
    },
    {
        level: 6,
        type: "fillin",
        scenario: "Issue $200 Preferred Stock to buy $200 Financial Investments (8% coupon, 10% yield). After 1 year: record Interest Income (at yield), Preferred Dividend at 8% (not tax-deductible). Tax rate 25%.",
        is_fields: [
            { label: "Interest Income", answer: 20, hint: "10% yield × $200 = $20 Interest Income on the IS." },
            { label: "Pre-Tax Income", answer: 20, hint: "Interest Income is the only IS item." },
            { label: "Taxes", answer: -5, hint: "25% × $20 = $5 in taxes owed." },
            { label: "Net Income", answer: 15, hint: "$20 × 75% = $15." },
            { label: "Net Income to Common", answer: -1, hint: "NI $15 - Preferred Dividend $16 = -$1 to common shareholders." }
        ],
        cfs_fields: [
            { label: "Net Income", answer: 15, hint: "From IS (before Preferred Dividends)." },
            { label: "Preferred Stock Issuance", answer: 200, hint: "Cash inflow from issuing Preferred." },
            { label: "Investment Purchase (CFI)", answer: -200, hint: "Cash outflow to buy Financial Investments." },
            { label: "Preferred Dividends (CFF)", answer: -16, hint: "8% × $200 = $16. Not tax-deductible, full cash outflow." },
            { label: "Net Cash change", answer: -1, hint: "NI $15 + Pref +$200 - Inv -$200 - PrefDiv -$16 = ?" }
        ],
        bs_fields: [
            { label: "Cash", answer: -1, hint: "From CFS." },
            { label: "Financial Investments", answer: 200, hint: "Purchased $200 of bonds." },
            { label: "Preferred Stock", answer: 200, hint: "Issued $200 Preferred." },
            { label: "CSE (Retained Earnings)", answer: -1, hint: "NI to Common = $15 - $16 = -$1." }
        ],
        explanation: "IS: Interest Income $20, Tax $5, NI $15. Preferred Div = $16 (not on IS, not tax-deductible). NI to Common = -$1. CFS: NI $15, Pref Issuance +$200, Investment -$200, Pref Div -$16 = Cash -$1. BS: Cash -$1, Investments +$200 = Assets +$199. Preferred +$200, CSE -$1 = L&E +$199. Balanced."
    },
    {
        level: 6,
        type: "fillin",
        scenario: "Issue $200 Debt at 4% interest to repurchase $200 stock. Initial: 1,000 shares at $1, NI was $300. After 1 year with new interest expense. Tax rate 25%.",
        is_fields: [
            { label: "Additional Interest Expense", answer: -8, hint: "4% × $200 = $8 new interest." },
            { label: "Tax savings from Interest", answer: 2, hint: "25% × $8 = $2 tax shield." },
            { label: "Net Income impact", answer: -6, hint: "$8 × (1 - 25%) = $6 reduction in NI." },
            { label: "New total Net Income", answer: 294, hint: "$300 - $6 = $294." }
        ],
        cfs_fields: [
            { label: "Net Income", answer: 294, hint: "New NI after additional interest." },
            { label: "Debt Issuance (CFF)", answer: 200, hint: "Borrowed $200." },
            { label: "Stock Repurchase (CFF)", answer: -200, hint: "Bought back $200 of stock." },
            { label: "Net Cash change from transaction", answer: -6, hint: "Only the after-tax interest is a new Cash outflow." }
        ],
        bs_fields: [
            { label: "New shares outstanding", answer: 800, hint: "1,000 - ($200 / $1 per share) = 800 shares." },
            { label: "New EPS", answer: 0.3675, hint: "$294 / 800 shares = ?" },
            { label: "Debt", answer: 200, hint: "New Debt on BS." },
            { label: "Treasury Stock (contra-equity)", answer: -200, hint: "Repurchased shares reduce CSE." }
        ],
        explanation: "Debt +$200, Buyback -$200 = Cash neutral initially. Year 1: Interest $8, after-tax $6, NI = $294. Shares: 1,000 - 200 = 800. EPS: $294/800 = $0.3675 vs old $0.30. EPS accretive because earnings yield (30%) > after-tax Debt cost (3%). BS: Debt +$200, Treasury Stock -$200, CSE net change from NI. Balanced."
    },
    {
        level: 6,
        type: "fillin",
        scenario: "Acquire company for $500 (50% Debt, 50% Stock). Target: $300 Assets, no Liabilities (CSE = $300). Premium split 50/50 Goodwill/Other Intangibles. Fill in immediate BS impact on acquirer.",
        is_fields: [
            { label: "Income Statement impact", answer: 0, hint: "Acquisitions do not appear on the IS at closing." },
            { label: "Net Income impact", answer: 0, hint: "No IS impact means no NI change." }
        ],
        cfs_fields: [
            { label: "Debt Issuance (CFF)", answer: 250, hint: "50% × $500 = $250 Debt raised." },
            { label: "Acquisition Cash (CFI)", answer: -250, hint: "$250 cash portion (from Debt) used for acquisition." },
            { label: "Net Cash change", answer: 0, hint: "Debt inflow offsets acquisition outflow. Stock portion is non-cash." }
        ],
        bs_fields: [
            { label: "Target's Assets", answer: 300, hint: "Consolidate the target's $300 in Assets." },
            { label: "Goodwill", answer: 100, hint: "50% of $200 premium = $100 Goodwill." },
            { label: "Other Intangible Assets", answer: 100, hint: "50% of $200 premium = $100 Intangibles." },
            { label: "Total Debt increase", answer: 250, hint: "50% of $500 financed with Debt." },
            { label: "CSE increase (new Stock)", answer: 250, hint: "50% of $500 financed with new Stock issuance." }
        ],
        explanation: "Premium = $500 - $300 = $200. Split: $100 Goodwill + $100 Intangibles. BS Assets: +$300 (target's) + $100 GW + $100 Intangibles = +$500. BS L&E: +$250 Debt + $250 CSE (new stock) = +$500. Cash neutral (Debt funds the cash portion). Both sides up $500. Balanced."
    },
    {
        level: 6,
        type: "fillin",
        scenario: "Year after acquisition: $200 Revenue, $100 OpEx from target. 8% interest on $250 Debt. 5-year Intangibles amortization ($100 total, not tax-deductible). Tax rate 25%.",
        is_fields: [
            { label: "Revenue", answer: 200, hint: "Target generates $200 Revenue." },
            { label: "Operating Expenses", answer: -100, hint: "Target's OpEx." },
            { label: "Amortization", answer: -20, hint: "$100 Intangibles / 5 years = $20/year." },
            { label: "Interest Expense", answer: -20, hint: "8% × $250 = $20." },
            { label: "Pre-Tax Income", answer: 60, hint: "$200 - $100 - $20 - $20 = $60." },
            { label: "Net Income", answer: 45, hint: "$60 × 75% = $45." }
        ],
        cfs_fields: [
            { label: "Net Income", answer: 45, hint: "From IS." },
            { label: "Amortization add-back", answer: 20, hint: "Non-cash expense added back." },
            { label: "Deferred Taxes", answer: -5, hint: "Amort not cash-tax deductible. $20 × 25% = $5 offset." },
            { label: "Net Cash change", answer: 60, hint: "NI $45 + Amort $20 - DT $5 = $60." }
        ],
        bs_fields: [
            { label: "Cash", answer: 60, hint: "From CFS." },
            { label: "Other Intangible Assets", answer: -20, hint: "Reduced by Amortization." },
            { label: "Net DTA change", answer: 5, hint: "Amort not tax-deductible creates future tax savings." },
            { label: "CSE", answer: 45, hint: "Changes by Net Income." }
        ],
        explanation: "IS: Rev $200, OpEx $100, Amort $20, Interest $20 = PTI $60, Tax $15, NI $45. CFS: NI +$45, Amort +$20, DT -$5 = Cash +$60. BS: Cash +$60, Intangibles -$20, DTA +$5 = Assets +$45. CSE +$45 = L&E +$45. Balanced."
    },
    {
        level: 6,
        type: "fillin",
        scenario: "Goodwill impairment of $100 (NOT cash-tax deductible). Tax rate 25%. Fill in all impacts.",
        is_fields: [
            { label: "Goodwill Impairment Expense", answer: -100, hint: "Full write-down hits the IS." },
            { label: "Book Taxes saved", answer: -25, hint: "25% × $100 = $25 book tax reduction." },
            { label: "Net Income", answer: -75, hint: "$100 × (1 - 25%) = -$75." }
        ],
        cfs_fields: [
            { label: "Net Income", answer: -75, hint: "From IS." },
            { label: "Impairment add-back", answer: 100, hint: "Non-cash — add back the full $100." },
            { label: "Deferred Taxes", answer: -25, hint: "NOT cash-tax deductible: no real tax savings. DT = -$25." },
            { label: "Net Cash change", answer: 0, hint: "NI -$75 + add-back +$100 + DT -$25 = $0." }
        ],
        bs_fields: [
            { label: "Cash", answer: 0, hint: "No cash impact." },
            { label: "Goodwill", answer: -100, hint: "Written down by $100." },
            { label: "Net DTA change", answer: 25, hint: "Future tax savings from non-deductible impairment." },
            { label: "CSE", answer: -75, hint: "Decreases by Net Income of -$75." }
        ],
        explanation: "IS: Impairment -$100, Book Tax -$25, NI -$75. CFS: NI -$75, add-back +$100, DT -$25 = Cash unchanged. BS: Goodwill -$100, DTA +$25 = Assets -$75. CSE -$75 = L&E -$75. Balanced. Cash is unchanged because the impairment is non-cash and not tax-deductible."
    },
];

// Export all questions
const QUESTIONS_ACCOUNTING = {
    1: level1Questions,
    2: level2Questions,
    3: level3Questions,
    4: level4Questions,
    5: level5Questions,
    6: level6Questions,
    order: orderQuestions,
    fillin: fillinQuestions
};
