# Reclassified DMV

> **"Reclassified. Not retired."**
> The veteran community platform for Baltimore, DC, and Virginia.

---

## Project Structure

```
reclassified-dmv/
├── public/
│   └── index.html              # HTML shell
├── src/
│   ├── components/
│   │   ├── Navbar.js           # Sticky nav, mobile hamburger menu
│   │   ├── Navbar.css          # Navbar styles
│   │   ├── Footer.js           # Site footer with links
│   │   └── UI.js               # Reusable components (Tag, Avatar, Chip, etc.)
│   ├── data/
│   │   └── mockData.js         # All mock data (replace with API calls in Phase 2)
│   ├── pages/
│   │   ├── Home.js             # Landing page
│   │   ├── Home.css            # Landing page styles
│   │   ├── Feed.js             # Community feed
│   │   ├── Jobs.js             # Job board
│   │   ├── Events.js           # Events & meetups
│   │   ├── Forums.js           # Discussion boards
│   │   └── NotFound.js         # 404 page
│   ├── styles/
│   │   └── global.css          # CSS variables, resets, utility classes
│   ├── App.js                  # Root component + routing
│   └── index.js                # React entry point
├── .gitignore
├── package.json
└── README.md
```

---

## Getting Started

### 1. Create the React app
```bash
npx create-react-app reclassified-dmv
cd reclassified-dmv
```

### 2. Install dependencies
```bash
npm install react-router-dom
```

### 3. Replace the generated files
Copy all files from this project into the `src/` and `public/` folders, replacing what create-react-app generated.

### 4. Run locally
```bash
npm start
```
App runs at **http://localhost:3000**

### 5. Build for production
```bash
npm run build
```
Outputs to `/build` — deploy this folder to DigitalOcean.

---

## Pages & Routes

| Route      | Page       | Description                          |
|------------|------------|--------------------------------------|
| `/`        | Home       | Landing page with hero, features, CTA|
| `/feed`    | Feed       | Community posts with branch filters  |
| `/jobs`    | Jobs       | Job board with clearance/type filters|
| `/events`  | Events     | RSVP-able event listings             |
| `/forums`  | Forums     | Discussion threads by topic          |
| `*`        | 404        | "Gone AWOL" not found page           |

---

## Reusable Components (src/components/UI.js)

| Component      | Props                              | Use                        |
|----------------|------------------------------------|----------------------------|
| `<Tag>`        | `type`, `children`                 | Branch/topic tags          |
| `<Avatar>`     | `initials`, `colorClass`, `size`   | User avatars               |
| `<Chip>`       | `label`, `active`, `onClick`       | Filter pills               |
| `<SearchBar>`  | `placeholder`, `value`, `onChange` | Search inputs              |
| `<PageHeader>` | `region`, `title`, `subtitle`      | Consistent page headers    |
| `<SectionHeader>` | `title`, `action`, `onAction`   | Section labels with actions|
| `<StatBadge>`  | `value`, `label`                   | Stat display               |
| `<EmptyState>` | `icon`, `title`, `message`         | Empty/no-results states    |
| `<Skeleton>`   | `height`, `borderRadius`           | Loading placeholders       |

---

## CSS Variables (src/styles/global.css)

```css
--c-bg           /* darkest background  */
--c-bg-2         /* secondary background */
--c-bg-card      /* card background      */
--c-border       /* default border       */
--c-green-accent /* #4caf50 — primary accent */
--c-green-pale   /* #a5d6a7 — light text */
--c-text-primary /* main text color      */
--c-text-secondary /* muted text         */
--font-display   /* Barlow Condensed     */
--font-body      /* Barlow               */
```

---

## Mock Data (src/data/mockData.js)

All page data lives here as static arrays. In Phase 2, replace these imports with real API calls:

```js
// Phase 1 (current)
import { FEED_POSTS } from '../data/mockData';

// Phase 2 (future)
const [posts, setPosts] = useState([]);
useEffect(() => {
  fetch('/api/posts').then(r => r.json()).then(setPosts);
}, []);
```

---

## Deploying to DigitalOcean

### Option A — App Platform (recommended, easiest)
1. Push repo to GitHub
2. DigitalOcean → App Platform → New App
3. Connect GitHub repo
4. Set **build command:** `npm run build`
5. Set **output directory:** `build`
6. Hit Deploy — done

### Option B — Droplet + Nginx
```bash
# On your droplet
npm run build
sudo cp -r build/* /var/www/html/

# nginx config — handle React Router
location / {
  try_files $uri $uri/ /index.html;
}
```

### Point your domain
Update DNS on Namecheap/Cloudflare:
```
A Record  @    → YOUR_DROPLET_IP
A Record  www  → YOUR_DROPLET_IP
```

---

## Phase 2 Roadmap

### Backend
- [ ] Node.js + Express API (or Django)
- [ ] PostgreSQL database on DigitalOcean
- [ ] REST endpoints for posts, jobs, events, forums

### Auth
- [ ] Sign up / login (JWT or sessions)
- [ ] Branch verification (DD-214 upload or honor system)
- [ ] Profile pages

### Features
- [ ] Create/delete posts
- [ ] Job submission form for employers
- [ ] Event RSVP persistence
- [ ] Forum thread creation + replies
- [ ] Direct messaging
- [ ] Notifications

### Mobile
- [ ] React Native app (iOS + Android)
- [ ] Share codebase logic with web via shared hooks

---

## Tech Stack

| Layer    | Tech                          |
|----------|-------------------------------|
| Frontend | React 18, React Router v6     |
| Styling  | Plain CSS with CSS variables  |
| Fonts    | Barlow Condensed + Barlow     |
| Hosting  | DigitalOcean App Platform     |
| Domain   | ReclassifiedDMV.com           |
