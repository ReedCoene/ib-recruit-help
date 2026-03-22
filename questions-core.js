// ============================================================
// QUESTIONS — Core Financial Modeling Concepts (BIWS 04-01)
// ============================================================

// ============================================================
// LEVEL 1: REMEMBER — Flashcards
// ============================================================
const core_level1 = [
    { type: 'flashcard', term: 'Financial Model', definition: 'A quantitative estimate of a company\'s future revenues, expenses, and cash flows used to support an investment or advisory decision. Like a blueprint — not every detail, but enough to spot big problems.' },
    { type: 'flashcard', term: 'Time Value of Money (TVM)', definition: '$100 today is worth more than $100 in the future — NOT primarily because of inflation, but because you can invest it today and earn more by next year.' },
    { type: 'flashcard', term: 'Opportunity Cost', definition: 'What you give up by choosing one option over another. In finance: how much you could earn with similar investments elsewhere at a comparable level of risk.' },
    { type: 'flashcard', term: 'Discount Rate', definition: 'Your targeted yield, or opportunity cost — how much you could earn with other, similar investments. A higher Discount Rate reflects higher risk AND higher potential returns.' },
    { type: 'flashcard', term: 'Present Value (PV)', definition: 'What a future cash flow is worth TODAY given a specific discount rate. PV = FV / (1 + r)^n. Discounting backward in time, as opposed to compounding forward.' },
    { type: 'flashcard', term: 'Future Value (FV)', definition: 'What an amount invested today grows to over time. FV = PV × (1 + r)^n. Compounding forward in time at an assumed rate of return.' },
    { type: 'flashcard', term: 'Net Present Value (NPV)', definition: 'PV of all future cash flows minus the upfront investment (Asking Price). NPV > 0 → invest. NPV < 0 → don\'t invest. WARNING: Excel\'s NPV() function calculates PV, not NPV.' },
    { type: 'flashcard', term: 'Internal Rate of Return (IRR)', definition: 'The discount rate at which NPV = 0. Represents the "effective compounded annual return" on an investment. Invest when IRR > Discount Rate (WACC).' },
    { type: 'flashcard', term: 'WACC', definition: 'Weighted Average Cost of Capital. The blended discount rate for a company: % Equity × Cost of Equity + % Debt × Cost of Debt × (1 – Tax Rate). Used to value the entire firm.' },
    { type: 'flashcard', term: 'Cost of Equity', definition: 'The annual return equity investors expect for owning a company\'s stock. Always higher than the Cost of Debt because equity holders are last in line if the company fails.' },
    { type: 'flashcard', term: 'Cost of Debt', definition: 'The interest rate a company pays on its borrowed money. Tax-deductible, so after-tax cost = Interest Rate × (1 – Tax Rate). Always lower than Cost of Equity for the same company.' },
    { type: 'flashcard', term: 'Intrinsic (Implied) Value', definition: 'What YOUR analysis says a company is worth based on your assumptions about future cash flows and the appropriate discount rate. Different from Market Value.' },
    { type: 'flashcard', term: 'Market Value', definition: 'What buyers and sellers in the market currently agree a company is worth. For public companies: Share Price × Shares Outstanding. Often differs from Intrinsic Value.' },
    { type: 'flashcard', term: 'The Perpetuity Growth Formula', definition: 'Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate), where Growth Rate < Discount Rate. Used when cash flows are stable and growing at a constant long-term rate.' },
    { type: 'flashcard', term: 'DCF Analysis', definition: 'Discounted Cash Flow — a valuation method where you project a company\'s future free cash flows, discount them at WACC, and sum them to get Implied Enterprise Value.' },
    { type: 'flashcard', term: 'Terminal Value', definition: 'The estimated value of a company\'s cash flows beyond the explicit forecast period (usually 5-10 years). Calculated with the perpetuity formula: FCF × (1+g) / (WACC – g).' },
    { type: 'flashcard', term: 'Free Cash Flow (FCF)', definition: 'Cash Flow from Operations minus Capital Expenditures. Represents the cash a company generates that\'s available to ALL investors (debt and equity). Used in DCF analysis.' },
    { type: 'flashcard', term: 'Key Drivers', definition: 'The 3-5 variables that most heavily determine a company\'s revenue and costs. Different by industry. Identifying the right key drivers is what separates a useful model from a useless one.' },
    { type: 'flashcard', term: 'Compounding', definition: 'Earning interest on your interest (not just on your principal). The mechanism that causes money to grow exponentially over time. More powerful with higher rates and longer time horizons.' },
    { type: 'flashcard', term: 'Multiple on Invested Capital (MoIC / MoM)', definition: 'Final Value ÷ Initial Investment. Measures the total return as a multiple — e.g., 2.5x means you turned $100 into $250. Used alongside IRR in private equity to evaluate deal returns.' },

    // FITB — Level 1
    { type: 'fitb', context: 'Time Value of Money', question: 'Even with zero inflation, money today is worth more than the same amount in the future because you could ___ it and earn a return.', answer: 'invest', explanation: 'The primary driver of TVM is opportunity cost — the ability to invest money today and earn something by next year. Inflation is a secondary consideration.' },
    { type: 'fitb', context: 'Discount Rate', question: 'The Discount Rate represents your ___ — what you could earn by investing in other, similar opportunities.', answer: ['opportunity cost', 'targeted yield'], explanation: 'The Discount Rate is your opportunity cost or targeted yield. If you don\'t invest here, how much could you earn elsewhere at the same risk level?' },
    { type: 'fitb', context: 'Valuation Formula', question: 'For a company with no cash flow growth, Company Value = Cash Flow / ___.', answer: ['Discount Rate', 'discount rate'], explanation: 'With no growth, the perpetuity formula simplifies to Value = CF / r. Growth adds value by widening future cash flows beyond this baseline.' },
    { type: 'fitb', context: 'IRR', question: 'The IRR is the discount rate at which the Net Present Value of an investment equals ___.', answer: ['zero', '0'], explanation: 'IRR is defined as the rate where NPV = 0. Invest when IRR exceeds your Discount Rate (WACC); the deal destroys value when IRR falls below it.' },
    { type: 'fitb', context: 'WACC', question: 'In the WACC formula, the after-tax cost of debt = Interest Rate × (1 – ___ Rate).', answer: ['Tax', 'tax'], explanation: 'Interest on debt is tax-deductible, so companies pay less in effective cost after the government subsidizes a portion. After-tax cost = rate × (1 – tax rate).' },
    { type: 'fitb', context: 'NPV Decision Rule', question: 'If an investment\'s Asking Price is below its Present Value, the NPV is ___ and you should invest.', answer: ['positive', 'greater than zero'], explanation: 'NPV = PV of cash flows – Asking Price. If PV > Asking Price, NPV > 0, meaning the investment clears your required return hurdle.' },
    { type: 'fitb', context: 'Present Value', question: 'PV = FV / (1 + r)^___, where n represents the number of periods.', answer: 'n', explanation: 'The exponent n counts how many compounding periods you are discounting across. The further out the cash flow, the more it is discounted.' },
    { type: 'fitb', context: 'Perpetuity Growth Formula', question: 'In the growing perpetuity formula, Value = CF / (r – g), the cash flow growth rate g must be ___ than the discount rate r.', answer: ['less', 'lower', 'smaller'], explanation: 'If g >= r, the denominator hits zero or goes negative, producing an infinite or nonsensical value. Growth must be sub-WACC for the formula to hold.' },
];

