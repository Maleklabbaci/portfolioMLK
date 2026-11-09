# Portfolio — Abdelmalek Labbaci

Direction retenue : **plein écran & images**, papier chaud, un seul accent bleu cobalt,
très peu de texte. Le contenu vient de `RESUMEanglais.pdf` (ton CV anglais) et des
**portfolios publics iVISION** : les projets, les captures et les liens sont réels.

> 👉 **Aperçu live** : serveur sur le port `4173` — recharge la page.
> Relancer : `cd portfolio && python3 -m http.server 4173 --bind 0.0.0.0`

---

## 1. Ce qui a été ajouté

- **2 pages portfolio iVISION** demandées, cliquables à 4 endroits (nav, grille, parcours dépliable, bas de page) :
  - `https://ivision.agency/portfolio-sites-web-algerie.html`
  - `https://ivision.agency/portfolio-social-media-algerie.html`
- **Agence** : `https://ivision.agency/` dans le menu mobile et les liens de contact.
- **4 projets en galerie plein écran (desktop)** : MoveSmart, JawebFlow, Fidali, MS Cherchell —
  chacun avec une **vraie capture entière, sans recadrage ni zoom**, présentée dans un cadre
  type fenêtre de navigateur, et un bouton « Voir le projet ».
- **Nouvelle section `#portfolio`** : 12 captures réelles en grille 3 colonnes
  (2 sur tablette, 1 sur mobile), toutes visibles en entier, construites depuis `assets/js/config.js`.
- **Fini le « trop zoomé »** : `object-fit: contain`, aucun `transform: scale`,
  cadre 2:1 pour les sites, barre d’adresse discrète, fond papier pour les visuels carrés.
- **Libellé supprimé** : `PORTFOLIO — 2026 · ALGER, ALGÉRIE` n’apparaît plus dans le hero
  (ni dans les dictionnaires FR/EN).
- **Mobile entièrement refait** (≤ 900 px) : la galerie *sticky* est remplacée par une liste
  de 4 cartes lisibles (capture entière + catégorie + texte + lien), le hero est recentré sans zoom,
  les libellés de section s’empilent, les liens de contact passent en grille 2 colonnes.
  Testé à 360 et 390 px : aucun débordement horizontal.
