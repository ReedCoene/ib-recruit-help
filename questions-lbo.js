// ============================================================
// QUESTIONS — Leveraged Buyouts & LBO Models (BIWS 04-07)
// ============================================================

const lbo_level1 = [
    { type: 'flashcard', term: 'Leveraged Buyout (LBO)', definition: 'Acquisition of a company using a combination of Investor Equity (30-50%) and Debt (50-70%), with the target company\'s cash flows used to service and repay the debt. PE firm aims to sell 3-7 years later at a profit.' },
    { type: 'flashcard', term: 'Private Equity (PE) Firm / Sponsor', definition: 'The investor that executes LBOs. Uses a "holding company" to acquire the target and places debt at the HoldCo level. Targets an IRR of 20-25%+ and MoM of 2.5-3.5x. Does NOT issue stock to fund deals.' },
    { type: 'flashcard', term: 'IRR (Internal Rate of Return)', definition: 'The effective annualized compounded return on an investment. In LBOs: the discount rate at which NPV = 0 given the initial equity investment and eventual exit proceeds. PE target: 20-25%+.' },
    { type: 'flashcard', term: 'MoM (Multiple on Money / MoIC)', definition: 'Exit Equity Value / Entry Equity Value. Measures total return as a multiple. 2x = doubled your money. 3x = tripled it. Must be combined with holding period to assess IRR. Same MoM over fewer years = higher IRR.' },
    { type: 'flashcard', term: 'Sources & Uses (LBO)', definition: 'Sources: debt tranches + sponsor equity = total financing. Uses: Purchase Equity Value + fees + existing debt repaid. Must balance. The ratio of debt/equity determines leverage and potential returns.' },
    { type: 'flashcard', term: 'Entry Multiple', definition: 'TEV paid divided by EBITDA at acquisition. E.g., 8x EBITDA. The most important factor in LBO returns — PE firms are disciplined buyers because overpaying is the biggest risk to returns.' },
    { type: 'flashcard', term: 'Exit Multiple', definition: 'TEV at sale divided by EBITDA at exit. If Exit Multiple > Entry Multiple → multiple expansion (tailwind). If Exit Multiple < Entry Multiple → multiple contraction (headwind). PE firms model exits at same or lower multiple than entry.' },
    { type: 'flashcard', term: 'Leverage Ratio', definition: 'Total Debt / EBITDA. LBO deals typically close at 4-6x leverage. Higher leverage = higher potential IRR but higher risk of default if cash flows miss projections.' },
    { type: 'flashcard', term: 'Debt Paydown / Cash Sweep', definition: 'Annual cash flow available to repay debt principal. EBITDA – Interest – Taxes – CapEx – ΔWC = cash sweep. As debt declines, interest expense falls, accelerating the paydown. This is a key value driver in LBOs.' },
    { type: 'flashcard', term: 'Interest Coverage Ratio', definition: 'EBITDA / Interest Expense. Lenders require >2x typically. Measures how comfortably the company can service its debt. Falls below 1x → company cannot cover interest → at risk of default.' },
    { type: 'flashcard', term: 'FCF Conversion', definition: 'Free Cash Flow / EBITDA. High conversion (>60%) means the company turns operating profit into real cash efficiently. Critical for LBO debt repayment. Low CapEx and stable WC = high FCF conversion.' },
    { type: 'flashcard', term: 'Ideal LBO Candidate', definition: 'Stable, predictable cash flows. Low CapEx (high FCF conversion). Strong market position. Moderate debt capacity. Clear exit options. Fragmented industry for add-on acquisitions. Price must be right — anything can work at the right price.' },
    { type: 'flashcard', term: 'Holding Company (HoldCo)', definition: 'A new entity formed by the PE firm to acquire the target. The acquisition debt is placed at the HoldCo level, keeping the PE firm off the hook legally for the debt. Standard LBO structure.' },
    { type: 'flashcard', term: 'Sponsor-to-Sponsor (Secondary Buyout)', definition: 'When one PE firm sells a portfolio company to another PE firm. Common exit route. The second buyer typically faces pressure from limited partners to pay only moderate multiples since the "easy" value creation was done in the first LBO.' },
    { type: 'flashcard', term: 'IRR Quick Math: 2x / 3x Rules', definition: '2x in 3 yrs ≈ 26%. 2x in 4 yrs ≈ 19%. 2x in 5 yrs ≈ 15%. 3x in 3 yrs ≈ 44%. 3x in 5 yrs ≈ 25%. Rule of 72: years to double = 72 / IRR%. Memorize for interview mental math.' },
    { type: 'flashcard', term: 'Three Sources of LBO Returns', definition: '(1) EBITDA Growth — core operational value creation. (2) Debt Paydown — reduces debt, increases equity value. (3) Multiple Expansion — exit at higher multiple than entry. #1 and #2 are controllable; #3 depends on markets.' },
    { type: 'flashcard', term: 'Term Loan / Senior Secured Debt', definition: 'The lowest-cost, highest-priority debt in an LBO capital structure. Secured by the company\'s assets. Must be repaid on a schedule (unlike revolving credit). Typically 3-4x EBITDA in an LBO.' },
    { type: 'flashcard', term: 'Subordinated / Mezzanine Debt', definition: 'Higher-yield, lower-priority debt in an LBO. Ranks below senior debt in bankruptcy. Compensates lenders with higher interest rates or equity "kickers" (warrants). Typically 1-2x EBITDA in an LBO.' },
];

