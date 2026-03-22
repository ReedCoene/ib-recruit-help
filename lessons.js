// Audio files hosted on GitHub Releases
const AUDIO_BASE_URL = "https://github.com/ReedCoene/ib-recruit-help/releases/download/audio-v1/";

const LESSONS_ACCOUNTING = [
    {
        id: "is-basics",
        title: "The Income Statement",
        icon: "&#x1F4C8;",
        color: "#60a5fa",
        audio: "key_rule_1__income_statement_and_working_capital.mp3",
        cards: [
            {
                term: "Revenue (Net Sales)",
                what: "The total value of products or services a company delivers to customers in a period. It sits at the very top of the Income Statement — the 'top line.'",
                why: "Revenue is recognized when the product/service is delivered, NOT when cash is collected. This is called accrual accounting. A company could deliver $1M in products but collect $0 in cash if customers haven't paid yet — Revenue is still $1M.",
                example: "An online course company delivers courses to 1,000 customers at $500 each. Revenue = $500,000 for the period, regardless of whether all customers have paid yet."
            },
            {
                term: "Cost of Goods Sold (COGS)",
                what: "Expenses directly tied to delivering individual products or services — materials, shipping, direct labor. Subtracted from Revenue to get Gross Profit.",
                why: "COGS separates the 'variable' costs that scale with each unit sold from the 'fixed' costs (like rent and salaries) that exist regardless of sales volume. This lets you see how much profit each additional sale generates.",
                example: "A company sells a physical book for $30. The printing cost is $8, shipping is $4. COGS per unit = $12. If they sell 10,000 books, total COGS = $120,000 and Gross Profit = $300,000 - $120,000 = $180,000."
            },
            {
                term: "Operating Expenses (OpEx)",
                what: "Costs NOT directly linked to individual product sales: employee salaries, rent, marketing, R&D, customer support. These are 'fixed' or 'semi-fixed' costs.",
                why: "OpEx exists whether you sell 1 unit or 1 million. Separating it from COGS shows you the company's cost structure — a company with high Gross Margin but high OpEx has a different profile than one with low Gross Margin and low OpEx.",
                example: "The same book company pays $50K in marketing, $80K in employee salaries, and $20K in rent. Total OpEx = $150K. Operating Income = Gross Profit ($180K) - OpEx ($150K) = $30K."
            },
            {
                term: "Operating Income (EBIT)",
                what: "Revenue minus COGS minus Operating Expenses. Shows what the business earns from its core operations before interest on Debt, side activities, and taxes.",
                why: "Operating Income strips away capital structure (Debt vs. Equity decisions) and taxes, letting you compare the core profitability of two companies even if one has more Debt. That's why it's also called EBIT — Earnings Before Interest and Taxes.",
                example: "Company A and B both have $30K Operating Income. But A has $20K in Interest Expense (lots of Debt) while B has $0. Their core operations are equally profitable — A just chose to fund itself differently."
            },
            {
                term: "Net Income",
                what: "The 'bottom line' — what's left after ALL expenses, interest, and taxes. This is the profit available to the company's common shareholders.",
                why: "Net Income flows into two critical places: (1) it's the starting point of the Cash Flow Statement, and (2) it increases Retained Earnings within Equity on the Balance Sheet. It's the bridge connecting all three statements.",
                example: "Operating Income is $30K, Interest Expense is $5K, so Pre-Tax Income = $25K. At a 25% tax rate, Taxes = $6.25K. Net Income = $18.75K. This $18.75K flows to the CFS and adds to CSE on the BS."
            },
            {
                term: "Income Statement Rules",
                what: "Two rules determine what goes on the IS: (1) It must correspond 100% to THIS period. (2) It must affect income available to common shareholders.",
                why: "Rule 1 is why CapEx ($400K factory) does NOT go on the IS — it benefits many years, not just this one. Instead, we spread it via Depreciation. Rule 2 is why Preferred Dividends appear (they reduce income to common shareholders) but Common Dividends don't (they're distributed OUT of that income).",
                example: "A company buys a $400K factory (lasts 10 years). Year 1 IS: $0 for the purchase, but $40K Depreciation. A company pays $10K in Preferred Dividends: appears on IS. Pays $50K in Common Dividends: does NOT appear on IS."
            }
        ]
    },
    {
        id: "working-capital",
        title: "Working Capital Items",
        audio: "key_rule_1__income_statement_and_working_capital.mp3",
        icon: "&#x1F504;",
        color: "#34d399",
        cards: [
            {
                term: "Accounts Receivable (AR)",
                what: "An Asset on the Balance Sheet. Represents money customers owe the company for products/services already delivered but not yet paid for in cash.",
                why: "AR creates a timing difference: Revenue is recorded (IS goes up) but cash hasn't arrived. That's why AR increasing is a NEGATIVE adjustment on the CFS — the company 'earned' the revenue on paper but doesn't have the cash yet.",
                example: "A university buys $100K in course licenses but won't pay for 90 days. The company records $100K Revenue immediately (delivery happened), AR increases by $100K, but Cash hasn't changed. When the university finally pays, AR decreases by $100K and Cash increases by $100K."
            },
            {
                term: "Accounts Payable (AP)",
                what: "A Liability on the Balance Sheet. Represents money the company owes to vendors for products/services already received but not yet paid for in cash.",
                why: "AP is the mirror image of AR. When AP increases, the company received something (possibly recording an expense) but hasn't paid cash yet — that's a POSITIVE cash flow adjustment. The company gets to keep its cash a bit longer.",
                example: "A company hires a marketing agency for $20K but has 60 days to pay. The $20K expense hits the IS immediately, AP increases by $20K, but Cash hasn't decreased. When they finally pay, AP decreases and Cash decreases by $20K."
            },
            {
                term: "Deferred Revenue",
                what: "A Liability on the Balance Sheet. Cash collected from customers for products/services NOT yet delivered. The company has an obligation to deliver in the future.",
                why: "It's a Liability because the company owes the customer a product/service. No Revenue can be recognized until delivery. When DR increases, Cash goes up but Revenue doesn't — that's a POSITIVE CFS adjustment. When the company finally delivers, DR decreases, Revenue is recognized, and the CFS adjusts accordingly.",
                example: "A software company pre-sells $50K in annual subscriptions on January 1st. Cash +$50K, Deferred Revenue +$50K. No Revenue yet. Each month, they recognize $50K/12 = ~$4.2K in Revenue and DR decreases by $4.2K."
            },
            {
                term: "Inventory",
                what: "An Asset representing raw materials, work-in-progress, or finished goods that have been purchased but not yet sold/delivered to customers.",
                why: "Inventory is linked to COGS. You can only record COGS (the expense) when the product is delivered to the customer. Buying Inventory costs cash now, but the IS expense comes later — so an increase in Inventory is a NEGATIVE CFS adjustment.",
                example: "A company spends $60K on raw materials. No IS change (nothing delivered yet). Cash -$60K, Inventory +$60K. Later, they make finished products and sell them for $100K. Revenue +$100K, COGS +$60K, Inventory -$60K."
            },
            {
                term: "Prepaid Expenses",
                what: "An Asset representing cash paid upfront for services not yet received — like paying a full year of insurance on January 1st.",
                why: "The cash leaves immediately, but the expense can't hit the IS until the service is actually consumed. So Prepaid Expenses increasing is a NEGATIVE CFS adjustment (cash went out, but no IS expense yet). As the service is consumed, Prepaid decreases and the expense is recognized.",
                example: "Insurance costs $20K/year, paid upfront on Jan 1. Day 1: Cash -$20K, Prepaid +$20K, no IS change. Each month: Prepaid decreases by ~$1.7K, OpEx increases by ~$1.7K on the IS."
            },
            {
                term: "Change in Working Capital",
                what: "The net change in operational Assets minus operational Liabilities (excluding Cash, Investments, and Debt). Appears on the CFS within Cash Flow from Operations.",
                why: "It tells you whether Cash Flow is higher or lower than Net Income. Calculated as Old WC - New WC (seems backwards, but ensures correct signs). If operational Assets grow faster than operational Liabilities, the Change is negative — the company needs more cash to fund operations.",
                example: "Year 1 WC: AR $200 + Inv $300 - AP $150 = $350. Year 2 WC: AR $250 + Inv $400 - AP $200 = $450. Change in WC = $350 - $450 = -$100. Cash Flow is $100 lower than Net Income because the company tied up more cash in AR and Inventory."
            }
        ]
    },
    {
        id: "capex-depreciation",
        title: "CapEx, Depreciation & PP&E",
        audio: "key_rule_2__capex_depreciation_and_business_funding.mp3",
        icon: "&#x1F3ED;",
        color: "#fbbf24",
        cards: [
            {
                term: "Capital Expenditures (CapEx)",
                what: "Spending on long-term assets like factories, equipment, offices, or computers. Appears ONLY on the Cash Flow Statement (Cash Flow from Investing) initially — never on the Income Statement.",
                why: "CapEx benefits the company for many years. Rule 1 of the IS says items must correspond 100% to this period. A $400K factory lasts 10+ years, so the initial purchase fails the test. Instead, we spread the cost over time as Depreciation.",
                example: "A company buys $400K of equipment at end of Year 1. CFS: CapEx -$400K in CFI. BS: Cash -$400K, PP&E +$400K. IS: nothing changes. The following year, Depreciation begins."
            },
            {
                term: "Depreciation",
                what: "A non-cash expense on the IS that allocates the cost of PP&E over its useful life. Reduces Pre-Tax Income and Net Income, but gets added back on the CFS.",
                why: "The cash was spent when the CapEx happened (maybe years ago). Depreciation recognizes that cost over time on the IS, but no cash leaves in the current period — that's why it's added back. The only real cash impact is the tax savings: Depreciation * Tax Rate.",
                example: "$400K equipment, 5-year useful life. Annual Depreciation = $80K. IS: Operating Income -$80K, NI -$60K (at 25% tax). CFS: NI -$60K, add back D&A +$80K = Cash +$20K. That $20K = tax savings ($80K * 25%)."
            },
            {
                term: "Net PP&E",
                what: "Property, Plant & Equipment on the Balance Sheet, net of accumulated Depreciation. It increases with new CapEx and decreases with Depreciation each year.",
                why: "Net PP&E tracks the remaining 'book value' of physical assets. It's the link between the CFS (where CapEx and Depreciation adjustments live) and the BS. The formula: Net PP&E = Prior Net PP&E + CapEx - Depreciation.",
                example: "Start with $400K Net PP&E. Year 2: CapEx of $50K, Depreciation of $80K. Ending Net PP&E = $400K + $50K - $80K = $370K."
            },
            {
                term: "The Full CapEx Cycle",
                what: "Step 1: Spend cash on CapEx (CFS and BS only). Step 2+: Record Depreciation each year (IS, CFS, BS). Cash initially drops from the CapEx, then slowly benefits from tax savings via Depreciation.",
                why: "This two-step process exists because the IS recognizes costs only as they're 'consumed.' A factory isn't consumed the day you buy it — it's consumed over 10-20 years. The CFS bridges the gap between when cash was spent (Step 1) and when the expense is recognized (Step 2+).",
                example: "Year 1: Buy $200K factory with Debt. Cash unchanged (Debt inflow offsets CapEx outflow). Year 2: Depreciation $20K (10-year life), Interest $20K (10% rate), Principal repayment $10K. Cash decreases by $20K total after accounting for tax savings."
            }
        ]
    },
    {
        id: "debt-equity",
        title: "Debt, Equity & Preferred Stock",
        audio: "key_rule_2__capex_depreciation_and_business_funding.mp3",
        icon: "&#x1F4B0;",
        color: "#fb923c",
        cards: [
            {
                term: "Issuing Debt",
                what: "Borrowing money from lenders. The issuance appears ONLY on the CFS (Cash Flow from Financing) and BS (Debt increases, Cash increases). Nothing on the IS at issuance.",
                why: "Debt lasts for years, so the initial issuance fails the IS 'current period' test. The cash inflow shows up in CFF. Over time, the company pays Interest Expense (IS) and repays principal (CFS only). Interest is tax-deductible, which is the main advantage of Debt over Equity.",
                example: "Issue $100 Debt at 4% interest. Day 1: Cash +$100, Debt +$100. Year 1: Interest Expense = $4 (IS), after-tax cost = $3 (at 25% tax). Principal repayment of $10 appears only on CFS."
            },
            {
                term: "Issuing Equity",
                what: "Selling ownership shares to investors. Like Debt, the issuance is only on the CFS and BS — never on the IS. Cash and Common Shareholders' Equity both increase.",
                why: "Equity has no 'required' cash payments like Interest Expense. But it costs the company something: dilution. Existing owners now own a smaller percentage. If the company pays Dividends or sells itself, each investor gets less.",
                example: "A company issues $100 in new shares. Cash +$100, CSE +$100. No IS impact. But if an investor owned 50% before, they might own only 45% after — they've been 'diluted.'"
            },
            {
                term: "Dividends & Stock Repurchases",
                what: "Two ways to return cash to shareholders. Both reduce Cash and CSE on the BS and appear on the CFS in CFF. Neither appears on the Income Statement.",
                why: "Common Dividends don't go on the IS because they don't reduce income available to common shareholders — they're distributed OUT of that income. Stock Repurchases are similar: they reduce the share count (boosting EPS) but aren't an expense.",
                example: "Company pays $55K in Dividends and repurchases $30K in stock. CFS: -$85K in CFF. BS: Cash -$85K, CSE -$85K. Repurchase also reduces shares outstanding (e.g., from 1,100K to 1,070K shares if price = $1.00)."
            },
            {
                term: "Preferred Stock",
                what: "A 'hybrid' between Debt and Equity. Carries a fixed Preferred Dividend (like Debt interest) but doesn't affect the common share count. Preferred Dividends appear on the IS and are NOT tax-deductible.",
                why: "Preferred Stock is more expensive than Debt (higher coupon rates, no tax deduction) but cheaper than Equity (lower required returns than common stock). Companies use it when they can't issue more Debt and Equity isn't feasible.",
                example: "Issue $100 Preferred at 6% coupon. Annual Preferred Dividend = $6, shown on the IS below Net Income (reduces Net Income to Common). Unlike Debt interest, there's no tax benefit — the full $6 hits the bottom line."
            }
        ]
    },
    {
        id: "balance-sheet",
        title: "The Balance Sheet",
        audio: "key_rule_10__summary_of_three_financial_statements.mp3",
        icon: "&#x2696;",
        color: "#a78bfa",
        cards: [
            {
                term: "Assets = Liabilities + Equity",
                what: "The fundamental equation. Assets (what the company owns/is owed) must always equal Liabilities (what it owes to outsiders) plus Equity (owner's stake). If it doesn't balance, something is wrong.",
                why: "Every transaction affects at least two things. Buy equipment with cash? Cash goes down, PP&E goes up — Assets stay balanced. Borrow money? Cash goes up (Asset) and Debt goes up (Liability) — both sides increase equally.",
                example: "$50K Cash + $450K PP&E = $500K Assets. On the other side: $200K Debt + $300K Equity = $500K. If the company takes on $100K more Debt to buy equipment: PP&E +$100K, Debt +$100K. Now: $600K = $600K."
            },
            {
                term: "Current vs. Non-Current",
                what: "Current (short-term) items last less than a year: Cash, AR, Inventory, AP, Deferred Revenue. Non-Current (long-term) items last more than a year: PP&E, Goodwill, Long-Term Debt, Lease Liabilities.",
                why: "This split helps assess liquidity — can the company meet its short-term obligations? If Current Assets >> Current Liabilities, the company can cover near-term payments. If not, it might face a cash crunch.",
                example: "Current Assets: Cash $100K, AR $50K, Inventory $80K = $230K. Current Liabilities: AP $60K, Short-Term Debt $40K = $100K. The company has $230K to cover $100K in short-term obligations — comfortable position."
            },
            {
                term: "Common Shareholders' Equity (CSE)",
                what: "The owners' stake in the company. Components: Common Stock (par value), APIC (market value minus par at issuance), Retained Earnings (cumulative NI minus Dividends), Treasury Stock (repurchased shares), AOCI (misc. items like FX effects).",
                why: "In modeling and valuation, we typically show CSE as one line because individual components don't matter. What matters is how CSE changes: +Net Income, +SBC, +Stock Issuances, -Dividends, -Stock Repurchases.",
                example: "Start CSE: $500K. Year events: NI +$75K, SBC +$20K, Dividends -$30K, Repurchases -$50K. Ending CSE = $500K + $75K + $20K - $30K - $50K = $515K."
            },
            {
                term: "How the BS Links to the CFS",
                what: "Every line on the CFS connects to a BS line item. Cash links to ending Cash. CapEx and D&A link to Net PP&E. Debt Issuances/Repayments link to Total Debt. NI, SBC, Dividends, Stock Issuances link to CSE.",
                why: "When linking: on the Assets side, SUBTRACT CFS items. On L&E side, ADD CFS items. This ensures changes flow correctly. If the BS doesn't balance after linking, you made an error — go back line by line.",
                example: "Net PP&E: Prior $400K - D&A $80K - CapEx (-$50K, subtract a negative = add) = $370K. Total Debt: Prior $200K + Issuances $50K + Repayments (-$10K) = $240K."
            }
        ]
    },
    {
        id: "cash-flow-statement",
        title: "The Cash Flow Statement",
        audio: "key_rule_10__summary_of_three_financial_statements.mp3",
        icon: "&#x1F4B5;",
        color: "#22d3ee",
        cards: [
            {
                term: "Cash Flow from Operations (CFO)",
                what: "Starts with Net Income, adjusts for non-cash items (D&A, SBC, Deferred Taxes), then adjusts for changes in Working Capital. Shows cash generated by core business activities.",
                why: "Net Income includes non-cash items (Depreciation reduced NI but no cash was spent) and misses timing differences (Revenue was recorded but cash wasn't collected). CFO corrects both of these to show actual operating cash flow.",
                example: "NI = $75K. Add back D&A $20K. Add back SBC $10K. Change in AR -$15K (cash not yet collected). Change in AP +$8K (cash not yet paid). CFO = $75K + $20K + $10K - $15K + $8K = $98K."
            },
            {
                term: "Cash Flow from Investing (CFI)",
                what: "Cash spent on or received from long-term assets: CapEx (negative), sale of PP&E (positive), purchases/sales of financial investments, and acquisitions.",
                why: "These are non-operational cash movements related to the company's long-term asset base. CapEx is usually the biggest item. CFI is almost always negative for growing companies because they're investing in their future.",
                example: "CapEx -$50K, Sale of old equipment +$10K, Acquisition of a small company -$200K. CFI = -$50K + $10K - $200K = -$240K."
            },
            {
                term: "Cash Flow from Financing (CFF)",
                what: "Cash from or to investors and lenders: Debt Issuances/Repayments, Stock Issuances/Repurchases, and Dividends. Also includes Preferred Stock transactions and lease principal repayments.",
                why: "These movements relate to how the company funds itself — borrowing, raising equity, or returning cash to investors. Mature companies typically have negative CFF (paying Dividends and repaying Debt), while growing companies may have positive CFF (raising capital).",
                example: "Debt Issuance +$100K, Debt Repayment -$20K, Dividends -$30K, Stock Repurchase -$40K. CFF = $100K - $20K - $30K - $40K = +$10K."
            },
            {
                term: "Why the CFS Exists",
                what: "The CFS reconciles Net Income (accrual basis) to actual cash movements. It catches two things the IS misses: (1) non-cash items that affected NI, and (2) cash movements that didn't affect NI.",
                why: "A company could report $1M Net Income but have $0 in actual cash if all its sales are on credit (AR). Or it could report a $500K Net Loss but still have plenty of cash because of huge non-cash Depreciation charges. The CFS reveals the truth about cash.",
                example: "A company reports NI of $150K but Cash only increased by $50K. Why? AR increased $80K (recorded revenue, no cash), CapEx was $60K (cash out, not on IS), and D&A was $40K (added back, non-cash). CFS: $150K + $40K - $80K - $60K = $50K."
            }
        ]
    },
    {
        id: "noncash-items",
        title: "Non-Cash Items & Deferred Taxes",
        audio: "key_rule_5__deferred_taxes_and_nols.mp3",
        icon: "&#x1F4AD;",
        color: "#f472b6",
        cards: [
            {
                term: "Non-Cash Expenses Pattern",
                what: "D&A, SBC, Write-Downs, Impairments, Amortization of Intangibles all follow the same pattern: they reduce NI on the IS, then get added back on the CFS. The net cash impact depends on whether they're tax-deductible.",
                why: "These items reduce the company's reported profit but don't require current-period cash. The CFS add-back reverses the NI impact, and the real question becomes: does the company save on taxes? If yes, Cash increases by the tax savings. If no, the Deferred Tax Asset increases instead.",
                example: "Depreciation +$100 (tax-deductible): IS NI -$75. CFS: -$75 + $100 = Cash +$25 (tax savings). Write-Down $100 (NOT tax-deductible): IS NI -$75. CFS: -$75 + $100 - $25 Deferred Taxes = Cash unchanged, DTA +$25."
            },
            {
                term: "Stock-Based Compensation (SBC)",
                what: "A non-cash IS expense for paying employees in stock/options. Added back on CFS like other non-cash items. NOT initially tax-deductible. Key difference from D&A: SBC creates new shares, diluting existing owners.",
                why: "SBC reduces cash expenses (employees accept stock instead of salary) but dilutes ownership. In valuations, SBC is often treated as a real cash expense despite being 'non-cash' because the dilution has real cost to existing shareholders.",
                example: "Employee earns $100K total comp: $70K salary (cash), $30K SBC (stock). IS: Salary Expense $70K + SBC $30K = $100K total. CFS: add back $30K SBC (non-cash). But the company's share count increases, so each existing share is worth less."
            },
            {
                term: "Deferred Tax Liability (DTL)",
                what: "A BS Liability that arises when Book Taxes (IS) are LOWER than Cash Taxes actually paid. Most common cause: accelerated Depreciation for tax purposes reduces taxable income now, but the company will owe more later.",
                why: "Companies use accelerated Depreciation to pay less tax now. But the total Depreciation over the asset's life is the same — they're just front-loading the tax benefit. The DTL tracks this 'debt' to the government.",
                example: "Book Depreciation: $100/year for 3 years. Tax Depreciation: $150, $100, $50. Year 1: Book Taxes = $25 more than Cash Taxes (at 25% rate on the $50 difference). DTL increases by $12.5. Year 3: reverses as Cash Taxes exceed Book Taxes."
            },
            {
                term: "Deferred Tax Asset (DTA) & NOLs",
                what: "A DTA represents future tax savings, most commonly from Net Operating Losses. If a company has lost money in the past, it can use those losses to reduce future taxable income. DTA = NOL * Tax Rate.",
                why: "NOLs are the FULL accumulated losses. The DTA is only the tax-savings portion. A $100 NOL at 25% tax = $25 DTA. When the company becomes profitable and uses the NOL, the DTA decreases and Cash Taxes drop to $0 (or lower than Book Taxes).",
                example: "Company lost $100 over 2 years. NOL = $100, DTA = $25 (at 25%). Year 3: Pre-Tax Income = $60. Uses $60 of NOL, so Taxable Income = $0, Cash Taxes = $0. Book Taxes = $15 but aren't paid in cash. DTA decreases by $15. Remaining NOL = $40, DTA = $10."
            },
            {
                term: "Gains, Losses & Write-Downs",
                what: "When a company sells an asset for more than book value = Gain. Less than book value = Loss. If an asset's value declines without a sale = Write-Down / Impairment. All appear on the IS.",
                why: "Gains and Losses are reversed on the CFS (CFO section) and the full sale proceeds appear in CFI. This 're-classifies' them from operating to investing. Write-Downs are non-cash and usually NOT tax-deductible, so Cash doesn't change (DTA increases instead).",
                example: "Sell PP&E (book value $100) for $180: $80 Gain on IS, NI +$60. CFS: reverse -$80 Gain in CFO, +$180 proceeds in CFI. Net Cash +$160. Write-Down $100 of PP&E: NI -$75, CFS add back +$100, Deferred Taxes -$25. Cash unchanged."
            }
        ]
    },
    {
        id: "leases",
        title: "Operating & Finance Leases",
        audio: "key_rule_3__operating_and_finance_leases.mp3",
        icon: "&#x1F3E2;",
        color: "#f97316",
        cards: [
            {
                term: "Lease Basics",
                what: "Both Operating and Finance Leases create a Right-of-Use Asset and a Lease Liability on the BS, based on the Present Value of future lease payments. The company pays the same cash rent each year regardless of lease type.",
                why: "Before 2019, Operating Leases were 'off-balance sheet' — companies could hide huge lease obligations. Now both types appear on the BS, giving a more honest picture of the company's obligations.",
                example: "10-year lease, $20/year, 6% discount rate. PV = $147. Day 1: Lease Asset +$147, Lease Liability +$147. Cash unchanged. Every year the company pays $20 in cash rent."
            },
            {
                term: "Finance Lease Treatment",
                what: "On the IS, the $20/year cash rent is split into Interest ($8.8 initially = 6% * $147) and Depreciation ($14.7 = $147 / 10 years). Total IS expense = $23.5 in Year 1 — MORE than the $20 cash paid.",
                why: "The company 'pretends' it borrowed money to buy the asset. Interest decreases over time (as the Liability shrinks), while Depreciation stays constant. Early years have higher total expense; later years have lower. The total expense over 10 years is still $200 ($20 * 10).",
                example: "Year 1: Interest $8.8 + Depreciation $14.7 = $23.5 expense. Lease Principal Repayment = $20 - $8.8 = $11.2. Lease Liability: $147 - $11.2 = $135.8. Lease Asset: $147 - $14.7 = $132.3."
            },
            {
                term: "Operating Lease (U.S. GAAP)",
                what: "A simpler IS treatment: just a flat Rental Expense of $20/year. But behind the scenes, the company still calculates Interest and Depreciation to determine how the Lease Asset and Liability change on the BS.",
                why: "Under GAAP, the Lease Asset and Liability decrease by the SAME amount each year (assuming constant payments). This is different from Finance Leases where they decrease by different amounts. The cumulative expense and cash impact are identical over the full lease term.",
                example: "Year 1: IS shows $20 Rental Expense. Behind the scenes: Interest $8.8, so 'Depreciation' = $20 - $8.8 = $11.2. Both Lease Asset and Lease Liability decrease by $11.2. BS stays balanced."
            },
            {
                term: "IFRS vs. GAAP Leases",
                what: "Under IFRS, both Operating and Finance Leases use the Finance Lease treatment (Interest + Depreciation split on IS). Under GAAP, only Finance Leases use the split; Operating Leases use simple Rental Expense.",
                why: "When analyzing IFRS companies, you need to adjust: remove the Lease Depreciation add-back from CFO, because the company still pays the full cash lease expense. The Depreciation/Interest split is an accounting convention, not a real cash distinction.",
                example: "IFRS company shows Lease D&A of $14.7 added back in CFO and Lease Principal Repayment of $11.2 in CFF. For FCF comparability, remove the $14.7 add-back — the company really paid $20 in cash rent regardless of how it's categorized."
            }
        ]
    },
    {
        id: "ma-goodwill",
        title: "M&A, Goodwill & Intangibles",
        audio: "key_rule_8__goodwill_and_intangibles_from_m.a.mp3",
        icon: "&#x1F91D;",
        color: "#8b5cf6",
        cards: [
            {
                term: "Basic M&A Accounting",
                what: "Combine both companies' financial statements. Reduce the Acquirer's Cash (or increase Debt/Equity). Wipe out the Target's CSE (it no longer exists independently). If Purchase Price != Target's CSE, create Goodwill and Other Intangibles to balance.",
                why: "Companies are almost never worth exactly their book CSE. A company with a strong brand, great customers, and valuable patents is worth MORE than its BS shows. The premium above CSE gets allocated to identifiable intangibles and Goodwill.",
                example: "Acquirer buys Target for $200 in cash. Target's CSE = $150. Premium = $50. Allocate: $20 to Other Intangibles (patents, contracts), $30 to Goodwill. BS: Cash -$200, Other Intangibles +$20, Goodwill +$30, Target's Assets +$150 (net)."
            },
            {
                term: "Goodwill",
                what: "The 'catch-all' intangible Asset from an acquisition. It's the portion of the premium that can't be linked to specific identifiable assets. Goodwill does NOT amortize — instead, the company reviews it annually and records Impairments if its value has decreased.",
                why: "Goodwill represents things like synergies, market position, and 'soft' value that can't be put on a balance sheet as a concrete asset. A Goodwill Impairment signals the acquired business underperformed — the premium paid wasn't justified.",
                example: "Company acquires a startup for $100M. CSE = $20M, Identifiable Intangibles = $30M, Goodwill = $50M. Three years later, the startup's product fails. Company writes down $40M of Goodwill — a signal the deal was overpriced."
            },
            {
                term: "Other Intangible Assets",
                what: "Identifiable assets from acquisitions: patents, trademarks, customer relationships, brand value, contracts. Unlike Goodwill, these DO amortize over their useful lives, similar to how PP&E depreciates.",
                why: "Amortization of acquisition-related Intangibles is NOT tax-deductible (similar to Goodwill Impairments and SBC). So Cash doesn't change from the Amortization alone — the DTA increases instead. This matters for walk-the-statements interview questions.",
                example: "$20K Other Intangibles, 5-year amortization = $4K/year. IS: NI -$3K (at 25% tax). CFS: NI -$3K + Amortization add-back +$4K - Deferred Taxes -$1K = Cash unchanged. BS: Intangibles -$4K, DTA +$1K = Assets -$3K. CSE -$3K."
            }
        ]
    },
    {
        id: "fcf-metrics",
        title: "Free Cash Flow & Key Metrics",
        audio: "key_rule_12__free_cash_flow_and_working_capital.mp3",
        icon: "&#x1F4CA;",
        color: "#14b8a6",
        cards: [
            {
                term: "Free Cash Flow (FCF)",
                what: "CFO minus CapEx. Represents the cash a company generates after paying for everything it NEEDS to run and maintain its business. It's the 'discretionary' cash available for Debt repayment, Dividends, buybacks, or acquisitions.",
                why: "The 'Net Change in Cash' at the bottom of the CFS includes optional items like Debt issuances and stock repurchases. FCF strips those out to show the company's self-sustaining cash generation. If FCF is negative, the company can't survive without outside financing.",
                example: "CFO = $200M, CapEx = $80M. FCF = $120M. The company can use this $120M however it wants: pay down Debt, issue Dividends, buy back stock, or make acquisitions. If FCF were -$50M, the company needs to borrow or raise Equity to stay alive."
            },
            {
                term: "EBIT vs. EBITDA",
                what: "EBIT = Operating Income (proxy for FCF, since it indirectly deducts CapEx via Depreciation). EBITDA = EBIT + D&A from the CFS (proxy for CFO, ignoring CapEx entirely). Both exclude Interest and Taxes.",
                why: "EBIT tells you: 'How profitable is this business from core operations, accounting for wear and tear on assets?' EBITDA tells you: 'How much cash does core operations generate before any capital spending or financing decisions?' Always get D&A from the CFS, not the IS, because D&A is often embedded in COGS or OpEx.",
                example: "Revenue $500K, COGS $200K, OpEx $150K. EBIT = $150K. D&A on CFS = $40K. EBITDA = $150K + $40K = $190K. If you used D&A from the IS ($25K, because some is embedded in COGS), you'd get the wrong answer of $175K."
            },
            {
                term: "Leverage & Interest Coverage",
                what: "Leverage Ratio = Total Debt / EBITDA (how many years of cash flow to repay Debt). Interest Coverage = EBITDA / Interest Expense (how many times over you can pay interest). Higher leverage = riskier. Higher coverage = safer.",
                why: "Lenders use these to set loan covenants. If Leverage exceeds 5-6x, the company may default. If Interest Coverage drops below 2x, the company may not be able to service its Debt. These ratios help you assess credit risk quickly.",
                example: "Debt = $500M, EBITDA = $100M, Interest = $25M. Leverage = 5.0x (high — borderline risky). Coverage = 4.0x (decent buffer). If EBITDA dropped 50% to $50M, Leverage = 10x (dangerous) and Coverage = 2.0x (barely surviving)."
            },
            {
                term: "ROE, ROA, ROIC",
                what: "ROE = NI / Avg Equity (returns to common shareholders). ROA = NI / Avg Total Assets (how efficiently all assets generate profit). ROIC = NOPAT / Avg Invested Capital (returns to ALL investors).",
                why: "ROE can be artificially high if the company uses lots of Debt (small Equity denominator). ROIC is a better measure because it uses NOPAT (EBIT * (1 - Tax Rate)) and all capital sources. A company with 15% ROIC and 3x Leverage is fundamentally stronger than one with 20% ROE and 8x Leverage.",
                example: "NI = $80M, Equity = $400M, Total Assets = $1B, NOPAT = $100M, Invested Capital = $600M. ROE = 20%. ROA = 8%. ROIC = 16.7%. The gap between 20% ROE and 8% ROA tells you this company uses significant Debt."
            },
            {
                term: "Cash Conversion Cycle (CCC)",
                what: "DIO + DSO - DPO. Measures how many days it takes to convert Inventory and Receivables into cash. DSO = AR/Revenue*365. DIO = Inv/COGS*365. DPO = AP/COGS*365. Lower CCC = faster cash conversion = better.",
                why: "A negative CCC (like Amazon) means the company collects cash from customers BEFORE paying suppliers — an incredible advantage. A high CCC means the company is tying up lots of cash in operations. Compare CCC only between similar companies.",
                example: "Retailer: DIO=45 (sells Inventory in 45 days), DSO=5 (collects fast, mostly credit card), DPO=40 (takes 40 days to pay suppliers). CCC = 45 + 5 - 40 = 10 days. Very efficient — cash is tied up for only 10 days."
            }
        ]
    },
    {
        id: "gaap-ifrs",
        title: "U.S. GAAP vs. IFRS",
        audio: "key_rule_9__us_gaap_vs_ifrs.mp3",
        icon: "&#x1F30D;",
        color: "#e879f9",
        cards: [
            {
                term: "Key Differences",
                what: "Both systems have the same three statements, but IFRS may: (1) use different names (Revenue = 'Turnover'), (2) start the CFS from Operating Income instead of Net Income, (3) place Dividends, Interest, and Taxes in different CFS sections, (4) treat Operating Leases like Finance Leases.",
                why: "When analyzing IFRS companies, you often need to 'convert' their CFS to start with Net Income for comparability. Find the reconciliation between Operating Income and Net Income in the footnotes, then reorganize the CFS.",
                example: "EasyJet (IFRS) starts CFS with 'Cash Generated from Operations' — can't link to IS. Their reconciliation shows adjustments between Operating Income and this number. You rebuild the CFS starting from Net Income, move Dividends to CFF, and adjust for lease treatment."
            },
            {
                term: "IFRS Lease Adjustment",
                what: "Under IFRS, Operating Leases are treated like Finance Leases (Interest + Depreciation split). When calculating FCF, remove the Lease Depreciation add-back from CFO because the company still pays the full cash rent.",
                why: "The split into Interest and Depreciation is just an accounting convention under IFRS. The company pays the exact same cash rent regardless. If you leave the Depreciation add-back in CFO, you overstate operating cash flow because you're ignoring a real cash expense.",
                example: "IFRS company: Lease cash rent = $20. CFO shows +$14.7 Lease Depreciation add-back. CFF shows -$11.2 Principal Repayment. For true FCF: remove the $14.7 add-back from CFO. This gives you the same cash picture as GAAP's simpler treatment."
            }
        ]
    },
    {
        id: "financial-investments",
        title: "Financial Investments",
        audio: "key_rule_4__financial_investments.mp3",
        icon: "&#x1F4B0;",
        color: "#22d3ee",
        cards: [
            {
                term: "Why Companies Buy Financial Investments",
                what: "Companies buy stocks and bonds (financial investments) when they have excess Cash and can't find better uses — can't hire, buy equipment, acquire companies, or justify dividends/buybacks.",
                why: "Idle cash earns nothing. Financial investments at least generate Interest Income. The initial purchase shows up only on the CFS (Cash Flow from Investing) and reduces the company's cash balance.",
                example: "Apple holds $150B+ in cash and marketable securities. It earns interest income on these while deciding how to deploy capital through buybacks, dividends, or acquisitions."
            },
            {
                term: "Financial Investments on the Statements",
                what: "Purchase: CFS (CFI) negative, BS Financial Investments up. Ongoing: Interest Income on IS boosts Pre-Tax Income, Net Income, and Cash. The investment sits as an Asset on the BS.",
                why: "The purchase is a capital allocation decision (not an expense), so it doesn't hit the IS initially. Only the income earned appears on the IS going forward.",
                example: "Company buys $100 in bonds yielding 5%. Year 1: IS shows $5 Interest Income, PTI +$5, NI +$3.75. CFS: NI +$3.75, Cash up $3.75. BS: Financial Investments +$100, Cash changes reflect the income earned."
            }
        ]
    },
    {
        id: "linking-projecting",
        title: "Linking & Projecting Statements",
        audio: "key_rule_11__linking_and_projecting_statements.mp3",
        icon: "&#x1F517;",
        color: "#f472b6",
        cards: [
            {
                term: "How the Three Statements Link",
                what: "Net Income from the IS becomes the top line of the CFS. Adjust for non-cash items and working capital changes to get CFO. Add CFI and CFF for net cash change. Cash flows to the BS. Net Income, SBC, Dividends, and buybacks flow into CSE.",
                why: "The links ensure consistency — every dollar is accounted for across all three statements. Without links, the BS would go out of balance and cash wouldn't reconcile.",
                example: "Net Income of $75 flows to CFS top. Add back $20 D&A, subtract $10 AR increase = CFO of $85. CFI of -$50 (CapEx), CFF of -$20 (Dividends). Net cash change = +$15. Cash on BS increases by $15. CSE increases by $75 (NI) minus $20 (Dividends) = +$55."
            },
            {
                term: "CFS to BS Links (Assets Side)",
                what: "When linking CFS items to the Assets side of the BS, SUBTRACT the CFS amount. CapEx and D&A link to Net PP&E. Cash changes link to Cash. Working capital items link to their respective BS lines.",
                why: "You subtract because CFS items represent changes, and on the Assets side, a positive CFS outflow (like CapEx) increases the Asset. The subtraction convention ensures the math works: Beginning PP&E - D&A + CapEx = Ending PP&E.",
                example: "Beginning PP&E = $500. CapEx = $100 (shown as -$100 on CFS). D&A = $40 (shown as +$40 on CFS). Ending PP&E = $500 + $100 - $40 = $560."
            },
            {
                term: "Simplifying Before Projecting",
                what: "Before projecting, simplify: IS to 5-10 key lines with D&A shown separately. BS to 5-10 items per side, combining Short/Long-Term versions. CFS: consolidate non-cash adjustments to D&A + Deferred Taxes + 1-2 others.",
                why: "Real financial statements have dozens of line items, many immaterial. Simplifying lets you focus on the drivers that actually matter for the projection and avoids false precision on tiny items.",
                example: "A real BS might have 25 line items. Simplify to: Cash, AR, Inventory, Net PP&E, Goodwill on Assets. AP, Deferred Revenue, Debt, CSE on L&E. Combine all misc items into 'Other Assets' and 'Other Liabilities.'"
            }
        ]
    },
    {
        id: "interview-framework",
        title: "Interview Question Framework",
        audio: "key_rule_14__how_to_answer_interview_questions.mp3",
        icon: "&#x1F3AF;",
        color: "#a78bfa",
        cards: [
            {
                term: "Walk-the-Statements Order",
                what: "Always answer in this order: (1) Income Statement changes, (2) Cash Flow Statement changes, (3) Balance Sheet changes, (4) Verify BS balances. State your tax rate assumption upfront (usually 25%).",
                why: "This order follows the natural flow of information: IS determines Net Income, which feeds the CFS. The CFS determines Cash and other adjustments that link to the BS. Ending with the balance check proves your answer is correct.",
                example: "Interviewer: 'Depreciation increases by $20.' You: 'Assuming a 25% tax rate... IS: PTI down $20, NI down $15. CFS: NI down $15, add back $20 D&A, Cash up $5. BS: Cash up $5, PP&E down $20, Assets down $15. CSE down $15 on L&E. Both sides down $15, balanced.'"
            },
            {
                term: "Five Categories of Changes",
                what: "Most interview questions fall into 5 categories: (1) Cash IS items — straightforward NI/Cash/CSE changes. (2) Operational BS items — trickier, different behavior for increases vs decreases. (3) Non-cash IS items — NI/Cash/CSE change plus a BS item; may have Book vs Cash Tax effects. (4) Lease changes. (5) Non-operational BS/CFS items — no IS impact, just CFS and BS.",
                why: "Categorizing the question immediately tells you which statements are affected and whether there are tax complications. Category 3 (non-cash IS items) is where most people make mistakes because of Deferred Tax adjustments.",
                example: "SBC = Category 3 (non-cash IS item, not cash-tax deductible). Debt issuance = Category 5 (non-operational, no IS impact). Revenue on credit = Category 2 (operational BS item, AR increases)."
            },
            {
                term: "Intuition Check",
                what: "After walking through the mechanics, add a one-sentence 'intuition' summary explaining WHY the numbers make sense in plain English. This shows you understand the economics, not just the accounting.",
                why: "Interviewers want to see that you understand what's actually happening to the business, not just that you've memorized the steps. The intuition check differentiates candidates who truly understand from those who just drilled formulas.",
                example: "After walking through Depreciation +$20: 'Intuitively, this non-cash expense doesn't cost the company anything, but it reduces the company's taxes by $5, so Cash increases by $5.' This shows you grasp WHY Cash goes up despite an expense increasing."
            }
        ]
    }
];