// ============================================================
// LEVEL 2: UNDERSTAND — Why/How concepts work
// ============================================================
const core_level2 = [
    {
        type: 'mc',
        context: 'Time Value of Money',
        question: 'Why is money today worth more than the same amount of money in 5 years?',
        options: [
            'Because inflation will erode the purchasing power of future money',
            'Because you could invest money today and earn more by next year — the main reason is opportunity cost, not inflation',
            'Because the government taxes future income at a higher rate than current income',
            'Because future cash flows are less certain and therefore must be discounted for risk'
        ],
        correct: 1,
        explanation: 'The primary reason is investment opportunity, not inflation. Even in a world with zero inflation, $100 today would still be worth more than $100 in 5 years because you could invest that $100 and earn something on it. Inflation is a secondary factor.'
    },
    {
        type: 'mc',
        context: 'Discount Rate',
        question: 'What does a higher Discount Rate imply about an investment?',
        options: [
            'It implies the investment is less risky and generates lower potential returns',
            'It implies the investment is higher risk, but also that investors expect higher potential returns',
            'It implies the company uses more Equity and less Debt in its capital structure',
            'It implies future cash flows are growing faster, so the company is worth more'
        ],
        correct: 1,
        explanation: 'A higher Discount Rate reflects BOTH higher risk and higher expected returns. Stock-market investments use a higher discount rate (~10-11%) than bonds (~2-3%) because they\'re riskier, but they also generate higher long-run returns. Risk and return always go together.'
    },
    {
        type: 'mc',
        context: 'WACC',
        question: 'Why is Cost of Equity always higher than Cost of Debt for the same company?',
        options: [
            'Because interest payments on Debt are tax-deductible, reducing the after-tax cost of Debt to near zero',
            'Because equity investors take on more risk — they\'re last in line in bankruptcy — and demand higher returns to compensate',
            'Because equity investors don\'t receive fixed payments, making their cash flows unpredictable',
            'Because debt principal must be repaid, meaning Debt holders have guaranteed capital return'
        ],
        correct: 1,
        explanation: 'Equity investors are last in line if the company defaults — Debt holders get paid first. This residual claim makes equity riskier, so investors demand higher returns. Debt\'s tax deductibility also helps: after-tax cost of Debt = rate × (1 – tax rate), making it even cheaper.'
    },
    {
        type: 'mc',
        context: 'NPV vs IRR',
        question: 'If an investment\'s Asking Price is less than its Present Value (NPV > 0), what must be true about its IRR?',
        options: [
            'IRR must equal the Discount Rate exactly',
            'IRR must be greater than the Discount Rate (WACC)',
            'IRR must be less than the Discount Rate (WACC)',
            'IRR is independent of the NPV calculation and tells you nothing additional'
        ],
        correct: 1,
        explanation: 'NPV > 0 means Asking Price < PV of Cash Flows. For NPV = 0, the discount rate would need to be HIGHER than WACC (to reduce the PV enough to match the asking price). That higher rate IS the IRR. So if NPV > 0, the IRR exceeds WACC. Both methods always agree.'
    },
    {
        type: 'mc',
        context: 'Valuation Formula',
        question: 'A company generates $200 in FCF per year (no growth). Your targeted yield is 10%. How much would you pay?',
        options: [
            '$1,000',
            '$1,500',
            '$2,000',
            '$3,000'
        ],
        correct: 2,
        explanation: 'With no growth: Value = Cash Flow / Discount Rate = $200 / 10% = $2,000. You\'d pay exactly $2,000 upfront to earn $200/year at a 10% yield. If you paid less, your actual return would exceed 10%; if more, it would fall below.'
    },
    {
        type: 'mc',
        context: 'Valuation Formula',
        question: 'Same company as above, but now FCF grows at 4% per year. How much would you pay at the same 10% Discount Rate?',
        options: [
            '$2,000',
            '$2,667',
            '$3,333',
            '$5,000'
        ],
        correct: 2,
        explanation: 'With growth: Value = Cash Flow / (Discount Rate – Growth Rate) = $200 / (10% – 4%) = $200 / 6% = $3,333. Growth adds $1,333 in value compared to the no-growth case because you\'re willing to pay more for rising future cash flows.'
    },
    {
        type: 'mc',
        context: 'Key Drivers',
        question: 'What is the purpose of identifying "Key Drivers" before building a model?',
        options: [
            'To comply with SEC regulations requiring all significant assumptions to be disclosed',
            'To focus on the 3-5 variables that most heavily impact results, avoiding a bloated model with hundreds of irrelevant assumptions',
            'To ensure the model matches the format used by investment banks when presenting to clients',
            'To identify which line items need to be audited before the financial statements are filed'
        ],
        correct: 1,
        explanation: 'Key drivers focus your modeling effort where it matters. For a retailer, same-store sales growth matters far more than the exact cost of office supplies. Building a 300-line model with 2-line assumptions for each creates false precision — a 5-driver model that stress-tests those drivers is far more valuable.'
    },

    // TF — Level 2
    { type: 'tf', context: 'Time Value of Money', question: 'Even if there were zero inflation, $100 today would still be worth more than $100 received one year from now.', answer: true, explanation: 'True. The primary driver of TVM is the ability to invest money today and earn a return. Inflation is secondary. Even in a zero-inflation world, investment opportunity creates a preference for money now.' },
    { type: 'tf', context: 'Discount Rate', question: 'A higher Discount Rate makes a company\'s intrinsic value higher, all else equal.', answer: false, explanation: 'False. A higher Discount Rate increases the denominator in the valuation formula (Value = CF / r, or CF / (r - g)), which reduces the present value of future cash flows and therefore lowers intrinsic value.' },
    { type: 'tf', context: 'Cost of Capital', question: 'For the same company, the Cost of Equity is always higher than the after-tax Cost of Debt.', answer: true, explanation: 'True. Equity holders are last in line in bankruptcy, so they bear more risk and demand higher returns. Debt\'s tax deductibility further reduces its effective cost below the Cost of Equity.' },
    { type: 'tf', context: 'WACC', question: 'WACC is calculated by weighting Cost of Equity and Cost of Debt by their market value proportions in the capital structure.', answer: true, explanation: 'True. WACC uses the market-value weights of equity and debt (not book values). The formula: % Equity × Cost of Equity + % Debt × Cost of Debt × (1 – Tax Rate).' },
    { type: 'tf', context: 'IRR vs Discount Rate', question: 'If a project\'s IRR equals exactly its WACC, the NPV of the project is positive.', answer: false, explanation: 'False. When IRR equals WACC exactly, NPV equals zero — the project earns precisely the required return, creating no excess value. NPV > 0 only when IRR exceeds WACC.' },
    { type: 'tf', context: 'Valuation Formula', question: 'In the perpetuity growth formula, if the cash flow growth rate rises from 3% to 5% (with a 10% discount rate), company value increases.', answer: true, explanation: 'True. At 3%: Value = CF / 7%. At 5%: Value = CF / 5%. The denominator shrinks from 7% to 5%, so value increases significantly. Higher growth rates raise value by narrowing the spread.' },
    { type: 'tf', context: 'NPV', question: 'Excel\'s NPV() function calculates true Net Present Value when you include the Year 0 investment as the first argument.', answer: false, explanation: 'False. Excel\'s NPV() function actually calculates Present Value, not NPV. To get true NPV, you must subtract the initial investment (Year 0 outflow) separately from the NPV() result.' },
    { type: 'tf', context: 'IRR', question: 'The IRR of an investment is affected by the investor\'s required Discount Rate (WACC).', answer: false, explanation: 'False. The IRR is a property of the investment\'s cash flows themselves — you are solving for the discount rate, not inputting one. The WACC is used afterward to judge whether the IRR is attractive.' },
];

