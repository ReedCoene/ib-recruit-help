// ============================================================
// QUESTIONS — More Advanced Accounting (BIWS 04-03)
// ============================================================

const adv_level1 = [
    { type: 'flashcard', term: 'Book Value of Debt', definition: 'Face/Par Value — the amount the company contractually owes and must repay at maturity. Used for TEV calculations in most IB analysis (not market value).' },
    { type: 'flashcard', term: 'Market Value of Debt', definition: 'What investors would pay for the debt today in the secondary market. Diverges from book value when interest rates or credit quality change. Falls when rates rise; falls when credit deteriorates.' },
    { type: 'flashcard', term: 'Original Issue Discount (OID)', definition: 'Debt issued below face value. The discount is amortized as non-cash interest expense over the debt\'s life. Effective interest rate > coupon rate. Creates timing difference → DTA or DTL.' },
    { type: 'flashcard', term: 'Convertible Bond', definition: 'Hybrid debt/equity instrument. Pays interest like debt but can convert to equity at the holder\'s option at a preset conversion price. Lower coupon than straight debt; company gets cheap financing in exchange for the conversion option.' },
    { type: 'flashcard', term: 'Convertible Bond — Balance Sheet Split', definition: 'Bifurcated under GAAP: (1) Debt component = PV of cash flows at market rate for straight debt; (2) Equity component (APIC) = proceeds minus debt component. Debt portion accretes to face value by maturity.' },
    { type: 'flashcard', term: 'PIK (Payment-in-Kind) Interest', definition: 'Interest that is paid by issuing more debt rather than cash. No cash outflow; instead, the outstanding principal grows. Used in highly leveraged deals. PIK interest is non-cash → added back on CFS.' },
    { type: 'flashcard', term: 'Equity Method (20-50%)', definition: 'For 20-50% ownership stakes. Record proportional share of investee NI on your IS. Investment on BS increases with NI, decreases with dividends received. No revenue consolidation.' },
    { type: 'flashcard', term: 'Full Consolidation (>50%)', definition: 'For >50% ownership. Consolidate 100% of subsidiary\'s revenue/expenses/assets/liabilities. Add Noncontrolling Interest (NCI) for the minority portion you don\'t own.' },
    { type: 'flashcard', term: 'Noncontrolling Interest (NCI)', definition: 'Minority shareholders\' claim in a consolidated subsidiary. Appears in equity on the BS. Added to TEV when valuing companies (you consolidate 100% of EBITDA but only own part).' },
    { type: 'flashcard', term: 'FIFO (First-In, First-Out)', definition: 'Oldest inventory costs go to COGS first. In inflation: lower COGS, higher Net Income, higher taxes vs. LIFO. Allowed under both US GAAP and IFRS.' },
    { type: 'flashcard', term: 'LIFO (Last-In, First-Out)', definition: 'Newest inventory costs go to COGS first. In inflation: higher COGS, lower taxable income, lower cash taxes. Only allowed under US GAAP (banned under IFRS). Creates lower inventory BS values.' },
    { type: 'flashcard', term: 'LIFO Reserve', definition: 'The difference between LIFO inventory value and what it would be under FIFO. Disclosed in footnotes. Analysts add LIFO Reserve to LIFO inventory to convert to FIFO for comparable analysis.' },
    { type: 'flashcard', term: 'Defined Benefit Pension', definition: 'Company promises fixed retirement payments to employees. Pension Obligation = PV of future payments. Pension Assets = invested fund. Underfunded (assets < obligation) → net pension liability on BS → added to TEV.' },
    { type: 'flashcard', term: 'Trading Securities', definition: 'Financial investments marked-to-market each period. Unrealized gains/losses flow through the Income Statement. Creates earnings volatility.' },
    { type: 'flashcard', term: 'Available-for-Sale (AFS) Securities', definition: 'Financial investments marked-to-market, but unrealized gains/losses go to Other Comprehensive Income (OCI), bypassing the Income Statement until sold. Reduces earnings volatility.' },
    { type: 'flashcard', term: 'Other Comprehensive Income (OCI)', definition: 'Catches unrealized gains/losses, pension adjustments, and currency translation adjustments that bypass the IS. Accumulated in AOCI within equity. Not included in Net Income.' },
    { type: 'flashcard', term: 'SBC Excess Tax Benefit', definition: 'When stock options are exercised, the tax deduction (intrinsic value at exercise) may exceed the original book expense. The extra tax savings = excess tax benefit. Flows through CFS as additional operating cash.' },
];

