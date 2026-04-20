// État de l'application
let state = {
    mainPage: 'page-accueil',
    mainTab: 'mouvements',
    subTab: 'roman',
    dissertGenre: '',
    dissertOeuvreId: '',
    dissertTab: 'resume',
    retourVersDissert: false
};

// Fonctions de Navigation Générales
function naviguerVers(idPageCible) {
    ['page-accueil', 'page-ecrit', 'page-dissertation', 'page-dissertation-oeuvres', 'page-dissertation-details', 'page-commentaire'].forEach(p => {
        const el = document.getElementById(p);
        if (el) el.classList.add('hidden');
    });
    const targetEl = document.getElementById(idPageCible);
    if (targetEl) targetEl.classList.remove('hidden');
    state.mainPage = idPageCible;

    if(idPageCible === 'page-commentaire') {
        changerOngletPrincipal(state.mainTab);
    }
}

// Navigation Intelligente (Retour)
function allerVersMouvementDepuisDissert(mouvementId) {
    state.retourVersDissert = true; 
    allerVersMouvement(mouvementId);
}

function retourDeCommentaire() {
    if (state.retourVersDissert) {
        state.retourVersDissert = false;
        naviguerVers('page-dissertation-details'); 
    } else {
        naviguerVers('page-ecrit'); 
    }
}

// ==========================================
// LOGIQUE : DISSERTATION
// ==========================================

function ouvrirGenreDissert(genre) {
    state.dissertGenre = genre;
    const titres = {
        'poesie': 'La Poésie',
        'theatre': 'Le Théâtre',
        'roman': 'Le Roman et le Récit',
        'idees': 'La Littérature d\'idées'
    };
    document.getElementById('titre-genre-dissert').textContent = titres[genre];
    
    const container = document.getElementById('liste-oeuvres-dissert');
    container.innerHTML = '';
    
    BDD.dissertations[genre].forEach(oeuvre => {
        container.innerHTML += `
            <button onclick="ouvrirOeuvreDissert('${oeuvre.id}')" class="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-400 hover:shadow-md transition text-left flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                    <h3 class="font-black text-xl text-blue-900 italic">${oeuvre.titre}</h3>
                    <p class="text-sm font-bold text-gray-700 mt-1">${oeuvre.auteur}</p>
                </div>
                <div class="text-left sm:text-right mt-2 sm:mt-0">
                    <span class="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-800 rounded-full border border-blue-200 block sm:inline-block">${oeuvre.parcours}</span>
                </div>
            </button>
        `;
    });
    naviguerVers('page-dissertation-oeuvres');
}

function ouvrirOeuvreDissert(id) {
    state.dissertOeuvreId = id;
    const oeuvre = BDD.dissertations[state.dissertGenre].find(o => o.id === id);
    
    document.getElementById('detail-titre-oeuvre').textContent = oeuvre.titre;
    document.getElementById('detail-auteur-oeuvre').textContent = oeuvre.auteur;
    document.getElementById('detail-parcours-oeuvre').textContent = "Parcours : " + oeuvre.parcours;
    
    changerOngletDissert('resume');
    naviguerVers('page-dissertation-details');
}

function changerOngletDissert(tabName) {
    state.dissertTab = tabName;
    ['resume', 'citations', 'docs', 'plans'].forEach(t => {
        const el = document.getElementById('tab-dissert-' + t);
        if (el) {
            el.classList.remove('tab-active');
            if(t === tabName) el.classList.add('tab-active');
        }
    });
    renderDissertationDetails();
}

