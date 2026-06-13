/* ============================================================
   C-TRACKER — S-TRACKER Design System Override
   Add this LAST in <head>, after acf-design-system.css:
   <link rel="stylesheet" href="c-tracker-theme.css">
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* ── LIGHT MODE (default in your app) ─────────────────────── */
:root {
  --accent:         #f97316 !important;
  --accent-dim:     rgba(249,115,22,0.25) !important;
  --accent-bg:      rgba(249,115,22,0.08) !important;
  --accent-glow:    rgba(249,115,22,0.15) !important;
  --green:          #f97316 !important;
  --green-dim:      rgba(249,115,22,0.25) !important;
  --green-bg:       rgba(249,115,22,0.08) !important;

  --bg:             #f1f5f9 !important;
  --sidebar-bg:     rgba(255,255,255,0.92) !important;
  --sidebar-border: rgba(249,115,22,0.18) !important;
  --surface:        rgba(255,255,255,0.80) !important;
  --surface2:       rgba(255,255,255,0.92) !important;
  --surface3:       rgba(248,250,252,0.98) !important;
  --border:         rgba(0,0,0,0.08) !important;
  --border2:        rgba(0,0,0,0.14) !important;
  --text:           #0f172a !important;
  --text-dim:       #475569 !important;
  --muted:          #94a3b8 !important;
  --card-bg:        rgba(255,255,255,0.88) !important;

  --font-sans:      'Inter','Segoe UI',system-ui,-apple-system,sans-serif !important;
}

/* ── DARK MODE ─────────────────────────────────────────────── */
body.dark-mode {
  --accent:         #f97316 !important;
  --accent-dim:     rgba(249,115,22,0.28) !important;
  --accent-bg:      rgba(249,115,22,0.10) !important;
  --accent-glow:    rgba(249,115,22,0.18) !important;
  --green:          #f97316 !important;
  --green-dim:      rgba(249,115,22,0.28) !important;
  --green-bg:       rgba(249,115,22,0.10) !important;

  --bg:             #090d1a !important;
  --sidebar-bg:     rgba(13,18,36,0.92) !important;
  --sidebar-border: rgba(249,115,22,0.12) !important;
  --surface:        rgba(17,24,39,0.80) !important;
  --surface2:       rgba(22,28,45,0.88) !important;
  --surface3:       rgba(28,34,52,0.95) !important;
  --border:         rgba(255,255,255,0.07) !important;
  --border2:        rgba(255,255,255,0.13) !important;
  --text:           #e2e8f0 !important;
  --text-dim:       #94a3b8 !important;
  --muted:          #4a5568 !important;
  --card-bg:        rgba(13,18,36,0.85) !important;
}

/* ── STATUS COLORS (keep working) ─────────────────────────── */
:root {
  --status-low:  #22c55e;
  --status-med:  #eab308;
  --status-high: #f97316;
  --status-crit: #ef4444;
}

/* ── BODY / BASE ───────────────────────────────────────────── */
body {
  font-family: var(--font-sans) !important;
  background: var(--bg) !important;
  color: var(--text) !important;
  transition: background 0.2s ease, color 0.2s ease;
}

/* ── SIDEBAR ───────────────────────────────────────────────── */
.sidebar {
  background: var(--sidebar-bg) !important;
  border-right: 1px solid var(--sidebar-border) !important;
}

.sidebar-brand {
  border-bottom: 1px solid var(--sidebar-border) !important;
}

.brand-logo {
  background: var(--accent) !important;
  box-shadow: 0 2px 10px var(--accent-glow) !important;
}

.brand-name {
  font-family: var(--font-sans) !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
}

.nav-section {
  font-size: 9px !important;
  letter-spacing: 0.12em !important;
  color: var(--muted) !important;
}

.nav-item {
  font-size: 12px !important;
  border-radius: 6px !important;
  transition: all 0.15s ease !important;
}
.nav-item:hover {
  background: var(--accent-bg) !important;
  color: var(--text) !important;
}
.nav-item.active {
  background: var(--accent-bg) !important;
  border-color: var(--accent-dim) !important;
  color: var(--text) !important;
}
.nav-item.active .nav-icon { color: var(--accent) !important; }

.nav-badge {
  background: var(--accent-bg) !important;
  color: var(--accent) !important;
  border-color: var(--accent-dim) !important;
  font-size: 9px !important;
}

.sidebar-footer {
  border-top: 1px solid var(--sidebar-border) !important;
  background: transparent !important;
}