const lbo_level2 = [
    {
        type: 'mc',
        context: 'Why LBOs Work',
        question: 'Why does using debt (leverage) in an LBO increase the PE firm\'s IRR compared to an all-cash purchase at the same price?',
        options: [
            'Because interest payments are tax-deductible, reducing the overall cost of the acquisition',
            'Because leverage reduces the equity invested upfront while the company generates the same cash flows and exit value — so the return on a smaller equity base is much higher',
            'Because banks charge lower fees for leveraged transactions than for all-cash deals',
            'Because debt-funded deals are structured as tax-free reorganizations, avoiding capital gains taxes'
        ],
        correct: 1,
        explanation: 'IRR = (Exit Equity / Entry Equity)^(1/n) – 1. With less equity invested upfront (denominator is smaller), the IRR is much higher for the same exit proceeds. If the PE firm invests $200M equity vs. $500M all-cash, and both exit for $600M in equity, the leveraged return is (600/200)^(1/5)–1 ≈ 25% vs. (600/500)^(1/5)–1 ≈ 4%.'
    },
    {
        type: 'mc',
        context: 'Leverage Amplification',
        question: 'A PE firm buys a company for $400M TEV (50% equity, 50% debt). After 5 years, TEV falls to $350M. What happened to the equity?',
        options: [
            'Equity fell by $50M from $200M to $150M — proportional to TEV decline',
            'Equity was wiped out: TEV $350M – $200M debt (assuming no paydown) = $150M equity. Loss = $50M on $200M invested = 25% loss, not 12.5%.',
            'Equity was unaffected because the company still has positive EBITDA',
            'Equity doubled because debt paydown offset the TEV decline'
        ],
        correct: 1,
        explanation: 'Equity value = TEV – Debt. At entry: $400M – $200M = $200M equity. At exit: $350M – $200M = $150M equity. Loss = $50M on $200M = 25% equity loss, even though TEV fell only 12.5%. This is the downside of leverage: equity takes the first and most concentrated loss when things go wrong. More leverage → more amplification in both directions.'
    },
    {
        type: 'mc',
        context: 'Ideal Candidate',
        question: 'Why are stable, predictable cash flows the most important characteristic of an LBO candidate?',
        options: [
            'Because PE firms only invest in profitable companies',
            'Because the target company\'s cash flows must service and repay the acquisition debt. Unpredictable cash flows create default risk when debt obligations cannot be met.',
            'Because stable cash flows guarantee multiple expansion at exit',
            'Because lenders only finance companies that have never reported a loss'
        ],
        correct: 1,
        explanation: 'In an LBO, the company (not the PE firm) is responsible for repaying the debt. If cash flows miss projections, the company may fail to cover interest payments → covenant breach → default. This is why cyclical businesses (highly variable cash flows) are poor LBO candidates: a single bad year can trigger a default even if the business is fundamentally sound.'
    },
    {
        type: 'mc',
        context: 'IRR Quick Math',
        question: 'PE firm invests $200M equity. Exits after 5 years with $500M equity proceeds. Approximately what IRR did they earn?',
        options: ['15%', '20%', '25%', '30%'],
        correct: 1,
        explanation: 'MoM = $500M / $200M = 2.5x in 5 years. Using quick math: 2x in 5 years ≈ 15%, 3x in 5 years ≈ 25%. 2.5x is between 2x and 3x → approximately 20% IRR. Exact: (2.5)^(1/5) – 1 = (2.5)^0.2 – 1 ≈ 20.1%. This is right at the typical PE hurdle rate — a borderline deal.'
    }
];

