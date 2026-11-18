---
title: CASVU Agent
date: 2026-04-18
type: hackathon
award: Winner, CasvuGen Challenge
summary: "An autonomous marketing agent that turns one company URL into a full campaign: brand voice profile, competitor analysis, on-brand posts and an ML engagement score for each."
event: Startup Hack by Antler and AaltoAI
stack: [Python, FastAPI, React, LightGBM, Gemini]
links:
  Code: https://github.com/thebornster/casvu-content-pipeline
---

## What it does

Give it a company's website and it produces a performance marketing campaign:

- **Brand voice profile:** tone, voice, colours and value propositions pulled from the site
- **Competitor analysis:** real-time engagement data on competitors' posts
- **Content:** social media and website copy written in the brand's voice and optimised for local search
- **Scoring:** a LightGBM model predicts engagement for each post before it is published
- **Images:** a brand-aware image generation pipeline, which we admittedly over-engineered

## Stack

A FastAPI backend with Gemini for generation, Exa and SerpAPI for competitor data, and LightGBM with scikit-learn for engagement prediction. The frontend is React with Vite.
