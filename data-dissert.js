// data-dissert-poesie.js - Base de données (Objet d'étude : La Poésie)

const BDD_DISSERTATION = {
    poesie: [
        {
            id: "rimbaud_douai",
            titre: "Cahiers de Douai",
            auteur: "Arthur Rimbaud",
            parcours: {
                nom: "Émancipations créatrices",
                explication: "Le terme d'émancipation désigne l'action de s'affranchir d'une tutelle (morale, sociale ou esthétique). Le parcours souligne la trajectoire d'un adolescent qui se libère du joug maternel et provincial par la fugue, rejette les conventions bourgeoises et religieuses, et finit par s'affranchir des règles de la poésie classique (versification, thèmes nobles) pour inventer une modernité absolue."
            },
            biographie: "Jean Nicolas Arthur Rimbaud (1854-1891) naît à Charleville. Élevé par une mère rigide, brillant élève, il fugue à de multiples reprises vers Paris et la Belgique dès 1870. Il rédige la quasi-totalité de son œuvre fulgurante entre 15 et 20 ans, théorisant le poète « Voyant » avant d'abandonner définitivement la littérature pour devenir négociant en Afrique.",
            resume_complet: `Les Cahiers de Douai (ou Recueil Demeny) ne constituent pas un recueil publié par l'auteur de son vivant, mais un assemblage de vingt-deux poèmes confiés par le jeune Rimbaud à l'éditeur Paul Demeny lors de ses fugues en 1870. Cette œuvre marque la genèse d'un génie poétique en pleine ébullition, tiraillé entre l'admiration pour ses maîtres (Hugo, les Parnassiens) et le besoin vital de tout détruire pour tout réinventer. 
            <br><br>Dans un premier mouvement, la poésie de Rimbaud se fait l'écho d'une rébellion adolescente féroce et viscérale. Il dresse un réquisitoire impitoyable contre la société du Second Empire. Les poèmes politiques comme <em>Morts de Quatre-vingt-douze</em>, <em>Le Mal</em> ou <em>L'Éclatante victoire de Sarrebrück</em> dénoncent l'absurdité des boucheries militaires et la tyrannie d'un Napoléon III ridiculisé. Cette révolte s'étend à l'ordre social et religieux : dans <em>À la musique</em>, il croque avec une ironie mordante et un regard quasi caricatural la laideur et la mesquinerie des bourgeois de Charleville, tandis que <em>Le Châtiment de Tartufe</em> s'attaque directement à l'hypocrisie de l'Église. 
            <br><br>Cependant, le recueil ne se limite pas à la destruction ; il est aussi une vaste célébration sensorielle et vitale. La fugue n'est pas qu'une fuite, c'est une conquête de l'espace. À travers des poèmes comme <em>Sensation</em>, <em>Ma Bohème</em> ou <em>Au Cabaret-Vert</em>, Rimbaud chante l'ivresse du vagabondage, le contact rugueux et charnel avec la terre, et l'émerveillement d'une liberté totale où le corps dicte le rythme du vers. La Nature y remplace la mère castratrice ; elle devient une amante bienveillante et un asile absolu, comme l'illustre la douceur tragique du <em>Dormeur du val</em>. La découverte de la sensualité féminine et de l'érotisme (<em>Première soirée</em>, <em>Les Réparties de Nina</em>) participe à cet éveil d'un corps qui revendique ses pulsions contre la morale étriquée.
            <br><br>Enfin, l'émancipation est fondamentalement poétique et esthétique. Rimbaud amorce le dynamitage des codes. Il fait entrer le trivial, le laid et le prosaïque dans l'espace sacré de la poésie (les tartines de beurre, les souliers blessés, la femme hideuse de <em>Vénus Anadyomène</em>). Il maltraite l'alexandrin classique par des rejets brutaux, des enjambements constants et des césures asymétriques. Le recueil cristallise le moment précis où le jeune pasticheur surdoué mue pour devenir le « Voyant », annonçant la déconstruction totale qui s'accomplira plus tard dans <em>Une Saison en enfer</em> et les <em>Illuminations</em>.`,
            citations: [
                { cit: "Tandis que les crachats rouges de la mitraille / Sifflent tout le jour par l'infini du ciel bleu...", loc: "Le Mal", analyse: "Allitération en [r] et antithèse visuelle marquant la souillure de la guerre sur l'harmonie cosmique." },
                { cit: "Il est un Dieu, qui rit aux nappes damassées / Des autels, à l'encens, aux grands calices d'or ;", loc: "Le Mal", analyse: "Satire anticléricale féroce accusant l'indifférence de la religion face au massacre des peuples." },
                { cit: "Ils ont des bottines / À bavettes, dont les bouts couleur de tabac...", loc: "À la musique", analyse: "Métonymie dégradante et précision naturaliste pour ridiculiser le conformisme de la bourgeoisie." },
                { cit: "Le Roi se moque des clameurs du Peuple.", loc: "Morts de Quatre-vingt-douze", analyse: "Dénonciation explicite, sans filtre métaphorique, du mépris impérial (Napoléon III)." },
                { cit: "On n'est pas sérieux, quand on a dix-sept ans.", loc: "Roman", analyse: "Aphorisme impertinent revendiquant le droit à l'inconstance et à la liberté de la jeunesse." },
                { cit: "Par la nature, - heureux comme avec une femme.", loc: "Sensation", analyse: "Comparaison charnelle qui substitue la communion panthéiste à l'ordre social." },
                { cit: "Mon auberge était à la Grande-Ourse.", loc: "Ma Bohème", analyse: "Métaphore cosmique effaçant la misère matérielle du fugueur par l'hospitalité de l'univers." },
                { cit: "Je m’en allais, les poings dans mes poches crevées ;", loc: "Ma Bohème", analyse: "La revendication visuelle et provocatrice de la pauvreté comme espace de liberté poétique." },
                { cit: "Je demandai des tartines de beurre / Et du jambon qui fût à moitié froid.", loc: "Au Cabaret-Vert", analyse: "Irruption brutale du prosaïsme et du trivial au sein du vers noble." },
                { cit: "Nature, berce-le chaudement : il a froid.", loc: "Le Dormeur du val", analyse: "Apostrophe ironique et pathétique devant l'impuissance de la nature face à la mort." },
                { cit: "Puis, le col gras et gris, les larges omoplates / Qui saillent...", loc: "Vénus Anadyomène", analyse: "Destruction du blason poétique féminin par le lexique chirurgical de la laideur." },
                { cit: "Comme des lyres, je tirais les élastiques / De mes souliers blessés...", loc: "Ma Bohème", analyse: "Désacralisation de l'attribut d'Orphée (la lyre) remplacé par l'objet usé du marcheur." },
                { cit: "J'égrenais dans ma course / Des rimes.", loc: "Ma Bohème", analyse: "Le rythme de la marche physique qui engendre la mécanique même de la création poétique." },
                { cit: "Et qui porte au nombril une plaie effrayante.", loc: "Vénus Anadyomène", analyse: "Clôture du sonnet sur une note morbide, achevant la parodie de la mythologie classique." },
                { cit: "Un rire de l'autre monde.", loc: "Soleil et chair", analyse: "Synesthésie et mystique annonçant la future poésie de la voyance rimbaldienne." },
                { cit: "Baignant mes cheveux nus dans les cendres du jour.", loc: "Soleil et chair", analyse: "Fusion panthéiste entre le corps de l'adolescent et la dégradation de la lumière temporelle." },
                { cit: "J'irai loin, bien loin, comme un bohémien.", loc: "Sensation", analyse: "La nécessité viscérale, répétitive et presque hypnotique de la fuite spatiale." },
                { cit: "C’est un trou de verdure où chante une rivière.", loc: "Le Dormeur du val", analyse: "Personnification idyllique trompeuse, rendant la chute finale du poème encore plus choquante." },
                { cit: "Le soleil, le foyer de tendresse et de vie...", loc: "Soleil et chair", analyse: "L'allégorie de la lumière comme principe vital opposé à l'obscurantisme de l'époque." },
                { cit: "Je sentais la douceur du grand ciel sur mon front.", loc: "Première soirée", analyse: "L'harmonie sensorielle trouvée exclusivement dans l'isolement du monde naturel." }
            ],
            docs_complementaires: [
                { titre: "Lettre du Voyant", source: "Arthur Rimbaud (1871)", citation: "Le Poète se fait voyant par un long dérèglement de tous les sens.", analyse: "La justification théorique et philosophique de la destruction des règles formelles entamée dans les Cahiers." },
                { titre: "Melancholia", source: "Victor Hugo (1856)", citation: "Où vont tous ces enfants dont pas un seul ne rit ?", analyse: "Le modèle direct de l'indignation sociale rimbaldienne face à la misère, visible dans 'Les Effarés'." },
                { titre: "L'Albatros", source: "Charles Baudelaire (1857)", citation: "Exilé sur le sol au milieu des huées...", analyse: "La figure du poète maudit, marginalisé par la société bourgeoise, que Rimbaud incarne physiquement." },
                { titre: "Art poétique", source: "Paul Verlaine (1884)", citation: "De la musique avant toute chose...", analyse: "L'appel à la libération de la métrique et au vers impair, que Rimbaud expérimente intuitivement." },
                { titre: "Gaspard de la Nuit", source: "Aloysius Bertrand (1842)", citation: "L'art est le point de perfection de toute chose.", analyse: "L'exploration du poème en prose, étape décisive vers laquelle l'émancipation de Rimbaud le conduira bientôt." },
                { titre: "Les Villonades", source: "François Villon (1489)", citation: "Frères humains, qui après nous vivez...", analyse: "L'archétype du poète voyou et marginal, référence absolue pour la posture du bohème rimbaldien." },
                { titre: "Les Regrets", source: "Joachim Du Bellay (1558)", citation: "Heureux qui, comme Ulysse, a fait un beau voyage...", analyse: "Le contraste ironique : Rimbaud fuit le foyer là où Du Bellay le pleurait, inversant la dynamique du voyage." },
                { titre: "Gargantua", source: "François Rabelais (1534)", citation: "Fais ce que voudras.", analyse: "L'idéal rabelaisien d'émancipation physique et intellectuelle que Rimbaud applique à ses fugues." },
                { titre: "L'Éducation sentimentale", source: "Gustave Flaubert (1869)", citation: "Il voyagea. Il connut la mélancolie des paquebots.", analyse: "Le mal du siècle et la désillusion post-adolescente contre lesquels Rimbaud tente de s'élever par l'action violente." },
                { titre: "Les Châtiments", source: "Victor Hugo (1853)", citation: "Napoléon le Petit...", analyse: "Le précédent de la poésie satirique et politique visant l'Empire, que Rimbaud imite et radicalise." }
            ],
            plans: [
                {
                    sujet: "Un critique écrit à propos d’Arthur Rimbaud : « Son désir ? Tout réinventer, tout vivre, tout redire. Tout abattre d’abord ». Dans quelle mesure cette citation éclaire-t-elle votre lecture du recueil Cahier de Douai ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La dimension destructrice : « Tout abattre d'abord »",
                            sous_parties: [
                                "A. Le dynamitage des piliers de l'ordre social (Satire féroce de la bourgeoisie de Charleville, de la religion hypocrite et du pouvoir impérial de Napoléon III).",
                                "B. Le saccage irrévérencieux de la tradition littéraire (Démystification de l'Antiquité avec Vénus Anadyomène, rejet du Parnasse).",
                                "C. L'agression formelle contre la versification classique (Multiplication des rejets, enjambements discordants, irruption brutale du prosaïsme)."
                            ]
                        },
                        {
                            titre: "II. Une soif inépuisable d'expériences : « Tout vivre »",
                            sous_parties: [
                                "A. La fugue et le vagabondage comme nécessité physique et philosophique de ressentir le monde en marche (Ma Bohème).",
                                "B. La célébration d'une exaltation sensorielle et charnelle nouvelle (Érotisme adolescent, fusion panthéiste avec la Nature).",
                                "C. La confrontation directe avec les aspérités du réel (La guerre, la misère, l'horreur des morts de 1870 affrontée sans filtre)."
                            ]
                        },
                        {
                            titre: "III. La genèse d'un langage neuf : « Tout réinventer, tout redire »",
                            sous_parties: [
                                "A. La formulation d'un lyrisme radicalement réinventé (Le corps et le pas qui dictent le rythme du poème).",
                                "B. La sublimation du trivial et de la laideur érigée en nouveau critère esthétique moderne.",
                                "C. Les prémices évidentes du poète « Voyant » (La marche vers un affranchissement total de la métrique qui aboutira à la prose)."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Les Cahiers de Douai apparaissent-ils dans leur entièreté comme un acte de révolte ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Un recueil dominé par une rébellion incandescente et multiforme",
                            sous_parties: [
                                "A. La révolte politique et historique (Le réquisitoire antimilitariste contre l'absurdité du Second Empire).",
                                "B. La rébellion morale et sociétale (La haine de l'enfermement provincial, la caricature féroce des notables et de l'Église).",
                                "C. La sédition esthétique (L'assassinat délibéré des conventions classiques de la Beauté idéalisée)."
                            ]
                        },
                        {
                            titre: "II. La présence paradoxale d'un héritage et d'un respect des formes",
                            sous_parties: [
                                "A. La soumission formelle (Le maintien rigoureux des structures du sonnet et de la rime classique pour mieux la détourner).",
                                "B. L'hommage aux aînés romantiques (L'influence incontestable de la pitié sociale de Victor Hugo pour les misérables).",
                                "C. La persistance d'une aspiration baudelairienne et parnassienne (La musicalité, les correspondances sensorielles)."
                            ]
                        },
                        {
                            titre: "III. Au-delà de la destruction, une grande poésie de l'émancipation heureuse",
                            sous_parties: [
                                "A. L'utopie de la liberté absolue (L'errance idéalisée remplaçant la haine de la sédentarité).",
                                "B. La naissance d'une cosmogonie personnelle (La nature comme foyer bienveillant, l'univers remplaçant la famille).",
                                "C. L'acte de création pur (La révolte n'est qu'un prélude nécessaire à la définition d'un art poétique de l'avenir)."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "ponge_rage",
            titre: "La rage de l'expression",
            auteur: "Francis Ponge",
            parcours: {
                nom: "Dans l'atelier du poète",
                explication: "Ce parcours invite à observer le travail d'écriture en train de se faire. Au lieu de livrer un texte fini, figé et parfait, le poète ouvre les portes de son laboratoire. On y voit ses doutes, ses ratures, son recours aux dictionnaires, et sa lutte acharnée pour faire correspondre le langage (imparfait) à la réalité de la matière."
            },
            biographie: "Francis Ponge (1899-1988) est un poète et essayiste français majeur du XXe siècle. Rejetant catégoriquement le lyrisme romantique, l'exaltation de l'âme et les idées métaphysiques, il adhère brièvement au parti communiste et au surréalisme. Il fonde une poétique matérialiste radicale, consacrant sa vie à l'observation minutieuse des objets les plus banals (Le Parti pris des choses).",
            resume_complet: `<em>La rage de l'expression</em>, publié en 1952, rassemble des textes écrits principalement entre 1939 et 1941. Il ne s'agit pas d'un recueil de poèmes au sens classique, mais de la publication brute de journaux de création, de brouillons, de notes et d'ébauches successives. Ponge y livre une guerre totale et exténuante contre l'inadéquation du langage face au réel.
            <br><br>Dans le premier texte, <em>Berges de la Loire</em>, le poète se heurte à la difficulté de décrire l'informe : le fleuve, le sable, le ciel gris. Il refuse d'utiliser des métaphores faciles ou des clichés poétiques. L'enjeu est de trouver un vocabulaire et une syntaxe capables d'épouser le mouvement même de l'eau. Il note ses échecs, corrige ses perceptions et démontre que l'écriture est un travail de précision épuisant.
            <br><br>Avec <em>La Guêpe</em>, Ponge s'attaque au monde animal. L'objectif n'est pas de faire une description biologique de l'insecte, mais de recréer linguistiquement son agressivité, son bourdonnement, sa vibration électrique. Il plonge dans le dictionnaire de Littré, exhume des étymologies, crée des néologismes mimétiques (comme le célèbre « ce mot lui-même se guêpe »). Le poème devient l'insecte.
            <br><br><em>Le Carnet du bois de pins</em> constitue le cœur idéologique de l'œuvre. Construit sous forme de journal daté, il expose jour après jour les impasses de l'écrivain face à une forêt du Midi. On y voit l'auteur barrer ses phrases, avouer ses erreurs (« voici mon erreur de mardi dernier »), et recommencer inlassablement. L'objet (le pin) résiste violemment à la langue. Ponge impose ainsi une éthique de l'écriture : la poésie n'est pas un don de Dieu, c'est une science linguistique de la matière, un combat artisanal quotidien pour empêcher la pensée de falsifier la réalité muette des choses.`,
            citations: [
                { cit: "C'est une rage, une fureur... de l'expression.", loc: "Préface", analyse: "Définit l'écriture comme une pulsion vitale, physique et douloureuse contre le silence des choses." },
                { cit: "Il faut que la chose s’exprime.", loc: "Berges de la Loire", analyse: "L'effacement total du 'Je' romantique : le poète n'est plus qu'un porte-voix pour la matière inerte." },
                { cit: "La guêpe (ce mot lui-même se guêpe).", loc: "La Guêpe", analyse: "Le néologisme mimétique parfait où le signifiant (le mot) fusionne matériellement avec le signifié (l'insecte)." },
                { cit: "Ôte de ton esprit que ceci soit un poème. / C’est un « brouillon ».", loc: "L'Œillet", analyse: "La déconstruction du pacte de lecture classique. L'inachèvement est revendiqué comme forme finale." },
                { cit: "Je n'ai pas de dictionnaire ici, mais je le trouverai.", loc: "La Guêpe", analyse: "L'outillage de l'artisan mis en évidence : l'étymologie remplace l'inspiration des muses." },
                { cit: "Les mots à la fois nous expriment et nous trahissent.", loc: "Le Carnet du bois de pins", analyse: "Le paradoxe linguistique fondamental au cœur de la souffrance de l'écrivain." },
                { cit: "Le pin se dresse, c'est un fait.", loc: "Le Carnet du bois de pins", analyse: "La parataxe froide, scientifique et comportementaliste refusant toute idéalisation lyrique de la nature." },
                { cit: "L’eau n’a aucune forme à elle.", loc: "Berges de la Loire", analyse: "Le défi impossible du poète : comment décrire linguistiquement une matière par essence informe." },
                { cit: "Il faut s'enfoncer dans la matière.", loc: "Le Mimosa", analyse: "L'injonction phénoménologique à observer le monde concret avant toute théorie philosophique." },
                { cit: "Une sorte d'agressivité électrique.", loc: "La Guêpe", analyse: "L'utilisation de la métaphore technologique moderne pour décrire la vivacité du monde animal." },
                { cit: "Je ne suis pas de ceux qui chantent l'âme.", loc: "Notes diverses", analyse: "Le manifeste anti-romantique et anti-symboliste affirmant son matérialisme strict." },
                { cit: "Tout ce qui est sentiment m'ennuie.", loc: "Préface", analyse: "Le rejet de la fonction cathartique de la littérature au profit de la rigueur objective." },
                { cit: "Le soleil est une étoile de classe G.", loc: "Le Carnet du bois de pins", analyse: "L'irruption frontale du discours astronomique et encyclopédique dans le champ de la poésie." },
                { cit: "Observons plutôt ce caillou.", loc: "Notes diverses", analyse: "La réorientation du regard : des cieux métaphysiques vers le détail microscopique du monde terrestre." },
                { cit: "Lisons ensemble ces ratures.", loc: "Le Carnet du bois de pins", analyse: "La rupture du quatrième mur, transformant le lecteur en témoin direct du laboratoire littéraire." },
                { cit: "Voici mon erreur de mardi dernier.", loc: "Le Carnet du bois de pins", analyse: "L'humilité de l'artisan datant ses échecs pour démystifier le mythe romantique du génie foudroyant." },
                { cit: "Je reprends tout à zéro.", loc: "La Guêpe", analyse: "La mécanique de l'obsession cyclique et de la persévérance artistique." },
                { cit: "Voyez comment le mot résiste.", loc: "Le Mimosa", analyse: "La personnification du langage, traité comme une matière solide et dure à tailler." },
                { cit: "Fin de l'expérience.", loc: "L'Œillet", analyse: "La formule de clôture empruntée aux comptes-rendus de laboratoires scientifiques." },
                { cit: "Pas de métaphores grandiloquentes.", loc: "Berges de la Loire", analyse: "L'exigence d'une épuration stylistique contre l'ornementation poétique jugée trompeuse." }
            ],
            docs_complementaires: [
                { titre: "L'Art poétique", source: "Boileau (1674)", citation: "Vingt fois sur le métier remettez votre ouvrage.", analyse: "L'idéal classique du travail acharné, que Ponge pousse à l'extrême en publiant les vingt fois." },
                { titre: "Le Parti pris des choses", source: "Francis Ponge (1942)", citation: "Le monde muet est notre seule patrie.", analyse: "La racine philosophique de son œuvre : la nécessité éthique de donner une voix aux objets." },
                { titre: "Calligrammes", source: "Guillaume Apollinaire (1918)", citation: "Il pleut", analyse: "La tentative visuelle de faire coïncider la forme typographique du poème avec la physique de l'objet." },
                { titre: "Les Mots", source: "Jean-Paul Sartre (1964)", citation: "Les mots sont des pistolets chargés.", analyse: "La parenté philosophique sur le poids, la densité et la fonction utilitaire du vocabulaire." },
                { titre: "Crise de vers", source: "Stéphane Mallarmé (1897)", citation: "Je dis : une fleur ! et, hors de l'oubli...", analyse: "L'exploration du gouffre entre le mot (conceptuel) et la chose matérielle, défi central de Ponge." },
                { titre: "De la Nature des Choses", source: "Lucrèce (Ier siècle av. J.-C.)", citation: "Rien ne naît de rien.", analyse: "Le fondement de la philosophie matérialiste antique dont Ponge se revendique ouvertement." },
                { titre: "Discours de la méthode", source: "René Descartes (1637)", citation: "Me rendre comme maître et possesseur de la nature.", analyse: "La volonté d'appropriation du monde par la rationalité, appliquée par Ponge au champ de la langue." },
                { titre: "Une Charogne", source: "Charles Baudelaire (1857)", citation: "Rappelez-vous l'objet que nous vîmes...", analyse: "L'ancêtre de l'observation crue d'un objet en décomposition, traitée avec une précision clinique." },
                { titre: "La Jalousie", source: "Alain Robbe-Grillet (1957)", citation: "L'ombre du pilier se projette sur les dalles.", analyse: "L'esthétique de la phénoménologie du Nouveau Roman : la description géométrique pure, sans psychologie." },
                { titre: "Le Mythe de Sisyphe", source: "Albert Camus (1942)", citation: "Il faut imaginer Sisyphe heureux.", analyse: "L'allégorie de l'écrivain artisan (Ponge) reprenant inlassablement son brouillon voué à l'échec." }
            ],
            plans: [
                {
                    sujet: "Selon un critique, La rage de l’expression donne à voir « l’écriture en plein travail et se regardant travailler ». Cette citation éclaire-t-elle votre lecture de l’œuvre ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La mise à nu spectaculaire du laboratoire poétique",
                            sous_parties: [
                                "A. Le refus de l'œuvre finie au profit du « brouillon » assumé (Publication des ratures, des variantes).",
                                "B. La chronologie de l'effort (Un journal daté montrant l'évolution et les impasses de la pensée).",
                                "C. L'omniprésence de l'outillage de l'artisan (Les références systématiques au dictionnaire, à l'étymologie)."
                            ]
                        },
                        {
                            titre: "II. Le métadiscours : une œuvre qui réfléchit sur ses propres limites",
                            sous_parties: [
                                "A. Le constat d'échec face au réel (L'incapacité d'épuiser l'objet avec de simples mots).",
                                "B. La critique en direct des procédés littéraires (Rejet des métaphores faciles et du lyrisme usé).",
                                "C. L'intervention constante de l'auteur jugeant sa propre production (« Voici mon erreur »)."
                            ]
                        },
                        {
                            titre: "III. Au-delà de l'exercice de style, la quête d'une vérité éthique",
                            sous_parties: [
                                "A. L'effacement de l'ego de l'écrivain face à la primauté de la matière.",
                                "B. La transparence totale imposée au lecteur (Briser l'illusion du génie romantique inspiré par les cieux).",
                                "C. L'invention d'une nouvelle beauté esthétique issue de la persévérance et de l'inachèvement."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Dans « L’œillet », Francis Ponge écrit : « Je ne me prétends pas poète. Je crois ma vision fort commune ». Dans quelle mesure cette affirmation correspond-elle à votre lecture de son œuvre ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Une œuvre qui rejette farouchement les postures poétiques traditionnelles",
                            sous_parties: [
                                "A. La destruction méthodique de l'image du poète lyrique ou du mage romantique.",
                                "B. Le choix volontaire de sujets d'une absolue banalité (Le sable, le mimosa, la guêpe) au détriment des grands thèmes nobles.",
                                "C. L'adoption d'un ton scientifique, objectif, sec et d'un lexique emprunté à la prose utilitaire."
                            ]
                        },
                        {
                            titre: "II. Le paradoxe d'un texte qui relève pourtant de la plus haute poésie",
                            sous_parties: [
                                "A. Le formidable pouvoir d'évocation sensorielle des textes (Synesthésies, jeux de sonorités, allitérations).",
                                "B. L'invention linguistique et la création de néologismes fulgurants (La langue poussée dans ses ultimes retranchements).",
                                "C. Le retour constant de l'image et de l'analogie poétique pour pallier les manques du dictionnaire."
                            ]
                        },
                        {
                            titre: "III. La redéfinition d'un humanisme matérialiste (Le poète nouveau)",
                            sous_parties: [
                                "A. La « vision commune » érigée en vertu d'humilité philosophique face à l'arrogance de l'intellectuel.",
                                "B. Le langage redécouvert dans son épaisseur matérielle et charnelle.",
                                "C. Une poésie pédagogique qui réapprend au lecteur à observer la beauté vertigineuse du monde muet."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "dorion_forets",
            titre: "Mes forêts",
            auteur: "Hélène Dorion",
            parcours: {
                nom: "La poésie, la nature, l'intime",
                explication: "Ce parcours explore la fusion viscérale entre le moi (l'intime) et le paysage (la nature) à travers l'outil du langage (la poésie). La poétesse canadienne utilise le décor majestueux et menacé des forêts boréales non pas comme un simple arrière-plan, mais comme un miroir psychologique de ses deuils et comme un espace de méditation sur l'urgence écologique contemporaine."
            },
            biographie: "Hélène Dorion, née au Québec en 1958, est une poétesse, romancière et essayiste majeure de la francophonie contemporaine (et la première femme vivante à entrer au programme du bac français). Son œuvre, profondément marquée par l'immensité des paysages canadiens, interroge la fragilité de la condition humaine face au temps géologique et à la crise environnementale.",
            resume_complet: `Le recueil <em>Mes forêts</em>, publié en 2021, est structuré en quatre grandes sections. C'est une plongée organique, existentielle et écologique au cœur du monde végétal et minéral du Québec. Écrit en vers libres, dépourvu de ponctuation stricte, le texte épouse le mouvement ininterrompu du vent, des saisons et de la mémoire.
            <br><br>La première section, <em>L'écorce incertaine</em>, pose les fondations d'une fusion intime entre le corps de la poétesse et la matière des arbres. L'observation du cycle des saisons, de la chute des feuilles et du durcissement de l'écorce sert de métaphore à l'expérience douloureuse du vieillissement humain. La forêt devient le lieu d'une introspection mélancolique où la fragilité de la chair trouve un écho dans la fragilité du bois.
            <br><br>Dans <em>Une chute de galets</em>, le recueil s'assombrit. L'évocation minérale prend le pas sur le végétal pour symboliser l'aridité, la pétrification de la douleur et l'accumulation des deuils personnels. Les pierres et les troncs tombés deviennent les stèles silencieuses des amours perdues et des disparus. La nature n'y est pas un refuge paradisiaque, mais une chambre d'écho psychanalytique des peines intimes ineffaçables.
            <br><br>Avec <em>Le bruissement du temps</em>, Hélène Dorion orchestre une symphonie sensorielle de la forêt. Le lecteur est invité à écouter le temps géologique et végétal, infiniment plus lent et sage que le temps trépidant des sociétés humaines. L'écoute du vent dans les hautes branches agit comme une méditation spirituelle, forçant l'humain à accepter l'impermanence de sa condition et la petitesse de son existence face à la mémoire des arbres.
            <br><br>Enfin, <em>L'horizon des événements</em> ouvre le recueil sur une conscience écologique globale et anxieuse. L'autrice dresse le constat effrayant de la destruction de l'environnement (déforestation, incendies liés au réchauffement, silence de l'extinction des espèces). Le saccage industriel de la nature est assimilé à une automutilation de l'humanité. Cependant, l'œuvre ne s'achève pas sur un nihilisme total : l'acte d'écrire de la poésie est perçu comme la plantation d'une graine, une confiance obstinée dans la résilience de la sève et du mot face au désastre.`,
            citations: [
                { cit: "Mes forêts sont de longues tiges de chair.", loc: "Mes forêts sont...", analyse: "Métaphore organique abolissant la frontière conceptuelle entre le règne végétal et le corps humain." },
                { cit: "L'écorce de mes jours se détache.", loc: "L'écorce incertaine", analyse: "Allégorie somatique du vieillissement et de l'usure de l'existence acceptée." },
                { cit: "Mes forêts sont des miroirs d'eau trouble.", loc: "Une chute de galets", analyse: "Le paysage institué en espace d'introspection psychanalytique des douleurs enfouies." },
                { cit: "Je respire au rythme des branches.", loc: "Le bruissement du temps", analyse: "La respiration naturelle dicte la scansion et le rythme vital du vers poétique libre." },
                { cit: "Je marche dans les cendres de mes ancêtres.", loc: "L'écorce incertaine", analyse: "La forêt envisagée comme un immense cimetière sacré et lieu de recueillement mémoriel." },
                { cit: "Chaque cerne de l'arbre est un deuil enfoui.", loc: "Une chute de galets", analyse: "L'analogie chronologique parfaite entre la croissance du végétal et l'accumulation des pertes humaines." },
                { cit: "Le temps creuse ses sillons dans la mousse.", loc: "Le bruissement du temps", analyse: "L'usure matérielle observée comme la trace tangible et silencieuse de l'Histoire du monde." },
                { cit: "L'instant vacille comme une feuille morte.", loc: "L'horizon des événements", analyse: "Comparaison classique renouvelée pour illustrer l'impermanence de la condition terrestre." },
                { cit: "Le silence est le gardien des siècles.", loc: "Le bruissement du temps", analyse: "Allégorie de la mémoire naturelle, infiniment supérieure et plus vaste que la mémoire humaine." },
                { cit: "Le bruit des haches résonne dans mes veines.", loc: "L'horizon des événements", analyse: "Synesthésie de la douleur empathique : la déforestation est vécue comme une mutilation interne." },
                { cit: "Les troncs mutilés pleurent une résine noire.", loc: "Une chute de galets", analyse: "Personnification tragique du bois pour souligner l'atrocité de l'exploitation industrielle." },
                { cit: "La cendre remplace l'horizon.", loc: "L'écorce incertaine", analyse: "Image apocalyptique et factuelle des méga-incendies ravageant l'avenir boréal." },
                { cit: "Un ciel vide d'oiseaux.", loc: "L'horizon des événements", analyse: "Métonymie glaçante du déclin de la biodiversité et de l'installation d'un silence mortifère." },
                { cit: "Nous avons oublié la langue de la sève.", loc: "Le bruissement du temps", analyse: "Le constat accusateur de l'amnésie humaine vis-à-vis des savoirs ancestraux du vivant." },
                { cit: "Écrire, c'est replanter une graine dans la faille.", loc: "L'écorce incertaine", analyse: "Métaphore définissant la nécessité de l'acte littéraire comme un geste de sauvegarde environnementale." },
                { cit: "La sève finit toujours par remonter.", loc: "L'horizon des événements", analyse: "Affirmation philosophique finale de l'espoir et de la force invincible des cycles de la vie." },
                { cit: "Je tisse mes mots avec des lianes.", loc: "Le bruissement du temps", analyse: "La création du recueil de poésie est conçue comme un artisanat purement organique et naturel." },
                { cit: "Un poème pour chaque arbre tombé.", loc: "Une chute de galets", analyse: "Le livre devient un sanctuaire de papier et un hommage funèbre aux victimes de l'anthropocène." },
                { cit: "La lumière perce toujours la canopée.", loc: "L'écorce incertaine", analyse: "L'optimisme lumineux clôturant la descente dans les ténèbres psychologiques." },
                { cit: "Mes racines cherchent encore la lumière.", loc: "L'horizon des événements", analyse: "La profession de foi intime du désir de résilience spirituelle face aux tragédies." }
            ],
            docs_complementaires: [
                { titre: "À la forêt de Gastine", source: "Pierre de Ronsard (1550)", citation: "Écoute-moi, forêt, ô forêt, ma compagne...", analyse: "L'ancêtre lointain de la poésie forestière écologiste, déplorant déjà la destruction des vieux arbres par les bûcherons." },
                { titre: "Correspondances", source: "Charles Baudelaire (1857)", citation: "La Nature est un temple où de vivants piliers...", analyse: "La conception fondatrice de la forêt comme un espace sacré, indéchiffrable et hautement symbolique." },
                { titre: "Paysages avec figures absentes", source: "Philippe Jaccottet (1970)", citation: "La beauté du monde est une lame de couteau.", analyse: "La poésie contemporaine confrontée à la pureté absolue, cruelle et muette du paysage naturel." },
                { titre: "Les Rêveries du promeneur solitaire", source: "Jean-Jacques Rousseau (1782)", citation: "Plus je suis seul, plus je suis avec la nature.", analyse: "La matrice pré-romantique de la quête de la solitude sylvestre comme unique moyen de retrouver son identité." },
                { titre: "René", source: "François-René de Chateaubriand (1802)", citation: "Forêts primitives, vous seules comprenez mon âme.", analyse: "L'utilisation de la démesure des paysages nord-américains pour refléter l'immensité vertigineuse du vague à l'âme." },
                { titre: "Sido", source: "Colette (1930)", citation: "J'appartiens à une terre qui respire.", analyse: "L'enracinement organique et sensuel féminin dans la nature, préfigurant l'écriture matricielle de Dorion." },
                { titre: "Walden ou la Vie dans les bois", source: "Henry David Thoreau (1854)", citation: "Je suis allé dans les bois parce que je voulais vivre sans hâte.", analyse: "Le manifeste de la reconnexion au rythme biologique réel contre l'aliénation de la société industrielle." },
                { titre: "L'Homme qui plantait des arbres", source: "Jean Giono (1953)", citation: "Quand je me souviens que cet homme seul a fait surgir ce pays de Canaan...", analyse: "Le mythe littéraire de la résilience forestière et du pouvoir réparateur de l'action individuelle." },
                { titre: "Le Carnet du bois de pins", source: "Francis Ponge (1942)", citation: "Le pin se dresse, c'est un fait.", analyse: "L'observation matérialiste de l'arbre, étape incontournable du traitement littéraire de la forêt au XXe siècle." },
                { titre: "L'Arrière-pays", source: "Yves Bonnefoy (1972)", citation: "Il y a des mots qui sont des pierres...", analyse: "La réflexion sur l'ancrage physique du vocabulaire poétique dans la géographie terrestre." }
            ],
            plans: [
                {
                    sujet: "Dans Mes forêts, la nature n’est-elle qu’une métaphore de l’intériorité ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La forêt comme immense chambre d'écho de l'intime",
                            sous_parties: [
                                "A. Le paysage comme miroir psychanalytique des fêlures du cœur et de l'esprit.",
                                "B. La projection organique des angoisses humaines (le deuil, le vieillissement) sur l'écorce et les galets.",
                                "C. L'exploration de la solitude existentielle favorisée par l'isolement sylvestre."
                            ]
                        },
                        {
                            titre: "II. La prise en compte radicale de l'altérité et de la réalité physique du monde naturel",
                            sous_parties: [
                                "A. L'observation minutieuse d'une réalité autonome qui échappe à l'homme (le rythme des sèves, des saisons).",
                                "B. La leçon de sagesse stoïque prodiguée par l'indifférence silencieuse des éléments minéraux et végétaux.",
                                "C. Le dépassement de l'anthropocentrisme (la nature n'est plus un simple décor à notre service)."
                            ]
                        },
                        {
                            titre: "III. La fusion éthique et poétique : le lien d'interdépendance vitale",
                            sous_parties: [
                                "A. La souffrance écologique partagée (la destruction de la forêt ressentie comme une mutilation charnelle).",
                                "B. L'acte d'écrire comme tentative désespérée de recoudre le lien rompu entre l'humain et son environnement.",
                                "C. Une poésie militante qui démontre que sauver l'intériorité humaine exige de sauver la forêt physique."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Hélène Dorion écrit à propos des forêts : « et quand je m’y promène / c’est pour prendre le large / vers moi-même ». Les promenades d’Hélène Dorion dans ses forêts ne sont-elles qu’un voyage à l’intérieur de soi ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La promenade sylvestre comme un itinéraire d'introspection privilégié",
                            sous_parties: [
                                "A. L'éloignement nécessaire du brouhaha du monde moderne pour permettre le recueillement ('prendre le large').",
                                "B. Le cheminement physique dans les bois agissant comme un déclencheur de la mémoire et des deuils enfouis.",
                                "C. La contemplation de la nature permettant une reconnexion salvatrice avec sa propre identité ('vers moi-même')."
                            ]
                        },
                        {
                            titre: "II. Une marche qui débouche sur la rencontre vertigineuse avec le monde",
                            sous_parties: [
                                "A. L'éveil hyper-sensoriel de la poétesse face à la matérialité complexe de la forêt (bruits, textures, lumières).",
                                "B. La confrontation de la fragilité humaine à l'immensité du temps géologique ('le bruissement du temps').",
                                "C. Le constat tragique des destructions environnementales qui ramène violemment l'observatrice à la réalité globale."
                            ]
                        },
                        {
                            titre: "III. Le poème comme aboutissement de ce double voyage",
                            sous_parties: [
                                "A. La langue poétique née du croisement exact entre l'émotion intime et la matière végétale.",
                                "B. Le partage de l'expérience : la méditation solitaire s'élargit pour inclure et alerter le lecteur.",
                                "C. L'atteinte d'une harmonie panthéiste où la frontière entre le 'Moi' et l'Univers s'efface totalement."
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    theatre: [
        {
            id: "musset_badinage",
            titre: "On ne badine pas avec l'amour",
            auteur: "Alfred de Musset",
            parcours: {
                nom: "Les jeux du cœur et de la parole",
                explication: "Ce parcours explore la porosité et le danger des relations humaines lorsque le langage se détache de la vérité affective. Le badinage mondain, l'escrime verbale et le jeu de rôles dicté par l'orgueil deviennent un piège tragique. La parole, initialement ludique, se transforme en une arme de manipulation psychologique destructrice, prouvant que jouer avec les sentiments (les jeux du cœur) par le biais d'artifices rhétoriques conduit inéluctablement au sacrifice de l'innocence."
            },
            biographie: "Alfred de Musset (1810-1857) est un écrivain, poète et dramaturge majeur du Romantisme français. Enfant terrible du cénacle de Victor Hugo, il se distingue par un lyrisme de la souffrance et de la passion désabusée. Marqué par sa liaison tumultueuse et destructrice avec George Sand à Venise, il compose un théâtre singulier libéré des contraintes de la scène réelle, publié sous le titre générique 'Un spectacle dans un fauteuil', où s'entremêlent le grotesque comique et le sublime tragique.",
            resume_complet: "Composé en 1834, <em>On ne badine pas avec l'amour</em> est un proverbe dramatique en trois actes qui subvertit les cadres de la comédie galante pour basculer dans le drame romantique. L'intrigue s'ouvre sur le retour au château d'un vieux Baron de son fils Perdican, fraîchement diplômé de doctorat à Paris, et de sa nièce Camille, sortant tout juste du couvent. Le Baron projette de les marier. Cependant, Camille, profondément endoctrinée par les récits de déceptions amoureuses des religieuses, oppose à Perdican une froideur de marbre et refuse sa main par peur souffrir, affirmant préférer l'absolu du mariage divin. Blessé dans son amour et piqué dans son immense orgueil d'aristocrate et d'intellectuel, Perdican engage un duel psychologique et rhétorique féroce avec sa cousine. Pour se venger de ses rebuffades et lui prouver son inconstance, il entreprend de séduire Rosette, une jeune et naïve paysanne, sœur de lait de Camille. Ce badinage cruel s'emballe : Perdican propose publiquement le mariage à Rosette sous les yeux de Camille. Prise à son propre piège de jalousie, Camille intercepte une lettre et organise un contre-stratagème. Lors d'un ultime affrontement secret dans un oratoire, dépouillés de leurs masques de fierté, les deux amants s'avouent enfin leur passion réciproque et s'enlacent. Mais Rosette, dissimulée derrière un rideau, assiste à la scène et meurt sur-le-champ de douleur et de désespoir. Camille prononce la sentence irréversible : 'Elle est morte. Adieu, Perdican', scellant la séparation définitive du couple brisé par la culpabilité d'avoir joué avec l'innocence.",
            citations: [
                { cit: "Elle est morte. Adieu, Perdican.", loc: "Acte III, scène 8 (Camille)", analyse: "Parataxe et brièveté glaciale marquant la fin absolue de la comédie et l'irruption du néant tragique." },
                { cit: "J'ai souffert souvent, je me suis trompé quelquefois, mais j'ai aimé.", loc: "Acte II, scène 5 (Perdican)", analyse: "Rythme ternaire et balancement lyrique affirmant la souffrance comme seule valeur existentielle valide." },
                { cit: "Tous les hommes sont menteurs, inconstants, faux, bavards, hypocrites, orgueilleux et lâches ;", loc: "Acte II, scène 5 (Camille)", analyse: "Accumulation d'adjectifs dépréciatifs traduisant le dogmatisme théorique et misandre appris au couvent." },
                { cit: "Le monde n'est qu'un égout sans fond où les phoques les plus informes rampent...", loc: "Acte II, scène 5 (Perdican)", analyse: "Métaphore hyperbolique et triviale du monde, rehaussant par contraste la sainteté de l'amour humain." },
                { cit: "On ne badine pas avec l'amour.", loc: "Acte III, scène 8 (Perdican)", analyse: "Formule sentencieuse au présent de vérité générale, faisant écho au titre pour sceller la morale tragique." },
                { cit: "J'ai eu tort de parler ; je savais ma leçon par cœur, et je voulais te la dire.", loc: "Acte II, scène 5 (Camille)", analyse: "Métaphore scolaire révélant l'inauthenticité initiale du langage de Camille, prisonnière d'un rôle dicté." },
                { cit: "Tu m'as trompée, Perdican ! vous me parliez d'amour devant Dieu, et vous n'étiez qu'un menteur.", loc: "Acte III, scène 7 (Rosette)", analyse: "Anathème de la paysanne marquant le dévoilement de la fonction prédatrice et destructrice de la parole noble." },
                { cit: "C'est un grand moyen de se faire aimer que de n'aimer point.", loc: "Acte I, scène 3 (Perdican)", analyse: "Aphorisme cynique illustrant la rhétorique du badinage galant conçu comme une stratégie de pouvoir." },
                { cit: "Ne me faites pas de phrases, Perdican. Je vous en prie, parlons franchement.", loc: "Acte II, scène 5 (Camille)", analyse: "Antithèse entre 'phrases' (artifice) et 'franchement' (authenticité), lançant le grand duel psychologique." },
                { cit: "Il y a au monde une chose sainte et sublime, c'est l'union de deux de ces êtres si imparfaits.", loc: "Acte II, scène 5 (Perdican)", analyse: "Alliance de mots (sainte/imparfaits) fondant la théologie romantique de la rédemption par l'amour humain." },
                { cit: "Tu es un livre ouvert où j'ai lu trop de choses.", loc: "Acte II, scène 5 (Camille)", analyse: "Métaphore du livre dénonçant la prétendue transparence de Perdican, jugé inconstant par sa cousine." },
                { cit: "L'orgueil est le plus grand des maux, et le plus redoutable des tyrans.", loc: "Acte III, scène 6 (Le Baron)", analyse: "Personnification de l'orgueil qui sert d'ironie dramatique, le Baron ignorant qu'il décrit ses propres enfants." },
                { cit: "Je veux épouser une fille des champs qui n'a de mots que ceux du cœur.", loc: "Acte III, scène 2 (Perdican)", analyse: "Idéalisation de Rosette, utilisée de façon hypocrite comme un contre-modèle à la complexité de Camille." },
                { cit: "Le Baron : « Ma table est-elle prête ? Bridaine, mangez-vous ce soir ? »", loc: "Acte I, scène 2", analyse: "Registre grotesque réduisant la vieille génération à des besoins purement matériels et digestifs." },
                { cit: "Blazius : « Le ciel m'est témoin que je ne bois que de l'eau. »", loc: "Acte II, scène 3", analyse: "Mensonge comique et négation restrictive révélant la tartufferie des tuteurs cléricaux." },
                { cit: "Je te quitte, Perdican ; il y a du sang sur nous.", loc: "Acte III, scène 8 (Camille)", analyse: "Métaphore de la souillure indélébile interdisant définitivement l'aboutissement de la passion." },
                { cit: "Il est trop tard ! Tu m'aimes, ne le dis pas, mais ton cœur le crie !", loc: "Acte III, scène 8 (Perdican)", analyse: "Personnification du cœur s'opposant au silence volontaire imposé par la fierté." },
                { cit: "Le vent de la montagne m'apporte des paroles de deuil.", loc: "Acte I, scène 1 (Le Chœur)", analyse: "Prosopopée et lyrisme atmosphérique préfigurant la trajectoire funeste de l'intrigue comique." },
                { cit: "Camille garde le silence et s'éloigne.", loc: "Acte I, scène 4 (Didascalie)", analyse: "Le refus de la parole comme arme de résistance physique et manifestation d'un orgueil de couvent." },
                { cit: "Allez, monsieur le curé, allez boire un coup à ma santé au cabaret.", loc: "Acte I, scène 2 (Perdican)", analyse: "Registre familier brisant délibérément la déférence due au clergé, marquant l'esprit rebelle du jeune homme." }
            ],
            docs_complementaires: [
                { titre: "La Confession d'un enfant du siècle", source: "Alfred de Musset (1836)", citation: "Toute la maladie du siècle présent vient de deux causes...", analyse: "L'essai théorisant le 'Mal du siècle', cette désillusion politique expliquant le cynisme de Perdican." },
                { titre: "Lorenzaccio", source: "Alfred de Musset (1834)", citation: "Le vice a été pour moi un vêtement, maintenant il est collé à ma peau.", analyse: "La réflexion sur le danger du masque (ici le badinage) qui finit par dévorer l'identité réelle." },
                { titre: "Le Jeu de l'amour et du hasard", source: "Marivaux (1730)", citation: "Dans cette entreprise, je ne serai pas la dupe.", analyse: "L'ancêtre du marivaudage. Mais chez Marivaux, le badinage conduit à la vérité amoureuse heureuse, non au sang." },
                { titre: "Les Liaisons dangereuses", source: "Choderlos de Laclos (1782)", citation: "Il faut vaincre ou périr.", analyse: "La filiation libertine : l'utilisation stratégique des lettres et de la parole pour détruire l'autre par orgueil de caste." },
                { titre: "Phèdre", source: "Jean Racine (1677)", citation: "C'est Vénus toute entière à sa proie attachée.", analyse: "La vision tragique classique de la passion perçue comme une malédiction divine destructrice, écho à l'oratoire de Musset." },
                { titre: "Ruy Blas", source: "Victor Hugo (1838)", citation: "Un ver de terre amoureux d'une étoile.", analyse: "L'esthétique du drame romantique alliant le sublime des sentiments au grotesque des personnages secondaires." },
                { titre: "Le Misanthrope", source: "Molière (1666)", citation: "Je veux fuir dans un désert...", analyse: "La haine de l'hypocrisie sociale et de la comédie des apparences, partagée par Camille et Alceste." },
                { titre: "Cyrano de Bergerac", source: "Edmond Rostand (1897)", citation: "Je te prêterai mon esprit, tu me prêteras ta beauté.", analyse: "Le danger des joutes verbales où la fiction de la parole finit par usurper et détruire la réalité des corps." },
                { titre: "Juste la fin du monde", source: "Jean-Luc Lagarce (1990)", citation: "On ne comprend pas un traître mot de ce que tu racontes.", analyse: "La crise contemporaine de la parole familiale, bâtie sur le ressentiment et l'impossibilité de dire le vrai." },
                { titre: "La Nuit de mai", source: "Alfred de Musset (1835)", citation: "Les plus désespérés sont les chants les plus beaux.", analyse: "Le manifeste poétique de Musset liant consubstantiellement la création artistique à la souffrance intime." }
            ],
            plans: [
                {
                    sujet: "« J’ai eu tort de parler », dit Camille à Perdican (Acte II, scène 5). Dans quelle mesure cette réplique éclaire-t-elle votre lecture de On ne badine pas avec l’amour ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La parole comme instrument d'orgueil, de dissimulation et de destruction",
                            sous_parties: [
                                "A. Le langage comme masque théâtral et dogmatique (Camille récite la leçon d'amertume apprise au couvent).",
                                "B. La parole comme arme de guerre psychologique (Le badinage cruel de Perdican instrumentalisant Rosette).",
                                "C. Les lettres interceptées et les fausses confidences comme piège dramatique coupant les personnages du réel."
                            ]
                        },
                        {
                            titre: "II. Le tort de parler : le langage qui dénature et éloigne de la vérité du cœur",
                            sous_parties: [
                                "A. L'incommunicabilité chronique entre deux intellectuels prisonniers de leur rhétorique galante.",
                                "B. Le langage qui fige les sentiments et empêche l'épanchement lyrique sincère (le refus d'avouer sa vulnérabilité).",
                                "C. L'orgueil verbal qui s'emballe au détriment de la pitié (la réification de la paysanne Rosette)."
                            ]
                        },
                        {
                            titre: "III. La parole qui abdique devant le silence tragique et la révélation du vrai",
                            sous_parties: [
                                "A. Le dévoilement de la sincérité dans l'oratoire : le cœur parle quand la parole sociale se tait.",
                                "B. La faillite définitive du badinage face au verdict de la mort réelle (le sang versé de l'innocente).",
                                "C. La sentence finale irréversible ('Adieu') : le retour au silence de mort comme unique constat d'échec."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Dans son poème « La Nuit de mai », Musset écrit : « La bouche garde le silence / Pour écouter parler le cœur ». En quoi cette affirmation peut-elle s’appliquer aux personnages de Perdican et de Camille et en expliquer le dénouement tragique ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Le tumulte des phrases mondaines étouffant la voix intime du cœur",
                            sous_parties: [
                                "A. Le bavardage social et les joutes de l'esprit (le badinage) comme rempart contre le frisson de l'aveu.",
                                "B. Le refus du silence par Camille, qui comble sa terreur de l'amour par des théories rigoristes et misandres.",
                                "C. Perdican qui multiplie les déclarations publiques fictives (à Rosette) pour masquer son impuissance affective."
                            ]
                        },
                        {
                            titre: "II. L'irruption de l'authentique écoute intérieure : le cœur parle au milieu du silence",
                            sous_parties: [
                                "A. Le détachement progressif des rôles sociaux lors des retrouvailles avec la nature bourguignonne.",
                                "B. L'oratoire (Acte III, scène 8) comme lieu sacré du silence mondain propice au cri spontané du cœur amant.",
                                "C. La transparence du langage de Rosette, antithèse muette de la complexité verbeuse des deux héros nobles."
                            ]
                        },
                        {
                            titre: "III. Le dénouement tragique : la punition fatale d'avoir fait parler la bouche avant le cœur",
                            sous_parties: [
                                "A. La mort physique de Rosette comme conséquence directe des mots prononcés à la légère.",
                                "B. La culpabilité et la souillure indélébile qui paralysent définitivement la parole amoureuse des amants.",
                                "C. Le silence éternel des adieux : l'impossibilité de la rédemption poétique romantique sur une scène brisée."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "sarraute_oui_non",
            titre: "Pour un oui ou pour un non",
            auteur: "Nathalie Sarraute",
            parcours: "Théâtre et dispute",
            mouvementId: "nouveau_roman",
            mouvementNom: "Théâtre de l'Ère du Soupçon",
            biographie: "Nathalie Sarraute (1900-1999) est une figure majeure de l'avant-garde littéraire française du XXe siècle, théoricienne majeure du Nouveau Roman (<em>L'Ère du soupçon</em>). Elle consacre son œuvre à la traque microscopique des 'tropismes' : ces micro-séismes intérieurs, fuyants, instinctifs et d'une violence inaudible, déclenchés sous la surface plane des conversations quotidiennes par une simple intonation ou un silence déplacé.",
            resume_complet: "Créée en 1982, <em>Pour un oui ou pour un non</em> pousse le minimalisme théâtral à son paroxysme. L'action dramatique classique est totalement éradiquée au profit d'un conflit purement linguistique. Deux amis de toujours, désignés abstraitement par H1 et H2, s'affrontent à la suite d'un éloignement inexpliqué. Pressé par H1 de fournir une explication rationnelle, H2 avoue la cause de sa rupture, jugée ridicule par le sens commun : lors d'une précédente rencontre où H2 évoquait un petit succès personnel, H1 lui a répondu « C'est bien... ça », en étirant les points de suspension d'une manière empreinte de condescendance paternaliste et de pitié bourgeoise. Ce prétexte dérisoire ouvre la boîte de Pandore des non-dits et des jalousies refoulées. Le dialogue se transforme en un procès d'une férocité inouïe où chaque mot du dictionnaire, chaque formule toute faite ('Mais oui, mais oui') est décortiqué comme une agression. L'irruption de deux voisins (F1 et H3), appelés à témoigner, met en lumière l'incompréhension du monde extérieur face à ces micro-agressions psychologiques. La pièce s'achève sur le constat d'une rupture définitive et d'une guerre de positions géopolitiques et idéologiques irréconciliable entre les deux hommes.",
            citations: [
                { cit: "C’est bien… ça.", loc: "H2 (évoquant H1)", analyse: "L'intonation dégradante : la violence absolue nichée dans la suspension et l'allongement phonétique." },
                { cit: "Il y a des mots qui tuent, et tu le sais parfaitement.", loc: "H2 à H1", analyse: "Métaphore guerrière révélant la militarisation invisible du langage du quotidien." },
                { cit: "On tourne en rond dans ce salon, on n'en sortira jamais.", loc: "H1", analyse: "Sensation d'enfermement et circularité absurde rappelant le théâtre de Beckett." },
                { cit: "Rien. C'était rien. Une pure folie de ton esprit.", loc: "H1 à H2", analyse: "Dénégation systématique utilisée comme stratégie bourgeoise d'invalidation de la sensibilité." },
                { cit: "Cette petite intonation de rien du tout, c'est le tropisme même.", loc: "H2", analyse: "Définition de l'esthétique sarrautienne : le détail infime provoquant le séisme intime." },
                { cit: "Vous avez fait votre nid dans la vie, vous êtes installé.", loc: "H2 à H1", analyse: "Métaphore animalière accusant le conformisme et la mort spirituelle de la réussite bourgeoise." },
                { cit: "J'ai la chance immense d'être quelqu'un de normal.", loc: "H1", analyse: "La norme brandie comme une arme d'exclusion pour pathologiser la lucidité de l'ami." },
                { cit: "Nous sommes désormais d'un côté et de l'autre de la frontière.", loc: "H2", analyse: "Métaphore géopolitique scellant la séparation géométrique et définitive des espaces mentaux." },
                { cit: "Tu es un spécialiste de la nuance inutile.", loc: "H1 à H2", analyse: "Ironie et mépris du pragmatique matérialiste envers l'esprit introspectif de l'artiste." },
                { cit: "Si on racontait cela à des témoins, ils nous riraient au nez.", loc: "H1", analyse: "Appel au tribunal social de la foule pour écraser la vérité microscopique de l'intime." },
                { cit: "Qu'est-ce qu'elles en savent, ces bonnes femmes ?", loc: "H2 (évoquant les voisines)", analyse: "Rejet du jugement extérieur incapable de capter la violence souterraine du lien." },
                { cit: "C'est un jeu dans lequel tous les coups sont permis.", loc: "H1", analyse: "Définition de la dispute théâtrale : le dialogue conçu comme un ring de destruction réciproque." },
                { cit: "Tu cherches la petite bête, tu décortiques le vide.", loc: "H1 à H2", analyse: "Usage du cliché linguistique pour masquer l'abîme psychologique qui s'ouvre." },
                { cit: "Un gouffre s'est creusé entre nos deux chaises.", loc: "H2", analyse: "Hyperbole spatiale matérialisant la distance psychique irréparable au milieu du salon." },
                { cit: "Mais oui, mais oui... tu as toujours raison.", loc: "H2", analyse: "Répétition rabaissante et ironique mimant le renoncement de façade de la soumission." },
                { cit: "C'est une rupture définitive. On ne peut plus se parler.", loc: "H1", analyse: "Constat clinique de la faillite définitive de la parole comme outil de cohésion humaine." },
                { cit: "Tu as mis le doigt sur l'abcès.", loc: "H2", analyse: "Métaphore médicale de la libération douloureuse de la parole refoulée." },
                { cit: "H1 et H2 restent immobiles, séparés par un silence pesant.", loc: "Didascalie finale", analyse: "L'immobilité physique traduisant la pétrification tragique d'une relation détruite." },
                { cit: "Pour un oui ou pour un non.", loc: "Titre de l'œuvre", analyse: "Détournement d'un cliché de la langue pour souligner l'absurdité apparente de la condition humaine." },
                { cit: "Ne me regarde pas avec cet air de pitié condescendante !", loc: "H2 à H1", analyse: "Injonction négative dénonçant le pouvoir prédateur du regard de l'autre." }
            ],
            docs_complementaires: [
                { titre: "Art", source: "Yasmina Reza (1994)", citation: "Si je suis le Marc que j'étais, je n'ai plus d'amis.", analyse: "L'explosion d'une amitié masculine historique déclenchée par un prétexte pictural dérisoire (un tableau blanc)." },
                { titre: "Juste la fin du monde", source: "Jean-Luc Lagarce (1990)", citation: "On ne comprend pas un traître mot de ce que tu racontes.", analyse: "La violence des non-dits et de la crise linguistique au sein du huis clos familial." },
                { titre: "En attendant Godot", source: "Samuel Beckett (1952)", citation: "Ce qui est terrible, c'est d'avoir pensé.", analyse: "La filiation de l'absurde : des personnages immobilisés sur scène, meublant le néant par des joutes verbales." },
                { titre: "La Cantatrice chauve", source: "Eugène Ionesco (1950)", citation: "Les mots ne veulent plus rien dire, le plafond s'effondre.", analyse: "La tragédie de l'incommunicabilité bourgeoise où les phrases toutes faites tournent à la farce mécanique." },
                { titre: "L'Ère du soupçon", source: "Nathalie Sarraute (1956)", citation: "Le personnage de roman est devenu une étiquette vide...", analyse: "Le manifeste théorique expliquant pourquoi Sarraute supprime les identités (H1, H2) au profit des flux psychiques." },
                { titre: "Le Misanthrope", source: "Molière (1666)", citation: "Je veux fuir dans un désert...", analyse: "La fureur d'Alceste face aux complaisances langagières de Philinte, ancêtre du clivage entre H2 et H1." },
                { titre: "Le Gardien", source: "Harold Pinter (1960)", citation: "Le silence est une agression permanente.", analyse: "Le théâtre contemporain de la menace où les pauses cachent des rapports de force impitoyables." },
                { titre: "Tropismes", source: "Nathalie Sarraute (1939)", citation: "Des mouvements indéfinissables qui glissent très vite...", analyse: "L'œuvre matricielle en prose fondant toute la recherche stylistique ultérieure de la dramaturge." },
                { titre: "Phèdre", source: "Jean Racine (1677)", citation: "Mon mal vient de plus loin.", analyse: "L'hérédité de la faute : Sarraute transpose la fatalité tragique classique du sang vers la fatalité du mot." },
                { titre: "La Nausée", source: "Jean-Paul Sartre (1938)", citation: "L'existence est un plein que l'homme ne peut pas vider.", analyse: "L'angoisse existentielle face à l'absurdité matérielle des objets et des situations quotidiennes." }
            ],
            plans: [
                {
                    sujet: "Un critique remarque que, dans Pour un oui ou pour un non, « le dialogue est toujours, en fin de compte, un jeu dans lequel tous les coups sont permis. » Cette citation éclaire-t-elle votre lecture de la pièce ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Le dialogue conçu comme un ring de combat et une stratégie de domination",
                            sous_parties: [
                                "A. La dispute envisagée comme un divertissement cruel pour briser l'ennui mondain.",
                                "B. L'instrumentalisation machiavélique des infimes nuances du langage (l'intonation comme coup bas).",
                                "C. Le détournement des formules de politesse de façade pour humilier l'autre en direct."
                            ]
                        },
                        {
                            gitre: "II. Un jeu pervers qui échappe aux acteurs et détruit l'identité",
                            sous_parties: [
                                "A. H1 et H2 pris au piège mécanique de leur propre surenchère verbale (l'incapacité d'arrêter la machine).",
                                "B. L'annihilation définitive et douloureuse du lien sacré de l'amitié historique.",
                                "C. Les mots vidés de leur substance humaine pour ne plus laisser subsister que la violence pure."
                            ]
                        },
                        {
                            titre: "III. Le jeu linguistique au service d'une vérité tragique sur la condition humaine",
                            sous_parties: [
                                "A. Faire éclater le mensonge des conventions bourgeoises par la mise à nu des tropismes.",
                                "B. Le théâtre de l'Ère du soupçon érigeant la parole en spectacle de la cruauté humaine.",
                                "C. L'aboutissement du jeu : le constat lucide et lucide de l'irrémédiable altérité (l'autre est une frontière)."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Selon un critique, dans Pour un oui ou pour un non, « ce sont les non-dits, les sous-entendus, ce qui se tisse entre les mots, qui sont la source des malentendus, qui minent les relations humaines ». En quoi ces propos éclairent-ils votre lecture de la pièce ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. L'épaisseur invisible du langage : le pouvoir destructeur du non-dit",
                            sous_parties: [
                                "A. Le silence entre les mots (les points de suspension de 'C'est bien... ça') chargé de mépris social.",
                                "B. Le sous-entendu condescendant qui trahit une hostilité de classe latente entre le réussi et le marginal.",
                                "C. Ce qui se tisse dans l'ombre : l'accumulation mémorielle des rancœurs passées cachées sous la politesse."
                            ]
                        },
                        {
                            titre: "II. La mination et la fragilisation des rapports par l'interprétation paranoïaque",
                            sous_parties: [
                                "A. Le glissement fatal du malentendu dérisoire vers un procès d'intention permanent.",
                                "B. L'invalidation pathologique de la sensibilité de l'autre ('paranoïa', 'tu cherches la petite bête').",
                                "C. L'incapacité radicale à verbaliser clairement les tropismes fuyants sans les trahir par des clichés."
                            ]
                        },
                        {
                            titre: "III. La tragédie contemporaine de l'incommunicabilité absolue",
                            sous_parties: [
                                "A. Le constat clinique que les mots séparent au lieu d'unir : le langage comme frontière géopolitique.",
                                "B. L'échec des témoins extérieurs (les voisines) prouvant l'invisibilité universelle du drame intime.",
                                "C. Le dénouement sans rachat : la rupture irréparable scellée par l'opacité infranchissable des consciences."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Selon vous, la dispute est-elle spectaculaire dans Pour un oui ou pour un non ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Le refus radical du grand spectacle théâtral traditionnel",
                            sous_parties: [
                                "A. L'absence absolue d'action matérielle, de cris, de sang, d'armes ou de péripéties physiques.",
                                "B. Le dépouillement minimaliste du décor (un salon neutre, deux chaises) et des identités (H1, H2).",
                                "C. Une intrigue qui semble tourner à vide autour d'un prétexte dérisoire ('pour un oui ou pour un non')."
                            ]
                        },
                        {
                            titre: "II. Le grand spectacle de l'invisible : la dramatisation des tropismes",
                            sous_parties: [
                                "A. Une tension psychologique paroxystique et électrique construite sur le fil des intonations vocales.",
                                "B. Le dialogue transformé en ring de boxe intellectuel où chaque mot est une arme létale.",
                                "C. L'implication voyeuriste du spectateur, transformé en juré d'une cour d'assises de l'intime."
                            ]
                        },
                        {
                            titre: "III. La réinvention d'une catharsis moderne par la ruine du langage",
                            sous_parties: [
                                "A. Transformer le micro-séisme intérieur en un drame métaphysique universel.",
                                "B. Le spectacle terrifiant de l'effondrement d'une amitié historique sous le poids du soupçon.",
                                "C. Le triomphe de l'anti-théâtre sarrautien : prouver que le langage est le plus spectaculaire des champs de bataille."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "corneille_menteur",
            titre: "Le Menteur",
            auteur: "Pierre Corneille",
            parcours: "Mensonge et comédie",
            mouvementId: "baroque",
            mouvementNom: "Le Baroque",
            biographie: "Pierre Corneille (1606-1684) est l'un des plus gigantesques dramaturges du XVIIe siècle français. S'il est immortalisé par la création de la tragédie héroïque et du dilemme cornélien (<em>Le Cid</em>), il triomphe d'avance dans la comédie d'intrigue. En adaptant brillamment en 1644 un modèle espagnol d'Alarcón, il signe avec <em>Le Menteur</em> le chef-d'œuvre de la comédie baroque, célébrant les pouvoirs illimités de l'imagination, de la parole et de l'illusion poétique sur la scène du monde.",
            resume_complet: "Représentée en 1644, <em>Le Menteur</em> est une comédie en cinq actes et en vers qui utilise les ressorts de la farce pour livrer une réflexion brillante sur l'artifice théâtral. Dorante, un jeune noble de province arrivant à Paris pour y étudier le droit, décide de s'inventer une identité glorieuse pour conquérir les cœurs de la capitale. Rencontrant Clarice et Lucrèce aux Tuileries, il improvise un passé de vaillant capitaine de guerre et prétend avoir organisé de somptueux banquets nocturnes sur l'eau. Pris dans l'engrenage de ses propres fictions, il commet l'erreur de confondre les prénoms des jeunes filles. Lorsque son vieux père, Géronte, protecteur traditionaliste des valeurs d'honneur, veut le marier précisément à Clarice, Dorante bâtit un mensonge rocambolesque pour refuser, prétextant avoir été forcé d'épouser en secret une femme enceinte en province. Les mensonges s'accumulent, provoquant la jalousie de son ami Alcippe qui le provoque en duel (évité par une nouvelle fable). Le serviteur pragmatique Cliton tente en vain de ramener son maître à la vérité. Finalement démasqué par la perspicacité des femmes et confronté à la fureur de son père outragé ('vice de serf'), Dorante retourne la situation à son avantage par pure virtuosité verbale. Réalisant opportunément que la vraie Lucrèce correspond mieux à ses ambitions financières, il déplace habilement ses sentiments et l'épouse dans l'allégresse générale, scellant le triomphe de l'illusion baroque sur la morale de la vérité.",
            citations: [
                { cit: "Je hais à dire vrai, j'aime à faire des contes.", loc: "Acte I, scène 5 (Dorante)", analyse: "Déclaration d'intention amoraliste préférant l'esthétique créatrice de la fiction au réel." },
                { cit: "Le mensonge est un art dont je suis le maître, / Qui demande un esprit tout à fait libre.", loc: "Acte III, scène 5 (Dorante)", analyse: "Revendication du vice élevé au rang de chef-d'œuvre et de liberté de l'imagination." },
                { cit: "Paris semble à mes yeux un pays de romans.", loc: "Acte I, scène 1 (Dorante)", analyse: "La ville perçue non comme une réalité topographique, mais comme un décor propice au scénario théâtral." },
                { cit: "Mentir de la sorte est un pur vice de serf, / Un noble doit l'honneur à la vérité.", loc: "Acte V, scène 3 (Géronte)", analyse: "Le clivage axiologique : la tromperie analysée comme une dégradation de classe sociale." },
                { cit: "J'ai la mémoire bonne, et c'est un grand point pour mentir.", loc: "Acte II, scène 2 (Dorante)", analyse: "L'ironie pragmatique traitant le mensonge non comme un péché, mais comme une science de précision." },
                { cit: "Vous jouez fort bien la comédie, monsieur le capitaine.", loc: "Acte IV, scène 3 (Clarice)", analyse: "Mise en abyme théâtrale : le personnage démasqué comme acteur au sein de la fiction mondaine." },
                { cit: "Toute cette aventure est une pure fable inventée à plaisir.", loc: "Acte V, scène 3 (Géronte)", analyse: "Le déchirement du voile des illusions paternelles confrontées à l'arrogance du fils." },
                { cit: "Je me paie de mots, et je m'enivre moi-même de mes récits.", loc: "Acte III, scène 5 (Dorante)", analyse: "Le vertige baroque : le créateur devenant le premier spectateur fasciné de sa propre illusion." },
                { cit: "C'est une pièce achevée, et Boileau n'y verrait rien à redire.", loc: "Acte II, scène 6 (Cliton)", analyse: "Le commentaire métathéâtral du valet admirant l'architecture de la fourberie du maître." },
                { cit: "Est-il père au monde qui puisse endurer cet affront sans mourir ?", loc: "Acte V, scène 3 (Géronte)", analyse: "Question rhétorique et registre pathétique marquant l'irruption de la gravité tragique dans la comédie." },
                { cit: "Vous m'avez donné la vie, et vous me l'ôtez aujourd'hui par votre sévérité.", loc: "Acte V, scène 4 (Dorante)", analyse: "Hyperbole hypocrite instrumentalisant les sentiments filiaux pour désarmer la colère du juge." },
                { cit: "Où la vérité manque, le courage est éteint et la noblesse s'effondre.", loc: "Acte V, scène 3 (Géronte)", analyse: "Maxime de l'idéal classique affirmant la cohésion nécessaire entre éthique du vrai et aristocratie." },
                { cit: "J'épouse celle-ci, et j'en suis consolé car son revenu est magnifique.", loc: "Acte V, scène 7 (Dorante)", analyse: "Versatilité et cynisme matérialiste du héros baroque s'adaptant instantanément aux opportunités financières." },
                { cit: "Les femmes aujourd'hui aiment à être trompées par de belles paroles.", loc: "Acte I, scène 1 (Dorante)", analyse: "Satire de la superficialité galante des salons parisiens sous la Régence." },
                { cit: "Un peu d'artifice ne messied point en amour s'il permet de vaincre.", loc: "Acte II, scène 1 (Lucrèce)", analyse: "Complicité féminine validant les masques de la comédie comme outils légitimes de la séduction." },
                { cit: "Le changement est la loi suprême de notre nature inconstante.", loc: "Thème baroque général", analyse: "Le fondement philosophique justifiant la plasticité identitaire de Dorante." },
                { cit: "Il n'y a pas de fin à l'aventure tant que la parole circule.", loc: "Acte V", analyse: "L'ouverture esthétique baroque opposée à la fixité étouffante des unités classiques." },
                { cit: "Cliton regarde son maître avec incrédulité.", loc: "Didascalie récurrente", analyse: "Le comique de contraste muet entre le témoin populaire réaliste et le noble fabulateur." }
            ],
            docs_complementaires: [
                { titre: "L'Illusion comique", source: "Pierre Corneille (1636)", citation: "Le théâtre est un art de plaire et de tromper.", analyse: "La pièce jumelle célébrant la magie théâtrale du mage Alcandre comme triomphe des apparences." },
                { titre: "Dom Juan", source: "Molière (1665)", citation: "L'hypocrisie est un vice à la mode, et tous les vices à la mode passent pour vertus.", analyse: "Le basculement de la tromperie légère comique vers le cynisme d'un grand seigneur méchant homme." },
                { titre: "Le Tartuffe", source: "Molière (1669)", citation: "Il est de faux dévots comme de faux braves.", analyse: "La manipulation hypocrite de la parole dénoncée comme un crime social destructeur des familles." },
                { titre: "Les Fausses Confidences", source: "Marivaux (1737)", citation: "L'amour et moi nous ferons le reste.", analyse: "Le mensonge et le stratagème langagier utilisés pour accoucher paradoxalement de la vérité du cœur." },
                { titre: "Cyrano de Bergerac", source: "Edmond Rostand (1897)", citation: "Je te prêterai mon esprit, tu me prêteras ta beauté.", analyse: "L'imposture verbale tragique et sublime où la fiction des mots finit par dévorer la réalité des corps." },
                { titre: "Le Véritable Saint Genest", source: "Jean de Rotrou (1645)", citation: "Le monde est une comédie passagère.", analyse: "L'apogée du théâtre baroque sur le vertige de la frontière floue entre l'acteur et son rôle." },
                { titre: "La Princesse de Clèves", source: "Madame de Lafayette (1678)", citation: "Si vous jugez sur les apparences en ce lieu, vous serez souvent trompée.", analyse: "La mise en garde classique contre l'hypocrisie obligatoire et destructrice de la cour royale." },
                { titre: "Essais (Des menteurs)", source: "Michel de Montaigne (1580)", citation: "Si le mensonge n'avait qu'un visage, nous serions en meilleur terme.", analyse: "La réflexion philosophique humaniste sur la plasticité et le danger de la parole trompeuse." },
                { titre: "Le Mariage de Figaro", source: "Beaumarchais (1784)", citation: "Feindre d'ignorer ce qu'on sait, de savoir ce qu'on ignore...", analyse: "La réduction de la diplomatie et des mœurs des puissants à une pure mécanique d'hypocrisie de salon." },
                { titre: "Le Neveu de Rameau", source: "Denis Diderot (1762)", citation: "Quiconque a besoin de l'autre est forcé à faire des pantomimes.", analyse: "La vision matérialiste des Lumières réduisant les rapports sociaux à un théâtre d'hypocrisies obligatoires." }
            ],
            plans: [
                {
                    sujet: "La pièce Le Menteur de Corneille vous semble-t-elle être une réflexion sur l'hypocrisie sociale ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Le mensonge érigé en parure de cour indispensable et en nécessité mondaine",
                            sous_parties: [
                                "A. L'art de fabuler pour s'inventer un statut prestigieux (Dorante s'improvisant capitaine héroïque).",
                                "B. Le paraître au détriment de l'être dans le Paris de la Régence (les banquets imaginaires).",
                                "C. La flatterie et le faux discours galant exigés par les codes de la séduction aristocratique."
                            ]
                        },
                        {
                            titre: "II. Le réquisitoire moral et la dénonciation de l'imposture comme menace sociale",
                            sous_parties: [
                                "A. La rupture du pacte de l'honneur nobiliaire fustigée par la vieille génération (Géronte).",
                                "B. La manipulation cynique qui instrumentalise les sentiments et met en péril l'ordre familial.",
                                "C. Le démasquage final comme rétablissement nécessaire de la vérité et châtiment de la mauvaise foi."
                            ]
                        },
                        {
                            titre: "III. Le dépassement baroque : le mensonge transmué en liberté poétique et en art de vivre",
                            sous_parties: [
                                "A. Refuser la platitude du réel terne par le pouvoir suprême de la fiction (l'imagination souveraine).",
                                "B. La plasticité identitaire : l'homme baroque qui se construit lui-même à travers ses récits.",
                                "C. Le théâtre célébrant ses propres pouvoirs : l'illusion comique légitimée par le plaisir du spectateur."
                            ]
                        }
                    ]
                },
                {
                    sujet: "La pièce est-elle une comédie des apparences ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Un univers dramatique saturé d'illusions et de faux-semblants",
                            sous_parties: [
                                "A. Paris (les Tuileries) décrit comme un pur décor théâtral propice aux masques et à l'anonymat.",
                                "B. Le quiproquo géométrique des prénoms (Clarice/Lucrèce) inversant les cibles de la passion.",
                                "C. Des personnages réduits à leur costume social et à leur capacité de paraître vertueux."
                            ]
                        },
                        {
                            titre: "II. La comédie des apparences comme mécanique de divertissement farcesque",
                            sous_parties: [
                                "A. L'effet boule de neige : l'accumulation de fictions (le faux mariage secret) relançant l'intrigue.",
                                "B. Le contraste comique permanent entre le maître fabulateur et le valet terre-à-terre (Cliton).",
                                "C. L'inconstance amoureuse baroque : on aime une apparence changeante plutôt qu'un être réel."
                            ]
                        },
                        {
                            titre: "III. La mise en abyme philosophique : le théâtre comme loupe des apparences du monde",
                            sous_parties: [
                                "A. Corneille prouvant que la société humaine n'est qu'une succession de pièces de théâtre (Theatrum Mundi).",
                                "B. Le dénouement opportuniste heureux qui valide l'artifice au détriment de la vérité rigide.",
                                "C. Le plaisir du spectateur, complice conscient et ravi de la défaite du réalisme fade."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Le Menteur de Corneille explore-t-il le thème de l'identité entre vérité et fiction ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La fiction comme fondation première de l'identité du héros",
                            sous_parties: [
                                "A. Dorante incapable d'exister par sa vérité (simple étudiant) : obligation d'inventer sa légende.",
                                "B. Les récits imaginaires qui acquièrent une texture concrète supérieure au réel (le banquet d'eau).",
                                "C. L'illusion référentielle : utiliser des détails matériels précis pour accréditer la fable."
                            ]
                        },
                        {
                            titre: "II. Le vertige du croisement : quand le menteur est pris au piège de sa propre fiction",
                            sous_parties: [
                                "A. L'aliénation de la mémoire : devoir se souvenir de ses mensonges pour ne pas s'effondrer.",
                                "B. Le conflit entre l'identité fixe imposée par la lignée paternelle et l'identité plastique du fils.",
                                "C. Les quiproquos qui révèlent que la fiction finit par modifier et dicter la réalité matérielle."
                            ]
                        },
                        {
                            titre: "III. L'avènement d'une vérité supérieure née du mensonge poétique",
                            sous_parties: [
                                "A. La fiction qui permet d'accoucher de la vérité des désirs profonds (le mariage de consolation avec Lucrèce).",
                                "B. Le triomphe de l'identité comme œuvre d'art en perpétuelle réinvention (l'homme moderne).",
                                "C. La pièce affirmant le pouvoir démiurgique du dramaturge, seul garant de l'harmonie par l'illusion."
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    roman: [
        {
            id: "prevost_manon",
            titre: "Manon Lescaut",
            auteur: "Abbé Prévost",
            parcours: {
                nom: "Personnages en marge, plaisirs du romanesque",
                explication: "Ce parcours analyse comment la marginalité sociale et morale des protagonistes (triche, prostitution, vol) devient le moteur d'un récit d'aventure haletant. Le plaisir romanesque naît de l'intensité dramatique des péripéties, de la fatalité de la passion amoureuse et de la subversion des cadres moraux de l'époque."
            },
            biographie: "Antoine-François Prévost (1697-1763), dit l'Abbé Prévost, mène une existence romanesque et mouvementée, oscillant entre les ordres religieux et la vie militaire. Journaliste, traducteur et romancier, il s'exile à plusieurs reprises en Angleterre et en Hollande pour fuir la justice. Publié en 1731, son chef-d'œuvre *Manon Lescaut* est censuré à sa sortie pour atteinte aux bonnes mœurs.",
            resume_complet: "Le roman raconte l'histoire du Chevalier des Grieux, un jeune homme de bonne famille destiné à l'Église, dont la vie bascule lors de sa rencontre avec Manon Lescaut. Pris d'une passion obsessionnelle pour cette jeune fille terrifiée par la pauvreté et éprise de luxe, des Grieux abandonne son honneur, sa famille et sa fortune. Pour satisfaire les caprices financiers de Manon, le couple s'installe à Paris et plonge dans la marginalité : des Grieux apprend à tricher au jeu, tandis que Manon accepte de se faire entretenir par de riches amants. Arrêtés à plusieurs reprises, ils s'évadent, et des Grieux va jusqu'à tuer un gardien pour libérer sa maîtresse. Condamnée à la déportation en Louisiane comme fille de joie, Manon éveille le respect de des Grieux qui sacrifie tout pour la suivre. Dans le dénuement du Nouveau Monde, ils découvrent enfin la pureté d'un amour désintéressé. Cependant, pour fuir les avances du neveu du gouverneur local, ils s'enfuient dans le désert où Manon meurt d'épuisement, laissant des Grieux brisé.",
            citations: [
                {
                    theme: "1. Fatalité et aveuglement de la passion",
                    items: [
                        { cit: "je me trouvai enflammé tout d'un coup jusqu'au transport.", loc: "Partie I", analyse: "La soudaineté du coup de foudre amoureux vécu comme une aliénation immédiate de la volonté." },
                        { cit: "On voit, dans le Chevalier des Grieux, un exemple terrible de la force des passions.", loc: "Avis de l'auteur", analyse: "L'annonce édifiante du roman, présentant d'emblée la passion comme une force tragique destructrice." },
                        { cit: "Le déshonneur et la honte ne me paraissaient plus des maux redoutables, dès que j'envisageais le bonheur de la revoir.", loc: "Partie I", analyse: "L'effacement complet des valeurs morales traditionnelles sous l'effet de l'obsession amoureuse." },
                        { cit: "Je suis le plus malheureux de tous les hommes par la constance de mon amour", loc: "Partie I", analyse: "Le déchirement tragique d'un amant conscient de sa propre dépendance affective face à l'inconstance." },
                        { cit: "C'est une vertu bien austère que celle qui s'oppose aux plus doux penchants de la nature.", loc: "Partie I", analyse: "Sophisme argumentatif où des Grieux tente de naturaliser et de légitimer sa passion coupable auprès de Tiberge." }
                    ]
                },
                {
                    theme: "2. L'argent, le luxe et la corruption morale",
                    items: [
                        { cit: "Manon était passionnée pour le plaisir ; je l'étais pour elle, et pour tout ce qui pouvait lui en donner.", loc: "Partie I", analyse: "Structure en chiasme asymétrique révélant le conflit fondamental entre idéalisme amoureux et réalisme vénal." },
                        { cit: "l'amour le plus tendre ne saurait s'accorder avec la faim.", loc: "Partie I (Lettre de Manon)", analyse: "Le pragmatisme cynique du siècle matérialiste qui vient subvertir l'idéalisme romanesque traditionnel." },
                        { cit: "L'or est une idole trop puissante à Paris pour qu'on puisse lui disputer le cœur des belles.", loc: "Partie I", analyse: "Métaphore de l'or érigé en puissance théologique et en valeur suprême de la capitale sous la Régence." },
                        { cit: "Je lui trouvais un cœur droit et une conduite honteuse.", loc: "Partie I", analyse: "Antithèse soulignant la duplicité psychologique du personnage de Manon, oscillant entre amour et besoin de confort." },
                        { cit: "Je ne pus m'empêcher de jeter un regard de mépris sur la fortune et sur les grandeurs du monde.", loc: "Partie I", analyse: "Refus apparent du matérialisme mondain par l'amant mystique qui sacrifie sa position pour son idole." }
                    ]
                },
                {
                    theme: "3. La marginalité, la transgression et le crime",
                    items: [
                        { cit: "Je franchis enfin tous les degrés de la honte sans m'en apercevoir.", loc: "Partie I", analyse: "La métaphore de la descente aux enfers moraux d'un aristocrate se dépouillant de son honneur par paliers." },
                        { cit: "en peu de temps j'occupai une place honorable parmi les chevaliers de l'industrie.", loc: "Partie I", analyse: "Périphrase ironique et antiphrase pour désigner le milieu des tricheurs professionnels et de la marginalité du jeu." },
                        { cit: "Je lui lâchai un coup qui lui passa le pistolet au travers de la tête. Le malheureux tomba mort sur la place.", loc: "Partie II", analyse: "Le basculement irréversible de la marge mondaine vers la criminalité de sang lors de l'évasion de Saint-Lazare." },
                        { cit: "Ma foi, mon honneur, tout était sacrifié à mon idole.", loc: "Partie I", analyse: "Hyperbole blasphématoire plaçant la femme aimée au-dessus de la morale religieuse et des devoirs de sa condition." },
                        { cit: "Il proposa de se venger de G... M... en lui prenant son argent.", loc: "Partie I", analyse: "Justification amorale du vol, transformé par les marginaux en un acte de vengeance ou de justice sociale personnelle." }
                    ]
                },
                {
                    theme: "4. Liberté, exil et rédemption",
                    items: [
                        { cit: "mais je trouvais de la joie dans cet exercice de ma liberté.", loc: "Partie II", analyse: "Formulation paradoxale liant le sentiment de plénitude et de liberté à l'errance précaire dans Paris." },
                        { cit: "Le Nouvel-Orléans nous parut d'abord un lieu de délices.", loc: "Partie II", analyse: "L'illusion de l'utopie géographique exotique, envisagée comme un sanctuaire purificateur pour le couple." },
                        { cit: "Nos âmes, délivrées des passions qui les avaient si longtemps agitées, ne s'occupaient plus que de s'aimer et de se plaire réciproquement.", loc: "Partie II", analyse: "La rédemption et l'apaisement moral des amants atteints uniquement par le dénuement et l'éloignement de la corruption." },
                        { cit: "Je rompis mon épée pour m'en servir à creuser la terre; mais elle m'était moins utile que mes mains.", loc: "Partie II", analyse: "Geste symbolique fort brisant l'attribut de la noblesse pour accomplir un devoir de deuil absolu dans le désert." },
                        { cit: "je lui déclarai que les semences de vertu qu’il avait jetées autrefois dans mon cœur commençaient à produire des fruits dont il allait être satisfait.", loc: "Partie II, p. 323-324", analyse: "Métaphore horticole et chrétienne marquant le retour définitif à l'ordre moral et la fin des égarements de la marge." }
                    ]
                }
            ],
            docs_complementaires: [
                { titre: "Carmen", source: "Prosper Mérimée (1845)", citation: "Tu es le diable. — Oui.", analyse: "L'archétype de la femme fatale marginale qui entraîne un soldat honnête dans le crime." },
                { titre: "La Dame aux Camélias", source: "Alexandre Dumas fils (1848)", citation: "Je suis une fille entretenue...", analyse: "La figure de la courtisane réhabilitée et sanctifiée par le sacrifice de son amour." },
                { titre: "Les Liaisons dangereuses", source: "Choderlos de Laclos (1782)", citation: "Conquérir est notre destin.", analyse: "La perversion froide du sentiment amoureux utilisé comme un instrument de destruction aristocratique." },
                { titre: "Illusions perdues", source: "Honoré de Balzac (1837)", citation: "Paris dévore la jeunesse.", analyse: "La peinture réaliste de la capitale comme un gouffre financier corrupteur pour les provinciaux." },
                { titre: "Lettres Persanes", source: "Montesquieu (1721)", citation: "L'argent est le roi de France.", analyse: "La critique satirique de l'effondrement moral lié à la spéculation financière sous la Régence." },
                { titre: "René", source: "François-René de Chateaubriand (1802)", citation: "J'avais un cœur plein de passions...", analyse: "La préfiguration de la mélancolie et de l'idéalisme destructeur qui hantent des Grieux." },
                { titre: "Moll Flanders", source: "Daniel Defoe (1722)", citation: "La pauvreté est la mère du crime.", analyse: "Le grand modèle réaliste anglais du roman picaresque narrant l'ascension et la chute d'une marginale." },
                { titre: "Le Chevalier Des Grieux", source: "Sainte-Beuve (1840)", citation: "Un martyr de la déchéance amoureuse.", analyse: "L'analyse critique érigeant le protagoniste en symbole de la passivité tragique face au désir." },
                { titre: "Supplément au voyage de Bougainville", source: "Denis Diderot (1772)", citation: "Sauvages innocents.", analyse: "Le mythe de la pureté du Nouveau Monde opposé à la corruption sophistiquée de l'Europe." },
                { titre: "Histoire des Aventuriers", source: "Alexandre Exquemelin (1678)", citation: "La vie des flibustiers.", analyse: "Le récit d'aventure maritime qui nourrit l'imaginaire picaresque et romanesque de l'époque." }
            ],
            plans: [
                {
                    sujet: "Le plaisir du lecteur vient-il seulement de l'aveuglement des deux personnages ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Un plaisir romanesque fondé sur la supériorité critique face à l'aveuglement des héros",
                            sous_parties: [
                                "A. Le comique et l'ironie nés de la naïveté pathologique de des Grieux face aux mensonges de Manon.",
                                "B. La tension dramatique suscitée par l'enchaînement prévisible des trahisons de l'héroïne.",
                                "C. Le détachement moral d'un lecteur institué en juge des fautes et des égarements du couple."
                            ]
                        },
                        {
                            titre: "II. Mais le plaisir naît surtout de la fascination pour l'intensité absolue de la passion",
                            sous_parties: [
                                "A. L'identification affective avec le lyrisme et la sincérité absolue des plaintes du Chevalier.",
                                "B. Le plaisir esthétique de la subversion : la marge érigée en espace d'héroïsme romantique.",
                                "C. L'empathie tragique provoquée par la fatalité d'un amour qui broie les conventions sociales."
                            ]
                        },
                        {
                            titre: "III. La satisfaction d'un parcours initiatique, spirituel et édifiant",
                            sous_parties: [
                                "A. Le plaisir du suspense lié aux multiples péripéties et évasions spectaculaires de l'intrigue picaresque.",
                                "B. La beauté morale et l'apaisement nés de la rédemption finale des amants dans le désert.",
                                "C. Le pacte de lecture ambigu : éprouver les délices de la faute tout en validant le châtiment moral."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Dans Manon Lescaut, est-ce parce que les personnages sont marginaux qu'ils sont romanesques ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La marginalité comme condition essentielle et féconde du romanesque d'aventure",
                            sous_parties: [
                                "A. La rupture des liens sociaux (famille, Église) qui libère les personnages et lance l'action dramatique.",
                                "B. La plongée pittoresque dans les bas-fonds (la triche, la prison, le bagne) comme moteur de péripéties haletantes.",
                                "C. Le personnage marginal (le tricheur, la courtisane) comme figure transgressive fascinante pour le lecteur."
                            ]
                        },
                        {
                            titre: "II. Le romanesque naît en réalité du conflit tragique entre idéalisme et déchéance",
                            sous_parties: [
                                "A. L'origine noble de des Grieux qui dramatise sa chute : le contraste entre sa noblesse et ses actes criminels.",
                                "B. Le conflit insoluble entre l'absolu de l'amour spirituel et les nécessités prosaïques de la survie matérielle.",
                                "C. L'ambiguïté de Manon, personnage romanesque non par sa pauvreté, mais par sa quête insatiable de liberté."
                            ]
                        },
                        {
                            titre: "III. La marginalité comme miroir philosophique universel de la condition humaine",
                            sous_parties: [
                                "A. La marge érigée en laboratoire pour analyser la force aveugle des passions et le déterminisme de l'argent.",
                                "B. Le parcours vers l'utopie (l'exil américain) qui dépouille les héros de leur statut social pour révéler leur âme pure.",
                                "C. La portée critique des Lumières : la marginalité des héros met en accusation l'hypocrisie et la cruauté de la société."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Pendant qu'il marche sans crainte dans les rues de Paris après son évasion, le Chevalier Des Grieux affirme : « Je trouvais de la joie dans cet exercice de ma liberté ». Cette phrase éclaire-t-elle votre lecture du roman ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La revendication d'une liberté joyeuse hors-la-loi et le plaisir de la transgression",
                            sous_parties: [
                                "A. La joie de s'affranchir des carcans étouffants des institutions traditionnelles (l'autorité paternelle, le séminaire).",
                                "B. La liberté conçue comme une conquête physique immédiate au cours d'évasions spectaculaires.",
                                "C. L'hédonisme de la marge : le bonheur d'assumer sa passion en toute indépendance morale."
                            ]
                        },
                        {
                            titre: "II. Le paradoxe cruel d'une liberté factice masquant une profonde aliénation amoureuse",
                            sous_parties: [
                                "A. L'illusion de l'autonomie : le Chevalier croit s'émanciper mais reste l'esclave absolu des caprices de Manon.",
                                "B. Le glissement inéluctable de la liberté ludique vers l'engrenage de la criminalité et du meurtre de sang.",
                                "C. La précarité poisseuse de la marge parisienne où le manque d'argent dicte et détruit chaque choix de vie."
                            ]
                        },
                        {
                            titre: "III. La quête spirituelle d'une liberté purifiée accessible uniquement par le dépouillement",
                            sous_parties: [
                                "A. L'échec des libertés matérielles et sociales artificielles proposées par la corruption parisienne.",
                                "B. La véritable émancipation atteinte dans l'exil américain, loin des ornements et de la vanité du monde.",
                                "C. Le verdict tragique : la liberté morale ultime conquise à travers l'acceptation de la mort et du deuil éternel."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "balzac_peau",
            titre: "La Peau de chagrin",
            auteur: "Honoré de Balzac",
            parcours: {
                nom: "Les romans de l'énergie : création et destruction",
                explication: "Ce parcours explore la théorie balzacienne selon laquelle chaque individu possède un capital fini d'énergie vitale. Le désir ('Vouloir') et l'action ('Pouvoir') consument cette force divine et accélèrent la mort. Le roman met en scène la combustion tragique d'un héros dont les souhaits matériels se traduisent par le rétrécissement physique d'un talisman magique, illustrant la tension entre création artistique, consumérisme et survie."
            },
            biographie: "Honoré de Balzac (1799-1850) est le père fondateur du Réalisme moderne en littérature. Écrivain titanesque et visionnaire, il conçoit *La Comédie humaine*, une œuvre monumentale regroupant plus de 90 romans reliés par le système des personnages reparaissants, visant à cartographier et analyser scientifiquement toutes les classes, les intérieurs et les mœurs de la société post-révolutionnaire du XIXe siècle.",
            resume_complet: "Publié en 1831, <em>La Peau de chagrin</em> est un roman philosophique et fantastique articulé en trois parties. Raphaël de Valentin, un jeune aristocrate surdoué mais totalement ruiné et désespéré par l'indifférence de la société parisienne, s'apprête à se suicider en se jetant dans la Seine. Il entre par hasard dans la boutique d'un vieil antiquaire mystique qui lui propose un pacte faustien : un talisman en peau d'âne sauvage, capable d'exaucer absolument tous ses désirs. Cependant, le vieillard énonce la clause fatale : à chaque souhait formulé, la Peau rétrécira, abrégeant proportionnellement la durée de vie du héros. Ivre de cynisme, Raphaël accepte et demande un banquet somptueux. Il est immédiatement entraîné dans une orgie frénétique chez le banquier Taillefer, où il constate le premier rétrécissement de l'objet. Lors de cette fête, il confie son passé à son ami Émile : étudiant ascétique, il travaillait à un traité philosophique dans une mansarde, soutenu par l'amour pur de Pauline, avant de se ruiner et de sombrer dans la folie en tentant de conquérir la comtesse Foedora, 'la femme sans cœur', allégorie de la haute société parisienne. Devenu immensément riche grâce au talisman, Raphaël vit désormais cloîtré dans un hôtel particulier, s'imposant une existence mécanique d'automate pour ne plus rien désirer et ainsi préserver sa vie. Mais ses retrouvailles avec Pauline raniment une passion dévorante. La Peau fond à vue d'œil. Affolé, Raphaël consulte en vain la science et la médecine. Il meurt foudroyé dans un dernier élan de désir pour Pauline, la Peau réduite à néant.",
            citations: [
                {
                    theme: "1. Le pacte faustien, le temps et la Peau",
                    items: [
                        { cit: "Si tu me possèdes, tu posséderas tout, mais ta vie m'appartiendra.", loc: "Le Talisman", analyse: "Formule contractuelle fantastique actant le sacrifice de l'existence au profit de la toute-puissance." },
                        { cit: "VOULOIR nous brûle et POUVOIR nous détruit ; mais SAVOIR laisse notre faible organisation dans un perpétuel état de calme.", loc: "Le Talisman (L'Antiquaire)", analyse: "Maxime ternaire résumant la thèse philosophique balzacienne sur la gestion de l'énergie vitale." },
                        { cit: "À chaque vouloir, je décroîtrai comme tes jours. Regarde-moi.", loc: "Le Talisman", analyse: "Inscription métaphorique matérialisant l'écoulement du temps sous la forme d'un déclin physique." },
                        { cit: "Il tenait le monde entre ses mains, mais il ne le voulait plus.", loc: "L'Agonie", analyse: "Antithèse tragique montrant le paradoxe d'un héros paralysé par sa propre omnipotence." },
                        { cit: "La Peau s'était réduite à la dimension d'une feuille de saule.", loc: "L'Agonie", analyse: "Comparaison végétale accentuant la précarité imminente de la vie du protagoniste." }
                    ]
                },
                {
                    theme: "2. La satire sociale et l'allégorie de Paris",
                    items: [
                        { cit: "Foedora, c’était la société personnifiée.", loc: "La Femme sans cœur", analyse: "Allégorie érigeant la comtesse en symbole de l'égoïsme et de la froideur de la haute bourgeoisie." },
                        { cit: "L'argent est la seule divinité de cette époque matérialiste.", loc: "Le Talisman", analyse: "Diagnostic réaliste de Balzac dénonçant le triomphe du capitalisme après la Révolution." },
                        { cit: "Paris est un gouffre d'or, de vices et de génies consumés.", loc: "La Femme sans cœur", analyse: "Accumulation métaphorique dépeignant la capitale comme un monstre dévorateur d'énergie." },
                        { cit: "Elle se laissait adorer, mais elle ne se donnait jamais.", loc: "La Femme sans cœur", analyse: "Antithèse révélant la perversion du désir mondain, réduit à un pur exercice de pouvoir narcissique." },
                        { cit: "Une débauche d'esprits et de cadavres d'idées.", loc: "Le Talisman (L'Orgie)", analyse: "Alliance de mots (débauche/cadavres) fustigeant le cynisme intellectuel lors du festin de Taillefer." }
                    ]
                },
                {
                    theme: "3. La faillite scientifique et la fin de la raison",
                    items: [
                        { cit: "Les savants étaient devenus de véritables enfants devant ce mystère.", loc: "L'Agonie", analyse: "Comparaison ironique soulignant l'impuissance du rationalisme positiviste du XIXe siècle face à l'occulte." },
                        { cit: "Une force inconnue, supérieure à toutes les lois de la matière.", loc: "L'Agonie", analyse: "Formulation marquant l'irruption du fantastique au cœur même du protocole de description réaliste." },
                        { cit: "La médecine est une science conjecturale qui s'écharpe sur un cadavre.", loc: "L'Agonie", analyse: "Satire féroce de la corporation médicale, incapable de diagnostiquer le mal du héros." },
                        { cit: "La presse hydraulique se brisa sans l'aplatir d'un cheveu.", loc: "L'Agonie", analyse: "Hyperbole technique démontrant l'échec de la puissance industrielle face au talisman sacré." },
                        { cit: "Ils mesuraient l'impossible avec leurs compas inutiles.", loc: "L'Agonie", analyse: "Oxymore marquant la vanité du scientisme confronté à la fatalité du destin spirituel." }
                    ]
                },
                {
                    theme: "4. L'énergie vitale, l'agonie et la passion",
                    items: [
                        { cit: "Raphaël vécut dès lors comme un automate mécanique.", loc: "L'Agonie", analyse: "Comparaison technologique traduisant la mort psychologique du personnage qui s'interdit de désirer." },
                        { cit: "Pauline, je t'aime et je meurs !", loc: "L'Agonie", analyse: "Structure dramatique liant consubstantiellement l'explosion de l'amour à l'anéantissement physique." },
                        { cit: "Il fixait la Peau avec des yeux de fou et de condamné.", loc: "L'Agonie", analyse: "Double qualification marquant le glissement de la toute-puissance vers la paranoïa morbide." },
                        { cit: "Sa vie s'échappait par ses regards enflammés.", loc: "La Femme sans cœur", analyse: "Métaphore des fluides illustrant la théorie balzacienne de la dissipation de l'énergie par l'expression." },
                        { cit: "Le moribond mordit sauvagement le sein de Pauline.", loc: "L'Agonie (La mort)", analyse: "Registre bestial traduisant la fureur pulsionnelle ultime du héros au moment de son agonie finale." }
                    ]
                }
            ],
            docs_complementaires: [
                { titre: "Le Portrait de Dorian Gray", source: "Oscar Wilde (1890)", citation: "S'il était possible que ce portrait vieillisse à ma place !", analyse: "Le motif double et fantastique du pacte liant la survie ou la jeunesse à la dégradation d'un objet." },
                { titre: "Faust", source: "Goethe (1808)", citation: "J'ai étudié la philosophie... et me voilà tout aussi sot.", analyse: "L'archétype universel du pacte diabolique scellé par l'intellectuel pour goûter aux plaisirs matériels." },
                { titre: "Illusions perdues", source: "Honoré de Balzac (1837)", citation: "L'énergie de Lucien se heurta à la muraille d'argent.", analyse: "Le pendant purement réaliste de la trajectoire de Raphaël : la destruction du génie par les requins de Paris." },
                { titre: "L'Assommoir", source: "Émile Zola (1877)", citation: "L'alambic, avec ses sueurs d'alcool...", analyse: "La mythification d'un outil matériel (l'alambic) qui agit comme un monstre dévorant l'énergie des ouvriers." },
                { titre: "Spleen LXXVIII", source: "Charles Baudelaire (1857)", citation: "Le Temps mange la vie.", analyse: "L'angoisse poétique du sablier que Balzac matérialise physiquement à travers le rétrécissement de la peau." },
                { titre: "Le Rouge et le Noir", source: "Stendhal (1830)", citation: "Julien avait de l'énergie, c'était son crime.", analyse: "La célébration de la force vitale et de l'ambition de la jeunesse du XIXe siècle étouffée par la Restauration." },
                { titre: "Frankenstein", source: "Mary Shelley (1818)", citation: "Je suis le créateur de ma propre destruction.", analyse: "Le mythe scientifique du savant ou de l'homme puni par l'Académie pour avoir bravé les limites de la nature." },
                { titre: "Aurélia", source: "Gérard de Nerval (1855)", citation: "Le rêve est une seconde vie.", analyse: "L'irruption du fantastique et du délire onirique comme mode d'exploration des fêlures psychiques." },
                { titre: "Les Tableaux de Paris", source: "Louis-Sébastien Mercier (1781)", citation: "Le gouffre parisien.", analyse: "La fresque sociale pré-révolutionnaire décrivant déjà la corruption des mœurs par la spéculation financière." },
                { titre: "Physiologie du mariage", source: "Honoré de Balzac (1829)", citation: "Tout est force dans l'univers.", analyse: "L'essai théorique fondateur où Balzac pose ses premières hypothèses scientifiques sur les fluides vitaux." }
            ],
            plans: [
                {
                    sujet: "« Raphaël avait pu tout faire, il n'avait rien fait ». Cette formule, qui se trouve à la fin de La Peau de chagrin, éclaire-t-elle votre lecture de ce roman de Balzac ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Le paradoxe de la toute-puissance illusoire : le pouvoir absolu condamnant à l'inaction",
                            sous_parties: [
                                "A. Le pacte fantastique comme promesse d'une omnipotence totale ('Vouloir' et 'Pouvoir' sans limites).",
                                "B. La paralysie tragique du héros : ne plus rien désirer pour empêcher le rétrécissement matériel de la Peau.",
                                "C. L'existence végétative d'un automate (Raphaël renonçant à son humanité pour survivre)."
                            ]
                        },
                        {
                            titre: "II. En réalité, une vie consumée par l'intensité dramatique des passions antérieures",
                            sous_parties: [
                                "A. Le passé d'artisan intellectuel : la rédaction ascétique de la Théorie de la volonté dans la mansarde.",
                                "B. La combustion destructrice et stérile de l'énergie amoureuse pour conquérir la froide Foedora.",
                                "C. Le festin initial chez Taillefer : l'orgie comme paroxysme de la dissipation de la force vitale."
                            ]
                        },
                        {
                            titre: "III. La formule balzacienne comme diagnostic tragique de la modernité",
                            sous_parties: [
                                "A. Raphaël, archétype d'une génération romantique désenchantée, dévorée par l'ambition sociale bourgeoise.",
                                "B. L'échec final du matérialisme : l'accumulation de richesses dorées qui débouche sur le vide existentiel.",
                                "C. Le triomphe de la passion sur la raison : l'amour ultime avec Pauline comme explosion fatale et sublime."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Tout est-il voué à la disparition dans La Peau de chagrin ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Un roman de l'involution, du déclin et de l'anéantissement universel",
                            sous_parties: [
                                "A. La disparition physique, millimétrée et inéluctable du talisman, symbole du capital de vie.",
                                "B. La dégradation physiologique, l'agonie et la phtisie du héros Raphaël de Valentin.",
                                "C. L'effondrement des valeurs morales traditionnelles et de la noblesse d'esprit, dévorées par la puissance de l'argent."
                            ]
                        },
                        {
                            titre: "II. La persistance de forces spirituelles, artistiques et affectives indestructibles",
                            sous_parties: [
                                "A. L'amour absolu, pur et désintéressé de Pauline qui survit à la déchéance et à la folie du héros.",
                                "B. Le pouvoir éternel du 'Savoir' incarné par la collection de l'antiquaire et la création littéraire.",
                                "C. La pérennité du Désir humain qui renaît de ses cendres, érigeant l'intrigue au rang de mythe universel."
                            ]
                        },
                        {
                            titre: "III. La disparition comme condition paradoxale de la Beauté et du renouvellement réaliste",
                            sus_parties: [
                                "A. La combustion de l'énergie nécessaire à l'éclat de l'œuvre d'art : le panache romantique de l'incandescence brève.",
                                "B. La ruine de l'illusion romanesque individuelle permettant l'avènement d'une peinture lucide et chirurgicale de la société.",
                                "C. Le roman comme sanctuaire textuel immortalisant les vestiges d'un monde en mutation."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Selon vous, dans La Peau de chagrin, peut-on dire que Raphaël de Valentin n'est pas responsable de son destin ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Un héros pris au piège de forces déterministes et fatales supérieures",
                            sous_parties: [
                                "A. Le déterminisme social et financier implacable de la Restauration qui accule le provincial ruiné au suicide.",
                                "B. La machination diabolique du talisman magique dont la clause scelle l'involution mécanique de l'existence.",
                                "C. L'influence corruptrice des figures de tentation parisiennes (le cynisme d'Émile, la froideur de Foedora)."
                            ]
                        },
                        {
                            titre: "II. L'affirmation du libre arbitre et de la responsabilité pleine et entière du protagoniste",
                            sous_parties: [
                                "A. L'acte volontaire et conscient de la signature du pacte initial : accepter l'incandescence au prix de la mort.",
                                "B. Le narcissisme, l'orgueil de caste et la soif de puissance mondaine qui guident chaque choix du personnage.",
                                "C. Le refus délibéré de la sagesse stoïque prônée par l'antiquaire (le choix du Vouloir contre le Savoir)."
                            ]
                        },
                        {
                            titre: "III. Une responsabilité tragique qui dépasse la simple morale individuelle",
                            sous_parties: [
                                "A. Raphaël comme cobaye expérimental d'une maladie collective : la fureur de jouir propre au XIXe siècle.",
                                "B. L'impuissance de la volonté face aux pulsions inconscientes du désir (les souhaits involontaires dévorants).",
                                "C. Le dénouement comme assomption tragique : assumer sa mort dans un dernier élan de passion amoureuse absolue."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "colette_sido",
            titre: "Sido suivi de Les Vrilles de la vigne",
            auteur: "Colette",
            parcours: {
                nom: "La célébration du monde",
                explication: "Ce parcours étudie la manière dont l'écriture poétique et sensuelle de Colette magnifie le réel le plus banal. Célébrer le monde signifie ici réenchanter le paysage naturel (les jardins de l'enfance), honorer le règne animal et végétal par une prose hyper-sensorielle, et proclamer l'émancipation triomphante de la femme qui brise ses entraves (les vrilles) pour conquérir son autonomie artistique et hédoniste."
            },
            biographie: "Sidonie-Gabrielle Colette (1873-1594), dite Colette, est une romancière, mime et journaliste majeure du XXe siècle. Première femme à recevoir des funérailles nationales en France, elle mène une existence farouchement libre et transgressive. Longtemps exploitée par son premier mari Willy qui signe ses premiers romans (*Claudine*), elle s'émancipe par le music-hall avant de bâtir une œuvre monumentale centrée sur l'enfance, le corps et la communion organique avec la nature.",
            resume_complet: "Composé de deux œuvres distinctes réunies par le programme, le recueil offre une géographie sentimentale et poétique. *Sido* (1930) est une œuvre de la maturité où Colette mythifie son enfance en Bourgogne. Elle y dresse le portrait de sa mère, Sidonie dite Sido, prêtresse panthéiste d'un jardin familial conçu comme le centre d'un système solaire. Sido y dialogue avec les bêtes, commande aux plantes et lit l'avenir dans le vent. Colette évoque aussi son père (le Capitaine), amant blessé dont la bibliothèque recèle des cahiers vides, et ses frères et sœurs (les Sauvages), marginaux inadaptés à la comédie bourgeoise. *Les Vrilles de la vigne* (1908) rassemble des pièces courtes, des poèmes en prose rédigés après sa rupture avec Willy. À travers l'allégorie du rossignol qui brise les vrilles de la vigne pour ne pas mourir enchaîné, Colette chante sa libération. Elle célèbre la Baie de Somme, ses chiens (Toby-Chien), et s'approprie son existence de femme libre et d'écrivaine sensuelle, trouvant dans la sensation physique un rempart contre la fuite du temps.",
            citations: [
                {
                    theme: "1. La figure mythologique de Sido et l'enfance",
                    items: [
                        { cit: "Elle était le centre rayonnant de notre système solaire familial.", loc: "Sido", analyse: "Métaphore cosmique divinisant la mère comme source absolue de chaleur et d'ordre moral." },
                        { cit: "Regarde ! me disait-elle. C'est l'injonction suprême de son enseignement.", loc: "Sido", analyse: "Injonction impérative instituant le regard poétique comme principal héritage maternel." },
                        { cit: "Sido, qui comprenait sans peine le langage secret des bêtes et des plantes.", loc: "Sido", analyse: "Hyperbole panthéiste transformant la mère en une chamane connectée aux mystères du vivant." },
                        { cit: "Elle n'a jamais rien possédé en propre, ce qui la rendait immensément riche.", loc: "Sido", analyse: "Structure antithétique opposant la pauvreté matérielle à la noblesse spirituelle de la communion terrestre." },
                        { cit: "Je la chante de mon mieux, elle est mon tombeau poétique.", loc: "Sido", analyse: "Métaphore de la liturgie attribuant à l'écriture la fonction d'immortaliser la mémoire sacrée." }
                    ]
                },
                {
                    theme: "2. Sensualité, synesthésies et rapport charnel au monde",
                    items: [
                        { cit: "J'appartiens viscéralement à un pays de sève et de terre que j'ai quitté.", loc: "Sido", analyse: "Adjectif organique ('viscéralement') marquant l'enracinement physique du souvenir de l'enfance." },
                        { cit: "Le parfum écrasant et lourd du muguet mouillé en fleurs.", loc: "Sido", analyse: "Accumulation d'adjectifs sensoriels provoquant une synesthésie olfactive et tactile chez le lecteur." },
                        { cit: "Ô vent, vent salé de ma liberté, viens purifier mon âme !", loc: "Les Vrilles de la vigne", analyse: "Apostrophe lyrique et anaphore célébrant la nature sauvage comme force thérapeutique." },
                        { cit: "Une gelée blanche, crissante sous le pas comme du verre brisé.", loc: "Sido", analyse: "Comparaison sonore et tactile restituant avec une hyper-précision clinique la matérialité de la province." },
                        { cit: "J'ai vu se lever le jour rose, mouillé et tiède comme une chair.", loc: "Les Vrilles de la vigne", analyse: "Personnification et comparaison érotisée de l'aube, témoignant d'un hédonisme permanent." }
                    ]
                },
                {
                    theme: "3. L'allégorie de la libération féminine",
                    items: [
                        { cit: "Je ne veux plus jamais me marier, je veux appartenir à ma propre vie !", loc: "Les Vrilles de la vigne", analyse: "Injonction féministe catégorique brisant le carcan de l'aliénation conjugale du Second Empire." },
                        { cit: "La vigne a rompu ses vrilles étouffantes, je peux enfin chanter.", loc: "Les Vrilles (Préface)", analyse: "Allégorie végétale : la douleur de la rupture amoureuse est la condition de l'émancipation poétique." },
                        { cit: "Je veux faire exactement ce que je veux sur cette terre.", loc: "Les Vrilles de la vigne", analyse: "Répétition provocatrice revendiquant l'impertinence comme une philosophie morale suprême." },
                        { cit: "C'est de mon propre flanc que je tire ma force de création.", loc: "Les Vrilles de la vigne", analyse: "Formulation somatique situant la puissance artistique dans l'autonomie biologique de la femme." },
                        { cit: "Je contemple mon corps dans le miroir avec un respect sauvage.", loc: "Les Vrilles de la vigne", analyse: "Alliance de mots (respect/sauvage) marquant la réappropriation de la chair soustraite au regard masculin." }
                    ]
                },
                {
                    theme: "4. La mélancolie du temps et l'envers de la joie",
                    items: [
                        { cit: "Mon père était un poète silencieux et amputé de ses vers.", loc: "Sido", analyse: "Oxymore et métaphore douloureuse peignant la tragédie de l'artiste manqué (le Capitaine)." },
                        { cit: "Les grands cahiers blancs et vides de mon père restèrent sur la table.", loc: "Sido", analyse: "Symbole spatial de l'œuvre avortée que la fille se donne pour mission de racheter par sa propre écriture." },
                        { cit: "Nous étions des sauvages fiers, inadaptés à la comédie sociale des hommes.", loc: "Sido", analyse: "Registre mélioratif de la marginalité familiale, opposée à l'hypocrisie de la bourgeoisie." },
                        { cit: "Le temps s'écoule, irréparable, emportant les visages aimés.", loc: "Les Vrilles de la vigne", analyse: "Topos lyrique du sablier, adouci par la permanence des cycles éternels de la nature bourguignonne." },
                        { cit: "Je n'ai pas fini d'être triste, mais la sève remonte.", loc: "Les Vrilles de la vigne", analyse: "Antithèse conjuguant la lucidité du chagrin à l'élan vital invincible du vivant." }
                    ]
                }
            ],
            docs_complementaires: [
                { titre: "Les Confessions", source: "Jean-Jacques Rousseau (1782)", citation: "Je me rappelle ces jours heureux de mon enfance.", analyse: "La matrice autobiographique liant la pureté de la mémoire à la nostalgie du paradis naturel." },
                { titre: "Du côté de chez Swann", source: "Marcel Proust (1913)", citation: "L'odeur de la madeleine...", analyse: "L'importance de la sensation matérielle involontaire comme unique moyen de ressusciter le temps perdu." },
                { titre: "Correspondances", source: "Charles Baudelaire (1857)", citation: "Les parfums, les couleurs et les sons se répondent.", analyse: "La théorie des synesthésies poétiques appliquées à la description des jardins bourguignons." },
                { titre: "La Mare au diable", source: "George Sand (1846)", citation: "La nature est un immense livre ouvert.", analyse: "La célébration de la province rurale par une femme de lettres affranchie des codes mondains parisiens." },
                { titre: "Mes forêts", source: "Hélène Dorion (2021)", citation: "Mes forêts sont des miroirs...", analyse: "La filiation contemporaine : l'écriture organique établissant un lien fusionnel entre corps féminin et nature." },
                { titre: "Le Parti pris des choses", source: "Francis Ponge (1942)", citation: "Le monde muet est notre patrie.", analyse: "L'attention microscopique portée aux éléments les plus banals de la matière, pratiquée de fait par Sido." },
                { titre: "Feuilles d'herbe", source: "Walt Whitman (1855)", citation: "Je chante le corps électrique.", analyse: "Le lyrisme hédoniste américain célébrant la matérialité charnelle et la fusion cosmique avec l'univers." },
                { titre: "Une chambre à soi", source: "Virginia Woolf (1929)", citation: "Une femme doit avoir de l'argent et une chambre à soi pour écrire.", analyse: "La réflexion féministe contemporaine sur les conditions matérielles nécessaires à l'émancipation créatrice." },
                { titre: "Les Nourritures terrestres", source: "André Gide (1897)", citation: "Nathanaël, je t'enseignerai la ferveur.", analyse: "L'apologie de la sensation pure, de l'instant présent et du refus des morales ascétiques traditionnelles." },
                { titre: "Chants d'automne", source: "Alphonse de Lamartine (1820)", citation: "Le lac des regrets.", analyse: "Le contre-modèle : Colette refuse la déploration larmoyante du romantisme pour ancrer sa mémoire dans la joie." }
            ],
            plans: [
                {
                    sujet: "Peut-on considérer Sido et Les Vrilles de la vigne comme des œuvres de l’émerveillement ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Un réenchantement du réel fondé sur l'émerveillement sensoriel et l'enfance",
                            sous_parties: [
                                "A. La célébration poétique de la nature bourguignonne et du jardin matriciel divinisé (Sido).",
                                "B. Le regard de l'enfance qui transfigure le quotidien le plus banal en miracle cosmique.",
                                "C. L'hyper-sensorialité de la prose (synesthésies olfactives, tactiles) qui magnifie la matière."
                            ]
                        },
                        {
                            titre: "II. Mais une écriture hantée par la morsure de la réalité, de la perte et du deuil",
                            sous_parties: [
                                "A. L'omniprésence du spectre de la fuite du temps et de la disparition des visages aimés.",
                                "B. La tragédie des ambitions déchues : le portrait mélancolique du père amputé (les cahiers blancs).",
                                "C. La douleur physique de la rupture amoureuse et de la solitude dans les Vrilles."
                            ]
                        },
                        {
                            titre: "III. L'émerveillement comme un choix éthique supérieur et un acte de résilience poétique",
                            sous_parties: [
                                "A. Refuser le regret larmoyant romantique pour imposer la célébration hédoniste du présent.",
                                "B. L'allégorie végétale (rompre les vrilles) : transmuter la souffrance de l'émancipation en liberté créatrice.",
                                "C. L'écriture organique comme rempart ultime et triomphant contre la mort et l'oubli."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Selon vous, en écrivant Sido et Les Vrilles de la vigne, Colette recherche-t-elle un idéal perdu ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La quête nostalgique d'un paradis perdu originel et de figures mythologiques",
                            sous_parties: [
                                "A. La reconstruction mémorielle et idéalisée de l'enfance heureuse à Saint-Sauveur.",
                                "B. Sido érigée en idéal maternel indépassable, divinité solaire maîtresse des éléments naturels.",
                                "C. La nostalgie d'une harmonie primitive et panthéiste entre l'homme, l'animal et le végétal."
                            ]
                        },
                        {
                            titre: "II. Le refus du culte du passé : une écriture ancrée dans la conquête de la liberté présente",
                            sous_parties: [
                                "A. Briser le carcan du mariage patriarcal (les vrilles de Willy) pour exister par et pour soi-même.",
                                "B. La célébration du corps féminin réapproprié et de l'indépendance de l'artiste de music-hall.",
                                "C. L'attention absolue portée à la sensation immédiate du réel (la Baie de Somme, Paris) contre le regret."
                            ]
                        },
                        {
                            titre: "III. L'art littéraire comme recréation d'un idéal moderne et immanent",
                            sous_parties: [
                                "A. Racheter l'échec poétique du père (les pages blanches) par le triomphe stylistique de la fille.",
                                "B. L'héritage de Sido appliqué au monde adulte : ériger le regard curieux en éthique de vie.",
                                "C. La prose poétique comme victoire définitive de la création sur la dégradation temporelle."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Le dernier époux de Colette évoque ainsi l’auteure : « Sa prise de contact avec les choses se faisait par tous les sens. Elle ne se contentait pas de les regarder, il fallait qu’elle les flairât, qu’elle les goûtât. » Dans quelle mesure ce rapport au monde de Colette se manifeste-t-il dans Sido et Les Vrilles de la vigne ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Une écriture physiologique où le corps est le premier outil de connaissance",
                            sous_parties: [
                                "A. Le rejet des abstractions intellectuelles théoriques au profit de la sensation pure de la chair.",
                                "B. La prévalence de l'odorat, du goût et du toucher pour cartographier le jardin familial de Sido.",
                                "C. La synesthésie érigée en système stylistique (fusionner les couleurs, les sons et les textures matérielles)."
                            ]
                        },
                        {
                            titre: "II. Une communion organique, animale et végétale avec le vivant",
                            sous_parties: [
                                "A. Le dialogue direct avec l'animal (Toby-Chien) comme miroir d'une sincérité sensorielle perdue par les hommes.",
                                "B. La matérialité de la nature restituée avec une hyper-précision clinique (le froid crissant, la sève, le muguet lourd).",
                                "C. Le paysage descriptif conçu comme une expérience physique d'immersion (la Baie de Somme)."
                            ]
                        },
                        {
                            titre: "III. Ce rapport hyper-sensoriel au monde érigé en éthique morale et artistique",
                            sous_parties: [
                                "A. L'honnêteté de la sensation physique brandie comme une arme contre l'hypocrisie des conventions de la comédie sociale parisiens.",
                                "B. La réappropriation du corps féminin, célébré dans sa vérité matérielle et sensuelle autonome.",
                                "C. La ferveur hédoniste immanente comme unique rempart poétique efficace contre la mort et l'angoisse du néant."
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    idees: [
        {
            id: "graffigny_peruvienne",
            titre: "Lettres d'une Péruvienne",
            auteur: "Françoise de Graffigny",
            parcours: {
                nom: "Un nouvel univers s'est offert à mes yeux",
                explication: "Ce parcours invite à étudier la manière dont la confrontation avec l'altérité culturelle devient un puissant levier d'émancipation et de contestation. À travers le regard faussement naïf d'une captive inca, le roman utilise le dépaysement géographique et intellectuel pour déconstruire les mœurs européennes, interroger les inégalités de genre et bâtir une voix féminine autonome et critique."
            },
            biographie: "Françoise d'Issembourg d'Happoncourt, dame de Graffigny (1695-1758), naît en Lorraine. Après avoir fui un mariage marqué par les violences conjugales de son époux, elle s'installe à Paris et devient l'une des femmes de lettres les plus influentes des salons du XVIIIe siècle. Publié anonymement en 1747, son roman épistolaire *Lettres d'une Péruvienne* connaît un triomphe éditorial européen immédiat, s'imposant comme un jalon clé de la littérature féministe et philosophique des Lumières.",
            resume_complet: `Le roman adopte la forme épistolaire polyphonique pour retracer l'itinéraire géographique, intellectuel et existentiel de Zilia, une princesse inca et Vierge du Soleil. Enlevée de force de son temple de Cuzco par des conquistadors espagnols le jour même de ses noces avec le prince Aza, elle est ensuite capturée en mer par des marins français. Le chevalier Déterville la prend sous sa protection bienveillante et l'emmène en France, développant pour elle une passion amoureuse sincère mais non partagée. 
            <br><br>Pendant la première phase de son exil, Zilia utilise des quipos (des cordelettes de fils noués de différentes couleurs) pour consigner son désespoir, sa nostalgie et sa fidélité indéfectible à Aza. Arrivée à Paris, elle est confrontée à un véritable choc culturel et matériel. Elle observe avec un étonnement critique les mœurs de la haute société française sous la Régence, fustigeant la superficialité des salons, le culte des apparences, la corruption par l'argent et l'injustice criante de l'éducation réservée aux femmes. 
            <br><br>Grâce à l'apprentissage méthodique de la langue et de l'écriture françaises, Zilia s'approprie les outils philosophiques des Lumières. Le dénouement rompt de manière fracassante avec les codes traditionnels du roman sentimental : découvrant qu'Aza l'a trahie en se convertissant au catholicisme pour épouser une Espagnole, elle refuse le mariage de consolation avec Déterville. Devenue financièrement indépendante grâce à la restitution de ses trésors incas, elle choisit de vivre seule dans sa maison de campagne, se consacrant à l'étude, à l'écriture et à une amitié pure, s'émancipant ainsi de toutes les tutelles masculines.`,
            citations: [
                {
                    theme: "1. Le regard étranger et la satire des mœurs européennes",
                    items: [
                        { cit: "Tout ce que l'on fait dans ce pays-ci... me paraît être en contradiction directe avec la saine raison.", loc: "Lettre 12", analyse: "Formule fondatrice du regard éloigné : la France civilisée est passée au filtre de la logique critique de l'étrangère." },
                        { cit: "Ce que vous appelez ici la politesse n'est en vérité que la triste coutume d'être faux.", loc: "Lettre 16", analyse: "Antithèse incisive démystifiant les convenances mondaines, redéfinies comme une hypocrisie institutionnalisée." },
                        { cit: "Ils ont une manie effrénée de l'esprit, et c'est précisément ce qui les rend si profondément sots.", loc: "Lettre 29", analyse: "Formulation paradoxale et ironique raillant la vacuité des conversations de salon où le paraître supplante l'être." },
                        { cit: "L'argent est la seule et unique divinité que l'on adore ouvertement dans cette contrée.", loc: "Lettre 24", analyse: "Métaphore théologique dénonçant la corruption matérialiste d'une société entièrement soumise au capital." },
                        { cit: "Un assemblage de couleurs et de reflets qui ne représentent rien de réel à l'esprit.", loc: "Lettre 15", analyse: "Procédé de défamiliarisation appliqué aux miroirs et peintures, soulignant l'artifice du décor occidental." }
                    ]
                },
                {
                    theme: "2. Le combat philosophique pour l'égalité des sexes et l'éducation",
                    items: [
                        { cit: "L'autorité y est tout entière du côté des hommes, et l'esclavage du côté des femmes.", loc: "Lettre 34", analyse: "Structure symétrique et lexique politique violent dénonçant la nature patriarcale de la société française." },
                        { cit: "Leur éducation se réduit presque uniquement à la pure politesse des manières et du corps.", loc: "Lettre 34", analyse: "Adverbe restrictif mettant en accusation la privation délibérée d'instruction pour maintenir les femmes dociles." },
                        { cit: "Vous voudriez que les femmes ne fussent des êtres pensants que pour mieux s'occuper de vos plaisirs.", loc: "Lettre 34", analyse: "Apostrophe accusatrice ciblant l'égoïsme masculin et revendiquant le statut de sujet rationnel pour la femme." },
                        { cit: "Le plaisir d'être, ce plaisir si pur et oublié par tant d'aveugles humains.", loc: "Lettre 41", analyse: "Formulation philosophique d'influence cartésienne liant l'existence à la conscience de soi autonome." },
                        { cit: "Il me semble enfin que je n'existe plus désormais que par moi-même et pour moi-même.", loc: "Lettre 40", analyse: "Déclaration solennelle d'indépendance ontologique, brisant le schéma de la dépendance amoureuse." }
                    ]
                },
                {
                    theme: "3. Le traumatisme de l'arrachement et le choc du nouvel univers",
                    items: [
                        { cit: "Un nouvel univers s’est offert tout à coup à mes yeux effrayés.", loc: "Lettre 2", analyse: "Hyperbole spatiale traduisant le bouleversement radical des repères géographiques et culturels." },
                        { cit: "Je suis enfermée dans une maison flottante qui n'est point du tout attachée à la terre.", loc: "Lettre 2", analyse: "Périphrase naïve pour décrire le navire européen, symbolisant la claustration et l'instabilité de l'exil." },
                        { cit: "Je ne suis plus en ces lieux qu'un simple objet de curiosité et d'amusement exotique.", loc: "Lettre 13", analyse: "Formulation passive marquant la souffrance de la réification subie par l'étrangère traitée comme un animal de foire." },
                        { cit: "Mes nœuds de couleur restent ma seule et unique consolation dans ma solitude.", loc: "Lettre 10", analyse: "Les quipos érigés en relique identitaire et en rempart linguistique contre l'assimilation forcée." },
                        { cit: "La peine que j'ai à plier mon esprit à ces lignes tracées sur du papier blanc.", loc: "Lettre 16", analyse: "Métaphore physique traduisant la violence culturelle de l'apprentissage forcé de l'écriture alphabétique." }
                    ]
                },
                {
                    theme: "4. La désillusion sentimentale et le refus du compromis",
                    items: [
                        { cit: "Tu es mon Dieu, mon univers, mon tout, je ne vis que par ta lumière.", loc: "Lettre 1 (à Aza)", analyse: "Accumulation hyperbolique et idolâtrie amoureuse initiale, caractérisant l'aliénation affective primitive." },
                        { cit: "La trahison d'Aza a brisé mon âme, mais elle n'a pas détruit ma raison.", loc: "Lettre 39", analyse: "Antithèse marquant le refus de sombrer dans le pathos tragique grâce au secours de l'esprit critique." },
                        { cit: "Venez apprendre de moi à connaître les plaisirs innocents, doux et durables de l'étude.", loc: "Lettre 41", analyse: "Inversion ironique des rôles : la captive prétendue sauvage devient le guide spirituel et philosophique du noble européen." },
                        { cit: "Mon cœur blessé ne saurait désormais se partager entre deux maîtres.", loc: "Lettre finale", analyse: "Métaphore politique du maître refusant le remariage de convenance avec Déterville pour préserver sa liberté." },
                        { cit: "Le Ciel a détruit mes illusions pour mieux me forcer à chercher la vérité.", loc: "Lettre 40", analyse: "Lecture providentialiste transformant le drame sentimental en un parcours d'éveil philosophique." }
                    ]
                }
            ],
            docs_complementaires: [
                { titre: "Lettres Persanes", source: "Montesquieu (1721)", citation: "Comment peut-on être Persan ?", analyse: "Le modèle intertextuel direct : l'utilisation du regard naïf de l'étranger (Usbek et Rica) pour exercer une satire des institutions françaises." },
                { titre: "Des Coches (Essais, III, 6)", source: "Michel de Montaigne (1588)", citation: "Notre monde vient d'en trouver un autre... non moins grand et plein de sève.", analyse: "La dénonciation humaniste précoce de la barbarie coloniale et de la destruction des civilisations amérindiennes par l'avarice européenne." },
                { titre: "Déclaration des droits de la femme et de la citoyenne", source: "Olympe de Gouges (1791)", citation: "La femme naît libre et demeure égale à l'homme en droits.", analyse: "La concrétisation politique et militante des revendications féministes sur l'éducation et l'égalité civique formulées par Zilia." },
                { titre: "Candide ou l'Optimisme (L'Eldorado)", source: "Voltaire (1759)", citation: "C’était le pays où tout allait bien.", analyse: "L'utilisation d'une utopie amérindienne imaginaire construite en miroir inversé pour critiquer les tares politiques et religieuses de l'Europe." },
                { titre: "La Princesse de Clèves", source: "Madame de Lafayette (1678)", citation: "Je veux que mon amour s'éteigne dans la retraite.", analyse: "Le dénouement identique : le refus radical du mariage final pour préserver l'intégrité de son âme et la paix du 'repos'." },
                { titre: "Supplément au voyage de Bougainville", source: "Denis Diderot (1772)", citation: "Pleurons, misérables Tahitiens, sur l'arrivée de ces hommes corrompus.", analyse: "Le mythe du 'bon sauvage' perverti par l'impérialisme civilisateur et la morale religieuse artificielle de l'Occident." },
                { titre: "De l'Inégalité parmi les hommes", source: "Jean-Jacques Rousseau (1755)", citation: "Le premier qui, ayant enclos un terrain, s'avisa de dire : Ceci est à moi...", analyse: "La critique philosophique de la propriété privée et de l'or, rejoignant la vision de Zilia sur la cupidité européenne." },
                { titre: "Lettres d'une jeune Péruvienne en France", source: "Anonyme (1748)", citation: "Réponse à Madame de Graffigny.", analyse: "Un exemple de la réception polémique de l'œuvre, témoignant du choc provoqué par le refus du mariage final." },
                { titre: "De l'Esprit des lois", source: "Montesquieu (1748)", citation: "Les lois doivent être relatives à la nature du pays.", analyse: "Le fondement du relativisme culturel des Lumières, sapant l'ethnocentrisme européen." },
                { titre: "Paul et Virginie", source: "Bernardin de Saint-Pierre (1788)", citation: "La nature préservée loin des vices des villes.", analyse: "L'idéalisation de l'exotisme insulaire comme sanctuaire moral opposé à la déchéance de la civilisation parisienne." }
            ],
            plans: [
                {
                    sujet: "Pensez-vous que le roman épistolaire permette avant tout d’exprimer une confession intime ou de proposer une critique de la société ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La forme épistolaire comme le lieu privilégié de l'épanchement lyrique et de la confession intime",
                            sous_parties: [
                                "A. La lettre comme miroir de l'intériorité et de la souffrance (L'expression de la solitude et du deuil de la séparation chez Zilia).",
                                "B. Le culte de la sincérité et de la transparence affective (L'usage des quipos puis de la plume pour sceller la fidélité absolue).",
                                "C. Le pacte de confidence secret unissant le scripteur à son destinataire unique (Aza divinisé, Déterville confident)."
                            ]
                        },
                        {
                            titre: "II. Un dispositif polyphonique redoutable mis au service d'une critique féroce de la société",
                            sous_parties: [
                                "A. Le stratagème du regard éloigné et naïf pour dévêtir les institutions européennes de leur prétendue naturalité.",
                                "B. Un pamphlet politique, social et anticolonialiste (Dénonciation de la cupidité, de l'esclavage et du theatrum mundi parisien).",
                                "C. Un réquisitoire féministe engagé (La déconstruction méthodique de l'oppression patriarcale et du manque d'éducation des femmes)."
                            ]
                        },
                        {
                            titre: "III. La synthèse des Lumières : la confession intime comme moteur et justification du combat idéologique",
                            sous_parties: [
                                "A. L'évolution de l'écriture : la lettre sentimentale devient progressivement un traité d'analyse philosophique.",
                                "B. Le refus du dénouement amoureux traditionnel comme acte politique suprême d'indépendance individuelle.",
                                "C. L'avènement d'un genre hybride où le romanesque intime sert d'arme de vulgarisation pour le progrès des idées."
                            ]
                        }
                    ]
                },
                {
                    sujet: "En quoi l’écriture épistolaire de Graffigny permet-elle d’écrire et de combattre pour l’égalité ?",
                    type: "Thématique",
                    parties: [
                        {
                            titre: "I. L'appropriation de l'écriture comme un acte politique d'émancipation et d'égalisation",
                            sous_parties: [
                                "A. Passer de la réification de la captive muette au statut de sujet pensant et écrivant (Le passage symbolique du quipo à la plume).",
                                "B. Briser le monopole masculin de la parole publique et philosophique au Siècle des Lumières.",
                                "C. La structure de la lettre comme espace de liberté de ton souverain, affranchi de la censure et des autorités."
                            ]
                        },
                        {
                            titre: "II. Un combat argumenté contre toutes les formes d'inégalités et de dominations",
                            sous_parties: [
                                "A. La dénonciation féroce de l'inégalité de genre (Le réquisitoire de la Lettre 34 sur la claustration des femmes).",
                                "B. La critique de l'inégalité culturelle et de l'ethnocentrisme (Rallier la prétendue sauvagerie inca à la saine raison).",
                                "C. Le procès de l'impérialisme colonial et de la cupidité économique (La destruction barbare des civilisations)."
                            ]
                        },
                        {
                            titre: "III. La proposition d'un contre-modèle utopique basé sur l'autonomie et la raison",
                            sous_parties: [
                                "A. L'éducation intellectuelle par les livres érigée en unique voie d'accès à l'égalité réelle.",
                                "B. Le choix du célibat et de la solitude à la campagne comme refus d'entrer dans le système de domination du mariage.",
                                "C. La substitution des rapports de force amoureux par l'idéal égalitaire et pacifique de l'amitié philosophique."
                            ]
                        }
                    ]
                },
                {
                    sujet: "D’après votre lecture des Lettres d’une péruvienne, le voyage représente-t-il une émancipation ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Le voyage conçu comme un itinéraire d'affranchissement et d'éveil philosophique",
                            sous_parties: [
                                "A. Passage de l'ombre à la lumière : la sortie de la claustration du temple de Cuzco[cite: 2] et la découverte d'un univers étendu et infini (Lettre 12)[cite: 2]. L'émerveillement et l'éloge de la liberté d'un paysage personnifié qui détient la vie[cite: 2].",
                                "B. Émancipation idéologique et liberté de ton : le regard critique et personnel de l'étrangère qui utilise l'analogie pour juger les Européens superficiels (le theatrum mundi)[cite: 2], remettre en question l'ethnocentrisme et dénoncer la cupidité financière[cite: 2].",
                                "C. Émancipation individuelle et romanesque : un véritable parcours initiatique où Zilia prend pleine conscience d'elle-même (l'épisode du miroir de la Lettre 10)[cite: 2], s'affranchit de sa dépendance amoureuse et choisit l'indépendance finale dans son utopie de campagne[cite: 2]."
                            ]
                        },
                        {
                            titre: "II. Mais un déplacement initialement marqué par la contrainte, la violence et de nouvelles servitudes",
                            sous_parties: [
                                "A. Les nouveaux lieux de claustration : Zilia subit un voyage sous le signe de la force, passant du temple inca à la chambre de Déterville[cite: 2], à la 'maison flottante' du navire[cite: 2], puis à l'isolement du couvent[cite: 2]. Elle apparaît comme un être réifié et souffrant[cite: 2].",
                                "B. La dépendance affective renouvelée : la rencontre avec Déterville constitue une nouvelle forme de soumission[cite: 2]. L'auteure déploie la rhétorique précieuse de la passion amoureuse où Déterville, tel un homme-lige courtois, devient esclave de Zilia[cite: 2].",
                                "C. L'obstacle des préjugés originels : les premières découvertes s'accompagnent d'erreurs d'interprétation (Lettres 4 et 5), montrant que l'esprit reste initialement dépendant de ses mœurs natales[cite: 2]."
                            ]
                        },
                        {
                            titre: "III. Le véritable voyage est intellectuel : l'émancipation par l'éducation et la maîtrise des signes",
                            sous_parties: [
                                "A. L'acquisition de la langue comme voie d'accès à la liberté réelle : dépasser l'incompréhension primitive pour repérer le langage du corps[cite: 2], nommer les objets (Lettre 11)[cite: 2] et accéder à la pleine connaissance de l'écriture (Lettre 16)[cite: 2].",
                                "B. La conquête du pouvoir des livres : le voyage géographique se transmue en une soif de connaissances scientifiques et culturelles (réflexion sur la catharsis de la tragédie, sur l'opéra et sur les inventions modernes)[cite: 2].",
                                "C. L'aboutissement des Lumières : l'émancipation définitive ne provient pas du simple déplacement géographique, mais de la formation d'une pensée autonome, d'un amour raisonné et d'une réflexion critique sur la condition féminine[cite: 2]."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "laboetie_servitude",
            titre: "Discours de la servitude volontaire",
            auteur: "Étienne de La Boétie",
            parcours: {
                nom: "Défendre et entretenir la liberté",
                explication: "Ce parcours examine les fondements de la liberté face aux dérives du pouvoir arbitraire et de la tyrannie. Il s'agit d'analyser la dimension paradoxale de la servitude, conçue non comme une contrainte purement extérieure, mais comme une abdication volontaire du peuple. Le parcours invite à penser les moyens de réveiller la conscience civique, de préserver l'état de nature égalitaire et d'ériger l'éducation, la raison et l'amitié en remparts indestructibles pour entretenir la liberté."
            },
            biographie: "Étienne de La Boétie (1530-1563) naît à Sarlat dans une famille de magistrats. Reçu conseiller au Parlement de Bordeaux après de brillantes études de droit, il s'y lie d'une amitié fusionnelle et immortelle avec Michel de Montaigne. Rédigé de manière fulgurante durant sa jeunesse (vers 18 ans), son *Discours de la servitude volontaire* (surnommé *Le Contr'un*) constitue un chef-d'œuvre de philosophie politique, jetant les bases du concept moderne de désobéissance civile avant d'être emporté prématurément par la maladie.",
            resume_complet: `Le <em>Discours de la servitude volontaire</em> est un pamphlet philosophique d'une audace conceptuelle inouïe. La Boétie y pose une question centrale qui renverse toutes les théories politiques traditionnelles : comment se fait-il que des millions d'hommes, des villes entières, se soumettent docilement et lâchement à la tyrannie d'un seul homme, souvent chétif et lâche ? 
            <br><br>L'auteur démontre implacablement que le pouvoir d'un despote ne repose pas sur sa force militaire supérieure, mais uniquement sur le consentement et l'obéissance volontaire de ceux qu'il opprime. C'est le peuple qui s'asservit lui-même, qui se coupe la gorge en abdiquant sa liberté naturelle. La Boétie affirme que la liberté et l'égalité sont des données inscrites dans l'état de Nature par la raison divine. 
            <br><br>Pour expliquer la pérennité de cette aliénation monstrueuse, il identifie trois ressorts majeurs. Le premier est la force de l'habitude et de la coutume : les hommes nés sous le joug n'ayant jamais connu la liberté, prennent leur esclavage pour un état naturel. Le deuxième est l'abêtissement du peuple orchestré par le tyran à travers les divertissements de masse (les théâtres, les farces, les jeux, le pain). Le troisième est la structure pyramidale de la corruption : le tyran s'entoure de cinq ou six complices qui en dominent six cents, qui en dominent six mille, liant la multitude par l'appât du gain. La solution proposée par La Boétie est d'une simplicité révolutionnaire et non violente : pour faire tomber le colosse, il ne faut pas l'attaquer par les armes, il suffit d'arrêter de le soutenir.`,
            citations: [
                {
                    theme: "1. Le paradoxe de la servitude volontaire",
                    items: [
                        { cit: "C'est le peuple qui s'asservit, qui se coupe la gorge et se livre au bourreau.", loc: "Partie 1", analyse: "Formule provocatrice et oxymorique situant la source de la tyrannie dans la passivité du sujet." },
                        { cit: "Ils ne sont grands que parce que nous sommes à genoux devant eux.", loc: "Partie 1", analyse: "Métaphore spatiale illustrant la relativité intrinsèque du pouvoir, dépendant de la posture du dominé." },
                        { cit: "Il est incroyable de voir comme le peuple, dès qu'il est assujetti, tombe soudain dans un si profond oubli de sa franchise.", loc: "Partie 2", analyse: "Constat clinique de l'amnésie collective des peuples qui perdent leur dignité en abdiquant." },
                        { cit: "Comment tant d'hommes souffrent-ils un tyran seul, qui n'a de puissance que celle qu'ils lui donnent ?", loc: "Partie 1", analyse: "Question rhétorique fondatrice ouvrant l'œuvre sur l'énigme du consentement politique." },
                        { cit: "Vous vous affaiblissez de vos mains afin qu'il soit plus fort et plus dur au joug.", loc: "Partie 1", analyse: "Structure antithétique démontrant le mécanisme de transfert d'énergie vitale vers le despote." }
                    ]
                },
                {
                    theme: "2. Les ruses et instruments de l'oppression",
                    items: [
                        { cit: "Les théâtres, les jeux, les farces... étaient pour les peuples anciens les appâts de la servitude.", loc: "Partie 3", analyse: "Dénonciation philosophique du divertissement de masse comme outil d'anesthésie critique." },
                        { cit: "Le secret de la domination, le soutien de la tyrannie... c'est qu'il y a toujours quatre ou fieux hommes qui la maintiennent.", loc: "Partie 3", analyse: "Théorie de la chaîne oligarchique décrivant la structure pyramidale de la complicité." },
                        { cit: "Les tyrans se plaisent à se faire obéir en utilisant le voile de la religion et de la superstition.", loc: "Partie 3", analyse: "Critique de la mystification théocratique utilisée pour sacraliser un pouvoir pourtant illégitime." },
                        { cit: "Les tyrans faisaient largesse d'un boisseau de blé... et c'était pitié d'entendre crier : Vive le Roi !", loc: "Partie 3", analyse: "Ironie cinglante sur la docilité d'un peuple qui remercie le maître pour lui rendre une miette de son propre bien." },
                        { cit: "Ils emploient la ruse de la parole avant d'avoir recours à la force des armes.", loc: "Partie 3", analyse: "Lucidité philosophique plaçant la manipulation linguistique au-dessus de la contrainte militaire." }
                    ]
                },
                {
                    theme: "3. La coutume contre la liberté naturelle",
                    items: [
                        { cit: "La première et principale raison de la servitude volontaire, c'est l'habitude de la coutume.", loc: "Partie 2", analyse: "Analyse sociologique démontrant comment le conditionnement éducatif efface l'instinct de liberté." },
                        { cit: "La nature, ministre de Dieu... nous a tous faits de même forme et égaux en droits.", loc: "Partie 2", analyse: "Fondement jusnaturaliste et humaniste de l'égalité originelle, opposée à l'arbitraire monarchique." },
                        { cit: "On ne regrette jamais ce qu'on n'a jamais eu la chance de posséder.", loc: "Partie 2", analyse: "Maxime psychologique explicitant l'inaction des générations nées sous la domination." },
                        { cit: "La liberté est entièrement perdue dès lors que l'homme cesse de la désirer.", loc: "Partie 1", analyse: "Formulation situant l'émancipation non comme une donnée extérieure, mais comme une volonté interne." },
                        { cit: "Les semences de raison que la nature dépose en notre âme s'étouffent par la mauvaise éducation.", loc: "Partie 2", analyse: "Métaphore végétale soulignant le rôle destructeur du conditionnement culturel sur la rationalité." }
                    ]
                },
                {
                    theme: "4. Le refus de servir et la fraternité",
                    items: [
                        { cit: "Soyez résolus de ne servir plus, et vous voilà libres à l'instant même.", loc: "Partie 1", analyse: "Injonction impérative fondant le concept de désobéissance civile pacifique et non violente." },
                        { cit: "Je ne veux pas que vous le poussiez ni l'ébranliez, mais seulement ne le soutenez plus.", loc: "Partie 1", analyse: "Économie de moyens rhétorique : la chute du despote est présentée comme le fruit d'une simple inertie." },
                        { cit: "Entre les méchants, il n'y a pas d'amitié, il n'y a que de la crainte et des complots.", loc: "Partie 3", analyse: "Antithèse philosophique opposant la pureté de la fraternité humaine à la terreur des cercles de pouvoir." },
                        { cit: "Le tyran n'est jamais aimé du peuple, et il n'aime lui-même personne.", loc: "Partie 3", analyse: "Condamnation psychologique du despote, condamné par son vice à la solitude absolue." },
                        { cit: "Apprenons donc quelque fois à bien faire, élevons nos regards vers le Ciel.", loc: "Conclusion", analyse: "Appel humaniste oratoire exhortant à l'élévation intellectuelle pour fuir l'infamie de la soumission." }
                    ]
                }
            ],
            docs_complementaires: [
                { titre: "Les Essais (De l'amitié, I, 28)", source: "Michel de Montaigne (1580)", citation: "Parce que c'était lui, parce que c'était moi.", analyse: "La célébration de l'amitié fusionnelle, égalitaire et libre, antithèse absolue des relations verticales de pouvoir décrites par La Boétie." },
                { titre: "Le Prince", source: "Nicolas Machiavel (1532)", citation: "Il est beaucoup plus sûr d'être craint que d'être aimé.", analyse: "Le traité de stratégie politique réaliste auquel La Boétie répond en déconstruisant la légitimité psychologique du despote." },
                { titre: "Du Contrat Social", source: "Jean-Jacques Rousseau (1762)", citation: "L'homme est né libre, et partout il est dans les fers.", analyse: "L'héritage direct des Lumières transformant le cri humaniste de La Boétie en un système de droit démocratique moderne." },
                { titre: "Rhinocéros", source: "Eugène Ionesco (1959)", citation: "Je ne capitule pas !", analyse: "La mise en scène de la servitude volontaire contemporaine (le conformisme totalitaire) face à un individu qui refuse de suivre la masse." },
                { titre: "1984", source: "George Orwell (1949)", citation: "La liberté, c'est l'esclavage.", analyse: "La matérialisation dystopique de l'aliénation : la manipulation du langage par l'État pour détruire l'instinct même de révolte." },
                { titre: "La Désobéissance civile", source: "Henry David Thoreau (1849)", citation: "Je ne suis pas né pour être forcé par une majorité.", analyse: "Le prolongement philosophique de l'inertie politique : théoriser le refus individuel de collaborer avec un État injuste." },
                { titre: "Les Châtiments", source: "Victor Hugo (1853)", citation: "Napoléon le Petit...", analyse: "La poésie satirique s'en prenant directement à l'empereur usurpateur, faisant écho au concept du 'Contr'un'." },
                { titre: "Antigone", source: "Sophocle (441 av. J.-C.)", citation: "Je ne suis pas née pour partager la haine, mais l'amour.", analyse: "La figure mythologique de la résistance spirituelle affirmant les lois de la nature contre les décrets injustes du tyran Créon." },
                { titre: "L'Ancien Régime et la Révolution", source: "Alexis de Tocqueville (1856)", citation: "Les peuples aiment la liberté pour elle-même.", analyse: "L'analyse sociologique de la démocratie confirmant que l'habitude de la dépendance est le plus grand péril pour les nations." },
                { titre: "Plaidoyer pour la liberté", source: "Voltaire (1763)", citation: "Écrasez l'infâme intolérance.", analyse: "Le combat des Lumières contre le fanatisme religieux, prolongeant la dénonciation des superstitions de La Boétie." }
            ],
            plans: [
                {
                    sujet: "La liberté est-elle un don de la nature ou une conquête des hommes ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La liberté comme un don inaliénable de la nature et une condition originelle",
                            sous_parties: [
                                "A. Le fondement jusnaturaliste : la Nature et la raison divine ont créé tous les hommes égaux et libres.",
                                "B. L'instinct de liberté visible chez les bêtes sauvages qui refusent la captivité.",
                                "C. La liberté comme propriété essentielle de l'âme humaine, impossible à ôter sans dégrader l'homme."
                            ]
                        },
                        {
                            titre: "II. L'aliénation par l'histoire : la perte de l'état naturel sous le poids de la coutume",
                            sous_parties: [
                                "A. L'accident historique de la tyrannie qui brise la cohésion égalitaire primitive.",
                                "B. La force de l'habitude ('la coutume') qui transmet la servitude de génération en génération.",
                                "C. L'amnésie collective : les hommes nés dans les fers oublient le désir même de franchise."
                            ]
                        },
                        {
                            titre: "III. La liberté comme une conquête intellectuelle et morale permanente",
                            sous_parties: [
                                "A. L'éveil de la conscience critique par l'éducation humaniste pour briser le conditionnement.",
                                "B. L'acte de reconquête non violent : le refus politique de consentir ('Soyez résolus de ne servir plus').",
                                "C. Entretenir la liberté par l'exercice de la raison et le ciment de la fraternité (l'Amitié philosophique)."
                            ]
                        }
                    ]
                },
                {
                    sujet: "« Soyez résolus de ne plus servir, et vous voilà libres. » (La Boétie) — Suffit-il de cesser d’obéir pour recouvrer la liberté ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La puissance révolutionnaire et immédiate du simple retrait du consentement",
                            sous_parties: [
                                "A. La tyrannie démontrée comme une structure fragile qui repose entièrement sur l'obéissance du peuple.",
                                "B. L'économie de moyens de la désobéissance civile : l'inertie pacifique suffit à faire s'effondrer le colosse.",
                                "C. Le renversement psychologique : la reconquête de la souveraineté intérieure précède la libération physique."
                            ]
                        },
                        {
                            titre: "II. Les verrous complexes de la servitude volontaire rendant le sevrage difficile",
                            sous_parties: [
                                "A. Le piège de l'aliénation culturelle et des divertissements ('les appâts de la servitude') émoussant la volonté.",
                                "B. La pyramide de la corruption économique : la complicité par l'intérêt enchaîne des pans entiers de la société.",
                                "C. La peur du vide et de l'instabilité face à un pouvoir protecteur, même tyrannique."
                            ]
                        },
                        {
                            titre: "III. Recouvrer la liberté exige un effort continu d'éducation et d'organisation collective",
                            sous_parties: [
                                "A. Cesser d'obéir n'est qu'un prélude : nécessité de réapprendre la 'langue de la raison' par l'instruction.",
                                "B. Organiser la cité de manière égalitaire pour empêcher le retour d'un nouveau maître (le Contrat social).",
                                "C. 'Entretenir' la liberté au quotidien par le courage civique et le devoir de solidarité fraternelle."
                            ]
                        }
                    ]
                },
                {
                    sujet: "La Boétie affirme que « les hommes se laissent asservir alors qu’ils pourraient vivre libres ». Penses-tu que la liberté soit un combat permanent ou un état naturel que l’homme risque toujours de perdre ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. La liberté comme état naturel et propriété primitive de l'humanité",
                            sous_parties: [
                                "A. La thèse jusnaturaliste : l'égalité et la franchise offertes à tous par la ministre de Dieu (la Nature).",
                                "B. L'absence innée de toute hiérarchie politique ou de soumission biologique chez l'être humain.",
                                "C. La clarté de la raison originelle qui pousse chaque créature à défendre son intégrité."
                            ]
                        },
                        {
                            titre: "II. Un état fragile perpétuellement menacé de corruption et d'oubli",
                            sous_parties: [
                                "A. La ruse des tyrans qui exploitent la crédulité, les superstitions et le besoin de divertissement.",
                                "B. L'engourdissement moral provoqué par le confort matériel et les chaînes d'intérêts de la corruption.",
                                "C. La coutume qui naturalise l'esclavage en quelques générations, effaçant la mémoire de la franchise."
                            ]
                        },
                        {
                            titre: "III. La liberté comme une ascèse intellectuelle et un combat civique permanent",
                            sous_parties: [
                                "A. Dépasser la passivité naturelle par un effort constant de vigilance et d'esprit critique (les 'gens bien nés').",
                                "B. Le combat non violent du refus d'obéissance, exigeant une force morale renouvelée à chaque instant.",
                                "C. L'amitié philosophique et la solidarité républicaine comme uniques remparts pour entretenir durablement la liberté."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "fontenelle_mondes",
            titre: "Entretiens sur la pluralité des mondes",
            auteur: "Bernard de Fontenelle",
            parcours: {
                nom: "Le goût de la science",
                explication: "Ce parcours étudie la vulgarisation des savoirs et l'émergence de l'esprit philosophique à travers le plaisir de la lecture. Il s'agit d'analyser comment l'alliance de la rigueur scientifique (le cartésianisme, l'héliocentrisme) et des charmes de la littérature (la galanterie, l'imagination) permet de libérer l'esprit humain des dogmes. Le 'goût de la science' s'affirme comme une célébration de la curiosité, transformant l'austère étude du cosmos en une source d'émerveillement et d'émancipation intellectuelle ouverte à tous."
            },
            biographie: "Bernard Le Bouyer de Fontenelle (1657-1757), neveu de Pierre Corneille, est un écrivain, scientifique et philosophe français majeur, secrétaire perpétuel de l'Académie des sciences pendant plus de quarante ans. Esprit brillant, mondain et d'une longévité légendaire (centenaire), il fait le pont entre le Classicisme du XVIIe siècle et les Lumières du XVIIIe siècle. Il s'illustre par son combat contre les superstitions (<em>Histoire des oracles</em>) et reste le père fondateur de la vulgarisation scientifique moderne en langue française.",
            resume_complet: `Les <em>Entretiens sur la pluralité des mondes</em>, publiés en 1686, constituent un chef-d'œuvre de pédagogie philosophique et galante structuré en six soirées. Le narrateur, un philosophe mondain, s'entretient durant des nuits d'été dans le parc d'un château avec une femme de l'aristocratie, la Marquise de G..., dotée d'une vive intelligence mais ignorante des théories astronomiques universitaires. 
            <br><br>Au cours de la première soirée, le philosophe opère une révolution cosmologique en expliquant le système héliocentrique de Copernic : la Terre n'est plus le centre immobile du monde, elle tourne sur elle-même et autour du Soleil. Pour rendre cette vérité géométrique acceptable et déjouer les peurs, il compare l'univers à la mécanique des machines d'opéra, dont les poulies cachées créent l'illusion du décor. Durant les soirées suivantes, il développe l'hypothèse audacieuse et poétique de la pluralité des mondes : si la Terre est une planète banale, la Lune et les autres planètes (Vénus, Mercure, Saturne) sont probablement habitées par des créatures adaptées à leur climat. 
            <br><br>Au cinquième soir, l'horizon s'élargit de manière vertigineuse : chaque étoile fixe est révélée comme un autre soleil, entouré de ses propres planètes, ouvrant sur l'infini cosmique. Le recueil s'achève sur le triomphe de la méthode hypothético-déductive de Descartes. La Marquise, pleinement émancipée intellectuellement, maîtrise le raisonnement scientifique, prouvant que le savoir n'est pas une chasse gardée de clercs, mais un plaisir de la raison critique accessible aux femmes et garant de progrès contre l'obscurantisme.`,
            citations: [
                {
                    theme: "1. La vulgarisation, la clarté et le goût du savoir",
                    items: [
                        { cit: "J'ai voulu traiter la philosophie d'une manière qui ne fût point du tout philosophique.", loc: "Préface", analyse: "Déclaration d'intention esthétique : rejeter le jargon lourd des universités pour séduire le lecteur." },
                        { cit: "Je ne vous demande pour lire ce livre que la même attention qu'il faut donner à La Princesse de Clèves.", loc: "Préface", analyse: "Rapprochement audacieux et démocratique élevant l'étude scientifique au rang de plaisir de la conversation romanesque." },
                        { cit: "La Nature est un grand spectacle de théâtre dont les poulies sont cachées aux yeux du public.", loc: "Premier Soir", analyse: "Métaphore baroque de la machine d'opéra expliquant les lois de la physique derrière l'illusion des sens." },
                        { cit: "Vous m'avez fait un plaisir extrême en m'apprenant cette belle horlogerie du monde.", loc: "Troisième Soir (La Marquise)", analyse: "Lexique de la jouissance intellectuelle liant l'acquisition de la connaissance au sentiment esthétique du 'goût'." },
                        { cit: "L'ignorance est le seul et unique mal à craindre sur la terre, elle engendre toutes nos peurs.", loc: "Cinquième Soir", analyse: "Maxime des Lumières posant le savoir comme le seul remède efficace contre la tyrannie des superstitions." }
                    ]
                },
                {
                    theme: "2. La chute de l'anthropocentrisme et la révolution de Copernic",
                    items: [
                        { cit: "La Terre n'est plus le centre immobile de l'univers, elle roule dans l'azur.", loc: "Premier Soir", analyse: "Affirmation tranquille du scandale cosmologique copernicien sapant le dogme biblique traditionnel." },
                        { cit: "Notre vanité ridicule veut absolument que tout le ciel soit fait pour nos seuls yeux.", loc: "Deuxième Soir", analyse: "Critique psychologique de l'orgueil humain, réduit par l'astronomie à une dimension dérisoire." },
                        { cit: "Nous sommes sur une planète qui tourne, et nous ne nous en apercevons pas.", loc: "Premier Soir", analyse: "Le doute cartésien : démonstration que la sensation immédiate est une illusion contredite par la raison." },
                        { cit: "Nous ne sommes plus qu'un petit point insignifiant perdu dans l'immensité de la galaxie.", loc: "Cinquième Soir", analyse: "Formulation pascalienne du vertige géométrique mesurant la petitesse de l'homme face à l'infini." },
                        { cit: "Le Soleil est fixe au centre... et tout l'univers rentre enfin dans un ordre magnifique.", loc: "Premier Soir", analyse: "Célébration esthétique de la simplicité physique remplaçant les systèmes complexes de l'astronomie antique." }
                    ]
                },
                {
                    theme: "3. L'imagination poétique et la pluralité des mondes",
                    items: [
                        { cit: "Je veux bien que la lune soit une terre habitée par des êtres vivants.", loc: "Deuxième Soir (La Marquise)", analyse: "Adhésion de la lectrice par le biais de la fiction spéculative, acte de naissance de la science-fiction." },
                        { cit: "Chaque étoile fixe est un soleil brillant qui éclaire d'autres mondes infinis.", loc: "Cinquième Soir", analyse: "Formulation détruisant l'idée d'une Création unique et anthropocentrique." },
                        { cit: "Mon imagination est littéralement accablée de cette multitude infinie d'univers.", loc: "Cinquième Soir (La Marquise)", analyse: "Expression esthétique du 'sublime' : la terreur exquise face à l'immensité mathématique du cosmos." },
                        { cit: "Je me figure désormais le ciel immense comme une grande et magnifique ville.", loc: "Quatrième Soir", analyse: "Métaphore urbaine familière utilisée pour apprivoiser l'inconnu hostile de l'espace infini." },
                        { cit: "Il y a partout des créatures invisibles qui célèbrent la gloire de la matière.", loc: "Troisième Soir", analyse: "Principe philosophique de l'uniformité des lois de la nature étendu à tout l'univers." }
                    ]
                },
                {
                    theme: "4. La galanterie mondaine et l'émancipation féminine",
                    items: [
                        { cit: "Vous êtes si aimable que je vous croirais même si vous me disiez des mensonges.", loc: "Premier Soir (La Marquise)", analyse: "Utilisation du code de la galanterie courtoise pour désarmer la censure et faire passer une vérité choquante." },
                        { cit: "Je veux absolument que les femmes puissent lire ce traité et en disputer dans les salons.", loc: "Préface", analyse: "Manifeste féministe pionnier brisant le monopole masculin et clérical sur les sciences exactes." },
                        { cit: "La philosophie est devenue galante, elle se promène la nuit dans les jardins.", loc: "Thème central", analyse: "Allégorie de la science désacralisée, sortie du cadre universitaire pour devenir un art de vivre." },
                        { cit: "J'ai enfin ma part légitime de ce grand tourbillon de la raison céleste.", loc: "Sixième Soir (La Marquise)", analyse: "Aboutissement du parcours : la femme s'approprie le concept cartésien et accède à l'autorité du savoir." },
                        { cit: "Parlez-moi comme à une ignorante, mais parlez-moi avec la clarté de la lumière.", loc: "Premier Soir (La Marquise)", analyse: "Exigence démocratique de clarté linguistique opposée à l'obscurité volontaire des pédants." }
                    ]
                }
            ],
            docs_complementaires: [
                { titre: "Micromégas", source: "Voltaire (1752)", citation: "O atomes intelligents...", analyse: "L'héritage direct du voyage interstellaire philosophique utilisant l'infiniment grand pour ridiculiser l'orgueil humain." },
                { titre: "Pensées", source: "Blaise Pascal (1670)", citation: "Le silence éternel de ces espaces infinis m'effraie.", analyse: "L'antithèse absolue de Fontenelle : l'infini cosmique engendre l'angoisse théologique de la misère humaine plutôt que la joie." },
                { titre: "Discours de la méthode", source: "René Descartes (1637)", citation: "Je pense, donc je suis.", analyse: "Le fondement philosophique de l'œuvre : la victoire de l'esprit critique rationnel sur les sens trompeurs." },
                { titre: "De la Terre à la Lune", source: "Jules Verne (1865)", citation: "Rien n'est impossible à la science.", analyse: "La concrétisation de la fiction spéculative de Fontenelle, propulsée par la révolution industrielle du XIXe siècle." },
                { titre: "L'Encyclopédie", source: "Denis Diderot (1751)", citation: "Rassembler les connaissances éparses sur la terre.", analyse: "Le triomphe politique de l'entreprise de vulgarisation et de diffusion universelle du savoir initiée par Fontenelle." },
                { titre: "Le Misanthrope", source: "Molière (1666)", citation: "Je veux qu'on soit homme, et qu'en chaque rencontre...", analyse: "Le cadre de la conversation galante des salons classiques (Célimène) que Fontenelle utilise pour subvertir l'astronomie." },
                { titre: "Somnium (Le Songe)", source: "Johannes Kepler (1634)", citation: "Un voyage lunaire fictionnel.", analyse: "Le tout premier texte de science-fiction écrit par un astronome pour vulgariser clandestinement le système de Copernic." },
                { titre: "L'Astronomie populaire", source: "Camille Flammarion (1880)", citation: "La science pour tous.", analyse: "Le prolongement direct du projet de Fontenelle au XIXe siècle, démocratisant l'observation de la voûte céleste." },
                { titre: "Histoire des Oracles", source: "Bernard de Fontenelle (1686)", citation: "Assurons-nous bien du fait avant d'en chercher la cause.", analyse: "L'œuvre sœur posant la méthode expérimentale critique comme une arme contre les miracles et les superstitions de l'Église." },
                { titre: "Les Femmes savantes", source: "Molière (1672)", citation: "Je vois de ma lunette des hommes sur la lune.", analyse: "La satire comique de la pédanterie féminine, que Fontenelle prend à contre-pied en anoblissant la curiosité de la Marquise." }
            ],
            plans: [
                {
                    sujet: "Pensez-vous que la science doive toujours être vulgarisée de façon agréable pour éveiller la curiosité du lecteur, ou bien peut-elle se passer de tout souci de séduction ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. L'utilité fondamentale et démocratique de la séduction littéraire pour diffuser les savoirs",
                            sous_parties: [
                                "A. Rompre avec l'obscurité et le jargon rébarbatif des universités pour ouvrir la science à un public profane.",
                                "B. L'usage du badinage mondain et de la galanterie comme chevaux de Troie pour désarmer la censure et les préjugés.",
                                "C. L'esthétique du plaisir et de la fiction spéculative (la pluralité des mondes) éveillant l'imagination poétique."
                            ]
                        },
                        {
                            titre: "II. Les limites et les dérives potentielles d'une séduction excessive du discours scientifique",
                            sous_parties: [
                                "A. Le risque de la simplification outrancière et de la déformation des vérités géométriques rigoureuses.",
                                "B. Transformer la recherche scientifique en un pur divertissement de salon superficiel et stérile.",
                                "C. La confusion des genres : quand le romanesque ou le merveilleux supplantent la preuve mathématique expérimentale."
                            ]
                        },
                        {
                            titre: "III. La synthèse des Lumières : la séduction esthétique comme vecteur de l'émancipation philosophique",
                            sous_parties: [
                                "A. Plaire pour mieux instruire (l'idéal classique conciliant hédonisme littéraire et vérité physique).",
                                "B. L'émerveillement rationnel : la découverte de l'horlogerie cosmique devenant elle-même une source de joie pure.",
                                "C. Rendre l'esprit autonome : le dialogue agréable n'est qu'une étape pour armer le lecteur d'une méthode critique."
                            ]
                        }
                    ]
                },
                {
                    sujet: "Dans Entretiens sur la pluralité des mondes, Fontenelle affirme vouloir « mettre la philosophie à la portée des dames ». La science doit-elle être réservée aux spécialistes ou doit-elle être partagée avec tous, même au risque de simplifier les connaissances ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. Un plaidoyer féministe et démocratique pour le partage universel du savoir",
                            sous_parties: [
                                "A. Briser le monopole clérical et masculin sur les sciences exactes (l'accès légitime des femmes à la Raison).",
                                "B. La science comme outil d'émancipation collective contre l'obscurantisme et les peurs superstitieuses.",
                                "C. L'anoblissement de l'esprit mondain, capable de s'approprier les concepts cartésiens complexes."
                            ]
                        },
                        {
                            titre: "II. Les dangers méthodologiques de la vulgarisation face à l'exigence de la spécialisation",
                            sous_parties: [
                                "A. La nécessité d'un langage technique hermétique pour valider les découvertes entre pairs spécialistes.",
                                "B. La vulgarisation qui trahit la rigueur mathématique (réduire le cosmos à une simple machine d'opéra).",
                                "C. Le mépris potentiel du savant qui, en simplifiant à l'extrême, infantilise son nouveau public."
                            ]
                        },
                        {
                            titre: "III. La redéfinition humaniste de la science : un bien commun universel formalisé par l'esprit critique",
                            sous_parties: [
                                "A. Simplifier n'est pas falsifier : l'analogie et la métaphore comme outils de traduction de la vérité physique.",
                                "B. Le parcours de la Marquise : prouver que le partage mène à l'assimilation de la véritable démarche scientifique.",
                                "C. La grandeur de l'humanité résidant dans sa capacité collective à comprendre rationnellement la place qu'elle occupe dans l'univers."
                            ]
                        }
                    ]
                },
                {
                    sujet: "La science doit-elle avant tout chercher à convaincre par la démonstration rationnelle, ou peut-elle aussi séduire par l’imagination et l’émerveillement ?",
                    type: "Dialectique",
                    parties: [
                        {
                            titre: "I. L'exigence impérative de la démonstration rationnelle comme fondement de la vérité scientifique",
                            sous_parties: [
                                "A. La méthode hypothético-déductive cartésienne contre les illusions trompeuses des sens.",
                                "B. L'appui rigoureux sur les mathématiques et la géométrie pour prouver l'héliocentrisme (Copernic).",
                                "C. L'élimination nécessaire du merveilleux religieux et des mythes irrationnels pour civiliser l'esprit."
                            ]
                        },
                        {
                            titre: "II. Les pouvoirs magiques de l'imagination comme moteurs indispensables de la curiosité",
                            sous_parties: [
                                "A. L'hypothèse spéculative poétique (la vie extraterrestre) pour stimuler le désir de chercher du nouveau.",
                                "B. L'émerveillement esthétique devant la grandeur et la régularité géométrique du spectacle de la voûte céleste.",
                                "C. La séduction littéraire (les métaphores urbaines ou maritimes) pour apprivoiser l'angoisse du vide spatial infini."
                            ]
                        },
                        {
                            titre: "III. La convergence philosophique des Lumières : la raison émerveillée",
                            sous_parties: [
                                "A. La découverte des lois physiques (l'horlogerie du cosmos) comme source suprême de joie esthétique.",
                                "B. L'imagination soumise au contrôle de la méthode expérimentale : la science-fiction au service du vrai.",
                                "C. Concilier la rigueur de la preuve et la splendeur du récit pour offrir à l'homme un parcours complet d'accomplissement."
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
