/**
 * Uptime Monitoring Configuration
 *
 * Configure these endpoints in your monitoring service:
 * - UptimeRobot (free): https://uptimerobot.com
 * - BetterStack (free tier): https://betterstack.com
 * - Checkly (free tier): https://checklyhq.com
 *
 * Add these URLs to monitor:
 */

export const monitoredEndpoints = [
  {
    name: "Homepage",
    url: "https://www.cosmicray.com",
    expectedStatus: 200,
    interval: 60, // seconds
  },
  {
    name: "Contact Page",
    url: "https://www.cosmicray.com/contact",
    expectedStatus: 200,
    interval: 300,
  },
  {
    name: "Blog",
    url: "https://www.cosmicray.com/blog",
    expectedStatus: 200,
    interval: 300,
  },
  {
    name: "Sitemap",
    url: "https://www.cosmicray.com/sitemap.xml",
    expectedStatus: 200,
    interval: 600,
  },
  {
    name: "Health Check API",
    url: "https://www.cosmicray.com/api/health",
    expectedStatus: 200,
    interval: 60,
  },
];

/**
 * Alert Channels Configuration
 *
 * Configure these in your monitoring service:
 * - Email: team@cosmicray.com
 * - Slack: #ops-alerts channel
 * - PagerDuty: for critical (homepage down) alerts
 */
export const alertChannels = {
  email: "team@cosmicray.com",
  slack: "#ops-alerts",
  critical: "pagerduty",
};
