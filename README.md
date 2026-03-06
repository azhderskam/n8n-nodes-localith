# n8n-nodes-localith

This is an n8n community node for **Localith** — a platform for managing business listings, reviews, and local SEO (powered by [EmbedSocial](https://embedsocial.com)).

## Installation

In n8n, go to **Settings → Community Nodes → Install** and enter:

```
n8n-nodes-localith
```

## Credentials

You need a Localith API token to use this node.

1. Log in to your Localith account
2. Go to **Settings → API**
3. Copy your API token
4. In n8n, create a new **Localith API** credential and paste your token

## Supported Operations

### Item
- **Get Many** — Retrieve reviews with optional filters (sourceId, sort, page, pageSize)

### Listing
- **Get Many** — Retrieve all listings with optional filters (name, address, sort, page, pageSize)
- **Get** — Retrieve a single listing by ID
- **Update** — Update a listing's details (name, websiteUrl, phoneNumber, description, address)

### Listing Metrics
- **Get Many** — Retrieve daily listing metrics for a date range (startDate and endDate required, format: DD-MM-YYYY)

### Listing Item Metrics
- **Get Many** — Retrieve review metrics for a date range (startDate and endDate required, format: DD-MM-YYYY)

### Content Publishing Media
- **Publish / Schedule** — Publish or schedule a media post to one or more listings

## Resources

- [Localith](https://localith.com)
- [EmbedSocial API Documentation](https://embedsocial.com/app/api/documentation)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE.md)