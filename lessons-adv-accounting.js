// ============================================================
// LESSONS — More Advanced Accounting (BIWS 04-03)
// ============================================================
const LESSONS_ADV_ACCOUNTING = [
    {
        id: 'debt-accounting',
        title: 'Debt: Book Value, Market Value & OID',
        icon: '&#x1F4D0;',
        color: '#6366f1',
        audio: "adv_accounting_overview_compressed.mp3",
        cards: [
            {
                term: 'Book Value vs. Market Value of Debt',
                what: 'Book Value (Face/Par Value): the amount the company must repay at maturity. Market Value: what investors would pay today for that debt in the secondary market. They diverge when interest rates change or when the company\'s credit quality changes.',
                why: 'Interest rates and credit risk constantly change. A bond paying 5% fixed, issued when rates were 5%, is now worth less if rates rise to 8% (its payments are below market). In IB, you usually use Book Value of Debt for TEV calculations unless instructed otherwise.',
                example: '$1,000 face value bond, 5% coupon. Interest rates rise to 8%. Investors now discount these payments at 8% → Market Value ≈ $750. Book Value = $1,000 (what the company still owes). For TEV, you\'d add $1,000 (book), not $750 (market).'
            },
            {
                term: 'Original Issue Discount (OID)',
                what: 'When debt is issued at a price BELOW face value, the discount is OID. The issuer receives less than face but must repay the full face. The OID is amortized (added to interest expense) over the life of the debt, so the effective interest rate > coupon rate.',
                why: 'OID creates a non-cash interest expense each period (the accrual of the discount). This reduces Book Income but doesn\'t affect Cash — leading to a timing difference that creates a Deferred Tax Liability.',
                example: '$1,000 face bond issued at $900 (OID = $100, 5-year life). Issuer receives $900 cash but must repay $1,000. Each year: $20 of OID amortized → added to interest expense on IS. Non-cash: no cash outflow. Creates DTA/DTL adjustments each year.'
            }
        ]
    },
    {
        id: 'convertibles',
        title: 'Convertible Bond Accounting',
        icon: '&#x1F501;',
        color: '#10b981',
        audio: "adv_accounting_overview_compressed.mp3",
        cards: [
            {
                term: 'Convertible Bond Overview',
                what: 'Debt that can convert into equity at the holder\'s option, usually at a predetermined conversion price. Hybrid instrument: part debt (pays interest), part equity option. Attracts investors who want downside protection (bond) with upside potential (equity).',
                why: 'Companies issue convertibles to raise capital at a lower interest rate than straight debt (investors accept less yield for the conversion option). The accounting splits the instrument between debt and equity components on the balance sheet.',
                example: 'Company issues $500M convertible bond at 2% coupon vs. 5% for equivalent straight debt. Investors accept 2% because they get a free call option on the stock. If stock rises >$50 (conversion price), they convert to equity. If stock falls, they keep the bond and collect 2% interest.'
            },
            {
                term: 'Convertible Bond on the Balance Sheet',
                what: 'Bifurcated (split) into: (1) Debt component: present value of the cash flows discounted at the market rate for straight debt. (2) Equity component (APIC): residual value = proceeds minus debt component. The debt component accretes to face value over time.',
                why: 'GAAP requires recognizing the economic substance: part of the proceeds compensated investors for the debt, part for the equity option. Separating them accurately reflects the costs of each instrument and avoids misstating leverage.',
                example: 'Issue $500M convertible at 2%, market rate for straight debt = 5%. PV of $500M + coupons at 5% = $370M (debt component). Equity component = $500M – $370M = $130M in APIC. Total: BS shows $370M Debt + $130M Equity = $500M total. Debt accretes to $500M by maturity.'
            }
        ]
    },
    {
        id: 'equity-method',
        title: 'Equity Method & Consolidation',
        icon: '&#x1F4CA;',
        color: '#f59e0b',
        audio: "adv_accounting_overview_compressed.mp3",
        cards: [
            {
                term: 'Equity Method (20-50% Ownership)',
                what: 'Used when a company owns 20-50% of another company ("equity investment"). On the IS: record your % share of the investee\'s Net Income as "Gain/Loss from Equity Investments." On the BS: record the investment at cost + cumulative share of NI – dividends received.',
                why: 'At 20-50%, you have "significant influence" but not control. You don\'t consolidate the full revenue/expenses, but you do recognize your proportional share of profits/losses. The investment account on the BS grows/shrinks with investee performance.',
                example: 'You own 30% of Company B. B reports $100M NI. Your IS: +$30M "Gain from Equity Investment." Your BS: Investment in Company B increases by $30M. If B pays $20M dividend, your BS investment decreases by $20M (cash increases by $20M) — dividends are returns OF capital, not income.'
            },
            {
                term: 'Full Consolidation (>50% Ownership)',
                what: 'When you own >50%, you include 100% of the subsidiary\'s revenue, expenses, and assets/liabilities in your financial statements. If you own less than 100%, you add a "Noncontrolling Interest (NCI)" on the equity side to reflect the minority shareholders\' claim.',
                why: 'You control the subsidiary, so GAAP requires you to consolidate it fully. But you only OWN part of it — hence the NCI balance sheet entry for the piece you don\'t own. This creates the obligation to add NCI to TEV when valuing companies.',
                example: 'You own 80% of Subsidiary. You consolidate 100% of Sub\'s $200M revenue and $50M NI. NCI = 20% × $50M = $10M (the minority share). Your equity only gets $40M. On the BS: $10M NCI balance grows each year and is shown separately in equity.'
            }
        ]
    },
    {
        id: 'sbc-unrealized',
        title: 'Stock-Based Compensation & Unrealized Gains',
        icon: '&#x1F4B3;',
        color: '#ec4899',
        audio: "adv_accounting_overview_compressed.mp3",
        cards: [
            {
                term: 'Stock-Based Compensation (SBC) — Advanced',
                what: 'When stock options are exercised, there is an "Excess Tax Benefit" if the deduction for tax purposes (intrinsic value at exercise) > book expense (fair value at grant). This flows through the CFS as an additional tax benefit, increasing Cash Flow from Operations.',
                why: 'Book expense was set at grant-date fair value. Tax deduction = intrinsic value at exercise (often higher if stock appreciated). The tax savings exceeds what was originally recorded, creating additional cash flow. Understanding this nuance is important for advanced financial modeling.',
                example: 'Option granted when stock = $10 (book expense = $10). Exercised when stock = $25 (tax deduction = $25). Excess tax benefit = ($25 – $10) × 25% tax rate = $3.75 per option. This $3.75 per share in extra tax savings flows through CFS as a financing-related benefit.'
            },
            {
                term: 'Unrealized Gains/Losses on Securities',
                what: 'Financial investments classified as "Trading" (mark-to-market each period, gains/losses flow through IS and affect Net Income) or "Available-for-Sale" (AFS, mark-to-market but gains/losses go to OCI, NOT Net Income until sold).',
                why: 'The classification matters enormously for IS stability. Trading portfolio fluctuations create volatile earnings. AFS gains bypass the IS (go to AOCI in equity) until realized, making earnings smoother. Analysts often adjust for unrealized gains/losses when assessing normalized earnings.',
                example: 'Company holds $100M in AFS securities. Fair value rises to $120M. Under AFS rules: +$20M unrealized gain goes to OCI (equity increases), NOT the IS. Net Income unchanged. If it were a Trading security: +$20M goes to IS, inflating Net Income by $20M × (1–tax rate).'
            }
        ]
    },
    {
        id: 'inventory-pensions',
        title: 'Inventory Methods & Pensions',
        icon: '&#x1F3ED;',
        color: '#8b5cf6',
        audio: "adv_accounting_overview_compressed.mp3",
        cards: [
            {
                term: 'FIFO vs. LIFO vs. Weighted Average',
                what: 'FIFO (First-In, First-Out): oldest inventory costs flow through COGS. LIFO (Last-In, First-Out): newest inventory costs flow through COGS (allowed only under US GAAP). Weighted Average: blended cost for all units.',
                why: 'In inflationary environments: LIFO → higher COGS → lower taxes → less cash paid in taxes. FIFO → lower COGS → higher taxable income → more taxes. The choice affects reported profits, taxes, and inventory balance sheet values significantly.',
                example: 'Buy 100 units at $10, then 100 units at $12. Sell 100 units. FIFO COGS = $10 × 100 = $1,000. LIFO COGS = $12 × 100 = $1,200. LIFO saves $200 in COGS → lower taxable income → lower taxes. But LIFO Inventory BS = $1,000 (understated). Analysts adjust using the LIFO Reserve to compare companies.'
            },
            {
                term: 'Pension Accounting Overview',
                what: 'Defined Benefit Pension: company promises fixed retirement payments. Pension Obligation on BS = PV of future payments. Pension Assets = invested fund assets. If Assets < Obligation → Underfunded pension → net liability on BS. If Assets > Obligation → Overfunded → net asset.',
                why: 'Pensions are debt-like obligations — the company MUST make future payments to retirees. An underfunded pension is economically similar to debt and is added to TEV in acquisition analysis. Pension expense on the IS includes service cost, interest cost, and expected return on assets.',
                example: 'Pension Obligation: $500M (PV of future retiree payments). Pension Assets: $400M. Net Pension Liability: $100M (underfunded). For TEV calculation: add $100M to TEV. The company will need to fund this $100M gap over time, reducing future FCF available to investors.'
            }
        ]
    }
];
