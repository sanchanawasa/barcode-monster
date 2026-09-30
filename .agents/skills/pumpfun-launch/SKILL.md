---
name: one-shot-launch
description: Interactive ChatGPT-to-Pump.fun launch workflow. When invoked from chat, first collect only the minimum launch inputs in a simple fill-in form, then autonomously build, publish, verify, and prepare everything possible up to the final irreversible Pump.fun wallet/launch confirmation.
---

# ONE SHOT LAUNCH

## Purpose
This skill is designed to be invoked directly from a normal ChatGPT conversation. The user does NOT need to know the full launch prompt syntax in advance. When the user says things such as `ONE SHOT LAUNCH`, `PUMPFUN LAUNCH`, `このスキルで作って`, or clearly asks to invoke this launch skill, guide them through the minimum required inputs and then execute the entire pre-launch workflow.

## Phase 0 — Chat intake
When invoked without enough information, DO NOT start by explaining the workflow. Ask the user to provide/fill only these fields in one compact block:

```
PROJECT NAME: [required — e.g. Barcode Monster]
TICKER: [optional — suggest 3 strong choices if blank]
CONCEPT: [required — one sentence is enough]
STYLE: [optional — infer and propose a strong default if blank]
LANGUAGE: [optional — default English]
EXISTING PROJECT / GITHUB / WEBSITE: [optional — URL if one exists]
X ACCOUNT: [optional — URL or @handle; can be added later]
```

Make this extremely easy. If the user has already supplied any of these facts in the current conversation, prefill them and do not ask again. If only PROJECT NAME and CONCEPT are known, that is normally enough to proceed: infer the rest and explicitly show the assumptions.

If the user's idea itself is vague, proactively offer 3 launchable concepts/tickers/styles rather than asking an open-ended question. The user should be able to reply with something as short as `2で` or fill the form.

## Phase 1 — Launch brief confirmation
After intake, synthesize a compact proposed launch brief containing:
- Project name
- Ticker
- One-line hook
- 2–4 sentence concept
- Tagline
- Visual direction
- Core community/game/meme hook
- Language
- Target repository/site strategy

Ask for confirmation ONLY when a material creative assumption remains. If the user said `任せる`, `やって`, `go`, or equivalent, treat that as permission to choose reversible creative details and proceed without another confirmation.

## Phase 2 — Autonomous execution
Once enough information exists, perform the work rather than handing the user instructions.

1. Inspect any existing repository/project/site first and reuse its strongest identity, code, functionality and links.
2. If there is no project yet and repository creation is available, create/use an appropriate project repository. If repository creation is unavailable, prepare the complete project in the available workspace and clearly identify the single missing connection/action.
3. Build or substantially upgrade the responsive public website. Prefer a distinctive, high-impact launch experience over a generic template.
4. For game projects, make the core playable interaction real when feasible. For meme/community projects, create a strong participatory mechanic, share loop, generator, score, proof, collection, reveal, leaderboard-ready structure, or other appropriate hook instead of a purely static landing page.
5. Preserve factual integrity. Never fabricate holders, market cap, volume, followers, partnerships, audits, endorsements, contract addresses, launch status, user counts or community activity.
6. Prepare `launch-assets/` containing at minimum:
   - `pumpfun-copy.md`: final ready-to-paste Name, Ticker, Description, Website, X field, and launch checklist.
   - `x-launch-kit.md`: display name, bio, teaser, launch announcement, pinned post, reply template, and 3–5 follow-up posts.
   - `asset-manifest.md`: icon 1024x1024, Pump.fun banner 1200x400, X header 1500x500, OG image 1200x630, and one consistent art direction.
7. When image generation is available, generate the actual visual assets. Place usable outputs into the project when file transfer/tooling permits. If tooling cannot transfer them, create exact production prompts/specifications and clearly mark the files as pending. Never pretend an image exists.
8. Add production metadata: title, description, favicon/icon, Open Graph, X card, mobile viewport, manifest/PWA where appropriate, and canonical URL once known.
9. Update README with project identity, live URL, run instructions, deployment method, and launch asset locations.
10. Commit all possible changes to GitHub.

## Phase 3 — Publish automatically
The user should not have to manually deploy routine web changes.

Publishing priority:
1. Reuse an already-connected live deployment if one exists.
2. Otherwise use a connected deployment provider when available.
3. Otherwise, for static-compatible projects, use GitHub Pages and maintain `.github/workflows/pages.yml` with official GitHub Pages actions so pushes to `main` automatically republish.
4. If the framework requires a build, configure the production build/export rather than stripping essential functionality just to fit static hosting.

After publishing, verify the public URL. Never claim a deployment succeeded without verification. If deployment fails, inspect and fix automatically where tools allow.

## Phase 4 — Pre-Pump.fun readiness gate
Before handing back to the user, verify as many of these as tools permit:
- Website loads on desktop and mobile-sized viewport.
- Primary CTA works.
- Game/interactive mechanic works where applicable.
- No obvious broken links or placeholder claims are presented as real.
- Pump.fun copy is complete.
- X launch kit is complete.
- Required image asset set is complete or transparently marked pending.
- Website and repository URLs are correct.
- Contract address remains explicitly `TBD UNTIL LAUNCH` unless the user has provided a real one.

Do not ask the user to perform QA that the available tools can perform.

## Phase 5 — Final handoff
Return a compact launch console, not a long explanation:

```
READY FOR FINAL LAUNCH
Website: ...
GitHub: ...
Name: ...
Ticker: ...
Pump.fun copy: READY
X kit: READY
Visual assets: READY / [specific pending item]
Contract: TBD UNTIL LAUNCH

YOUR ONLY REQUIRED ACTION:
Open Pump.fun, create the coin using the prepared fields/assets, connect your wallet, review the transaction, and personally approve the final wallet signature/launch transaction.
```

If a tool can open or prefill a reversible launch form without signing/submitting an irreversible transaction, it may do so. Stop before any final wallet signature, token-creation transaction, purchase, or irreversible launch confirmation.

## Hard stop
NEVER execute or approve the final Pump.fun token creation transaction, wallet signature, initial purchase, or irreversible launch confirmation on the user's behalf. The user must personally review and approve that final wallet action.

## Operating rules
- Prefer doing over explaining.
- Ask only for information that is genuinely missing and cannot safely be inferred.
- Reuse facts already supplied in the conversation.
- If the user says `任せる`, choose reversible creative defaults yourself.
- Never promise virality, returns, token price appreciation, allocations, or investment outcomes.
- Never fake metrics or social proof.
- Never present placeholder URLs as live.
- Never claim deployment or QA succeeded without verification.
- Keep the user's manual work concentrated at the final irreversible Pump.fun action.

## Example invocation from chat
User:
`ONE SHOT LAUNCH`

Assistant should respond with a prefilled/blank compact intake form, not a technical explanation.

User can answer:
`Barcode Monster / barcodeからモンスターが出て戦う / あとは任せる`

The skill should infer ticker/style/language, show the brief only if needed, then build, publish, verify, prepare Pump.fun + X + assets, and stop immediately before the user's final Pump.fun wallet confirmation.