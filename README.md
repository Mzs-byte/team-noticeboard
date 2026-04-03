# 📋 Team Noticeboard

A looping digital noticeboard for your team. Rotating slides + a live scrolling ticker. Hosted free on GitHub Pages — update everything by editing one file.

---

## 🚀 Setup (10 minutes)

### 1 — Create the GitHub repo

1. Go to [github.com](https://github.com) → **New repository**
2. Name it `team-noticeboard`
3. Set it to **Public**
4. Upload all these files: `index.html`, `data.json`, `manifest.json`, `sw.js`

### 2 — Enable GitHub Pages

1. Go to repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**

Your board will be live at:
👉 `https://mzs-byte.github.io/team-noticeboard/`

### 3 — Install on your tablet

1. Open **Chrome** on your tablet
2. Go to your GitHub Pages URL
3. Tap ⋮ menu → **Add to Home screen**
4. Done! Opens full screen like a native app 🎉

---

## ✏️ How to Update Content

**Everything is controlled by `data.json`** — the only file you need to edit.

1. Open `data.json` on GitHub (click the file → pencil icon to edit)
2. Make your changes (see guide below)
3. Click **Commit changes**
4. The board refreshes within 5 minutes automatically

---

## 📝 data.json Guide

### Company name & settings
```json
"company_name": "Your Team Name",
"weather_city": "London",
"slide_duration": 9
```
- `weather_city` — any city name, shows live temperature
- `slide_duration` — seconds per slide (default: 9)

---

### Announcements
```json
"announcements": [
  {
    "title": "Your announcement headline",
    "body": "More detail goes here as a sentence or two.",
    "priority": "normal"
  }
]
```
- `priority` options: `"normal"` · `"important"` · `"urgent"`
- Add as many announcements as you like — each gets its own slide

---

### KPIs / Key Numbers
```json
"kpis": [
  { "label": "Sales This Month", "value": "£24k", "change": "+12%", "trend": "up" }
]
```
- Maximum 4 KPIs displayed
- `trend` options: `"up"` · `"down"` · `"neutral"`

---

### Weekly Rota
```json
"rota": {
  "week": "Week of 7 Apr 2025",
  "entries": [
    { "name": "Alice", "monday": "Office", "tuesday": "Remote", ... }
  ]
}
```
- Day values: `"Office"` · `"Remote"` · `"Leave"` · `"Off"` (or anything else)
- Add/remove rows for each team member

---

### Team Tasks
```json
"tasks": [
  { "text": "Submit Q1 expense reports", "assignee": "All Staff", "priority": "high" }
]
```
- `priority` options: `"high"` · `"medium"` · `"low"`
- Displayed 2-column grid, up to 6 tasks recommended

---

### Ticker (scrolling bottom bar)
```json
"ticker": [
  "Your scrolling message here",
  "Another update goes here"
]
```
- Add as many lines as you like — they scroll continuously

---

## 📱 What the board shows

| Slide | Content |
|---|---|
| 📢 Announcements | One slide per announcement, colour-coded by priority |
| 📊 Key Metrics | 4 KPIs in a grid with trend arrows |
| 🗓️ Weekly Rota | Full week schedule for each team member |
| ✅ Team Tasks | Task cards with assignee and priority |
| ↔️ Ticker | Always-on scrolling updates at the bottom |
| 🕐 Clock | Live time and date always visible top-right |
| 🌤️ Weather | Live temperature for your city top-right |

---

## ❓ Troubleshooting

**Board not updating after editing data.json**
→ Wait 2–3 minutes for GitHub Pages CDN to refresh, then hard-reload (Ctrl+Shift+R)

**Weather not showing**
→ Check `weather_city` spelling in data.json. Must be a real city name.

**Slides moving too fast/slow**
→ Change `slide_duration` in data.json (seconds)