/* ── TOPBAR ────────────────────────────────────────────────── */
.topbar {
  background: var(--sidebar-bg) !important;
  border-bottom: 1px solid var(--sidebar-border) !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  box-shadow: none !important;
}

.topbar-title {
  font-family: var(--font-sans) !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  letter-spacing: -0.02em !important;
}

/* ── PILL BUTTONS (topbar) ─────────────────────────────────── */
.pill-btn {
  font-family: var(--font-sans) !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  border-radius: 6px !important;
  padding: 5px 12px !important;
  border: 1px solid var(--border2) !important;
  background: var(--surface2) !important;
  color: var(--text-dim) !important;
  transition: all 0.15s ease !important;
  letter-spacing: 0 !important;
}
.pill-btn:hover {
  background: var(--accent-bg) !important;
  color: var(--text) !important;
  border-color: var(--accent-dim) !important;
}

.pill-live {
  background: var(--accent-bg) !important;
  color: var(--accent) !important;
  border-color: var(--accent-dim) !important;
}
.pill-dot { background: var(--accent) !important; }

.pill-cloud-ok {
  background: rgba(34,197,94,0.1) !important;
  color: #22c55e !important;
  border-color: rgba(34,197,94,0.3) !important;
}

/* ── SUMMARY CARDS ─────────────────────────────────────────── */
.sum-card {
  background: var(--card-bg) !important;
  border: 1px solid var(--border) !important;
  border-radius: 12px !important;
  backdrop-filter: blur(8px) !important;
  transition: all 0.2s ease !important;
}
.sum-card:hover {
  border-color: var(--accent-dim) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 24px rgba(249,115,22,0.08) !important;
}

