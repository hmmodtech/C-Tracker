# C-TRACKER — Central Tracker Dashboard

> A self-contained, single-file HTML dashboard for field inspection tracking. Connects to Google Forms, syncs config via Google Apps Script, and renders live compliance reports — no server, no framework, no installation.

---

## Table of Contents

1. [What It Does](#what-it-does)
2. [Project Files](#project-files)
3. [How It Works](#how-it-works)
4. [Quick Start](#quick-start)
5. [Cloud Sync Setup (Apps Script)](#cloud-sync-setup-apps-script)
6. [Google Sheets API Setup](#google-sheets-api-setup)
7. [Adding & Configuring Trackers](#adding--configuring-trackers)
8. [Report System](#report-system)
9. [First Aid Report (Custom Layout)](#first-aid-report-custom-layout)
10. [Screen Options & Theming](#screen-options--theming)
11. [Switching Accounts / Organisations](#switching-accounts--organisations)
12. [Sharing the Dashboard](#sharing-the-dashboard)
13. [Version History](#version-history)
14. [Architecture Notes](#architecture-notes)
15. [Troubleshooting](#troubleshooting)

---

## What It Does

C-TRACKER is a **zero-dependency field inspection dashboard** built as a single HTML file. It is designed for NGO/humanitarian operations teams (originally ACF) who need to:

- Track multiple types of field inspections (First Aid kits, UXO equipment, Crossfire gear, etc.)
- Connect each tracker to a **Google Form → Google Sheet** pipeline
- View **live compliance scores**, missing items, and inspection history
- Generate **visual PDF-ready reports** per tracker and consolidated management reports
- Share the dashboard across a team by sharing one file — config syncs automatically via cloud

---

## Project Files

| File | Purpose |
|------|---------|
| `C-TRACKER-v17.html` | **Main dashboard** — the only file users need to open |
| `AppsScript-v2.gs` | Google Apps Script code — deployed once to enable cloud config sync |
| `README.md` | This documentation file |

> Earlier versions (v14–v16) are kept for reference. Always use the latest version.

---

## How It Works

```
Google Form  →  Google Sheet  →  Sheets API  →  C-TRACKER Dashboard
                                                        ↕
                                             Google Apps Script
                                          (cloud config store)
```

**Config sync** (tracker names, form URLs, sheet IDs, API key) is stored in a Google Spreadsheet managed by the Apps Script. Every time the dashboard loads, it reads from this cloud config — so any changes made by one user are instantly visible to all others.

**Response data** is read directly from each tracker's Google Sheet using the Sheets API v4 with a public API key.

---

## Quick Start

### Step 1 — Open the dashboard
Open `C-TRACKER-v17.html` in any modern browser. No server needed — it runs entirely client-side.

### Step 2 — Deploy the Apps Script (first time only)
See [Cloud Sync Setup](#cloud-sync-setup-apps-script) below.

### Step 3 — Connect in Settings
Click **⚙ Settings** in the topbar → paste your Apps Script URL → click **▶ Test & Connect**.

### Step 4 — Add your trackers
Click **+ Trackers** → **+ Add New Tracker** → fill in name, icon, Google Form URL, and Sheet ID.

### Step 5 — Add your API key
In **⚙ Settings** → paste your Google Sheets API key → click **▶ Save & Connect**.

### Step 6 — Save and share
Click **↓ Save File** in the footer. Share the downloaded file — it has your Apps Script URL baked in so colleagues connect instantly.

---

## Cloud Sync Setup (Apps Script)

The Apps Script acts as a simple key-value cloud store. It saves your entire dashboard config (trackers list, API key, sheet IDs) to a Google Spreadsheet in your Drive, and serves it on request.

### Deploy the script

1. Go to [script.google.com](https://script.google.com) and sign in with your **organisation account**
2. Click **New Project**
3. Paste the entire contents of `AppsScript-v2.gs` into the editor
4. Click **Deploy → New Deployment**
5. Set type to **Web App**
6. Set **Execute as**: Me (your org account)
7. Set **Who has access**: Anyone
8. Click **Deploy** and copy the Web App URL

### Connect the URL to the dashboard

1. Open `C-TRACKER-v17.html`
2. Click **⚙ Settings** in the topbar
3. Click **🔄 Switch to a different account**
4. Paste the Web App URL
5. Click **▶ Test & Switch Account**

The dashboard will immediately load any existing config from that account.

### What the script stores

The script creates a file called `C-TRACKER-Cloud-Config` in your Google Drive. It stores a single JSON object in cell A1 of a sheet named `Config`. The JSON contains:

```json
{
  "trackers": [...],
  "apiKey": "AIza...",
  "savedAt": "2025-05-26T..."
}
```

> **Note:** The script uses GET requests for both read and write operations. This is intentional — POST requests to Apps Script cause CORS/redirect issues in browsers.

---

## Google Sheets API Setup

The dashboard reads form responses directly from Google Sheets using the Sheets API v4.

### Create an API key

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Select or create a project
3. Go to **APIs & Services → Library**
4. Search for **Google Sheets API** and enable it
5. Go to **APIs & Services → Credentials**
6. Click **Create Credentials → API Key**
7. Copy the key

### Add the key to the dashboard

In **⚙ Settings** → paste under **🔑 Google Sheets API Key** → click **▶ Save & Connect**.

### Important — organisation accounts

If your Google Sheets are owned by an **organisation (Workspace) account**, the public API key approach **will return 403 Access Denied**. You have three options:

| Path | Description | Difficulty |
|------|-------------|------------|
| **A — IT creates an API key** | Ask IT to create a key under the org Cloud Console project | Easy if IT cooperates |
| **B — Make sheets public** | In the Sheet: Share → Anyone with link → Viewer | Simple but reduces privacy |
| **C — Service Account** | IT creates a service account, shares sheets with it, use OAuth token | Most secure, most complex |

For most field teams, **Path B** (making the response sheet viewable by link) is the fastest solution.

---

## Adding & Configuring Trackers

Each tracker corresponds to one **Google Form + Google Sheet** pair.

### Tracker fields

| Field | Description |
|-------|-------------|
| **Name** | Display name (e.g. "First Aid Tracker") |
| **Description** | Short description shown on card hover |
| **Icon** | Emoji shown on the card |
| **Google Form URL** | Full URL of the Google Form — used for the "Start Check" button |
| **Response Sheet ID** | The ID from the Sheet URL: `.../spreadsheets/d/`**`[THIS PART]`**`/edit` |

### How to get the Sheet ID

1. Open the Google Sheet linked to your form responses
2. Look at the URL: `https://docs.google.com/spreadsheets/d/`**`1BxiMVs0XRA...`**`/edit`
3. Copy the long ID between `/d/` and `/edit`

### Card illustrations

The dashboard auto-generates a contextual SVG illustration for each card based on keywords in the tracker name:

| Keyword | Illustration |
|---------|-------------|
| `first aid`, `firstaid` | Red first aid box with cross |
| `fire`, `extinguisher` | Fire extinguisher |
| `smoke` | Smoke detector panel |
| `uxo`, `map` | Area map with route |
| `gps`, `garmin` | GPS device |
| `pharma` | Pharmacy shelf |
| `hr`, `human` | HR org chart |
| `log` | Field logbook |
| `comm`, `tree` | Communication tree |
| `master` | Master control shield |
| *(anything else)* | Generic clipboard |

---

## Report System

Every tracker has a full visual report accessible by hovering the card and clicking **↗ Report**.

### Report tabs

| Tab | Content |
|-----|---------|
| **📊 Overview** | Executive summary KPIs, compliance bar, recent submission history, auditor's conclusion |
| **🔍 Inspection Results** | Full table of every form question mapped to a control point with Pass/Fail/Observation status |
| **⚠ Issues** | Action & rectification plan for current submission + recurring issues frequency bars across all submissions |
| **📈 Charts** | Compliance trend over time (dual-axis: % line + submission count bars), top missing items bar chart, response distribution donut |

### Status classification

The dashboard automatically classifies form responses:

| Response contains | Status |
|-------------------|--------|
| `yes`, `ok`, `complete`, `full`, `available`, `good` | ✅ Pass |
| `missing`, `no`, `empty`, `none`, `not available`, `expired` | ❌ Fail |
| `observation`, `note`, `partial` | ◎ Observation |
| `n/a`, `na` | — N/A |
| *(anything else)* | ⏳ Pending |

### Compliance score formula

```
Compliance % = (Pass count) / (Pass + Fail count) × 100
```

Pending and N/A items are excluded from the denominator.

### Management report

Click **⬡ Report** in the topbar or the **Management Report** button at the bottom to open the consolidated view across all trackers. It includes:

- Overall compliance ring (weighted average)
- Hero stats: total trackers, total inspections, connected sheets, total issues
- Per-tracker cards with compliance %, inspection count, last check date, inspector name
- Cross-tracker compliance and inspection count charts
- Key findings and recommendations (auto-generated)
- Direct form links for each tracker

---

## First Aid Report (Custom Layout)

Trackers whose name contains `first aid`, `firstaid`, `fa kit`, or `first-aid` get a **dedicated report layout** designed specifically for kit inspection data.

### Layout sections

**Hero Banner** — Tracker name, submission number, date, and animated compliance ring

**Submission Navigator** — Dropdown to browse all past inspections + history drawer showing compliance score and issue count per submission

**Meta Cards (4 fields)**

| Card | Source field |
|------|-------------|
| 📅 Date | Any field containing `timestamp` or `date` — auto-formatted to dd/mm/yyyy |
| 👤 Done By | Any field containing `done by`, `inspector`, `name`, or `by` |
| 🏢 Premise | Any field containing `premise`, `facility`, `site name`, or `branch` |
| 📍 Location | Any field containing `location`, `area`, `room`, `zone`, or `floor` |

**Tag Block** — Finds any field containing `tag` in its name. If the value is a Google Drive image URL, it renders the actual photo (clickable to open full-screen lightbox). If it's plain text, it displays the tag ID prominently.

**✅ Available Items** — Green section listing every item that passed (contains a positive response keyword). Shows the field name and the raw response value.

**❌ Missing / Non-Compliant Items** — Red section listing every item that failed. Shows the field name and the raw response value.

**Compliance Bar** — Animated fill bar showing the score for this specific submission.

---

## Screen Options & Theming

Click **⚙️ Screen Options** in the topbar to open the customisation panel.

| Option | Description |
|--------|-------------|
| **Accent Color** | Changes the primary action color across the entire UI (buttons, badges, highlights). 8 presets + custom picker |
| **Background Color** | Changes the base background. 10 presets including light/warm/dark options |
| **Text Color** | Changes primary text color. 8 presets + custom picker |
| **Card Style** | Default (glass) · Flat (bottom border accent) · Rounded (pill corners) · Bordered (thick border, no shadow) |
| **Content Density** | Compact (tight spacing) · Default · Spacious (generous padding) |

Click **Save Preferences** to persist these settings in localStorage — they survive page reloads.

### Light / Dark mode

Click the 🌙 / ☀️ button in the topbar to toggle between dark and light mode. The light mode uses a warm off-white base (no harsh pure white) designed to be easy on the eyes in field conditions.

---

## Switching Accounts / Organisations

To move the dashboard to a different Google account or organisation:

1. Deploy a **new Apps Script** on the new account (same `AppsScript-v2.gs` code)
2. Copy the new Web App URL
3. In the dashboard: **⚙ Settings → 🔄 Switch to a different account**
4. Paste the new URL → **▶ Test & Switch Account**
5. The dashboard immediately loads config from the new account
6. Click **↓ Save File** to bake the new URL into the file for sharing

---

## Sharing the Dashboard

The correct way to share the dashboard with colleagues:

1. Configure everything (trackers, API key, sheet IDs) on your machine
2. Click **↓ Save File** in the footer
3. Share the downloaded `C-TRACKER-YYYY-MM-DD.html` file

The saved file has your Apps Script URL **baked directly into the JavaScript constant** `DEFAULT_SCRIPT_URL`. When a colleague opens it, the dashboard immediately connects to the cloud config and loads all trackers — no setup required on their end.

> **Do not share the original file before saving.** The original has whatever URL was set at coding time. Always use Save File after configuring.

---

## Version History

| Version | Key Changes |
|---------|------------|
| **v17** | **First Aid custom report** — dedicated layout with Date/Done By/Premise/Location meta cards, tag image rendering, Available/Missing split sections |
| **v16** | Completely redesigned report system — cinematic banner with SVG ring, dual-axis trend chart, recurring issues frequency bars, redesigned final management report with hero stats |
| **v15** | SVG card illustrations updated — transparent backgrounds for light mode compatibility; improved card illustration rendering |
| **v14** | Screen Options panel — live accent/background/text color pickers, card style variants, density controls, localStorage persistence |
| **v13** | 3D glassmorphism card system — perspective tilt on hover, scanline animation, staggered entry animation, glass stat tiles |
| **v12** | 4-section structured report — Overview / Latest Results / Issues Tracker / Charts tabs |
| **v11** | Cloud sync engine — GET-based read/write to Apps Script, local storage fallback, cloud status bar |
| **v10** | Management report — consolidated view, drill-down per tracker, Chart.js visualisations |

---

## Architecture Notes

### Single-file design
The entire application — HTML, CSS, JavaScript, SVG illustrations, all modal content — lives in one `.html` file. This is intentional for field use: the file can be shared over WhatsApp, email, USB, or any file transfer method and opens immediately in any browser.

### State management
```
Priority: Cloud (authoritative) → localStorage (fallback) → defaults
```
- On load: fetches from Apps Script cloud
- On failure: falls back to localStorage cache
- Every save: writes to cloud AND localStorage simultaneously
- localStorage is never the source of truth — it's only a fallback

### Data flow
```
Form submission → Google Sheet → Sheets API v4
                                      ↓
                              C-TRACKER parses rows
                                      ↓
                     isOk() / isBad() keyword classification
                                      ↓
                           Compliance % calculation
                                      ↓
                              Report rendering
```

### No build step
The dashboard uses vanilla JavaScript (ES2017+), inline CSS custom properties, and Chart.js loaded from CDN. There is no npm, no webpack, no transpilation. Any text editor can modify it.

---

## Troubleshooting

### Cloud sync shows "error" / "offline"
- Check that the Apps Script is deployed as **Anyone** (not "Anyone with Google account")
- Check that the Web App URL is correct in Settings
- Try clicking **☁ Cloud Sync** to retry manually
- Check browser console for CORS errors — the script must be deployed without requiring sign-in

### Sheet data returns 403
- The sheet is owned by an organisation account — the public API key cannot access private org sheets
- See [Google Sheets API Setup](#google-sheets-api-setup) for the three resolution paths
- Quickest fix: Share the sheet → Anyone with link → Viewer

### Sheet data returns 400 / "Unable to parse"
- The Sheet ID is wrong — double-check you copied the ID between `/d/` and `/edit` in the URL
- The sheet may be empty or have no form responses yet

### Report shows "No data" even though sheet has data
- The Sheet ID in Settings does not match the actual response sheet
- The API key does not have Sheets API enabled — check Google Cloud Console
- The sheet may have responses but on a different tab — the dashboard reads `A1:ZZ1000` of the first tab

### Tag photo does not show in First Aid report
- The tag field value must be a Google Drive share URL (contains `drive.google.com`)
- Drive thumbnails require the file to be shared publicly or accessible via the API
- If the image fails to load, the report shows a fallback "Open in Drive →" link

### Settings are lost after reload
- localStorage may be disabled or cleared (private/incognito mode)
- The cloud sync is the source of truth — settings reload from the Apps Script on each page load
- Use **↓ Save File** to create a file with the URL baked in, which does not depend on localStorage

### "Save File" does not bake the URL
- You must be connected to the cloud (green ☁ Synced indicator) before saving
- If the URL field in Settings was just filled in but not tested, it may not have been set to `scriptUrl` yet — click **▶ Test & Switch Account** first

---

*C-TRACKER · Operations Dept · ACF · Built for field use*