// ============================================================
// LEVEL 3: APPLY — Apply concepts to scenarios
// ============================================================
const core_level3 = [
    {
        type: 'mc',
        context: 'Apply: Opportunity Cost',
        question: 'You can invest $10,000 in a friend\'s startup that might return 15% annually, or leave it in your savings account at 0.5%. Your best publicly available stock portfolio has returned 9% annually. Which Discount Rate should you use to evaluate the startup?',
        options: [
            '0.5% — the cost of the money you\'d be using (from savings)',
            '9% — your opportunity cost from the next-best comparable investment',
            '15% — the return the startup is projecting, since that\'s what you\'d need to beat',
            '12% — the average of all three options'
        ],
        correct: 1,
        explanation: 'The Discount Rate is your OPPORTUNITY COST — what you could earn elsewhere with comparable risk. Stocks (~9%) are the best comparable for a startup (both are equity-like). The 0.5% savings rate is the wrong benchmark; it\'s much less risky. So you\'d use ~9% as your hurdle for the startup.'
    },
    {
        type: 'mc',
        context: 'Apply: PV Calculation',
        question: 'You\'ll receive $1,000 in exactly 2 years. Your Discount Rate is 8%. What is the Present Value today?',
        options: [
            '$857',
            '$856',
            '$926',
            '$1,160'
        ],
        correct: 0,
        explanation: 'PV = FV / (1 + r)^n = $1,000 / (1.08)² = $1,000 / 1.1664 ≈ $857. This means you should pay up to $857 today to receive $1,000 in 2 years at an 8% required return. Paying $857 now and earning 8% for 2 years gets you back to $1,000.'
    },
    {
        type: 'mc',
        context: 'Apply: IRR Decision',
        question: 'A PE firm is evaluating a deal with an estimated IRR of 18%. Its targeted return for deals of this type is 20%. Should it proceed?',
        options: [
            'Yes — 18% is still a strong absolute return that exceeds most benchmarks',
            'No — because the IRR falls short of the 20% targeted return (Discount Rate), the deal destroys value on a risk-adjusted basis',
            'Yes — as long as IRR exceeds the company\'s blended WACC, the deal makes sense',
            'It depends entirely on whether comparable deals have been done at similar valuations recently'
        ],
        correct: 1,
        explanation: 'Decision rule: invest if IRR > Discount Rate (targeted return). Here IRR (18%) < Discount Rate (20%) → NPV is negative → the deal would underperform what the PE firm could earn elsewhere with similar risk. Even if 18% sounds good in isolation, the opportunity cost is 20%.'
    },
    {
        type: 'mc',
        context: 'Apply: WACC',
        question: 'A company is 70% equity (cost: 12%) and 30% debt (cost: 6%, tax rate 25%). What is its WACC?',
        options: [
            '9.9%',
            '9.75%',
            '9.45%',
            '8.4%'
        ],
        correct: 2,
        explanation: 'WACC = 70% × 12% + 30% × 6% × (1 – 25%) = 8.4% + 1.35% = 9.75%. Wait — actually: 70% × 12% = 8.4%, 30% × 6% × 0.75 = 1.35%, total = 9.75%. The tax shield on debt reduces its effective cost from 6% to 4.5%, making debt the cheaper funding source.'
    },

    // TF — Level 3
    { type: 'tf', context: 'Apply: IRR vs WACC', question: 'A company\'s overall WACC is 11%, but a specific expansion project has a WACC of 8% and an estimated IRR of 10%. The company should proceed with the project.', answer: true, explanation: 'True. You compare IRR to the project-specific WACC, not the company\'s blended WACC. The project\'s IRR (10%) exceeds its own WACC (8%), so it creates value. Using the company\'s overall 11% WACC here would be incorrect.' },
    { type: 'tf', context: 'Apply: Opportunity Cost', question: 'The correct Discount Rate to evaluate a real estate investment is always the current 10-year Treasury yield.', answer: false, explanation: 'False. The Discount Rate should reflect the opportunity cost for a comparable investment at the same risk level. Treasuries are risk-free; real estate carries credit, liquidity, and market risk. A risk-appropriate comparable return must be used.' },
    { type: 'tf', context: 'Apply: PV', question: 'If your Discount Rate is 10% and you receive $500 in 3 years, the Present Value today is approximately $376.', answer: true, explanation: 'True. PV = $500 / (1.10)^3 = $500 / 1.331 ≈ $375.66 ≈ $376. Discounting $500 back 3 years at 10% yields roughly $376 today.' },

    // FITB — Level 3
    { type: 'fitb', context: 'Apply: Valuation', question: 'A company generates $100 FCF/year with no growth. At a 10% Discount Rate, its intrinsic value is $___.', answer: ['1000', '$1,000', '1,000'], explanation: 'Value = CF / r = $100 / 10% = $1,000. This is the no-growth perpetuity formula. Paying exactly $1,000 earns you a 10% annual yield on your investment.' },
    { type: 'fitb', context: 'Apply: IRR', question: 'You invest $1,000 today and receive $2,000 in 5 years. The MoM (multiple on money) is ___.', answer: ['2x', '2.0x', '2'], explanation: 'MoM = Exit Value / Entry Value = $2,000 / $1,000 = 2.0x. The IRR on this investment is approximately 14.87% (the compounded annual return that doubles $1,000 in 5 years).' },
    { type: 'fitb', context: 'Apply: WACC', question: 'If a company\'s Cost of Debt is 8% and the tax rate is 25%, the after-tax cost of debt is ___%.', answer: ['6', '6%', '6.0'], explanation: 'After-tax cost of debt = 8% × (1 – 25%) = 8% × 0.75 = 6%. The government effectively subsidizes 25% of the interest cost through the tax deduction.' },
    { type: 'fitb', context: 'Apply: Valuation', question: 'FCF is $200/yr growing at 4%. Discount Rate is 10%. Company value = $200 / (___ – 4%).', answer: ['10%', '10', '0.10'], explanation: 'The denominator in the growing perpetuity formula is (Discount Rate – Growth Rate). Here: 10% – 4% = 6%, so Value = $200 / 6% = $3,333.' },
];

