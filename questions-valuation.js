// ============================================================
// QUESTIONS — Valuation & DCF Analysis (BIWS 04-05)
// ============================================================

const val_level1 = [
    { type: 'flashcard', term: 'DCF Analysis', definition: 'Discounted Cash Flow — intrinsic valuation method. Project future FCFF, discount at WACC, add Terminal Value, get Implied Enterprise Value. The only "first principles" valuation method.' },
    { type: 'flashcard', term: 'FCFF (Unlevered FCF)', definition: 'Free Cash Flow to Firm = EBIT(1–t) + D&A – CapEx – ΔWC. Cash for ALL investors before financing flows. Used in DCF discounted at WACC to get Enterprise Value.' },
    { type: 'flashcard', term: 'WACC', definition: 'Weighted Average Cost of Capital = % Equity × Cost of Equity + % Debt × Cost of Debt × (1–t). The discount rate in a DCF. Represents the blended required return for all investors.' },
    { type: 'flashcard', term: 'Cost of Equity (CAPM)', definition: 'Risk-Free Rate + Beta × Equity Risk Premium. E.g.: 4% + 1.1 × 5.5% = 10.05%. The annual return equity investors require to own the stock.' },
    { type: 'flashcard', term: 'Risk-Free Rate', definition: 'Typically the yield on 10-year US Treasury bonds. Represents the return on a theoretically "zero-risk" investment. Baseline for all other required returns.' },
    { type: 'flashcard', term: 'Beta', definition: 'Measures a stock\'s sensitivity to market movements. Beta=1: moves in line with market. Beta>1: more volatile than market. Beta<1: less volatile. Used in CAPM to calculate Cost of Equity.' },
    { type: 'flashcard', term: 'Equity Risk Premium (ERP)', definition: 'The extra return investors demand for owning equities vs. risk-free assets. Historically 5-6%. Compensates for the uncertainty and volatility of equity returns vs. guaranteed government bond returns.' },
    { type: 'flashcard', term: 'Levered Beta', definition: 'Observed market Beta that reflects both business risk and financial risk (from leverage). Must be "unlevered" to remove the capital structure effect before comparing across companies.' },
    { type: 'flashcard', term: 'Unlevered Beta (Asset Beta)', definition: 'Levered Beta / (1 + (1–Tax Rate) × D/E). Removes the leverage effect to isolate pure business risk. Then re-levered at the target capital structure to get the correct Beta for CAPM.' },
    { type: 'flashcard', term: 'Terminal Value (Gordon Growth Model)', definition: 'TV = FCF(n+1) / (WACC – g). Value of all cash flows beyond the projection period assuming constant growth rate g. Typically 60-80% of total DCF value.' },
    { type: 'flashcard', term: 'Terminal Growth Rate (g)', definition: 'The assumed perpetual FCF growth rate after the projection period. Must be < WACC and ≤ long-run GDP growth (2-4%). The single most sensitive assumption in a DCF.' },
    { type: 'flashcard', term: 'Exit Multiple Method', definition: 'Terminal Value = EBITDA(n) × Exit Multiple. Alternative to Gordon Growth. Uses a market-based multiple (e.g., 8x TEV/EBITDA) to cap the terminal value. Sanity check against Gordon Growth.' },
    { type: 'flashcard', term: 'Public Comparable Companies (Comps)', definition: 'Relative valuation: select similar public companies, calculate their multiples (TEV/EBITDA, P/E), apply median to target. Market-based and real-time but assumes the market is fairly pricing peers.' },
    { type: 'flashcard', term: 'Precedent Transactions', definition: 'Relative valuation using completed M&A deals. Typically 20-40% higher than public comps due to control premium. Most relevant for M&A advisory work.' },
    { type: 'flashcard', term: 'Control Premium', definition: 'The premium an acquirer pays above the public market price to gain control of a company. Historically 20-40%. Reflects expected synergies and the value of controlling the business outright.' },
    { type: 'flashcard', term: 'Football Field Chart', definition: 'A horizontal bar chart showing valuation ranges from multiple methods (DCF, comps, precedents, 52-week range). Used to present a defensible valuation range to boards and management.' },
    { type: 'flashcard', term: 'NOPAT', definition: 'Net Operating Profit After Taxes = EBIT × (1 – Tax Rate). The starting point for FCFF calculation. Strips out capital structure effects to measure pure operational profitability after taxes.' },
    { type: 'flashcard', term: 'Sensitivity Analysis', definition: 'Tests how DCF value changes when key assumptions (WACC, terminal growth rate) vary. Typically shown as a 2-dimensional table: e.g., WACC from 8-12% vs. g from 1-4%. Reveals the "range of reasonable outcomes."' },
    { type: 'flashcard', term: 'DCF Sensitivity to Terminal Growth Rate', definition: 'A 1% change in terminal growth rate typically changes implied value by 15-25%. The most sensitive assumption in any DCF. Always present DCF results in a range, not a single number.' },
    { type: 'flashcard', term: 'LBO as a DCF', definition: 'An LBO model is essentially a DCF from the private equity firm\'s perspective: invest equity today, receive cash flows over the hold period, sell the company. The "discount rate" is the targeted IRR.' },
];

