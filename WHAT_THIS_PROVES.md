# What This Proves

This repo exists for a technical evaluator who wants to understand what Justin
Wilds can build without receiving the private MealMind production source.

## The Short Version

MealMind proves that Justin can design and ship a patient-facing healthcare
application under real operational and regulatory constraints:

- PHI-minimizing architecture, not PHI-tolerating architecture
- adapter-first integration design that keeps the host dietary system at arm's
  length rather than baking it into the product
- accessible, low-friction UX grounded in actual patient-room operating
  conditions
- voice and AI treated as optional access layers, not brittle dependencies
- security decisions captured as architecture from the start
- ADR-backed discipline on a first serious application build
- public proof artifact that protects private implementation value

## What To Look For

### 1. Product Judgment

MealMind is not a menu web app. It models the relationship between patient
context, dietary restriction, ordering friction, and safety as first-class
concerns. Multilingual menu presentation, bedside display integration, and
voice ordering exist because actual patients in actual hospital rooms need them,
not because they looked good on a feature list.

### 2. Architecture Judgment

The host dietary-system integration lives behind an adapter boundary. That means
the host system can change without rewriting the product. The proof repo
describes the integration shape without exposing the private adapter detail.

### 3. Security and Privacy Judgment

PHI minimization is not a compliance checkbox here. The session design, error
shaping, and data posture are all built around the assumption that patient
information should leave the system as little as possible. The security excerpts
show that posture without exposing the private implementation.

### 4. Delivery Judgment

MealMind was Justin's first serious application build. The ADR discipline, voice
integration posture, and security design from the beginning show that delivery
habits were set early rather than retrofitted.

### 5. Boundary Judgment

This repo shows enough to evaluate the work while excluding the private host
system, schema, deployment artifacts, and real patient data that give MealMind
its operational and commercial value.

## What This Does Not Prove

This repo does not prove every implementation detail of MealMind. It is not a
runnable clone and should not become one.

For deeper evaluation, use this repo as a public architecture and product
artifact, then request a guided technical walkthrough if a private review is
appropriate.
