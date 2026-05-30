# Operations

MealMind was designed around patient and staff realities, not generic online
ordering.

## Patient Ordering

The patient-facing workflow prioritizes clarity:

1. patient starts a session
2. app presents allowed meals and menu items
3. patient browses visually
4. patient adds items by touch or voice
5. order is submitted through the host-system boundary
6. patient receives a clear result

## Guest Ordering

Guest ordering needs to avoid exposing patient medical information. The guest
flow should be scoped to the minimum information needed to place a guest tray.

## Companion Display

A bedside or room display can mirror the current order state without becoming
the authority. The main session remains server-authoritative.

## Staff Fit

The app should reduce staff interruption, not create new staff work. Access
rules, language support, and error messages need to be simple enough for the
hospital environment.

## Failure Modes

Expected failures:

- host system unavailable
- session expires
- order period no longer available
- voice service unavailable
- network drops
- translation or media generation unavailable

The system should degrade to clear patient-safe messages and preserve the
touch-first ordering path whenever possible.