// ============================================================
// LEVEL 4: ANALYZE — Analyze implications and trade-offs
// ============================================================
const core_level4 = [
    {
        type: 'mc',
        context: 'Analyze: Valuation Sensitivity',
        question: 'A company\'s FCF grows at 3%, discount rate is 10%. If interest rates rise and push the discount rate to 12%, what happens to intrinsic value?',
        options: [
            'Value rises — higher rates mean higher expected returns, which increase company value',
            'Value falls — the denominator increases (12% – 3% = 9% vs. 7%), so value drops significantly',
            'Value stays the same — the cash flows haven\'t changed, so the value is unchanged',
            'Cannot determine — need to know if cash flows also change when interest rates rise'
        ],
        correct: 1,
        explanation: 'At 10% DR: Value = FCF / (10% – 3%) = FCF / 7%. At 12% DR: Value = FCF / (12% – 3%) = FCF / 9%. The value falls from FCF/7% to FCF/9% — a 22% decline. Rising discount rates are a major headwind for high-multiple growth companies because the denominator expands fast.'
    },
    {
        type: 'mc',
        context: 'Analyze: Growth vs. Discount Rate',
        question: 'Which scenario produces the highest company value for $100 of FCF?',
        options: [
            'Discount Rate 8%, Growth Rate 4%',
            'Discount Rate 10%, Growth Rate 3%',
            'Discount Rate 12%, Growth Rate 6%',
            'Discount Rate 7%, Growth Rate 2%'
        ],
        correct: 0,
        explanation: 'A: $100/(8%–4%) = $100/4% = $2,500. B: $100/(10%–3%) = $100/7% ≈ $1,429. C: $100/(12%–6%) = $100/6% ≈ $1,667. D: $100/(7%–2%) = $100/5% = $2,000. Option A wins. A tight spread between discount rate and growth rate inflates value the most — even a low absolute discount rate.'
    },
    {
        type: 'mc',
        context: 'Analyze: IRR Leverage',
        question: 'You buy a $500K property for $100K down (20%) + $400K debt. It generates $30K/year in net cash flows and you sell it for $550K in 5 years. Versus buying it 100% cash. Which scenario produces a higher IRR and why?',
        options: [
            'The all-cash scenario — no interest payments means more net cash flow',
            'The leveraged scenario — lower upfront investment amplifies the return on your $100K of equity',
            'Both produce the same IRR — leverage is neutral when deal returns equal the cost of debt',
            'The leveraged scenario, but only if the property value increases above $500K'
        ],
        correct: 1,
        explanation: 'Leverage amplifies returns by reducing the upfront equity investment. With $100K down, you\'re earning similar cash flows (net of interest) on a much smaller base. The IRR on your $100K equity is much higher than on $500K — leverage amplifies both gains and losses. If the deal goes bad, losses are also amplified.'
    },

    // TF — Level 4
    { type: 'tf', context: 'Analyze: PV Drivers', question: 'A company\'s Present Value increases if its expected future cash flows grow faster, its Discount Rate falls, OR its cash flow level increases.', answer: true, explanation: 'True. All three raise PV: more cash flows increase the numerator, a lower discount rate increases the PV of each dollar, and faster growth widens the stream of future cash flows.' },
    { type: 'tf', context: 'Analyze: Leverage', question: 'Using debt (leverage) in a deal always increases the equity IRR, regardless of the deal\'s underlying returns.', answer: false, explanation: 'False. Leverage amplifies returns in both directions. If the deal\'s underlying returns are below the cost of debt, leverage destroys equity value and lowers the equity IRR. Leverage only helps when the deal return exceeds the debt cost.' },
    { type: 'tf', context: 'Analyze: IRR Factors', question: 'Paying a lower Asking Price for an investment increases its IRR, all else equal.', answer: true, explanation: 'True. A lower purchase price means a higher return on the same future cash flows and exit price. IRR is directly sensitive to the initial investment: lower entry price → higher IRR.' },
    { type: 'tf', context: 'Analyze: Valuation', question: 'Terminal Value typically represents less than 20% of a company\'s total DCF enterprise value in a standard 5-year projection.', answer: false, explanation: 'False. Terminal Value typically represents 60-80% of total DCF enterprise value, even in a 5-year model. This is why the terminal growth rate assumption is the most contested input in any DCF.' },

    // FITB — Level 4
    { type: 'fitb', context: 'Analyze: Valuation', question: 'In a typical 5-10 year DCF, Terminal Value accounts for roughly ___% of total Enterprise Value.', answer: ['60-80', '60–80', '60% to 80%'], explanation: 'Terminal Value dominates DCF valuations, often representing 60-80% of total value. This is why the terminal growth rate and terminal year WACC assumptions are so critical to get right.' },
    { type: 'fitb', context: 'Analyze: MoM', question: 'A PE firm invests $200M in equity and exits for $450M. The Multiple on Money (MoM) is ___.', answer: ['2.25x', '2.25'], explanation: 'MoM = Exit Equity / Entry Equity = $450M / $200M = 2.25x. Over 5 years this equates to roughly a 17-18% IRR. Both MoM and IRR are used together because MoM ignores the time dimension.' },
    { type: 'fitb', context: 'Analyze: Valuation Sensitivity', question: 'FCF = $100, Discount Rate = 12%, Growth = 3%. Company Value = $100 / (___%).', answer: ['9', '9%'], explanation: 'Denominator = 12% – 3% = 9%. Value = $100 / 9% ≈ $1,111. If the discount rate rose to 14%, the denominator jumps to 11% and value falls to ~$909 — a 18% decline from a 2% rate move.' },
];

