# MealMind Proof

Curated technical proof artifact for MealMind, a Wilds, Inc. patient meal
ordering application.

This repository is intentionally **not** the production source tree. It exists
to show the thinking, architecture, product judgment, and representative code
behind Justin Wilds' first serious application build without exposing the
turnkey product, private integration details, deployment configuration, or
patient-facing implementation surface.

## What MealMind Demonstrates

MealMind is a patient-facing meal ordering layer designed for hospital
environments:

- browse-and-tap meal ordering
- patient-appropriate authentication
- multilingual menu presentation
- voice ordering as an optional enhancement
- bedside TV / companion display concepts
- host dietary-system integration boundary
- PHI-minimizing session design
- accessible, low-friction patient UX

The product question was: how can a hospital patient order food without fighting
a legacy text-heavy interface, while still respecting diet, allergy, security,
and operational constraints?

## Technical Shape

The production system is a full-stack TypeScript application:

```text
React + TypeScript client
Express + Node backend
SQL Server persistence
host dietary-system adapter boundary
voice and AI services behind optional feature surfaces
Azure deployment target
```

The proof repo does not include the full source tree. It includes curated
documentation and sanitized excerpts.

## Proof Contents

| File | Purpose |
| --- | --- |
| `ARCHITECTURE.md` | System shape, data flow, integration boundary |
| `ADR_DIGEST.md` | Selected decisions and why they matter |
| `VOICE_AND_AI.md` | Voice ordering and AI posture without vendor lock-in |
| `SECURITY_AND_PHI.md` | PHI boundary, session, audit, and safety model |
| `OPERATIONS.md` | Patient, guest, display, and staff workflows |
| `CODE_EXCERPTS.md` | Guide to the included representative samples |
| `code-samples/` | Sanitized implementation excerpts |

## What Is Deliberately Omitted

This proof repo does not include:

- full application source
- production Git history
- deployment workflows
- environment files or real resource names
- private host-system contracts
- real patient, facility, or menu data
- enough schema or code to recreate the product

That boundary is intentional. The repo proves the work without giving away the
asset.

## Representative Strengths

- Patient-safe UX design under healthcare constraints.
- PHI-minimizing architecture.
- Adapter-first integration thinking.
- Voice and AI used as optional access layers, not brittle dependencies.
- Security decisions captured as architecture, not bolted on later.
- Strong documentation and ADR practice from the first app onward.

## Status

Curated proof artifact. Production MealMind remains private.
