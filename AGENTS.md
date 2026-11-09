# AGENTS.md

Conventions for anyone (human or agent) working in this repository.

## Versioning

- **Documentation, screenshots, README, locale copy** → commit only. **Do not bump the version and do not publish.**
  `npm` shows the README from the published tarball, so npm's copy updates at the next real release; that is expected.
- **Bug fix** → patch (`1.0.x`).
- **New feature** → minor (`1.x.0`).
- **Breaking change** → major (`x.0.0`).
- A published version can never be reused or overwritten; get the version right before tagging.

## Release

1. Bump `package.json` version.
2. Commit, then `git tag vX.Y.Z` on the same commit.
3. Create a GitHub Release for that tag.
4. The `Publish to npm` workflow publishes with provenance through **Trusted Publishing**. Never publish with a personal token, and never bypass this workflow.
5. Update `market.json` to pin the new version and commit (the self-hosted Discover index reads it).

Docs-only changes skip steps 1–5 entirely.

## Content rules

- Keep `README.md` (Chinese) and `README.en.md` (English) in sync; both stay short and scannable, with details pushed into `PRIVACY.md`, `NOTICE.md`, or `LICENSE-ARTWORK.md`.
- Never commit personal data: real names, private email addresses, company names, absolute home-directory paths, tokens, or session transcripts. Screenshots must be checked and cropped before use.
- Usage screenshots live in `docs/`, stripped of EXIF/XMP metadata.

## Code

- Host half is intentionally empty; UI is a plain-JS client bundle. No build step, no runtime dependencies.
- Run `npm run check && npm test` before committing code changes.
- Read session state through DSH's `useSessions` / `useSessionStatus` hooks. Do not poll history, write DOM, or answer permission/question requests.

## Licensing

- Source code: MIT (`LICENSE`).
- Bundled artwork: CC BY 4.0 (`LICENSE-ARTWORK.md`), attribution “momolulu artwork © 2026 YinniCoding”.