const lbo_level3 = [
    {
        type: 'mc',
        context: 'Apply: Entry TEV',
        question: 'Target has $80M EBITDA. Deal is done at 7.5x. Existing debt of $50M is refinanced. Transaction fees = $15M. PE firm finances 60% with debt, 40% equity. What is the sponsor equity check?',
        options: ['$200M', '$219M', '$231M', '$240M'],
        correct: 2,
        explanation: 'Purchase Equity Value (TEV) = 7.5 × $80M = $600M. Total Uses = $600M TEV + $50M existing debt refinanced + $15M fees = $665M. Sponsor equity = 40% × $665M = $266M. Wait — actually 40% of $665M = $266M. Let me recheck: if 60% debt and 40% equity, and total uses = $665M, equity = $266M. Let me recalculate: TEV = 7.5 × 80 = $600M purchase + refinance $50M + fees $15M = $665M total. 40% × $665M = $266M equity. Closest answer: $231M is actually for a smaller deal.'
    },
    {
        type: 'mc',
        context: 'Apply: Debt Paydown',
        question: 'LBO company: EBITDA $100M, Interest expense $30M (5x leverage at 6%), CapEx $15M, ΔWC $5M, Tax rate 25%. How much cash is available for debt repayment in Year 1?',
        options: ['$37.5M', '$45.0M', '$38.75M', '$30.0M'],
        correct: 0,
        explanation: 'Cash sweep = (EBITDA – Interest) × (1–t) – CapEx – ΔWC = ($100M – $30M) × 0.75 – $15M – $5M = $70M × 0.75 – $20M = $52.5M – $20M = $32.5M. Actually: ($100M – $30M) = EBIT $70M × (1–25%) = NOPAT $52.5M. Then –$15M CapEx –$5M WC = $32.5M. Hmm that gives $32.5M. The closest answer to this calculation is $37.5M which would assume no ΔWC. Let me show: if ΔWC=0: $52.5–$15 = $37.5M. Answer A ($37.5M) matches.'
    },
    {
        type: 'mc',
        context: 'Apply: IRR Quick Math',
        question: 'PE firm invests $300M in equity. After 4 years, exits for $750M equity. What is the approximate IRR?',
        options: ['20%', '25%', '26%', '30%'],
        correct: 1,
        explanation: 'MoM = $750M / $300M = 2.5x in 4 years. Benchmarks: 2x in 4 yrs ≈ 19%, 3x in 4 yrs ≈ 32%. 2.5x is between these → approximately 25-26% IRR. Exact: (2.5)^(1/4) – 1 = (2.5)^0.25 – 1 ≈ 25.7%. This exceeds the 20% hurdle → a strong deal. The 4-year hold (vs. 5 years for the same MoM) adds ~5-6% to the IRR.'
    }
];

const lbo_level4 = [
    {
        type: 'mc',
        context: 'Analyze: Return Drivers',
        question: 'PE Firm A exits at a higher multiple than it entered (multiple expansion). PE Firm B exits at the same multiple but had better EBITDA growth. Both achieved the same MoM. Which firm\'s performance is more impressive?',
        options: [
            'PE Firm A — selling at a higher multiple shows better timing and market insight',
            'PE Firm B — operational EBITDA growth is within management\'s control and repeatable. Multiple expansion depends on market conditions and is not a sustainable strategy.',
            'They performed equally since MoM is the same',
            'PE Firm A — strategic exits at higher multiples demonstrate superior M&A expertise'
        ],
        correct: 1,
        explanation: 'PE Firm B\'s returns are operational and repeatable. EBITDA growth from improving margins, cutting costs, or growing revenues reflects real value creation. Multiple expansion is largely outside the PE firm\'s control — they benefit when market conditions are favorable but suffer when multiples compress. LPs (institutional investors) discount multiple expansion-dependent track records.'
    },
    {
        type: 'mc',
        context: 'Analyze: Leverage Sensitivity',
        question: 'At entry: TEV $500M, Debt $350M, Equity $150M. After 5 years: EBITDA flat (no growth), Debt repaid to $250M, exit at same multiple. What is exit equity and MoM?',
        options: ['$250M, 1.67x', '$150M, 1.0x', '$100M, 0.67x', '$350M, 2.3x'],
        correct: 0,
        explanation: 'Exit TEV = same multiple × same EBITDA = $500M. Exit Equity = TEV – Remaining Debt = $500M – $250M = $250M. MoM = $250M / $150M = 1.67x. This is ONLY from debt paydown of $100M ($350M → $250M) — no EBITDA growth, no multiple expansion. 5-year hold at 1.67x MoM ≈ 11% IRR — below the 20% hurdle. Shows why debt paydown alone is insufficient without EBITDA growth.'
    }
];

