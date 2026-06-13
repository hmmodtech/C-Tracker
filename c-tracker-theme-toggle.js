/* ============================================================
   C-TRACKER — Theme Toggle Utility
   Include this script at the bottom of <body> in index.html:
   <script src="c-tracker-theme-toggle.js"></script>
   ============================================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'theme';
  const LIGHT       = 'light';
  const DARK        = 'dark';

  /* ── Apply theme to <html> element ── */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    // Also support body class for legacy selectors
    document.body.classList.toggle('light-mode', theme === LIGHT);
    document.body.classList.toggle('dark-mode',  theme === DARK);
    updateToggleIcon(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  /* ── Update the toggle button icon ── */
  function updateToggleIcon(theme) {
    const btn = document.querySelector('#theme-toggle, .theme-toggle, [data-theme-toggle]');
    if (!btn) return;
    // Moon = dark mode active (click to go light), Sun = light mode active (click to go dark)
    btn.innerHTML = theme === DARK
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
    btn.setAttribute('aria-label', theme === DARK ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('title',      theme === DARK ? 'Light mode' : 'Dark mode');
  }

  /* ── Toggle handler ── */
  function toggleTheme() {
    const current = localStorage.getItem(STORAGE_KEY) || DARK;
    applyTheme(current === DARK ? LIGHT : DARK);
  }

  /* ── Wire up the toggle button (supports dynamic DOM) ── */
  function bindToggle() {
    const btn = document.querySelector('#theme-toggle, .theme-toggle, [data-theme-toggle]');
    if (btn && !btn._themeListenerAttached) {
      btn.addEventListener('click', toggleTheme);
      btn._themeListenerAttached = true;
    }
  }

  /* ── On load: restore saved theme, wire up button ── */
  function init() {
    const saved = localStorage.getItem(STORAGE_KEY) || DARK;
    applyTheme(saved);
    bindToggle();

    // Re-bind if the button is injected after load (e.g. rendered by a framework)
    const observer = new MutationObserver(bindToggle);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  /* Run immediately if DOM is ready, else wait */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Expose for manual control if needed */
  window.CTrackerTheme = { apply: applyTheme, toggle: toggleTheme };
})();
