// app-commentaire.js

let stateComm = {
    mainTab: 'mouvements',
    subTab: 'roman'
};

function changeTabComm(tabName) {
    stateComm.mainTab = tabName;
    
    // ON A SUPPRIMÉ LE FORÇAGE DU SOUS-ONGLET ICI (C'était ça le bug !)

    ['mouvements', 'auteurs', 'oeuvres', 'procedes'].forEach(t => {
        const el = document.getElementById('tab-' + t);
        if(el) {
            el.classList.remove('tab-active');
            if(t === tabName) el.classList.add('tab-active');
        }
    });

    genererSousOngletsComm();
    renderContentComm();
}

function genererSousOngletsComm() {
    const container = document.getElementById('subtabs-container');
    container.innerHTML = '';
    
    if (stateComm.mainTab === 'mouvements') {
        container.parentElement.classList.add('hidden');
        return;
    }

    container.parentElement.classList.remove('hidden');
    let subTabsData = [];

    if (stateComm.mainTab === 'auteurs' || stateComm.mainTab === 'oeuvres') {
        subTabsData = [
            { id: 'roman', label: 'Le Roman' },
            { id: 'theatre', label: 'Le Théâtre' },
            { id: 'poesie', label: 'La Poésie' },
            { id: 'idees', label: 'Littérature d\'idées' }
        ];
        if (!['roman', 'theatre', 'poesie', 'idees'].includes(stateComm.subTab)) stateComm.subTab = 'roman';
    } 
    else if (stateComm.mainTab === 'procedes') {
        subTabsData = [
            { id: 'lexicaux', label: 'Lexicaux' },
            { id: 'grammaticaux', label: 'Grammaticaux' },
            { id: 'figures', label: 'Figures de style' },
            { id: 'genre', label: 'Liés au genre' }
        ];
        if (!['lexicaux', 'grammaticaux', 'figures', 'genre'].includes(stateComm.subTab)) stateComm.subTab = 'lexicaux';
    }

    subTabsData.forEach(st => {
        const btn = document.createElement('button');
        btn.className = `px-5 py-2 rounded-full text-sm font-bold border-2 transition-colors whitespace-nowrap 
            ${stateComm.subTab === st.id ? 'subtab-active bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-500 hover:border-blue-400'}`;
        btn.textContent = st.label;
        btn.onclick = () => { stateComm.subTab = st.id; genererSousOngletsComm(); renderContentComm(); };
        container.appendChild(btn);
    });
}

function allerVersAuteur(id) {
    // CORRECTIF : On ignore les majuscules lors de la recherche
    const auteur = BDD.auteurs.find(a => a.id.toLowerCase() === id.toLowerCase());
    if(auteur) {
        stateComm.mainTab = 'auteurs';
        stateComm.subTab = auteur.genre;
        changeTabComm('auteurs');
        setTimeout(() => {
            const el = document.getElementById(`auteur-${auteur.id}`);
            if(el) { 
                el.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
                el.classList.add('highlight-flash'); 
            }
        }, 150);
    }
}

