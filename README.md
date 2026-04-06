# 📋 Team Noticeboard v6
### A smart, looping digital noticeboard for front office teams — hosted free on GitHub Pages

---

## 📱 What it looks like

A full-screen rotating display built for a tablet or wall screen. Slides auto-advance every 10 seconds with smooth transitions. A live scrolling ticker runs along the bottom at all times. The colour theme shifts automatically throughout the day — cool blue in the morning, warm amber in the afternoon, deep purple in the evening.

---

## 🚀 First-Time Setup (10 minutes)

### Step 1 — Create your GitHub repo

1. Go to [github.com](https://github.com) and sign in
2. Click **+** → **New repository**
3. Name it `team-noticeboard`
4. Set it to **Public**
5. Click **Create repository**
6. Upload all 4 files: `index.html`, `data.json`, `manifest.json`, `sw.js`

### Step 2 — Enable GitHub Pages

1. In your repo, click **Settings** → **Pages** (left sidebar)
2. Under **Source**, choose **Deploy from a branch**
3. Set branch to **main**, folder to **/ (root)**
4. Click **Save**
5. Wait 2 minutes — your board will be live at:

👉 `https://mzs-byte.github.io/team-noticeboard/`

### Step 3 — Install on your tablet

1. Open **Chrome** on your Android tablet
2. Go to your GitHub Pages URL
3. Tap the **⋮ menu** (top right) → **Add to Home screen**
4. Tap **Add**

The board opens full screen like a native app — no browser bars, no distractions.

### Step 4 — One-time cache clear (important!)

After installing, do this once to make sure updates always come through:

1. In Chrome → **Settings** → **Site settings** → **All sites**
2. Find your GitHub Pages URL → tap **Clear & reset**
3. Reopen the app

From this point on, updates go live within 2–5 minutes of pushing to GitHub.

---

## ✏️ How to Update Content

There are two ways to update content:

### Option A — Admin Panel (easiest)
1. On the board, **hold the clock for 3 seconds**
2. Enter your 4-digit PIN (default: `1234`)
3. Edit anything in the panel
4. Tap **⬇ Download data.json**
5. Upload the downloaded file to GitHub to replace the old one

### Option B — Edit data.json directly on GitHub
1. Go to your repo on GitHub
2. Click `data.json` → pencil icon (Edit)
3. Make your changes
4. Click **Commit changes**
5. Board updates within 2–5 minutes automatically

---

## 🖥️ All Slides — What Shows & When

| Slide | Appears when |
|---|---|
| 📅 On This Day in History | Every day — fetched live from Wikipedia |
| 🎂 Birthday / Anniversary | On the matching day from `birthdays` list |
| 🌟 New Starter Spotlight | When `new_starter.enabled` is `true` |
| 🌍 International Day | Automatically on UN international days |
| 💭 Quote of the Day | Every day — cycles through 50 curated quotes |
| 🌐 Word of the Day | Every day — cycles through 20 world languages |
| 📊 Fun Stat of the Day | Every day — live from facts API |
| 🏆 Weekly Win | When `weekly_win.headline` is set |
| 📢 Announcements | One slide per item in `announcements` list |
| 🗓️ Week at a Glance | When `week_at_a_glance` is set |
| 📊 Key Metrics | When `kpis` list has entries |
| 🎯 Target Thermometer | When `target` is set |
| 📞 Important Numbers | When `important_numbers` list has entries |
| 🧴 Supplies Status | When `supplies` list has entries |
| 🎓 Training Reminders | When `training_reminders` list has entries |
| ⏳ Countdowns | When `countdowns` list has entries |
| 🏅 Leaderboard | When `leaderboard` list has entries |
| 🚦 Team Status | When `team` list has entries |
| ✅ Team Tasks | When `tasks` list has entries |
| 😂 Meme / GIF | When `meme.url` is set |
| 🖼️ Image Slides | One slide per item in `image_slides` list |

---

## 📝 data.json — Full Reference

### ⚙️ General Settings

```json
"company_name": "Your Team Name",
"weather_city": "London",
"slide_duration": 10,
"news_rss": "https://feeds.bbci.co.uk/news/business/rss.xml"
```

| Field | Description |
|---|---|
| `company_name` | Shown in the top-left corner |
| `weather_city` | Any city — shows live temperature |
| `slide_duration` | Seconds per slide (default: 10) |
| `news_rss` | Any RSS feed — headlines appear in the ticker automatically |

---

### 🌟 New Starter Spotlight

```json
"new_starter": {
  "enabled": true,
  "name": "Jamie Collins",
  "role": "Front Office Coordinator",
  "start_date": "Monday 7 April 2025",
  "fun_fact": "Jamie has visited 32 countries and speaks three languages!",
  "welcome_msg": "Please give Jamie a warm welcome to the team!"
}
```

Set `"enabled": false` to hide the slide when there is no new starter. Change back to `true` when the next person joins.

---

### 🏆 Weekly Win

```json
"weekly_win": {
  "headline": "Landed the Henderson Account!",
  "detail": "After three months of hard work we signed one of our biggest clients.",
  "who": "Sarah and the Sales Team"
}
```

Remove `weekly_win` entirely or leave `headline` blank to hide the slide.

---

### 📢 Announcements

```json
"announcements": [
  {
    "title": "All-Hands Meeting This Friday",
    "body": "Please join the call at 10am sharp. Attendance is mandatory.",
    "priority": "important"
  }
]
```

| Priority | Colour | Use for |
|---|---|---|
| `"normal"` | Blue | General info |
| `"important"` | Amber | Things people must act on |
| `"urgent"` | Red | Time-critical or safety notices |

Add as many announcements as you like — each gets its own slide.

---

### 📊 KPIs

```json
"kpis": [
  { "label": "Sales This Month", "value": "£24k", "change": "+12%", "trend": "up" }
]
```

- Maximum 4 KPIs displayed at once
- `trend` options: `"up"` · `"down"` · `"neutral"`

---

### 🎯 Target Thermometer

```json
"target": {
  "label": "Monthly Sales Target",
  "current": 24000,
  "target": 35000,
  "unit": "GBP",
  "message": "Keep pushing — we're on track!"
}
```

The thermometer fills automatically. Colour changes from red → amber → green as you approach the target.

---

### 📞 Important Numbers

```json
"important_numbers": [
  { "emoji": "💻", "label": "IT Helpdesk",      "number": "0800 123 456" },
  { "emoji": "🔥", "label": "Fire Marshal",      "number": "0800 345 678" },
  { "emoji": "🔒", "label": "Security",          "number": "0800 567 890" }
]
```

Shows as a 3-column grid. Add up to 6 for best layout.

---

### 🧴 Supplies Status

```json
"supplies": [
  { "emoji": "☕", "item": "Coffee Pods",     "status": "critical" },
  { "emoji": "📄", "item": "Printer Paper",   "status": "low"      },
  { "emoji": "🖨️", "item": "Toner Cartridge", "status": "ok"       }
]
```

| Status | Colour | Meaning |
|---|---|---|
| `"ok"` | Green | Well stocked |
| `"low"` | Amber | Running low — order soon |
| `"critical"` | Red | Almost out — order now |

Items flagged as low or critical are shown first automatically.

---

### 🎓 Training Reminders

```json
"training_reminders": [
  {
    "title": "Fire Safety Refresher",
    "due": "2025-04-18",
    "assignee": "All Staff"
  }
]
```

- Date format: `"YYYY-MM-DD"`
- Sorted automatically by nearest deadline
- Colour coded: green (14+ days) → amber (7–14 days) → red (under 7 days)

---

### 🗓️ Week at a Glance

```json
"week_at_a_glance": {
  "week": "Week of 7 Apr 2025",
  "days": [
    { "day": "Mon", "events": ["Team standup 9am", "Client visit 2pm"] },
    { "day": "Tue", "events": ["Finance review 10am"] },
    { "day": "Wed", "events": ["All-hands 10am", "Fire drill 3pm"] },
    { "day": "Thu", "events": ["New starter: Jamie"] },
    { "day": "Fri", "events": ["Early finish 4pm", "Team drinks 5pm"] }
  ]
}
```

Today's column is automatically highlighted in blue.

---

### ⏳ Countdown Timers

```json
"countdowns": [
  { "label": "All-Hands Meeting", "date": "2025-04-11" },
  { "label": "End of Quarter",    "date": "2025-06-30" }
]
```

- Date format: `"YYYY-MM-DD"`
- Maximum 4 displayed at once
- Shows "Today!" when the date arrives

---

### 🎂 Birthdays & Work Anniversaries

```json
"birthdays": [
  { "name": "Alice Johnson", "date": "04-06", "type": "birthday"                },
  { "name": "Bob Smith",     "date": "05-01", "type": "anniversary", "years": 3 }
]
```

- Date format: `"MM-DD"` (no year needed)
- `type`: `"birthday"` or `"anniversary"`
- `years` (optional): shows years of service for anniversaries
- A confetti slide appears automatically on the day
- A famous person born on that date (birthday) or a historical event (anniversary) is fetched from Wikipedia automatically

---

### 🏅 Leaderboard

```json
"leaderboard": [
  { "name": "Alice Johnson", "title": "Sales Lead", "points": 340, "change": 20  },
  { "name": "Bob Smith",     "title": "Account Mgr","points": 290, "change": -10 }
]
```

- Sorted automatically by points — highest first
- `change` is points gained or lost since last update — shows as ▲ +20 or ▼ -10
- Top 3 get gold, silver, bronze medals automatically
- Tap the **🏅 Leaderboard** button in the top bar to jump straight to this slide at any time

---

### 🚦 Team Status Board

```json
"team": [
  { "name": "Alice Johnson", "default_status": "in"      },
  { "name": "Bob Smith",     "default_status": "meeting" }
]
```

Available statuses for front office:

| Status | Label | Use for |
|---|---|---|
| `"in"` | ✅ On Desk | At the front desk |
| `"meeting"` | 📞 In Meeting | In a meeting or on a call |
| `"away"` | ☕ On Break | On lunch or a short break |
| `"out"` | 🚪 Out of Office | Out of the building |
| `"off"` | 🌙 Off Today | Not working today |

Team members tap their card on the board to update their status live. Status is saved on the device.

---

### ✅ Team Tasks

```json
"tasks": [
  { "text": "Submit Q1 expense reports", "assignee": "All Staff", "priority": "high"   },
  { "text": "Update onboarding docs",    "assignee": "Alice",     "priority": "medium" }
]
```

`priority` options: `"high"` · `"medium"` · `"low"`

---

### 😂 Meme / GIF of the Day

```json
"meme": {
  "url": "https://media.giphy.com/media/xyz/giphy.gif",
  "caption": "Us on a Friday afternoon ☕"
}
```

Paste any direct image URL or Giphy link. Caption is optional. Remove `meme` entirely to hide the slide.

---

### 🖼️ Image Slides

```json
"image_slides": [
  {
    "title": "Team Photo",
    "url": "https://your-image-url.com/photo.jpg",
    "caption": "Our amazing team 💪",
    "fullscreen": false
  }
]
```

| `fullscreen` | Style |
|---|---|
| `false` | Image sits inside a card with title bar |
| `true` | Image fills the entire slide edge-to-edge |

---

### ↔️ Ticker Messages

```json
"ticker": [
  "All-Hands meeting this Friday at 10am",
  "Coffee machine on 3rd floor is back in service"
]
```

Messages scroll continuously at the bottom. If `news_rss` is set, live news headlines are automatically mixed in.

---

## 🔐 Admin Panel

### How to open it
**Hold the clock in the top-right corner for 3 seconds** → PIN screen appears → enter your 4-digit PIN

### Default PIN
`1234` — change it inside the panel under **Change PIN**

### What you can edit in the panel
Everything — company name, all slide content, new starter toggle, supplies status, leaderboard points, image slides, ticker messages, and more.

### Saving changes
Hit **⬇ Download data.json** → the updated file downloads to your device → upload it to GitHub to replace the old one → board updates within 2–5 minutes.

---

## 🎨 Design Customisation

All colours and fonts live in the `:root` block at the top of `index.html`. Open the file in any text editor and change these values:

```css
:root {
  --bg:     #070d1a;   /* main background */
  --blue:   #38bdf8;   /* primary accent colour */
  --amber:  #fbbf24;   /* warnings and weather */
  --green:  #34d399;   /* positive / on track */
  --red:    #f87171;   /* urgent / alerts */
  --purple: #a78bfa;   /* secondary accent */
  --text:   #f0f4ff;   /* main text colour */
}
```

Use [coolors.co](https://coolors.co) or [htmlcolorcodes.com](https://htmlcolorcodes.com) to pick colours.

### Time-of-day themes (automatic)
| Time | Theme |
|---|---|
| 6am – 12pm | Cool blue morning |
| 12pm – 6pm | Warm amber afternoon |
| 6pm – 10pm | Rich purple evening |
| 10pm – 6am | Deep dark default |

---

## ❓ Troubleshooting

**Board not updating after I push to GitHub**
→ Wait 2–3 minutes for GitHub Pages CDN to refresh. Then in Chrome on the tablet: Settings → Site settings → find your URL → Clear & reset → reopen the app.

**Weather not showing**
→ Check `weather_city` spelling in data.json. Must be a real recognisable city name.

**Meme / image not loading**
→ The URL must be a direct link to the image file (ending in .jpg, .png, .gif etc). Links to web pages won't work.

**Wikipedia facts not loading**
→ This needs an internet connection. If offline, that slide will show a placeholder message.

**Fun stat not loading**
→ Falls back to a built-in bank of 20 facts automatically if the API is unavailable.

**Admin panel PIN forgotten**
→ Open `index.html`, search for `nb_admin_pin` — or just clear your browser storage for the site in Chrome settings, which resets the PIN to `1234`.

**Slides moving too fast or too slow**
→ Change `slide_duration` in data.json (number of seconds per slide).

---

## 📁 File Reference

| File | Purpose |
|---|---|
| `index.html` | The entire app — all slides, logic, admin panel, styling |
| `data.json` | All your content — edit this to update the board |
| `manifest.json` | Makes the app installable on Android |
| `sw.js` | Service worker — ensures fast loading and updates |

---

*Built with ❤️ for the front office team. Hosted free on GitHub Pages.*
