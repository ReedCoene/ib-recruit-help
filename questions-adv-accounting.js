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

    // FITB — Level 1
    { type: 'fitb', context: 'PIK Interest', question: 'PIK interest is paid by issuing more ___ rather than cash, causing the outstanding principal balance to grow.', answer: 'debt', explanation: 'PIK (Payment-in-Kind) interest accretes the debt balance instead of requiring a cash outflow. It is non-cash and added back on the Cash Flow Statement.' },
    { type: 'fitb', context: 'Equity Method', question: 'Under the equity method (20-50% ownership), you record your proportional share of the investee\'s ___ on your Income Statement.', answer: ['Net Income', 'net income'], explanation: 'Under the equity method you record % ownership × investee Net Income on your IS. You do NOT consolidate revenues. Dividends received reduce the BS investment account rather than appearing as income.' },
    { type: 'fitb', context: 'LIFO Reserve', question: 'To convert a LIFO company\'s inventory to a FIFO basis for comparison, analysts ___ the LIFO Reserve to the reported inventory.', answer: ['add', 'add back'], explanation: 'LIFO inventory is understated relative to FIFO in inflationary periods. Adding the LIFO Reserve restates inventory to approximate FIFO values, enabling apples-to-apples comparison across companies.' },
    { type: 'fitb', context: 'AFS Securities', question: 'For Available-for-Sale securities, unrealized gains and losses bypass the Income Statement and flow into ___ within equity.', answer: ['OCI', 'Other Comprehensive Income', 'AOCI'], explanation: 'AFS treatment routes mark-to-market changes through OCI / AOCI rather than Net Income. This prevents equity market swings from distorting reported EPS each quarter.' },
    { type: 'fitb', context: 'NCI and TEV', question: 'When computing TEV for a company that consolidates a majority-owned subsidiary, analysts add ___ (at fair value) to Equity Value.', answer: ['NCI', 'Noncontrolling Interest', 'noncontrolling interest'], explanation: 'Because you consolidate 100% of EBITDA but only own part of the subsidiary, you must add NCI to TEV. Otherwise the EV/EBITDA multiple would be understated.' },
    { type: 'fitb', context: 'OID', question: 'With an Original Issue Discount bond, the Book Value of debt on the Balance Sheet ___ each year until it equals Face Value at maturity.', answer: ['increases', 'rises', 'accretes'], explanation: 'OID amortization adds non-cash interest expense to the IS each year and accretes the book value of debt upward. At maturity, Book Value = Face Value.' },
    { type: 'fitb', context: 'Convertible Bond', question: 'When a convertible bond is bifurcated on the Balance Sheet, the Equity Component equals the bond proceeds minus the ___ Component.', answer: ['Debt', 'Liability', 'debt', 'liability'], explanation: 'Debt Component = PV of cash flows at the market rate for equivalent non-convertible debt. Equity (APIC) = Total Proceeds – Debt Component. The equity piece represents the value of the conversion option.' },
    { type: 'fitb', context: 'LIFO vs FIFO', question: 'LIFO is banned under ___ but permitted under U.S. GAAP.', answer: ['IFRS', 'ifrs'], explanation: 'IFRS prohibits LIFO because it produces Balance Sheet inventory values that diverge significantly from current costs. U.S. GAAP permits LIFO, which is why many U.S. companies use it for tax savings in inflationary environments.' },
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
    },

    // TF — Level 2
    { type: 'tf', context: 'Market Value of Debt', question: 'When prevailing market interest rates fall, the market value of existing fixed-rate debt rises above its book value.', answer: true, explanation: 'True. When rates fall, existing bonds paying above-market coupons become more attractive. Investors will pay a premium above face value, so market value > book value. The bond pricing inverse relationship: rates down → prices up.' },
    { type: 'tf', context: 'Equity Method', question: 'Under the equity method, dividends received from an investee increase the investor\'s Income Statement income.', answer: false, explanation: 'False. Under the equity method, dividends received are NOT additional income — they are a return of capital. Dividends reduce the BS investment account (not the IS). Income was already recognized when the investee earned it.' },
    { type: 'tf', context: 'LIFO vs FIFO', question: 'LIFO produces higher Net Income than FIFO in an inflationary environment.', answer: false, explanation: 'False. LIFO charges the most recent (most expensive) inventory to COGS in inflation, which increases COGS and decreases Net Income. FIFO uses older, cheaper costs → lower COGS → higher Net Income. LIFO\'s benefit is lower cash taxes, not higher income.' },
    { type: 'tf', context: 'Face vs Book Value', question: 'A company\'s Book Value of Debt on the Balance Sheet is always equal to its Face Value.', answer: false, explanation: 'False. Book Value differs from Face Value due to unamortized issuance fees, OID discounts or premiums, and PIK interest accruals. At maturity these converge, but during a debt\'s life they typically differ.' },
    { type: 'tf', context: 'PIK Interest', question: 'PIK interest paid on a bond reduces the company\'s cash balance in the period it is paid.', answer: false, explanation: 'False. PIK interest is paid by issuing more debt, not cash. There is zero cash outflow. The outstanding debt principal increases by the PIK amount each period. On the CFS, PIK interest is a non-cash add-back.' },
    { type: 'tf', context: 'Consolidation', question: 'A parent company that owns 60% of a subsidiary consolidates 60% of the subsidiary\'s revenue on its Income Statement.', answer: false, explanation: 'False. Full consolidation (>50%) means the parent consolidates 100% of the subsidiary\'s revenues, expenses, assets, and liabilities — then deducts the minority\'s share of Net Income as NCI at the bottom of the IS.' },
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
    },

    // TF — Level 3
    { type: 'tf', context: 'Apply: OID', question: 'OID amortization is a cash expense that reduces operating cash flow on the Cash Flow Statement.', answer: false, explanation: 'False. OID amortization is non-cash — it appears as additional interest expense on the IS but is added back on the CFS (just like D&A). It increases book value of debt over time with no actual cash outflow.' },
    { type: 'tf', context: 'Apply: Loss on Debt Extinguishment', question: 'If a company repays debt early when unamortized issuance fees remain, it records a Loss on Debt Extinguishment on the Income Statement.', answer: true, explanation: 'True. The remaining unamortized issuance fees must be written off immediately upon early repayment. This loss appears on the IS and is then added back as a non-cash item on the CFS.' },
    { type: 'tf', context: 'Apply: Convertible Bond', question: 'When a convertible bond converts into shares before maturity, the company records new cash proceeds on the Cash Flow Statement.', answer: false, explanation: 'False. Conversion into shares is a non-cash transaction — no cash changes hands. The liability and equity components of the convertible bond are transferred into Common Shareholders\' Equity. The CFS does not show a direct cash impact.' },

    // FITB — Level 3
    { type: 'fitb', context: 'Apply: OID', question: 'A $100M bond issued at $95M has an OID of $5M. Over a 5-year life, the annual non-cash OID amortization is $___ per year.', answer: ['1', '$1M', '1M', '1.0'], explanation: 'OID = $5M / 5 years = $1M per year (straight-line). Each year, $1M of non-cash interest expense is recorded, and the book value of debt increases by $1M toward the $100M face value at maturity.' },
    { type: 'fitb', context: 'Apply: Equity Method', question: 'Parent owns 30% of Sub. Sub earns $100M NI and pays $40M in dividends. Cash dividends received by Parent = $___.', answer: ['12', '$12M', '12M'], explanation: '30% × $40M = $12M in cash dividends received. The BS investment account increases by 30% × $100M = $30M and decreases by $12M (dividends), for a net increase of $18M.' },
    { type: 'fitb', context: 'Apply: Convertible Bond', question: 'A $500M convertible bond is bifurcated: Debt Component (PV at market rate) = $415M. The Equity Component (APIC) = $___.', answer: ['85', '$85M', '85M'], explanation: 'Equity Component = Proceeds – Debt Component = $500M – $415M = $85M. This $85M goes to APIC and represents the value of the conversion option granted to bondholders.' },
    { type: 'fitb', context: 'Apply: NCI', question: 'A parent consolidates 100% of a subsidiary\'s EBITDA but only owns 70%. For TEV purposes, analysts add ___ (at fair value) to Equity Value.', answer: ['NCI', 'Noncontrolling Interest', 'noncontrolling interest', '30% NCI'], explanation: 'The 30% minority interest is a claim you must compensate to control the entire subsidiary. Adding NCI to TEV ensures the EV/EBITDA multiple correctly reflects the full economic cost of the 100% EBITDA you report.' },
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
    },

    // TF — Level 4
    { type: 'tf', context: 'Analyze: Pension TEV', question: 'An underfunded pension is treated as a debt-like item and added to TEV when computing valuation multiples such as EV/EBITDA.', answer: true, explanation: 'True. The net unfunded pension liability (obligation – assets) represents future cash commitments similar to debt. Adding it to TEV prevents artificially low EV/EBITDA multiples for companies with large pension obligations.' },
    { type: 'tf', context: 'Analyze: LIFO to FIFO Conversion', question: 'When converting a LIFO company\'s financial statements to FIFO for comparability, analysts subtract the LIFO Reserve from the balance sheet inventory.', answer: false, explanation: 'False. Analysts ADD the LIFO Reserve to inventory to convert to FIFO. LIFO inventory is understated versus FIFO in inflation; the LIFO Reserve bridges this gap. Subtracting it would make inventory even lower, which is the opposite of the goal.' },
    { type: 'tf', context: 'Analyze: Trading vs AFS', question: 'A company with a large portfolio of equity investments will report more volatile quarterly earnings if those securities are classified as Trading rather than AFS.', answer: true, explanation: 'True. Trading securities flow unrealized gains/losses through Net Income each quarter. AFS securities route the same changes through OCI, leaving Net Income unaffected. The income statement volatility difference can be substantial for large portfolios.' },
    { type: 'tf', context: 'Analyze: SBC Excess Tax Benefit', question: 'When stock options are exercised and their value has increased since grant, the company receives an additional cash tax benefit beyond what was originally expensed.', answer: true, explanation: 'True. The tax deduction is based on the intrinsic value at exercise, which may exceed the original book expense. The incremental tax savings (excess tax benefit) flows through the CFS as additional operating cash and reduces income taxes paid.' },

    // FITB — Level 4
    { type: 'fitb', context: 'Analyze: Pension', question: 'A company\'s pension obligation is $700M and pension assets are $500M. The net pension liability added to TEV is $___.', answer: ['200', '$200M', '200M'], explanation: 'Net pension liability = Obligation – Assets = $700M – $500M = $200M. Only the underfunded portion is debt-like. Adding the full $700M would double-count the assets that already offset part of the obligation.' },
    { type: 'tf', context: 'Analyze: OID and Book Value', question: 'At the maturity of an OID bond, the book value of debt on the Balance Sheet equals the bond\'s face value.', answer: true, explanation: 'True. OID amortization accretes the book value upward each year from the initial discount price toward face value. By maturity, all discount has been amortized and Book Value = Face Value.' },
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
    },

    // TF — Level 5
    { type: 'tf', context: 'Evaluate: LIFO Tax Strategy', question: 'A U.S. company using LIFO in an inflationary environment pays higher cash taxes than if it used FIFO.', answer: false, explanation: 'False. LIFO produces higher COGS → lower taxable income → lower cash taxes. This is the primary reason U.S. companies elect LIFO. The trade-off is lower reported Net Income and an understated inventory balance — but the cash tax savings are real.' },
    { type: 'tf', context: 'Evaluate: Consolidation at TEV', question: 'If a parent company consolidates 100% of a subsidiary\'s EBITDA but does not add NCI to TEV, the resulting EV/EBITDA multiple will be overstated.', answer: false, explanation: 'False — the multiple will be UNDERSTATED. Leaving NCI out understates TEV (the numerator), while EBITDA (the denominator) already includes 100% of the subsidiary. A lower TEV relative to full EBITDA gives an artificially low multiple, making the deal look cheaper than it is.' },
    { type: 'tf', context: 'Evaluate: Pension Expense', question: 'Most components of Pension Expense on the Income Statement represent actual cash payments made to retirees in that period.', answer: false, explanation: 'False. Pension IS expense is mostly non-cash — it includes Service Cost (accrual of future obligations), Interest Cost (PV unwinding), and amortization of actuarial gains/losses. Actual cash outflows are the Employer Contributions, which appear on the CFS.' },
    { type: 'tf', context: 'Evaluate: Equity Method Revenue', question: 'Under the equity method, the investor company consolidates its ownership percentage of the investee\'s revenue on its own Income Statement.', answer: false, explanation: 'False. The equity method records only the investor\'s share of net income as a single line item near the bottom of the IS. Revenues are never consolidated under the equity method — full revenue consolidation only occurs when ownership exceeds 50%.' },
    { type: 'tf', context: 'Evaluate: AFS Gain Realization', question: 'When an AFS security is sold, the previously unrealized gain that was sitting in AOCI is reclassified and recognized in Net Income.', answer: true, explanation: 'True. Upon sale, the cumulative unrealized gain in AOCI is "recycled" into the Income Statement as a realized gain. This is the point at which it affects Net Income and tax. Until sale, it only appears in AOCI within equity.' },
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
