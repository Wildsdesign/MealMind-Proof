# MealMind Proof

Curated technical proof artifact for MealMind, a Wilds, Inc. patient meal
ordering application.

This repository is intentionally **not** the production source tree. It exists
to show the thinking, architecture, product judgment, and representative code
behind MealMind without exposing the turnkey product, private integration
details, deployment configuration, or patient-facing implementation surface.

## How To Read This Repo

Start here if you are evaluating MealMind technically:

1. Read [WHAT_THIS_PROVES.md](WHAT_THIS_PROVES.md) for the short evaluator view.
2. Read [ARCHITECTURE.md](ARCHITECTURE.md) for the system shape and integration boundary.
3. Read [ADR_DIGEST.md](ADR_DIGEST.md) for decision discipline.
4. Read [SECURITY_AND_PHI.md](SECURITY_AND_PHI.md) for the PHI boundary and
   safety posture.
5. Read [VOICE_AND_AI.md](VOICE_AND_AI.md) for AI and voice integration posture.
6. Read [OPERATIONS.md](OPERATIONS.md) for the patient and operator workflows.
7. Read [CODE_EXCERPTS.md](CODE_EXCERPTS.md) and browse `code-samples/` for
   implementation style.
8. Read [PUBLIC_BOUNDARY.md](PUBLIC_BOUNDARY.md) before asking why production
   internals are not here.

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
| `WHAT_THIS_PROVES.md` | Short evaluator guide: what the repo is evidence for |
| `ARCHITECTURE.md` | System shape, data flow, integration boundary |
| `ADR_DIGEST.md` | Selected decisions and why they matter |
| `VOICE_AND_AI.md` | Voice ordering and AI posture without vendor lock-in |
| `SECURITY_AND_PHI.md` | PHI boundary, session, audit, and safety model |
| `OPERATIONS.md` | Patient, guest, display, and staff workflows |
| `CODE_EXCERPTS.md` | Guide to the included representative samples |
| `code-samples/` | Sanitized implementation excerpts |
| `PUBLIC_BOUNDARY.md` | What this proof repo intentionally excludes |
| `PROOF_REPO_STANDARD.md` | Reusable standard for Wilds public proof repos |

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
