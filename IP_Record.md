# Read Fast — Intellectual Property Record

**Copyright © 2026 JohnsonXCorp. All rights reserved.**
Compiled 4 September 2026 · covers build **v16**

---

## Why this file exists

Copyright in Read Fast exists automatically and needs no registration to be
valid. What registration would add is *evidence* — a dated, third-party record
of what you had and when. This file is the free substitute for that: it fixes,
in a public commit history with immutable hashes, exactly what existed on this
date and exactly what makes it identifiably yours.

It is not a filing and it is not as strong as one. It is considerably stronger
than nothing, it costs nothing, and it is the thing you would hand a lawyer on
day one of a dispute.

**Do not edit past entries.** Append new releases; leave old hashes alone. The
value of this record is that it was written *before* any dispute existed.

---

## 1. The work

| | |
|---|---|
| **Title** | Read Fast |
| **Type** | Computer program (literary work, s.2 *Copyright Act* (Canada)) |
| **Author** | Anndy Johnson |
| **Copyright owner** | JohnsonXCorp |
| **First published** | 31 August 2026, at https://thepastor.github.io/read-fast/ |
| **Country of first publication** | Canada |
| **Current version** | v16, 4 September 2026 |
| **Repository** | https://github.com/ThePastor/read-fast (public) |
| **Licence** | Proprietary — see [LICENSE](./LICENSE) |

**Description.** A single-file, client-side speed reader. It parses PDF, EPUB,
DOCX, TXT, MD and ZIP files in the browser, strips running headers, footers and
watermarks, resolves chapters and page boundaries, and presents the text one
word at a time by rapid serial visual presentation with optimal-recognition-point
letter alignment. It stores libraries in IndexedDB, installs as a PWA, and works
offline. There is no server component.

---

## 2. Published versions

Each row is an immutable Git commit on GitHub. The commit date is GitHub's, not
a claim of ours — that is what makes it useful as evidence.

| Build | Date | Commit SHA | What it established |
|---|---|---|---|
| v9 | 31 Aug 2026 | `0cd146fa96be9d2b7fae9078d2ede2679a7d3269` | First hosted build |
| v10 | 31 Aug 2026 | `0559107462e51098221bc30e76b815c3526eae37` | Backup/restore; Tier 1 hardening |
| v11 | 1 Sep 2026 | `8e06ca9bd154e4e783a55d4cc91c42b948c03837` | JohnsonXCorp credit footer |
| v12 | 1 Sep 2026 | `df542bd23c8fb8f1ca54a802407347e8a8bf1f50` | Wordmark as supplied artwork |
| v13 | 1 Sep 2026 | `91860deffc88a45110f837c9be22b6fbbafde770` | Wordmark rebuilt as live text |
| v14 | 1 Sep 2026 | `54a71d391f741299fa6e48f4a69f0aad86af1f2a` | Head tags restored |
| v15 | 4 Sep 2026 | `6bed76ccebb2b6eba326f12142e3e856f00f7844` | Installable PWA, home-screen icon set |
| v16 | 4 Sep 2026 | *(this release)* | Licence, terms, notices, ownership record |

---

## 3. File hashes — v16

Shipping files (SHA-256):

| File | Bytes | SHA-256 |
|---|---:|---|
| `index.html` | 1,675,206 | `d2f2343850d7df17cb079571792f691fff211b9e699487da6dff33d03b8809ee` |
| `manifest.webmanifest` | 808 | `f69d5ab320b7bdf97f011d1a73388097234be14b8f6a2f7371c60922038633d6` |
| `sw.js` | 3,049 | `a169b684b7bc2fc7ab4838439ae0452048098bf0da50dc4f79fb9c1834781d84` |
| `icon-192.png` | 31,548 | `6781e53ee443e04e3e02d2b657df2fd50f5f8fd8b66b88df32bba8d6ca5dbcf1` |
| `icon-512.png` | 108,309 | `890dd1ec9a24698fcd57073af0db8fd88ee5cf3ac7045dff4926495611082c52` |
| `icon-maskable-512.png` | 82,727 | `de433991f9989bb3c6579ca3cfa7107fe22206dab115ed6c6820c87120ce764b` |
| `apple-touch-icon.png` | 26,188 | `e27a8e9439f2a043c73813817e9f8d518273505ac8c0aec9d8304dea76257dbe` |
| `favicon.png` | 3,915 | `3456c061ccc6933e68612f1ed5a3a7c1d4156c65272d72881f58b9de003c5467` |
| `LICENSE` | 8,569 | `39a97150bd50789827b68b0461586ea41f1dbc1c93209780e789e9b96a5c3b1c` |
| `TERMS.md` | 6,055 | `4b5a347d775501c3fef2de5e6129e86c7b59ce0e2a74f4dee769aa6c06c1c198` |
| `THIRD-PARTY-NOTICES.md` | 18,544 | `2ceaa32f54f43982e39aa8f8eef71ffb5c2ac08868bc460c7606f53979b2ab27` |