const adv_level2 = [
    {
        type: 'mc',
        context: 'Book vs. Market Value of Debt',
        question: 'Interest rates rise after a company issues fixed-rate debt. What happens to the market value of that debt and why?',
        options: [
            'Market value rises — higher rates mean higher value for all bonds',
            'Market value falls — investors can now earn a higher rate elsewhere, making the existing lower-rate bond less attractive, so they\'ll only buy it at a discount',
            'Market value is unchanged — book value always equals market value for debt',
            'Market value rises only if the company\'s credit rating improves simultaneously'
        ],
        correct: 1,
        explanation: 'When market rates rise, existing fixed-rate bonds become less attractive (they pay below-market rates). Investors discount the future payments at the new, higher market rate → lower PV → lower market value. This is the basic bond pricing inverse relationship: rates up → bond prices down.'
    },
    {
        type: 'mc',
        context: 'Equity Method',
        question: 'You own 35% of Company B. B reports $80M Net Income and pays $20M in dividends. How does this affect YOUR Income Statement and Balance Sheet?',
        options: [
            'IS: +$28M (35% of NI). BS: Investment increases by $28M, then decreases by $7M (35% of dividends) → net +$21M.',
            'IS: No impact. BS: Investment increases by $7M (35% of dividends received).',
            'IS: +$28M. BS: Investment increases by $28M (dividends received as cash, investment unchanged).',
            'IS: +$80M (full consolidation since you\'re a significant investor). BS: $80M income.'
        ],
        correct: 0,
        explanation: 'Equity Method: IS gets your % of NI = 35% × $80M = +$28M. BS: Investment += $28M. Then dividends reduce the investment (not income): 35% × $20M = $7M received as cash, investment decreases by $7M. Net change in investment = +$28M – $7M = +$21M. Dividends are a return of capital, not additional income under the equity method.'
    },
    {
        type: 'mc',
        context: 'LIFO vs. FIFO in Inflation',
        question: 'In an inflationary environment, a company switches from FIFO to LIFO. What is the immediate effect on COGS, Net Income, and Cash Taxes?',
        options: [
            'COGS decreases, Net Income increases, Cash Taxes increase',
            'COGS increases, Net Income decreases, Cash Taxes decrease — this is why US companies prefer LIFO: lower taxable income',
            'No effect — inventory method affects only the Balance Sheet, not the Income Statement',
            'COGS increases, Net Income decreases, Cash Taxes increase (higher expenses mean more taxes)'
        ],
        correct: 1,
        explanation: 'LIFO uses the newest (most expensive in inflation) units as COGS → COGS is higher → Taxable Income and Net Income are lower → Cash Taxes decrease. This is the primary reason US companies use LIFO: real cash tax savings. The trade-off is lower reported Net Income and an understated inventory balance on the BS.'
    }
];

