/**
 * The public landing page (served at / unless LEGACY_WEB=1). Deliberately
 * minimal: this is the ReadMargin Sync endpoint, not the product's front
 * door — that's readmargin.app. The page exists so the server has a name,
 * a sign-in link and correct link previews, in ReadMargin's visual language
 * (Lora, Inter, Caveat accents, ink blue on warm paper, light and dark).
 *
 * Naming convention: "ReadMargin" is reserved for the social product;
 * this sync layer and its console are "ReadMargin Sync".
 */
const GITHUB = 'https://github.com/mcsamuel/readmargin-sync';

export const SITE_DESCRIPTION =
  'The sync endpoint for ReadMargin. Point KOReader at this server and your progress, highlights and reading stats follow you across every reader you own.';
// Link previews need an absolute image URL.
const OG_IMAGE = 'https://app.readmargin.app/og.jpg';

/** Description plus Open Graph / Twitter card tags. Title and description are trusted literals. */
export const metaTags = (title: string, description = SITE_DESCRIPTION) =>
  `<meta name="description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="ReadMargin Sync">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="ReadMargin: your highlights finally land somewhere.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${OG_IMAGE}">`;

const STYLE = `
:root{
  color-scheme:light dark;
  --page:#faf7f1;--surface:#fffdf8;--ink:#1c1917;--text:#44403c;--soft:#78716c;--line:#e9e4da;
  --brand:#3a6a9c;--brand-ink:#2f5884;
}
@media (prefers-color-scheme:dark){:root{
  --page:#151310;--surface:#1f1c16;--ink:#f3f0e6;--text:#d5cfc0;--soft:#a39a8b;--line:#2e2a22;
  --brand:#4d82b5;--brand-ink:#7ba3cc;
}}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--page);color:var(--text);font:16px/1.6 "InterVariable",ui-sans-serif,system-ui,sans-serif;
  font-feature-settings:"cv02","cv03","cv04","cv11";-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.wrap{max-width:72rem;margin:0 auto;padding:0 20px}
h1{font-family:"Lora",ui-serif,serif;color:var(--ink);font-weight:600;letter-spacing:-.015em;margin:0}
.hand{font-family:"Caveat",cursive;font-weight:600;color:var(--brand-ink)}

/* header */
header .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.mark{display:flex;align-items:center;gap:10px;font:600 17px "Lora",serif;color:var(--ink);white-space:nowrap}
.mark img{width:30px;height:30px;border-radius:8px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:44px;padding:0 20px;border-radius:999px;
  font-size:15px;font-weight:600;white-space:nowrap;background:var(--brand);color:#fff;transition:transform .15s,background .15s}
.btn:active{transform:scale(.98)}
.btn:hover{background:var(--brand-ink)}
nav .btn{height:38px;padding:0 16px;font-size:14px}

/* main */
main .wrap{max-width:44rem;text-align:center;padding-block:96px 88px}
main img.logo{width:72px;height:72px;border-radius:18px;display:block;margin:0 auto 22px}
main .eyebrow{font-size:24px;transform:rotate(-2deg);display:inline-block}
main h1{font-size:clamp(40px,6vw,56px);line-height:1.05;margin-top:6px}
main p.sub{font-size:19px;line-height:1.55;color:var(--soft);max-width:30rem;margin:20px auto 0}
main .cta{margin-top:32px}
main p.note{font-size:14px;color:var(--soft);margin-top:40px}
main p.note a{text-decoration:underline}
main p.note a:hover{color:var(--ink)}

footer{border-top:1px solid var(--line);padding:28px 0 40px;color:var(--soft);font-size:14px}
footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
footer a:hover{color:var(--ink)}

@media (prefers-reduced-motion:no-preference){
  main .wrap{animation:rise .7s cubic-bezier(.16,1,.3,1) both}
  @keyframes rise{from{opacity:0;transform:translateY(16px)}}
}
`;

export function landingPage(fontFaces: string): string {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>ReadMargin Sync</title>
${metaTags('ReadMargin Sync')}
<meta name="theme-color" content="#faf7f1" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#151310" media="(prefers-color-scheme: dark)">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="preload" href="/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/lora-latin-600-normal.woff2" as="font" type="font/woff2" crossorigin>
<style>${fontFaces}${STYLE}</style></head>
<body>
<header><div class="wrap">
  <a class="mark" href="/"><img src="/logo.png" alt="">ReadMargin Sync</a>
  <nav><a class="btn" href="/app/">Sign in</a></nav>
</div></header>

<main><div class="wrap">
  <img class="logo" src="/logo.png" alt="">
  <span class="hand eyebrow">your highlights finally land somewhere</span>
  <h1>ReadMargin Sync</h1>
  <p class="sub">This is the sync endpoint for ReadMargin. Point KOReader at this server and your progress, highlights and reading stats follow you across every reader you own.</p>
  <div class="cta"><a class="btn" href="/app/">Open the app</a></div>
  <p class="note">The sync layer is open source — <a href="${GITHUB}">run your own instance</a>.</p>
</div></main>

<footer><div class="wrap">
  <span>ReadMargin Sync</span>
  <span><a href="https://readmargin.app">readmargin.app</a> · <a href="${GITHUB}">GitHub</a></span>
</div></footer>
</body></html>`;
}