Source files, from which the above are built:

| File | Bytes | SHA-256 |
|---|---:|---|
| `app.template.html` | 129,364 | `cddb39b003257365b528f308e4b3c7f1cb11275fae628a4bb1f1eee98baf3e89` |
| `sw.template.js` | 3,057 | `0326f6dff8cc1b18f1c70f91aee66b5ae70625a1dbabace8df9e5764faace1d4` |
| `build.py` | 7,869 | `fc1b68b5b9805352f6fbd33657fb9b8851553f36c0a5ccd55ae476a10fd828aa` |
| `make_icons.py` | 7,017 | `7211b416913df4cdfdc78a89dea7088bca195fb73b369f6e2a0d070db0b22178` |

To re-verify any of these: `sha256sum <file>`.

---

## 4. What identifies a copy

A copier gets the code. What they do not get is *why*. Every value below was
arrived at by a specific decision or a specific measurement, and none of them is
a convention anyone would independently land on. If a competing product exhibits
these, that is not convergence.

**These nine are the fingerprint.** They are recorded here so that a comparison
can be made later without relying on anyone's memory.

### 4.1 Boilerplate thresholds — `BOILER_MIN_SEGMENTS = 4, BOILER_SHARE = 0.6, BOILER_MAX_WORDS = 12`

A word run is boilerplate when it sits at the same edge of at least 60% of
segments, across at least 4 segments, up to 12 words long. **The 12 is measured,
not chosen.** It was 6, and 6 truncated a real 7-word run — header, footer and
page number together — leaving stray page numbers in the text. Nobody guesses
12; you arrive at it by watching 6 fail.

### 4.2 The wildcard key — `boilerKey()`

Page numbers (`/^[0-9]{1,4}[.,:;|]?$/`) and roman numerals
(`/^[ivxlcdm]{1,7}[.,:;|]?$/`) both collapse to the single token `'#'` before
comparison, so a running footer matches across pages whose numbers differ. The
roman-numeral cap at 7 characters and the trailing-punctuation class
`[.,:;|]` are both specific choices.

### 4.3 The two over-deletion guards

`if (len <= k) continue;` — never swallow a whole segment.
`if (k > Math.max(2, Math.floor(len * 0.3))) continue;` — never more than 30% of
a segment, **with a floor of 2** so that very short segments are not accidentally
immune to filtering. The floor is the non-obvious half.

### 4.4 Resume-on-play — `RESUME_LOOKBACK = 10, RESUME_STEP = 4`

On resuming from a pause, scan back up to 10 words for a sentence terminator and
resume at the sentence start; otherwise go back exactly 4. The word is stripped
of trailing quotes and brackets (`/["'\u201d\u2019)\]]+$/`) *before* the
terminator test, so `he said."` counts as a sentence end.

The distinguishing part is what it does **not** do: the rewind is armed only by
a pause (`R.rewindArmed`). An explicit jump from the page view or the scrub bar
lands exactly where asked, with no rewind. A copier who takes the constants
without the arming flag produces an app that quietly disobeys its own jump
control — a difference that is easy to observe from the outside.

### 4.5 Focal-letter placement — `orpIndex()`

A step function, not a formula: `0` for length ≤ 1, `1` for ≤ 5, `2` for ≤ 9,
`3` for ≤ 13, `4` beyond. The common published approach is
`ceil(length / 2) - 1`. These are different functions and produce visibly
different alignment on long words.

### 4.6 The pacing rule — `delayFor()`

Base `60000 / wpm`, then: ×1.2 above 8 characters, ×1.2 **again** above 13
(compounding to 1.44, not a flat 1.4), ×2 after sentence-ending punctuation,
×1.5 after a comma, semicolon, colon, em dash or en dash. Punctuation is tested
on the *core* word after trailing quotes and brackets are stripped — so a word
ending `."` still gets the full sentence pause.

### 4.7 Pagination and pace ladder

`WORDS_PER_VIRTUAL_PAGE = 250` for formats with no fixed pages. Presets
`[50, 75, 100, 150, 200, 250, 300, 350, 400, 500, 600, 800]`, defaulting to 300.
The ladder is uneven on purpose — fine steps at the bottom where a beginner is
choosing, coarse at the top where the difference stops being perceptible.

### 4.8 Icon geometry — `MASKABLE_INSET = 0.84`