const adv_level3 = [
    {
        type: 'mc',
        context: 'Apply: OID',
        question: 'Company issues a $500M, 5-year bond at $450M (OID = $50M). Annual coupon cash payment = $22.5M (5% of $450M proceeds). What is the annual non-cash interest accrual and total annual interest expense?',
        options: [
            'Non-cash OID = $10M/yr. Total interest expense = $22.5M + $10M = $32.5M/yr.',
            'Non-cash OID = $50M/yr. Total interest expense = $72.5M/yr.',
            'Non-cash OID = $5M/yr. Total interest expense = $27.5M/yr.',
            'No non-cash component — OID is only recognized at maturity'
        ],
        correct: 0,
        explanation: 'OID = $50M over 5 years = $10M/year amortized (straight-line simplification). Coupon cash payment = $22.5M/year. Total IS interest expense = $22.5M + $10M = $32.5M. On the CFS, $10M is added back (non-cash). On the BS, the debt book value increases by $10M/year from $450M toward $500M at maturity.'
    },
    {
        type: 'mc',
        context: 'Apply: NCI Consolidation',
        question: 'You own 75% of a subsidiary. Subsidiary EBITDA = $200M. What EBITDA do you report, and what NCI adjustment is needed for TEV?',
        options: [
            'Report $150M EBITDA (75%). No NCI needed for TEV since you don\'t consolidate 100%.',
            'Report $200M EBITDA (100%). NCI in TEV = 25% × fair value of subsidiary.',
            'Report $200M EBITDA but reduce Net Income by NCI ($50M). TEV adjustment = NCI fair value.',
            'Report $150M EBITDA (75%) and add $50M NCI to TEV.'
        ],
        correct: 1,
        explanation: 'Full consolidation: you report 100% of EBITDA ($200M) on your IS and BS. But you only own 75%. For TEV, the 25% NCI represents a claim by minority shareholders that you must compensate to acquire the whole subsidiary. TEV = Equity Value + Debt + NCI (fair value) – Cash. Reporting 100% EBITDA but not adding NCI to TEV would understate the effective multiple you\'re paying.'
    }
];

const adv_level4 = [
    {
        type: 'mc',
        context: 'Analyze: Pension in TEV',
        question: 'A company has a $200M underfunded pension (obligation $700M, assets $500M). How does this affect TEV-based multiples?',
        options: [
            'No effect — pensions are only relevant for credit analysis, not equity valuation',
            'Add $200M to TEV when computing multiples (the unfunded portion is debt-like). Using a lower TEV that ignores the pension understates the true acquisition cost.',
            'Subtract $200M from TEV — pension liabilities reduce the company\'s value',
            'Add $700M (full obligation) to TEV since the acquirer assumes all pension liabilities'
        ],
        correct: 1,
        explanation: 'The underfunded portion ($200M) represents a real cash obligation — the company will need to fund this gap with future cash flows, reducing FCF available to investors. Economically, it\'s debt-like. For accurate TEV: add the net pension liability. Adding the full $700M would overstate the cost because there are $500M of pension assets that will pay some retirees. Net unfunded deficit = $200M is the right adjustment.'
    }
];

const adv_level5 = [
    {
        type: 'mc',
        context: 'Evaluate: AFS vs. Trading',
        question: 'A company holds $100M of equity investments. If classified as "Trading," Q1 saw unrealized gains of $30M. If classified as "AFS," same gains occurred. Which classification produces more stable reported earnings and why?',
        options: [
            'Trading produces more stable earnings — mark-to-market eliminates large year-end surprises',
            'AFS produces more stable reported Net Income — unrealized gains go to OCI (not IS), so quarterly EPS is unaffected by market fluctuations',
            'Both produce identical earnings — GAAP requires equal treatment regardless of classification',
            'Neither classification matters because unrealized gains are always excluded from operating metrics'
        ],
        correct: 1,
        explanation: 'AFS: unrealized gains/losses → OCI → equity on BS, bypassing Net Income. Reported EPS is stable and unaffected by equity market swings. Trading: unrealized gains/losses → IS → directly inflates or depresses reported Net Income each quarter. Banks and insurance companies with large investment portfolios strongly prefer AFS to avoid the earnings volatility that investors hate.'
    }
];

