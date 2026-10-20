# Editing your site (selinkurt.com)

The whole site is static files in this repo. GitHub re-publishes the site
about 2 minutes after every commit.

## The files that matter

| File | What it is |
|---|---|
| `index.html` | Home page: hero text, intro, project cards, the quote block |
| `about.html` | About page: your long bio, quote, why-I-build, contact |
| `styles.css` | All colors, fonts, spacing (bottom of file = mobile sizes) |
| `molty-architecture.html` | Deep dive: Molty/WAKE (self-contained page) |
| `nexus-architecture.html` | Deep dive: NEXUS (self-contained page) |
| `why-this-design.html` | Deep dive: the essay page |
| `script.js` | Only the dark-mode toggle logic |

## Change wording

1. Open the file here on GitHub (click its name in the file list)
2. Click the pencil icon (top right of the file view)
3. Edit the text between the `>` and `<` tags (leave the tags alone)
4. Commit changes (green button) - the site rebuilds by itself

## Swap the portrait photo

Put a photo file named `exactly this` in the repo:

- `assets/selin.jpg` (a square, ~600px, well-lit)

Then in `index.html` find the line that says `<!-- swap this whole div ...`
and replace the:

```
<div class="mono">SK</div>
```

with:

```
<img class="mono" src="assets/selin.jpg" alt="Selin Kurt">
```

(To upload the file: GitHub file list → Add file → Upload files.

## Change the accent color

In `styles.css`, the `:root` block at the top: change
`--accent: #4F46E5;` to any hex you like (gradient lives in `--grad`).

## Faster route (recommended)

Open a chat session and say what you want changed in plain language
("make the NEXUS blurb softer", "put this quote on the home page");
a push follows. No tags involved for you.
