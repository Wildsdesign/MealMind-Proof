# Code Excerpts

The `code-samples/` folder contains sanitized excerpts that demonstrate
implementation style without exposing the private product.

## Included Samples

| File | What it demonstrates |
| --- | --- |
| `EncryptionExcerpt.ts` | AES-256-GCM helper shape and production fail-fast posture |
| `CsrfFetchExcerpt.ts` | Client-side convention for protected mutations |
| `SessionValidationExcerpt.ts` | Server-side session validation pattern |
| `VoiceToolExcerpt.ts` | AI tool calls routed through backend validation |
| `PatientSafeErrorExcerpt.ts` | Error shaping for patient-facing flows |

These files are intentionally incomplete. They are proof snippets, not a
runnable application.

## What These Excerpts Prove

Safe excerpts show:

- naming and layering conventions
- interface shape and contract design
- security posture (encryption, CSRF, session validation)
- AI and voice routing conventions
- patient-safe error boundary design

Safe excerpts do not include:

- private business rules
- host dietary-system adapter details or vendor names
- production query logic
- schema or migration detail
- route maps or endpoint identifiers
- auth internals or deploy configuration
- real patient, facility, or menu data

## Why Not Publish the Whole App?

MealMind operates in a healthcare environment. A public proof artifact should
let a technical evaluator trust the work without exposing patient-adjacent
internals or private integration contracts.
See [PUBLIC_BOUNDARY.md](PUBLIC_BOUNDARY.md) for the full boundary.
