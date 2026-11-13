# Project memory

## Product intent & audience

- Next.js application with a registration ("cadastro") flow that submits data to a Fiqon webhook.
- Users submit form data (including CPF) and see a modal with the webhook's actual response text.
- Brazilian Portuguese-speaking users.

## Brand personality & voice

- User communicates in Brazilian Portuguese; respond in Portuguese.
- User is direct and emphatic — prioritize precise, behavior-focused fixes.

## Visual design & UX direction

- Waiting modal must persist on screen after button click until the webhook response arrives.
- Modal displays only the text returned by the webhook — no client-side hardcoded titles, success messages, or fabricated content.
- If webhook returns no text, show a minimal warning that the system didn't respond.
- Avoid premature "success" states; the modal must not close or swap content before the real response.

## Decisions, constraints & rationale

- Modal behavior: stay visible while waiting; show only webhook-returned message.
- Webhook integration via Fiqon; Fiqon flow input step must be configured to "responder ao final do fluxo" (using the Retorno step), not "responder imediatamente" — otherwise the webhook returns before processing completes, causing false success.
- Testing required with both an already-registered CPF and a new CPF to verify correct modal behavior.

## Open questions & assumptions

- Fiqon-side configuration change is needed; not controllable purely from the Next.js app.
- Assumption: webhook will eventually return meaningful text once Fiqon flow is correctly configured.
- Unverified: whether the webhook response structure/payload shape is stable across registration scenarios.