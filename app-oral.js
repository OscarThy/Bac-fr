// app-oral.js - Gestion de l'épreuve orale (Lecture cursive et Linéaire)

// app-oral.js - Liste mise à jour selon ton dossier d'images réel
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

function ouvrirPartie2() {
    document.getElementById('oral-menu').classList.add('hidden');
    document.getElementById('partie2-content').classList.remove('hidden');
    afficherLivresCursives();
    window.location.hash = "cursive";
}

function retourMenuOral() {
    document.getElementById('partie2-content').classList.add('hidden');
    document.getElementById('oral-menu').classList.remove('hidden');
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function afficherLivresCursives() {
    const grille = document.getElementById('grille-livres');
    grille.innerHTML = '';
    
    livresCursives.forEach(livre => {
        grille.innerHTML += `
            <div onclick="window.location.href='${livre.lien}'" class="group relative overflow-hidden rounded-xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-500 bg-white aspect-[2/3] cursor-pointer">
                
                <img src="${livre.image}" alt="${livre.titre}" class="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:blur-sm group-hover:opacity-40">
                
                <div class="absolute inset-0 bg-gradient-to-t from-[var(--c-5)] via-[var(--c-5)]/60 to-transparent flex flex-col items-center justify-end p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <h3 class="text-white font-serif text-xl md:text-2xl mb-2 leading-tight drop-shadow-md">${livre.titre}</h3>
                    <p class="text-[var(--c-2)] font-sans text-xs uppercase tracking-widest mb-3">${livre.auteur}</p>
                    <span class="text-white text-xs font-semibold px-3 py-1 border border-white/40 rounded-full backdrop-blur-sm">${livre.date}</span>
                </div>

            </div>
        `;
    });
}

window.onload = () => {
    if (window.location.hash === '#cursive') {
        ouvrirPartie2();
    }
};