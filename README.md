# n8n-nodes-localith

[![npm version](https://img.shields.io/npm/v/n8n-nodes-localith.svg)](https://www.npmjs.com/package/n8n-nodes-localith)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![n8n community node](https://img.shields.io/badge/n8n-community--node-orange)](https://www.npmjs.com/package/n8n-nodes-localith)

> Access your Google Business reviews, listings, and location metrics directly in n8n — and build powerful automations, dashboards, or your own reputation management platform on top of them.

---

## 🌐 What is Localith?

[Localith](https://localith.ai) is a Google Business Profile management platform that gives you full programmatic access to your locations, reviews, and performance metrics.

Think of it as the **Google Business API made simple**. With this n8n node, you can pull all of that data into any workflow — no complex API setup required.

---

## 🚀 What can you build?

| Use Case | Description |
|---|---|
| 📊 Custom dashboards | Sync review data to Airtable, Notion, or Google Sheets |
| 🔔 Review alerts | Get Slack or email notifications the moment a new review comes in |
| 🤖 AI reply automation | Pipe reviews into an AI node and auto-generate replies |
| 📈 Reputation reporting | Build weekly performance reports for clients or internal teams |
| 🏗️ Your own platform | Use Localith as the data layer and build your own review management tool |
| 🔁 Multi-location sync | Manage hundreds of locations from a single workflow |

---

## ⚙️ Operations

### 📍 Listings
| Operation | Description |
|---|---|
| Get all listings | Fetch all your Google Business locations |
| Get listing by ID | Retrieve details for a specific location |
| Update listing | Modify listing information |

### ⭐ Reviews
| Operation | Description |
|---|---|
| Get reviews | Fetch all reviews across your locations, with filtering by rating, date, and source |
| Get review metrics | Aggregate review stats (average rating, total count, trends) |

### 📈 Metrics
| Operation | Description |
|---|---|
| Get listing metrics | Impressions, clicks, calls, direction requests per location |
| Get item metrics | Performance data for individual posts or products |

### 📣 Content Publishing
| Operation | Description |
|---|---|
| Publish media | Upload and publish content to your Google Business profiles |

---

## 🔐 Authentication

This node uses **API Key** authentication. You can find your API key in your [Localith dashboard](https://localith.ai).

---

## 📦 Installation

In your n8n instance go to **Settings → Community Nodes → Install** and enter:

```
n8n-nodes-localith
```

---

## 💡 Example — Automated review alerts with AI replies

```
⏱ Schedule Trigger (every hour)
  ↓
📍 Localith: Get Reviews (new reviews since last run)
  ↓
🔀 IF Node (filter 1–3 star reviews)
  ↓
🤖 OpenAI Node (generate professional reply)
  ↓
💬 Slack Node (send review + suggested reply for team approval)
```

---

## 🔗 Links

| | |
|---|---|
| 🌐 Website | [localith.ai](https://localith.ai) |
| 📦 npm | [n8n-nodes-localith](https://www.npmjs.com/package/n8n-nodes-localith) |
| 💻 GitHub | [azhderskam/n8n-nodes-localith](https://github.com/azhderskam/n8n-nodes-localith) |
| 📖 API Docs | [embedsocial.com/app/api/documentation](https://embedsocial.com/app/api/documentation) |