const val_level2 = [
    {
        type: 'mc',
        context: 'DCF vs. Comps',
        question: 'When would a DCF analysis produce a HIGHER implied value than comparable companies analysis?',
        options: [
            'When the company\'s WACC is higher than peers',
            'When the company has stronger long-term growth prospects than what current market multiples reflect, or when the market is temporarily depressing the peer group',
            'When the company has more debt than its peers',
            'When the terminal growth rate equals the WACC'
        ],
        correct: 1,
        explanation: 'DCF reflects YOUR forecast for long-run growth; comps reflect what the MARKET currently prices in. If you believe the company\'s long-term FCF growth will outpace what peers\' current multiples imply, your DCF will be higher. Comps are also compressed during market downturns even when business fundamentals haven\'t changed.'
    },
    {
        type: 'mc',
        context: 'CAPM',
        question: 'A company has a Beta of 1.4, risk-free rate of 4.0%, and equity risk premium of 5.5%. What is its Cost of Equity?',
        options: ['10.7%', '11.7%', '12.2%', '9.7%'],
        correct: 1,
        explanation: 'Cost of Equity = Risk-Free Rate + Beta × ERP = 4.0% + 1.4 × 5.5% = 4.0% + 7.7% = 11.7%. The Beta of 1.4 means this company\'s stock is 40% more volatile than the market, so investors demand 11.7% annually rather than the 9.5% they\'d expect for an average (Beta=1) company.'
    },
    {
        type: 'mc',
        context: 'Terminal Value Sensitivity',
        question: 'Why is the terminal growth rate the most sensitive assumption in a DCF?',
        options: [
            'Because it is the only assumption that affects the terminal value calculation',
            'Because it directly affects the Gordon Growth Model denominator (WACC–g), and small changes to the denominator cause large proportional changes in terminal value',
            'Because it is impossible to estimate accurately, making the entire DCF unreliable',
            'Because terminal value only matters when WACC is above 10%'
        ],
        correct: 1,
        explanation: 'The denominator is (WACC – g). When g = 3% and WACC = 10%, denominator = 7%. When g rises to 4%, denominator drops to 6% — a 14% reduction that increases TV by 17%. The denominator is already small, so any change in g has an outsized percentage impact. This is why DCF sensitivity tables always show WACC vs. terminal growth rate.'
    },
    {
        type: 'mc',
        context: 'FCFF Calculation',
        question: 'Why do you start FCFF from EBIT rather than Net Income in a DCF?',
        options: [
            'Because EBIT is easier to calculate and appears directly on the income statement',
            'Because FCFF represents value for ALL investors, and EBIT excludes interest (which belongs to debt holders) — keeping the calculation capital structure-neutral, consistent with using WACC',
            'Because Net Income includes depreciation and amortization charges, which distort the cash flow',
            'Because DCF analysis only works for companies that have zero interest expense'
        ],
        correct: 1,
        explanation: 'FCFF is unlevered — it represents cash for ALL investors. Starting from Net Income would include interest expense effects, making the cash flow "equity-only." To be consistent with discounting at WACC (which represents all investors), you start from EBIT (before interest) and use NOPAT = EBIT × (1–t) as your starting point.'
    },
    // NEW TF — level 2
    {
        type: 'tf',
        context: 'DCF Basics',
        question: 'In a standard DCF, you discount Free Cash Flows at the Cost of Equity because equity holders bear the most risk.',
        answer: false,
        explanation: 'In a standard DCF using Unlevered FCF (FCFF), you discount at WACC — the blended required return for ALL investors (equity and debt). The Cost of Equity is only the correct discount rate when you use Levered FCF (FCFE), which represents cash available solely to equity holders.'
    },
    {
        type: 'tf',
        context: 'Terminal Value',
        question: 'Terminal Value typically accounts for 60-80% of total implied DCF value, even with a 5-10 year explicit forecast period.',
        answer: true,
        explanation: 'Because the Gordon Growth Model captures all cash flows in perpetuity beyond the forecast period, and those distant cash flows sum to a very large number, Terminal Value dominates DCF output. This is why small changes in the terminal growth rate or exit multiple have such an outsized impact on the final result.'
    },
    // NEW FITB — level 1
    {
        type: 'fitb',
        context: 'CAPM',
        question: 'Cost of Equity = Risk-Free Rate + Beta × ___.',
        answer: ['Equity Risk Premium', 'ERP'],
        explanation: 'CAPM states that the required return on equity equals the risk-free rate plus compensation for systematic (market) risk. Beta scales the Equity Risk Premium to reflect the specific stock\'s volatility relative to the market.'
    },
    {
        type: 'fitb',
        context: 'WACC',
        question: 'The after-tax cost of debt = Pre-Tax Cost of Debt × (1 – ___).',
        answer: ['Tax Rate', 'tax rate'],
        explanation: 'Interest expense is tax-deductible, creating a tax shield. Multiplying by (1 – Tax Rate) converts the pre-tax rate to the after-tax rate used in WACC. Preferred dividends are NOT tax-deductible, so this adjustment does not apply to preferred stock.'
    },
];

