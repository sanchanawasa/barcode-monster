---
name: one-shot-launch
description: One-prompt meme/token launch workflow. Build or upgrade the project, prepare launch assets and social copy, publish the website automatically, and stop only at the final Pump.fun wallet/launch confirmation.
---

# ONE SHOT LAUNCH

## Trigger
Accept prompts like:
`ONE SHOT LAUNCH: Anti Privacy / $OPEN / cyberpunk anti-privacy meme / English`
or
`PUMPFUN LAUNCH: Barcode Monster / $BCMON / 90s barcode battle game / English`

## Operating rule
The user should not need to perform routine development or publishing work. Infer sensible defaults, make the site, update GitHub, prepare assets/copy, publish, verify, and return the live URL. Do not ask questions unless a missing fact makes execution impossible or would cause an irreversible external action.

## Default publishing strategy
1. Prefer an already-connected deployment provider when it can publish without user intervention.
2. Otherwise prefer GitHub Pages for static sites.
3. For GitHub Pages, keep the deployable site static and add a GitHub Actions Pages workflow so every push to `main` republishes automatically.
4. If a framework project cannot run directly on Pages, create/export a static production build when feasible. Do not degrade essential product functionality merely to fit Pages; use another connected host if available.
5. After publishing, verify the live URL. Never claim deployment succeeded without verification.

## Workflow
1. Inspect the repository/project and reuse its strongest existing identity and functionality.
2. Decide missing creative details automatically: tagline, short narrative, visual direction, CTA hierarchy and launch copy.
3. Build or upgrade the responsive public site. For meme/game projects, favor a distinctive high-impact experience over a generic template.
4. Keep factual integrity: never invent holders, market cap, volume, followers, partnerships, audits, endorsements, contract addresses or launch status.
5. Prepare `launch-assets/` with:
   - `pumpfun-copy.md`: Name, Ticker, Description, Website, X field, final checklist.
   - `x-launch-kit.md`: bio, display-name suggestion, teaser, launch post, pinned post, reply template and follow-up ideas.
   - `asset-manifest.md`: icon 1024x1024, Pump.fun banner 1200x400, X header 1500x500, OG image 1200x630, plus consistent art direction.
6. When image generation is available, generate the requested visual assets and place usable outputs in the project when file transfer/tooling permits. Otherwise provide exact generation specs and mark them pending; never pretend files exist.
7. Add SEO/social metadata, favicon/icon references, Open Graph/X card metadata, mobile viewport, manifest where appropriate and canonical URL once the final public URL is known.
8. Update README with the live URL, project summary, run instructions and launch-kit locations.
9. Publish automatically. For GitHub Pages static projects, add/maintain `.github/workflows/pages.yml` using GitHub Pages official actions and deploy the repository root or generated static output.
10. Verify that the public page loads and that critical UI works as far as available tools permit. Fix failures automatically when possible.
11. Return only a compact completion report: live URL, GitHub repo, assets status, X kit status, Pump.fun kit status, and the one remaining user action.

## Hard stop
Do not execute the final Pump.fun token creation transaction, wallet signature, purchase or launch confirmation. The user performs that irreversible wallet action. Everything before it should be automated when tools permit.

## Quality bar
- Mobile-first.
- No fake metrics/social proof.
- No placeholder URL presented as live.
- No unnecessary questions.
- No claiming success before verification.
- Preserve working product functionality.
- Prefer completing work over explaining how the user could do it manually.
