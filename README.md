# 📋 Team Noticeboard v2

A looping digital noticeboard for your team. Rotating slides + live scrolling ticker. Hosted free on GitHub Pages — update everything by editing one JSON file.

---

## 🚀 Setup (10 minutes)

### 1 — Upload to GitHub
Create a repo called `team-noticeboard`, upload all 5 files, enable **GitHub Pages** (Settings → Pages → main branch).

Your board will be live at:
👉 `https://mzs-byte.github.io/team-noticeboard/`

### 2 — Install on tablet
Open Chrome → go to URL → tap ⋮ → **Add to Home screen**

---

## ✏️ Updating Content

Edit `data.json` directly on GitHub (pencil icon) → Commit → board refreshes within 5 mins.

---

## 📝 data.json Full Guide

### Basic settings
```json
"company_name": "Your Team Name",
"weather_city": "London",
"slide_duration": 10,
"news_rss": "https://feeds.bbci.co.uk/news/business/rss.xml"
```
- `slide_duration` — seconds per slide
- `news_rss` — any RSS feed URL, headlines scroll in the ticker automatically

---

### 🏆 Weekly Win
```json
"weekly_win": {
  "headline": "Landed the Henderson Account!",
  "detail": "More detail about the win here...",
  "who": "Sarah & the Sales Team"
}
```
Remove this section entirely to hide the slide.

---

### 📢 Announcements
```json
"announcements": [
  { "title": "Headline", "body": "Detail text.", "priority": "normal" }
]
```
`priority`: `"normal"` · `"important"` · `"urgent"`

---

### 📊 KPIs
```json
"kpis": [
  { "label": "Sales", "value": "£24k", "change": "+12%", "trend": "up" }
]
```
Max 4 KPIs. `trend`: `"up"` · `"down"` · `"neutral"`

---

### 🎯 Target Thermometer
```json
"target": {
  "label": "Monthly Sales Target",
  "current": 24000,
  "target": 35000,
  "unit": "GBP",
  "message": "Keep pushing!"
}
```
The thermometer fills up automatically based on current vs target.

---

### ⏳ Countdown Timers
```json
"countdowns": [
  { "label": "All-Hands Meeting", "date": "2025-04-11" }
]
```
- Date format: `"YYYY-MM-DD"`
- Max 4 countdowns shown
- Shows "Today!" when the date arrives

---

### 🎂 Birthdays & Anniversaries
```json
"birthdays": [
  { "name": "Alice Johnson", "date": "04-04", "type": "birthday" },
  { "name": "Bob Smith",     "date": "05-01", "type": "anniversary", "years": 3 }
]
```
- Date format: `"MM-DD"` (month-day, no year)
- `type`: `"birthday"` or `"anniversary"`
- `years` (optional): shows years of service for anniversaries
- A special celebratory slide with confetti appears automatically on their day!

---

### 🚦 Team Status Board
```json
"team": [
  { "name": "Alice Johnson", "default_status": "in" }
]
```
`default_status` options: `"in"` · `"remote"` · `"away"` · `"meeting"` · `"off"`

Team members can tap their card on the board to update their status live. Status is saved on the device.

---

### 🗓️ Weekly Rota
```json
"rota": {
  "week": "Week of 7 Apr 2025",
  "entries": [
    { "name": "Alice", "monday": "Office", "tuesday": "Remote", ... }
  ]
}
```
Day values: `"Office"` · `"Remote"` · `"Leave"` · `"Off"`

---

### ✅ Team Tasks
```json
"tasks": [
  { "text": "Submit reports", "assignee": "All Staff", "priority": "high" }
]
```
`priority`: `"high"` · `"medium"` · `"low"`

---

### ↔️ Ticker
```json
"ticker": [
  "Your scrolling message here"
]
```
If `news_rss` is set, live news headlines are automatically mixed in.

---

## 📱 All slides at a glance

| Slide | Appears when |
|---|---|
| 🎂 Birthday/Anniversary | Automatically on the day |
| 🏆 Weekly Win | `weekly_win` set in data.json |
| 📢 Announcements | One slide per announcement |
| 📊 KPIs | `kpis` array has entries |
| 🎯 Thermometer | `target` set in data.json |
| 🗓️ Rota | `rota` set in data.json |
| ⏳ Countdowns | `countdowns` array has entries |
| 🚦 Team Status | `team` array has entries |
| ✅ Tasks | `tasks` array has entries |