const val_level3 = [
    {
        type: 'mc',
        context: 'Apply: FCFF',
        question: 'EBIT = $300M, D&A = $60M, CapEx = $80M, ΔWC = –$30M (working capital decreased), Tax Rate = 30%. What is FCFF?',
        options: ['$190M', '$220M', '$250M', '$160M'],
        correct: 1,
        explanation: 'FCFF = EBIT(1–t) + D&A – CapEx – ΔWC = $300×0.7 + $60 – $80 – (–$30) = $210 + $60 – $80 + $30 = $220M. Note: a decrease in working capital FREES UP cash (+$30M), not uses it. ΔWC is positive when WC increases (cash use), negative when WC decreases (cash source).'
    },
    {
        type: 'mc',
        context: 'Apply: WACC',
        question: 'Company: 55% equity (cost 12%), 45% debt (cost 6%), tax rate 25%. Calculate WACC.',
        options: ['7.73%', '8.63%', '9.03%', '9.75%'],
        correct: 1,
        explanation: 'WACC = 55% × 12% + 45% × 6% × (1 – 25%) = 6.6% + 45% × 4.5% = 6.6% + 2.025% = 8.625% ≈ 8.63%. The tax shield reduces debt cost from 6% to 4.5%, making debt significantly cheaper than equity on an after-tax basis.'
    },
    {
        type: 'mc',
        context: 'Apply: Terminal Value',
        question: 'Year 5 FCFF = $100M. WACC = 9%, terminal growth rate = 3%. What is the Gordon Growth Model Terminal Value?',
        options: ['$1,000M', '$1,717M', '$1,100M', '$1,500M'],
        correct: 1,
        explanation: 'TV = FCF(n+1) / (WACC – g) = ($100 × 1.03) / (9% – 3%) = $103 / 6% = $1,717M. Important: use NEXT year\'s FCF in the numerator (Year 6 = Year 5 × (1+g)), not Year 5 FCF directly. This is a common exam error.'
    },
    // NEW TF — level 3
    {
        type: 'tf',
        context: 'FCF Projections',
        question: 'Stock-based compensation (SBC) should be added back as a non-cash expense when calculating Unlevered Free Cash Flow for a DCF.',
        answer: false,
        explanation: 'SBC is NOT a true non-cash expense like D&A. It creates new shares that dilute existing investors — a real economic cost. Adding it back gives a "free lunch" by ignoring the dilution cost. SBC should NOT be added back in FCFF projections. Only D&A (and occasionally deferred taxes) should be added back among non-cash items.'
    },
    {
        type: 'tf',
        context: 'Terminal Growth Rate',
        question: 'The terminal growth rate used in a Gordon Growth Model can be set higher than a company\'s long-run projected GDP growth rate if the company operates in a high-growth industry.',
        answer: false,
        explanation: 'The terminal growth rate must be less than WACC (or the formula breaks) and should not exceed long-run GDP growth (typically 2-4%). In perpetuity, no company can grow faster than the economy forever — it would eventually become larger than the entire economy. High-growth phases are captured in the explicit forecast period, not in the terminal period.'
    },
    // NEW FITB — level 3
    {
        type: 'fitb',
        context: 'Terminal Value',
        question: 'Gordon Growth Model Terminal Value = FCF(n+1) / (WACC – ___).',
        answer: ['g', 'terminal growth rate'],
        explanation: 'The denominator (WACC – g) is the key driver of Terminal Value sensitivity. Because both values are percentages and WACC is only modestly above g, small changes in either create large changes in terminal value. This denominator is sometimes called the "cap rate."'
    },
    {
        type: 'fitb',
        context: 'FCFF',
        question: 'NOPAT = EBIT × (1 – ___).',
        answer: ['Tax Rate', 'tax rate', 't'],
        explanation: 'Net Operating Profit After Taxes strips out the effect of interest expense on taxes, isolating after-tax operating profit for ALL investors. It is the starting point for unlevered FCF, ensuring capital structure neutrality.'
    },
    {
        type: 'fitb',
        context: 'Valuation Methods',
        question: 'DCF is called ___ valuation because it values a company based on its own projected cash flows, not comparisons to other companies.',
        answer: ['intrinsic', 'fundamental'],
        explanation: 'Intrinsic valuation (DCF) derives value from the company\'s own fundamentals — its future cash flows discounted to the present. Relative valuation (comps, precedents) values a company by reference to how similar companies are priced in the market.'
    },
];

