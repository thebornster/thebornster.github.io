---
title: Valmet Digital Twin
date: 2026-11-06
type: hackathon
summary: "Turns a 3D Gaussian Splatting scan of an equipment room into a navigable digital twin with detected equipment, inspection routes and AI service diagnostics."
event: Since AI Hackathon 2026, Valmet challenge
team: 4 people
stack: [Python, Open3D, YOLOE, SAM 2, Gemini, Viser]
links:
  Code: https://github.com/thebornster/sinceai2026
---

## What it does

The input is a 396 MB Gaussian Splatting scan of a real equipment room. The output is a 3D viewer where you can walk the room, see each piece of equipment boxed and linked to its maintenance records, follow inspection routes, and ask for diagnostics grounded in telemetry, alarms and documentation.

## How it's built

The heavy work runs offline and writes JSON and NumPy files. The live viewer only loads those files, so it stays fast.

- **Spatial:** a navigation map, an occupancy grid and collision-free paths
- **Semantic:** equipment detection with YOLOE and SAM 2
- **Metadata and diagnostics:** maps detected objects to Valmet's equipment records and generates grounded diagnostics
- **Viewer:** built on Viser

The spatial and semantic pipelines never import each other. They share only a common package of Pydantic schemas and one world frame, which let four people work in parallel during the hackathon.
