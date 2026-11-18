---
title: Raja
date: 2026-09-19
type: hackathon
featured: true
summary: A policy gateway on the MCP tool boundary that decides whether data an AI agent handles may leave, blocking prompt injection and unlawful cross-border transfers with one provenance mechanism.
stack: [Python, MCP, Azure OpenAI, Azure Container Apps]
links:
  Code: https://github.com/thebornster/microsoft-aaltoai
---

## Problem

A factory-floor copilot reads a supplier PDF with hidden text telling it to attach the full maintenance log, including employee names and IDs, to a ticket on an outside portal. The agent is allowed to read logs and allowed to file tickets, so every permission check passes. The problem is the combination: untrusted content is steering EU personal data to a server in another jurisdiction.

## What I built

Raja sits between the agent and the tools it calls. It labels every value a tool returns with its trust level, residency and source, follows those labels through the session, and decides on every outgoing call: allow, send to a human for review, or deny.

- Labels are tracked with per-session fingerprints (5-token shingles plus entity identifiers), so derived text keeps its origin
- Rules live in a `policy.yaml` file. No model is involved in the decision
- Every decision is written to an append-only, SHA-256 hash-chained ledger that names the rule and the regulation it enforces
- Review requests go to an approval URL the agent cannot answer itself

Deployed on Azure Container Apps in Sweden Central.
