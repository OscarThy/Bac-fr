// app-oral.js - Gestion de l'épreuve orale (Lecture cursive et Linéaire)

// Base de données des lectures cursives (Partie 2)
const livresCursives = [
    { titre: "Alcools", auteur: "Guillaume Apollinaire", date: "1913", image: "images/alcools.jpg",lien: "oeuvre-cursive/alcools.html" },
    { titre: "Madame Bovary", auteur: "Gustave Flaubert", date: "1857", image: "images/bovary.jpg",lien: "oeuvre-cursive/bovary.html" },
    { titre: "Carmen", auteur: "Prosper Mérimée", date: "1845", image: "images/carmen.jpg",lien: "oeuvre-cursive/carmen.html" },
    { titre: "Chanson douce", auteur: "Leïla Slimani", date: "2016", image: "images/chanson-douce.jpg",lien: "oeuvre-cursive/chanson-douce.html" },
    { titre: "La Princesse de Clèves", auteur: "Madame de Lafayette", date: "1678", image: "images/lafayette.jpg",lien: "oeuvre-cursive/lafayette.html" },
    { titre: "Les Fausses Confidences", auteur: "Marivaux", date: "1737", image: "images/marivaux.webp", lien: "oeuvre-cursive/marivaux.html" },
    { titre: "Numéro deux", auteur: "David Foenkinos", date: "2022", image: "images/numero-deux.jpg",lien: "oeuvre-cursive/num-deux.html" },
    { titre: "Phèdre", auteur: "Jean Racine", date: "1677", image: "images/phedre.jpg",lien: "oeuvre-cursive/phedre.html" },
    { titre: "Le Parti pris des choses", auteur: "Francis Ponge", date: "1942", image: "images/ponge.jpg", lien: "oeuvre-cursive/ponge.html" }
];

// Fonction pour naviguer entre les vues
function afficherPartie(numero) {
    document.getElementById('oral-menu').classList.add('hidden');
    
    if (numero === 1) {
        document.getElementById('oral-partie1').classList.remove('hidden');
    } else if (numero === 2) {
        document.getElementById('oral-partie2').classList.remove('hidden');
        genererGrilleLivres();
    }
}

// Fonction pour retourner au menu des deux gros boutons
function retourMenuOral() {
    document.getElementById('oral-partie1').classList.add('hidden');
    document.getElementById('oral-partie2').classList.add('hidden');
    document.getElementById('oral-menu').classList.remove('hidden');
}

// Fonction pour injecter les images des livres avec l'effet Hover
function genererGrilleLivres() {
    const grille = document.getElementById('grille-livres');
    grille.innerHTML = ''; 
    
    livresCursives.forEach(livre => {
        grille.innerHTML += `
            <div onclick="window.location.href='${livre.lien}'" class="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-100 aspect-[2/3] cursor-pointer">
                
                <img src="${livre.image}" alt="${livre.titre}" class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 mix-blend-multiply">
                
                <div class="absolute inset-0 bg-emerald-900/90 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <h3 class="text-white font-black text-lg md:text-xl mb-2 leading-tight">${livre.titre}</h3>
                    <p class="text-emerald-300 font-bold text-xs md:text-sm uppercase tracking-widest mb-2">${livre.auteur}</p>
                    <span class="text-emerald-100 text-xs font-semibold px-3 py-1 border border-emerald-400 rounded-full">${livre.date}</span>
                </div>

            </div>
        `;
    });
}
window.onload = () => {
    // Si l'URL contient #cursive, on ouvre directement la partie 2
    if (window.location.hash === '#cursive') {
        afficherPartie(2);
        
        // Optionnel : on nettoie l'URL pour enlever le #cursive afin que ce soit plus joli
        history.replaceState(null, null, 'oral.html');
    }
};