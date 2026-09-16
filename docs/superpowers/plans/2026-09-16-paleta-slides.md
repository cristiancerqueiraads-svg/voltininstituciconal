# Paleta VOLTIN (slides 1–5) — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aplicar as cores dos slides `motivacao/slide1..5.jpeg` ao site, mudando apenas paleta/CSS (sem alterar layout).

**Architecture:** Tudo em `css/style.css` via tokens do `:root` + overrides por seção. HTML recebe apenas classes modificadoras de cor (`section--green`, `service-card--orange/--green`). Verificação por screenshot (sem framework de testes — site estático).

**Tech Stack:** CSS puro, HTML, Playwright CLI para screenshots.

**Spec:** `docs/superpowers/specs/2026-09-16-paleta-slides-design.md`

---

### Task 1: Tokens da paleta + base

**Files:**
- Modify: `css/style.css:8-46` (`:root`), `css/style.css:66-71` (headings)

- [ ] **Step 1: Atualizar `:root`**

```css
  /* Verde VOLTIN */
  --green-dark: #0A2A20;      /* era #1A3C2F — slide3/4/5 */
  --green-medium: #006B3A;    /* era #2D5A48 — slide2 */
  --green-light: #E8F0EC;
```

```css
  /* Laranja VOLTIN */
  --orange: #F2680F;          /* era #F26419 — slide1/5 */
  --orange-hover: #D95B0B;
```

Adicionar após o bloco laranja:

```css
  /* Navy VOLTIN (títulos sobre claro) */
  --navy: #0C2434;
```

- [ ] **Step 2: Headings base usam navy**

Em `h1, h2, h3, h4` trocar `color: #000;` por `color: var(--navy);`.

- [ ] **Step 3: Commit**

```bash
git add css/style.css && git commit -m "css: paleta dos slides (tokens root + navy nos headings)"
```

---

### Task 2: Hero + header sobre verde profundo

**Files:**
- Modify: `css/style.css` (`.hero`, `.hero__title`, `.hero__subtitle`, `.hero__trust`, `.hero__image::before`, `.btn--outline`)

- [ ] **Step 1: Hero escuro**

```css
.hero { background: var(--green-dark); }
.hero__title { color: #fff; }
.hero__subtitle { color: rgba(255,255,255,0.75); }
.hero__trust { color: rgba(255,255,255,0.55); }
.hero__image::before { background: var(--green-medium); }
```

- [ ] **Step 2: Botão outline legível no escuro**

```css
.btn--outline { background: transparent; color: #fff; border-color: rgba(255,255,255,0.4); }
.btn--outline:hover { background: #fff; color: var(--navy); }
```

- [ ] **Step 3: Commit**

```bash
git add css/style.css && git commit -m "css: hero e header sobre verde profundo"
```

---

### Task 3: Serviços — fundo verde profundo + acentos nos cards

**Files:**
- Modify: `index.html:156` (classe da seção), `index.html:163,178` (classes dos cards)
- Modify: `css/style.css` (`.service-card`, `.service-card__icon`)

- [ ] **Step 1: HTML — trocar `section--alt` por `section--green` na seção #servicos e adicionar modificador nos cards**

```html
<section class="section section--green" id="servicos">
...
<article class="service-card service-card--orange reveal">   <!-- Climatização -->
<article class="service-card service-card--green reveal">    <!-- Elétrica -->
```

- [ ] **Step 2: CSS — cards brancos com navy + barra de acento no topo**

```css
.service-card { position: relative; overflow: hidden; }
.service-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 6px;
  background: var(--orange);
}
.service-card--green::before { background: var(--green-medium); }
.service-card h3 { color: var(--navy); }
.service-card p { color: var(--text-secondary); }
.service-card--orange .service-card__icon { background: var(--orange-soft); color: var(--orange); }
.service-card--green .service-card__icon { background: rgba(0,107,58,0.1); color: var(--green-medium); }
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/style.css && git commit -m "css+html: seção de serviços com fundo verde profundo e acentos laranja/verde"
```

---

### Task 4: Diferenciais — verde profundo com cards translúcidos (slide3)

**Files:**
- Modify: `index.html:198` (classe da seção)
- Modify: `css/style.css` (`.feature`, `.feature__icon`)

- [ ] **Step 1: HTML** — `<section class="section section--green" id="diferenciais">`

- [ ] **Step 2: CSS**

```css
.feature { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.12); }
.feature:hover { border-color: rgba(242,104,15,0.5); }
.feature__icon { background: rgba(242,104,15,0.14); color: var(--orange); }
.feature h3 { color: #fff; }
.feature p { color: rgba(255,255,255,0.7); }
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/style.css && git commit -m "css+html: diferenciais com cards translúcidos sobre verde (slide3)"
```

---

### Task 5: FAQ — verde profundo (slide4)

**Files:**
- Modify: `index.html:394` (classe da seção)
- Modify: `css/style.css` (`.faq__item`, `.faq__question`, `.faq__answer p`)

- [ ] **Step 1: HTML** — `<section class="section section--green" id="duvidas">`

- [ ] **Step 2: CSS**

```css
.faq__item { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.15); }
.faq__item--open { border-color: var(--orange); }
.faq__question { color: #fff; }
.faq__answer p { color: rgba(255,255,255,0.75); }
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/style.css && git commit -m "css+html: FAQ sobre verde profundo (slide4)"
```

---

### Task 6: CTA final laranja + footer (slide5)

**Files:**
- Modify: `css/style.css` (`.final-cta`, `.btn--whatsapp`, `.footer h4`)

- [ ] **Step 1: CTA final**

```css
.final-cta { background: var(--orange); }
.final-cta h2 { color: var(--navy); }
.final-cta p { color: rgba(12,36,52,0.85); }
.final-cta small { color: rgba(12,36,52,0.7); }
```

- [ ] **Step 2: Botão WhatsApp do CTA em verde profundo (não mexer no float)**

```css
.final-cta .btn--whatsapp { background: var(--green-dark); box-shadow: 0 4px 16px rgba(0,0,0,0.2); }
.final-cta .btn--whatsapp:hover { background: var(--green-medium); }
```

- [ ] **Step 3: Footer — títulos de coluna laranja**

```css
.footer h4 { color: var(--orange); }
```

- [ ] **Step 4: Commit**

```bash
git add css/style.css && git commit -m "css: CTA final laranja e footer verde com títulos laranja (slide5)"
```

---

### Task 7: Verificação visual completa

- [ ] **Step 1: Screenshot da página inteira**

```bash
npx -y playwright-cli screenshot --full-page index.html /tmp/opencode/voltin-after.png
```

(ou `python3 -m http.server` + playwright; usar o que estiver disponível)

- [ ] **Step 2: Conferir contra os slides**

Checklist: hero verde ✓ serviços verde+acentos ✓ diferenciais translúcido ✓ FAQ verde ✓ CTA laranja com botão verde ✓ footer laranja/navy ✓ contraste de todos os textos ✓

- [ ] **Step 3: Ajustes finos se necessário + commit final**
