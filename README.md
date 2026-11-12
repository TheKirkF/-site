# The Kirk F — Photography Site

A static portfolio site: hero, location-based galleries, about section, and a
contact form. No build step, no framework — just HTML/CSS/JS, so it deploys
anywhere in minutes.

---

## 1. Preview it locally (optional but recommended)

You can just double-click `index.html` to open it in a browser, but the
gallery pages use `fetch`-like relative paths that work better served over
HTTP. Easiest way, if you have Python installed:

```bash
cd thekirkf-site
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

---

## 2. Turn on the contact form (2 minutes)

The contact form needs a form-handling service since this is a static site
with no backend. It's already wired up for **Formspree** (free for up to 50
submissions/month):

1. Go to https://formspree.io and sign up (free).
2. Create a new form, set the destination email to `info@thekirkf.com`.
3. Formspree gives you a form endpoint like `https://formspree.io/f/abcd1234`.
4. Open `index.html`, find this line:
   ```html
   <form id="contact-form" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Replace `YOUR_FORM_ID` with your real form ID.
6. Save, commit, push (see below) — the form will now email you directly.

Until you do this step, the form will show an error message when submitted
(it points to a placeholder URL).

---

## 3. Adding or updating photos

Everything about galleries lives in **`js/galleries.js`** — you never need
to touch HTML to add photos.

**To add photos to an existing gallery** (e.g. Nature):
1. Drop the image files into `images/nature/`
2. Open `js/galleries.js`, find the `nature` entry, add the filenames to its
   `images` array.

**To add a brand new gallery** (e.g. a Pakistan trip):
1. Create a new folder: `images/pakistan/`
2. Add your photos to it.
3. In `js/galleries.js`, add a new object to the `GALLERIES` array:
   ```js
   {
     slug: "pakistan",
     title: "Pakistan",
     description: "A short line about the trip.",
     cover: "pakistan-01-cover.jpg",
     images: ["pakistan-01-cover.jpg", "pakistan-02.jpg"]
   }
   ```
4. It'll automatically appear on the homepage grid and get its own gallery
   page at `gallery.html?g=pakistan`.

**Image sizing tip:** keep uploaded photos under ~2200px on the long edge
and export at ~80% JPEG quality — keeps the site fast. The photos already
in this repo were processed this way.

### A few photos need your eyes
When I built this, a couple of your uploaded photos didn't clearly match one
of your named galleries (a street scene that looked like Jakarta, and a
photo of a car labeled "Islamabad"). I left those out of the site rather
than guess wrong — they're still in your original uploads if you want to
create new galleries for them later. I also made my best guess on a couple
of borderline ones (the foggy lighthouse/coastline photos went into
"England," an ornate building facade went into "Budapest") — double check
those look right to you, and just move the file + edit `galleries.js` if not.

---

## 4. Push this to GitHub

From inside the `thekirkf-site` folder:

```bash
git init
git add .
git commit -m "Initial site"
```

Then on GitHub.com:
1. Create a new repository (e.g. `thekirkf-site`) — don't initialize it
   with a README, since you already have one.
2. Copy the commands GitHub shows you under "…or push an existing
   repository from the command line", which will look like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/thekirkf-site.git
git branch -M main
git push -u origin main
```

---

## 5. Deploy on Render

1. Go to https://render.com and sign up / log in (you can use your GitHub
   account to sign up, which makes the next step easier).
2. Click **New +** → **Static Site**.
3. Connect your GitHub account if prompted, then select the `thekirkf-site`
   repo.
4. Render should auto-detect the settings from `render.yaml` in this repo.
   If it asks manually:
   - **Build Command:** leave blank
   - **Publish Directory:** `.` (a single period, meaning the repo root)
5. Click **Create Static Site**. Render will build and give you a live URL
   like `thekirkf-site.onrender.com` within a minute or two.

From now on, every time you `git push`, Render automatically redeploys.

---

## 6. Point your custom domain (thekirkf.com) at Render

1. In your Render static site dashboard, go to **Settings → Custom Domains**.
2. Add `thekirkf.com` (and `www.thekirkf.com` if you want both).
3. Render will show you DNS records to add — typically:
   - A `CNAME` record for `www` pointing to your Render URL
   - Either an `A` record or `ANAME`/`ALIAS` record for the root domain
     (`thekirkf.com`), depending on what your domain registrar supports
4. Log into wherever you bought your domain (GoDaddy, Namecheap, Google
   Domains, etc.), go to DNS settings, and add the records Render gave you.
5. DNS changes can take anywhere from a few minutes to a few hours to
   propagate. Render will show a green checkmark once it's verified and
   has issued an SSL certificate (free, automatic).

---

## File structure

```
thekirkf-site/
├── index.html          — homepage
├── gallery.html         — gallery template (reads ?g=slug from the URL)
├── render.yaml           — tells Render this is a static site
├── css/
│   └── style.css        — all styling
├── js/
│   ├── galleries.js      — ← edit this to add/update galleries & photos
│   ├── main.js           — homepage behavior (hero rotation, contact form)
│   └── gallery-page.js   — gallery page behavior (grid + lightbox)
└── images/
    ├── hero/             — rotating homepage background images
    ├── about/            — your portrait for the About section
    ├── nature/
    ├── uganda/
    ├── mumbai/
    ├── england/
    ├── segovia/          — empty for now, marked "coming soon" on the site
    └── budapest/
```
