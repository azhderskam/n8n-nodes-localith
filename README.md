n8n-nodes-localith

Access your Google Business reviews, listings, and location metrics directly in n8n — and build powerful automations, dashboards, or your own reputation management platform on top of them.

What is Localith?
Localith is a Google Business Profile management platform that gives you full programmatic access to your locations, reviews, and performance metrics — think of it as the Google Business API made simple. With this n8n node, you can pull all of that data into any workflow.
What can you build?

📊 Custom dashboards — sync your review data to Airtable, Notion, or Google Sheets
🔔 Review alerts — get Slack or email notifications the moment a new review comes in
🤖 AI-powered reply automation — pipe reviews into an AI node and auto-generate replies
📈 Reputation reporting — build weekly performance reports for clients or internal teams
🏗️ Your own platform — use Localith as the data layer and build your own review management tool on top
🔁 Multi-location sync — manage hundreds of locations from a single workflow

Operations
Listings

Get all listings — fetch all your Google Business locations
Get listing by ID — retrieve details for a specific location
Update listing — modify listing information

Reviews

Get reviews — fetch all reviews across your locations, with filtering by rating, date, and source
Get review metrics — aggregate review stats (average rating, total count, trends)

Metrics

Get listing metrics — impressions, clicks, calls, direction requests per location
Get item metrics — performance data for individual posts or products

Content Publishing

Publish media — upload and publish content to your Google Business profiles

Authentication
This node uses API Key authentication. You can find your API key in your Localith dashboard.
Installation
In your n8n instance go to Settings → Community Nodes → Install and enter:
n8n-nodes-localith
Example use case — Automated review alerts with AI replies

Schedule trigger — runs every hour
Localith: Get Reviews — fetches new reviews since last run
IF node — filters for 1-3 star reviews
OpenAI node — generates a professional reply
Slack node — sends the review + suggested reply to your team for approval

Links

🌐 Localith Website
📦 npm Package
💻 GitHub Repository
📖 API Documentation