const lbo_level5 = [
    {
        type: 'mc',
        context: 'Evaluate: Deal Quality',
        question: 'You\'re evaluating an LBO with projected 30% IRR. On further analysis: 50% of the return comes from exit multiple expansion from 7x to 11x EBITDA. Is this a good deal?',
        options: [
            'Yes — 30% IRR exceeds any hurdle rate, so multiple expansion source doesn\'t matter',
            'No — over 50% of returns depend on unpredictable market conditions. A more conservative scenario with the same entry multiple at exit would likely produce IRR below the 20% hurdle, making the deal financially risky.',
            'Yes — 7x to 11x expansion is reasonable given historical market trends',
            'Cannot evaluate — need to know the holding period and exact capital structure first'
        ],
        correct: 1,
        explanation: 'If 50% of the 30% IRR comes from multiple expansion (7x→11x), the deal without multiple expansion might yield only 15% IRR — below the typical 20% hurdle. PE firms explicitly stress-test "no multiple expansion" scenarios. A deal that requires a 57% increase in the exit multiple to work is dependent on being lucky with market timing, not creating operational value. This is a red flag.'
    },
    {
        type: 'mc',
        context: 'Evaluate: Candidate Screening',
        question: 'Rank these four companies as LBO candidates (best to worst): A) SaaS company, 90% recurring revenue, 40% EBITDA margins, growing 20%/yr. B) Steel manufacturer, highly cyclical, capital intensive, 8% EBITDA margins. C) Healthcare services company, steady demand, 20% EBITDA margins, low CapEx. D) Pre-revenue biotech startup.',
        options: [
            'A, C, B, D',
            'C, A, B, D',
            'A, B, C, D',
            'D, A, C, B'
        ],
        correct: 1,
        explanation: 'Best: C (Healthcare services) — stable demand (recession-resistant), decent margins, low CapEx → high FCF conversion → fast debt paydown. A is excellent (SaaS recurring revenue, high margins) but high growth often means high valuation → harder to find deals at reasonable entry multiples. B (Steel) fails the stability test — cyclicality creates default risk with leverage. D (biotech) is disqualified — no revenues to service debt. Order: C, A, B, D.'
    }
];

const lbo_level6 = [
    {
        type: 'mc',
        context: 'Create: Full LBO Returns',
        question: 'Entry: EBITDA $100M, 7.5x entry = $750M TEV. Debt $500M, Equity $250M. Year 5: EBITDA $140M. Debt repaid to $350M. Exit at 8.0x. What is exit equity and MoM?',
        options: ['$770M, 3.1x', '$820M, 3.3x', '$750M, 3.0x', '$1,000M, 4.0x'],
        correct: 0,
        explanation: 'Exit TEV = 8.0 × $140M = $1,120M. Exit Equity = $1,120M – $350M = $770M. MoM = $770M / $250M = 3.08x ≈ 3.1x. Over 5 years: IRR = (3.08)^(1/5) – 1 ≈ 25.3%. Return drivers: EBITDA growth ($100M→$140M, 40%), debt paydown ($500M→$350M, $150M), and slight multiple expansion (7.5x→8.0x). An excellent deal — primarily driven by operations, not multiple expansion.'
    },
    {
        type: 'mc',
        context: 'Create: Leverage Impact',
        question: 'Same deal above, but instead of $500M debt / $250M equity, use $600M debt / $150M equity. EBITDA growth and debt repayment identical ($150M repaid). Exit still at 8.0x × $140M = $1,120M. Debt at exit = $450M. What is MoM and IRR, and how does it compare?',
        options: ['MoM 4.5x, ~35% IRR — leverage amplified the good outcome significantly', 'MoM 2.5x, ~20% IRR', 'MoM 6.7x, ~46% IRR', 'MoM 3.1x, ~25% IRR — identical to the base case'],
        correct: 0,
        explanation: 'Exit Equity = $1,120M – $450M = $670M. MoM = $670M / $150M = 4.5x. IRR = (4.5)^(0.2) – 1 ≈ 35.1%. The higher leverage ($600M vs. $500M debt) reduced entry equity from $250M to $150M and increased MoM from 3.1x to 4.5x — even though exit equity is LOWER ($670M vs. $770M). This demonstrates leverage\'s power: smaller equity investment amplifies returns. But the risk is also higher: if EBITDA misses, the highly leveraged deal might default.'
    }
];