// ============================================================
// LEVEL 5: EVALUATE — Judge scenarios and trade-offs
// ============================================================
const core_level5 = [
    {
        type: 'mc',
        context: 'Evaluate: Model Limitations',
        question: 'A junior analyst tells you: "My DCF model shows the company is worth exactly $2,847 per share. We should bid exactly that much." What is the major problem with this thinking?',
        options: [
            'DCF models are not allowed to be used in M&A transactions — only comparable companies analysis is accepted',
            'Models produce point estimates that create false precision; small input changes cause large value swings, so a range and scenario analysis are more appropriate',
            'The junior analyst should have used the Gordon Growth Model instead, which produces more reliable point estimates',
            'The problem is the $7 fraction — share prices are always rounded to the nearest dollar in bids'
        ],
        correct: 1,
        explanation: 'DCF models are highly sensitive to input assumptions. Changing the growth rate by 1% or the WACC by 50bps can swing the output by 20-30%. A model that says $2,847 is false precision — a $2,500-$3,200 range based on sensitivity analysis is far more honest and actionable. Models inform decisions; they don\'t make them.'
    },
    {
        type: 'mc',
        context: 'Evaluate: Investment Decision',
        question: 'Two deals have these parameters: Deal A — IRR 22%, WACC 18%. Deal B — IRR 28%, WACC 25%. Which should you prefer, and why?',
        options: [
            'Deal B — higher absolute IRR always wins',
            'Deal A — the "spread" (IRR – WACC) is wider: 22%–18% = 4% vs. 28%–25% = 3%. Risk-adjusted, Deal A creates more value.',
            'Deal B — a 3% spread on a 25% WACC is higher dollar value than a 4% spread on an 18% WACC',
            'You cannot compare the two deals without knowing the holding period and initial investment size'
        ],
        correct: 1,
        explanation: 'You always compare IRR to the project-specific WACC. Deal A\'s spread (IRR – WACC = 4%) exceeds Deal B\'s spread (3%). Deal A creates more value relative to its risk. This is why you compare project IRR to project WACC, not the company\'s blended WACC or an arbitrary hurdle rate.'
    },
    {
        type: 'mc',
        context: 'Evaluate: Intrinsic vs. Market Value',
        question: 'Your DCF shows a company\'s intrinsic value is $3,000. The market values it at $4,200 (implying 5% perpetuity growth). Your model assumes 3% growth. Should you buy, sell, or hold?',
        options: [
            'Buy — the higher market valuation signals that other investors have done better research',
            'Don\'t buy (and short if you hold) — the market is pricing in more growth than your analysis supports; the stock appears overvalued',
            'Buy — a higher market price means the stock has momentum, which is the best predictor of future returns',
            'Hold — the correct answer is always to hold until both values converge'
        ],
        correct: 1,
        explanation: 'Your Intrinsic Value ($3,000) < Market Value ($4,200) → the stock is expensive relative to your analysis. The market is betting on 5% perpetual growth; you think 3% is more realistic. If you\'re right, the stock should fall. Don\'t buy. A contrarian position (short) would be appropriate if you have conviction.'
    },

    // TF — Level 5
    { type: 'tf', context: 'Evaluate: Model Use', question: 'A financial model should dictate an investment decision on its own, as long as the inputs are carefully researched.', answer: false, explanation: 'False. Models inform decisions but never dictate them. Like DNA evidence in a trial, a model is one input among many — qualitative factors, market conditions, and strategic considerations all matter. You never decide solely on the numbers.' },
    { type: 'tf', context: 'Evaluate: IRR Comparison', question: 'When comparing two investments, the one with the higher IRR is always the better investment.', answer: false, explanation: 'False. The better investment is the one with the higher IRR relative to its own WACC (i.e., the larger IRR–WACC spread). An investment with 28% IRR against a 25% WACC creates less value than one with 22% IRR against an 18% WACC.' },
    { type: 'tf', context: 'Evaluate: Valuation Complexity', question: 'Valuation is straightforward once you know a company\'s cash flows, growth rate, and discount rate.', answer: false, explanation: 'False. There are many types of "cash flow," the discount rate is difficult to estimate and may vary by cash flow type, growth rate estimation requires extensive modeling, and "company value" depends on which investors and parts of the company you\'re including.' },
    { type: 'tf', context: 'Evaluate: Intrinsic vs Market', question: 'If your DCF intrinsic value exceeds the current market price, the investment is potentially undervalued and worth buying (assuming your analysis is correct).', answer: true, explanation: 'True. Intrinsic Value > Market Value implies the asking price is below what your analysis says it\'s worth — NPV > 0 on the purchase. This is the classic value investing signal, subject always to the quality of your assumptions.' },
];

