# To-Do List - Application de Gestion de Tâches

Une application web simple et moderne pour gérer vos tâches quotidiennes avec sauvegarde automatique dans le navigateur.

## 📋 Description

Cette To-Do List permet de créer, gérer et organiser vos tâches de manière intuitive. Toutes vos tâches sont automatiquement sauvegardées dans votre navigateur grâce au localStorage, ce qui signifie qu'elles restent disponibles même après fermeture du navigateur.

## ✨ Fonctionnalités

- ✅ Ajouter de nouvelles tâches rapidement
- ✅ Marquer les tâches comme complétées/non complétées avec une checkbox
- ✅ Supprimer les tâches terminées ou inutiles
- ✅ Sauvegarde automatique dans localStorage
- ✅ Interface moderne et responsive
- ✅ Animations fluides et effets visuels
- ✅ Design intuitif et facile à utiliser

## 🛠️ Technologies utilisées

- **HTML5** - Structure de la page
- **CSS3** - Styling et animations
  - Flexbox pour la mise en page
  - Animations CSS
  - Dégradés et effets d'ombre
- **JavaScript (Vanilla)** - Logique de l'application
  - Manipulation du DOM
  - localStorage API
  - Gestion d'événements

### Utilisation

1. **Ajouter une tâche** : Tapez votre tâche dans le champ de texte et cliquez sur "Ajouter" ou appuyez sur Entrée
2. **Marquer comme complétée** : Cochez la case à côté de la tâche pour la marquer comme terminée
3. **Supprimer une tâche** : Cliquez sur le bouton "Supprimer" pour retirer définitivement une tâche
4. **Vos données sont sauvegardées** : Toutes les modifications sont automatiquement enregistrées

## 📂 Structure du projet
```
todolist-app/
│
├── index.html          # Structure HTML de l'application
├── style.css           # Styles et animations CSS
├── script.js           # Logique JavaScript
└── README.md           # Documentation du projet
```

## 💡 Fonctionnement technique

### localStorage
L'application utilise l'API localStorage du navigateur pour sauvegarder les tâches :
- Les tâches sont stockées sous forme de tableau JSON
- Chaque tâche contient son texte et son état (complétée ou non)
- Les données persistent entre les sessions

### Structure des données
```javascript
[
  {
    texte: "Faire les courses",
    completed: false
  },
  {
    texte: "Apprendre JavaScript",
    completed: true
  }
]
```

## 🎨 Personnalisation

Vous pouvez facilement personnaliser l'apparence de l'application en modifiant le fichier `style.css` :
- Couleurs du thème (variables de couleur dans le body)
- Taille des polices
- Espacements et marges
- Animations

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte aux différentes tailles d'écran :
- Desktop : Interface complète avec toutes les fonctionnalités
- Tablette : Layout optimisé
- Mobile : Interface simplifiée et tactile

## 🔮 Améliorations futures

Idées pour étendre le projet :
- [ ] Filtres (Toutes / Actives / Complétées)
- [ ] Édition des tâches existantes
- [ ] Catégories ou tags pour organiser les tâches
- [ ] Dates d'échéance
- [ ] Priorités (haute, moyenne, basse)
- [ ] Export/Import des tâches
- [ ] Mode sombre/clair
- [ ] Statistiques d'utilisation

## 👨‍💻 Auteur

Développé par **ADJI AHOLIA WILFRIED CHEREL**

## 📝 Licence

Ce projet est libre d'utilisation pour l'apprentissage et à des fins personnelles.

## 🙏 Remerciements

Merci d'avoir consulté ce projet ! N'hésitez pas à l'utiliser, le modifier et l'améliorer pour votre apprentissage du développement web.


## 🎨 Aperçu

<img width="621" height="479" alt="image" src="https://github.com/user-attachments/assets/06eab0b1-00ca-46da-bb51-40698c66af4c" />


**Note** : Ce projet a été créé dans le cadre de l'apprentissage du développement web (HTML, CSS, JavaScript).