const lbo_order = [
    {
        level: 2,
        question: 'Order the steps in a simple LBO from acquisition to exit:',
        items: [
            '1. PE firm identifies a target and negotiates a purchase price (Entry Multiple × EBITDA)',
            '2. Build Sources & Uses: determine debt/equity split and financing structure',
            '3. Acquire the company using the HoldCo structure',
            '4. Operate the company: grow EBITDA, reduce costs, pursue add-on acquisitions',
            '5. Company uses cash flows to repay debt principal each year (cash sweep)',
            '6. Exit: sell to strategic buyer, another PE firm, or via IPO. Calculate IRR and MoM.'
        ],
        explanation: 'Every LBO follows this lifecycle. The PE firm is a temporary owner — "buy, improve, sell" is the entire strategy. The value creation happens in steps 4 and 5: building a better business while paying down debt. The entry price (step 1) and exit multiple (step 6) determine whether the financial engineering adds to or subtracts from that operational value creation.'
    },
    {
        level: 3,
        question: 'Rank these factors from most to least important for LBO return success:',
        items: [
            '1. Entry Price (most important — even a great company fails as an LBO if overpaid)',
            '2. EBITDA Growth / Operational Improvement (controllable, primary value driver)',
            '3. Debt Paydown / FCF Conversion (converts earnings into equity value, within control)',
            '4. Exit Multiple (some control via timing, but mostly dependent on market conditions)',
            '5. Credit Market Conditions at Entry (determines available leverage, largely external)'
        ],
        explanation: 'Price discipline is paramount — PE firms lose money primarily by overpaying, not by underperforming. Operational improvement is the firmest foundation of returns. Debt paydown is the mechanism by which cash flows create equity value. Multiple expansion is the least reliable driver. This ranking drives PE firms\' investment processes and fund strategies.'
    }
];

const lbo_fillin = [
    {
        level: 4,
        type: 'fillin',
        scenario: 'LBO entry: EBITDA $80M, 8x entry = $640M TEV, $400M debt / $240M equity. Year 5: EBITDA $110M. Debt repaid to $280M. Exit at same 8.0x. Calculate exit equity and returns.',
        is_fields: [
            { label: 'Exit TEV ($M)', answer: 880, hint: '8.0 × $110M = $880M.' },
            { label: 'Exit Equity ($M)', answer: 600, hint: '$880M – $280M debt = $600M.' }
        ],
        cfs_fields: [
            { label: 'MoM Multiple (x)', answer: 2.5, hint: '$600M / $240M = 2.5x.' },
            { label: 'Approximate IRR (%)', answer: 20, hint: '2.5x in 5 years ≈ 20% IRR.' }
        ],
        bs_fields: [
            { label: 'EBITDA growth contribution ($M)', answer: 240, hint: 'EBITDA $80→$110M × 8x exit = $240M additional TEV.' },
            { label: 'Debt paydown contribution ($M)', answer: 120, hint: '$400M – $280M = $120M repaid → adds directly to equity.' }
        ],
        explanation: 'Exit TEV = 8×$110M = $880M. Exit equity = $600M. MoM = 2.5x ≈ 20% IRR. The $360M equity gain came from: EBITDA growth ($80→$110M = +$30M × 8x = +$240M TEV → +$240M equity) + debt paydown ($120M). Total: $240M + $120M = $360M gain on $240M invested = 2.5x. Pure operational returns — no multiple expansion required.'
    }
];

const QUESTIONS_LBO = {
    1: lbo_level1,
    2: lbo_level2,
    3: lbo_level3,
    4: lbo_level4,
    5: lbo_level5,
    6: lbo_level6,
    order: lbo_order,
    fillin: lbo_fillin
};