// ============================================================
// LEVEL 6: CREATE — Multi-step calculations
// ============================================================
const core_level6 = [
    {
        type: 'mc',
        context: 'Create: Full Valuation',
        question: 'A company generates $150 FCF in Year 1, growing at 5% per year for 5 years, then stable at 2% growth forever. Discount rate: 10%. Year 5 FCF ≈ $191.4. Terminal Value = Year 6 FCF / (10% – 2%). What is the Terminal Value?',
        options: [
            '$1,914',
            '$2,393',
            '$2,441',
            '$2,675'
        ],
        correct: 2,
        explanation: 'Year 6 FCF = Year 5 FCF × (1 + 2%) = $191.4 × 1.02 ≈ $195.2. TV = $195.2 / (10% – 2%) = $195.2 / 8% = $2,440. This terminal value represents the value of all cash flows from Year 6 onward at a 2% stable growth rate. It would then be discounted back 5 years to get the present value.'
    },
    {
        type: 'mc',
        context: 'Create: IRR Sensitivity',
        question: 'PE firm buys a company for $500 (5x $100 EBITDA). Uses $200 equity + $300 debt. After 5 years, EBITDA grew to $130. Debt repaid to $200. Sells at same 5x multiple. Exit EV = $650, equity = $650 – $200 = $450. What is the MoM on equity?',
        options: [
            '1.8x',
            '2.0x',
            '2.25x',
            '2.5x'
        ],
        correct: 2,
        explanation: 'MoM = Exit Equity / Entry Equity = $450 / $200 = 2.25x. The PE firm invested $200 in equity and received $450 back — a 2.25x multiple. Over 5 years, this corresponds to roughly a 17-18% IRR (use IRR function: -200, 0, 0, 0, 0, 450). Debt paydown and EBITDA growth both contributed to the equity return.'
    }
];

