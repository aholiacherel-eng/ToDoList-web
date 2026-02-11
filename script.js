// Charger les tâches depuis localStorage
function chargerTaches() {
    const tachesSauvegardees = localStorage.getItem('taches');
    if (tachesSauvegardees) {
        return JSON.parse(tachesSauvegardees);
    }
    return [];
}

// Sauvegarder les tâches dans localStorage
function sauvegarderTaches(taches) {
    localStorage.setItem('taches', JSON.stringify(taches));
}

// Créer une tâche visuelle dans le DOM
function creerTacheElement(tache, index) {
    const li = document.createElement('li');
    
    // Créer la checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tache.completed;
    if (tache.completed) {
        li.classList.add('completed');
    }
    
    // Créer le span pour le texte
    const span = document.createElement('span');
    span.className = 'tache-texte';
    span.textContent = tache.texte;
    
    // Créer le bouton supprimer
    const btnSupprimer = document.createElement('button');
    btnSupprimer.type = 'button';
    btnSupprimer.className = 'btn-supprimer';
    btnSupprimer.textContent = 'Supprimer';
    
    // Événement checkbox
    checkbox.addEventListener('change', function() {
        taches[index].completed = checkbox.checked;
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
        sauvegarderTaches(taches);
    });
    
    // Événement supprimer
    btnSupprimer.addEventListener('click', function() {
        li.remove();
        taches.splice(index, 1);  // Supprimer du tableau
        sauvegarderTaches(taches);
        afficherTaches();  // Réafficher pour mettre à jour les index
    });
    
    // Assembler
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnSupprimer);
    
    return li;
}

// Afficher toutes les tâches
function afficherTaches() {
    listeTaches.innerHTML = '';  // Vider la liste
    taches.forEach((tache, index) => {
        const li = creerTacheElement(tache, index);
        listeTaches.appendChild(li);
    });
}

// Variables principales
const formulaire = document.getElementById('form-tache');
const inputTache = document.getElementById('input-tache');
const listeTaches = document.getElementById('liste-taches');
let taches = chargerTaches();

// Afficher les tâches au chargement de la page
afficherTaches();

// Ajouter une nouvelle tâche
formulaire.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const texteTache = inputTache.value;
    if (texteTache === '') return;
    
    // Ajouter au tableau
    taches.push({
        texte: texteTache,
        completed: false
    });
    
    // Sauvegarder
    sauvegarderTaches(taches);
    
    // Réafficher
    afficherTaches();
    
    // Vider l'input
    inputTache.value = '';
});