const val_level4 = [
    {
        type: 'mc',
        context: 'Analyze: WACC Components',
        question: 'If a company\'s Beta rises from 1.0 to 1.5, what happens to WACC, and what might cause this Beta increase?',
        options: [
            'WACC falls — higher Beta means equity investors accept lower returns',
            'WACC rises — higher Beta means higher Cost of Equity, which raises WACC. Caused by: increased leverage, entering more cyclical businesses, or higher revenue volatility.',
            'WACC is unaffected — Beta only affects the equity tranche, which averages out in WACC',
            'WACC rises — but only if the company also increases its debt ratio at the same time'
        ],
        correct: 1,
        explanation: 'Cost of Equity = Rf + Beta × ERP. Beta 1.0→1.5 with ERP 5.5%: CoE increases by 0.5 × 5.5% = 2.75%. With 60% equity weighting, WACC rises by 0.6 × 2.75% = +1.65%. This could be caused by: adding leverage (financial risk), expanding into cyclical markets, or competitive pressures causing more revenue volatility.'
    },
    {
        type: 'mc',
        context: 'Analyze: Comps vs. Precedents',
        question: 'A company\'s public comps analysis implies $30-40/share. Precedent transactions imply $45-60/share. A potential acquirer offers $42/share. How would a sell-side banker interpret this?',
        options: [
            'The offer is fair — it falls within the comps range, which is the most reliable method',
            'The offer is below precedent transaction ranges and likely undervalues the company — control premium not fully captured; the banker would push back',
            'The offer is overpriced — it exceeds the public comps range, suggesting the acquirer is overpaying',
            'The offer is irrelevant — bankers use book value as the primary fairness benchmark'
        ],
        correct: 1,
        explanation: 'Precedent transactions represent what acquirers have actually PAID in real deals, including control premiums and synergies. $42 falls below the $45-60 range of precedents, meaning historically buyers have paid more. A sell-side banker (representing the seller) would argue the offer is too low and push for $45+ using precedents as justification.'
    },
    // NEW TF — level 4
    {
        type: 'tf',
        context: 'Beta and WACC',
        question: 'When estimating Beta for a DCF, it is more accurate to use the subject company\'s own historical Beta rather than an unlevered and re-levered Beta derived from peer companies.',
        answer: false,
        explanation: 'A company\'s historical Beta reflects its Current Value — past capital structure and risk. For a DCF you want the Implied Value, which reflects how the company should be priced going forward. Using peer median unlevered Betas (then re-levering at the target structure) is the preferred approach because it is forward-looking and removes idiosyncratic capital structure noise from each peer.'
    },
    {
        type: 'tf',
        context: 'Valuation Methods',
        question: 'For a stable, cash-generative private company being sold in an M&A process, precedent transactions are typically given more weight than the DCF because they directly reflect what buyers have paid in real deals.',
        answer: true,
        explanation: 'Precedent transactions capture control premiums, synergy expectations, and real deal dynamics — all directly relevant to an M&A sale. A DCF is highly sensitive to assumptions and is often used as a sanity check. In an M&A context, bankers weight precedents most heavily because the question is: "What has someone actually paid for a similar business?"'
    },
    // NEW FITB — level 4
    {
        type: 'fitb',
        context: 'Unlevered Beta',
        question: 'To isolate pure business risk from leverage risk, you must ___ a peer company\'s observed Beta before averaging across the peer group.',
        answer: ['unlever', 'un-lever'],
        explanation: 'Each peer company\'s observed (levered) Beta reflects both business risk and its specific capital structure risk. Unlevering removes the leverage effect so you can average pure business-risk Betas across peers, then re-lever at the subject company\'s target capital structure.'
    },
    {
        type: 'fitb',
        context: 'Sensitivity Analysis',
        question: 'A DCF sensitivity table most commonly shows implied value across a range of WACC assumptions on one axis and ___ on the other.',
        answer: ['terminal growth rate', 'g', 'growth rate'],
        explanation: 'WACC and terminal growth rate are the two most sensitive inputs in any DCF. Presenting a matrix of outcomes across ranges of both assumptions is standard practice and shows the full range of reasonable implied values to the client or board.'
    },
];

