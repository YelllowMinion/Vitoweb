/* style.css | Portofolio Vito Brata Sadewa */

/* ---------- Token ---------- */
:root {
    --bg: #0E1013;
    --surface: #161A20;
    --line: #262B33;
    --text: #ECEAE4;
    --muted: #9BA1AB;
    --coral: #FF7A59;
    --teal: #5EC4B6;

    --font-display: 'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif;
    --font-body: 'DM Sans', 'Segoe UI', system-ui, sans-serif;

    --wrap: 1120px;
    --header-h: 64px;
}

/* ---------- Dasar ---------- */
*, *::before, *::after {
    box-sizing: border-box;
}

html {
    -webkit-text-size-adjust: 100%;
    scroll-padding-top: calc(var(--header-h) + 16px);
}

@media (prefers-reduced-motion: no-preference) {
    html {
        scroll-behavior: smooth;
    }
}

body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 1.0625rem;
    line-height: 1.65;
}

h1, h2, h3, h4, p, ul, ol, figure, blockquote {
    margin: 0;
}

ul, ol {
    padding: 0;
    list-style: none;
}

img, video {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
}

:focus-visible {
    outline: 3px solid var(--teal);
    outline-offset: 3px;
}

.wrap {
    width: 100%;
    max-width: var(--wrap);
    margin: 0 auto;
    padding: 0 1.25rem;
}

.skip-link {
    position: absolute;
    left: 1rem;
    top: -4rem;
    z-index: 2000;
    padding: 0.6rem 1rem;
    background: var(--teal);
    color: var(--bg);
    font-weight: 700;
    border-radius: 6px;
    text-decoration: none;
}

.skip-link:focus {
    top: 0.75rem;
}

/* ---------- Header & navigasi ---------- */
.site-header {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 1000;
    height: var(--header-h);
    background: rgba(14, 16, 19, 0.88);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--line);
}

.site-header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: var(--wrap);
    margin: 0 auto;
    padding: 0 1.25rem;
}

.brand {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 1.125rem;
    letter-spacing: -0.01em;
    text-decoration: none;
}

.site-nav {
    display: flex;
    gap: 0.25rem;
}

.site-nav a {
    padding: 0.5rem 0.9rem;
    color: var(--muted);
    font-weight: 500;
    text-decoration: none;
}

.site-nav a:hover {
    color: var(--text);
}

.site-nav a[aria-current="true"] {
    color: var(--text);
    text-decoration: underline;
    text-decoration-color: var(--coral);
    text-decoration-thickness: 2px;
    text-underline-offset: 8px;
}

.nav-toggle {
    display: none;
    width: 44px;
    height: 44px;
    padding: 0;
    background: none;
    border: 0;
    cursor: pointer;
}

.nav-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    margin: 5px auto;
    background: var(--text);
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.nav-toggle[aria-expanded="true"] span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.nav-toggle[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
}

.nav-toggle[aria-expanded="true"] span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

/* ---------- Hero ---------- */
.hero {
    padding: calc(var(--header-h) + 4rem) 0 5.5rem;
}

.hero__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
    gap: 4rem;
    align-items: center;
}

.hero h1 {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(2.75rem, 7.5vw, 5.75rem);
    line-height: 0.98;
    letter-spacing: -0.035em;
}

.hero__role {
    margin-top: 1.25rem;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.25rem, 2.4vw, 1.6rem);
    color: var(--coral);
}

.hero__lead {
    max-width: 34rem;
    margin-top: 1.5rem;
    font-size: 1.1875rem;
    color: var(--muted);
}

.hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2.25rem;
}

.hero__photo {
    position: relative;
    justify-self: end;
    width: min(100%, 380px);
}

.hero__photo::before {
    content: '';
    position: absolute;
    inset: 14px 14px -14px -14px;
    border: 2px solid var(--coral);
    border-radius: 28px;
}

.hero__photo img {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1.1;
    object-fit: cover;
    border-radius: 28px;
    background: var(--surface);
}

/* Satu momen masuk saat halaman dibuka */
@media (prefers-reduced-motion: no-preference) {
    .hero__text > *,
    .hero__photo {
        opacity: 0;
        animation: rise 0.7s ease forwards;
    }

    .hero__role { animation-delay: 0.08s; }
    .hero__lead { animation-delay: 0.16s; }
    .hero__actions { animation-delay: 0.24s; }
    .hero__photo { animation-delay: 0.2s; }
}

