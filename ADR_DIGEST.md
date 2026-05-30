# ADR Digest

Selected decisions from the private MealMind repo, rewritten for public review.

## ADR-001: Initial Stack

**Decision:** Use a full-stack TypeScript application with React on the client,
Express on the backend, SQL Server persistence, and Azure as the deployment
target.

**Why it matters:** The first version optimized for rapid product learning while
still using enterprise-compatible infrastructure.

## ADR-002: PHI Isolation

**Decision:** Keep sensitive patient identifiers on the server side. The browser
receives an internal session identifier, not the host-system patient identifier.

**Why it matters:** The patient UX can be modern without expanding the PHI blast
radius into browser storage.

## ADR-003: Patient-Appropriate Access Gate

**Decision:** Use a simple access flow suitable for hospital patients and shared
devices rather than conventional username/password auth.

**Why it matters:** The authentication model must fit the setting. Patients
should not have to create accounts or remember credentials during a hospital
stay.

## ADR-004: Host Adapter Pattern

**Decision:** Put all host dietary-system calls behind an adapter boundary.

**Why it matters:** Private integration details stay contained, and the patient
experience is not coupled directly to the host API's raw shape.

## ADR-005: Hydration / Cache Layer

**Decision:** Hydrate a minimized local session cache after host validation,
then serve patient UX reads from that cache.

**Why it matters:** The app reduces host-system round trips while preserving the
host system as the authority.

## ADR-007: Voice AI Pipeline

**Decision:** Treat voice as an optional access layer with separable speech,
reasoning, and text-to-speech components.

**Why it matters:** The browse-and-tap app stays useful if voice is disabled,
and voice components can change without rewriting ordering logic.

## ADR-008: iOS Voice Compatibility

**Decision:** Account for mobile browser audio restrictions explicitly.

**Why it matters:** Patient-facing voice features fail if they only work on a
developer laptop.

## ADR-010: Multi-Tenant Model

**Decision:** Model tenant configuration as a first-class concern.

**Why it matters:** Hospital deployments need isolation, configuration, and
branding without one-off forks.

## ADR-016: Minimum Viable PHI

**Decision:** Store the least sensitive data needed to support the workflow.

**Why it matters:** If the product does not need a value to complete the order,
it should not own that value.

## ADR-018: Security Architecture

**Decision:** Treat security as layered architecture: encrypted sensitive values,
httpOnly cookies, CSRF protection, audit logging, fail-fast production config,
and patient-safe errors.

**Why it matters:** Patient-facing healthcare software needs security designed
into the product rather than added after the UI works.

## ADR-019: Cold-Start Resilience

**Decision:** Account for managed cloud/database cold starts and transient
connectivity during startup.

**Why it matters:** A patient app must avoid turning infrastructure wake-up time
into a confusing user failure.

## ADR-020: Unified App Service

**Decision:** Serve the API and built client from a single deployable service.

**Why it matters:** Same-origin deployment simplifies cookies, CSRF, and
operational debugging.
