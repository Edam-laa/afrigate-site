# DEV_NOTES - Afrigate

## Etat actuel du projet

Projet : **Afrigate Partner by Infinity International Intertrade**
Stack : **Next.js App Router, TypeScript, Tailwind CSS, Nodemailer, Vercel**
Repository GitHub : `Edam-laa/afrigate-site`
Branche principale : `main`

Le site est un site corporate B2B multilingue FR / EN / AR pour une entreprise d’import-export, commerce international et fourniture multi-secteurs.

## Architecture principale

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

## Style visuel validé

Le site utilise un style corporate premium B2B :

* bleu marine profond ;
* accent doré ;
* grandes sections aérées ;
* titres serif larges ;
* labels de section en uppercase avec ligne dorée ;
* cartes arrondies avec ombres légères ;
* boutons CTA dorés ou bleu marine ;
* alternance fonds blancs, gris très clair et blocs bleu nuit ;
* header, footer, hero vidéo, sections produits, services, partenaires et témoignages.

## Pages existantes

* `/` : Accueil
* `/a-propos` : À propos
* `/services` : Services
* `/produits` : Catalogue produits
* `/produits/[slug]` : Page détail catégorie produit
* `/contact` : Contact
* `/demande-devis` : Demande de devis

## Fonctionnalités existantes

* Header responsive
* Footer corporate
* Sélecteur de langue FR / EN / AR
* Traductions Home FR / EN / AR
* Pages internes avec structure premium
* Catalogue produits avec catégories dynamiques
* Pages produits dynamiques via slug
* Formulaire de demande de devis
* Route API `/api/demande-devis`
* Route API `/api/contact`
* Envoi email prévu via SMTP / Nodemailer
* Assets organisés dans `public/images`
* Vidéo hero dans `public/videos/hero/background-site.mp4`

## Variables d’environnement

Les secrets ne doivent jamais être commités.

Fichier local :

```txt
.env.local
```

Fichier versionné autorisé :

```txt
.env.example
```

Variables utilisées ou prévues :

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

* `.env.local` est ignoré par Git.
* Les mêmes variables doivent être ajoutées dans Vercel > Project Settings > Environment Variables.
* Après modification des variables sur Vercel, il faut faire un redeploy.

## Email et SMTP

L’adresse officielle est :

```txt
hello@afrigate.tn
```

Le MX du domaine indique actuellement :

```txt
mail.afrigate.tn
IP : 41.226.27.200
Fournisseur probable : TOPNET
```

Configuration SMTP probable à confirmer :

```env
SMTP_HOST=mail.afrigate.tn
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=hello@afrigate.tn
SMTP_PASS=
SMTP_FROM=hello@afrigate.tn
ADMIN_EMAIL=hello@afrigate.tn
QUOTE_RECEIVER_EMAIL=hello@afrigate.tn
CONTACT_RECEIVER_EMAIL=hello@afrigate.tn
```

Alternative possible si le port 465 échoue :

```env
SMTP_HOST=mail.afrigate.tn
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=hello@afrigate.tn
SMTP_PASS=
SMTP_FROM=hello@afrigate.tn
ADMIN_EMAIL=hello@afrigate.tn
QUOTE_RECEIVER_EMAIL=hello@afrigate.tn
CONTACT_RECEIVER_EMAIL=hello@afrigate.tn
```

## GitHub

Le projet a été initialisé et pushé sur GitHub.

Commandes effectuées :

```powershell
git add .
git commit -m "Prepare Afrigate website for deployment"
git remote add origin https://github.com/Edam-laa/afrigate-site
git branch -M main
git push -u origin main
```

Le push est réussi.

Avertissement GitHub actuel :

```txt
public/videos/hero/background-site.mp4 fait environ 92.96 MB.
GitHub recommande moins de 50 MB par fichier.
```

Décision actuelle :

* Le fichier est accepté par GitHub.
* Il faudra idéalement compresser cette vidéo plus tard pour améliorer le poids du repository et le déploiement Vercel.

## .gitignore

Le fichier `.gitignore` protège bien :

```txt
node_modules
.next
.env
.env.local
.env*.local
.vercel
```

Il garde volontairement :

```txt
.env.example
```

## Déploiement Vercel

Projet Vercel à créer depuis GitHub :

```txt
Repository : Edam-laa/afrigate-site
Branch : main
Framework : Next.js
Root Directory : ./
Build Command : npm run build
Install Command : npm install
```

À ajouter dans Vercel avant ou après le premier déploiement :

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

Le site peut être déployé même si le SMTP n’est pas encore finalisé, mais les formulaires email ne fonctionneront correctement qu’après ajout des vraies variables SMTP.

## Commandes de vérification

Avant chaque push important :

```powershell
npm run lint
npm run build
git status
```

Après modification :

```powershell
git add .
git commit -m "Description courte"
git push
```

## Dernières modifications importantes

### 2026-06-10

* Remplacement visible de `Afrigate Partners` par `Afrigate Partner by Infinity International Intertrade`.
* Mise à jour du Header avec marque en deux lignes.
* Mise à jour du Footer pour la marque longue.
* Mise à jour du Hero Home :

  * FR : `Votre succès, notre engagement`
  * EN : `Your success, our commitment`
  * AR : `نجاحكم، التزامنا`
* Mise à jour des statistiques Home :

  * `+24`
  * `+10000`
  * `100%`
  * `+10 ans`
* Ajout des catégories :

  * `produits-cosmetiques`
  * `produits-alimentaires`
* Ajout des images produits `7.jpg` et `8.jpg`.
* Mise à jour des traductions FR / EN / AR.
* Mise à jour du select catégorie dans `/demande-devis`.
* Build local réussi hors sandbox.

### 2026-06-11

* Push GitHub réussi sur `main`.
* Import Vercel commencé depuis GitHub.
* `.env.local` vérifié comme non pushé.
* Variables d’environnement importées dans Vercel.
* Prochaine étape : vérifier le build Vercel et tester les formulaires.

## Prochaines actions

1. Terminer le premier déploiement Vercel.
2. Vérifier que le build Vercel passe.
3. Tester l’URL Vercel générée.
4. Vérifier toutes les pages :

   * Accueil
   * À propos
   * Services
   * Produits
   * Contact
   * Demande de devis
5. Tester les formulaires Contact et Demande de devis.
6. Si les emails ne partent pas, confirmer les vrais paramètres SMTP auprès de TOPNET ou du gestionnaire email.
7. Compresser `background-site.mp4` pour réduire le poids du repository.
8. Réduire légèrement la hauteur du Header si nécessaire.
9. Continuer les finitions visuelles page par page.