@keyframes rise {
    from {
        opacity: 0;
        transform: translateY(14px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ---------- Tombol ---------- */
.btn {
    display: inline-block;
    padding: 0.85rem 1.6rem;
    border-radius: 999px;
    border: 2px solid transparent;
    font-weight: 700;
    text-decoration: none;
}

.btn--primary {
    background: var(--coral);
    color: var(--bg);
}

.btn--primary:hover {
    background: #ff8f73;
}

.btn--ghost {
    border-color: var(--line);
    color: var(--text);
}

.btn--ghost:hover {
    border-color: var(--muted);
}

/* ---------- Section umum ---------- */
.section {
    padding: 5.5rem 0;
    border-top: 1px solid var(--line);
}

.section__grid {
    display: grid;
    grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
    gap: 3rem;
}

.section__title {
    align-self: start;
    position: sticky;
    top: calc(var(--header-h) + 1.5rem);
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.2;
    letter-spacing: -0.01em;
}

.section__title--top {
    position: static;
    margin-bottom: 2.5rem;
}

.section__body p {
    max-width: 62ch;
}

.tier-title {
    margin-bottom: 1rem;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.25rem;
}

.tier-title--support {
    margin-top: 3rem;
}

/* ---------- Karya ---------- */
.works {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 3.5rem 1.5rem;
    align-items: start;
}

.work--wide {
    grid-column: span 7;
}

.work--narrow {
    grid-column: span 5;
}

.work__media {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
    background-color: var(--surface);
    background-image: repeating-linear-gradient(135deg, transparent 0 14px, rgba(255, 255, 255, 0.03) 14px 15px);
    border: 1px solid var(--line);
    border-radius: 6px;
    color: inherit;
    cursor: zoom-in;
}

.work__media--landscape {
    aspect-ratio: 16 / 10;
}

.work__media--portrait {
    aspect-ratio: 4 / 5;
}

.work__media img,
.work__media video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.work__media--video {
    cursor: default;
    background: #000;
}

.work__media.is-missing {
    cursor: default;
}

.work__media.is-missing img {
    opacity: 0;
}

.work__media.is-missing::after {
    content: 'Gambar belum ditambahkan';
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: var(--muted);
    font-size: 0.9rem;
}

.work figcaption {
    margin-top: 1rem;
}

.work h3 {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.25;
}

.work__meta {
    margin-top: 0.25rem;
    color: var(--muted);
    font-size: 0.975rem;
}

.work__social {
    padding: 1.75rem;
    border: 1px solid var(--line);
    border-radius: 18px;
}

.work__social p {
    margin-top: 0.5rem;
    color: var(--muted);
}

.social-list {
    margin-top: 1rem;
}

.social-list li {
    padding: 0.6rem 0;
    border-top: 1px solid var(--line);
    word-break: break-word;
}

.social-list a {
    color: var(--teal);
    text-underline-offset: 3px;
}

/* ---------- Keahlian ---------- */
.core-list {
    border-bottom: 1px solid var(--line);
}

.core {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 1.25rem;
    padding: 1.25rem 0;
    border-top: 1px solid var(--line);
}

.core__icon {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: var(--coral);
    color: var(--bg);
    font-size: 1.4rem;
}

.core h4 {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.25rem;
}

.core__text p {
    margin-top: 0.1rem;
    color: var(--muted);
    font-size: 0.975rem;
}

.badge {
    padding: 0.3rem 0.85rem;
    border-radius: 999px;
    font-size: 0.875rem;
    font-weight: 700;
    white-space: nowrap;
}

.badge--core {
    background: rgba(255, 122, 89, 0.14);
    border: 1px solid rgba(255, 122, 89, 0.45);
    color: var(--coral);
}

.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.chip {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    padding: 0.55rem 1.1rem;
    border: 1px solid rgba(94, 196, 182, 0.5);
    border-radius: 999px;
    font-size: 0.975rem;
}

.chip i {
    color: var(--teal);
}

.chip small {
    margin-left: 0.35rem;
    color: var(--muted);
    font-size: 0.85rem;
}

/* ---------- Cara kerja ---------- */
.steps {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1.5rem;
    counter-reset: step;
}

.steps li {
    counter-increment: step;
    padding-top: 1rem;
    border-top: 2px solid var(--line);
}

.steps li::before {
    content: counter(step);
    display: block;
    margin-bottom: 0.5rem;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 1.75rem;
    line-height: 1;
    color: var(--coral);
}

.steps h3 {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.1rem;
}

.steps p {
    margin-top: 0.35rem;
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.5;
}

/* ---------- Pengalaman ---------- */
.roles li {
    display: grid;
    grid-template-columns: 8rem minmax(0, 1fr);
    gap: 1.5rem;
    padding: 1.25rem 0;
    border-top: 1px solid var(--line);
}

.roles li:last-child {
    border-bottom: 1px solid var(--line);
}

.roles__year {
    color: var(--coral);
    font-weight: 700;
    font-variant-numeric: tabular-nums;
}

.roles h3 {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.2rem;
}

.roles p {
    margin-top: 0.25rem;
    color: var(--muted);
}

.results li {
    position: relative;
    padding: 0.4rem 0 0.4rem 1.5rem;
    color: var(--muted);
}

.results li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 1.1rem;
    width: 0.6rem;
    height: 2px;
    background: var(--teal);
}

/* ---------- Tentang ---------- */
.about {
    display: grid;
    grid-template-columns: minmax(0, 240px) minmax(0, 1fr);
    gap: 2.5rem;
    align-items: start;
}

.about__photo img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 18px;
    background: var(--surface);
}

.about__text p + p {
    margin-top: 1rem;
}

.about__text p {
    color: var(--muted);
}

.education li {
    display: grid;
    grid-template-columns: 6.5rem minmax(0, 1fr);
    gap: 1rem;
    padding: 0.6rem 0;
    border-top: 1px solid var(--line);
    color: var(--text);
}

.education span {
    color: var(--coral);
    font-weight: 700;
    font-variant-numeric: tabular-nums;
}

/* ---------- Testimoni ---------- */
.quote + .quote {
    margin-top: 2.5rem;
}

.quote blockquote {
    padding-left: 1.5rem;
    border-left: 3px solid var(--coral);
}

.quote blockquote p {
    max-width: 58ch;
    font-size: 1.2rem;
    line-height: 1.6;
}

.quote figcaption {
    margin-top: 0.75rem;
    padding-left: 1.5rem;
    color: var(--muted);
    font-size: 0.975rem;
}

/* ---------- Kontak ---------- */
.contact-links li {
    border-top: 1px solid var(--line);
}

.contact-links li:last-child {
    border-bottom: 1px solid var(--line);
}

.contact-links a {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    font-size: 1.15rem;
    text-decoration: none;
    word-break: break-word;
}

.contact-links a:hover {
    color: var(--coral);
}

.contact-links i {
    width: 1.5rem;
    text-align: center;
    color: var(--teal);
}

.contact-location {
    margin-top: 1.25rem;
    color: var(--muted);
}

/* ---------- Footer ---------- */
.site-footer {
    padding: 2rem 0 3rem;
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-size: 0.9rem;
}

/* ---------- Lightbox ---------- */
.lightbox {
    max-width: min(92vw, 1000px);
    padding: 0;
    background: var(--surface);
    color: var(--text);
    border: 1px solid var(--line);
    border-radius: 12px;
}

.lightbox::backdrop {
    background: rgba(0, 0, 0, 0.82);
}

.lightbox img {
    width: 100%;
    max-height: 78vh;
    object-fit: contain;
    background: #000;
}

.lightbox__caption {
    padding: 0.9rem 1.25rem;
    color: var(--muted);
}

.lightbox__close {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    z-index: 1;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    background: rgba(14, 16, 19, 0.8);
    color: var(--text);
    font-size: 1.1rem;
    cursor: pointer;
}

/* ---------- Responsif ---------- */
@media (max-width: 960px) {
    .hero__grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .hero__photo {
        justify-self: start;
        width: min(100%, 300px);
    }

    .section__grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .section__title {
        position: static;
    }

    .steps {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 720px) {
    .nav-toggle {
        display: block;
    }

    .site-nav {
        position: absolute;
        top: var(--header-h);
        left: 0;
        right: 0;
        display: none;
        flex-direction: column;
        gap: 0;
        padding: 0.5rem 1.25rem 1rem;
        background: var(--bg);
        border-bottom: 1px solid var(--line);
    }

    .site-nav.is-open {
        display: flex;
    }

    .site-nav a {
        padding: 0.85rem 0;
    }

    .section {
        padding: 4rem 0;
    }

    .works {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .work--wide,
    .work--narrow {
        grid-column: auto;
    }

    .core {
        grid-template-columns: auto minmax(0, 1fr);
    }

    .core .badge {
        grid-column: 2;
        justify-self: start;
    }

    .roles li {
        grid-template-columns: 1fr;
        gap: 0.25rem;
    }

    .about {
        grid-template-columns: 1fr;
    }

    .about__photo {
        max-width: 240px;
    }

    .steps {
        grid-template-columns: 1fr;
    }
}

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation: none !important;
        transition: none !important;
    }
}