/* Color accent tops */
.sum-card.c-red::before   { background: linear-gradient(90deg, #ef4444, transparent) !important; }
.sum-card.c-green::before { background: linear-gradient(90deg, var(--accent), transparent) !important; }
.sum-card.c-amber::before { background: linear-gradient(90deg, #eab308, transparent) !important; }
.sum-card.c-blue::before  { background: linear-gradient(90deg, #3b82f6, transparent) !important; }

.sum-value.ok   { color: var(--accent) !important; }
.sum-value.warn { color: #eab308 !important; }
.sum-value.bad  { color: #ef4444 !important; }
.sum-value.blue { color: #3b82f6 !important; }

.sum-label {
  font-family: var(--font-sans) !important;
  font-size: 10px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: var(--muted) !important;
}

/* ── SECTION LABELS ────────────────────────────────────────── */
.section-label {
  font-family: var(--font-sans) !important;
  font-size: 10px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.14em !important;
  color: var(--muted) !important;
}
.sl-icon { color: var(--accent) !important; }

/* ── TRACKER CARDS ─────────────────────────────────────────── */
.tracker-card {
  background: var(--card-bg) !important;
  border: 1px solid var(--accent-dim) !important;
  border-top: 2px solid var(--accent) !important;
  border-radius: 12px !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  transition: box-shadow 0.3s ease, border-color 0.3s ease !important;
}
.tracker-card:hover {
  border-color: rgba(249,115,22,0.45) !important;
  box-shadow: 0 10px 32px rgba(249,115,22,0.10) !important;
}

.card-glass-divider {
  background: linear-gradient(90deg,transparent,rgba(249,115,22,0.15),transparent) !important;
}

/* Stat tiles inside tracker card */
.cs-item {
  background: rgba(249,115,22,0.05) !important;
  border: 1px solid rgba(249,115,22,0.12) !important;
  border-radius: 8px !important;
  transition: all 0.15s ease !important;
}
.cs-item:hover {
  background: rgba(249,115,22,0.10) !important;
  border-color: rgba(249,115,22,0.22) !important;
}
.cs-label {
  font-family: var(--font-sans) !important;
  font-size: 9px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  color: var(--muted) !important;
}
.cs-val { font-family: var(--font-sans) !important; }
.cs-val.ok { color: var(--accent) !important; }

/* Card footer compliance bar */
.comp-bar-fill        { background: var(--accent) !important; }
.comp-bar-fill.warn   { background: #eab308 !important; }
.comp-bar-fill.bad    { background: #ef4444 !important; }
.comp-bar-track       { background: var(--border) !important; }

/* Card status badges */
.badge-ok {
  background: rgba(249,115,22,0.09) !important;
  color: var(--accent) !important;
  border-color: rgba(249,115,22,0.25) !important;
}
.badge-linked {
  background: rgba(59,130,246,0.09) !important;
  color: #3b82f6 !important;
  border-color: rgba(59,130,246,0.25) !important;
}

/* Status dots */
.dot-ok   { background: var(--accent) !important; box-shadow: 0 0 6px rgba(249,115,22,0.5) !important; }
.dot-warn { background: #eab308 !important; }
.dot-bad  { background: #ef4444 !important; }

/* ── CARD HOVER ACTIONS ────────────────────────────────────── */
.card-hover-actions {
  background: linear-gradient(0deg,rgba(9,13,26,0.98) 0%,rgba(13,18,36,0.94) 100%) !important;
  border-top: 1px solid rgba(249,115,22,0.12) !important;
}
body:not(.dark-mode) .card-hover-actions {
  background: linear-gradient(0deg,rgba(255,255,255,0.99) 0%,rgba(248,250,252,0.96) 100%) !important;
  border-top: 1px solid rgba(249,115,22,0.10) !important;
}

.cha-btn {
  border: 1px solid var(--accent-dim) !important;
  background: var(--card-bg) !important;
  border-radius: 8px !important;
  transition: all 0.18s ease !important;
}
.cha-btn:hover { transform: translateY(-2px) scale(1.04) !important; }

.cha-start  { background: rgba(249,115,22,0.08) !important; border-color: rgba(249,115,22,0.22) !important; }
.cha-start .cha-icon,
.cha-start .cha-label { color: var(--accent) !important; }
.cha-start:hover { box-shadow: 0 0 18px rgba(249,115,22,0.18) !important; }

.cha-status { background: rgba(34,197,94,0.07) !important; border-color: rgba(34,197,94,0.18) !important; }
.cha-status .cha-icon,
.cha-status .cha-label { color: #22c55e !important; }

.cha-report { background: rgba(59,130,246,0.08) !important; border-color: rgba(59,130,246,0.20) !important; }
.cha-report .cha-icon,
.cha-report .cha-label { color: #3b82f6 !important; }

.cha-edit { background: rgba(168,85,247,0.08) !important; border-color: rgba(168,85,247,0.20) !important; }
.cha-edit .cha-icon,
.cha-edit .cha-label { color: #a855f7 !important; }

/* ── BUTTONS ───────────────────────────────────────────────── */
.btn.primary {
  background: var(--accent) !important;
  border-color: var(--accent) !important;
  color: #fff !important;
  font-family: var(--font-sans) !important;
  font-weight: 600 !important;
  box-shadow: 0 0 12px var(--accent-glow) !important;
  transition: background 0.15s ease, transform 0.1s ease !important;
}
.btn.primary:hover {
  background: #ea6c0a !important;
  opacity: 1 !important;
  transform: translateY(-1px) !important;
}

.btn:not(.primary):not(.danger):not(.add-tracker) {
  font-family: var(--font-sans) !important;
  border-radius: 6px !important;
  transition: all 0.15s ease !important;
}
.btn:not(.primary):not(.danger):not(.add-tracker):hover {
  background: var(--surface3) !important;
  color: var(--text) !important;
  border-color: var(--accent-dim) !important;
}

.btn.add-tracker {
  border-color: var(--accent-dim) !important;
  color: var(--accent) !important;
  border-radius: 12px !important;
  font-family: var(--font-sans) !important;
  font-weight: 600 !important;
  transition: all 0.15s ease !important;
}
.btn.add-tracker:hover {
  background: var(--surface2) !important;
  border-color: var(--accent) !important;
  box-shadow: 0 0 14px var(--accent-glow) !important;
}

/* ── FORM INPUTS ───────────────────────────────────────────── */
.form-input {
  font-family: var(--font-sans) !important;
  border-radius: 6px !important;
  transition: border-color 0.15s ease, box-shadow 0.15s ease !important;
}
.form-input:focus {
  border-color: var(--accent) !important;
  box-shadow: 0 0 0 3px var(--accent-glow) !important;
}
.form-label {
  font-family: var(--font-sans) !important;
  font-size: 9px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: var(--muted) !important;
}

/* ── MODALS ────────────────────────────────────────────────── */
.modal {
  border-radius: 12px !important;
  box-shadow: 0 24px 70px rgba(9,13,26,0.3) !important;
}
.modal-head {
  background: var(--surface2) !important;
  border-bottom: 1px solid var(--border) !important;
}
.modal-title {
  font-family: var(--font-sans) !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
}
.modal-foot {
  background: var(--surface2) !important;
  border-top: 1px solid var(--border) !important;
}
.modal-close:hover {
  color: var(--text) !important;
  background: var(--surface3) !important;
}

/* ── REPORT TABS ───────────────────────────────────────────── */
.sr-tabs-bar {
  background: var(--surface2) !important;
  border: 1px solid var(--border) !important;
  border-radius: 12px !important;
}
.sr-tab:hover:not(.active) {
  color: var(--text-dim) !important;
  background: var(--accent-bg) !important;
}
.sr-tab.active {
  background: var(--surface) !important;
  color: var(--text) !important;
  border: 1px solid var(--border2) !important;
}
.sr-tab-badge {
  background: rgba(239,68,68,0.12) !important;
  color: #ef4444 !important;
  border-color: rgba(239,68,68,0.28) !important;
}

/* ── REPORT SECTIONS ───────────────────────────────────────── */
.sr-section {
  background: var(--card-bg) !important;
  border: 1px solid var(--border) !important;
  border-radius: 12px !important;
  transition: border-color 0.2s !important;
}
.sr-section:hover { border-color: var(--border2) !important; }

.sr-section-head {
  background: rgba(249,115,22,0.03) !important;
  border-bottom: 1px solid var(--border) !important;
}

.sr-section-num.sn-blue   { background: rgba(59,130,246,0.08) !important; border-color: rgba(59,130,246,0.22) !important; color: #3b82f6 !important; }
.sr-section-num.sn-green  { background: rgba(249,115,22,0.08) !important; border-color: rgba(249,115,22,0.22) !important; color: var(--accent) !important; }
.sr-section-num.sn-amber  { background: rgba(234,179,8,0.08)  !important; border-color: rgba(234,179,8,0.22)  !important; color: #eab308 !important; }
.sr-section-num.sn-red    { background: rgba(239,68,68,0.08)  !important; border-color: rgba(239,68,68,0.22)  !important; color: #ef4444 !important; }

/* ── KPI GRID (reports) ────────────────────────────────────── */
.sr-kpi {
  background: var(--card-bg) !important;
  border: 1px solid var(--border) !important;
  border-radius: 12px !important;
  transition: all 0.2s ease !important;
}
.sr-kpi:hover { transform: translateY(-2px) !important; border-color: var(--border2) !important; }
.sr-kpi.kpi-green::before { background: linear-gradient(90deg, var(--accent), transparent) !important; }

.sr-kpi-val.green { color: var(--accent) !important; }

/* ── COMPLIANCE BAR ────────────────────────────────────────── */
.sr-comp-fill.ok {
  background: var(--accent) !important;
  box-shadow: 0 0 8px rgba(249,115,22,0.35) !important;
}
.sr-comp-pct.ok { color: var(--accent) !important; }

/* ── STATUS PILLS ──────────────────────────────────────────── */
.sr-status.ss-pass {
  background: rgba(249,115,22,0.10) !important;
  color: var(--accent) !important;
  border-color: rgba(249,115,22,0.28) !important;
}
.sr-status.ss-pass::before {
  background: var(--accent) !important;
  box-shadow: 0 0 5px var(--accent) !important;
}

/* ── TABLES ────────────────────────────────────────────────── */
.sr-table th {
  background: linear-gradient(135deg, var(--surface2), var(--surface3)) !important;
  color: var(--muted) !important;
  font-family: var(--font-sans) !important;
  font-size: 9px !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
}
.sr-table tr:hover td { background: var(--accent-bg) !important; }
.sr-row-ok td:first-child { border-left: 3px solid rgba(249,115,22,0.5) !important; }

/* ── VERDICT / BADGE ───────────────────────────────────────── */
.sr-verdict.sv-ok {
  background: var(--accent-bg) !important;
  color: var(--accent) !important;
  border-color: var(--accent-dim) !important;
  box-shadow: 0 0 12px var(--accent-glow) !important;
}

/* ── CLOUD STATUS BAR ──────────────────────────────────────── */
.cloud-bar {
  background: var(--surface2) !important;
  border-bottom: 1px solid var(--border) !important;
  font-family: var(--font-sans) !important;
}
.cloud-dot.synced {
  background: var(--accent) !important;
  box-shadow: 0 0 6px rgba(249,115,22,0.5) !important;
}

/* ── TOAST ─────────────────────────────────────────────────── */
.save-toast.green {
  background: var(--accent-bg) !important;
  border-color: var(--accent-dim) !important;
  color: var(--accent) !important;
}

/* ── FOOTER ────────────────────────────────────────────────── */
.footer {
  border-top: 1px solid var(--border) !important;
}
.footer-link:hover {
  color: var(--text) !important;
  background: var(--surface2) !important;
  border-color: var(--accent-dim) !important;
}

/* ── FINAL REPORT HERO ─────────────────────────────────────── */
.fin-hero {
  border-top: 2px solid var(--accent) !important;
}
.fin-hero-stat {
  background: var(--accent-bg) !important;
  border-color: var(--accent-dim) !important;
}
.fhs-ok { color: var(--accent) !important; }

.fin-card.has-data::before {
  background: linear-gradient(90deg, var(--accent), transparent) !important;
}
.fin-card:hover {
  border-color: rgba(249,115,22,0.32) !important;
  box-shadow: 0 12px 32px rgba(249,115,22,0.08) !important;
}
.fin-badge-ok {
  background: var(--accent-bg) !important;
  color: var(--accent) !important;
  border-color: var(--accent-dim) !important;
}
.fcr-ok { color: var(--accent) !important; }

/* ── INSIGHT BOXES ─────────────────────────────────────────── */
.insight-box { border-left-color: var(--accent) !important; }
.insight-title { color: var(--accent) !important; }

/* ── LOCAL RECORD BUTTONS ──────────────────────────────────── */
.lr-yesno-btn.active-yes {
  background: rgba(249,115,22,0.12) !important;
  color: var(--accent) !important;
  border-color: rgba(249,115,22,0.4) !important;
  box-shadow: 0 0 10px rgba(249,115,22,0.18) !important;
}

/* ── SR BANNER (report hero) ───────────────────────────────── */
.sr-banner-gradient {
  background: linear-gradient(105deg,rgba(247,249,252,0.92) 0%,rgba(247,249,252,0.75) 55%,rgba(247,249,252,0.88) 100%) !important;
}
body.dark-mode .sr-banner-gradient {
  background: linear-gradient(105deg,rgba(9,13,26,0.92) 0%,rgba(9,13,26,0.70) 55%,rgba(9,13,26,0.88) 100%) !important;
}

.sbp-ok {
  background: rgba(249,115,22,0.14) !important;
  color: var(--accent) !important;
  border-color: rgba(249,115,22,0.3) !important;
}

/* ── CONNECT BUTTON ────────────────────────────────────────── */
.connect-btn {
  background: var(--accent-bg) !important;
  color: var(--accent) !important;
  border-color: var(--accent-dim) !important;
}

/* ── HISTORY ROWS ──────────────────────────────────────────── */
.sr-hist-row:hover {
  background: rgba(249,115,22,0.05) !important;
  border-color: var(--border) !important;
}
.sr-hist-row.active {
  background: rgba(249,115,22,0.08) !important;
  border-color: rgba(249,115,22,0.28) !important;
}

/* ── SUBMISSION ROW ────────────────────────────────────────── */
.sr-sub-row-v2:hover { background: var(--accent-bg) !important; }

/* ── SUPABASE LOGIN CARD ───────────────────────────────────── */
#sbLoginOverlay .brand-logo,
#sbLoginOverlay button[onclick="sbDoLogin()"] {
  background: var(--accent) !important;
  box-shadow: 0 0 16px var(--accent-glow) !important;
}

/* ── TRACKER CARD — PULSE DOT ──────────────────────────────── */
@keyframes pulseOrange {
  0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.4); }
  50%       { box-shadow: 0 0 0 6px rgba(249,115,22,0); }
}
.dot-ok { animation: pulseOrange 2.5s infinite !important; }

/* ── LIVE INDICATOR ────────────────────────────────────────── */
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.3; transform: scale(1.3); }
}

/* ── SCROLLBARS ────────────────────────────────────────────── */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--border2) transparent;
}
::-webkit-scrollbar       { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 3px; }

/* ── FOCUS RING ────────────────────────────────────────────── */
*:focus-visible {
  outline: 2px solid var(--accent) !important;
  outline-offset: 2px !important;
}

/* ── THEME TOGGLE BUTTON ───────────────────────────────────── */
#themeToggle:hover {
  background: var(--accent-bg) !important;
  color: var(--accent) !important;
  border-color: var(--accent-dim) !important;
}

/* ── MOBILE ────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .topbar { height: 44px !important; }
  .pill-btn { font-size: 10px !important; padding: 4px 8px !important; }
}
