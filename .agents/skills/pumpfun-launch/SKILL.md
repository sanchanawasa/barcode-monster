---
name: pumpfun-launch
description: Prepare an existing meme/token project for a Pump.fun launch from one prompt. Generate launch copy, asset specifications, website/GitHub updates, X launch kit, QA checklist, and stop before the user performs the final Pump.fun token creation/launch action.
---

# Pump.fun Launch Skill

## Goal
Turn a project idea or existing repository into a launch-ready package with minimal user work. The user performs the final token creation/launch confirmation on Pump.fun.

## Input
Accept a compact prompt such as:
`PUMPFUN LAUNCH: Barcode Monster. Ticker $BARCODE. 90s cyber arcade x pixel monster. English. Make it launch ready.`

If an existing repository/project is obvious from context, inspect it first and reuse its identity, code, links, and visual direction. Do not ask for information that can reasonably be inferred or generated.

## Workflow
1. Inspect the existing project/repository and identify its stack, current landing page, public links, visual identity, and missing launch elements.
2. Create a concise launch brief: project name, ticker, one-line hook, 2-4 sentence description, tagline, visual direction, and core community narrative. Never promise returns, price appreciation, guaranteed virality, or guaranteed allocation.
3. Prepare a launch asset manifest under `launch-assets/` covering at minimum:
   - icon: square 1024x1024 master
   - pumpfun-banner: 1200x400
   - x-header: 1500x500
   - og-image: 1200x630
   - visual generation prompts/source notes so assets can be regenerated consistently
4. When image-generation capability is available, generate the visual assets. Otherwise create exact production prompts/specs and mark the image files as pending rather than pretending they exist.
5. Upgrade the public website so it is responsive and launch-ready. Prefer a striking single-page experience over unnecessary complexity. Include: hero, project story, community/game hook where relevant, clear social links, Pump.fun CTA placeholder, contract-address placeholder until launch, FAQ, and mobile polish. Do not fabricate live contract addresses, holder counts, market cap, volume, followers, partnerships, audits, or endorsements.
6. Add SEO/social metadata: title, description, favicon/icon, Open Graph metadata, X card metadata, canonical URL when known, and share image.
7. Create `launch-assets/pumpfun-copy.md` with ready-to-paste Name, Ticker, Description, Website, X link placeholder/actual link, and a final pre-launch checklist.
8. Create `launch-assets/x-launch-kit.md` containing profile bio, display name suggestion, pinned launch post, launch announcement, teaser post, community reply template, and 3-5 concise follow-up post ideas. Keep claims factual.
9. Update README with the project identity, local run instructions, deployment information, and launch asset locations.
10. Run/build/test when tools permit. Fix obvious build and responsive issues before considering the package ready.
11. Commit changes to GitHub. If deployment tooling/account access is connected, deploy or update the public site and verify it. If deployment is unavailable, leave the repository deployment-ready and clearly report the single remaining connection/action.
12. Finish with a short status report containing: GitHub status, public website status, asset status, X kit status, Pump.fun copy status, and exactly what the user still needs to do.

## Hard stop
Do NOT perform the final Pump.fun token creation/launch/transaction confirmation. Prepare everything up to that point and explicitly hand that final action to the user.

## Quality bar
- Mobile-first and visually distinctive.
- No fake metrics or fake social proof.
- No placeholder links presented as real links.
- Keep launch copy punchy and human.
- Reuse existing brand/project assets when available.
- Prefer doing the work over asking questions.
- Clearly distinguish completed work from proposed/pending work.
