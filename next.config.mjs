import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your Next.js config here
};

const sentryWebpackPluginOptions = {
  // Organization and project must match your Sentry account
  org: "styxstiks", // Replace with the correct organization
  project: "javascript-nextjs", // Replace with the correct project

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  silent: !process.env.CI, // Only print logs for uploading source maps in CI
  widenClientFileUpload: true, // Upload a larger set of source maps for better stack traces
  hideSourceMaps: true, // Hides source maps from generated client bundles
  disableLogger: true, // Automatically tree-shake Sentry logger statements
  automaticVercelMonitors: true, // Enable automatic instrumentation of Vercel Cron Monitors
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
