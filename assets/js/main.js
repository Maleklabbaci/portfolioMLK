/* ============================================================
   PORTFOLIO v2 — contenu réel issu de RESUMEanglais.pdf
   Vanilla JS, aucune dépendance.
   ============================================================ */
(() => {
  'use strict';

  const SITE = window.SITE || {};
  const root = document.documentElement;
  root.classList.add('js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer:fine)').matches;

  /* ---------------------------------------------------------
     1. Textes FR / EN (faits réels du CV uniquement)
     --------------------------------------------------------- */
  const I18N = {
    fr: {
      'nav.index':'Index','nav.work':'Travaux','nav.portfolio':'Portfolio','nav.about':'À propos','nav.contact':'Contact','nav.cv':'CV',
      'hero.sub':'Développement · IA & automatisation · Growth · Direction artistique',
      'hero.scroll':'DÉFILER',
      'index.label':'QUATRE MÉTIERS','index.note':"Survole un pôle pour l'aperçu · clique pour voir le projet",'index.noteTouch':'Touche un pôle pour voir le projet',
      'p1':'Développement Web & Logiciel','p2':'IA & Automatisation','p3':'Marketing Digital, Growth & E-commerce','p4':'Direction Artistique & Multimédia',
      'work.label':'PROJETS RÉELS · iVISION AGENCY','work.more':'Voir le projet',
      'cat1':'DÉVELOPPEMENT & SAAS','cat2':'IA & AUTOMATISATION','cat3':'GROWTH & E-COMMERCE','cat4':'DIRECTION ARTISTIQUE',
      'c1':'Site vitrine immobilier pour Dubaï : présentation immersive, opportunités, journal et prise de contact.',
      'c2':'Assistant de discussion pour entreprises : réponses en français et darija, démo et espace personnel.',
      'c3':'Programme de fidélité digital : QR code intelligent, validation sécurisée et notifications en temps réel.',
      'c4':'Affiches match day et direction visuelle pour le club : compositing, lumière et typographie.',
      'about.tag':'À PROPOS','about.l1':'Un profil,','about.l2':'quatre métiers.',
      'about.text':"CEO & Founder d'iVISION Agency — également CEO de Sawtify et eFOLIO. Développement SaaS, automatisation IA et croissance de plus de 40 comptes clients. Direction artistique et production visuelle depuis 2018.",
      'cv.toggle':'Parcours & compétences','cv.hide':'Masquer le parcours','cv.exp':'EXPÉRIENCE',
      'cv.e1':'Fondateur & Marketing Manager · iVISION Agency (40+ comptes clients)',
      'cv.e2':'Développeur freelance & builder SaaS · applications web sur mesure',
      'cv.e3date':'Juin 2024 —','cv.e3':'Art Director · MS Cherchell (club de football)',
      'cv.e4':'Graphiste · JIL-FM (radio nationale)',
      'cv.e5':'Media Manager · Club MSC',
      'cv.e6':'Graphiste, vidéaste & monteur freelance',
      'cv.projectsLabel':'PROJETS','cv.projects':'RAWDHA+ · Fidali · MOVESMART (Dubaï) · Influnzy',
      'cv.skills':'COMPÉTENCES',
      'cv.s1t':'Dev','cv.s1':'React · TypeScript · Next.js · Vite · Tailwind · Python · Supabase · PostgreSQL · REST APIs · GitHub · Vercel',
      'cv.s2t':'IA','cv.s2':'AI agents · prompt engineering · fine-tuning · RAG · Claude Code · LLM APIs · Edge Functions · pg_cron · webhooks',
      'cv.s3t':'Growth','cv.s3':'Meta Ads · GA4 · tunnels de conversion · Shopify · cash on delivery · Fidali',
      'cv.s4t':'Création','cv.s4':'Direction artistique · identité visuelle · UI/UX · photo · vidéo · Photoshop · Illustrator · InDesign · Premiere Pro · After Effects · CapCut · Sony Vegas',
      'cv.edu':'FORMATION & LANGUES',
      'cv.edu1':'Diplôme de technicien supérieur en informatique, gestion de bases de données — INSFP Bousmail, 2021',
      'cv.edu2':"Certificat de stage en design graphique & montage vidéo — Ministère de l'Enseignement supérieur, 2022",
      'cv.edu3':'Claude 101 & Claude Code in Action — Anthropic Education',
      'cv.lang':'Arabe : natif · Français : courant · Anglais : professionnel',
      'cv.linksLabel':'PORTFOLIOS','cv.link1':'Sites web ↗','cv.link2':'Social & vidéo ↗',
      'folio.label':'PORTFOLIO — iVISION AGENCY','folio.meta':'CAPTURES RÉELLES',
      'folio.t1':'Des projets,','folio.t2':'en vrai.',
      'folio.intro':'Une sélection de sites et de créations sortis du studio iVISION. Clique sur une capture pour ouvrir le projet.',
      'folio.btn1':'Tout le portfolio sites web','folio.btn2':'Portfolio social & vidéo','folio.visit':'Voir le projet ↗',
      'cv.download':'Télécharger le CV (PDF, anglais)',
      'contact.tag':'CONTACT','contact.title':'Parlons.','contact.phone':'Ou au',
      'footer.top':'Retour en haut','footer.note':'Fondateur & CEO · iVISION · Sawtify · eFOLIO','footer.tagline':'Code · IA · Growth · Image',
      'ui.localtime':'HEURE LOCALE','wa.label':'Discute avec moi'
    },
    en: {
      'nav.index':'Index','nav.work':'Work','nav.portfolio':'Portfolio','nav.about':'About','nav.contact':'Contact','nav.cv':'CV',
      'hero.sub':'Development · AI & automation · Growth · Art direction',
      'hero.scroll':'SCROLL',
      'index.label':'FOUR CRAFTS','index.note':'Hover a discipline for a preview · click to see the project','index.noteTouch':'Tap a discipline to see the project',
      'p1':'Web & Software Development','p2':'AI & Automation','p3':'Digital Marketing, Growth & E-commerce','p4':'Art Direction & Multimedia',
      'work.label':'REAL PROJECTS · iVISION AGENCY','work.more':'View project',
      'cat1':'DEVELOPMENT & SAAS','cat2':'AI & AUTOMATION','cat3':'GROWTH & E-COMMERCE','cat4':'ART DIRECTION',
      'c1':'Dubai real-estate website: immersive hero, opportunities, journal and contact.',
      'c2':'AI chat assistant for businesses: replies in French and Darja, demo and client area.',
      'c3':'Digital loyalty product: smart QR codes, secure validation and real-time notifications.',
      'c4':'Match-day posters and visual direction for the club: compositing, light and typography.',
      'about.tag':'ABOUT','about.l1':'One profile,','about.l2':'four crafts.',
      'about.text':'CEO & Founder of iVISION Agency — also CEO of Sawtify and eFOLIO. SaaS development, AI automation and growth for 40+ client accounts. Art direction and visual production since 2018.',
      'cv.toggle':'Background & skills','cv.hide':'Hide background','cv.exp':'EXPERIENCE',
      'cv.e1':'Founder & Marketing Manager · iVISION Agency (40+ client accounts)',
      'cv.e2':'Freelance Developer & SaaS Builder · custom web applications',
      'cv.e3date':'June 2024 —','cv.e3':'Art Director · MS Cherchell (football club)',
      'cv.e4':'Graphic Designer · JIL-FM (national radio)',
      'cv.e5':'Media Manager · Club MSC',
      'cv.e6':'Freelance Graphic Designer, Video Editor & Videographer',
      'cv.projectsLabel':'PROJECTS','cv.projects':'RAWDHA+ · Fidali · MOVESMART (Dubai) · Influnzy',
      'cv.skills':'SKILLS',
      'cv.s1t':'Dev','cv.s1':'React · TypeScript · Next.js · Vite · Tailwind · Python · Supabase · PostgreSQL · REST APIs · GitHub · Vercel',
      'cv.s2t':'AI','cv.s2':'AI agents · prompt engineering · fine-tuning · RAG · Claude Code · LLM APIs · Edge Functions · pg_cron · webhooks',
      'cv.s3t':'Growth','cv.s3':'Meta Ads · GA4 · conversion funnels · Shopify · cash on delivery · Fidali',
      'cv.s4t':'Creative','cv.s4':'Art direction · visual identity · UI/UX · photography · video · Photoshop · Illustrator · InDesign · Premiere Pro · After Effects · CapCut · Sony Vegas',
      'cv.edu':'EDUCATION & LANGUAGES',
      'cv.edu1':'Higher Technician Diploma in Computer Science, Database Management — INSFP Bousmail, 2021',
      'cv.edu2':'Internship certificate in graphic design & video editing — Ministry of Higher Education, Algeria, 2022',
      'cv.edu3':'Claude 101 & Claude Code in Action — Anthropic Education',
      'cv.lang':'Arabic: native · French: fluent · English: professional',
      'cv.linksLabel':'PORTFOLIOS','cv.link1':'Websites ↗','cv.link2':'Social & video ↗',
      'folio.label':'PORTFOLIO — iVISION AGENCY','folio.meta':'REAL SCREENSHOTS',
      'folio.t1':'Real projects,','folio.t2':'in the wild.',
      'folio.intro':'A selection of sites and creative work from the iVISION studio. Click a screenshot to open the project.',
      'folio.btn1':'Full web portfolio','folio.btn2':'Social & video portfolio','folio.visit':'View project ↗',
      'cv.download':'Download résumé (PDF)',
      'contact.tag':'CONTACT','contact.title':'Let’s talk.','contact.phone':'Or call',
      'footer.top':'Back to top','footer.note':'Founder & CEO · iVISION · Sawtify · eFOLIO','footer.tagline':'Code · AI · Growth · Image',
      'ui.localtime':'LOCAL TIME','wa.label':'Chat with me'
    }
  };

  let lang = 'fr';
  try { lang = localStorage.getItem('pf2-lang') === 'en' ? 'en' : 'fr'; } catch (e) {}

  function applyLang(next) {
    lang = next;
    root.lang = lang;
    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key in dict) el.textContent = dict[key];
    });
    const panel = document.getElementById('cvPanel');
    if (panel && panel.classList.contains('is-open')) {
      const lbl = document.querySelector('.cv-toggle__label');
      if (lbl) lbl.textContent = dict['cv.hide'];
    }
    ['langToggle','menuLangToggle'].forEach(id => {
      const b = document.getElementById(id);
      if (!b) return;
      b.textContent = lang === 'fr' ? 'EN' : 'FR';
      const label = lang === 'fr' ? 'Switch to English' : 'Passer en français';
      b.title = label; b.setAttribute('aria-label', label);
    });
    updateClock();
    try { localStorage.setItem('pf2-lang', lang); } catch (e) {}
  }

  /* ---------------------------------------------------------
     2. Identité & liens (config.js)
     --------------------------------------------------------- */
  function bindConfig() {
    const parts = (SITE.name || '').trim().split(/\s+/).filter(Boolean);
    const firstName = parts[0] || '';
    const lastName = parts.length > 1 ? parts.slice(1).join(' ') + '.' : '';
    const map = {
      name:SITE.name, role:SITE.role, email:SITE.email, location:SITE.location,
      year:SITE.year, phone:SITE.phone, firstName, lastName
    };
    document.querySelectorAll('[data-bind]').forEach(el => {
      const k = el.getAttribute('data-bind');
      if (map[k] !== undefined) el.textContent = map[k];
    });
    document.querySelectorAll('[data-bind-href]').forEach(el => {
      const k = el.getAttribute('data-bind-href');
      if (k === 'email') el.setAttribute('href', 'mailto:' + (SITE.email || '#'));
      else if (k === 'phoneHref') el.setAttribute('href', 'tel:' + (SITE.phoneHref || SITE.phone || ''));
      else if (k === 'cv') el.setAttribute('href', SITE.cv || 'assets/RESUMEanglais.pdf');
      else if (k === 'portfolioSites') el.setAttribute('href', SITE.portfolioSites || 'https://ivision.agency/');
      else if (k === 'portfolioSocial') el.setAttribute('href', SITE.portfolioSocial || 'https://ivision.agency/');
      else if (k === 'agency') el.setAttribute('href', SITE.agency || 'https://ivision.agency/');
    });
    if (SITE.seoTitle) document.title = SITE.seoTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && SITE.seoDescription) meta.setAttribute('content', SITE.seoDescription);

    const box = document.getElementById('socials');
    if (box && Array.isArray(SITE.socials)) {
      box.innerHTML = '';
      SITE.socials.forEach(s => {
        const a = document.createElement('a');
        a.href = s.url || '#';
        a.textContent = s.label;
        if (s.download) a.setAttribute('download', '');
        else if (s.url && /^https?:/.test(s.url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
        box.appendChild(a);
      });
    }

    const grid = document.getElementById('captureGrid');
    if (grid && Array.isArray(SITE.captures)) {
      grid.innerHTML = '';
      SITE.captures.forEach(c => {
        const a = document.createElement('a');
        a.className = 'cap-card line';
        a.setAttribute('data-anim', '');
        a.href = c.url || '#';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        const frame = document.createElement('div');
        frame.className = 'cap-card__img';
        const im = document.createElement('img');
        im.src = 'assets/img/' + c.img;
        im.alt = 'Capture réelle du projet ' + c.label;
        im.loading = 'lazy';
        frame.appendChild(im);
        const tag = document.createElement('span');
        tag.className = 'shot__tag';
        tag.textContent = c.label;
        frame.appendChild(tag);
        const meta = document.createElement('div');
        meta.className = 'cap-card__meta';
        const strong = document.createElement('strong');
        strong.textContent = c.label;
        const span = document.createElement('span');
        span.setAttribute('data-i18n', 'folio.visit');
        span.textContent = I18N[lang]['folio.visit'];
        meta.append(strong, span);
        a.append(frame, meta);
        grid.appendChild(a);
      });
    }
  }
  bindConfig();

  /* ---------------------------------------------------------
     3. Header, progression, langue, menu
     --------------------------------------------------------- */
  /* Nom compact sur mobile (prénom seul) ou complet — piloté en inline pour rester robuste même si un vieux style.css est servi en cache */
  const brandFull = document.querySelector('.brand__full');
  const brandShort = document.querySelector('.brand__short');
  function syncBrandName() {
    if (!brandFull || !brandShort) return;
    const compact = window.matchMedia('(max-width:900px)').matches;
    brandFull.style.display = compact ? 'none' : '';
    brandShort.style.display = compact ? '' : 'none';
  }
  window.addEventListener('resize', syncBrandName, { passive:true });

  const header = document.getElementById('header');
  const bar = document.getElementById('progressBar');
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  const stage = document.getElementById('work');
  const heroImg = document.querySelector('.hero__media img');
  let ticking = false;

  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    if (heroImg && !reduceMotion && !window.matchMedia('(max-width:900px)').matches) {
      const hy = Math.min(y, window.innerHeight);
      heroImg.style.objectPosition = 'center ' + (48 + hy * 0.012).toFixed(2) + '%';
    }
    const menuOpen = menu.classList.contains('is-open');
    header.classList.toggle('is-solid', y > 40 || menuOpen);
    const sr = stage.getBoundingClientRect();
    header.classList.toggle('is-over-media', !menuOpen && sr.top <= 0 && sr.bottom > 96);
    updateStage();
    syncReveals();
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive:true });

  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? (lang === 'fr' ? 'Fermer le menu' : 'Close menu') : (lang === 'fr' ? 'Ouvrir le menu' : 'Open menu'));
    menu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    header.classList.toggle('is-solid', open || window.scrollY > 40);
    if (open) header.classList.remove('is-over-media');
  }
  menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  document.getElementById('langToggle').addEventListener('click', () => applyLang(lang === 'fr' ? 'en' : 'fr'));
  const menuLangBtn = document.getElementById('menuLangToggle');
  if (menuLangBtn) menuLangBtn.addEventListener('click', () => { applyLang(lang === 'fr' ? 'en' : 'fr'); setMenu(false); });

  /* ---------------------------------------------------------
     4. Parcours dépliable
     --------------------------------------------------------- */
  const cvToggle = document.getElementById('cvToggle');
  const cvPanel = document.getElementById('cvPanel');
  function setCv(open) {
    cvToggle.classList.toggle('is-open', open);
    cvToggle.setAttribute('aria-expanded', String(open));
    cvPanel.classList.toggle('is-open', open);
    cvPanel.inert = !open;
    cvPanel.setAttribute('aria-hidden', String(!open));
    const lbl = cvToggle.querySelector('.cv-toggle__label');
    if (lbl) lbl.textContent = open ? I18N[lang]['cv.hide'] : I18N[lang]['cv.toggle'];
  }
  cvToggle.addEventListener('click', () => setCv(!cvPanel.classList.contains('is-open')));

  /* ---------------------------------------------------------
     5. Index : aperçu au survol + saut vers le projet
     --------------------------------------------------------- */
  const rows = [...document.querySelectorAll('.index-row')];
  const preview = document.getElementById('preview');
  const previewImg = document.getElementById('previewImg');
  const images = ['real-movesmart.webp','real-jawebflow.webp','real-fidali.webp','real-msc.webp'];

  function goToStep(i, smooth) {
    if (window.matchMedia('(max-width:900px)').matches) {
      const items = document.querySelectorAll('.work-m__item');
      if (items[i]) {
        const top = items[i].getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(0, top), behavior: smooth && !reduceMotion ? 'smooth' : 'auto' });
      }
      return;
    }
    const total = stage.offsetHeight - window.innerHeight;
    const top = stage.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: Math.max(0, top + ((i + 0.12) / 4) * total), behavior: smooth && !reduceMotion ? 'smooth' : 'auto' });
  }
  rows.forEach(row => {
    const i = Number(row.dataset.index);
    row.querySelector('a').addEventListener('click', e => { e.preventDefault(); goToStep(i, true); });
    if (finePointer && !reduceMotion) {
      row.addEventListener('mouseenter', () => {
        previewImg.src = 'assets/img/' + images[i];
        preview.classList.add('is-on');
      });
      row.addEventListener('mouseleave', () => preview.classList.remove('is-on'));
      row.addEventListener('mousemove', e => {
        preview.style.left = e.clientX + 'px';
        preview.style.top = e.clientY + 'px';
      });
    }
  });

  /* ---------------------------------------------------------
     6. Galerie plein écran
     --------------------------------------------------------- */
  const figures = [...document.querySelectorAll('.stage__img')];
  const caps = [...document.querySelectorAll('.cap')];
  const num = document.getElementById('stageNum');
  const fill = document.getElementById('railFill');
  let current = -1;

  function updateStage() {
    if (!stage || reduceMotion || window.matchMedia('(max-width:900px)').matches) return;
    const rect = stage.getBoundingClientRect();
    const total = stage.offsetHeight - window.innerHeight;
    if (total <= 0 || rect.top > window.innerHeight || rect.bottom < 0) return;
    const p = Math.min(1, Math.max(0, -rect.top / total));
    const idx = Math.min(figures.length - 1, Math.floor(p * figures.length));
    if (idx !== current) {
      current = idx;
      figures.forEach((f, n) => f.classList.toggle('is-active', n === idx));
      caps.forEach((c, n) => c.classList.toggle('is-active', n === idx));
      if (num) {
        num.textContent = String(idx + 1).padStart(2, '0');
        if (!reduceMotion) {
          num.classList.remove('is-bump');
          void num.offsetWidth;
          num.classList.add('is-bump');
        }
      }
    }
    if (fill) fill.style.width = (p * 100).toFixed(1) + '%';
  }
  window.addEventListener('resize', updateStage);

  /* ---------------------------------------------------------
     7. Révélations + nav active
     --------------------------------------------------------- */
  const revealEls = [...document.querySelectorAll('[data-reveal], [data-anim], .index-row')];
  document.querySelectorAll('section, footer').forEach(sec => {
    [...sec.querySelectorAll('[data-anim]')].forEach((el, i) => {
      el.style.setProperty('--d', Math.min(i * 70, 350) + 'ms');
    });
  });
  function syncReveals() {
    revealEls.forEach(el => {
      if (el.classList.contains('is-visible') || el.offsetParent === null) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.15) el.classList.add('is-visible');
    });
  }
  function initSpotlight() {
    if (!finePointer || reduceMotion) return;
    document.querySelectorAll('.cap-card').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
      }, { passive:true });
    });
  }
  if ('IntersectionObserver' in window && !reduceMotion) {
    const rev = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
    }, { threshold:0.12, rootMargin:'0px 0px -6% 0px' });
    revealEls.forEach(el => rev.observe(el));
    window.addEventListener('resize', syncReveals, { passive:true });

    const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
    const navObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
      });
    }, { rootMargin:'-40% 0px -55% 0px' });
    ['index','work','portfolio','about','contact'].forEach(id => {
      const el = document.getElementById(id); if (el) navObs.observe(el);
    });
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------------------------------------------------------
     8. Heure locale
     --------------------------------------------------------- */
  function updateClock() {
    const el = document.getElementById('localTime');
    if (!el) return;
    try {
      const t = new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
        hour:'2-digit', minute:'2-digit', hour12:false, timeZone:SITE.timezone || 'Africa/Algiers'
      }).format(new Date());
      el.textContent = `${I18N[lang]['ui.localtime']} ${t}`;
    } catch (e) { el.textContent = ''; }
  }
  setInterval(updateClock, 30000);

  /* ---------------------------------------------------------
     9. Init
     --------------------------------------------------------- */
  initSpotlight();
  applyLang(lang);
  setCv(false);
  onScroll();
  updateStage();
  syncBrandName();
  requestAnimationFrame(syncReveals);
})();