const val_level5 = [
    {
        type: 'mc',
        context: 'Evaluate: DCF Weaknesses',
        question: 'A company asks you to value it using a DCF. You assume 5% WACC (using artificially low risk-free rates), 4% terminal growth, and optimistic projections. The result is $100/share; the stock trades at $40. Is the company "undervalued"?',
        options: [
            'Yes — the DCF is a rigorous, objective method, so if it says $100 the stock is worth $100',
            'No — a DCF is only as good as its inputs. A garbage-in, garbage-out (GIGO) result doesn\'t reflect intrinsic value; it reflects the assumptions you chose to use',
            'Yes — markets are inefficient and frequently misprice stocks, so the DCF should be trusted',
            'Cannot determine without running a comparable companies analysis first'
        ],
        correct: 1,
        explanation: 'DCF is "garbage in, garbage out." With a 5% WACC and 4% terminal growth, the denominator is only 1% (5%–4%) — a tiny change in inputs creates enormous value. Artificially low WACC and high growth rates create the illusion of undervaluation. Good analysts use market-based WACC inputs, stress-test assumptions, and compare DCF outputs to comps as a sanity check.'
    },
    {
        type: 'mc',
        context: 'Evaluate: Which Method to Use',
        question: 'You\'re advising a PE firm acquiring a stable, cash-generative manufacturing company with a long track record. Which valuation method would you weight most heavily?',
        options: [
            'DCF — always the most rigorous and definitive method for any acquisition',
            'Precedent transactions — most directly comparable to what acquirers have actually paid in similar deals; captures control premium',
            'Public comps — fastest and most real-time market signal',
            '52-week trading range — shows the stock\'s fair value based on recent market pricing'
        ],
        correct: 1,
        explanation: 'For an M&A transaction, precedent transactions are usually weighted most heavily because they show what buyers have actually paid for similar companies in real deals, including control premiums. DCF is important for sanity-checking the underlying value and stress-testing scenarios. Comps reflect today\'s market but don\'t include the control premium the acquirer must pay.'
    },
    // NEW TF — level 5
    {
        type: 'tf',
        context: 'DCF Limitations',
        question: 'A DCF is considered "intrinsic" valuation because it is objective and independent of the analyst\'s assumptions about growth and margins.',
        answer: false,
        explanation: 'DCF is called intrinsic valuation because it is based on the company\'s own cash flows rather than market comparisons — NOT because it is objective. In reality, DCF is highly subjective: small changes to revenue growth, margins, WACC, and terminal growth rate produce wildly different outputs. The garbage-in, garbage-out (GIGO) problem is the primary weakness of DCF analysis.'
    },
    {
        type: 'tf',
        context: 'Football Field',
        question: 'In a football field valuation summary, DCF typically produces the widest valuation range because it is most sensitive to assumption changes.',
        answer: true,
        explanation: 'DCF ranges are typically the widest on a football field chart because the output is extremely sensitive to WACC and terminal growth rate. A WACC range of 8-12% and g range of 2-4% can produce implied values that vary by 50% or more. By contrast, comps and precedents produce narrower ranges tied to observed market multiples.'
    },
    // NEW FITB — level 2 and 3
    {
        type: 'fitb',
        context: 'DCF Output',
        question: 'A DCF discounting FCFF at WACC produces an Implied ___, which must be bridged to Equity Value by subtracting net debt.',
        answer: ['Enterprise Value', 'TEV'],
        explanation: 'FCFF + WACC → Implied Enterprise Value. To get to Implied Equity Value (and then implied share price), you subtract Net Debt (Debt – Cash). This is the same TEV bridge used in comps, just in reverse.'
    },
    {
        type: 'fitb',
        context: 'WACC',
        question: 'The cost of debt is multiplied by (1 – Tax Rate) in the WACC formula because interest expense is ___.',
        answer: ['tax-deductible', 'tax deductible'],
        explanation: 'Interest expense reduces taxable income, creating a tax shield. This makes debt cheaper on an after-tax basis than its stated coupon rate. Preferred dividends do NOT have this benefit — they are paid from after-tax income and are excluded from the (1 – Tax Rate) adjustment.'
    },
    {
        type: 'fitb',
        context: 'Valuation Range',
        question: 'The horizontal bar chart that displays valuation ranges from DCF, public comps, and precedent transactions side by side is called a ___ chart.',
        answer: ['football field', 'football-field'],
        explanation: 'The football field chart is a standard IB deliverable showing the valuation range implied by each method. It allows clients and boards to see where current market price sits relative to implied value ranges and which methods are most supportive of a transaction.'
    },
];