function renderContentComm() {
    const container = document.getElementById('contenu-dynamique');
    container.innerHTML = '';

    if (stateComm.mainTab === 'mouvements') {
        BDD.mouvements.forEach(mvt => {
            const autLinks = mvt.auteursPrincipaux.map(a => {
                if(a.id) return `<button onclick="allerVersAuteur('${a.id}')" class="font-bold text-blue-600 hover:underline transition">${a.nom}</button>`;
                return `<span class="font-bold text-slate-400">${a.nom}</span>`;
            }).join(', ');

            container.innerHTML += `
                <div id="mvt-${mvt.id}" class="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div class="flex justify-between items-center mb-4 border-b pb-4">
                        <h3 class="font-black text-3xl text-blue-900">${mvt.nom}</h3>
                        <span class="text-sm font-bold px-4 py-2 bg-blue-100 text-blue-800 rounded-full">${mvt.dates}</span>
                    </div>
                    <p class="text-gray-600 mb-6"><strong class="text-gray-400 uppercase tracking-widest text-xs">Auteurs :</strong> ${autLinks}</p>
                    <div class="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-500">
                        <p class="text-gray-800 leading-relaxed text-lg">${mvt.caracteristiques}</p>
                    </div>
                </div>`;
        });
    } else if (stateComm.mainTab === 'auteurs') {
        const auteursFiltres = BDD.auteurs.filter(a => a.genre === stateComm.subTab);
        auteursFiltres.forEach(aut => {
            const mvts = aut.mouvements.map(m => `<button onclick="allerVersMouvement('${m.id}')" class="text-xs font-bold px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full hover:bg-indigo-200 transition">${m.nom}</button>`).join(' ');
            container.innerHTML += `
                <div id="auteur-${aut.id}" class="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm border-l-8 border-l-indigo-600">
                    <div class="flex justify-between items-start mb-6">
                        <h3 class="font-black text-2xl text-indigo-900">${aut.nom}</h3>
                        <div class="flex gap-2">${mvts}</div>
                    </div>
                    <p class="text-gray-700 leading-relaxed text-lg bg-indigo-50 p-6 rounded-xl">${aut.bio}</p>
                </div>`;
        });
    } else if (stateComm.mainTab === 'oeuvres') {
        const oeuvresFiltrees = BDD.oeuvres.filter(o => o.genre === stateComm.subTab);
        if(oeuvresFiltrees.length === 0) container.innerHTML = `<p class="text-center p-10 text-slate-400 italic font-bold">Aucune œuvre dans cette catégorie.</p>`;
        
        oeuvresFiltrees.forEach(o => {
            const themesHTML = (o.themes || []).map(t => `<span class="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-md font-bold mr-2 mb-2 uppercase">${t}</span>`).join('');
            
            // CORRECTIF : On compare en ignorant les majuscules grâce à toLowerCase()
            const auteurObj = BDD.auteurs.find(a => a.id.toLowerCase() === o.auteurId.toLowerCase());
            
            const auteurHTML = auteurObj 
                ? `<button onclick="allerVersAuteur('${auteurObj.id}')" class="font-bold text-blue-600 hover:underline transition">${auteurObj.nom}</button>`
                : `<span class="font-bold text-slate-500">${o.auteurId}</span>`;

            container.innerHTML += `
                <div class="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm border-l-8 border-l-emerald-600 mb-6">
                    <div class="flex flex-col md:flex-row justify-between items-start mb-4">
                        <div>
                            <h3 class="font-black text-2xl text-emerald-900 italic">${o.titre}</h3>
                            <p class="text-gray-600 mt-1">Par ${auteurHTML} (${o.date})</p>
                        </div>
                        <button onclick="allerVersMouvement('${o.mouvementId}')" class="mt-3 md:mt-0 text-xs font-bold px-3 py-1 bg-purple-100 text-purple-700 rounded-full border border-purple-200 hover:bg-purple-200 transition uppercase">${o.mouvementId}</button>
                    </div>
                    <p class="text-gray-800 bg-gray-50 p-5 rounded-xl mb-5 leading-relaxed">${o.resume}</p>
                    <div class="flex flex-wrap">${themesHTML}</div>
                </div>`;
        });
    } else if (stateComm.mainTab === 'procedes') {
        (BDD.procedes[stateComm.subTab] || []).forEach(cat => {
            container.innerHTML += `<h3 class="text-3xl font-black text-slate-800 mt-10 mb-6 pb-2 border-b-4 border-slate-200 inline-block">${cat.categorie}</h3>`;
            cat.items.forEach(proc => {
                container.innerHTML += `
                    <div class="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 mb-6">
                        <div class="md:w-1/4"><h4 class="font-black text-xl text-amber-700">${proc.nom}</h4></div>
                        <div class="md:w-3/4">
                            <p class="text-gray-800 bg-amber-50 p-4 rounded-t-xl text-lg">${proc.desc}</p>
                            <p class="text-amber-900 bg-amber-100/50 p-4 rounded-b-xl italic"><strong>Ex:</strong> ${proc.exemples}</p>
                        </div>
                    </div>`;
            });
        });
    }
}

function allerVersMouvement(id) {
    stateComm.mainTab = 'mouvements';
    changeTabComm('mouvements');
    setTimeout(() => {
        const el = document.getElementById(`mvt-${id}`);
        if(el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); el.classList.add('highlight-flash'); }
    }, 100);
}

// Initialisation au chargement de la page commentaire
if(document.getElementById('tab-mouvements')) {
    changeTabComm('mouvements');
}