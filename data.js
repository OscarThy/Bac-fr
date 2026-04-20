// data.js

const BDD = {
    mouvements: [
        { id: "humanisme", nom: "L'Humanisme", dates: "XVIe siècle", auteursPrincipaux: [{nom: "Rabelais", id: "rabelais"}, {nom: "Montaigne", id: "montaigne"}, {nom: "La Boétie", id: "laboetie"}, {nom: "Érasme", id: ""}], caracteristiques: "L'Homme au centre de l'univers. • Foi en l'éducation globale (tête bien faite) • Esprit critique face aux dogmes • Pacifisme." },
        { id: "pleiade", nom: "La Pléiade", dates: "XVIe siècle", auteursPrincipaux: [{nom: "Ronsard", id: "ronsard"}, {nom: "Du Bellay", id: "dubellay"}], caracteristiques: "Défense et illustration de la langue française. • L'amour, la fuite du temps, l'immortalité poétique." },
        { id: "baroque", nom: "Le Baroque", dates: "Fin XVIe - Début XVIIe", auteursPrincipaux: [{nom: "Corneille", id: "corneille"}, {nom: "D'Aubigné", id: ""}], caracteristiques: "Monde instable et théâtral. • Illusion, rêve, métamorphose • Esthétique des contrastes et de l'excès." },
        { id: "classicisme", nom: "Le Classicisme", dates: "1660 - 1685", auteursPrincipaux: [{nom: "Molière", id: "moliere"}, {nom: "Racine", id: "racine"}, {nom: "La Fontaine", id: "lafontaine"}, {nom: "Boileau", id: ""}], caracteristiques: "Recherche d'ordre et de raison. • Idéal de l'honnête homme • Règle des trois unités • Vraisemblance et bienséance." },
        { id: "lumieres", nom: "Les Lumières", dates: "XVIIIe siècle", auteursPrincipaux: [{nom: "Voltaire", id: "voltaire"}, {nom: "Rousseau", id: "rousseau"}, {nom: "Montesquieu", id: "montesquieu"}, {nom: "Diderot", id: "diderot"}, {nom: "Graffigny", id: "graffigny"}, {nom: "Beaumarchais", id: "beaumarchais"}], caracteristiques: "Le combat par la Raison. • Diffusion du savoir (Encyclopédie) • Dénonciation du fanatisme et de l'esclavage • Utilisation de l'ironie." },
        { id: "romantisme", nom: "Le Romantisme", dates: "1800 - 1850", auteursPrincipaux: [{nom: "Hugo", id: "hugo"}, {nom: "Musset", id: "musset"}, {nom: "Chateaubriand", id: "chateaubriand"}, {nom: "Lamartine", id: ""}], caracteristiques: "Révolte et Lyrisme. • Le Moi omniprésent • Nature comme miroir de l'âme • Le Mal du siècle • L'écrivain prophète." },
        { id: "parnasse", nom: "Le Parnasse", dates: "Milieu XIXe siècle", auteursPrincipaux: [{nom: "Gautier", id: "gautier"}, {nom: "Leconte de Lisle", id: ""}], caracteristiques: "L'art pour l'art. • Culte de la perfection formelle • Refus des effusions sentimentales • Exotisme." },
        { id: "realisme", nom: "Le Réalisme", dates: "1830 - 1870", auteursPrincipaux: [{nom: "Balzac", id: "balzac"}, {nom: "Flaubert", id: "flaubert"}, {nom: "Stendhal", id: "stendhal"}], caracteristiques: "Le roman comme miroir de la société. • Décors quotidiens • Poids de l'argent et des déterminismes sociaux." },
        { id: "naturalisme", nom: "Le Naturalisme", dates: "Fin XIXe siècle", auteursPrincipaux: [{nom: "Zola", id: "zola"}, {nom: "Maupassant", id: "maupassant"}], caracteristiques: "Approche scientifique de la littérature. • Influence de l'hérédité et du milieu • Exploration du monde ouvrier." },
        { id: "symbolisme", nom: "Le Symbolisme", dates: "Fin XIXe siècle", auteursPrincipaux: [{nom: "Baudelaire", id: "baudelaire"}, {nom: "Rimbaud", id: "rimbaud"}, {nom: "Verlaine", id: "verlaine"}, {nom: "Mallarmé", id: "mallarme"}], caracteristiques: "Déchiffrement du monde spirituel. • Suggérer plutôt que nommer • Musicalité • Correspondances sensorielles." },
        { id: "surrealisme", nom: "Le Surréalisme", dates: "XXe siècle", auteursPrincipaux: [{nom: "Breton", id: "breton"}, {nom: "Éluard", id: "eluard"}, {nom: "Aragon", id: "aragon"}], caracteristiques: "Dictature de l'inconscient. • Écriture automatique • Associations fortuites • Révolte contre la logique bourgeoise." },
        { id: "absurde", nom: "L'Absurde", dates: "Après 1945", auteursPrincipaux: [{nom: "Camus", id: "camus"}, {nom: "Sartre", id: "sartre"}, {nom: "Ionesco", id: "ionesco"}, {nom: "Beckett", id: "beckett"}], caracteristiques: "Crise existentielle post-guerre. • Angoisse du vide • Effondrement du langage (au théâtre)." },
        { id: "nouveau_roman", nom: "Le Nouveau Roman", dates: "1950 - 1970", auteursPrincipaux: [{nom: "Sarraute", id: "sarraute"}, {nom: "Robbe-Grillet", id: ""}], caracteristiques: "Fin du personnage traditionnel. • Règne de l'objet • Chronologie éclatée." }
    ],
    auteurs: [
        // 17+ Auteurs majeurs
        { id: "rabelais", nom: "François Rabelais", genre: "roman", mouvements: [{id: "humanisme", nom: "L'Humanisme"}], bio: "Moine et médecin humaniste, il utilise la farce et les géants (Gargantua) pour faire passer une éducation de la tolérance." },
        { id: "montaigne", nom: "Michel de Montaigne", genre: "idees", mouvements: [{id: "humanisme", nom: "L'Humanisme"}], bio: "Inventeur de l'essai, il se prend pour objet d'étude ('Je suis moi-même la matière de mon livre') pour comprendre l'homme." },
        { id: "laboetie", nom: "Étienne de La Boétie", genre: "idees", mouvements: [{id: "humanisme", nom: "L'Humanisme"}], bio: "Ami de Montaigne, il théorise la désobéissance civile et dénonce la mécanique de la tyrannie à 18 ans." },
        { id: "ronsard", nom: "Pierre de Ronsard", genre: "poesie", mouvements: [{id: "pleiade", nom: "La Pléiade"}], bio: "Le 'Prince des poètes', il célèbre l'amour, la nature et le mythe du Carpe Diem ('Mignonne allons voir...')." },
        { id: "dubellay", nom: "Joachim Du Bellay", genre: "poesie", mouvements: [{id: "pleiade", nom: "La Pléiade"}], bio: "Auteur du manifeste de la Pléiade, il invente la poésie de la nostalgie et de l'exil romain (Les Regrets)." },
        { id: "corneille", nom: "Pierre Corneille", genre: "theatre", mouvements: [{id: "baroque", nom: "Le Baroque"}, {id: "classicisme", nom: "Le Classicisme"}], bio: "Il invente le dilemme tragique de l'honneur (Le Cid) et la comédie de l'illusion (Le Menteur)." },
        { id: "moliere", nom: "Molière", genre: "theatre", mouvements: [{id: "classicisme", nom: "Le Classicisme"}], bio: "Génie de la comédie de caractères, il utilise le rire pour corriger les mœurs (Tartuffe, Dom Juan)." },
        { id: "racine", nom: "Jean Racine", genre: "theatre", mouvements: [{id: "classicisme", nom: "Le Classicisme"}], bio: "Maître de la fatalité, ses personnages (Phèdre) sont écrasés par des passions destructrices qu'ils ne peuvent maîtriser." },
        { id: "lafontaine", nom: "Jean de La Fontaine", genre: "poesie", mouvements: [{id: "classicisme", nom: "Le Classicisme"}], bio: "Il utilise l'apologue animalier pour échapper à la censure et dresser un portrait impitoyable de la Cour." },
        { id: "voltaire", nom: "Voltaire", genre: "idees", mouvements: [{id: "lumieres", nom: "Les Lumières"}], bio: "Polémiste féroce, il utilise le conte philosophique (Candide) et l'ironie pour écraser le fanatisme religieux ('l'infâme')." },
        { id: "rousseau", nom: "Jean-Jacques Rousseau", genre: "idees", mouvements: [{id: "lumieres", nom: "Les Lumières"}], bio: "Il affirme que l'homme naît bon et est corrompu par la société. Il invente l'autobiographie moderne (Les Confessions)." },
        { id: "montesquieu", nom: "Montesquieu", genre: "idees", mouvements: [{id: "lumieres", nom: "Les Lumières"}], bio: "Il utilise le regard de l'étranger (Lettres Persanes) pour critiquer la France et théorise la séparation des pouvoirs." },
        { id: "diderot", nom: "Denis Diderot", genre: "idees", mouvements: [{id: "lumieres", nom: "Les Lumières"}], bio: "Architecte de l'Encyclopédie, esprit libre et matérialiste, il invente de nouvelles formes narratives." },
        { id: "graffigny", nom: "Françoise de Graffigny", genre: "idees", mouvements: [{id: "lumieres", nom: "Les Lumières"}], bio: "Elle utilise le roman épistolaire pour dénoncer le sort des femmes et l'impérialisme européen avec un immense succès." },
        { id: "hugo", nom: "Victor Hugo", genre: "poesie", mouvements: [{id: "romantisme", nom: "Le Romantisme"}], bio: "Figure colossale du XIXe, poète mage, romancier engagé (Les Misérables) et fondateur du Drame romantique." },
        { id: "musset", nom: "Alfred de Musset", genre: "theatre", mouvements: [{id: "romantisme", nom: "Le Romantisme"}], bio: "Il incarne le 'Mal du siècle' et écrit un théâtre injouable à l'époque, mêlant une noirceur cruelle au sublime." },
        { id: "balzac", nom: "Honoré de Balzac", genre: "roman", mouvements: [{id: "realisme", nom: "Le Réalisme"}], bio: "Créateur de La Comédie Humaine, il dresse le portrait exhaustif de la société, dominée par l'argent et l'ambition." },
        { id: "flaubert", nom: "Gustave Flaubert", genre: "roman", mouvements: [{id: "realisme", nom: "Le Réalisme"}], bio: "Maniaque du style ('le gueuloir'), il observe la bourgeoisie avec une ironie glaciale (Madame Bovary)." },
        { id: "zola", nom: "Émile Zola", genre: "roman", mouvements: [{id: "naturalisme", nom: "Le Naturalisme"}], bio: "Il applique la méthode scientifique au roman pour étudier les tares héréditaires et la classe ouvrière (Germinal)." },
        { id: "maupassant", nom: "Guy de Maupassant", genre: "roman", mouvements: [{id: "realisme", nom: "Le Réalisme"}, {id: "naturalisme", nom: "Le Naturalisme"}], bio: "Maître de la nouvelle, il porte un regard pessimiste sur la cruauté humaine, la guerre et la folie." },
        { id: "baudelaire", nom: "Charles Baudelaire", genre: "poesie", mouvements: [{id: "symbolisme", nom: "Le Symbolisme"}], bio: "À la croisée des chemins, il choque la morale en cherchant la beauté dans le mal, la ville et la souffrance (Spleen)." },
        { id: "rimbaud", nom: "Arthur Rimbaud", genre: "poesie", mouvements: [{id: "symbolisme", nom: "Le Symbolisme"}], bio: "Le poète fulgurant. Il dynamite les règles du vers pour atteindre l'inconnu avant de fuir définitivement la littérature." },
        { id: "verlaine", nom: "Paul Verlaine", genre: "poesie", mouvements: [{id: "symbolisme", nom: "Le Symbolisme"}], bio: "Poète de la musicalité, du vers impair et de la mélancolie douce, amant maudit de Rimbaud." },
        { id: "apollinaire", nom: "Guillaume Apollinaire", genre: "poesie", mouvements: [{id: "surrealisme", nom: "Le Surréalisme"}], bio: "Pont vers l'art moderne, il supprime la ponctuation (Alcools) et invente le calligramme." },
        { id: "camus", nom: "Albert Camus", genre: "roman", mouvements: [{id: "absurde", nom: "L'Absurde"}], bio: "Philosophe de l'absurde (L'Étranger) et de la révolte. Il prône la solidarité humaine face au silence du monde." },
        { id: "sarraute", nom: "Nathalie Sarraute", genre: "theatre", mouvements: [{id: "nouveau_roman", nom: "Le Nouveau Roman"}], bio: "Elle traque la violence microscopique cachée sous les mots banals de tous les jours (les tropismes)." }
    ],
    procedes: {
        lexicaux: [
            { categorie: "1. Le Lexique", items: [ 
                { nom: "Champ lexical", desc: "Réseau de mots autour d'un thème.", exemples: "Épée, sang, mort (la violence)." }, 
                { nom: "Néologisme", desc: "Création d'un mot nouveau.", exemples: "Bovarysme." },
                { nom: "Registres de langue", desc: "Familier, courant, soutenu.", exemples: "« Se casser » (familier)." }
            ]}
        ],
        grammaticaux: [
            { categorie: "2. Syntaxe et Enonciation", items: [ 
                { nom: "Parataxe", desc: "Phrases juxtaposées sans mots de liaison (crée de la vitesse).", exemples: "Je suis venu, j'ai vu, j'ai vaincu." },
                { nom: "Hypotaxe", desc: "Abondance de subordonnées (crée de la lenteur/explication).", exemples: "Parce qu'il pleuvait, alors que je sortais..." },
                { nom: "Apostrophe", desc: "Le fait de s'adresser directement à quelqu'un/quelque chose.", exemples: "Ô temps, suspends ton vol !" },
                { nom: "Anacoluthe", desc: "Rupture brutale dans la construction syntaxique.", exemples: "Le nez de Cléopâtre, s'il eût été plus court, toute la face de la terre aurait changé." }
            ]}
        ],
        figures: [
            { categorie: "3. Figures d'Analogie (Images)", items: [ 
                { nom: "Comparaison", desc: "Rapprochement avec un outil (comme, tel).", exemples: "Fort comme un lion." },
                { nom: "Métaphore", desc: "Comparaison sans outil (fusion).", exemples: "Cet homme est un lion." },
                { nom: "Personnification", desc: "Donner des traits humains à un objet.", exemples: "Le vent hurlait." },
                { nom: "Allégorie", desc: "Matérialiser une idée abstraite.", exemples: "La Faucheuse (la Mort)." }
            ]},
            { categorie: "4. Figures d'Opposition", items: [ 
                { nom: "Antithèse", desc: "Opposition de deux idées dans une phrase.", exemples: "Je vis, je meurs." },
                { nom: "Oxymore", desc: "Deux mots contraires collés l'un à l'autre.", exemples: "Cette obscure clarté." },
                { nom: "Chiasme", desc: "Structure croisée A-B / B-A.", exemples: "Il faut manger pour vivre, non vivre pour manger." }
            ]},
            { categorie: "5. Figures d'Atténuation et d'Amplification", items: [
                { nom: "Litote", desc: "Dire moins pour suggérer plus.", exemples: "Je ne te hais point (= je t'aime)." },
                { nom: "Euphémisme", desc: "Adoucir une réalité brutale.", exemples: "Il nous a quittés (= il est mort)." },
                { nom: "Hyperbole", desc: "Exagération extrême.", exemples: "Je meurs de soif." },
                { nom: "Anaphore", desc: "Répétition en début de phrase/vers.", exemples: "Rome, l'unique objet... Rome, à qui..." }
            ]},
            { categorie: "6. Figures de Substitution", items: [
                { nom: "Métonymie", desc: "Le contenant pour le contenu.", exemples: "Boire un verre." },
                { nom: "Synecdoque", desc: "La partie pour le tout.", exemples: "Les voiles au loin (pour les bateaux)." },
                { nom: "Périphrase", desc: "Remplacer un mot par une expression.", exemples: "Le roi des animaux (le lion)." }
            ]}
        ],
        genre: [
            { categorie: "Spécifique à la Poésie", items: [ 
                { nom: "Enjambement / Rejet", desc: "La phrase déborde. Le rejet isole un mot au vers suivant.", exemples: "Et dès lors je m'y suis / Baigné." },
                { nom: "Assonance / Allitération", desc: "Répétition de voyelles (Assonance) ou de consonnes (Allitération).", exemples: "Les sanglots longs (o, on) / Pour qui sont ces serpents (s)." }
            ]},
            { categorie: "Spécifique au Théâtre", items: [ 
                { nom: "Didascalie", desc: "Indication de mise en scène non prononcée.", exemples: "(Il lève l'épée)." },
                { nom: "Stichomythie", desc: "Enchaînement de répliques très courtes.", exemples: "Marque une dispute verbale." }
            ]},
            { categorie: "Spécifique au Roman", items: [ 
                { nom: "Focalisation interne", desc: "Vision limitée à ce que sait un personnage.", exemples: "Julien crut qu'on le suivait." },
                { nom: "Discours indirect libre", desc: "Les pensées du perso se fondent dans la voix du narrateur sans guillemets.", exemples: "Emma pleurait. Comment avait-elle pu être si bête ?" }
            ]}
        ]
    },
    dissertations: {
        poesie: [
            {
                id: "rimbaud_douai", titre: "Cahier de Douai", auteur: "Arthur Rimbaud", parcours: "émancipations créatrices", mouvementId: "symbolisme",
                resume_mouvement: "Parnasse/Symbolisme : Rupture totale avec la poésie classique. Recherche de la voyance par le dérèglement des sens.",
                presentation_auteur: "Rimbaud fugue à 15 ans. Il rejette violemment les carcans de sa province, la bourgeoisie et la religion, avant d'arrêter d'écrire à 20 ans.",
                resume_complet: [
                    {partie: "Cahier 1 : Révolte intime", texte: "Satire féroce de la bourgeoisie de Charleville ('À la musique'). Exaltation de ses premiers désirs charnels ('Sensation')."},
                    {partie: "Cahier 2 : L'Histoire et l'Errance", texte: "Dénonciation glaçante de la guerre franco-prussienne ('Le Dormeur du val'). Le recueil culmine avec 'Ma Bohème', manifeste de la liberté absolue."}
                ],
                citations: [
                    {theme: "L'errance émancipatrice", items: [ 
                        {cit: "Par la nature, - heureux comme avec une femme.", loc: "Sensation", analyse: "Comparaison charnelle : la nature remplace la société humaine."}, 
                        {cit: "Mon auberge était à la Grande-Ourse.", loc: "Ma Bohème", analyse: "Métaphore : le cosmos devient le foyer du poète clochard."},
                        {cit: "Je m’en allais, les poings dans mes poches crevées", loc: "Ma Bohème", analyse: "Prosaïsme : revendication de la pauvreté matérielle au profit de la richesse poétique."}
                    ]},
                    {theme: "La révolte politique et sociale", items: [ 
                        {cit: "Tandis que les crachats rouges de la mitraille...", loc: "Le Mal", analyse: "Allitération brutale en [R] : la guerre souille le ciel divin."},
                        {cit: "Ils ont des bottines / À bavettes...", loc: "À la musique", analyse: "Description péjorative pour ridiculiser le conformisme bourgeois."},
                        {cit: "On n'est pas sérieux, quand on a dix-sept ans.", loc: "Roman", analyse: "Aphorisme devenu célèbre, justifiant l'insolence de la jeunesse."}
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Lettre du Voyant (Rimbaud)", source: "1871", analyse: "« Le Poète se fait voyant par un long dérèglement... » : La théorie qui naît juste après Douai."},
                    {titre: "L'Albatros (Baudelaire)", source: "1857", analyse: "La figure de l'artiste maudit et rejeté par la foule."},
                    {titre: "Gaspard de la Nuit (Aloysius Bertrand)", source: "1842", analyse: "La libération formelle (poème en prose) que Rimbaud accomplira plus tard."}
                ],
                plans: [
                    {type: "Dialectique (Bac)", sujet: "Le Cahier de Douai n'est-il que l'expression d'une révolte adolescente ?", parties: [
                        {titre: "I. Une révolte multiforme et fulgurante", sous_parties: ["A. La satire de l'étroitesse bourgeoise locale", "B. Le rejet virulent de la religion et de l'Empire", "C. La provocation par un comportement de vagabond"]},
                        {titre: "II. Une quête sensorielle et initiatique intense", sous_parties: ["A. La naissance du désir charnel (Nina, Roman)", "B. La fusion panthéiste avec une Nature consolatrice", "C. L'émerveillement lyrique face au monde vivant"]},
                        {titre: "III. Le véritable enjeu : l'émancipation du langage poétique", sous_parties: ["A. Le sabotage du sonnet et des formes classiques", "B. L'irruption fracassante du prosaïsme (mots familiers)", "C. La naissance du poète-Mage en marche"]}
                    ]},
                    {type: "Thématique (Bac)", sujet: "Comment s'opère l'émancipation créatrice dans le recueil ?", parties: [
                        {titre: "I. L'émancipation par le mouvement (la fugue)", sous_parties: ["A. La marche comme rythme fondateur du vers", "B. L'éloignement du cocon familial aliénant", "C. Le voyage comme mode d'acquisition du savoir absolu"]},
                        {titre: "II. L'émancipation idéologique", sous_parties: ["A. La démolition des figures d'autorité (militaires, curés)", "B. Le refus du patriotisme aveugle (la guerre de 70)", "C. Le choix assumé de la marginalité (la bohème)"]},
                        {titre: "III. L'émancipation esthétique radicale", sous_parties: ["A. Le jeu désinvolte avec la ponctuation et les rejets", "B. L'alliance inédite du sublime et du vulgaire", "C. L'invention d'images synesthésiques nouvelles"]}
                    ]}
                ]
            }
        ],
        idees: [
            {
                id: "graffigny_peruvienne", titre: "Lettres d'une Péruvienne", auteur: "Françoise de Graffigny", parcours: "un nouvel univers s'est offert à mes yeux", mouvementId: "lumieres",
                resume_mouvement: "Les Lumières : Philosophie de combat utilisant le 'regard de l'étranger' (roman épistolaire) pour dénoncer la censure, les inégalités et l'esclavage.",
                presentation_auteur: "Françoise de Graffigny (1695-1758) écrit un best-seller mondial. Elle dresse un réquisitoire précoce et féroce contre le sort fait aux femmes au XVIIIe siècle.",
                resume_complet: [
                    {partie: "Le Traumatisme et le Voyage", texte: "Zilia, princesse Inca, est enlevée le jour de ses noces avec Aza par les Espagnols, puis sauvée par le Français Déterville. Elle écrit à Aza via des nœuds (quipos). L'océan, le bateau : tout est terreur pure."},
                    {partie: "Le Regard sur Paris", texte: "Zilia déconstruit la société française. Elle s'attaque à la futilité, à l'orgueil de la Cour, et surtout à l'éducation pathétique des femmes. Déterville l'aime, mais elle reste fidèle."},
                    {partie: "L'Émancipation Finale", texte: "Zilia apprend le français. Aza arrive à Paris, mais s'est converti et va épouser une Espagnole. Anéantie, Zilia refuse pourtant d'épouser Déterville et choisit l'indépendance intellectuelle dans la solitude."}
                ],
                citations: [
                    {theme: "La Critique Sociale", items: [ 
                        {cit: "Tout ce que l'on fait dans ce pays-ci me paraît être en contradiction avec la raison.", loc: "Lettre 12", analyse: "La posture des Lumières : la France civilisée jugée barbare par l'étrangère."}, 
                        {cit: "Leur éducation se réduit presque à la politesse des manières...", loc: "Lettre 34", analyse: "Dénonciation de l'enfermement intellectuel des femmes."}
                    ]},
                    {theme: "L'Émancipation", items: [
                        {cit: "Le plaisir d'être, ce plaisir oublié, ignoré même de tant d'aveugles humains.", loc: "Lettre 41", analyse: "La conquête finale de l'autonomie et du bonheur philosophique sans les hommes."}
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Lettres Persanes (Montesquieu)", source: "1721", analyse: "L'origine du procédé de l'œil naïf étranger pour satiriser la France."},
                    {titre: "Des Coches (Montaigne)", source: "1588", analyse: "La dénonciation de la cruauté des conquêtes européennes aux Amériques."}
                ],
                plans: [
                    {type: "Dialectique (Bac)", sujet: "Le roman n'est-il qu'une simple satire des mœurs du XVIIIe siècle ?", parties: [
                        {titre: "I. Un réquisitoire cinglant contre la France", sous_parties: ["A. Dénonciation du règne des apparences et de l'argent", "B. Critique féroce de la condition féminine (lettre 34)", "C. Le mépris de l'impérialisme colonial européen"]},
                        {titre: "II. Un profond roman de l'exil et de la perte", sous_parties: ["A. Le traumatisme spatial et culturel ('le nouvel univers')", "B. La lettre amoureuse comme seul lien de survie mentale", "C. La douleur de la trahison finale (la perte de l'idéal)"]},
                        {titre: "III. La trajectoire d'une émancipation inédite", sous_parties: ["A. L'apprentissage du langage (des quipos à la traduction)", "B. Le renversement de l'autorité (Zilia éduque Déterville)", "C. La fin anti-romanesque (le refus du mariage pour la liberté intellectuelle)"]}
                    ]},
                    {type: "Thématique (Bac)", sujet: "Analysez la progression du 'nouvel univers' affronté par Zilia.", parties: [
                        {titre: "I. Le cauchemar physique et matériel", sous_parties: ["A. La prison flottante (le navire, l'océan effrayant)", "B. La technologie européenne perçue comme magique/incompréhensible", "C. L'agression visuelle des miroirs et de la mode"]},
                        {titre: "II. Le choc moral et sociologique", sous_parties: ["A. La découverte d'une société profondément inégalitaire", "B. Le badinage français opposé à la sincérité inca", "C. La prise de conscience de la misogynie systémique"]},
                        {titre: "III. L'appropriation de l'univers intellectuel", sous_parties: ["A. La conquête de la langue écrite et lue", "B. La bibliothèque comme nouvel espace de liberté infinie", "C. La fondation de son propre monde (sa maison de retraite philosophique)"]}
                    ]}
                ]
            }
        ],
        theatre: [
            {
                id: "musset_badine", titre: "On ne badine pas avec l'amour", auteur: "Alfred de Musset", parcours: "les jeux du cœur et de la parole", mouvementId: "romantisme",
                resume_mouvement: "Romantisme : Rupture absolue. On sublime la souffrance, on brise la règle des 3 unités, on mélange les clowns et le sang.",
                presentation_auteur: "L'enfant terrible du siècle. Écrite après sa déchirante rupture avec George Sand, la pièce est conçue pour être lue et non jouée.",
                resume_complet: [
                    {partie: "Le faux départ", texte: "Camille, sortant du couvent, et Perdican, docteur, doivent se marier. Mais Camille repousse froidement Perdican car les sœurs l'ont convaincue que tous les hommes sont des monstres."},
                    {partie: "L'escalade de l'orgueil", texte: "S'ensuit une guerre idéologique. Perdican séduit exprès une paysanne innocente (Rosette) pour piquer l'orgueil de Camille. Les mots deviennent des poignards."},
                    {partie: "La catastrophe", texte: "Poussés à bout, Camille et Perdican s'avouent leur passion dévorante. Mais Rosette, cachée, écoute et meurt foudroyée de chagrin. Les amants sont maudits pour avoir 'badiné'."}
                ],
                citations: [
                    {theme: "L'absolu romantique", items: [
                        {cit: "Le monde n'est qu'un égout sans fond [...] mais il y a au monde une chose sainte et sublime...", loc: "Tirade de Perdican", analyse: "L'oxymore fondateur : seule la capacité d'aimer sauve l'humanité de la boue."},
                        {cit: "Tous les hommes sont menteurs, inconstants...", loc: "Camille", analyse: "L'accumulation qui traduit l'endoctrinement misandre du couvent."}
                    ]},
                    {theme: "Le drame de la parole", items: [
                        {cit: "On ne badine pas avec l'amour.", loc: "Perdican", analyse: "La sentence finale. Le jeu mondain se heurte à la tragédie de la mort (Rosette)."}
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Le Jeu de l'amour et du hasard (Marivaux)", source: "1730", analyse: "L'ancêtre du badinage. Mais au XVIIIe, le mensonge verbal se termine bien, contrairement au XIXe romantique."},
                    {titre: "Lorenzaccio (Musset)", source: "1834", analyse: "Le danger incurable du masque et du jeu."}
                ],
                plans: [
                    {type: "Dialectique (Bac)", sujet: "Le langage n'est-il qu'un outil de mensonge dans cette pièce ?", parties: [
                        {titre: "I. La parole comme masque et stratégie", sous_parties: ["A. Le discours formaté du couvent (Camille)", "B. Le badinage cruel de Perdican avec Rosette", "C. Les commérages ridicules des grotesques"]},
                        {titre: "II. Mais il est le véhicule du sublime romantique", sous_parties: ["A. La grande tirade lyrique de Perdican sur l'amour", "B. L'aveu de faiblesse et les larmes", "C. La vérité nue et tragique de la paysanne"]},
                        {titre: "III. La faillite finale du langage", sous_parties: ["A. L'incommunicabilité des orgueils", "B. Les lettres interceptées qui détruisent tout", "C. Le silence glacial de la mort de Rosette"]}
                    ]},
                    {type: "Thématique (Bac)", sujet: "Montrez comment la pièce glisse de la comédie vers la tragédie.", parties: [
                        {titre: "I. Un point de départ ancré dans la comédie traditionnelle", sous_parties: ["A. Le motif du mariage arrangé", "B. Le duo comique des tuteurs (Blazius, Bridaine)", "C. Le dépit amoureux léger initial"]},
                        {titre: "II. L'irruption de la noirceur romantique ('Le Mal du Siècle')", sous_parties: ["A. Le poids étouffant de la religion et du passé", "B. La guerre d'ego qui devient perverse", "C. L'instrumentalisation d'une victime innocente"]},
                        {titre: "III. Le dénouement purement tragique", sous_parties: ["A. L'impossibilité du bonheur (la punition divine)", "B. Le sacrifice d'une vie sur l'autel de la vanité", "C. L'adieu irréversible des amants"]}
                    ]}
                ]
            }
        ],
        roman: [
            {
                id: "prevost_manon", titre: "Manon Lescaut", auteur: "Abbé Prévost", parcours: "personnages en marge, plaisirs du romanesque", mouvementId: "lumieres",
                resume_mouvement: "Prémices des Lumières : Émergence du roman moderne qui analyse la psychologie, l'argent roi, et questionne l'ordre moral strict.",
                presentation_auteur: "Prévost, homme d'Église au passé militaire et fuyard, publie en 1731 ce chef-d'œuvre sulfureux immédiatement interdit par la justice.",
                resume_complet: [
                    {partie: "Le coup de foudre et Paris", texte: "Des Grieux, étudiant modèle, s'enfuit avec la belle Manon. Mais Manon aime l'argent. Elle le trompe. Enfermement, puis retrouvailles. Ils basculent dans la triche et le vol."},
                    {partie: "La déchéance et l'Amérique", texte: "Incarcérés, ils s'évadent en tuant. Finalement, Manon est déportée en Louisiane comme fille de joie. Des Grieux la suit. Ils trouvent la paix morale dans la pauvreté, avant de fuir dans le désert où Manon meurt."}
                ],
                citations: [
                    {theme: "La fatalité destructrice", items: [
                        {cit: "Elle me parut si charmante que moi [...] je me trouvai enflammé tout d'un coup.", loc: "Des Grieux", analyse: "Le lexique de l'incendie souligne la perte totale de la raison."},
                        {cit: "Je frémis, comme il arrive lorsqu'on marche la nuit dans une campagne solitaire.", loc: "Des Grieux", analyse: "Comparaison annonciatrice de l'errance morale et criminelle."}
                    ]},
                    {theme: "La Marge", items: [
                        {cit: "Manon était passionnée pour le plaisir ; je l'étais pour elle.", loc: "Des Grieux", analyse: "Le chiasme sémantique qui explique l'impasse de leur amour et la nécessité de l'argent."}
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Carmen (Prosper Mérimée)", source: "1845", analyse: "La fascination romanesque pour la femme fatale de la marge, qui entraîne la chute du soldat."},
                    {titre: "La Dame aux Camélias (Dumas fils)", source: "1848", analyse: "La courtisane au grand cœur, réhabilitée par son sacrifice final."}
                ],
                plans: [
                    {type: "Dialectique (Bac)", sujet: "Le roman n'est-il que le récit d'une dégradation morale insupportable ?", parties: [
                        {titre: "I. Une longue descente dans l'illégalité et le vice", sous_parties: ["A. La perte du statut aristocratique (le déclassement)", "B. La vénalité et la tricherie assumées", "C. Le sang versé (meurtre du gardien)"]},
                        {titre: "II. Mais sublimée par la toute-puissance de la passion", sous_parties: ["A. La fidélité incroyable et aveugle du Chevalier", "B. Le mystère attachant de Manon", "C. L'illusion que l'amour justifie le crime"]},
                        {titre: "III. La rédemption finale comme conclusion morale", sous_parties: ["A. Le purgatoire américain", "B. La mort tragique et 'christique' de Manon", "C. Le récit comme acte de contrition totale"]}
                    ]},
                    {type: "Thématique (Bac)", sujet: "En quoi les 'plaisirs du romanesque' sont-ils centraux dans l'œuvre ?", parties: [
                        {titre: "I. L'intensité et le rythme de l'intrigue", sous_parties: ["A. La succession ininterrompue de péripéties (évasions, duels)", "B. Les revirements dramatiques de Manon", "C. L'absence de temps mort"]},
                        {titre: "II. La fascination pour l'interdit et la marge", sous_parties: ["A. La plongée dans les bas-fonds de Paris (Hôpital)", "B. Des personnages secondaires picaresques (Lescaut)", "C. La critique masquée d'une société corrompue"]},
                        {titre: "III. L'exotisme et le pathos larmoyant", sous_parties: ["A. La force de la narration à la première personne (empathie)", "B. Le voyage vers le Nouveau Monde", "C. La scène finale déchirante dans le désert"]}
                    ]}
                ]
            }
        ]
    }
};