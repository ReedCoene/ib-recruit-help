// ============================================================
// LESSONS — Core Financial Modeling Concepts (BIWS 04-01)
// ============================================================
const LESSONS_CORE = [
    {
        id: 'what-is-modeling',
        title: 'What Is Financial Modeling?',
        icon: '&#x1F3D7;',
        color: '#6366f1',
        audio: "core_financial_modeling_overview_compressed.mp3",
        cards: [
            {
                term: 'Financial Model',
                what: 'A quantitative estimate of a company\'s future revenues, expenses, and cash flows used to support investment or advisory decisions. Like a blueprint for a building — it captures the key structure, not every detail.',
                why: 'Decisions in finance are forward-looking. You need a structured estimate of what might happen in the future to justify recommending whether to invest, acquire, or sell. Models let you quantify your view and back it up with numbers.',
                example: 'You argue a stock is worth $200/share. Your friend says $100/share. You each build a model. Your model requires 30% sales growth; his requires 5%. Since companies tend to slow as they grow, his assumptions are more plausible — even though neither of you is "right."'
            },
            {
                term: 'Types of Financial Models',
                what: 'Three-statement models (IS/CFS/BS linked together), DCF models (intrinsic value from discounted cash flows), merger models (combined company financials), and LBO models (private equity return analysis). Each serves a different purpose.',
                why: 'The type of model depends on the question. "What is this company worth?" → DCF. "Will this acquisition improve EPS?" → Merger model. "Can we earn 20%+ IRR buying and flipping this company?" → LBO model.',
                example: 'An investment bank advising a retailer on whether to sell itself will build a DCF (intrinsic value), a public comps analysis (market value vs. peers), and a merger model (what a strategic buyer could pay). Three models, one decision.'
            },
            {
                term: 'Six Steps in the Modeling Process',
                what: '(1) Decide the purpose. (2) Do background research. (3) Identify key drivers. (4) Gather peer data if needed. (5) Build the analysis. (6) Present conclusions. Models are always built in service of a recommendation.',
                why: 'You cannot build a useful model without first understanding what question you\'re trying to answer. Step 1 prevents wasted effort — a DCF is irrelevant if the real question is "can this company afford to repay its Debt?"',
                example: 'For an airline: Key drivers are flights per quarter, load factor (% of seats filled), revenue per seat, and cost per flight. For a subscription SaaS: Monthly active users, churn rate, average revenue per user, CAC, and LTV.'
            },
            {
                term: 'Key Drivers',
                what: 'The 3-5 variables that most heavily determine a company\'s revenue and costs. Different for every industry — a retailer\'s key drivers (same-store sales, store count) differ completely from a biotech\'s (patients, price per patient, R&D spend).',
                why: 'A model with 200 assumptions is less useful than one with 5 precise key drivers. The goal is to identify what actually moves the needle so you can stress-test realistic scenarios rather than tweak irrelevant details.',
                example: 'Amazon\'s key model drivers include AWS revenue growth rate, e-commerce gross margin, Prime subscribers and ARPU, and fulfillment cost per unit. Get those right and the model tells the story, regardless of minor line items.'
            },
            {
                term: 'Model ≠ Decision',
                what: 'Financial models inform decisions — they do not make them. Like DNA evidence in a courtroom: it is part of the case, not the verdict. Soft factors (management quality, strategy, market dynamics) matter just as much.',
                why: 'Every model relies on uncertain inputs. If you change growth assumptions by 2%, the output changes materially. Models are tools for quantifying a hypothesis, not for eliminating judgment.',
                example: '"The DCF says the company is worth $500M. The strategic rationale is compelling. Management has a proven track record. We recommend proceeding." The model is one piece of the recommendation, not the entire thesis.'
            }
        ]
    },
    {
        id: 'time-value-of-money',
        title: 'The Time Value of Money',
        icon: '&#x23F3;',
        color: '#f59e0b',
        audio: "core_financial_modeling_overview_compressed.mp3",
        cards: [
            {
                term: 'Time Value of Money (TVM)',
                what: '$100 today is worth more than $100 in 5 years. The real reason is not inflation — it is that you can invest $100 today and earn MORE than $100 by next year.',
                why: 'Every investment decision boils down to: "Can I earn more with THIS investment than with other, similar investments?" If yes, invest. If no, don\'t. TVM is the foundation for all of DCF, IRR, and valuation.',
                example: 'Would you rather receive $100 today or $100 in 3 years? Always $100 today — you could invest it at 8% and have $125.97 in 3 years. Receiving it later means forgoing that investment income.'
            },
            {
                term: 'Opportunity Cost',
                what: 'What you give up by choosing one option over another. In finance: how much you could earn with similar investments elsewhere. This is the conceptual foundation of the Discount Rate.',
                why: 'Opportunity cost forces you to compare an investment\'s returns to your best alternative. A 6% return sounds great — unless you can earn 10% elsewhere with the same risk, in which case 6% is actually bad.',
                example: 'Choosing to put $140K into a high-deposit apartment vs. investing it elsewhere: If you can earn 10% annually, investing generates $14K/year — better than saving $12K in rent. If you can only earn 1%, take the high deposit.'
            },
            {
                term: 'Future Value (FV)',
                what: 'What an amount invested today grows to, given a compounding rate and time period. Formula: FV = PV × (1 + r)^n, where r = annual rate and n = number of periods.',
                why: 'Compounding is the mechanism by which money grows over time. The longer the time horizon and the higher the rate, the more dramatically the future value exceeds the present value.',
                example: '$100 invested at 10% for 3 years: FV = $100 × (1.10)³ = $133.10. That $33.10 comes from compounding — earning interest on your interest, not just on your original $100.'
            },
            {
                term: 'Present Value (PV)',
                what: 'What future cash flows are worth TODAY given a specific discount rate. Formula: PV = FV / (1 + r)^n. The inverse of Future Value — discounting back rather than compounding forward.',
                why: 'PV lets you compare cash flows that happen at different points in time by translating everything to today\'s dollars. This makes it possible to evaluate whether an investment is worth its asking price.',
                example: 'If your Discount Rate is 10%, $150K received in 2 years is worth $150K / (1.10)² = $123.97 today. You\'d only pay up to $123.97 for that future cash flow at a 10% target return.'
            }
        ]
    },
    {
        id: 'discount-rate-wacc',
        title: 'Discount Rate & WACC',
        icon: '&#x2696;',
        color: '#10b981',
        audio: "core_financial_modeling_overview_compressed.mp3",
        cards: [
            {
                term: 'Discount Rate',
                what: 'Your targeted yield, or opportunity cost — how much you could earn with OTHER, similar investments at a comparable level of risk. A higher Discount Rate means higher risk AND higher potential returns.',
                why: 'The Discount Rate determines how much you\'d pay for a future cash flow. Higher Discount Rate → lower PV (money worth less in future terms) → you pay less for the company. Lower Discount Rate → higher PV → you pay more.',
                example: 'Stock market: ~10-11% long-run annual return. Government bonds: ~2-3%. These are the Discount Rates you\'d use for each asset class. Higher stock-market rate reflects higher risk — market could drop 50% in any given year.'
            },
            {
                term: 'Weighted Average Cost of Capital (WACC)',
                what: 'The Discount Rate for valuing COMPANIES. Calculated as: (% Equity × Cost of Equity) + (% Debt × Cost of Debt × (1 – Tax Rate)). It represents the blended return required by ALL investors in a company.',
                why: 'Most companies use both Equity and Debt to fund themselves. WACC blends the cost of each source proportionally. Debt costs less than Equity because it\'s lower risk and interest is tax-deductible.',
                example: 'Company: 60% Equity at 10% cost, 40% Debt at 5% cost, 25% tax rate. WACC = 60% × 10% + 40% × 5% × (1 – 25%) = 6.0% + 1.5% = 7.5%.'
            },
            {
                term: 'Cost of Equity vs. Cost of Debt',
                what: 'Cost of Equity: the annual return equity investors expect (~10-15% for most companies). Cost of Debt: the interest rate the company pays on borrowed money (~4-8% typical). Equity always costs more than Debt for the same company.',
                why: 'Equity investors take on MORE risk than Debt investors: if the company goes bankrupt, Debt holders get paid first. Higher risk demands higher return. Also, interest on Debt is tax-deductible, reducing the after-tax cost of Debt further.',
                example: 'A company with 6% interest on Debt and 25% tax rate: after-tax cost of Debt = 6% × (1 – 25%) = 4.5%. If Cost of Equity is 11%, equity is more than twice as expensive as debt on an after-tax basis.'
            },
            {
                term: 'WACC in Real-Life Decisions',
                what: 'When evaluating a specific project or investment, always compare that investment\'s IRR to that investment\'s specific WACC (not the company\'s blended WACC). A risky project has a higher project-level WACC.',
                why: 'Using the company\'s blended WACC for every project would lead you to underfund safe projects (they look bad vs. company WACC) and overfund risky ones (they look good). Project-specific WACC corrects for this.',
                example: 'Virgin has a 10% corporate WACC. Virgin Galactic (risky): 15% WACC. Virgin Asia (stable): 8% WACC. A project with 12% IRR looks good vs. company WACC but fails for Galactic (12% < 15%). Always match IRR to the right WACC.'
            }
        ]
    },
    {
        id: 'pv-irr',
        title: 'Present Value, NPV & IRR',
        icon: '&#x1F522;',
        color: '#ec4899',
        audio: "core_financial_modeling_overview_compressed.mp3",
        cards: [
            {
                term: 'Net Present Value (NPV)',
                what: 'NPV = Present Value of future cash flows – Upfront Investment (Asking Price). If NPV > 0, invest. If NPV < 0, don\'t. CAUTION: The Excel NPV() function calculates PV, not NPV — you must subtract the initial investment yourself.',
                why: 'NPV answers the question: "After accounting for the time value of money, does this investment create or destroy value?" A positive NPV means the investment is worth more than it costs at your discount rate.',
                example: 'You pay $200K for an apartment. PV of future rents and sale at 2.8% discount rate = $216K. NPV = $216K – $200K = +$16K. Positive NPV → buy the apartment. If asking price rises to $220K: NPV = –$4K → don\'t buy.'
            },
            {
                term: 'Internal Rate of Return (IRR)',
                what: 'The discount rate at which NPV = 0. It\'s the "effective compounded annual return" on an investment. Decision rule: if IRR > Discount Rate (WACC), invest. If IRR < WACC, don\'t.',
                why: 'IRR lets you evaluate investments without knowing the exact discount rate upfront. You just need to know if the return you\'re getting (IRR) beats your opportunity cost (WACC). If yes, it\'s a better use of capital than alternatives.',
                example: 'Apartment: pay $200K, earn $12K/year rent, sell for $200K in 5 years. IRR = 6.0%. If your opportunity cost is 2.8%, IRR (6%) > WACC (2.8%) → invest. If another deal offers 8% for the same risk → don\'t invest here.'
            },
            {
                term: 'Why PV and IRR Methods Are Equivalent',
                what: 'If NPV > 0 (Asking Price < PV of cash flows), then IRR > WACC. If NPV < 0 (Asking Price > PV), then IRR < WACC. They always give the same invest/don\'t-invest answer for a conventional investment.',
                why: 'Both methods are comparing the same thing from different angles: one measures value in dollars, the other measures value as a rate. A higher discount rate reduces PV, so if PV still exceeds asking price, the IRR must beat that discount rate.',
                example: 'Apartment: PV @ 2.8% = $216K > asking price of $200K → NPV > 0. IRR = 6% > WACC of 2.8%. Both say invest. Same conclusion, different frame.'
            },
            {
                term: 'Discounted Cash Flow (DCF) Analysis',
                what: 'A valuation method where you project a company\'s future free cash flows, discount them to Present Value using WACC, and sum them up to get the company\'s Intrinsic Value. The DCF is the purest expression of TVM applied to companies.',
                why: 'DCF is grounded in first principles: a company is worth exactly what its future cash flows are worth today. Other methods (comps, precedents) are just comparisons to the market — the DCF is based on the underlying economics of the business.',
                example: 'Project FCF for 5 years. Estimate a "Terminal Value" for years beyond. Discount everything at WACC. Sum it all up → Implied Enterprise Value. Subtract net debt → Implied Equity Value. Divide by shares → Implied Share Price.'
            }
        ]
    },
    {
        id: 'valuation-formula',
        title: 'The Most Important Formula in Finance',
        icon: '&#x2728;',
        color: '#8b5cf6',
        audio: "core_financial_modeling_overview_compressed.mp3",
        cards: [
            {
                term: 'The Perpetuity Growth Formula',
                what: 'Company Value = Cash Flow / (Discount Rate – Cash Flow Growth Rate). Only valid when growth rate < discount rate and both are stable/constant into perpetuity. This is the terminal value formula at the core of every DCF.',
                why: 'Real companies don\'t generate the same cash flow forever — they grow. This formula accounts for growing cash flows by reducing the effective denominator. The faster the growth, the more you\'re willing to pay today for future cash flows.',
                example: 'Company generates $100/year of FCF, growing at 3%/year. Your targeted yield (Discount Rate) is 10%. Value = $100 / (10% – 3%) = $1,429. If no growth: $100 / 10% = $1,000. Growth adds $429 in value.'
            },
            {
                term: 'Four Levers of Company Value',
                what: 'Value increases if: (1) Cash Flow increases, (2) Discount Rate decreases, (3) Growth Rate increases. Value decreases if any of those three reverse. Higher growth and lower risk → dramatically higher value.',
                why: 'This is why revenue growth and margin improvement are so heavily scrutinized — they directly drive the numerator (cash flow) and can affect the denominator (lower risk → lower discount rate). Two levers for the price of one.',
                example: 'If a company cuts costs and grows FCF from $100 to $150, value rises from $1,429 to $2,143. If interest rates rise and push discount rate from 10% to 12%, value falls from $1,429 to $1,034. Both effects compound.'
            },
            {
                term: 'Why the Formula Doesn\'t Perfectly Hold in Real Life',
                what: 'Companies don\'t have a constant, stable growth rate. Growth typically starts high, then slows. Discount rates also change as a company matures and de-risks. So you need custom projections for years 1-10, then use the perpetuity formula for year 10+.',
                why: 'Applying the formula to a high-growth startup would dramatically overvalue it. The formula only works once growth has stabilized at a long-run rate consistent with GDP or the broader economy (typically 2-4%).',
                example: 'A tech company with 30% growth can\'t apply 30% as a perpetuity growth rate (it would exceed most discount rates, making value infinite). Instead: project cash flows year-by-year for 10 years, then use 3% terminal growth in the formula.'
            },
            {
                term: 'Intrinsic Value vs. Market Value',
                what: 'Intrinsic (Implied) Value: what YOUR analysis says the company is worth based on your assumptions. Market Value: what buyers and sellers in the market currently agree it\'s worth (price × shares for a public company).',
                why: 'These differ because people disagree about future growth rates, discount rates, and cash flows. When your Intrinsic Value > Market Value, the stock is "cheap" and you might invest. When Intrinsic Value < Market Value, the stock is "expensive."',
                example: 'Your model: FCF $100, growth 4%, DR 10% → Intrinsic Value $1,667. Market price implies 5% growth → Market Value $2,000. Market is pricing in more growth than you believe is realistic → don\'t buy at $2,000.'
            }
        ]
    }
];