const adv_level6 = [
    {
        type: 'mc',
        context: 'Create: Convertible Bond',
        question: '$500M convertible bond, 2% coupon. Market rate for straight debt = 6%. PV of $500M face + $10M annual coupon for 5 years at 6% = ~$415M. What are the debt and equity components on the BS?',
        options: [
            'Debt: $415M. Equity (APIC): $85M. Total: $500M.',
            'Debt: $500M. Equity (APIC): $0M. Convertibles are recorded at face value.',
            'Debt: $250M. Equity: $250M. Always split 50/50.',
            'Debt: $85M. Equity: $415M. Equity component dominates.'
        ],
        correct: 0,
        explanation: 'Bifurcation: Debt component = PV of all cash flows at market rate = ~$415M. Equity (APIC) = Proceeds – Debt = $500M – $415M = $85M. The $85M equity piece represents the value of the conversion option. Over 5 years, the $415M debt accretes toward $500M through non-cash interest accruals. The company\'s effective interest rate = 6% (market rate), not the 2% coupon investors receive in cash.'
    }
];

const adv_order = [
    {
        level: 2,
        question: 'Rank these inventory methods from highest to lowest COGS (and lowest to highest Net Income) in an inflationary environment:',
        items: [
            '1. LIFO — highest COGS (uses newest, most expensive units first)',
            '2. Weighted Average — middle COGS (blended cost)',
            '3. FIFO — lowest COGS (uses oldest, cheapest units first)'
        ],
        explanation: 'In inflation: newer units cost more. LIFO charges the most recent (expensive) units to COGS → highest COGS → lowest NI → lowest tax. FIFO charges the oldest (cheapest) units → lowest COGS → highest NI → highest tax. Weighted Average is between. This is why US companies often use LIFO — real tax savings.'
    },
    {
        level: 3,
        question: 'Order the accounting treatment for an equity method investment over one year:',
        items: [
            '1. Record initial investment at cost on your BS',
            '2. At year-end, record your % share of investee\'s Net Income on your IS',
            '3. Increase the investment balance on your BS by the same % of Net Income',
            '4. If investee pays dividends, receive cash and reduce the BS investment by your % share',
            '5. Net BS change = % of NI – % of dividends received'
        ],
        explanation: 'The equity method investment account tracks your economic interest: it grows with profits (you\'re getting richer) and shrinks with dividends (capital returned to you). The IS recognizes your share of income whether or not dividends are paid. Dividends are returns of previously recognized income, not new income.'
    }
];

const adv_fillin = [
    {
        level: 4,
        type: 'fillin',
        scenario: 'You own 40% of Company B. B: Revenue $500M, NI $60M, Dividends paid $20M. Calculate the impact on YOUR financial statements.',
        is_fields: [
            { label: 'Your IS: Gain from Equity Investment ($M)', answer: 24, hint: '40% × $60M NI = $24M.' },
            { label: 'Your IS: Revenue recognized ($M)', answer: 0, hint: 'Under equity method (not consolidation), you do NOT record the investee\'s revenue.' }
        ],
        cfs_fields: [
            { label: 'Cash dividends received ($M)', answer: 8, hint: '40% × $20M dividends paid = $8M cash to you.' },
            { label: 'Net change in Investment BS account ($M)', answer: 16, hint: '+$24M NI – $8M dividends = +$16M net.' }
        ],
        bs_fields: [
            { label: 'Investment account change ($M)', answer: 16, hint: 'Starts at cost, +$24M NI share, –$8M dividends = net +$16M.' },
            { label: 'Cash received ($M)', answer: 8, hint: 'Cash dividends from investee.' }
        ],
        explanation: 'Equity method: IS gets $24M (40% × $60M NI). No revenue consolidation. Cash dividends = $8M (40% × $20M). Investment BS: +$24M – $8M = +$16M net increase. The investment account is the "running total" of your economic interest — it goes up when the investee makes money and down when they distribute cash back to you.'
    }
];

const QUESTIONS_ADV_ACCOUNTING = {
    1: adv_level1,
    2: adv_level2,
    3: adv_level3,
    4: adv_level4,
    5: adv_level5,
    6: adv_level6,
    order: adv_order,
    fillin: adv_fillin
};
