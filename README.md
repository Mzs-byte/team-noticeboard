# Team Noticeboard

A self-updating digital noticeboard for a TV screen. It loops through a set of
slides — announcements, weather, KPIs, a leaderboard, employee of the month and
more — and runs in any web browser. Designed to live on a PC connected to a TV.

---

## The files

| File | What it is | Do you edit it? |
|------|-----------|-----------------|
| `index.html` | The whole app — all the code and styling. | Rarely. Only if you want to change how something looks/works. |
| `data.json` | All your content — names, scores, announcements, etc. | **Yes — this is the file you change most.** |
| `sw.js` | Service worker. Makes the board load fast and stay fresh. | No. |
| `manifest.json` | Lets the board be "installed" as an app window. | No. |
| `README.md` | This file. | No. |

You can also edit everything through the built-in **Admin Panel** (see below) — no
need to touch `data.json` by hand unless you prefer to.

---

## Getting it online (GitHub Pages)

1. Create a free GitHub account if you don't have one.
2. Make a new repository named **`team-noticeboard`**.
3. Upload `index.html`, `data.json`, `sw.js` and `manifest.json` into it.
4. In the repo: **Settings → Pages → Source: "Deploy from a branch" → main / root → Save.**
5. After a minute or two your board is live at:
   `https://YOUR-USERNAME.github.io/team-noticeboard/`

Any time you change `data.json` and upload the new version, the board updates
itself within a few minutes — no need to restart anything.

> **Note on the address:** the project is set up for a repo called
> `team-noticeboard`. If you name the repo something else, open `manifest.json`
> and `sw.js` and change `/team-noticeboard/` to match your repo name.

---

## Showing it on the TV

1. On the PC connected to the TV, open Chrome or Edge.
2. Go to your board's web address.
3. Press **F11** for fullscreen.

**To make it start automatically when the PC turns on** (so it behaves like an
app), create a shortcut to Chrome with this target…

```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk --start-fullscreen https://YOUR-USERNAME.github.io/team-noticeboard/
```

…and place the shortcut in the Windows Startup folder:
`C:\Users\YOUR-NAME\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`

Also worth doing: set the PC's power settings so the screen never sleeps.

---

## The Admin Panel

This is how you edit content without touching files.

1. **Hold down the clock** (top-right of the screen) for **3 seconds**.
2. Enter the PIN. **Default is `1234`.**
3. Edit anything, then scroll to the bottom and click **Download data.json**.
4. Upload that downloaded `data.json` to GitHub to make it permanent.

**Change the PIN** at the top of the admin panel. Do this first.

Two buttons in the admin header:
- **🔀 Reorder Slides** — drag slides into the order you want.
- **✕ Close** — leave the admin panel.

---

## What's currently switched on

The board is set to show these 9 slides, in this order:

1. **Announcements** — your notices, colour-coded by priority.
2. **On This Day in History** — pulls a real historical event automatically.
3. **International Day** — always shows the next upcoming one (e.g. "Coming up in 4 days").
4. **Upcoming Bank Holidays** — UK holidays, fetched automatically.
5. **Weather** — live 7-day forecast for your city.
6. **This Week at a Glance** — Mon–Fri events.
7. **KPIs** — up to 12 metrics with up/down/flat arrows.
8. **Leaderboard** — your team ranked by points.
9. **Employee of the Month** — name, role, blurb and a photo.

Lots of other slide types exist in the code but are switched off (news, quotes,
word of the day, countdowns, supplies, training, reviews, and more). You can turn
any of them back on in the admin panel under **Slide Visibility Controls**.

---

## Editing the things you'll change most

### Announcements
Admin panel → **Announcements**. Each has a title, body and priority
(normal / important / urgent — which sets the colour).

### KPIs
Admin panel → **KPIs**. Add up to 12. Each has a label, value, a change note
and a trend (up / down / neutral). The grid automatically resizes:
- 1–4 KPIs show large
- 5–6, 7–9, 10–12 progressively smaller so they always fit one screen.

### Leaderboard
Admin panel → **Leaderboard**. Each person has a name, points and a change
number (how much they moved this period). Job titles are not shown. Sorted by
points automatically; top 3 get medals.

### Employee of the Month
Admin panel → **Employee of the Month**. Name, role, month, a blurb, and a
**photo URL**.

> **The photo must be a web link** — a static site can't read images from your
> PC directly. Easiest method: upload the photo into your GitHub repo (e.g.
> `lily.jpg`) and put that filename/URL in the Photo field. If the photo is
> blank or the link is broken, the person's initials show instead, so it never
> looks broken.

### This Week at a Glance
Admin panel → **Week at a Glance**. One box per weekday; type one event per line.

### Weather
Admin panel → **General Settings → Weather City**. Type a city name (e.g.
"Manchester"). The 7-day forecast and the temperature in the top bar both use it.

### Company name / slide speed
Admin panel → **General Settings**. Set your team/company name and how long each
slide stays on screen (default 10 seconds).

---

## How the automatic slides work

These need no maintenance — they fetch fresh data on their own:

- **Weather** — Open-Meteo (free, no API key).
- **Bank Holidays** — UK government API.
- **On This Day** — Wikipedia.
- **International Day** — built-in calendar, always rolls to the next one.

If the PC has no internet, these slides show a gentle "couldn't load" message and
the rest of the board keeps running.

---

## Optional: the app icons

`manifest.json` refers to `icon-192.png` and `icon-512.png`. These are **not
included** and are only used if you "install" the board as a desktop app window —
they'd be the app's icon. The board works perfectly without them; you may just
see a harmless note in the browser console. If you want them, add two square PNGs
(192×192 and 512×512) to the repo with those exact names.

---

## Quick troubleshooting

| Problem | Fix |
|--------|-----|
| Changes not showing | Did you upload the new `data.json` to GitHub? Wait 1–2 min, then refresh (Ctrl+Shift+R). |
| Weather blank | Check the city name is spelled correctly in admin. Give it ~10 seconds. |
| Forgot the PIN | Clears if you reset the browser's site data; default is `1234`. |
| A slide won't appear | Check it's ticked in **Slide Visibility Controls**, and that it has content. |
| Employee photo broken | The URL is wrong or the image isn't public. Initials show as fallback. |
| Want a different order | Admin → **🔀 Reorder Slides**, drag, then Download + upload `data.json`. |

---

## A note on the reviews

Reviews were trialled but left switched off, because there is no reliable free way
to pull TripAdvisor reviews into a static site automatically. If you ever want
them back, there's a manual "⭐ Add Review" quick-entry tool built in — turn the
Reviews slide on in the admin panel and the button appears in the top bar.