const val_level6 = [
    {
        type: 'mc',
        context: 'Create: Full DCF',
        question: 'FCFs: Y1=$80M, Y2=$90M, Y3=$100M, Y4=$110M, Y5=$120M. WACC=10%. TV (GGM, g=3%) = Y5 FCF × (1.03) / (10%–3%) = $1,765.7M. PV of TV = $1,765.7 / (1.1)^5 = $1,096.5M. PV of FCFs ≈ $368M. What is Implied TEV?',
        options: ['$1,096.5M', '$1,464.5M', '$1,765.7M', '$2,133.7M'],
        correct: 1,
        explanation: 'Implied TEV = PV of FCFs + PV of Terminal Value = $368M + $1,096.5M = $1,464.5M. The terminal value accounts for ~75% of total value ($1,096.5/$1,464.5 = 75%). This is typical — the long-run value dominates a DCF, which is why terminal growth rate assumptions are so critical.'
    },
    {
        type: 'mc',
        context: 'Create: Sensitivity Analysis',
        question: 'Base DCF value = $1,464.5M (WACC 10%, g 3%). If WACC rises to 11% and g falls to 2%, the new TV = $120×1.02/9% = $1,360M, PV of TV = $1,360/1.11^5 ≈ $804M, PV of FCFs ≈ $349M. What is the new implied TEV and % change?',
        options: ['$1,153M, –21%', '$804M, –45%', '$1,250M, –15%', '$1,600M, +9%'],
        correct: 0,
        explanation: '$349M + $804M = $1,153M. Change = ($1,153 – $1,464) / $1,464 = –21%. Two unfavorable assumption changes (higher WACC, lower growth) together reduce implied value by 21%. This is why DCF sensitivity tables are always presented as a matrix showing the combined effect of WACC and g changes together.'
    }
];

