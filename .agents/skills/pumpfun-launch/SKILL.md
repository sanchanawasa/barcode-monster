---
name: one-shot-launch
description: Zero-touch Launch Factory for Pump.fun projects. Collect only a project name and concept when possible, allocate a reusable GitHub launch slot/branch, build the site/game and launch kit, publish and verify when tooling permits, and stop at the final irreversible wallet confirmation.
---

# ONE SHOT LAUNCH — LAUNCH FACTORY

## User contract
Minimize user actions. Normally require only PROJECT NAME + CONCEPT. If the user says `任せる`, infer ticker, style, English launch copy, mechanic, repository slot, and other reversible choices. Never ask the user to create files, branches, folders, boilerplate, assets, deployment configs, or copy text when connected tools can do it.

## Intake
If missing, ask in one compact block for PROJECT NAME and CONCEPT. TICKER, STYLE, LANGUAGE, EXISTING PROJECT, and X are optional. Reuse anything already stated in the conversation.

## Launch Factory repository model
A dedicated accessible repository may host many independent launch projects. Do NOT require one repository per token.

For every new project:
1. Slugify the project name, e.g. `おばあちゃん` -> `obaachan`.
2. Prefer a dedicated branch named `launch/<slug>` created from `main` so work is isolated and existing projects are never overwritten.
3. Put project files under `launches/<slug>/` on that branch. Keep `launch-assets/` inside the project folder.
4. If the branch already exists, inspect it and continue/update it instead of creating duplicates.
5. If branch creation is unavailable but file writes are available, use a unique `launches/<slug>/` directory on main without overwriting unrelated files.
6. A single factory repository may hold hundreds or thousands of launch slots; do not pre-create 100 empty repositories.
7. If new-repository creation is available and a dedicated repo is clearly superior, it may be used, but it is not required.

## Autonomous build
Create a distinctive responsive site, not a generic template. For game concepts, implement a real lightweight playable mechanic where feasible. For meme concepts, create a participatory/shareable hook. Never fabricate holders, volume, market cap, followers, partnerships, audits, endorsements, contract addresses, or launch status.

Create at minimum:
- public website files
- `launch-assets/pumpfun-copy.md`
- `launch-assets/x-launch-kit.md`
- `launch-assets/asset-manifest.md`
- production metadata/SEO/social card configuration
- README or project notes as appropriate

When image generation is available, generate the visual direction/assets. Transfer usable files into the repository when tooling supports binary upload; otherwise preserve exact production specs and clearly report the transfer as pending rather than pretending it happened.

## Publishing
Prefer an existing connected deployment. Otherwise use a connected host. Otherwise use a GitHub Pages-compatible static publication strategy from the factory repository. Design the factory so multiple projects can coexist at paths such as `/launches/obaachan/` and `/launches/another-project/` rather than replacing each other.

When repository permissions allow, maintain the necessary publishing workflow/configuration automatically. Verify the live URL before calling it live. If account-level Pages/hosting enablement is the only unavailable action, keep all code deployment-ready and report exactly that one blocker; never make the user do routine coding work.

## QA
Perform available QA yourself: load checks, mobile layout, core interaction, CTA/link checks, placeholder/claim checks, launch copy completeness, asset status, and correct URLs. Fix issues automatically when possible.

## Handoff
Return a compact launch console with Website, GitHub/branch, Name, Ticker, Pump.fun copy status, X kit status, visual asset status, and Contract = TBD UNTIL LAUNCH.

## Hard stop
Never execute or approve the final Pump.fun token-creation transaction, wallet signature, initial purchase, or irreversible launch confirmation. The user personally reviews and approves the final wallet action.

## Core principle
Every future invocation should optimize for the fewest possible user touches. If a workaround can be automated safely and reversibly inside the Launch Factory, do it instead of asking the user.