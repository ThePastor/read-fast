# Read Fast — Terms of Use

**Effective 4 September 2026 · applies to https://thepastor.github.io/read-fast/**

© 2026 JohnsonXCorp. All rights reserved. Read Fast is proprietary software — see [LICENSE](./LICENSE).

By using Read Fast you agree to these terms. If you do not agree, do not use it.

---

## 1. What Read Fast is

A speed reader that runs entirely in your browser. You add a book — PDF, EPUB, DOCX, TXT, MD, or a ZIP of those — and it shows you one word at a time at a pace you choose.

It is free to use. There is no account, no sign-up, and no payment.

## 2. What happens to your books

**Nothing leaves your browser.** This is not a promise about a policy that could change; it is a description of how the software is built, and you can verify it yourself.

- Your file is parsed by JavaScript running on your own device.
- The extracted text and your reading position are stored in your browser's IndexedDB, on your device.
- There is no server to send them to. Read Fast is a static file on GitHub Pages. There is no backend, no database, and no account system.
- "Back up library" writes a file to your own downloads folder. Nothing is uploaded.

JohnsonXCorp cannot read your library, cannot recover it for you, and has no way to know what you have added.

## 3. Every time the page touches the network

Exactly four destinations, none of which carry your book content:

| # | What | Where it goes | What is sent | After the first visit |
|---|---|---|---|---|
| 1 | The page itself | `thepastor.github.io` (GitHub Pages) | Your IP address, browser User-Agent, referring page, timestamp — the standard information any web server receives | Served from the offline cache; revalidated in the background |
| 2 | App assets — manifest, service worker, the five icon files | `thepastor.github.io` (same server as #1) | Same as #1 | Served from the offline cache |
| 3 | Font stylesheet | `fonts.googleapis.com` (Google) | Your IP address, User-Agent, and the referring page | Served from the offline cache; no further request |
| 4 | Font files — Outfit and Manrope (`.woff2`) | `fonts.gstatic.com` (Google) | Same as #3 | Served from the offline cache; no further request |

**That is the complete list.** There is no analytics, no telemetry, no crash reporting, no advertising, no tracking pixel, no third-party script, and no cookie set by Read Fast.

Destinations 3 and 4 mean Google's servers see that a browser at your IP address loaded a page that uses those fonts. They do not see your books, your reading position, or anything you typed. Google's handling of those requests is governed by [Google's privacy policy](https://policies.google.com/privacy), and GitHub's by [GitHub's privacy statement](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement) — neither is under JohnsonXCorp's control.

**Once installed, Read Fast works with no network at all.** Turn on airplane mode and it still opens and reads.

## 4. Cookies and storage

Read Fast sets **no cookies**. It uses:

- **IndexedDB** — your books, their text, and your reading position.
- **Cache Storage** — the app itself and the two fonts, so it works offline.

Both are on your device and are cleared when you clear your browser's site data for this address. Clearing them deletes your library permanently. **Use "Back up library" if that would matter to you.**

## 5. Your responsibilities

You are responsible for the files you add. In particular:

- Add only files you own or otherwise have the right to read.
- Read Fast does not check, and cannot check, whether a file you add is one you are entitled to have. Nothing in these terms authorises you to circumvent a technological protection measure, or to use a copy you obtained without right.
- Do not attempt to use Read Fast to distribute anything to anyone. It has no facility for that, and adding one would breach the licence.

## 6. What you may not do with Read Fast itself

The [LICENSE](./LICENSE) governs. In short: use it, don't copy it, don't host it, don't rebrand it, don't strip the notices. Section 4 of the licence explains honestly what GitHub's own terms do and do not permit for forks.

## 7. Availability

Read Fast is hosted on GitHub Pages, a free service. It may be unavailable, slow, or discontinued at any time, with or without notice. Nothing here promises it will keep working, and no service level is offered or implied. Your library lives in your browser, so it survives the site going down — but your **backups** are the only thing that survives your browser being cleared.

## 8. Third-party components

Read Fast bundles PDF.js, core-js and fflate, and loads two open-licensed typefaces. They are used under their own licences and remain their authors' property. See [THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md).

## 9. No warranty, and limits on liability

Read Fast is provided **as is**, with no warranty of any kind. It is a free reading tool, not a system of record.

To the fullest extent permitted by law, JohnsonXCorp is not liable for any loss or damage arising from your use of Read Fast — including lost reading positions, a lost library, a misparsed document, or any decision you made based on something Read Fast showed you.

Some jurisdictions do not permit these exclusions. Where that is so, they apply to the fullest extent allowed and no further, and nothing here limits liability for fraud or for anything else that cannot lawfully be limited.

## 10. Changes

These terms may change. The effective date at the top is the only notice given. Continuing to use Read Fast after a change means accepting it.

## 11. Governing law

The laws of British Columbia and the federal laws of Canada applicable therein.

## 12. Contact

https://github.com/ThePastor/read-fast/issues

---

*Prepared without a lawyer. If Read Fast ever takes payment, collects an email address, or adds a backend, these terms need a professional review before that ships — the section 2 claim in particular would stop being true.*
