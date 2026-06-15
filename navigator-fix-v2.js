// ══════════════════════════════════════════════════════════════════
// C-TRACKER — COMPLETE NAVIGATOR FIX v2
// يصلح التنقل في جميع trackers:
// ✓ First Aid
// ✓ Fire Extinguisher
// ✓ Smoke Detector
// ✓ Office Security
// ✓ Warehouse (أي tracker جديد يُضاف مستقبلاً)
//
// طريقة التثبيت:
// أضف قبل </body> مباشرة:
// <script src="navigator-fix-v2.js"></script>
// ══════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── قائمة trackers التي تستخدم First Aid report الخاص ──────────
  // أضف أي اسم هنا إذا أردت تخصيص تقريره
  function isFirstAidTracker(name) {
    var n = name.toLowerCase();
    return n.includes('first aid') || n.includes('firstaid') || n.includes('first-aid');
  }

  // ── اختيار دالة البناء الصحيحة لكل tracker ────────────────────
  function buildReport(t, rows, idx) {
    // 1. Local trackers (Garmin, SMS, Map, إلخ)
    if (typeof isLocalTracker === 'function' && isLocalTracker(t.name)) {
      return typeof buildLocalTrackerReport === 'function'
        ? buildLocalTrackerReport(t, rows, idx)
        : '<p>No report available.</p>';
    }

    // 2. First Aid — تقرير مخصص
    if (isFirstAidTracker(t.name)) {
      return typeof buildFirstAidReport === 'function'
        ? buildFirstAidReport(t, rows, idx)
        : buildGenericVFR(t, rows, idx);
    }

    // 3. كل باقي Google Forms trackers (Fire Ext, Smoke, Office, Warehouse...)
    return buildGenericVFR(t, rows, idx);
  }

  // ── Visual Form Report لجميع sheet-based trackers ──────────────
  function buildGenericVFR(t, rows, idx) {
    if (typeof vfrBuild === 'function') return vfrBuild(t, rows, idx);
    if (typeof buildVisualFormReport === 'function') return buildVisualFormReport(t, rows, idx);
    if (typeof buildStructuredReport === 'function') return buildStructuredReport(t, rows, idx);
    return '<p style="padding:20px;color:var(--muted)">Report unavailable.</p>';
  }

  // ── تحريك score bars بعد render ────────────────────────────────
  function animateScoreBars() {
    document.querySelectorAll('[data-pct]').forEach(function (el) {
      el.style.width = (el.dataset.pct || 0) + '%';
    });
  }

  // ══════════════════════════════════════════════════════════════
  // CORE OVERRIDES
  // ══════════════════════════════════════════════════════════════

  // ── openReport ────────────────────────────────────────────────
  window.openReport = function (id) {
    if (typeof destroyCharts === 'function') destroyCharts();

    var t = trackers.find(function (x) { return x.id === id; });
    if (!t) return;

    // جلب البيانات
    var rows;
    if (typeof isLocalTracker === 'function' && isLocalTracker(t.name)) {
      rows = typeof getLocalRows === 'function' ? getLocalRows(id) : [];
    } else {
      rows = sheetData[id];
    }

    // تحديث header
    var iconEl  = document.getElementById('reportIcon');
    var titleEl = document.getElementById('reportTitle');
    if (iconEl)  iconEl.textContent  = t.icon;
    if (titleEl) titleEl.textContent = t.name + ' — Inspection Report';

    // لا توجد بيانات
    if (!rows || !rows.length) {
      var bodyEl = document.getElementById('reportBody');
      if (bodyEl && typeof noDataHtml === 'function') {
        bodyEl.innerHTML = noDataHtml(t);
      }
      var ov = document.getElementById('reportOverlay');
      if (ov) ov.classList.add('open');
      return;
    }

    // تهيئة _rpt
    window._rpt = {
      tracker:  t,
      allRows:  rows,
      idx:      rows.length - 1,
      histOpen: false
    };

    // بناء وعرض التقرير
    var body = document.getElementById('reportBody');
    if (body) body.innerHTML = buildReport(t, rows, rows.length - 1);

    var overlay = document.getElementById('reportOverlay');
    if (overlay) overlay.classList.add('open');

    setTimeout(animateScoreBars, 160);
  };

  // ── _rebuildBody — يُستدعى من prev/next/goTo ─────────────────
  window._rebuildBody = function () {
    var rpt = window._rpt;
    if (!rpt || !rpt.tracker || !rpt.allRows) return;

    var body = document.getElementById('reportBody');
    if (!body) return;

    body.innerHTML = buildReport(rpt.tracker, rpt.allRows, rpt.idx);

    setTimeout(function () {
      animateScoreBars();

      // تحديث dropdown
      var sel = document.getElementById('srSubSel');
      if (sel) sel.value = rpt.idx;

      // إعادة فتح history drawer
      if (rpt.histOpen) {
        var drawer = document.getElementById('srHistDrawer');
        if (drawer) drawer.classList.add('open');
      }
    }, 80);
  };

  // ══════════════════════════════════════════════════════════════
  // NAVIGATION FUNCTIONS
  // ══════════════════════════════════════════════════════════════

  window.srGoTo = function (idx) {
    if (!window._rpt) return;
    window._rpt.idx = parseInt(idx, 10);
    window._rebuildBody();
  };

  window.srPrev = function () {
    if (!window._rpt) return;
    if (window._rpt.idx > 0) {
      window._rpt.idx--;
      window._rebuildBody();
    }
  };

  window.srNext = function () {
    if (!window._rpt) return;
    if (window._rpt.idx < window._rpt.allRows.length - 1) {
      window._rpt.idx++;
      window._rebuildBody();
    }
  };

  window.srToggleHist = function () {
    if (!window._rpt) return;
    window._rpt.histOpen = !window._rpt.histOpen;
    var drawer = document.getElementById('srHistDrawer');
    if (drawer) drawer.classList.toggle('open', window._rpt.histOpen);
  };

  window.srPickHist = function (idx) {
    if (!window._rpt) return;
    window._rpt.idx = parseInt(idx, 10);
    window._rpt.histOpen = false;
    var drawer = document.getElementById('srHistDrawer');
    if (drawer) drawer.classList.remove('open');
    window._rebuildBody();
  };

  // ══════════════════════════════════════════════════════════════
  // FIX buildFirstAidReport NAVIGATOR TOO
  // الـ First Aid report يبني نفسه مرة أخرى عبر _rebuildBody
  // لذلك التنقل يعمل تلقائياً بعد override _rebuildBody أعلاه
  // لكن نحتاج نضمن أن srSubSel.value يتزامن مع idx الصحيح
  // ══════════════════════════════════════════════════════════════

  // patch srSwitchTab لو احتجنا (tabs داخل التقرير)
  window.srSwitchTab = function (btn, panelId) {
    var bar = btn.closest('.sr-tabs-bar');
    if (bar) bar.querySelectorAll('.sr-tab').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');

    var modal = btn.closest('.modal-body');
    if (modal) modal.querySelectorAll('.sr-tab-panel').forEach(function (p) { p.classList.remove('active'); });

    var panel = document.getElementById(panelId);
    if (panel) panel.classList.add('active');

    // رسم charts لو tab الـ charts فُتح
    if (panelId === 'sr-tab-charts' && typeof srDrawCharts === 'function') {
      srDrawCharts();
    }

    setTimeout(function () {
      if (typeof charts === 'object') {
        Object.values(charts).forEach(function (c) { try { c.resize(); } catch (e) {} });
      }
    }, 50);
  };

  console.log('✓ C-TRACKER navigator-fix-v2 loaded');
  console.log('  → First Aid: custom report + working navigator');
  console.log('  → Fire Extinguisher, Smoke, Office, Warehouse: VFR + working navigator');

})();
