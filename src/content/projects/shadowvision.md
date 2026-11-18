---
title: ShadowVision
date: 2026-05-15
type: hackathon
award: 2nd place, Kova Labs challenge
summary: "Gives a drone its heading from infrared shadows and the position of the sun. No GPS, no magnetometer, no radio emissions, so there is nothing to jam."
event: Junction x Aalto Defence Hackathon
learned: Talk to the engineers before choosing a problem. Magnetometer drift was their real pain point, and it came up in conversation, not in the brief.
team: 3 people
stack: [Python, OpenCV, ROS 2, PX4, Jetson Orin Nano, RealSense]
---

## Problem

Drones in contested airspace lose GPS to jamming, and magnetometers drift or get fooled by nearby metal and spoofing. Kova Labs' engineers told us the magnetometer error compounds over a flight. Every existing fix relies on a radio or magnetic input, and anything that emits is itself a target.

## The idea

Looking through Kova Labs' infrared drone footage, I noticed shadows everywhere. If you know the time and rough position, you know exactly where the sun is, so the direction of the shadows tells you which way the drone is facing.

## What we built

- Shadow edges are detected in the IR frame (Canny plus a probabilistic Hough transform) and their dominant direction is compared with the true sun azimuth from NOAA solar-position formulas
- A ROS 2 node syncs IR, depth and PX4 yaw, and publishes a heading correction and a confidence score once per second
- It runs on a Jetson Orin Nano with a RealSense D435i, in plain Python and OpenCV with no model weights and no network
- The demo page shows the IR frame with detected shadows, a two-needle compass, and a "simulate jamming" switch where the corrected heading holds steady while the raw one drifts

## Limits

Accuracy depends on the scene. On open ground it was within 5 to 10 degrees. Under dense forest canopy or overcast sky there are no usable shadows, so confidence drops to zero and the system holds its last good correction. It is a drift anchor on top of inertial navigation, not a full compass.

I came in with almost no experience with autonomous drones or the Jetson. Credit to Nooa Lindfors and Pavlo Yakymenko for the research, and to Nooa for the demo video.
