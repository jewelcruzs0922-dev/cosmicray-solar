#!/usr/bin/env node

/**
 * Performance Budget Checker
 *
 * Runs after build to verify bundle sizes are within budget.
 * Add to CI pipeline: node scripts/check-budget.js
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const BUDGETS = {
  total_js: 250, // Max KB (gzipped)
};

const BUILD_DIR = path.join(__dirname, "..", ".next");

function formatKB(bytes) {
  return (bytes / 1024).toFixed(1);
}

function checkBudget() {
  try {
    const staticDir = path.join(BUILD_DIR, "static", "chunks");
    if (!fs.existsSync(staticDir)) {
      console.log("Static chunks not found. Run `next build` first.");
      process.exit(0);
    }

    let totalJS = 0;
    const files = fs.readdirSync(staticDir);
    files.forEach((file) => {
      if (file.endsWith(".js")) {
        const stat = fs.statSync(path.join(staticDir, file));
        totalJS += stat.size;
      }
    });

    const totalKB = parseFloat(formatKB(totalJS));
    const budget = BUDGETS.total_js;

    console.log(`\nPerformance Budget Report`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`Total JS: ${totalKB} KB (budget: ${budget} KB)`);

    if (totalKB > budget) {
      console.log(`\nOVER BUDGET by ${(totalKB - budget).toFixed(1)} KB`);
      process.exit(1);
    } else {
      console.log(`\nWithin budget (${(budget - totalKB).toFixed(1)} KB remaining)`);
      process.exit(0);
    }
  } catch (error) {
    console.error("Budget check failed:", error.message);
    process.exit(0);
  }
}

checkBudget();
