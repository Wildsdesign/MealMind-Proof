# AGENTS.md - MealMind Proof

This repository is a curated public-proof artifact for MealMind. It is not the
production repository and must not become a runnable clone.

## Proof Repo Shape

Every file in this repo answers one or more of five evaluator questions:

1. What is this product or system?
2. What does this repo prove about Justin's work?
3. What architecture or operating decisions matter?
4. What is safe to show publicly?
5. What is intentionally withheld?

The required files for a complete Wilds proof repo are:

| File | Purpose |
| --- | --- |
| `README.md` | Entry point, evaluator path, proof contents, status |
| `WHAT_THIS_PROVES.md` | Short proof argument for a recruiter or technical evaluator |
| `PUBLIC_BOUNDARY.md` | Explicit safe-to-show and not-safe-to-show boundary |
| `ARCHITECTURE.md` | Product-specific system shape |
| `ADR_DIGEST.md` | Sanitized decisions with rationale |
| `OPERATIONS.md` | Patient, guest, display, and staff workflows |
| `SECURITY_AND_PHI.md` | PHI boundary and safety posture |
| `VOICE_AND_AI.md` | Voice and AI integration posture |
| `CODE_EXCERPTS.md` | Safe, non-runnable excerpt index |
| `PROOF_REPO_STANDARD.md` | Reusable Wilds proof-repo standard |
| `AGENTS.md` | This file: guardrails for future agents |

## Hard Rules

- Do not copy full source files from the private MealMind repo.
- Do not mention the private host dietary-system vendor by name.
- Do not add real patient, facility, menu, or uploaded asset data.
- Do not add PHI-like data of any kind, real or synthesized.
- Do not add deployment workflows, resource names, connection strings, secret
  names, or environment files.
- Do not add enough schema, adapter, or auth detail to recreate the production
  product.
- Keep code samples excerpted, sanitized, and non-runnable unless Justin
  explicitly approves otherwise.
- The public/private boundary is defined in `PUBLIC_BOUNDARY.md`. It must be
  respected in every file and excerpt.

## Purpose

Show engineering judgment:

- patient-safe UX under healthcare constraints
- PHI-minimizing architecture
- voice and AI as optional access layers, not brittle dependencies
- adapter-first integration design
- security-minded defaults from the first build
- ADR discipline

## Source Of Truth

Private MealMind remains the implementation source of truth. This proof repo is
a portfolio artifact.
