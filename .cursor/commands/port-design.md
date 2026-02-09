## Port HTML/CSS design to Astro

You are given a full HTML + CSS + JS design below. Port it into this codebase with exact visual fidelity. Do not redesign or reinterpret anything.

## Target files
- `src/components/layouts/home.astro` (homepage layout)
- `src/content/pages/index.md` (SEO title/description)

## Required layout structure
- Keep `type Props = HomeSchema`, `const page = Astro.props`, and `const global = Astro.locals.global`.
- Use `Layout`, `LayoutHead`, `LayoutBody`, `LayoutMain` from `@/components/ui/layout`.
- Remove `<Header />` and `<Footer />` from `home.astro` and rebuild the custom nav/footer from the source HTML.
- Add `class="fulldev"` to `LayoutBody` to scope styles and scripts.
- Place the overlay elements (`.noise`, `.grid-overlay`) at the top of `LayoutBody`.
- Put the main sections inside `LayoutMain`, then append the footer and script.
- Add the Google Fonts `<link>` tags inside the `LayoutHead` slot.
- Update `src/content/pages/index.md` SEO values to match the design title and description.

## Styling rules
- Keep class names and structure exactly as in the source HTML.
- Paste the CSS into a `<style is:global>` block and scope it to this page:
  - Use `:global(body.fulldev)` for body styles.
  - Convert the reset to `:global(body.fulldev *), :global(body.fulldev *::before), :global(body.fulldev *::after)`.
  - Prefix layout selectors (`nav`, `.hero`, `.marquee`, etc.) with `body.fulldev` or `.fulldev` to prevent leakage.
- Preserve CSS variables, keyframes, animations, and z-index values exactly.
- Do not convert this CSS to Tailwind if it risks any visual changes.

## Script rules
- Add a `<script type="module">` at the end of the layout.
- Keep the scroll-reveal and stat-counter behavior.
- Convert any TypeScript-only syntax to plain JS.
- Scope all selectors to `.fulldev` so the script only runs on this page.

## Content fidelity
- Keep all copy, casing, and punctuation.
- Preserve special symbols (arrow, star, infinity) using actual characters or HTML entities.
- Keep section IDs for anchor links.

---

## Source design (HTML/CSS/JS)

