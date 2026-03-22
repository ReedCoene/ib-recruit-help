// ============================================================
// LESSONS — Leveraged Buyouts & LBO Models (BIWS 04-07)
// ============================================================
const LESSONS_LBO = [
    {
        id: 'lbo-fundamentals',
        title: 'What Is an LBO and Why Does It Work?',
        icon: '&#x1F4B0;',
        color: '#6366f1',
        audio: "lbo_models_overview_compressed.mp3",
        cards: [
            {
                term: 'Leveraged Buyout (LBO)',
                what: 'A private equity firm acquires a company using a combination of CASH (Investor Equity, typically 30-50%) and DEBT (typically 50-70%), with the acquired company\'s own cash flows used to service and repay the debt over the hold period (usually 3-7 years).',
                why: 'LBOs work because leverage amplifies equity returns. By investing less cash upfront and using debt to fund the acquisition, the PE firm earns a higher IRR on its invested equity — similar to buying a house with a mortgage instead of all cash.',
                example: 'Home analogy: Buy a $500K house all-cash. Earn $30K/year in rent and sell for $600K in 5 years → IRR ~11%. Buy the same house with $100K down + $400K mortgage → IRR jumps to ~40%+ on your equity. Same house, same cash flows — leverage made the return on equity much higher.'
            },
            {
                term: 'Leverage Amplifies — Both Ways',
                what: 'Leverage AMPLIFIES returns, it does NOT create them. If the deal performs well → returns are even better. If the deal performs poorly → losses are even worse. A mediocre deal can become a total loss with high leverage.',
                why: 'This is the core risk of PE investing. A company that misses projections by 20% might still be viable as a standalone business, but with a heavily leveraged balance sheet, it might default on its debt. PE firms must choose deals carefully because leverage has no "downside protection."',
                example: 'Same house example, but home prices FALL 40%: sell for $300K. All-cash: lose $170K net. Leveraged (20% down): net proceeds = $300K – $400K debt = –$100K. You lose your entire $100K investment. Leverage turned a manageable loss into a 100% loss on your equity.'
            },
            {
                term: 'How the PE Firm Makes Money',
                what: 'Three sources of LBO returns: (1) EBITDA growth — operate the company better, grow revenues/margins; (2) Debt paydown — company repays debt, increasing equity value; (3) Multiple expansion — exit at a higher TEV/EBITDA than entry. Best deals rely on the first two, not multiple expansion.',
                why: 'Multiple expansion is the riskiest source because it depends on market conditions (you can\'t control valuation multiples). EBITDA growth and debt paydown are within operational control. PE firms explicitly discount deals that require multiple expansion to hit target returns.',
                example: 'Entry: 6x EBITDA $100M = $600M TEV, $300M debt, $300M equity. Year 5: EBITDA $150M, debt paid to $100M. Exit at same 6x → TEV $900M, equity $800M. MoM = $800M/$300M = 2.7x (~22% IRR). All returns from EBITDA growth + debt paydown. No multiple expansion needed.'
            },
            {
                term: 'Ideal LBO Candidate Profile',
                what: 'Stable, predictable cash flows (to service debt). Moderate growth (stability > growth). Low CapEx relative to EBITDA (high "FCF conversion"). Strong market position. Fragmented industry (add-on acquisition opportunities). Clear exit options (strategic or sponsor-to-sponsor sale).',
                why: 'Stable cash flows prevent default. Low CapEx means more cash is available to repay debt. Strong market position protects margins. Fragmented industry allows bolt-on acquisitions to grow EBITDA quickly without relying solely on organic growth.',
                example: 'Great LBO candidates: food/beverage companies, industrial distributors, healthcare services, software (SaaS with recurring revenue). Bad candidates: early-stage tech (no revenues), highly cyclical companies (mining, oil), businesses with massive CapEx requirements (chip fabs, aircraft manufacturers).'
            }
        ]
    },
    {
        id: 'sources-uses-lbo',
        title: 'Purchase Price & Sources/Uses',
        icon: '&#x1F4CB;',
        color: '#10b981',
        audio: "lbo_models_overview_compressed.mp3",
        cards: [
            {
                term: 'Entry Multiple & Purchase Price',
                what: 'Purchase price = Entry TEV Multiple × EBITDA. Usually 7-12x EBITDA for most industries. Plus/minus: cash-free, debt-free adjustments. The entry multiple is the most important determinant of LBO returns — even great companies become bad deals at the wrong price.',
                why: 'Every additional turn of EBITDA you pay at entry must be recovered at exit. If you pay 10x and exit at 9x, you\'ve already lost 1x EBITDA in value before accounting for anything else. Price discipline is the PE firm\'s primary advantage over strategic acquirers.',
                example: 'Target EBITDA $50M. Entry at 8x → TEV $400M. If debt is $250M → equity check = $150M. At exit Year 5: EBITDA $70M × 8x = $560M. Debt repaid to $150M → equity = $410M. MoM = $410/$150 = 2.7x (~22% IRR). The numbers only work because the entry multiple was disciplined.'
            },
            {
                term: 'Debt Capacity & Leverage',
                what: 'In an LBO, maximum debt is constrained by the company\'s ability to service it: Total Debt typically ≤ 5-6x EBITDA (varies by industry/credit market). Lenders require minimum interest coverage (EBITDA/Interest > 2x typically) and a debt schedule showing full repayment.',
                why: 'Too much debt → company can\'t make interest payments → default. Too little debt → PE firm invests too much equity → IRR too low. The optimal leverage is the maximum sustainable amount given the company\'s FCF profile.',
                example: 'Company: EBITDA $100M. Debt @ 5x = $500M. Interest at 7% = $35M. Coverage = $100/$35 = 2.9x (acceptable). Cash flow after interest ($100M – $35M = $65M) funds debt repayment. By Year 5, the company has repaid ~$200-250M of debt, dramatically increasing equity value.'
            },
            {
                term: 'LBO Sources & Uses Table',
                what: 'Sources (left side): Senior secured loan, subordinated debt, mezzanine, preferred equity, sponsor equity. Uses (right side): Purchase equity value, refinance existing debt, transaction fees, cash to the balance sheet. Sources MUST equal Uses.',
                why: 'Every LBO model starts here. This table shows exactly how much debt vs. equity the PE firm uses and where every dollar goes. The debt-to-equity ratio determines the leverage ratio and maximum sustainable debt.',
                example: 'TEV = $500M. Sources: $250M Term Loan A + $100M Sub Debt + $150M Sponsor Equity = $500M. Uses: $490M purchase equity + $10M fees = $500M. Leverage = ($250M + $100M) / $100M EBITDA = 3.5x. Light leverage for a stable business.'
            }
        ]
    },
    {
        id: 'lbo-cash-flows',
        title: 'Cash Flows, Debt Repayment & Returns',
        icon: '&#x1F4C8;',
        color: '#f59e0b',
        audio: "lbo_models_overview_compressed.mp3",
        cards: [
            {
                term: 'LBO Cash Flow Model',
                what: 'Project EBITDA → subtract interest expense (on outstanding debt) → subtract taxes → subtract CapEx → subtract ΔWC → Cash available for Debt Repayment (Cash Sweep). Each year, remaining debt principal is paid down, reducing future interest and increasing equity.',
                why: 'The debt paydown schedule is the mechanical heart of an LBO model. As debt falls, interest expense falls → more cash available → faster debt paydown → compounding benefit. This is why PE firms value predictable cash flows so highly.',
                example: 'Year 1: EBITDA $100M – Interest $35M – Taxes $15M – CapEx $20M = $30M cash sweep. Debt falls from $500M to $470M. Year 2: Interest on $470M is $32.9M. More cash flows to debt. Year 5: Debt fully swept to $350M → equity value at exit has grown substantially.'
            },
            {
                term: 'Exit Value & Equity Proceeds',
                what: 'Exit TEV = Exit EBITDA × Exit Multiple. Equity to PE firm = Exit TEV – Remaining Debt – Preferred – any NCI. MoM (Multiple on Money) = Exit Equity / Entry Equity. IRR: solve for the annual compounded return that makes NPV = 0 given entry equity and exit equity.',
                why: 'Returns in LBO are determined by the combination of: how much EBITDA grew, how much debt was paid down, and what multiple you sold at (exit multiple). IRR also depends on how many years you held the asset — holding too long can reduce IRR even if MoM is good.',
                example: 'Entry equity $200M. Exit equity $500M in Year 5. MoM = 2.5x. IRR = (500/200)^(1/5) – 1 = 2.5^0.2 – 1 ≈ 20.1%. Same deal held 7 years: MoM still 2.5x but IRR = 2.5^(1/7) – 1 ≈ 14%. Holding period matters for IRR even when MoM is identical.'
            },
            {
                term: 'Quick IRR Mental Math',
                what: 'Rule of 72: Divide 72 by the IRR to estimate years to double your money (e.g., 72/20% = 3.6 years). Key benchmarks: 2x in 3 years ≈ 26% IRR. 2x in 4 years ≈ 19% IRR. 2x in 5 years ≈ 15% IRR. 3x in 5 years ≈ 25% IRR. Memorize these for interviews.',
                why: 'PE interviewers will give you a scenario on the spot and ask for a rough IRR. The benchmarks let you answer in seconds: "We paid $200M, exit $500M in 5 years. 2.5x in 5 years is roughly 20% IRR — just above the typical PE hurdle rate of 20%."',
                example: 'Scenario: $100M equity invested. Company sold for $250M equity in 4 years. MoM = 2.5x. 2x in 4 years ≈ 19%, 3x in 4 years ≈ 32%. 2.5x in 4 years ≈ 25-26% IRR → above the 20% hurdle. Good deal.'
            }
        ]
    },
    {
        id: 'lbo-returns-drivers',
        title: 'Key LBO Return Drivers',
        icon: '&#x1F3AF;',
        color: '#ec4899',
        audio: "lbo_models_overview_compressed.mp3",
        cards: [
            {
                term: 'Three LBO Return Drivers',
                what: '(1) EBITDA Growth: higher EBITDA → higher exit TEV at same multiple. (2) Debt Paydown: less debt outstanding at exit → more equity proceeds. (3) Multiple Expansion: exit at higher TEV/EBITDA than entry. #1 + #2 = operational value creation. #3 = market timing.',
                why: 'PE firms are evaluated on their ability to create operational value (#1 and #2). Relying on multiple expansion to hit return targets is risky and not repeatable — it depends on macro conditions, not management skill. "Multiple expansion dependent" deals are a red flag.',
                example: 'Deal A: EBITDA $100M → $130M, debt $400M → $200M repaid, exit at same 8x entry multiple. Exit equity = (8×$130M – $200M) = $840M. Entry equity = (8×$100M – $400M) = $400M. MoM = 2.1x (pure operational). Deal B: same but exit at 10x → MoM = ($1,100M – $200M) = $900M / $400M = 2.25x. Deal B needs market tailwinds.'
            },
            {
                term: 'FCF Conversion Rate',
                what: 'FCF Conversion = FCFF / EBITDA (or Cash available for debt repayment / EBITDA). High FCF conversion (>50-60%) means the company turns EBITDA into actual cash efficiently, allowing faster debt paydown. Low conversion = high CapEx, WC build, taxes eating into cash.',
                why: 'In an LBO, the only source of debt repayment is the company\'s free cash flow. A company with 80% FCF conversion pays down debt much faster than one with 40% conversion, dramatically improving equity returns even with identical EBITDA levels.',
                example: 'Company A: $100M EBITDA, 70% FCF conversion → $70M/year for debt repayment. Debt fully paid in ~5-6 years. Company B: $100M EBITDA, 30% FCF conversion → $30M/year. Takes 15+ years to repay. Company B is a much worse LBO candidate despite identical EBITDA.'
            }
        ]
    }
];