Measured against Android's 40%-of-width maskable safe zone. At 0.92 and again at
0.86 the bolt's black outline breached it. 0.84 puts the white bolt at **37.7%**
and the outline at **39.5%**. Anyone who arrives at 0.84 independently has done
the same three measurements.

Alongside it: the corner mask is a **flood fill from the four corners**, not a
colour key and not a geometric rounded rectangle. A colour key erases the bolt's
outline — `#131017` against the `#15181D` sheet is a channel-sum difference of
16, inside any workable tolerance. A geometric mask misses because the artwork
is a squircle, not a circular-radius rounded rectangle. The flood works because
connectivity cannot reach an interior region. **Three approaches, two of which
fail for reasons that are only discoverable by trying them.**

### 4.9 Service-worker navigation keying

`var key = req.mode === 'navigate' ? DOC : req;` — navigations are cached
against the bare directory URL, so `?cb=` cache-busters used during release
verification do not accumulate as separate cache entries. This is a fix for a
problem you only encounter if you verify releases by cache-busting.

---

## 5. Trade marks

"Read Fast", "JohnsonXCorp", the `Johnson[X]Corp` wordmark, the amber bolt
badge, and the gradient home-screen icon are used as trade marks by
JohnsonXCorp. **None is registered.** Unregistered marks attract common-law
passing-off protection in Canada, limited to the area where reputation is
demonstrable — which for an unadvertised app is narrow.

Registration through CIPO would give exclusive Canada-wide rights in the
associated goods and services. It costs a modest fee (check CIPO's current
schedule) and takes a long time. Worth doing only if Read Fast becomes something
you intend to defend commercially. **"Read Fast" is a weak mark** — it is
descriptive of what the product does, and descriptive marks are hard to register
and harder to enforce. "JohnsonXCorp" is distinctive and would register far more
easily; if you register one thing, register that.

---

## 6. If you find a copy

In order, and mostly stopping at step 2:

1. **Record it before it changes.** Save the page (`Ctrl/Cmd+S`), screenshot it,
   note the URL and the date, and archive it at `web.archive.org`. A copy taken
   down after you complain is a copy you can no longer prove existed.
2. **Compare against section 4.** One shared constant is coincidence. Three is
   not. All nine is not an argument anyone can make with a straight face.
3. **Send a polite notice first.** Most copying is a student who liked your app,
   not a competitor. A short message asking them to take it down or add
   attribution resolves nearly all of it, costs nothing, and does not make an
   enemy.
4. **DMCA takedown** if they ignore you. Free, and effective because it goes to
   the *host*, not the copier: GitHub (https://github.com/contact/dmca),
   Netlify, Vercel and Cloudflare all act on valid notices. You must state under
   penalty of perjury that you own the work and have a good-faith belief the use
   is unauthorised — which is why sections 1 to 4 of this file exist.
5. **A lawyer** only if there is real money involved. Below that threshold the
   legal cost exceeds the harm, and steps 3 and 4 are what actually work.

---

## 7. What would strengthen this

Honestly ranked, best value first:

1. **Keep publishing to GitHub.** Every commit is a timestamped third-party
   record you did not have to pay for. This is already your strongest evidence.
2. **Keep this file current.** One new row in sections 2 and 3 per release.
3. **Register with CIPO** (Canada) if Read Fast ever earns money. Registration
   creates a presumption of ownership, which shifts the burden onto the person
   copying you.
4. **Register with the US Copyright Office** *before* any dispute, if you ever
   have meaningful US users. US registration is a precondition of suing there,
   and registering **within three months of publication** is what unlocks
   statutory damages and legal fees — which is usually the difference between a
   case being worth bringing and not. That deadline is the one genuinely
   time-sensitive item on this list.
5. **Register "JohnsonXCorp"** as a trade mark before "Read Fast". It is the
   defensible mark and it covers everything else you build.

---

## 8. Limits of this document

Prepared without a lawyer, by the author, for the author's own record. It is not
legal advice and it is not a substitute for registration. Its value is
evidentiary: it fixes a date, a set of hashes, and a set of design decisions,
before there was any reason to lie about them.

**One thing to sort out.** The copyright owner is recorded as "JohnsonXCorp". If
JohnsonXCorp is not a registered corporation or a registered sole
proprietorship, it is a trade name — and a trade name cannot own copyright or
bring a claim on its own; you would sue personally as Anndy Johnson, trading as
JohnsonXCorp. That is fine, and nothing here breaks because of it. But if you
ever license Read Fast commercially, register the business first, and record the
assignment of copyright from you personally to the company. Doing that early is
trivial; doing it retroactively during a dispute is not.
