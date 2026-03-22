// ============================================================
// MODULES REGISTRY — Central definition of all available guides
// ============================================================

const MODULES = {
    'accounting': {
        id: 'accounting',
        title: 'Accounting & 3 Statements',
        icon: '&#x1F4CA;',
        description: 'BIWS Accounting Guide — 14 Key Rules, 72 interview questions',
        guideNote: 'This app reinforces the BIWS Accounting & 3 Statements guide. Read the guide first before using this app.',
        getLessons: () => LESSONS_ACCOUNTING,
        getQuestions: () => QUESTIONS_ACCOUNTING,
    },
    'core': {
        id: 'core',
        title: 'Core Financial Modeling Concepts',
        icon: '&#x1F3D7;',
        description: 'BIWS Core Concepts Guide — 5 Key Rules: TVM, PV, IRR, WACC, Valuation',
        guideNote: 'This app reinforces the BIWS Core Financial Modeling Concepts guide. Read the guide first before using this app.',
        getLessons: () => LESSONS_CORE,
        getQuestions: () => QUESTIONS_CORE,
    },
    'adv-accounting': {
        id: 'adv-accounting',
        title: 'Advanced Accounting',
        icon: '&#x1F4D0;',
        description: 'BIWS Advanced Accounting Guide — 10 Key Rules: Debt, Convertibles, Equity Method, SBC, Pensions',
        guideNote: 'This app reinforces the BIWS More Advanced Accounting guide. Read the guide first before using this app.',
        getLessons: () => LESSONS_ADV_ACCOUNTING,
        getQuestions: () => QUESTIONS_ADV_ACCOUNTING,
    },
    'ev': {
        id: 'ev',
        title: 'Equity Value, Enterprise Value & Multiples',
        icon: '&#x1F4B9;',
        description: 'BIWS EV & Multiples Guide — 14 Key Rules: Equity Value, TEV Bridge, EBITDA, FCF, Multiples',
        guideNote: 'This app reinforces the BIWS Equity Value, Enterprise Value & Multiples guide. Read the guide first before using this app.',
        getLessons: () => LESSONS_EV,
        getQuestions: () => QUESTIONS_EV,
    },
    'valuation': {
        id: 'valuation',
        title: 'Valuation & DCF Analysis',
        icon: '&#x1F4C9;',
        description: 'BIWS Valuation Guide — 11 Key Rules: DCF, WACC, Terminal Value, Comps, Precedent Transactions',
        guideNote: 'This app reinforces the BIWS Valuation & DCF Analysis guide. Read the guide first before using this app.',
        getLessons: () => LESSONS_VALUATION,
        getQuestions: () => QUESTIONS_VALUATION,
    },
    'ma': {
        id: 'ma',
        title: 'M&A Deals & Merger Models',
        icon: '&#x1F91D;',
        description: 'BIWS M&A Guide — 8 Key Rules: Why M&A, EPS Accretion/Dilution, Purchase Price, Merger Model',
        guideNote: 'This app reinforces the BIWS M&A Deals & Merger Models guide. Read the guide first before using this app.',
        getLessons: () => LESSONS_MA,
        getQuestions: () => QUESTIONS_MA,
    },
    'lbo': {
        id: 'lbo',
        title: 'Leveraged Buyouts & LBO Models',
        icon: '&#x1F4B0;',
        description: 'BIWS LBO Guide — 9 Key Rules: LBO mechanics, Sources & Uses, Cash Flows, IRR, Exit',
        guideNote: 'This app reinforces the BIWS Leveraged Buyouts & LBO Models guide. Read the guide first before using this app.',
        getLessons: () => LESSONS_LBO,
        getQuestions: () => QUESTIONS_LBO,
    },
};

// Currently active module ID (default: accounting on load)
let ACTIVE_MODULE_ID = 'accounting';

// ============================================================
// setActiveModule — called by auth.js when user picks a guide
// ============================================================
function setActiveModule(id) {
    const mod = MODULES[id];
    if (!mod) return;
    ACTIVE_MODULE_ID = id;
    window.ACTIVE_LESSONS = mod.getLessons();
    window.ACTIVE_QUESTIONS = mod.getQuestions();
    window.ACTIVE_MODULE = mod;

    // Update landing screen title & guide notice
    const titleEl = document.getElementById('module-title');
    if (titleEl) titleEl.textContent = mod.title;

    const noticeEl = document.getElementById('guide-notice-text');
    if (noticeEl) noticeEl.textContent = mod.guideNote;
}

// Initialize accounting on load so game.js always has valid data
document.addEventListener('DOMContentLoaded', () => {
    setActiveModule('accounting');
});