// ============================================================
// ORDERING QUESTIONS
// ============================================================
const core_order = [
    {
        level: 3,
        question: 'Order the steps in the Financial Modeling Process (Step 1 through Step 6):',
        items: [
            '1. Decide on the Purpose of Your Analysis',
            '2. Do Background Research',
            '3. Identify the Key Drivers',
            '4. Gather Data for Peer Companies',
            '5. Build Your Analysis',
            '6. Present Your Conclusions'
        ],
        explanation: 'The process is: decide the question → research → identify drivers → gather comps → build → present. You can\'t identify drivers before understanding the company, and you can\'t present before building. The sequence prevents wasted effort and ensures conclusions are grounded in evidence.'
    },
    {
        level: 4,
        question: 'In a DCF, rank these components by their typical % of total Enterprise Value (highest to lowest):',
        items: [
            '1. Terminal Value (~60-80% of total EV)',
            '2. Year 3-5 Cash Flows (~15-25% of total EV)',
            '3. Year 1-2 Cash Flows (~5-10% of total EV)'
        ],
        explanation: 'Terminal Value dominates a DCF (often 60-80%). This is why the terminal growth rate assumption is the most important — and most contested — part of any DCF. Year 1-2 cash flows are discounted the least but are the smallest in dollar terms for most growing companies.'
    },
    {
        level: 2,
        question: 'Order these funding sources from cheapest to most expensive (after-tax cost) for a company:',
        items: [
            '1. Senior Secured Debt (lowest risk, lowest cost)',
            '2. Subordinated / Mezzanine Debt',
            '3. Preferred Stock',
            '4. Common Equity (highest risk, highest cost)'
        ],
        explanation: 'In bankruptcy, senior secured debt is paid first, then sub debt, then preferred, then common equity. More senior = lower risk = lower expected return = lower cost. Common equity is last in line and most expensive. This hierarchy applies to both risk and cost of capital.'
    }
];

