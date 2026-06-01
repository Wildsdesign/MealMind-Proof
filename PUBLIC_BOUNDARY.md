# Public Boundary

MealMind operates in a healthcare environment with patient data and a private
integration dependency. This proof repo is intentionally architectural and
evaluator-oriented rather than cloneable.

## Safe To Show

- full-stack TypeScript architecture shape
- PHI-minimizing session and data posture
- adapter-first integration boundary description (without adapter internals)
- ADR discipline and selected decision records
- voice and AI posture as optional access layers
- accessible UX design decisions
- sanitized code excerpts showing encryption shape, session validation, error
  shaping, and client-side fetch conventions
- operator workflow descriptions (patient, guest, display, staff)

## Not Safe To Show Here

- production source code
- private host dietary-system vendor name or adapter contracts
- real patient, facility, menu, or uploaded asset data
- database schema or migrations sufficient to recreate the application
- full route or endpoint maps
- deployment workflows, infrastructure names, or connection strings
- secret names, resource names, or environment files
- PHI-like data of any kind, real or synthesized
- enough implementation detail to recreate or clone the product

## Why the Boundary Is Here

MealMind operates under healthcare data obligations. Even a proof artifact must
handle that boundary carefully. The private integration and patient-facing
surfaces are the product. This repo proves the design thinking behind them
without exposing the asset.
