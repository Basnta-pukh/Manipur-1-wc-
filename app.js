/* =========================================
   MANIPUR 1 -- APP LOGIC
   Dark mode · Search · Saved places · Helpers
========================================= */

/* ---------- THEME (Dark / Light) ---------- */

function initTheme() {
  const saved = localStorage.getItem('m1_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('m1_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/* ---------- SAVED PLACES (Favorites) ---------- */

function getSaved() {
  try {
    return JSON.parse(localStorage.getItem('m1_saved') || '[]');
  } catch {
    return [];
  }
}

function isSaved(id) {
  return getSaved().includes(id);
}

function toggleSave(id) {
  const saved = getSaved();
  const idx = saved.indexOf(id);
  if (idx > -1) {
    saved.splice(idx, 1);
  } else {
    saved.push(id);
  }
  localStorage.setItem('m1_saved', JSON.stringify(saved));

  // Update all heart buttons on the page for this id
  document.querySelectorAll('[data-save-btn="' + id + '"]').forEach(function(btn) {
    btn.textContent = isSaved(id) ? '💚 Saved' : '🤍 Save';
  });

  return isSaved(id);
}

/* ---------- SEARCH ---------- */

function performSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  const query = input.value.trim().toLowerCase();
  if (!query) return;

  // Redirect to tourism page with search query
  window.location.href = 'tourism.html?q=' + encodeURIComponent(query);
}

/* ---------- HELPERS ---------- */

function getDestination(id) {
  return destinations.find(function(d) { return d.id === id; });
}

function openMaps(query) {
  if (!query) return;
  const url = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
  window.open(url, '_blank');
}

function searchGoogle(query) {
  if (!query) return;
  const url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
  window.open(url, '_blank');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ---------- CARD RENDERERS ---------- */

function renderDestinationCard(d) {
  return `
    <a href="destination.html?id=${d.id}" class="mini-card">
      <div class="mini-card-img" style="background:${d.gradient}">
        ${d.image
          ? `<img src="${d.image}" alt="${escapeHtml(d.name)}" onerror="this.remove()">`
          : `<span>${d.icon}</span>`
        }
      </div>
      <div class="mini-card-body">
        <h4>${escapeHtml(d.name)}</h4>
        <p>${escapeHtml(d.short)}</p>
      </div>
    </a>
  `;
}

function renderFestivalCard(f) {
  return `
    <div class="mini-card">
      <div class="mini-card-img" style="background:${f.gradient}">
        <span>${f.icon}</span>
      </div>
      <div class="mini-card-body">
        <h4>${escapeHtml(f.name)}</h4>
        <p>${escapeHtml(f.desc)}</p>
      </div>
    </div>
  `;
}

/* ---------- SEARCH INPUT: Enter key ---------- */

document.addEventListener('DOMContentLoaded', function() {
  initTheme();

  const input = document.getElementById('searchInput');
  if (input) {
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') performSearch();
    });
  }
});