// ============================================================
// FILL-IN-THE-BLANK (NUMERICAL SCENARIOS)
// ============================================================
const core_fillin = [
    {
        level: 3,
        type: 'fillin',
        scenario: 'Company generates $100 FCF/year with no growth. Discount Rate is 8%. Calculate the key valuation metrics.',
        is_fields: [
            { label: 'Annual Free Cash Flow ($)', answer: 100, hint: 'Given directly in the scenario.' },
            { label: 'Discount Rate (%)', answer: 8, hint: 'Given directly in the scenario.' }
        ],
        cfs_fields: [
            { label: 'Intrinsic Value (no growth formula)', answer: 1250, hint: '$100 / 8% = $1,250' },
            { label: 'Max price to pay (= Intrinsic Value)', answer: 1250, hint: 'You\'d pay at most $1,250 to earn exactly 8%.' }
        ],
        bs_fields: [
            { label: 'If DR rises to 10%: new value', answer: 1000, hint: '$100 / 10% = $1,000' },
            { label: 'Value lost from rate increase', answer: 250, hint: '$1,250 – $1,000 = $250 decline.' }
        ],
        explanation: 'With no growth: Value = Cash Flow / Discount Rate = $100/8% = $1,250. If rates rise to 10%: $100/10% = $1,000. A 2% rate increase destroys $250 (20%) of value. This sensitivity is why DCF analysis always includes WACC sensitivity tables.'
    },
    {
        level: 6,
        type: 'fillin',
        scenario: 'Company: FCF $200/yr growing at 5%. Discount Rate 12%. Calculate Intrinsic Value and compare to a Market Price of $3,800.',
        is_fields: [
            { label: 'FCF ($)', answer: 200, hint: 'Given in scenario.' },
            { label: 'Growth Rate (%)', answer: 5, hint: 'Given in scenario.' }
        ],
        cfs_fields: [
            { label: 'Discount Rate (%)', answer: 12, hint: 'Given in scenario.' },
            { label: 'DR minus Growth Rate (denominator)', answer: 7, hint: '12% – 5% = 7%.' }
        ],
        bs_fields: [
            { label: 'Intrinsic Value ($)', answer: 2857, hint: '$200 / 7% = $2,857 (round to nearest dollar).' },
            { label: 'Overvalued (+) or Undervalued (–) vs. market?', answer: 943, hint: '$3,800 – $2,857 = $943 overvalued. The market prices in more growth than justified.' }
        ],
        explanation: 'Intrinsic Value = $200 / (12% – 5%) = $200 / 7% = $2,857. Market price is $3,800, implying the market expects higher growth or a lower discount rate than your analysis. Since Intrinsic Value < Market Value, the stock appears overvalued by ~$943 on your assumptions.'
    }
];

// ============================================================
// ASSEMBLE
// ============================================================
const QUESTIONS_CORE = {
    1: core_level1,
    2: core_level2,
    3: core_level3,
    4: core_level4,
    5: core_level5,
    6: core_level6,
    order: core_order,
    fillin: core_fillin
};
