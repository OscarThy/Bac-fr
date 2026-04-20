let state = { genre: '', oeuvreId: '', tab: 'resume' };

function chargerGenre(genre) {
    state.genre = genre;
    const container = document.getElementById('liste-oeuvres-sidebar');
    container.innerHTML = '';
    
    // Sécurité : vérifie que la base de données est bien chargée
    if (typeof BDD === 'undefined' || !BDD.dissertations || !BDD.dissertations[genre]) {
        container.innerHTML = '<p class="text-red-500 text-sm">Erreur: Base de données introuvable.</p>';
        return;
    }

    BDD.dissertations[genre].forEach(o => {
        container.innerHTML += `
            <button onclick="ouvrirOeuvre('${o.id}')" class="w-full text-left p-3 md:p-4 bg-indigo-50 rounded-xl border-2 border-indigo-100 hover:border-indigo-500 transition shadow-sm mb-2">
                <strong class="block text-indigo-900 text-xs md:text-sm italic">${o.titre}</strong>
                <span class="text-[10px] md:text-xs text-slate-500 font-bold">${o.auteur}</span>
            </button>`;
    });
}

function ouvrirOeuvre(id) {
    state.oeuvreId = id;
    const oeuvre = BDD.dissertations[state.genre].find(o => o.id === id);
    if (!oeuvre) return;

    document.getElementById('ecran-vide').classList.add('hidden');
    document.getElementById('contenu-oeuvre').classList.remove('hidden');
    
    document.getElementById('titre-oeuvre').textContent = oeuvre.titre;
    document.getElementById('auteur-oeuvre').textContent = oeuvre.auteur;
    document.getElementById('parcours-oeuvre').textContent = "Parcours : " + oeuvre.parcours;
    
    // Ajout du bouton Mouvement Littéraire
    const zoneBouton = document.getElementById('zone-bouton-mvt');
    zoneBouton.innerHTML = `<button onclick="allerMouvement('${oeuvre.mouvementId}')" class="mt-4 text-xs font-bold px-4 py-2 bg-purple-100 text-purple-800 rounded-full hover:bg-purple-200 transition shadow-sm border border-purple-200 uppercase tracking-wide">Mouvement : ${oeuvre.mouvementNom || oeuvre.mouvementId}</button>`;
    
    changeTabOeuvre('resume');

    // Auto-scroll pour les mobiles
    if(window.innerWidth < 768) {
        setTimeout(() => {
            document.getElementById('contenu-oeuvre').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
    }
}

function changeTabOeuvre(t) {
    state.tab = t;
    const oeuvre = BDD.dissertations[state.genre].find(o => o.id === state.oeuvreId);
    const zone = document.getElementById('detail-dynamique');
    
    ['resume', 'citations', 'docs', 'plans'].forEach(tab => {
        const btn = document.getElementById('tab-oeuvre-'+tab);
        if(btn) {
            btn.className = (tab === t) ? 
                "py-2 md:py-3 px-4 md:px-6 font-black text-indigo-600 border-b-4 border-indigo-600 transition-all tab-active whitespace-nowrap text-sm" : 
                "py-2 md:py-3 px-4 md:px-6 font-black text-gray-500 hover:text-indigo-600 border-b-4 border-transparent transition-all whitespace-nowrap text-sm";
        }
    });

    if(t === 'resume') {
        let titreRes = "Résumé complet";
        if (state.genre === 'roman') titreRes = "Résumé (Chapitre par chapitre)";
        else if (state.genre === 'theatre') titreRes = "Résumé (Scène par scène)";
        else if (state.genre === 'idees') titreRes = "Résumé (Partie par partie)";

        zone.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div class="bg-indigo-50 p-5 md:p-6 rounded-2xl border-l-4 border-indigo-500">
                    <h3 class="text-lg md:text-xl font-black text-indigo-900 mb-2 md:mb-3">L'Auteur en bref</h3>
                    <p class="text-gray-700 text-sm leading-relaxed">${oeuvre.presentation_auteur}</p>
                </div>
                <div class="bg-blue-50 p-5 md:p-6 rounded-2xl border-l-4 border-blue-500">
                    <h3 class="text-lg md:text-xl font-black text-blue-900 mb-2 md:mb-3">Le Mouvement</h3>
                    <p class="text-gray-700 text-sm leading-relaxed">${oeuvre.resume_mouvement}</p>
                </div>
            </div>
            <h3 class="text-xl md:text-2xl font-black text-gray-800 mb-4 md:mb-6 border-b pb-2">${titreRes}</h3>
            <div class="space-y-4">
                ${(oeuvre.resume_complet || []).map(r => `
                    <div class="bg-white p-4 md:p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 class="font-bold text-indigo-700 mb-2 text-sm md:text-base">${r.partie}</h4>
                        <p class="text-gray-600 text-xs md:text-sm leading-relaxed">${r.texte}</p>
                    </div>
                `).join('')}
            </div>`;
    } 
    else if(t === 'citations') {
        zone.innerHTML = `<div class="space-y-8">${(oeuvre.citations || []).map(cat => `
            <div>
                <h3 class="text-lg md:text-xl font-black text-amber-600 mb-3 md:mb-4 uppercase tracking-tight">${cat.theme}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${cat.items.map(c => `
                        <div class="bg-white p-4 md:p-5 rounded-xl border-l-4 border-amber-400 shadow-sm">
                            <p class="font-bold italic mb-2 text-sm md:text-base text-gray-800">"${c.cit}"</p>
                            <p class="text-[10px] md:text-xs font-black text-gray-400 mb-2 md:mb-3 uppercase tracking-wider">${c.loc}</p>
                            <p class="text-xs md:text-sm bg-amber-50 p-3 rounded-lg text-amber-900"><strong>Analyse :</strong> ${c.analyse}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}</div>`;
    }
    else if(t === 'plans') {
        zone.innerHTML = `<div class="space-y-6">${(oeuvre.plans || []).map(p => `
            <div class="bg-white p-5 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h3 class="text-base md:text-lg font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">Sujet : "${p.sujet}"</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    ${p.parties.map(part => `
                        <div class="bg-gray-50 p-4 md:p-5 rounded-xl border border-gray-100">
                            <h4 class="font-bold text-indigo-700 mb-3 text-sm">${part.titre}</h4>
                            <ul class="space-y-2 text-xs md:text-sm text-gray-600">
                                ${part.sous_parties.map(sp => `<li class="flex gap-2"><span class="text-indigo-400 font-bold">•</span> <span>${sp}</span></li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}</div>`;
    }
    else if(t === 'docs') {
        zone.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">${(oeuvre.docs_complementaires || []).map(d => `
            <div class="bg-white p-5 md:p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-purple-300 transition">
                <div>
                    <h4 class="font-black text-purple-800 mb-1 text-base md:text-lg">${d.titre}</h4>
                    <p class="text-[10px] md:text-xs font-bold text-gray-400 mb-3 uppercase">${d.source}</p>
                    <div class="bg-purple-50 p-3 md:p-4 rounded-lg mb-3 italic text-purple-900 text-xs md:text-sm">"${d.citation}"</div>
                </div>
                <p class="text-xs md:text-sm text-gray-600 mt-2"><strong>Analyse :</strong> ${d.analyse}</p>
            </div>
        `).join('')}</div>`;
    }
}

function allerMouvement(id) {
    localStorage.setItem('targetMvt', id);
    window.location.href = 'commentaire.html';
}