# Team Noticeboard

A self-updating digital noticeboard for a TV screen. It loops through a clean set
of slides and runs in any web browser. The colour theme and background
atmosphere shift automatically to match the current weather.

---

## The files

| File | What it is | Edit it? |
|------|-----------|----------|
| `index.html` | The whole app — code, styling, animations. | Rarely. |
| `data.json` | All your content (names, scores, announcements…). | **Yes — most often.** |
| `sw.js` | Keeps the board fast and fresh. | No. |
| `manifest.json` | Lets it install as an app window. | No. |
| `README.md` | This file. | No. |

You can edit everything through the built-in **Admin Panel** — no need to touch
`data.json` by hand unless you prefer to.

---

## The slides

1. **Announcements** — notices, colour-coded by priority (normal / important / urgent).
2. **On This Day in History** — a real historical event, fetched automatically.
3. **International Day** — always shows the *next upcoming* one ("Coming up in X days").
4. **Upcoming Bank Holidays** — UK holidays with a live countdown, fetched automatically.
5. **Weather** — live 7-day forecast for your city.
6. **This Week at a Glance** — full week, Monday to Sunday.
7. **KPIs** — up to 12 metrics with ▲ / ▼ / ▬ trend arrows; the grid auto-sizes.
8. **Target Thermometer** — animated progress toward a monthly goal (set up for Hilton Honors Enrollments).
9. **Leaderboard** — your team ranked by points, with animated bars.
10. **Employee of the Month** — name, role, blurb and a photo.
11. **Days Since** — automatic "X days since…" counters (sick call, accident-free, etc.)
    that climb on their own. Several counters per slide; each glows and celebrates
    at milestones (7, 30, 100, 365 days). Add/remove counters and reset any one to
    "today" with one tap in the admin panel.
12–15. **Reviews** — four separate slides, one per source: TripAdvisor Outlet 1,
   TripAdvisor Outlet 2, Stay Experience, and Mixed (Google / Booking.com / other).
   Each keeps the latest 3 reviews and shows one at a time, rotating to the next
   each loop, with the source's average star rating shown.

### Adding reviews
Reviews are added manually (there's no reliable free way to auto-pull TripAdvisor
into a static site). Tap **⭐ Add Review** in the top bar, pick the source, type the
name, tap the stars, paste the text — it saves on the TV PC and appears instantly.
Only the latest 3 per source are kept; the oldest drops off automatically. Set the
display name for each source in the admin panel under **Review Source Names**.

### Weather-reactive theme
The whole board re-tints itself to the current conditions — warm gold for clear
skies, cool blues for rain, bright whites for snow, violet for storms, muted greys
for cloud and fog. It also adds subtle moving atmosphere: drifting clouds, falling
rain, snow, a glowing sun, or lightning flashes during a storm. There's a gentle
warm shift at dawn and dusk too. It all updates on its own.

---

## Getting it online (GitHub Pages)

1. Make a new GitHub repository named **`team-noticeboard`**.
2. Upload `index.html`, `data.json`, `sw.js` and `manifest.json`.
3. **Settings → Pages → Deploy from a branch → main / root → Save.**
4. Your board is live at `https://YOUR-USERNAME.github.io/team-noticeboard/`.

Edit `data.json` (or use the admin panel) and re-upload — the board refreshes
itself within a few minutes.

> If you name the repo something other than `team-noticeboard`, change
> `/team-noticeboard/` in `sw.js` and `manifest.json` to match.

---

## Showing it on the TV

1. On the PC connected to the TV, open Chrome or Edge.
2. Go to your board's web address.
3. Press **F11** for fullscreen.

**Auto-start when the PC turns on** — make a Chrome shortcut with this target:

```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk --start-fullscreen https://YOUR-USERNAME.github.io/team-noticeboard/
```

…and drop it in the Windows Startup folder:
`C:\Users\YOUR-NAME\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`

Set the PC's power settings so the screen never sleeps.

---

## The Admin Panel

1. **Hold the clock** (top-right) for **2.5 seconds**.
2. Enter the PIN — default **`1234`** (change it at the top of the panel).
3. Edit anything, then click **Download data.json** at the bottom.
4. Upload that file to GitHub to make it permanent.

Buttons in the header: **⇅ Reorder** (drag slides into any order) and **Close**.

### Editing the things you'll change most

- **Announcements** — title, body, priority.
- **KPIs** — up to 12; label, value, change note, trend (up/down/neutral).
- **Target Thermometer** — label, current count, monthly target, unit, message.
  Reset **Current** to 0 at the start of each month.
- **Leaderboard** — name, points, change. Sorted automatically; top 3 get medals.
- **Employee of the Month** — name, role, month, blurb, and a **photo URL**.
  The photo must be a web link (upload the image into your GitHub repo and use
  its URL, or link one already online). No photo? Initials show instead.
- **Week at a Glance** — one box per day, Monday to Sunday; type one event per line.
- **Days Since** — add counters with an icon, label and start date. Each counts up
  automatically. Use the **↺ Today** button on a row to reset it to zero when the
  streak breaks; **+ Add Counter** / **✕** to add or remove them anytime.
- **Weather City** (General Settings) — drives both the forecast and the theme.
- **Ticker** — the scrolling messages along the bottom.

The 4 automatic slides (On This Day, International Day, Bank Holidays, Weather)
have no content to edit — just their on/off toggles.

---

## The app icons (optional)

`manifest.json` points to `icon-192.png` and `icon-512.png`, which are **not
included**. They're only used if you "install" the board as a desktop app — the
board works perfectly without them. To add them, drop two square PNGs (192×192
and 512×512) into the repo with those names.

---

## Quick troubleshooting

| Problem | Fix |
|--------|-----|
| Changes not showing | Upload the new `data.json`, wait 1–2 min, refresh (Ctrl+Shift+R). |
| Weather / theme not updating | Check the city name in admin; give it ~10 seconds. |
| Forgot the PIN | Default is `1234`; resets if you clear the browser's site data. |
| A slide won't appear | Check it's ticked in Slide Visibility, and that it has content. |
| Employee photo broken | The URL is wrong or not public — initials show as fallback. |
| Want a different order | Admin → ⇅ Reorder → drag → Save & Download → upload. |
