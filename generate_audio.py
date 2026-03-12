#!/usr/bin/env python3
"""
Generate NotebookLM audio overviews for each lesson section.
Run with: /home/rcoene/accounting-game/.venv/bin/python generate_audio.py
"""
import subprocess
import json
import time
import os
import sys

VENV_BIN = "/home/rcoene/accounting-game/.venv/bin"
NOTEBOOKLM = f"{VENV_BIN}/notebooklm"
AUDIO_DIR = "/home/rcoene/accounting-game/audio"

# Each section maps to a markdown source file we'll create
SECTIONS = [
    {
        "title": "Accounting - The Income Statement",
        "filename": "is-basics",
        "prompt": "A conversational deep dive on the Income Statement: Revenue, COGS, Gross Profit, Operating Expenses, Operating Income (EBIT), Net Income, and the two key rules for what goes on the IS. Use concrete examples with numbers.",
    },
    {
        "title": "Accounting - Working Capital Items",
        "filename": "working-capital",
        "prompt": "A conversational deep dive on Working Capital: Accounts Receivable, Accounts Payable, Deferred Revenue, Inventory, Prepaid Expenses, and the Change in Working Capital formula. Explain the timing differences between the IS and cash.",
    },
    {
        "title": "Accounting - CapEx Depreciation and PP&E",
        "filename": "capex-depreciation",
        "prompt": "A conversational deep dive on Capital Expenditures, Depreciation, Net PP&E, and the full CapEx cycle. Explain why CapEx doesn't go on the IS, how Depreciation works as a non-cash expense, and the tax savings.",
    },
    {
        "title": "Accounting - Debt Equity and Preferred Stock",
        "filename": "debt-equity",
        "prompt": "A conversational deep dive on issuing Debt vs Equity, Dividends, Stock Repurchases, and Preferred Stock. Cover tax deductibility of interest, dilution from equity, and how each flows through the three statements.",
    },
    {
        "title": "Accounting - The Balance Sheet",
        "filename": "balance-sheet",
        "prompt": "A conversational deep dive on the Balance Sheet: Assets = Liabilities + Equity, Current vs Non-Current items, Common Shareholders Equity components, and how the BS links to the CFS.",
    },
    {
        "title": "Accounting - The Cash Flow Statement",
        "filename": "cash-flow-statement",
        "prompt": "A conversational deep dive on the Cash Flow Statement: CFO, CFI, CFF, why the CFS exists, how it reconciles Net Income to actual cash, and the key adjustments in each section.",
    },
    {
        "title": "Accounting - Non-Cash Items and Deferred Taxes",
        "filename": "noncash-items",
        "prompt": "A conversational deep dive on non-cash items: D&A, SBC, Write-Downs, Deferred Tax Liabilities, Deferred Tax Assets, NOLs, and Gains/Losses on asset sales. Cover the tax-deductible vs non-deductible distinction.",
    },
    {
        "title": "Accounting - Operating and Finance Leases",
        "filename": "leases",
        "prompt": "A conversational deep dive on Operating Leases vs Finance Leases under both US GAAP and IFRS. Cover the Right-of-Use Asset, Lease Liability, how interest and depreciation are split, and the IFRS adjustment for FCF.",
    },
    {
        "title": "Accounting - M&A Goodwill and Intangibles",
        "filename": "ma-goodwill",
        "prompt": "A conversational deep dive on M&A accounting: combining financial statements, creating Goodwill and Other Intangibles, Goodwill Impairments, and Amortization of acquisition-related Intangibles (non-tax-deductible).",
    },
    {
        "title": "Accounting - Free Cash Flow and Key Metrics",
        "filename": "fcf-metrics",
        "prompt": "A conversational deep dive on FCF, EBIT vs EBITDA, Leverage and Interest Coverage ratios, ROE/ROA/ROIC, and the Cash Conversion Cycle. Use concrete numerical examples.",
    },
    {
        "title": "Accounting - US GAAP vs IFRS",
        "filename": "gaap-ifrs",
        "prompt": "A conversational deep dive on the key differences between US GAAP and IFRS: CFS starting points, Dividend placement, lease treatment, and how to adjust IFRS financials for comparability.",
    },
]


def run(cmd, timeout=60):
    """Run a CLI command and return stdout."""
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)
    if result.returncode != 0:
        print(f"  ERROR: {result.stderr.strip()}")
    return result.stdout.strip(), result.returncode


def main():
    os.makedirs(AUDIO_DIR, exist_ok=True)

    # Check which audio files already exist
    existing = set(os.listdir(AUDIO_DIR))

    for i, section in enumerate(SECTIONS):
        print(f"\n[{i+1}/{len(SECTIONS)}] {section['title']}")

        # Check if we already have this audio
        mp3_files = [f for f in existing if section["filename"] in f.lower()]
        if mp3_files:
            print(f"  SKIP: Audio already exists ({mp3_files[0]})")
            continue

        # Create notebook
        print("  Creating notebook...")
        out, rc = run([NOTEBOOKLM, "create", section["title"]])
        if rc != 0:
            continue
        notebook_id = out.split(":")[0].replace("Created notebook", "").strip()
        print(f"  Notebook: {notebook_id}")

        # Set as current
        run([NOTEBOOKLM, "use", notebook_id])

        # Create source markdown from lessons.js content
        source_path = f"/tmp/{section['filename']}.md"
        # We'll use the lesson content from the JS file (already created earlier)
        # For now, create a simple source
        print("  Adding source...")
        if os.path.exists(source_path):
            out, rc = run([NOTEBOOKLM, "source", "add", source_path], timeout=30)
        else:
            print(f"  WARNING: Source file {source_path} not found. Creating placeholder.")
            with open(source_path, "w") as f:
                f.write(f"# {section['title']}\n\nPlease generate content based on the prompt.\n")
            out, rc = run([NOTEBOOKLM, "source", "add", source_path], timeout=30)

        if rc != 0:
            continue

        # Generate audio
        print("  Generating audio (this takes a few minutes)...")
        out, rc = run(
            [NOTEBOOKLM, "generate", "audio", section["prompt"],
             "--format", "deep-dive", "--wait"],
            timeout=600,
        )
        if rc != 0:
            print("  Audio generation may still be in progress. Check with: notebooklm artifact list")
            continue

        # Download
        print("  Downloading audio...")
        out, rc = run(
            [NOTEBOOKLM, "download", "audio", "--latest",
             os.path.join(AUDIO_DIR, f"{section['filename']}.mp3")],
            timeout=120,
        )
        if rc == 0:
            print(f"  Done: {section['filename']}.mp3")
        else:
            print("  Download may need manual intervention.")

    print("\n=== All sections processed ===")
    print(f"Audio files in {AUDIO_DIR}:")
    for f in sorted(os.listdir(AUDIO_DIR)):
        print(f"  {f}")


if __name__ == "__main__":
    main()