const val_order = [
    {
        level: 2,
        question: 'Order the steps to build a DCF model from start to finish:',
        items: [
            '1. Project Free Cash Flows (FCFF) for Years 1-5 or 1-10',
            '2. Estimate WACC (Cost of Equity via CAPM + Cost of Debt)',
            '3. Calculate Terminal Value (Gordon Growth or Exit Multiple)',
            '4. Discount all cash flows to Present Value at WACC',
            '5. Sum PV of FCFs + PV of Terminal Value = Implied Enterprise Value',
            '6. Subtract Net Debt to get Implied Equity Value → divide by shares for share price'
        ],
        explanation: 'The DCF follows a clean, logical flow: project → discount rate → terminal value → discount → sum → bridge to equity. Each step depends on the previous one. You can\'t calculate PV without WACC, and you can\'t get to share price without the TEV-to-equity bridge.'
    },
    {
        level: 3,
        question: 'Rank these DCF assumptions from most to least sensitive to small changes in input:',
        items: [
            '1. Terminal Growth Rate (g) — 1% change ≈ 15-25% change in total value',
            '2. WACC — 1% change ≈ 10-15% change in total value',
            '3. Year 5 FCF margin — 1% change ≈ 3-5% change in total value',
            '4. Year 1 Revenue growth — 1% change ≈ 1-2% change in total value'
        ],
        explanation: 'Terminal growth rate dominates because it affects the terminal value through the (WACC–g) denominator. When the denominator is small (e.g., 6-7%), a 1% change has outsized proportional impact. WACC is also highly sensitive. Year 1 assumptions matter least because they\'re discounted less but also represent a small portion of total value.'
    }
];

const val_fillin = [
    {
        level: 4,
        type: 'fillin',
        scenario: 'Calculate WACC: Company is 65% equity (Cost of Equity: CAPM with Rf=4%, Beta=1.2, ERP=5.5%) and 35% debt (pre-tax cost 6%, tax rate 25%).',
        is_fields: [
            { label: 'Cost of Equity (%)', answer: 10.6, hint: 'CAPM: 4% + 1.2 × 5.5% = 10.6%.' },
            { label: 'After-tax Cost of Debt (%)', answer: 4.5, hint: '6% × (1 – 25%) = 4.5%.' }
        ],
        cfs_fields: [
            { label: 'Equity contribution to WACC (%)', answer: 6.89, hint: '65% × 10.6% = 6.89%.' },
            { label: 'Debt contribution to WACC (%)', answer: 1.575, hint: '35% × 4.5% = 1.575%.' }
        ],
        bs_fields: [
            { label: 'WACC (%)', answer: 8.465, hint: '6.89% + 1.575% = 8.465% ≈ 8.5%.' },
            { label: 'If Beta rises to 1.6, new WACC (%)', answer: 10.065, hint: 'New CoE: 4% + 1.6×5.5% = 12.8%. New WACC: 65%×12.8% + 1.575% = 8.32% + 1.575% ≈ 9.9%.' }
        ],
        explanation: 'WACC = 65%×10.6% + 35%×4.5% = 6.89% + 1.575% = 8.465%. The tax shield is critical: debt costs 6% gross but only 4.5% after-tax, making it significantly cheaper than equity (10.6%). Higher Beta (1.6) raises Cost of Equity to 12.8% and WACC to ~9.9% — a 1.4% increase that would materially reduce DCF implied value.'
    }
];

const QUESTIONS_VALUATION = {
    1: val_level1,
    2: val_level2,
    3: val_level3,
    4: val_level4,
    5: val_level5,
    6: val_level6,
    order: val_order,
    fillin: val_fillin
};