```html
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>fulldev &mdash; We break down barriers</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
</head>
<body>

<div class="noise"></div>
<div class="grid-overlay"></div>

<!-- NAV -->
<nav>
  <div class="nav-left">
    <span class="nav-logo">fulldev<span class="blink">_</span></span>
  </div>
  <div class="nav-right">
    <a href="#services" class="nav-link">SERVICES</a>
    <a href="#approach" class="nav-link">APPROACH</a>
    <a href="#work" class="nav-link">WORK</a>
    <a href="#contact" class="nav-link nav-link--cta">START PROJECT &rarr;</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-tag">WEB DEVELOPMENT AGENCY / EST. 2024</div>
  <h1 class="hero-title">
    <span class="hero-line hero-line--1">WE BUILD</span>
    <span class="hero-line hero-line--2">BRIDGES</span>
    <span class="hero-line hero-line--3">NOT WALLS</span>
  </h1>
  <div class="hero-bottom">
    <div class="hero-desc">
      <p>Between <em>your vision</em> and the <strong>code that powers it</strong>. We combine deep technical expertise with genuine human communication &mdash; no jargon, no barriers, just results.</p>
    </div>
    <div class="hero-scroll">
      <span class="scroll-line"></span>
      <span class="scroll-text">SCROLL</span>
    </div>
  </div>
  <div class="hero-stamp" aria-hidden="true">
    <svg viewBox="0 0 200 200" width="160" height="160">
      <defs>
        <path id="circlePath" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" />
      </defs>
      <text>
        <textPath href="#circlePath" class="stamp-text">TECHNICAL EXPERTISE &bull; HUMAN CONNECTION &bull; </textPath>
      </text>
    </svg>
  </div>
</section>

<!-- MARQUEE -->
<div class="marquee">
  <div class="marquee-track">
    <span>WEBSITES</span><span class="sep">&#10022;</span>
    <span>WEBSHOPS</span><span class="sep">&#10022;</span>
    <span>WEB APPS</span><span class="sep">&#10022;</span>
    <span>AI INTEGRATION</span><span class="sep">&#10022;</span>
    <span>WEBSITES</span><span class="sep">&#10022;</span>
    <span>WEBSHOPS</span><span class="sep">&#10022;</span>
    <span>WEB APPS</span><span class="sep">&#10022;</span>
    <span>AI INTEGRATION</span><span class="sep">&#10022;</span>
    <span>WEBSITES</span><span class="sep">&#10022;</span>
    <span>WEBSHOPS</span><span class="sep">&#10022;</span>
    <span>WEB APPS</span><span class="sep">&#10022;</span>
    <span>AI INTEGRATION</span><span class="sep">&#10022;</span>
  </div>
</div>

<!-- SERVICES -->
<section class="services" id="services">
  <div class="section-header">
    <span class="section-number">01</span>
    <h2 class="section-title">WHAT WE DO</h2>
    <div class="section-line"></div>
  </div>

  <div class="services-grid">
    <div class="service-card" data-service="01">
      <div class="service-num">01/</div>
      <h3 class="service-title">WEBSITES</h3>
      <p class="service-desc">Lightning-fast marketing sites, landing pages, and corporate platforms. Built for performance, designed for conversion.</p>
      <div class="service-tags">
        <span>Astro</span><span>Next.js</span><span>Headless CMS</span>
      </div>
      <div class="service-corner"></div>
    </div>

    <div class="service-card" data-service="02">
      <div class="service-num">02/</div>
      <h3 class="service-title">WEBSHOPS</h3>
      <p class="service-desc">E-commerce that sells. Custom storefronts, checkout flows, and inventory systems that turn browsers into buyers.</p>
      <div class="service-tags">
        <span>Shopify</span><span>Medusa</span><span>Custom</span>
      </div>
      <div class="service-corner"></div>
    </div>

    <div class="service-card" data-service="03">
      <div class="service-num">03/</div>
      <h3 class="service-title">WEB APPS</h3>
      <p class="service-desc">Complex applications made simple. Dashboards, SaaS platforms, and internal tools that people actually enjoy using.</p>
      <div class="service-tags">
        <span>React</span><span>Vue</span><span>Full-stack</span>
      </div>
      <div class="service-corner"></div>
    </div>

    <div class="service-card" data-service="04">
      <div class="service-num">04/</div>
      <h3 class="service-title">AI INTEGRATION</h3>
      <p class="service-desc">Smart features that matter. Chatbots, automation, recommendation engines, and custom AI solutions embedded in your workflow.</p>
      <div class="service-tags">
        <span>LLMs</span><span>Automation</span><span>Custom AI</span>
      </div>
      <div class="service-corner"></div>
    </div>
  </div>
</section>

<!-- APPROACH -->
<section class="approach" id="approach">
  <div class="section-header">
    <span class="section-number">02</span>
    <h2 class="section-title">HOW WE WORK</h2>
    <div class="section-line"></div>
  </div>

  <div class="approach-content">
    <div class="approach-left">
      <blockquote class="approach-quote">
        "The best technology is invisible. What people remember is how you made them <em>feel</em>."
      </blockquote>
    </div>
    <div class="approach-right">
      <div class="approach-step">
        <div class="step-marker">&rarr;</div>
        <div class="step-content">
          <h4>LISTEN FIRST</h4>
          <p>We start every project with deep listening. Understanding your business, your users, your ambitions &mdash; before writing a single line of code.</p>
        </div>
      </div>
      <div class="approach-step">
        <div class="step-marker">&rarr;</div>
        <div class="step-content">
          <h4>TRANSLATE CLEARLY</h4>
          <p>We bridge the gap between technical possibilities and business goals. No jargon, no mystery &mdash; just honest, clear communication throughout.</p>
        </div>
      </div>
      <div class="approach-step">
        <div class="step-marker">&rarr;</div>
        <div class="step-content">
          <h4>BUILD WITH CRAFT</h4>
          <p>Every component is engineered with care. Clean code, robust architecture, and obsessive attention to the details that make the difference.</p>
        </div>
      </div>
      <div class="approach-step">
        <div class="step-marker">&rarr;</div>
        <div class="step-content">
          <h4>DELIVER &amp; EVOLVE</h4>
          <p>Launch is just the beginning. We provide ongoing support, iterate based on real data, and grow your platform as your business scales.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- STATS -->
<section class="stats">
  <div class="stat">
    <span class="stat-number" data-target="127">0</span>
    <span class="stat-label">Projects Shipped</span>
  </div>
  <div class="stat-divider"></div>
  <div class="stat">
    <span class="stat-number" data-target="98">0</span><span class="stat-suffix">%</span>
    <span class="stat-label">Client Satisfaction</span>
  </div>
  <div class="stat-divider"></div>
  <div class="stat">
    <span class="stat-number" data-target="4">0</span>
    <span class="stat-label">Core Team Members</span>
  </div>
  <div class="stat-divider"></div>
  <div class="stat">
    <span class="stat-number" data-target="0">&infin;</span>
    <span class="stat-label">Cups of Coffee</span>
  </div>
</section>

<!-- CTA -->
<section class="cta" id="contact">
  <div class="cta-inner">
    <h2 class="cta-title">LET'S<br/>TALK<span class="cta-dot">.</span></h2>
    <p class="cta-desc">Got a project? A wild idea? A problem that needs solving? We're ready to listen.</p>
    <a href="mailto:hello@fulldev.nl" class="cta-button">
      <span class="cta-button-text">START A CONVERSATION</span>
      <span class="cta-button-arrow">&rarr;</span>
    </a>
  </div>
  <div class="cta-decoration" aria-hidden="true">
    <div class="cta-circle"></div>
    <div class="cta-circle cta-circle--2"></div>
    <div class="cta-circle cta-circle--3"></div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-top">
    <div class="footer-brand">fulldev<span class="blink">_</span></div>
    <div class="footer-links">
      <a href="#">Twitter/X</a>
      <a href="#">LinkedIn</a>
      <a href="#">GitHub</a>
      <a href="#">Dribbble</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2024 fulldev. All rights reserved.</span>
    <span>Built with obsessive attention to detail.</span>
  </div>
</footer>

<style>
  /* ===== RESET & BASE ===== */
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #f5f0eb;
    --fg: #1a1a1a;
    --accent: #ff3300;
    --accent2: #ff6b00;
    --muted: #999;
    --border: #1a1a1a;
    --font-display: 'Bebas Neue', sans-serif;
    --font-body: 'Courier Prime', monospace;
  }

  html { scroll-behavior: smooth; }
  body {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--fg);
    overflow-x: hidden;
    line-height: 1.6;
    position: relative;
  }

  a { color: inherit; text-decoration: none; }
  em { font-style: italic; color: var(--accent); }
  strong { font-weight: 700; }

  /* ===== NOISE OVERLAY ===== */
  .noise {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px 256px;
  }

  /* ===== GRID OVERLAY ===== */
  .grid-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none;
    z-index: 9998;
    opacity: 0.03;
    background-image:
      linear-gradient(var(--fg) 1px, transparent 1px),
      linear-gradient(90deg, var(--fg) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  /* ===== BLINK ===== */
  .blink { animation: blink 1s step-end infinite; }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

  /* ===== NAV ===== */
  nav {
    position: fixed;
    top: 0; left: 0; width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 3rem;
    z-index: 1000;
    mix-blend-mode: difference;
  }
  .nav-logo {
    font-family: var(--font-body);
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #fff;
  }
  .nav-right { display: flex; gap: 2rem; align-items: center; }
  .nav-link {
    font-family: var(--font-body);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: #fff;
    transition: opacity 0.3s;
  }
  .nav-link:hover { opacity: 0.6; }
  .nav-link--cta {
    border: 1px solid #fff;
    padding: 0.5rem 1.2rem;
  }
  .nav-link--cta:hover { background: #fff; color: #000; opacity: 1; }

  /* ===== HERO ===== */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8rem 3rem 4rem;
    position: relative;
  }
  .hero-tag {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    color: var(--muted);
    margin-bottom: 2rem;
    animation: fadeSlideUp 0.8s ease-out both;
  }
  .hero-title {
    font-family: var(--font-display);
    line-height: 0.88;
    margin-bottom: 4rem;
  }
  .hero-line {
    display: block;
    overflow: hidden;
  }
  .hero-line--1 {
    font-size: clamp(4rem, 12vw, 12rem);
    color: var(--fg);
    animation: revealLine 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0.2s both;
  }
  .hero-line--2 {
    font-size: clamp(5rem, 18vw, 20rem);
    color: var(--accent);
    margin-left: -0.05em;
    animation: revealLine 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0.4s both;
  }
  .hero-line--3 {
    font-size: clamp(4rem, 12vw, 12rem);
    color: var(--fg);
    animation: revealLine 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0.6s both;
  }

  @keyframes revealLine {
    from { transform: translateY(110%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes fadeSlideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .hero-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    animation: fadeSlideUp 0.8s ease-out 0.8s both;
  }
  .hero-desc {
    max-width: 480px;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--fg);
  }
  .hero-scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .scroll-line {
    display: block;
    width: 1px;
    height: 60px;
    background: var(--fg);
    animation: scrollPulse 2s ease-in-out infinite;
  }
  @keyframes scrollPulse {
    0%, 100% { transform: scaleY(1); opacity: 1; }
    50% { transform: scaleY(0.5); opacity: 0.3; }
  }
  .scroll-text { font-size: 0.6rem; letter-spacing: 0.3em; }

  .hero-stamp {
    position: absolute;
    right: 3rem;
    top: 50%;
    transform: translateY(-50%);
    animation: spin 20s linear infinite, fadeSlideUp 1s ease-out 1s both;
  }
  .stamp-text {
    font-family: var(--font-body);
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    fill: var(--accent);
  }

  /* ===== MARQUEE ===== */
  .marquee {
    border-top: 2px solid var(--fg);
    border-bottom: 2px solid var(--fg);
    padding: 1.2rem 0;
    overflow: hidden;
    white-space: nowrap;
  }
  .marquee-track {
    display: inline-flex;
    gap: 2rem;
    animation: marquee 25s linear infinite;
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    letter-spacing: 0.05em;
  }
  .marquee-track .sep { color: var(--accent); }
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-33.33%); }
  }
  @keyframes spin { from { transform: translateY(-50%) rotate(0deg); } to { transform: translateY(-50%) rotate(360deg); } }

  /* ===== SECTIONS ===== */
  .section-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 4rem;
    padding: 0 3rem;
  }
  .section-number {
    font-family: var(--font-body);
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    color: var(--accent);
    border: 1px solid var(--accent);
    padding: 0.3rem 0.7rem;
  }
  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3.5rem);
    letter-spacing: 0.02em;
  }
  .section-line {
    flex: 1;
    height: 2px;
    background: var(--fg);
  }

  /* ===== SERVICES ===== */
  .services {
    padding: 8rem 0;
    position: relative;
  }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    padding: 0 3rem;
  }
  .service-card {
    border: 2px solid var(--fg);
    padding: 3rem;
    position: relative;
    transition: all 0.4s cubic-bezier(0.25, 0, 0, 1);
    overflow: hidden;
  }
  .service-card:hover {
    background: var(--fg);
    color: var(--bg);
    transform: scale(1.02);
    z-index: 2;
  }
  .service-card:hover .service-corner { border-color: var(--accent); }
  .service-card:hover .service-tags span { border-color: var(--bg); }
  .service-num {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    color: var(--accent);
    margin-bottom: 1.5rem;
  }
  .service-card:hover .service-num { color: var(--accent); }
  .service-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3.5rem);
    margin-bottom: 1rem;
    line-height: 1;
  }
  .service-desc {
    font-size: 0.85rem;
    line-height: 1.7;
    color: var(--muted);
    margin-bottom: 2rem;
    max-width: 360px;
  }
  .service-card:hover .service-desc { color: #ccc; }
  .service-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .service-tags span {
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    border: 1px solid var(--fg);
    padding: 0.25rem 0.6rem;
  }
  .service-corner {
    position: absolute;
    bottom: 0; right: 0;
    width: 40px; height: 40px;
    border-left: 2px solid var(--fg);
    border-top: 2px solid var(--fg);
    transition: border-color 0.4s;
  }

  /* ===== APPROACH ===== */
  .approach {
    padding: 8rem 0;
    border-top: 2px solid var(--fg);
  }
  .approach-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 0 3rem;
    align-items: start;
  }
  .approach-quote {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3.5rem);
    line-height: 1.15;
    position: sticky;
    top: 8rem;
    border-left: 4px solid var(--accent);
    padding-left: 2rem;
  }
  .approach-step {
    display: flex;
    gap: 1.5rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(26,26,26,0.15);
  }
  .step-marker {
    font-family: var(--font-display);
    font-size: 1.5rem;
    color: var(--accent);
    flex-shrink: 0;
    line-height: 1;
    padding-top: 0.2rem;
  }
  .step-content h4 {
    font-family: var(--font-display);
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
  }
  .step-content p {
    font-size: 0.85rem;
    line-height: 1.7;
    color: var(--muted);
  }

  /* ===== STATS ===== */
  .stats {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 6rem 3rem;
    border-top: 2px solid var(--fg);
    border-bottom: 2px solid var(--fg);
    background: var(--fg);
    color: var(--bg);
  }
  .stat { text-align: center; }
  .stat-number {
    font-family: var(--font-display);
    font-size: clamp(3rem, 7vw, 5rem);
    display: block;
    line-height: 1;
    color: var(--accent);
  }
  .stat-suffix {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: var(--accent);
  }
  .stat-label {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    display: block;
    margin-top: 0.5rem;
    color: #999;
  }
  .stat-divider {
    width: 1px;
    height: 60px;
    background: rgba(245,240,235,0.2);
  }

  /* ===== CTA ===== */
  .cta {
    padding: 10rem 3rem;
    position: relative;
    overflow: hidden;
  }
  .cta-inner { position: relative; z-index: 2; }
  .cta-title {
    font-family: var(--font-display);
    font-size: clamp(6rem, 18vw, 18rem);
    line-height: 0.85;
    margin-bottom: 2rem;
  }
  .cta-dot { color: var(--accent); }
  .cta-desc {
    font-size: 1rem;
    line-height: 1.7;
    max-width: 500px;
    margin-bottom: 3rem;
    color: var(--muted);
  }
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    border: 2px solid var(--fg);
    padding: 1.2rem 2.5rem;
    font-family: var(--font-body);
    font-size: 0.8rem;
    letter-spacing: 0.15em;
    transition: all 0.4s cubic-bezier(0.25, 0, 0, 1);
    position: relative;
    overflow: hidden;
  }
  .cta-button::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: var(--accent);
    transform: translateX(-101%);
    transition: transform 0.4s cubic-bezier(0.25, 0, 0, 1);
    z-index: 0;
  }
  .cta-button:hover::before { transform: translateX(0); }
  .cta-button:hover { border-color: var(--accent); color: #fff; }
  .cta-button-text, .cta-button-arrow { position: relative; z-index: 1; }
  .cta-button-arrow {
    font-size: 1.2rem;
    transition: transform 0.4s;
  }
  .cta-button:hover .cta-button-arrow { transform: translateX(5px); }

  .cta-decoration {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
  .cta-circle {
    width: 300px; height: 300px;
    border: 2px solid rgba(26,26,26,0.08);
    border-radius: 50%;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    animation: pulseCircle 4s ease-in-out infinite;
  }
  .cta-circle--2 {
    width: 450px; height: 450px;
    animation-delay: 0.5s;
  }
  .cta-circle--3 {
    width: 600px; height: 600px;
    animation-delay: 1s;
  }
  @keyframes pulseCircle {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.5; }
  }

  /* ===== FOOTER ===== */
  footer {
    padding: 3rem;
    border-top: 2px solid var(--fg);
  }
  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }
  .footer-brand {
    font-family: var(--font-body);
    font-size: 1.1rem;
    font-weight: 700;
  }
  .footer-links { display: flex; gap: 2rem; }
  .footer-links a {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    transition: color 0.3s;
  }
  .footer-links a:hover { color: var(--accent); }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    color: var(--muted);
  }

  /* ===== SCROLL REVEAL ===== */
  .service-card,
  .approach-step,
  .stat {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .service-card.revealed,
  .approach-step.revealed,
  .stat.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .nav-right { display: none; }
    .hero { padding: 6rem 1.5rem 3rem; }
    .hero-stamp { display: none; }
    .hero-bottom { flex-direction: column; gap: 2rem; }
    .hero-scroll { display: none; }
    .section-header { padding: 0 1.5rem; }
    .services-grid { grid-template-columns: 1fr; padding: 0 1.5rem; }
    .approach-content { grid-template-columns: 1fr; padding: 0 1.5rem; }
    .approach-quote { position: static; margin-bottom: 2rem; }
    .stats { flex-wrap: wrap; gap: 2rem; }
    .stat-divider { display: none; }
    .cta { padding: 6rem 1.5rem; }
    .cta-decoration { display: none; }
    footer { padding: 2rem 1.5rem; }
    .footer-bottom { flex-direction: column; gap: 0.5rem; }
  }
</style>

<script>
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .approach-step, .stat').forEach(el => {
    observer.observe(el);
  });

  // Stat counter
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const target = parseInt(el.dataset.target || '0');
        if (target === 0) return;
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = target.toString();
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current).toString();
          }
        }, 16);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(el => {
    statObserver.observe(el);
  });
</script>

</body>
</html>
```