function renderDissertationDetails() {
    const container = document.getElementById('contenu-dissert-dynamique');
    const oeuvre = BDD.dissertations[state.dissertGenre].find(o => o.id === state.dissertOeuvreId);
    container.innerHTML = '';

    if(state.dissertTab === 'resume') {
        container.innerHTML = `
            <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500 mb-6 shadow-sm">
                <h4 class="font-bold text-blue-900 mb-2 flex items-center justify-between">
                    Mouvement Littéraire & Contexte
                    <button onclick="allerVersMouvementDepuisDissert('${oeuvre.mouvementId}')" class="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-300 transition shadow-sm border border-blue-300">Voir la fiche</button>
                </h4>
                <p class="text-sm text-gray-800 leading-relaxed">${oeuvre.resume_mouvement}</p>
            </div>
            <div class="bg-indigo-50 p-5 rounded-xl border-l-4 border-indigo-500 mb-8 shadow-sm">
                <h4 class="font-bold text-indigo-900 mb-2">Présentation de l'Auteur</h4>
                <p class="text-sm text-gray-800 leading-relaxed">${oeuvre.presentation_auteur}</p>
            </div>
            <h3 class="text-xl font-black text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Résumé Complet de l'Œuvre</h3>
            <div class="space-y-4">
                ${oeuvre.resume_complet.map(r => `
                    <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                        <h5 class="font-bold text-emerald-700 mb-2 text-lg">${r.partie}</h5>
                        <p class="text-sm text-gray-700 leading-relaxed">${r.texte}</p>
                    </div>
                `).join('')}
            </div>
        `;
    } 
    else if(state.dissertTab === 'citations') {
        oeuvre.citations.forEach(theme => {
            const citationsHTML = theme.items.map(cit => `
                <div class="mb-4 bg-white p-5 rounded-lg border border-gray-200 shadow-sm relative pl-12">
                    <span class="absolute left-3 top-4 text-4xl text-amber-300 font-serif leading-none">"</span>
                    <p class="text-sm font-bold text-gray-800 italic mb-2">${cit.cit}</p>
                    <p class="text-xs text-gray-500 mb-3 font-semibold">— ${cit.loc}</p>
                    <div class="bg-amber-50 p-3 rounded text-xs text-amber-900 border-l-2 border-amber-400">
                        <strong>Analyse littéraire :</strong> ${cit.analyse}
                    </div>
                </div>
            `).join('');
            container.innerHTML += `
                <div class="mb-8">
                    <h4 class="text-lg font-black text-amber-700 mb-4 border-b border-amber-200 pb-1">${theme.theme}</h4>
                    ${citationsHTML}
                </div>
            `;
        });
    }
    else if(state.dissertTab === 'docs') {
        container.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${oeuvre.docs_complementaires.map(doc => `
                <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-purple-300 transition flex flex-col justify-between">
                    <div>
                        <h5 class="font-bold text-purple-800 mb-1">${doc.titre}</h5>
                        <p class="text-xs font-semibold text-gray-500 mb-3 bg-gray-100 inline-block px-2 py-1 rounded">${doc.source}</p>
                    </div>
                    <div class="bg-purple-50 border-l-2 border-purple-400 p-2 rounded text-xs text-purple-900 mt-2">
                        <strong>Lien avec l'œuvre :</strong> ${doc.analyse}
                    </div>
                </div>
            `).join('')}
        </div>`;
    }
    else if(state.dissertTab === 'plans') {
        oeuvre.plans.forEach(plan => {
            const typeColor = plan.type.includes('Dialectique') ? 'blue' : 'emerald';
            const partiesHTML = plan.parties.map(p => `
                <div class="mb-4">
                    <strong class="text-${typeColor}-800 block text-sm mb-2">${p.titre}</strong>
                    <ul class="list-disc pl-5 text-sm text-gray-700 space-y-2">
                        ${p.sous_parties.map(sp => `<li>${sp}</li>`).join('')}
                    </ul>
                </div>
            `).join('');

            container.innerHTML += `
                <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6 border-t-4 border-t-${typeColor}-500">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-xs font-bold px-2 py-1 bg-${typeColor}-100 text-${typeColor}-800 rounded uppercase tracking-wider">${plan.type}</span>
                    </div>
                    <h4 class="text-lg font-black text-gray-900 mb-5 pb-2 border-b border-gray-100">Sujet : "${plan.sujet}"</h4>
                    <div class="bg-gray-50 p-5 rounded-lg border border-gray-100">
                        ${partiesHTML}
                    </div>
                </div>
            `;
        });
    }
}

// ==========================================
// LOGIQUE : COMMENTAIRE DE TEXTE
// ==========================================

function changerOngletPrincipal(tabName) {
    state.mainTab = tabName;
    ['mouvements', 'auteurs', 'oeuvres', 'procedes'].forEach(t => {
        const el = document.getElementById('tab-' + t);
        if (el) {
            el.classList.remove('tab-active');
            if(t === tabName) el.classList.add('tab-active');
        }
    });
    genererSousOnglets();
    renderContent();
}

function genererSousOnglets() {
    const container = document.getElementById('subtabs-container');
    container.innerHTML = '';
    
    if (state.mainTab === 'mouvements') {
        container.classList.add('hidden');
        return;
    }

    container.classList.remove('hidden');
    let subTabsData = [];

    if (state.mainTab === 'auteurs' || state.mainTab === 'oeuvres') {
        subTabsData = [
            { id: 'roman', label: 'Roman' },
            { id: 'theatre', label: 'Théâtre' },
            { id: 'poesie', label: 'Poésie' },
            { id: 'idees', label: 'Littérature d\'idées' }
        ];
        if (!['roman', 'theatre', 'poesie', 'idees'].includes(state.subTab)) state.subTab = 'roman';
    } 
    else if (state.mainTab === 'procedes') {
        subTabsData = [
            { id: 'lexicaux', label: 'Lexicaux' },
            { id: 'grammaticaux', label: 'Grammaticaux' },
            { id: 'figures', label: 'Figures de style' },
            { id: 'genre', label: 'Liés au genre' }
        ];
        if (!['lexicaux', 'grammaticaux', 'figures', 'genre'].includes(state.subTab)) state.subTab = 'lexicaux';
    }

    subTabsData.forEach(st => {
        const btn = document.createElement('button');
        btn.className = `px-4 py-2 rounded-full text-sm font-semibold border-2 transition-colors whitespace-nowrap 
            ${state.subTab === st.id ? 'subtab-active border-blue-600 bg-blue-600 text-white' : 'border-gray-200 text-gray-600 hover:border-blue-300'}`;
        btn.textContent = st.label;
        btn.onclick = () => {
            state.subTab = st.id;
            genererSousOnglets();
            renderContent();
        };
        container.appendChild(btn);
    });
}

function allerVersAuteur(auteurId) {
    const auteur = BDD.auteurs.find(a => a.id === auteurId);
    if(auteur) {
        state.subTab = auteur.genre;
        changerOngletPrincipal('auteurs');
        setTimeout(() => {
            const el = document.getElementById(`auteur-${auteurId}`);
            if(el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('highlight-flash');
                setTimeout(() => el.classList.remove('highlight-flash'), 2000);
            }
        }, 100);
    }
}

function allerVersMouvement(mouvementId) {
    changerOngletPrincipal('mouvements');
    setTimeout(() => {
        const el = document.getElementById(`mvt-${mouvementId}`);
        if(el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('highlight-flash');
            setTimeout(() => el.classList.remove('highlight-flash'), 2000);
        }
    }, 100);
}

const getMvtName = (id) => BDD.mouvements.find(m => m.id === id)?.nom || "Inconnu";
const getAuteurName = (id) => BDD.auteurs.find(a => a.id === id)?.nom || "Inconnu";

function renderContent() {
    const container = document.getElementById('contenu-dynamique');
    container.innerHTML = '';

    if (state.mainTab === 'mouvements') {
        BDD.mouvements.forEach(mvt => {
            const auteursLinks = mvt.auteursPrincipaux.map(a => {
                if(a.id !== "") return `<button onclick="allerVersAuteur('${a.id}')" class="font-bold text-blue-600 hover:underline transition">${a.nom}</button>`;
                return a.nom;
            }).join(', ');

            container.innerHTML += `
                <div id="mvt-${mvt.id}" class="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-300">
                    <div class="flex justify-between items-center mb-4 border-b pb-2">
                        <h3 class="font-black text-2xl text-blue-900">${mvt.nom}</h3>
                        <span class="text-sm font-semibold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">${mvt.dates}</span>
                    </div>
                    <p class="text-sm mb-4"><strong class="text-gray-500">Auteurs :</strong> ${auteursLinks}</p>
                    <p class="text-sm bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">${mvt.caracteristiques}</p>
                </div>
            `;
        });
    } else if (state.mainTab === 'auteurs') {
        BDD.auteurs.filter(a => a.genre === state.subTab).forEach(aut => {
            const mouvementsHTML = (aut.mouvements || []).map(m => 
                `<button onclick="allerVersMouvement('${m.id}')" class="text-xs font-semibold px-2 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 border border-purple-200">${m.nom}</button>`
            ).join(' ');

            container.innerHTML += `
                <div id="auteur-${aut.id}" class="p-5 bg-white border border-gray-200 rounded-xl shadow-sm border-l-4 border-l-indigo-500">
                    <div class="flex justify-between items-start mb-3">
                        <h3 class="font-bold text-xl text-indigo-900">${aut.nom}</h3>
                        <div class="flex gap-2">${mouvementsHTML}</div>
                    </div>
                    <p class="text-sm bg-indigo-50 p-3 rounded-lg">${aut.bio}</p>
                </div>
            `;
        });
    } else if (state.mainTab === 'oeuvres') {
        BDD.oeuvres.filter(o => o.genre === state.subTab).forEach(oeuvre => {
            const themesHTML = oeuvre.themes.map(t => `<span class="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-md font-medium mr-2 mb-2">${t}</span>`).join('');
            
            container.innerHTML += `
                <div class="p-6 bg-white border border-gray-200 rounded-xl shadow-sm border-l-4 border-emerald-500">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <h3 class="font-black text-xl text-emerald-900 italic">${oeuvre.titre}</h3>
                            <p class="text-sm mt-1">Par <button onclick="allerVersAuteur('${oeuvre.auteurId}')" class="font-bold text-blue-600 hover:underline">${getAuteurName(oeuvre.auteurId)}</button> (${oeuvre.date})</p>
                        </div>
                        <button onclick="allerVersMouvement('${oeuvre.mouvementId}')" class="text-xs font-semibold px-3 py-1 bg-purple-100 text-purple-700 rounded-full border border-purple-200">${getMvtName(oeuvre.mouvementId)}</button>
                    </div>
                    <p class="text-sm bg-gray-50 p-3 rounded-lg mb-3"><strong>En bref :</strong> ${oeuvre.resume}</p>
                    <div class="mt-2"><div class="flex flex-wrap">${themesHTML}</div></div>
                </div>
            `;
        });
    } else if (state.mainTab === 'procedes') {
        (BDD.procedes[state.subTab] || []).forEach(cat => {
            container.innerHTML += `<h3 class="text-2xl font-black text-blue-900 mt-8 mb-4 border-b-2 border-blue-200 pb-2">${cat.categorie}</h3>`;
            const itemsContainer = document.createElement('div');
            itemsContainer.className = "space-y-4 mb-6";
            
            cat.items.forEach(proc => {
                itemsContainer.innerHTML += `
                    <div class="p-5 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col md:flex-row gap-4">
                        <div class="md:w-1/3"><h4 class="font-bold text-lg text-amber-900">${proc.nom}</h4></div>
                        <div class="md:w-2/3">
                            <p class="text-sm bg-amber-50 p-3 rounded-t-lg">${proc.desc}</p>
                            <p class="text-sm bg-amber-100 p-3 rounded-b-lg italic"><strong>Exemple :</strong> ${proc.exemples}</p>
                        </div>
                    </div>
                `;
            });
            container.appendChild(itemsContainer);
        });
    }
}

function afficherMessageConstruction() {
    document.getElementById('message-construction').classList.remove('hidden');
    setTimeout(() => document.getElementById('message-construction').classList.add('hidden'), 3000);
}