- **Accent rouge** : le cobalt (#2546D8) devient **#D0342C** partout (liens, surbrillances, barre de progression, lignes, points des étiquettes, favicon).
- **Bulle WhatsApp** : bouton flottant en bas à droite (`wa.me/213697660969`), libellé FR « Discute avec moi » / EN « Chat with me », vert WhatsApp, hors reduced-motion sans effet ping.
- **Bissan** : la capture est une **planche de 2 visuels** (comme MS Cherchell) — Visuel Fraîcheur (« ici commence ton projet ») + coaching / coworking.
- **Photos personnelles** (hero + À propos) et mentions **CEO & Founder d'iVISION · Sawtify · eFOLIO**
  (header desktop, bio, footer).
- **Étiquettes nom sur les photos de projets** : chaque capture affiche un badge sombre « NOM DU PROJET »
  avec point cobalt (galerie desktop, liste mobile, grille portfolio).
- **Mobile** : header compact (prénom + burger, 56 px), sélecteur de langue déplacé dans le menu
  (« EN »), barre de progression en filet simple sans halo.
- **Animations au scroll & au survol** (zéro librairie, 100 % CSS + JS natif) :
  révélation au défilement avec clip + fondu et **stagger** de 70 ms par élément,
  **ligne cobalt qui se dessine** sous les en-têtes et les cartes, **halo cobalt qui suit
  le curseur** sur les cartes captures (desktop), **parallaxe douce du hero** au scroll
  (`object-position`, aucun zoom), **compteur 01 / 04 animé** (« bump ») à chaque étape
  de la galerie, **barre de progression avec halo** + point lumineux, et
  **balayage lumineux** sur les boutons au survol.
  Tout est désactivé ou rendu instantané en `prefers-reduced-motion`, et rien ne zoome sur mobile.
- Liens de projet vérifiés sur la page source, **sans inventer d'adresse** :
  JawebFlow, eFOLIO et Sawtify sont indiqués « adresse à confirmer » par iVISION,
  donc leurs cartes renvoient vers la page portfolio iVISION.

---

## 2. Les 12 captures réelles

| Capture | Projet | Lien |
|---|---|---|
| `real-dc16.webp` | DC16 X WYN | `https://dc16.shop/` |
| `real-whiteaura.webp` | White Aura | `https://white-aura.vercel.app/` |
| `real-noura.webp` | Cabinet Noura | `https://cabinet-noura.vercel.app/` |
| `real-efolio.webp` | eFOLIO | portfolio sites web iVISION |
| `real-eminora.webp` | Eminora | portfolio social & vidéo iVISION |
| `real-ivisionad.webp` | iVISION AD | `https://www.ivisionads.online/` |
| `real-movesmart.webp` | MoveSmart | `https://movesmart-ecru.vercel.app/` |
| `real-jawebflow.webp` | JawebFlow | portfolio sites web iVISION |
| `real-fidali.webp` | Fidali | `https://fidali.vercel.app/` |
| `real-msc.webp` | MS Cherchell · 2 affiches Matchday | portfolio social & vidéo iVISION |
| `real-sawtify.webp` | Sawtify | portfolio sites web iVISION |
| `real-bissan-2.webp` | Bissan | portfolio social & vidéo iVISION |

Sources des images : `https://ivision.agency/images/*.webp` et les miniatures Google Drive
de la page social media. Elles ont été converties en WebP local (~1 Mo au total) :
**aucune image distante n'est chargée à l'exécution**.

`real-msc.webp` est une **planche de 2 affiches Matchday réelles** (WB Meftah et USMB),
assemblées sur fond papier pour occuper proprement le cadre paysage — pas une image générée.

> ⚠️ La page iVISION précise que les captures montrent les sites au moment de la prise de vue,
> qu'ils peuvent évoluer ou être temporairement indisponibles, et qu'elles ne garantissent
> pas un état actuel ni un résultat commercial. Lors de la vérification du 09/11/2026,
> `dc16.shop` répondait `402` : le lien est conservé tel que publié par iVISION.

---

## 3. Ce qui vient du CV

| Donnée | Valeur |
|---|---|
| Nom | Abdelmalek Labbaci |
| Rôle | Technical Founder · SaaS Developer · Growth & AI |
| E-mail | abdelmaleklabbaci01@gmail.com |
| Téléphone | +213 697 660 969 |
| LinkedIn | linkedin.com/in/labbacimalek |
| Ville | Alger, Algérie |
| Agence | iVISION Agency — fondateur, 40+ comptes clients actifs |
| Projets | RAWDHA+, Fidali, MOVESMART (Dubaï), Influnzy, MS Cherchell |
| Expériences | iVISION (2025–), freelance SaaS (2022–), MS Cherchell (juin 2024–), JIL-FM (2022–24), Club MSC (2022), graphiste/vidéaste (2018–) |
| Formation | Diplôme de technicien supérieur, INSFP Bousmail (2021) · stage design/vidéo (2022) · Claude 101 & Claude Code in Action (Anthropic Education) |
| Langues | Arabe natif · Français courant · Anglais professionnel |
| Outils | React, TypeScript, Next.js, Vite, Tailwind, Python, Supabase, PostgreSQL, REST APIs, GitHub, Vercel · AI agents, RAG, Claude Code, LLM APIs, Edge Functions, pg_cron, webhooks · Meta Ads, GA4, Shopify, COD · Adobe CC, Premiere Pro, After Effects, CapCut, Sony Vegas |

**Où ça apparaît :**
- Header, hero, footer, contact → identité + coordonnées réelles
- 4 lignes de l'index → tes 4 pôles (01 TECH · 02 IA · 03 GROWTH · 04 DESIGN)
- **« Parcours & compétences »** → expérience, outils, formation, langues, projets + 2 liens portfolio
- **CV** dans la nav, le menu mobile et le bas de page → télécharge `assets/RESUMEanglais.pdf`
- Bas de page → agence, 2 portfolios, LinkedIn, e-mail, téléphone, CV

Le site est **FR par défaut avec bascule EN** ; le PDF reste en anglais comme fourni.

---

## 4. Photos personnelles

Le hero et la section À propos utilisent les **photos de Abdelmalek Labbaci** :

| Fichier | Emplacement | Rôle |
|---|---|---|
| `abdelmalek-hero.webp` | Hero plein écran | Photo paysage devant l'immeuble (fetchpriority high) |
| `abdelmalek-portrait.webp` | À propos | Portrait rédac en plein écran de la colonne droite |

Les 12 `real-*.webp` sont de vraies captures de projets. Aucun crédit d'outil n'est affiché sur le site.

---

## 5. Personnaliser

- **`assets/js/config.js`** : identité, contacts, `agency`, `portfolioSites`, `portfolioSocial`,
  `socials[]`, **`captures[]`** (12 objets `{ img, label, url }`), SEO.
  Ajoute / retire / réordonne une carte ici : la grille se reconstruit automatiquement.
- **`assets/js/main.js`** → objet `I18N` : tous les textes `fr` / `en` (72 clés synchronisées).
- **`index.html`** : 4 projets de la galerie desktop, 4 cartes `.work-m` pour mobile, liens « Voir le projet ».
- **`assets/css/style.css`** : couleurs en haut (`--paper`, `--ink`, `--accent`), grille `.folio__grid`.

---

## 6. Détails techniques

- Galerie *sticky* de 420vh : 4 vraies captures **entières** en fondu, compteur `01 / 04`
- Cadre type navigateur (`2:1`, `object-fit: contain`) : **aucun crop, aucun zoom**
- Légendes à gauche sur fond sombre, capture lumineuse à droite, voile vertical léger
- Header transparent sur la galerie, papier ailleurs (bascule au seuil de 96 px)
- Grille portfolio : 3 / 2 / 1 colonnes, `aspect-ratio:2/1`, `object-fit:contain`, images `loading="lazy"`
- Aperçu au survol des 4 pôles (desktop, lui aussi en `contain`), saut au projet au clic
- Parcours dépliable avec `inert` + `aria-expanded` (accessible au clavier)
- **Mobile / tablette ≤ 900 px** : `.stage` masquée, `.work-m` affichée, clic sur un pôle
  de l’index qui amène à la bonne carte, ancre `#work` conservée pour le menu
- - `--accent:#D0342C` partout (aucun cobalt restant) ; `.wa-bubble` flottante (z-index 90, sous le menu) ; `prefers-reduced-motion` (desktop) : la galerie devient une grille statique lisible ;
  sur mobile la liste `.work-m` reste affichée
- Animations : `[data-anim]` (clip-path + opacity, `--d` = délai stagger), `.line::after`
  (ligne cobalt 0 → 100 %), `.cap-card::before` (halo radial piloté par `--mx/--my`),
  `.progress span` (halo + `::after` point lumineux), `.rail__num.is-bump` (keyframes),
  parallaxe hero via `object-position` (desktop uniquement, désactivée en reduced-motion)
- Tous les liens externes : `target="_blank" rel="noopener noreferrer"`
- Polices `woff2` auto-hébergées, WebP locaux, Open Graph, zéro dépendance, zéro build

---

## 7. Structure

```
portfolio/
├── index.html · favicon.svg · apercu.png · README.md
└── assets/
    ├── RESUMEanglais.pdf     # ton CV, téléchargeable
    ├── css/style.css
    ├── js/config.js          # 👈 identité, liens & 12 captures
    ├── js/main.js            # galerie, FR/EN, grille, parcours
    ├── fonts/                # 6 woff2
    └── img/                  # 14 WebP : 12 réels + 2 ambiances (aucun crop)
```

---

## 8. Mettre en ligne

Glisse le dossier sur [Netlify Drop](https://app.netlify.com/drop), ou pousse-le sur GitHub Pages /
Vercel / tout hébergement statique. Les liens `mailto:`, `tel:`, les 2 pages portfolio et le PDF
fonctionnent tels quels. Vérifie que `apercu.png` (utilisé en `og:image`) est bien à la racine.

---

## 9. Idées pour la suite

- Remplacer les 2 visuels d'ambiance par des photos réelles
- Ajouter une page étude de cas par projet (MoveSmart, Fidali, JawebFlow…)
- Ajouter les 3 captures iVISION non affichées (Abdou Zouheir, NSPEAR, Clinique El Chifa)
- Ajouter un formulaire de contact ou un lien WhatsApp
- Version arabe (le CV précise que l'arabe est ta langue natale)
