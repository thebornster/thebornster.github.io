---
title: IR Explosion Map
date: 2025-06-18
type: software
summary: A live map of explosion events in Iran built from citizen reports on Telegram. A GPT pipeline clusters, translates and geolocates the reports, and an interactive map shows the results.
stack: [Python, OpenAI API, Airtable, Leaflet, Vercel, GitHub Actions]
links:
  Code: https://github.com/thebornster/ir-explosion-map
  Site: https://nfejar.online
---

## What it does

The site shows explosion events in Iran as colour-coded markers. Each marker has the date, a description, the event type, the likely target and links to the original Telegram reports. Visitors can search by city and submit new reports.

## Pipeline

1. A Telegram bot collects reports from public channels
2. Similar reports are grouped together
3. GPT-3.5 translates each report and turns it into structured JSON
4. GPT-4.5 analyses each group to estimate the event type, target type and coordinates
5. Results are stored in Airtable, and the map reads them through Vercel serverless functions

GitHub Actions runs the pipeline on a schedule, so the map updates without anyone touching it.

## Limitations

Locations and classifications are model estimates built on citizen reports, so some events are missing or misplaced. The site says so.
