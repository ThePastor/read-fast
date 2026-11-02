# Read Fast — Terms of Use

**Effective 2 November 2026 · applies to https://thepastor.github.io/read-fast/**

© 2026 JohnsonX Labs. All rights reserved. Read Fast is proprietary software — see [LICENSE](./LICENSE).

By using Read Fast you agree to these terms. If you do not agree, do not use it.

---

## 1. What Read Fast is

A speed reader that runs entirely in your browser. You add a book — PDF, EPUB, DOCX, TXT, MD, or a ZIP of those — and it shows you one word at a time at a pace you choose. It can also read the book aloud.

It is free to use. There is no account, no sign-up, and no payment.

## 2. What happens to your books

**Nothing leaves your browser.** This is not a promise about a policy that could change; it is a description of how the software is built, and you can verify it yourself.

- Your file is parsed by JavaScript running on your own device.
- The extracted text and your reading position are stored in your browser's IndexedDB, on your device.
- There is no server to send them to. Read Fast is a static file on GitHub Pages. There is no backend, no database, and no account system.
- "Back up library" writes a file to your own downloads folder. Nothing is uploaded.
- **Reading aloud happens on your device too.** The natural voice is a speech model that runs in your browser; it turns your book's text into sound on your own device and sends the text nowhere. The device voice uses only voices built into your phone or computer that run on it. Some browsers also offer "online" voices that send the text they speak to Microsoft or Google — Read Fast deliberately does not use them.

JohnsonX Labs cannot read your library, cannot recover it for you, and has no way to know what you have added.

## 3. Every time the page touches the network

Four destinations always, and three more only if you choose to download the natural voice. **None of them ever receives your book's content.**

| # | What | Where it goes | What is sent | After the first visit |
|---|---|---|---|---|
| 1 | The page itself | `thepastor.github.io` (GitHub Pages) | Your IP address, browser User-Agent, referring page, timestamp — the standard information any web server receives | Served from the offline cache; revalidated in the background |
| 2 | App assets — manifest, service worker, the five icon files | `thepastor.github.io` (same server as #1) | Same as #1 | Served from the offline cache |
| 3 | Font stylesheet | `fonts.googleapis.com` (Google) | Your IP address, User-Agent, and the referring page | Served from the offline cache; no further request |
| 4 | Font files — Outfit and Manrope (`.woff2`) | `fonts.gstatic.com` (Google) | Same as #3 | Served from the offline cache; no further request |

**Only if you choose "Download voice" in the Listen panel** — nothing here is contacted otherwise:

| # | What | Where it goes | What is sent | After the first time |
|---|---|---|---|---|
| 5 | The voice engine and its WebAssembly runtime (about 24 MB) | `cdn.jsdelivr.net` (jsDelivr) | Your IP address, User-Agent and referring page — the standard information any server receives | Kept in your browser's cache; no further request |
| 6 | The voice model and the voice you pick (about 93 MB) | `huggingface.co` (Hugging Face) | Same as #5 | Kept in your browser's cache; no further request |
| 7 | The same files — Hugging Face hands the download to its file CDN | `*.cdn.hf.co`, e.g. `us.aws.cdn.hf.co` (Hugging Face) | Same as #5 | As #6 |

These are downloads of public files that are the same for everyone. **The text of your book is never sent to any of them** — the voice runs on your device, after the download.

**That is the complete list.** There is no analytics, no telemetry, no crash reporting, no advertising, no tracking pixel, and no cookie set by Read Fast. The only third-party script is the voice engine in #5, and it loads only if you download the natural voice.

Destinations 3 and 4 mean Google's servers see that a browser at your IP address loaded a page that uses those fonts. They do not see your books, your reading position, or anything you typed. Destinations 5–7 mean jsDelivr and Hugging Face see that a browser at your IP address downloaded the voice. Google's handling of those requests is governed by [Google's privacy policy](https://policies.google.com/privacy), GitHub's by [GitHub's privacy statement](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement), jsDelivr's by [its privacy policy](https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net) and Hugging Face's by [its privacy policy](https://huggingface.co/privacy) — none is under JohnsonX Labs's control.

**Once installed, Read Fast works with no network at all.** Turn on airplane mode and it still opens and reads — and, once downloaded, the natural voice still reads aloud.

## 4. Cookies and storage

Read Fast sets **no cookies**. It uses:

- **IndexedDB** — your books, their text, your reading position and your reading statistics.
- **Cache Storage** — the app itself and the two fonts, so it works offline; and, if you download it, the natural voice (about 117 MB). The Listen panel has a button that removes the voice and gives the space back.
- **Local storage** — a few small settings: your reading pace, whether Listen is on, the voice and voice speed you chose, and how fast this device makes speech (so the voice can plan ahead). *(Earlier versions of these terms left this out. Read Fast has always kept your reading pace this way; the omission was ours.)*

All of it is on your device and is cleared when you clear your browser's site data for this address. Clearing it deletes your library permanently. **Use "Back up library" if that would matter to you.**

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

Read Fast bundles PDF.js, core-js and fflate, and loads two open-licensed typefaces. If you download the natural voice, it also loads the Kokoro speech model and the software that runs it. All of these are used under their own licences and remain their authors' property. See [THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md).

## 9. No warranty, and limits on liability

Read Fast is provided **as is**, with no warranty of any kind. It is a free reading tool, not a system of record.

To the fullest extent permitted by law, JohnsonX Labs is not liable for any loss or damage arising from your use of Read Fast — including lost reading positions, a lost library, a misparsed document, or any decision you made based on something Read Fast showed you.

Some jurisdictions do not permit these exclusions. Where that is so, they apply to the fullest extent allowed and no further, and nothing here limits liability for fraud or for anything else that cannot lawfully be limited.

## 10. Changes

These terms may change. The effective date at the top is the only notice given. Continuing to use Read Fast after a change means accepting it.

## 11. Governing law

The laws of British Columbia and the federal laws of Canada applicable therein.

## 12. Contact

https://github.com/ThePastor/read-fast/issues

---

*Prepared without a lawyer. If Read Fast ever takes payment, collects an email address, or adds a backend, these terms need a professional review before that ships — the section 2 claim in particular would stop being true. The voice added on 2 November 2026 changes none of that: it adds downloads, not a backend, and your book still never leaves your device.*
