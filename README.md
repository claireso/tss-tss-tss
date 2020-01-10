# Tss Tss Tss

Extension navigateur compatible Chrome / Firefox  pour révéler du contenu masqué

## Sites supportés actuellement

- Le parisien: supprime l'encart "article réservé aux abonnés" et rend lisible le texte flouté

- Liberation: supprime l'encart "Libération vous offre 4 visites !" pour afficher l'article

- Instagram: supprime la bannière "Connectez-vous à Instagram" ainsi que l'encart "Connectez-vous pour continuer" pour afficher les photos

## Comment ajouter un site ?

- Commencer par ajouter le support de votre site dans le fichier `manifest.json`

```javascript
{
  "matches": [
    "http://yourwebsite.com"
  ],
  "css": [
    "styles.css" // optional
  ],
  "js": [
    "base.js", // required
    "./websites/yourwebsite.js" // required
  ]
},
```

- Créer le fichier `yourwebsite.js` dans le répertoire `websites` et ajouter le code suivant:

```javascript
(() => {
  const mutations = [
    {
      target: <Node>, // l'élément sur lequel doivent être observées les mutations DOM
      config: <MutationObserverInit>, // spécifie quelles mutations DOM sont à rapporter
      onChange: (mutation, observer) => {
        // votre code spécifique à votre site
        // ex: supprimer un élément du DOM,  ajouter une classe css etc.
      }
    }
  ]

  window.tssTssTss(mutations)
})()
```

Pour plus d'information sur l'api `MutationObserver`: https://developer.mozilla.org/fr/docs/Web/API/MutationObserver