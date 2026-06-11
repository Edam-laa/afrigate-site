# Afrigate Site

Site web corporate B2B pour **Afrigate Partner by Infinity International Intertrade**.

Le projet présente l’entreprise, ses services, ses catégories de produits, ses coordonnées et ses formulaires de contact / demande de devis.

## Stack technique

* Next.js App Router
* TypeScript
* Tailwind CSS
* Nodemailer
* Vercel
* GitHub

## Fonctionnalités principales

* Page d’accueil corporate premium
* Pages internes :

  * À propos
  * Services
  * Produits
  * Détail catégorie produit
  * Contact
  * Demande de devis
* Design responsive desktop / tablette / mobile
* Sélecteur de langue FR / EN / AR
* Formulaire Contact
* Formulaire Demande de devis
* Envoi email côté serveur via API routes
* Assets organisés dans `public/images`
* Vidéo hero dans `public/videos/hero/background-site.mp4`

## Structure du projet

```txt
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    a-propos/
    services/
    produits/
    produits/[slug]/
    contact/
    demande-devis/
    api/
      contact/
      demande-devis/
  components/
    home/
    layout/
    products/
    quote/
    ui/
  data/
    home.ts
    navigation.ts
    productCategories.ts
    site.ts
  i18n/
    LanguageProvider.tsx
    translations.ts
    homeTranslations.ts
    useHomeContent.ts
  lib/
    utils.ts
public/
  images/
  videos/
```

## Installation locale

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Ouvrir le site :

```txt
http://localhost:3000
```

## Commandes utiles

Vérifier le code :

```bash
npm run lint
```

Compiler le projet :

```bash
npm run build
```

Lancer en local :

```bash
npm run dev
```

## Variables d’environnement

Créer un fichier local :

```txt
.env.local
```

Exemple de variables :

```env
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
ADMIN_EMAIL=
QUOTE_RECEIVER_EMAIL=
CONTACT_RECEIVER_EMAIL=
```

Important :

* `.env.local` ne doit jamais être envoyé sur GitHub.
* `.env.example` peut être versionné.
* Les variables réelles doivent aussi être ajoutées dans Vercel > Project Settings > Environment Variables.
* Après modification des variables sur Vercel, il faut redeployer le projet.

## Email et formulaires

Les formulaires utilisent des routes API côté serveur :

```txt
/api/contact
/api/demande-devis
```

Les emails sont envoyés via SMTP avec Nodemailer.

Adresse admin prévue :

```txt
hello@afrigate.tn
```

## Déploiement

Le projet est prévu pour être déployé sur Vercel.

Configuration recommandée :

```txt
Framework Preset: Next.js
Root Directory: ./
Install Command: npm install
Build Command: npm run build
Output Directory: Next.js default
Branch: main
```

Après import GitHub dans Vercel :

1. Ajouter les variables d’environnement.
2. Lancer le premier déploiement.
3. Tester toutes les pages.
4. Tester les formulaires Contact et Demande de devis.
5. Connecter le domaine final.

## Repository

```txt
https://github.com/Edam-laa/afrigate-site
```

## Notes de développement

Le suivi technique du projet est documenté dans :

```txt
DEV_NOTES.md
```

## Sécurité

Ne jamais pousser sur GitHub :

```txt
.env
.env.local
.env.production
.vercel
node_modules
.next
```

Les secrets SMTP doivent rester uniquement dans `.env.local` en local et dans les Environment Variables de Vercel.
