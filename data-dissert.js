// data-dissert.js - Base de données exhaustive des 12 Œuvres du Bac de Français

const BDD = {
    dissertations: {
        poesie: [
            {
                id: "rimbaud_douai", 
                titre: "Cahier de Douai", 
                auteur: "Arthur Rimbaud", 
                parcours: "Émancipations créatrices", 
                mouvementId: "symbolisme", 
                mouvementNom: "Le Symbolisme",
                resume_mouvement: "À la charnière du Parnasse et du Symbolisme. Rimbaud pulvérise le lyrisme romantique larmoyant. Il initie l'émancipation formelle de la poésie en violentant l'alexandrin et en assumant la laideur du monde moderne pour devenir le poète 'Voyant'.",
                presentation_auteur: "Arthur Rimbaud (1854-1891) écrit toute son œuvre entre 15 et 20 ans. Fugueur de Charleville, il rejette l'autorité, la religion et la bourgeoisie. Il incarne le poète anarchiste aux 'semelles de vent' avant de fuir en Afrique.",
                resume_complet: [
                    {partie: "Poèmes 1 à 5 : L'éveil des sens (Poème par poème)", texte: "Dans 'Première Soirée', 'Sensation' ou 'Les Réparties de Nina', le jeune poète exprime ses premiers désirs charnels. La nature devient une amante de substitution avec laquelle il fusionne lors de ses longues marches solitaires."},
                    {partie: "Poèmes 6 à 10 : La satire féroce (Poème par poème)", texte: "Rimbaud attaque les piliers de sa province. 'À la musique' dresse le portrait grotesque des bourgeois étriqués de Charleville. 'Le Châtiment de Tartufe' dénonce l'hypocrisie de la religion face aux plaisirs simples de la vie."},
                    {partie: "Poèmes 11 à 15 : La mythologie détruite (Poème par poème)", texte: "Dans 'Vénus Anadyomène', Rimbaud détruit l'idéal de beauté antique en décrivant une femme hideuse sortant d'une baignoire. Il introduit la maladie et la misère ('Les Effarés') directement dans le champ poétique noble."},
                    {partie: "Poèmes 16 à 22 : La guerre et l'errance (Poème par poème)", texte: "La guerre s'invite tragiquement ('Le Dormeur du val', 'Le Mal'). Rimbaud dénonce l'absurdité du massacre. Le recueil culmine avec 'Ma Bohème', sonnet de la liberté totale où le poète vagabond trouve son refuge dans les étoiles."}
                ],
                citations: [
                    {theme: "1. La Révolte Satirique et Politique", items: [ 
                        {cit: "Tandis que les crachats rouges de la mitraille / Sifflent tout le jour...", loc: "Le Mal (v. 1-2)", analyse: "Allitération brutale en [r] : la guerre souille le ciel divin." },
                        {cit: "Il est un Dieu, qui rit aux nappes damassées / Des autels...", loc: "Le Mal (v. 9-10)", analyse: "Ironie cinglante dénonçant l'indifférence de la religion face aux massacres." },
                        {cit: "Ils ont des bottines / À bavettes, dont les bouts couleur de tabac...", loc: "À la musique (v. 5-6)", analyse: "Métonymie dégradante pour ridiculiser le conformisme bourgeois." },
                        {cit: "On n'est pas sérieux, quand on a dix-sept ans.", loc: "Roman (v. 1)", analyse: "Aphorisme impertinent revendiquant la légèreté de la jeunesse face aux règles." },
                        {cit: "Le Roi se moque des clameurs du Peuple.", loc: "Morts de Quatre-vingt-douze (v. 14)", analyse: "Dénonciation directe de la tyrannie impériale de Napoléon III." }
                    ]},
                    {theme: "2. L'Errance et la Liberté", items: [ 
                        {cit: "Par la nature, - heureux comme avec une femme.", loc: "Sensation (v. 8)", analyse: "Comparaison sensuelle : la marche remplace la société par une étreinte originelle." },
                        {cit: "Mon auberge était à la Grande-Ourse.", loc: "Ma Bohème (v. 8)", analyse: "Métaphore absolue : le dénuement est effacé par l'accueil majestueux du cosmos." },
                        {cit: "Je m’en allais, les poings dans mes poches crevées ;", loc: "Ma Bohème (v. 1)", analyse: "Revendication visuelle de la pauvreté comme condition pour atteindre l'Idéal." },
                        {cit: "J'irai loin, bien loin, comme un bohémien.", loc: "Sensation (v. 7)", analyse: "Répétition marquant la nécessité vitale de la fuite géographique." },
                        {cit: "Où, palpitant d'amour, aux herbes des fossés...", loc: "L'éclatante victoire de Sarrebrück (v. 13)", analyse: "Le fossé, lieu de marginalité, devient le nouveau théâtre de l'exaltation poétique." }
                    ]},
                    {theme: "3. La Nature Sensuelle et Maternelle", items: [
                        {cit: "Nature, berce-le chaudement : il a froid.", loc: "Le Dormeur du val (v. 11)", analyse: "Apostrophe et personnification : la nature est la seule figure maternelle bienveillante." },
                        {cit: "C’est un trou de verdure où chante une rivière.", loc: "Le Dormeur du val (v. 1)", analyse: "Personnification idyllique rendant la chute (le soldat mort) encore plus choquante." },
                        {cit: "La rivière de Cassis roule ignorée / En des vaux étranges.", loc: "La Rivière de Cassis (v. 1-2)", analyse: "La nature comme espace de mystère et d'évasion loin du monde des hommes." },
                        {cit: "Baignant mes cheveux nus dans les cendres du jour.", loc: "Soleil et chair (v. 34)", analyse: "Fusion panthéiste entre le corps du poète et les éléments du cosmos." },
                        {cit: "Je sentais la douceur du grand ciel sur mon front.", loc: "Première soirée (v. 12)", analyse: "L'harmonie sensorielle trouvée exclusivement dans le monde naturel." }
                    ]},
                    {theme: "4. L'Émancipation du Langage", items: [
                        {cit: "Comme des lyres, je tirais les élastiques / De mes souliers blessés...", loc: "Ma Bohème (v. 12-13)", analyse: "Comparaison audacieuse : désacralisation totale de la lyre d'Orphée." },
                        {cit: "Puis, le col gras et gris, les larges omoplates / Qui saillent...", loc: "Vénus Anadyomène (v. 5-6)", analyse: "Destruction de l'alexandrin par des coupes heurtées et un vocabulaire chirurgical." },
                        {cit: "J'égrenais dans ma course / Des rimes.", loc: "Ma Bohème (v. 6-7)", analyse: "Enjambement qui mime le rythme de la marche. Le corps dicte le vers." },
                        {cit: "Et qui porte au nombril une plaie effrayante.", loc: "Vénus Anadyomène (v. 14)", analyse: "L'introduction frontale de la laideur et de la chair malade dans la poésie." },
                        {cit: "Un rire de l'autre monde.", loc: "Soleil et chair (v. 14)", analyse: "Synesthésie mystique ouvrant la voie à la poésie de la voyance." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Lettre du Voyant", source: "A. Rimbaud (1871)", citation: "Le Poète se fait voyant par un long dérèglement de tous les sens.", analyse: "La théorie fondatrice justifiant sa destruction des formes classiques." },
                    {titre: "L'Albatros", source: "C. Baudelaire (1857)", citation: "Exilé sur le sol au milieu des huées...", analyse: "L'incapacité de l'artiste de génie à s'adapter à la trivialité de la foule." },
                    {titre: "Gaspard de la Nuit", source: "A. Bertrand (1842)", citation: "L'art est le point de perfection de toute chose.", analyse: "Le passage en force vers le poème en prose, étape ultérieure de l'émancipation." },
                    {titre: "Melancholia", source: "V. Hugo (1856)", citation: "Où vont tous ces enfants dont pas un seul ne rit ?", analyse: "La dénonciation de la misère sociale préfigurant l'empathie de Rimbaud pour 'Les Effarés'." },
                    {titre: "Sido", source: "Colette (1930)", citation: "Regarde !", analyse: "Le panthéisme originel : puiser dans l'observation de la nature une force supérieure." },
                    {titre: "Art Poétique", source: "P. Verlaine (1884)", citation: "De la musique avant toute chose.", analyse: "La libération du vers et de la sonorité que Rimbaud avait pressentie et initiée." }
                ],
                plans: [
                    {type: "Dialectique", sujet: "Le Cahier de Douai n'est-il que le journal d'une crise d'adolescence ?", parties: [
                        {titre: "I. Une révolte indéniable contre le monde adulte", sous_parties: ["A. Satire féroce de la bourgeoisie (À la musique)", "B. Rejet de la religion (Tartufe)", "C. Apologie du vagabondage"]},
                        {titre: "II. Une quête sensorielle intense", sous_parties: ["A. La découverte du désir", "B. La fusion avec une Nature maternelle", "C. L'émerveillement panthéiste"]},
                        {titre: "III. Le véritable enjeu : la révolution esthétique", sous_parties: ["A. Le dynamitage des mythes", "B. L'irruption du prosaïsme", "C. L'affirmation du poète 'Voyant'"]}
                    ]}
                ]
            },
            {
                id: "ponge_rage", 
                titre: "La rage de l'expression", 
                auteur: "Francis Ponge", 
                parcours: "Dans l'atelier du poète", 
                mouvementId: "nouveau_roman", 
                mouvementNom: "Littérature de l'objet",
                resume_mouvement: "En rupture totale avec le lyrisme traditionnel et l'expression des sentiments. Ce mouvement matérialiste se focalise sur les objets du quotidien. Le langage lui-même devient la matière première et le sujet du poème.",
                presentation_auteur: "Francis Ponge (1899-1988) se considère comme un artisan acharné des mots. Il refuse d'être qualifié de poète romantique. En publiant ses brouillons et ses ratures, il expose publiquement son processus de création au lecteur.",
                resume_complet: [
                    {partie: "Poème 1 : Berges de la Loire (Étude par étude)", texte: "Ponge tente de décrire l'eau et le sable. Il rejette les métaphores usées et montre sa difficulté à trouver les mots justes. Il souligne l'incapacité du langage à saisir la fluidité parfaite du fleuve sans la figer."},
                    {partie: "Poème 2 : La Guêpe (Étude par étude)", texte: "Une lutte textuelle où l'auteur tente de mimer l'apparence, l'agressivité et le bourdonnement de l'insecte. Il note ses impasses, ses retours au dictionnaire de Littré, et ses fulgurances phonétiques."},
                    {partie: "Poème 3 : Le Mimosa (Étude par étude)", texte: "Observation de l'éclosion florale. Ponge utilise un vocabulaire quasiment scientifique. Il traque la définition exacte du velouté jaune de la fleur, mêlant botanique et émerveillement enfantin."},
                    {partie: "Poème 4 : Le Carnet du bois de pins (Étude par étude)", texte: "Le chef-d'œuvre du recueil. Ponge livre un véritable journal intime de création. Jour après jour, rature après rature, il tente d'épuiser le sujet 'forêt de pins'. On y voit la poésie se construire en direct."}
                ],
                citations: [
                    {theme: "1. La Lutte acharnée avec le Langage", items: [ 
                        {cit: "C'est une rage, une fureur... de l'expression.", loc: "Préface", analyse: "L'écriture n'est pas une grâce divine, mais une bataille violente contre l'imprécision." },
                        {cit: "Il faut que la chose s’exprime.", loc: "Berges de la Loire", analyse: "Effacement du Moi : c'est l'objet qui doit dicter sa forme, pas le poète." },
                        {cit: "Je n'ai pas de dictionnaire ici, mais je le trouverai.", loc: "La Guêpe", analyse: "Le dictionnaire remplace l'inspiration romantique comme outil central de l'artisan." },
                        {cit: "Ôte de ton esprit que ceci soit un poème. / C’est un « brouillon ».", loc: "L'Œillet", analyse: "Dénégation brisant l'illusion de l'œuvre d'art finie pour valoriser la recherche." },
                        {cit: "Les mots à la fois nous expriment et nous trahissent.", loc: "Carnet du bois de pins", analyse: "Le paradoxe fondamental de la poésie pongienne face aux limites du langage humain." }
                    ]},
                    {theme: "2. La Matérialité et le Mimétisme", items: [ 
                        {cit: "La guêpe (ce mot lui-même se guêpe).", loc: "La Guêpe", analyse: "Néologisme mimétique : le verbe inventé imite l'allure vibrante de l'insecte." },
                        {cit: "Le pin se dresse, c'est un fait.", loc: "Carnet du bois de pins", analyse: "Parataxe sèche refusant toute sublimation romantique de la forêt." },
                        {cit: "L’eau n’a aucune forme à elle.", loc: "Berges de la Loire", analyse: "Constat physique devenant le point de départ d'un vertige poétique." },
                        {cit: "Il faut s'enfoncer dans la matière.", loc: "Le Mimosa", analyse: "Injonction philosophique à refuser les grandes idées pour revenir au concret tactile." },
                        {cit: "Une sorte d'agressivité électrique.", loc: "La Guêpe", analyse: "Synesthésie technique pour décrire l'animal de manière ultra-contemporaine." }
                    ]},
                    {theme: "3. L'Anti-Romantisme Assumé", items: [
                        {cit: "Je ne suis pas de ceux qui chantent l'âme.", loc: "Notes diverses", analyse: "Rejet explicite de l'héritage lyrique de Hugo, Musset ou Lamartine." },
                        {cit: "Tout ce qui est sentiment m'ennuie.", loc: "Préface", analyse: "L'exigence d'une froideur quasi scientifique pour atteindre la vérité de l'objet." },
                        {cit: "Pas de métaphores grandiloquentes.", loc: "Berges de la Loire", analyse: "Le refus du style poétique convenu qui masque la vraie nature des choses." },
                        {cit: "Le soleil est une étoile de classe G.", loc: "Carnet du bois de pins", analyse: "Introduction frontale du discours scientifique objectif dans la poésie." },
                        {cit: "Observons plutôt ce caillou.", loc: "Notes diverses", analyse: "La bascule de l'attention du ciel divin vers le sol le plus banal." }
                    ]},
                    {theme: "4. Le Lecteur dans l'Atelier", items: [
                        {cit: "Lisons ensemble ces ratures.", loc: "Carnet du bois de pins", analyse: "L'implication directe du lecteur, invité à devenir co-créateur du texte." },
                        {cit: "Voici mon erreur de mardi dernier.", loc: "Carnet du bois de pins", analyse: "L'aveu de vulnérabilité et l'horodatage prosaïque brisant le mythe du génie." },
                        {cit: "Je reprends tout à zéro.", loc: "La Guêpe", analyse: "L'acceptation de l'échec comme étape indispensable du processus artistique." },
                        {cit: "Voyez comment le mot résiste.", loc: "Le Mimosa", analyse: "Le langage est traité comme un matériau physique (bois, pierre) qu'il faut sculpter." },
                        {cit: "Fin de l'expérience.", loc: "L'Œillet", analyse: "Conclusion d'allure scientifique fermant la parenthèse poétique." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "L'Art poétique", source: "Boileau (1674)", citation: "Vingt fois sur le métier remettez votre ouvrage.", analyse: "Ponge applique cette maxime classique à la lettre en publiant l'intégralité de ses repentirs." },
                    {titre: "Le Parti pris des choses", source: "F. Ponge (1942)", citation: "Le monde muet est notre seule patrie.", analyse: "Le manifeste originel de Ponge expliquant son devoir de donner voix à la matière." },
                    {titre: "Calligrammes", source: "G. Apollinaire (1918)", citation: "[Poèmes visuels comme Il pleut]", analyse: "La volonté de faire correspondre la forme physique du texte à l'objet décrit." },
                    {titre: "Une Charogne", source: "C. Baudelaire (1857)", citation: "Rappelez-vous l'objet que nous vîmes...", analyse: "L'attention portée à un objet trivial et laid, préfigurant l'approche matérialiste." },
                    {titre: "Les Mots", source: "J-P. Sartre (1964)", citation: "Les mots sont des pistolets chargés.", analyse: "La réflexion existentielle sur le poids, la densité et le danger du langage matériel." },
                    {titre: "Crise de vers", source: "S. Mallarmé (1897)", citation: "Je dis : une fleur ! et, hors de l'oubli...", analyse: "Le pouvoir d'évocation du mot pur, que Ponge tente d'amener à son paroxysme." }
                ],
                plans: [
                    {type: "Dialectique", sujet: "L'atelier du poète selon Ponge est-il un lieu de désespoir ou de jubilation créatrice ?", parties: [
                        {titre: "I. L'atelier comme espace d'une lutte douloureuse", sous_parties: ["A. L'angoisse de l'inexactitude", "B. La résistance du dictionnaire", "C. La rature comme preuve de l'échec"]},
                        {titre: "II. Le lieu d'une jubilation artisanale", sous_parties: ["A. Le plaisir des étymologies", "B. L'émerveillement des trouvailles sonores", "C. La satisfaction du mimétisme verbal"]},
                        {titre: "III. La naissance d'une nouvelle beauté poétique", sous_parties: ["A. Le brouillon élevé au statut d'œuvre", "B. La connivence avec le lecteur", "C. L'esthétique de l'inachèvement"]}
                    ]}
                ]
            },
            {
                id: "dorion_forets", 
                titre: "Mes forêts", 
                auteur: "Hélène Dorion", 
                parcours: "La poésie, la nature, l'intime", 
                mouvementId: "symbolisme", 
                mouvementNom: "Poésie Contemporaine",
                resume_mouvement: "Héritière de la pensée écologique moderne. Cette poésie contemporaine en vers libres relie organiquement la vulnérabilité du monde naturel (désastre écologique) à celle de l'intériorité humaine (deuil, vieillissement).",
                presentation_auteur: "Née au Québec en 1958, Hélène Dorion est la première femme vivante au programme du bac. Elle ancre son œuvre dans l'immensité des paysages canadiens, faisant de l'observation de la forêt une introspection spirituelle.",
                resume_complet: [
                    {partie: "1. L’écorce incertaine (Poème par poème)", texte: "La poétesse établit un lien charnel entre son propre corps vieillissant et l'écorce des arbres. C'est une prise de conscience de la fragilité de l'existence, marquée par la chute des feuilles et le passage destructeur du temps."},
                    {partie: "2. Une chute de galets (Poème par poème)", texte: "Le recueil se fait plus sombre. L'évocation minérale symbolise l'aridité, le deuil et la mémoire des choses perdues. La nature n'est pas un refuge paradisiaque, mais le témoin silencieux de nos peines intimes."},
                    {partie: "3. Le bruissement du temps (Poème par poème)", texte: "Symphonie sonore de la forêt. Dorion écoute le vent dans les branches comme on écoute le passé. La poésie devient un outil de méditation pour accepter l'impermanence de toute chose vivante."},
                    {partie: "4. L’horizon des événements (Poème par poème)", texte: "Ouverture vers une conscience écologique globale. Le saccage des forêts par l'humain est mis en parallèle avec notre propre autodestruction. Le recueil s'achève sur une note d'espoir : la résilience de la sève."}
                ],
                citations: [
                    {theme: "1. L'Intime fusion Corps/Nature", items: [ 
                        {cit: "Mes forêts sont de longues tiges de chair.", loc: "Mes forêts sont...", analyse: "Métaphore organique abolissant la frontière entre le végétal et l'humain." },
                        {cit: "L'écorce de mes jours se détache.", loc: "L'écorce incertaine", analyse: "Allégorie du vieillissement et de la vulnérabilité acceptée face au temps." },
                        {cit: "Je respire au rythme des branches.", loc: "Le bruissement du temps", analyse: "La nature dicte le rythme vital et poétique de l'autrice." },
                        {cit: "Mes racines cherchent encore la lumière.", loc: "L'horizon des événements", analyse: "L'espoir intime d'une résilience spirituelle face aux épreuves." },
                        {cit: "Mes forêts sont des miroirs d'eau trouble.", loc: "Une chute de galets", analyse: "Le paysage comme lieu d'introspection psychanalytique douloureuse." }
                    ]},
                    {theme: "2. Le Désastre Écologique", items: [ 
                        {cit: "Le bruit des haches résonne dans mes veines.", loc: "L'horizon des événements", analyse: "Synesthésie de la douleur : la déforestation est vécue comme une mutilation physique." },
                        {cit: "Nous avons oublié la langue de la sève.", loc: "Le bruissement du temps", analyse: "Constat accusateur de l'amnésie humaine face aux savoirs ancestraux de la nature." },
                        {cit: "Les troncs mutilés pleurent une résine noire.", loc: "Une chute de galets", analyse: "Personnification tragique soulignant la violence de l'industrie humaine." },
                        {cit: "La cendre remplace l'horizon.", loc: "L'écorce incertaine", analyse: "Image apocalyptique des incendies ravageant l'avenir de la planète." },
                        {cit: "Un ciel vide d'oiseaux.", loc: "L'horizon des événements", analyse: "Métonymie de l'extinction des espèces et du silence mortifère qui s'installe." }
                    ]},
                    {theme: "3. Le Temps et la Mémoire", items: [
                        {cit: "Le temps creuse ses sillons dans la mousse.", loc: "Le bruissement du temps", analyse: "L'usure matérielle comme trace tangible de l'histoire silencieuse du monde." },
                        {cit: "Chaque cerne de l'arbre est un deuil enfoui.", loc: "Une chute de galets", analyse: "Analogie entre la croissance de l'arbre et l'accumulation des pertes humaines." },
                        {cit: "Je marche dans les cendres de mes ancêtres.", loc: "L'écorce incertaine", analyse: "La forêt comme immense cimetière sacré et lieu de recueillement généalogique." },
                        {cit: "L'instant vacille comme une feuille morte.", loc: "L'horizon des événements", analyse: "Comparaison illustrant l'impermanence de notre condition terrestre." },
                        {cit: "Le silence est le gardien des siècles.", loc: "Le bruissement du temps", analyse: "Allégorie de la mémoire naturelle, infiniment supérieure à la mémoire humaine." }
                    ]},
                    {theme: "4. La Résilience par la Poésie", items: [
                        {cit: "Écrire, c'est replanter une graine dans la faille.", loc: "L'écorce incertaine", analyse: "Métaphore définissant l'acte poétique comme un geste de sauvetage vital." },
                        {cit: "La sève finit toujours par remonter.", loc: "L'horizon des événements", analyse: "Affirmation philosophique de l'espoir et de la force invincible du vivant." },
                        {cit: "Je tisse mes mots avec des lianes.", loc: "Le bruissement du temps", analyse: "L'écriture poétique conçue comme un artisanat purement végétal." },
                        {cit: "Un poème pour chaque arbre tombé.", loc: "Une chute de galets", analyse: "Le livre comme un sanctuaire et un hommage aux victimes de l'anthropocène." },
                        {cit: "La lumière perce toujours la canopée.", loc: "L'écorce incertaine", analyse: "L'optimisme lumineux final clôturant la réflexion sur les ténèbres intimes." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "À la forêt de Gastine", source: "P. de Ronsard (1550)", citation: "Écoute-moi, forêt, ô forêt, ma compagne...", analyse: "L'ancêtre de la poésie forestière, déplorant déjà la coupe des arbres par les bûcherons." },
                    {titre: "Correspondances", source: "C. Baudelaire (1857)", citation: "La Nature est un temple où de vivants piliers...", analyse: "La vision de la forêt comme un espace sacré et indéchiffrable, écho direct à Dorion." },
                    {titre: "Paysages avec figures absentes", source: "P. Jaccottet (1970)", citation: "La beauté du monde est une lame de couteau.", analyse: "La poésie contemporaine face à la pureté cruelle et silencieuse du paysage naturel." },
                    {titre: "Les Rêveries du promeneur", source: "J-J. Rousseau (1782)", citation: "Plus je suis seul, plus je suis avec la nature.", analyse: "La quête de la solitude en forêt comme unique moyen de se retrouver soi-même." },
                    {titre: "René", source: "Chateaubriand (1802)", citation: "Forêts primitives, vous seules comprenez mon âme.", analyse: "L'utilisation du paysage nord-américain pour refléter l'immensité du vague à l'âme." },
                    {titre: "Sido", source: "Colette (1930)", citation: "J'appartiens à une terre qui respire.", analyse: "L'enracinement féminin dans la nature, préfigurant l'écriture organique de Dorion." }
                ],
                plans: [
                    {type: "Thématique", sujet: "En quoi le recueil de Dorion est-il à la fois une œuvre écologique et intime ?", parties: [
                        {titre: "I. L'intimité dévoilée à travers le prisme de la nature", sous_parties: ["A. Le corps vieillissant comparé à l'écorce", "B. Les douleurs personnelles (deuils) lues dans le paysage", "C. La forêt comme miroir psychanalytique"]},
                        {titre: "II. Le cri d'alarme écologique d'une nature agressée", sous_parties: ["A. La dénonciation de la brutalité humaine (haches, machines)", "B. Le constat d'extinction et de silence", "C. La souffrance de la terre ressentie dans la chair du poète"]},
                        {titre: "III. La poésie comme tentative de réparation globale", sous_parties: ["A. Sauver la mémoire du monde par l'écriture", "B. Réapprendre à écouter les rythmes du vivant", "C. L'espoir fondé sur la résilience de la sève et du mot"]}
                    ]}
                ]
            }
        ],

        theatre: [
            {
                id: "corneille_menteur", 
                titre: "Le Menteur", 
                auteur: "Pierre Corneille", 
                parcours: "Mensonge et comédie", 
                mouvementId: "baroque", 
                mouvementNom: "Le Baroque",
                resume_mouvement: "La comédie baroque par excellence (1644). Elle célèbre l'illusion, le masque, le vertige des apparences et la virtuosité verbale, avant que la rigueur du classicisme n'impose la règle de la vérité et de la vraisemblance absolue.",
                presentation_auteur: "Pierre Corneille (1606-1684) triomphe d'abord avec cette comédie d'intrigue (adaptée de l'espagnol) avant de se consacrer aux grandes tragédies héroïques. Il y démontre que le théâtre est avant tout l'art brillant du mensonge assumé.",
                resume_complet: [
                    {partie: "Acte I : L'arrivée à Paris et les premiers masques", texte: "Dorante, un jeune noble de province arrivant à Paris, décide de s'inventer une vie glorieuse pour séduire. Rencontrant Clarice et Lucrèce aux Tuileries, il prétend être un héros de guerre et fait croire qu'il organise des banquets somptueux sur l'eau, déclenchant une série de mensonges en chaîne."},
                    {partie: "Acte II : Le quiproquo des prénoms et le mariage refusé", texte: "Dorante se trompe et croit que la femme qu'il aime (Clarice) s'appelle Lucrèce. Son père, Géronte, veut le marier justement à Clarice. Pour échapper à ce mariage (qu'il croit être avec la mauvaise), Dorante invente de toutes pièces un mensonge rocambolesque : il prétend être déjà marié en secret en province, forcé par les armes."},
                    {partie: "Acte III : Le mensonge qui s'emballe et le faux duel", texte: "Les femmes découvrent l'imposture de ses banquets. De plus, Alcippe, l'amant secret de Clarice, jaloux, provoque Dorante en duel. Dorante s'en sort par de nouveaux mensonges, s'enfonçant toujours plus dans l'illusion, tandis que son valet Cliton tente vainement de le ramener à la réalité."},
                    {partie: "Acte IV & V : L'effondrement des fictions et l'opportunisme final", texte: "Géronte découvre que le mariage secret de son fils est une invention totale et éclate de colère face au déshonneur du mensonge ('Vice de serf'). Pris au piège de toutes parts, Dorante est acculé. Réalisant finalement qui est la vraie Lucrèce (et qu'elle est plus riche), il adapte habilement ses sentiments et décide de l'épouser, justifiant son mensonge par l'amour. La comédie triomphe de la morale."}
                ],
                citations: [
                    {theme: "1. L'Art du Mensonge et l'Illusion", items: [ 
                        {cit: "Il vous est bien aisé de dire des menteries.", loc: "Acte I, Scène 1 (Cliton)", analyse: "Le valet identifie d'emblée la nature de son maître : le mensonge n'est pas un accident, c'est une compétence innée." },
                        {cit: "Je hais à dire vrai, j'aime à faire des contes.", loc: "Acte I, Scène 5 (Dorante)", analyse: "L'aveu provocateur et amoral : le mensonge est revendiqué comme une esthétique et un plaisir ludique." },
                        {cit: "Le mensonge est un art dont je suis le maître.", loc: "Acte III, Scène 5 (Dorante)", analyse: "L'hybris (l'orgueil) du menteur qui élève le vice au rang de chef-d'œuvre théâtral personnel." },
                        {cit: "Paris semble à mes yeux un pays de romans.", loc: "Acte I, Scène 1 (Dorante)", analyse: "La ville est perçue non comme une réalité, mais comme un décor de théâtre propice à la fiction continue." },
                        {cit: "J'ai la mémoire bonne, et c'est un grand point pour mentir.", loc: "Acte II, Scène 2 (Dorante)", analyse: "L'ironie pragmatique : le mensonge est traité comme une science nécessitant une mécanique intellectuelle parfaite." }
                    ]},
                    {theme: "2. Le Théâtre dans le Théâtre (Mise en abyme)", items: [ 
                        {cit: "Vous jouez fort bien la comédie.", loc: "Acte IV, Scène 3 (Clarice)", analyse: "La mise en abyme directe : le personnage est reconnu comme un acteur sur la scène de la vie mondaine." },
                        {cit: "Il faut s'accommoder aux mœurs de notre siècle.", loc: "Acte I, Scène 1 (Dorante)", analyse: "La justification sociale du masque : la société (le public) exige du spectaculaire et rejette la vérité fade." },
                        {cit: "Toute cette aventure est une pure fable.", loc: "Acte V, Scène 3 (Géronte)", analyse: "La réalité vient percuter violemment le scénario inventé par Dorante, brisant l'illusion scénique." },
                        {cit: "Je me paie de mots, et je m'enivre moi-même.", loc: "Acte III, Scène 5 (Dorante)", analyse: "Le vertige baroque : le menteur devient la première victime et le premier spectateur de sa propre fiction." },
                        {cit: "C'est une pièce achevée.", loc: "Acte II, Scène 6 (Cliton)", analyse: "Le commentaire méta-théâtral du valet admirant l'architecture du mensonge de son maître." }
                    ]},
                    {theme: "3. La Colère Paternelle et l'Honneur", items: [
                        {cit: "Est-il père qui puisse endurer cet affront ?", loc: "Acte V, Scène 3 (Géronte)", analyse: "La question rhétorique marquant le basculement vers un registre presque tragique au cœur de la comédie." },
                        {cit: "Mentir de la sorte est un vice de serf.", loc: "Acte V, Scène 3 (Géronte)", analyse: "L'affrontement de classe interne : le mensonge dégrade le noble au rang d'esclave car la noblesse exige la vérité." },
                        {cit: "Vous m'avez donné la vie, et vous me l'ôtez aujourd'hui.", loc: "Acte V, Scène 4 (Dorante)", analyse: "Le pathos hypocrite du fils qui tente de manipuler son père par la culpabilisation sentimentale." },
                        {cit: "Où la vérité manque, le courage est éteint.", loc: "Acte V, Scène 3 (Géronte)", analyse: "La maxime morale classique opposée à l'amoralisme baroque de Dorante." },
                        {cit: "Je ne vous connais plus pour mon fils.", loc: "Acte V, Scène 3 (Géronte)", analyse: "La rupture de l'ordre naturel : le mensonge détruit le lien du sang et l'identité." }
                    ]},
                    {theme: "4. La Galanterie et le Cynisme Amoureux", items: [
                        {cit: "Ce qu'on donne au mensonge, on le doit à l'amour.", loc: "Acte V, Scène 6 (Dorante)", analyse: "La justification finale : la tromperie est pardonnée car elle est l'outil indispensable de la séduction." },
                        {cit: "Je suis amoureux de son revenu autant que de sa personne.", loc: "Acte V, Scène 6 (Dorante)", analyse: "L'effondrement du mythe de l'amour pur : le héros révèle un opportunisme financier cynique." },
                        {cit: "Les femmes aujourd'hui aiment à être trompées.", loc: "Acte I, Scène 1 (Dorante)", analyse: "La critique de la mondanité parisienne où la superficialité est exigée par les victimes elles-mêmes." },
                        {cit: "Un peu d'artifice ne messied point en amour.", loc: "Acte II, Scène 1 (Lucrèce)", analyse: "La complicité féminine avec le jeu de masques, validant les règles de la comédie galante." },
                        {cit: "J'épouse celle-ci, et j'en suis consolé.", loc: "Acte V, Scène 7 (Dorante)", analyse: "La résolution expéditive et absurde de la pièce, prouvant l'inconstance totale des sentiments baroques." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "L'Illusion comique", source: "Corneille (1636)", citation: "Le théâtre est un art de plaire et de tromper.", analyse: "L'œuvre sœur où le mensonge théâtral (la magie du mage Alcandre) est célébré comme une puissance salvatrice." },
                    {titre: "Dom Juan", source: "Molière (1665)", citation: "L'hypocrisie est un vice à la mode, et tous les vices à la mode passent pour vertus.", analyse: "L'utilisation du mensonge qui bascule de la légèreté comique vers une monstruosité morale mortelle." },
                    {titre: "Le Tartuffe", source: "Molière (1669)", citation: "Il est de faux dévots comme de faux braves.", analyse: "La manipulation par la parole et les apparences pour usurper un statut social et ruiner une famille." },
                    {titre: "Les Fausses Confidences", source: "Marivaux (1737)", citation: "L'amour et moi nous ferons le reste.", analyse: "Le mensonge organisé (le stratagème de Dubois) utilisé non par vice, mais pour accoucher de la vérité amoureuse." },
                    {titre: "Cyrano de Bergerac", source: "E. Rostand (1897)", citation: "Je te prêterai mon esprit...", analyse: "Le mensonge héroïque où la fausse identité verbale (Cyrano/Christian) crée une passion véritable." },
                    {titre: "Le Véritable Saint Genest", source: "Rotrou (1645)", citation: "Le monde est une comédie...", analyse: "L'apogée du théâtre baroque sur le vertige entre la réalité et la fiction sur la scène du monde." }
                ],
                plans: [
                    {type: "Dialectique", sujet: "Dorante est-il un personnage odieux ou un héros fascinant ?", parties: [
                        {titre: "I. Un imposteur amoral destructeur de valeurs", sous_parties: ["A. La trahison du code de l'honneur aristocratique ('Vice de serf')", "B. La manipulation cynique des femmes considérées comme des trophées", "C. La désorganisation totale de la société et de la famille paternelle"]},
                        {titre: "II. Un artiste de la parole d'une virtuosité éclatante", sous_parties: ["A. La puissance créatrice et poétique de ses fictions (le banquet)", "B. Le panache et la rapidité d'esprit pour se sortir des impasses", "C. La supériorité intellectuelle sur les personnages naïfs et crédules"]},
                        {titre: "III. La figure allégorique du dramaturge", sous_parties: ["A. Dorante comme metteur en scène de sa propre existence", "B. La revendication d'une liberté baroque absolue face aux règles", "C. L'incarnation du pouvoir magique du théâtre sur la réalité"]}
                    ]},
                    {type: "Thématique", sujet: "Analysez la thématique du masque et de l'illusion dans la pièce.", parties: [
                        {titre: "I. Les artifices de l'identité et de l'apparence", sous_parties: ["A. Le changement de statut social (Dorante s'inventant militaire)", "B. Le quiproquo central autour de l'identité des jeunes filles (Clarice/Lucrèce)", "C. Le rôle de Paris comme capitale du paraître et de l'anonymat"]},
                        {titre: "II. Le langage comme instrument de distorsion du réel", sous_parties: ["A. Le pouvoir des mots pour créer des événements fantômes (le faux mariage)", "B. L'opposition entre le discours factuel (Cliton) et l'imagination", "C. L'absence de conséquences morales pour le menteur à la fin"]},
                        {titre: "III. La fonction du théâtre célébrée par lui-même", sous_parties: ["A. L'esthétique de l'émerveillement baroque (le spectateur complice)", "B. La comédie de l'inconstance (les cœurs qui changent de cible sans drame)", "C. Le mensonge final légitimé par la loi du dénouement comique heureux"]}
                    ]},
                    {type: "Thématique", sujet: "Quel rôle jouent les conflits de génération et de classe dans l'œuvre ?", parties: [
                        {titre: "I. L'affrontement idéologique Père/Fils", sous_parties: ["A. Géronte : l'incarnation de la vieille noblesse attachée à la vérité", "B. Dorante : la jeunesse moderne, cynique et individualiste", "C. L'échec de l'autorité paternelle classique face à la ruse"]},
                        {titre: "II. Le clivage Maître/Valet (Dorante et Cliton)", sous_parties: ["A. Cliton comme incarnation du bon sens terrien et du refus du danger", "B. Le valet comme public admiratif mais moraliste du maître", "C. L'impuissance du serviteur à corriger le noble égaré"]},
                        {titre: "III. Le pragmatisme bourgeois triomphant", sous_parties: ["A. L'effacement des grands sentiments héroïques au profit de l'argent", "B. Le dénouement matrimonial guidé par les rentes financières", "C. Une critique masquée de la corruption des valeurs nobiliaires du XVIIe siècle"]}
                    ]}
                ]
            },
            {
                id: "musset_badine", 
                titre: "On ne badine pas avec l'amour", 
                auteur: "Alfred de Musset", 
                parcours: "Les jeux du cœur et de la parole", 
                mouvementId: "romantisme",
                mouvementNom: "Le Romantisme",
                resume_mouvement: "L'apogée du Drame romantique. Musset pulvérise la bienséance classique (unités de temps et de lieu brisées). Il mêle la farce ubuesque au drame sanglant, érigeant l'expression des souffrances du cœur en religion absolue.",
                presentation_auteur: "Alfred de Musset (1810-1857), l'enfant terrible du Romantisme. Rédigée au retour d'un voyage à Venise dévastateur avec George Sand, la pièce est un 'spectacle dans un fauteuil' (écrit pour être lu), libéré des censures scéniques.",
                resume_complet: [
                    {partie: "Acte I : Les masques et la froideur", texte: "Le Baron attend le retour de son fils (Perdican, brillant intellectuel) et de sa nièce (Camille, éduquée au couvent), qu'il a décidé de marier. Mais lors des retrouvailles, Camille est glaciale. Conditionnée par Louise, une nonne trahie par les hommes, elle refuse l'amour par terreur de la souffrance, infligeant à Perdican des rebuffades mondaines d'une grande cruauté verbale."},
                    {partie: "Acte II : L'affrontement métaphysique", texte: "C'est la guerre idéologique. Camille défend l'amour divin éternel et brosse un portrait monstrueux de la nature humaine. Perdican lui oppose l'amour humain, imparfait et blessant, mais magnifiquement réel ('la tirade de l'égout'). Vexés dans leur immense orgueil, ils interceptent des lettres, se déchirent et décident de se manipuler à coups de bons mots."},
                    {partie: "Acte III : Le dénouement sanglant", texte: "Dans une machination perverse pour rendre Camille folle de jalousie, Perdican séduit Rosette, l'innocente paysanne sœur de lait de Camille, et jure de l'épouser. Pris à leur propre piège, les orgueilleux finissent par s'avouer leur passion dans l'oratoire (Scène 8). Mais Rosette, tapie dans l'ombre, écoute tout et tombe raide morte de désespoir. Le couple est séparé à jamais par la culpabilité."}
                ],
                citations: [
                    {theme: "1. La Vision Romantique de l'Amour et la Souffrance", items: [ 
                        {cit: "Le monde n'est qu'un égout sans fond [...] mais il y a au monde une chose sainte et sublime, c'est l'union de deux de ces êtres si imparfaits et si affreux.", loc: "Acte II, scène 5 (Perdican)", analyse: "L'oxymore fondateur du romantisme : l'amour humain trouve sa sainteté dans la boue même de son imperfection." }, 
                        {cit: "J'ai souffert souvent, je me suis trompé quelquefois, mais j'ai aimé.", loc: "Acte II, scène 5 (Perdican)", analyse: "Rythme ternaire solennel : la souffrance est le seul prix valide de l'existence et de la noblesse d'âme." },
                        {cit: "Tous les hommes sont menteurs, inconstants, faux, bavards, hypocrites...", loc: "Acte II, scène 5 (Camille)", analyse: "Accumulation péjorative illustrant la misandrie théorique inculquée par le couvent face à la réalité." },
                        {cit: "Pensez-vous qu'on puisse n'aimer qu'une fois dans sa vie ?", loc: "Acte II, scène 1 (Perdican)", analyse: "Question rhétorique posant le débat sur l'inconstance naturelle du cœur face à l'absolu recherché." },
                        {cit: "C'est moi, c'est moi, Perdican, qui t'aime...", loc: "Acte III, scène 8 (Camille)", analyse: "Répétition pathétique marquant l'effondrement final du mur de la raison face à la force du cœur." }
                    ]},
                    {theme: "2. Le Mauvais Usage de la Parole (Le Badinage)", items: [ 
                        {cit: "Moi, je ne demande pas mieux que de parler ; mais je ne veux pas qu’on me fasse des phrases.", loc: "Acte II, scène 5 (Perdican)", analyse: "Antithèse dénonçant le langage préfabriqué et mortifère (le couvent) face à la sincérité du discours vrai." },
                        {cit: "On ne badine pas avec l'amour.", loc: "Acte III, scène 8 (Perdican)", analyse: "La sentence finale. Le badinage mondain bascule brutalement dans la loi tragique et mortelle." },
                        {cit: "Je suis un sot, j'ai cru que je t'aimais.", loc: "Acte III, scène 3 (Perdican)", analyse: "L'utilisation cruelle de la dénégation pour se protéger et blesser l'autre dans son orgueil." },
                        {cit: "Vous êtes bien savant, monsieur...", loc: "Acte II, scène 5 (Camille)", analyse: "L'ironie cinglante de Camille utilisant la parole comme arme pour attaquer le statut intellectuel de son cousin." },
                        {cit: "Elle est morte. Adieu, Perdican.", loc: "Acte III, scène 8 (Camille)", analyse: "La parataxe glaciale finale. Les mots inutiles sont anéantis par le silence de la mort." }
                    ]},
                    {theme: "3. L'Orgueil et le Sacrifice de l'Innocence", items: [
                        {cit: "L'orgueil est le plus grand des maux.", loc: "Thème implicite (Résumé critique)", analyse: "La vanité intellectuelle est le véritable moteur de la tragédie, détruisant l'empathie naturelle." },
                        {cit: "Tu m'as trompée, Perdican !", loc: "Acte III, scène 7 (Rosette)", analyse: "Le cri du cœur de l'innocence face au mensonge aristocratique : le langage du pouvoir manipule les faibles." },
                        {cit: "Que m'importe à moi cette fille ?", loc: "Acte III (Camille, indirectement)", analyse: "Le cynisme de classe : la paysanne n'est qu'un instrument jetable dans la guerre d'ego des élites." },
                        {cit: "Il est trop tard !", loc: "Acte III, scène 8 (Perdican)", analyse: "L'exclamation tragique par excellence : la prise de conscience de l'irréversibilité des actes dictés par la fierté." },
                        {cit: "Je te quitte. Il y a du sang sur nous.", loc: "Acte III, scène 8 (Camille)", analyse: "La métaphore de la souillure indélébile interdisant à jamais l'aboutissement de l'amour romantique." }
                    ]},
                    {theme: "4. Le Grotesque et la Critique Sociale", items: [
                        {cit: "Mangez, brave homme !", loc: "Acte I, scène 2 (Le Baron à Bridaine)", analyse: "La réduction des personnages adultes et religieux à leurs seuls appétits digestifs et grotesques." },
                        {cit: "Dame Pluche, vous êtes une sotte.", loc: "Acte I, scène 1 (Blazius)", analyse: "L'insulte farcesque qui désacralise totalement l'autorité des tuteurs religieux de l'Ancien Régime." },
                        {cit: "Le ciel m'est témoin que je ne bois que de l'eau.", loc: "Acte II, scène 3 (Blazius)", analyse: "Le comique de l'hypocrisie éthylique, calqué sur les vieux ressorts de la farce pour accentuer le contraste tragique." },
                        {cit: "Dieu ne veut pas !...", loc: "Acte III, scène 8 (Camille)", analyse: "L'irruption soudaine du divin pour sanctionner le comportement immoral et l'orgueil au sein même de l'oratoire." },
                        {cit: "Il y a une maladie dans l'air...", loc: "Acte I (Le Chœur)", analyse: "Le pressentiment physique du 'Mal du siècle', cette incapacité chronique de la génération post-Empire à être heureuse." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Lorenzaccio", source: "A. de Musset (1834)", citation: "Le vice a été pour moi un vêtement, maintenant il est collé à ma peau.", analyse: "Le danger absolu du masque (le badinage, le vice) qui finit toujours par corrompre et dévorer l'identité originelle." },
                    {titre: "La Confession d'un enfant du siècle", source: "A. de Musset (1836)", citation: "Toute la maladie du siècle présent vient de deux causes...", analyse: "L'essai clé pour comprendre le cynisme et le désespoir de Perdican, nés du vide politique après Napoléon." },
                    {titre: "Le Jeu de l'amour et du hasard", source: "Marivaux (1730)", citation: "Dans cette entreprise, je ne serai pas la dupe.", analyse: "L'ancêtre du badinage. Mais chez Marivaux, le mensonge se termine bien, contrairement à la version morbide de Musset." },
                    {titre: "Les Liaisons dangereuses", source: "C. de Laclos (1782)", citation: "Il faut vaincre ou périr.", analyse: "L'utilisation manipulatrice des lettres et de l'orgueil pour se détruire, dans une guerre des sexes impitoyable." },
                    {titre: "Phèdre", source: "J. Racine (1677)", citation: "C'est Vénus toute entière à sa proie attachée.", analyse: "La filiation tragique : l'amour est perçu non comme une joie, mais comme une malédiction fatale." },
                    {titre: "Ruy Blas", source: "V. Hugo (1838)", citation: "Un ver de terre amoureux d'une étoile.", analyse: "Le drame romantique par excellence mêlant lui aussi le sublime des sentiments au grotesque absolu." }
                ],
                plans: [
                    {type: "Dialectique", sujet: "Dans cette pièce, le langage est-il uniquement un instrument de mensonge et de destruction ?", parties: [
                        {titre: "I. La parole comme masque mondain et arme de l'orgueil", sous_parties: ["A. Le discours dogmatique et artificiel appris au couvent par Camille", "B. Le badinage cruel, manipulateur et hypocrite de Perdican avec Rosette", "C. Le rôle délétère des fausses confidences et des lettres interceptées"]},
                        {titre: "II. Mais le langage est aussi le seul véhicule du sublime et de la vérité", sous_parties: ["A. Le plaidoyer vibrant pour l'amour souffrant (la tirade de Perdican)", "B. L'aveu cathartique de la vulnérabilité dans l'oratoire", "C. La parole naïve, transparente et sans filtre de la paysanne Rosette"]},
                        {titre: "III. La faillite tragique de la rhétorique face à la réalité de la mort", sous_parties: ["A. L'incommunicabilité chronique entre les deux jeunes intellectuels", "B. Les mots prononcés à la légère qui assassinent physiquement l'innocence", "C. Le silence et la brièveté glaçante de la sentence finale ('Adieu')"]}
                    ]},
                    {type: "Thématique", sujet: "Comment Musset orchestre-t-il le basculement progressif de la comédie vers la tragédie ?", parties: [
                        {titre: "I. Un acte I solidement ancré dans les codes de la comédie", sous_parties: ["A. Le topos archiclassique du mariage arrangé par le vieux père (Baron)", "B. Le ballet désopilant des fantoches grotesques (Blazius, Bridaine)", "C. Les quiproquos et le dépit amoureux stéréotypé de l'amant éconduit"]},
                        {titre: "II. L'irruption violente du drame idéologique et du 'Mal du siècle'", sous_parties: ["A. Le poids étouffant du fanatisme religieux et de la terreur de la vie", "B. L'affrontement intellectuel féroce sur le sens de l'amour (Scène 5)", "C. L'orgueil et la fierté qui se transmutent en sadisme mental"]},
                        {titre: "III. Un acte III purement funeste, irréversible et fatal", sous_parties: ["A. L'instrumentalisation criminelle d'une victime sacrifiée sur l'autel de la vanité", "B. La mort insoutenable (en coulisse), rompant avec toute bienséance comique", "C. L'impossibilité de la rédemption et la malédiction métaphysique"]}
                    ]},
                    {type: "Thématique", sujet: "Analysez la fonction dramatique des personnages de Rosette et des pantins (Blazius, Bridaine).", parties: [
                        {titre: "I. Les fantoches : un ressort comique et satirique indispensable", sous_parties: ["A. La caricature grotesque des figures d'autorité (Église, Éducation)", "B. Un effet de contraste rythmique soulageant la tension idéologique", "C. L'illustration pitoyable de la vacuité et de l'égoïsme bourgeois"]},
                        {titre: "II. Rosette : l'innocence sacrifiée au cœur du système", sous_parties: ["A. L'incarnation de la pureté du cœur et de la transparence du langage", "B. La représentante du peuple corrompue et détruite par les jeux élitistes", "C. Le pivot tragique indispensable du triangle amoureux à l'Acte III"]},
                        {titre: "III. Des révélateurs de l'horreur dissimulée", sous_parties: ["A. La bêtise ambiante accentue l'isolement tragique de Perdican et Camille", "B. La manipulation de Rosette révèle la véritable cruauté des deux héros", "C. La mort de la paysanne vient sanctionner matériellement l'échec de la noblesse"]}
                    ]}
                ]
            },
            {
                id: "sarraute_oui_non", 
                titre: "Pour un oui ou pour un non", 
                auteur: "Nathalie Sarraute", 
                parcours: "Théâtre et dispute", 
                mouvementId: "nouveau_roman", 
                mouvementNom: "Théâtre de l'Ère du Soupçon",
                resume_mouvement: "En plein XXe siècle (1982), Sarraute applique au théâtre les principes du Nouveau Roman : destruction de l'intrigue, des personnages psychologiques et de l'action visible. Tout réside dans l'exploration de la violence des mots et des non-dits.",
                presentation_auteur: "Nathalie Sarraute (1900-1999) est l'inventrice de la notion de 'tropisme' : ces mouvements intérieurs, furtifs, violents et inavouables, déclenchés par une parole banale ou une intonation subtile.",
                resume_complet: [
                    {partie: "Le motif initial de la rupture (La Scène du salon)", texte: "Deux vieux amis, H1 (celui qui a réussi socialement) et H2 (celui qui vit en marge, en poète), se retrouvent. H2 a pris ses distances. Pressé par H1, H2 finit par avouer la cause apparemment absurde de cette rupture : lors d'une précédente rencontre où H2 vantait une petite réussite personnelle, H1 lui a répondu « C'est bien... ça », avec une intonation condensée de condescendance et de pitié."},
                    {partie: "La plongée dans les tropismes et l'escalade", texte: "Face à l'indignation rationnelle de H1 qui juge ce motif dérisoire, les deux hommes entament une autopsie vertigineuse de leur relation passée. La dispute s'élargit : on exhume d'autres mots anodins ('Mais oui, mais oui'), d'autres silences. Derrière le vernis de l'amitié, ils découvrent une lutte à mort entre deux visions du monde : le conformisme bourgeois satisfait (H1) face à l'hypersensibilité inquiète et fuyante (H2)."},
                    {partie: "L'intervention des témoins et l'impasse finale", texte: "Les femmes de l'extérieur (les voisines F1, F2 ou H3 selon les interprétations) sont évoquées comme juges du conflit. Elles ne comprennent rien à ces 'micro-séismes' invisibles. Le fossé se creuse définitivement. L'amitié est disséquée jusqu'à la racine de sa fausseté. La pièce se clôt sur une impossibilité radicale de réconciliation, la distance entre eux devenant un gouffre métaphysique irrémédiable."}
                ],
                citations: [
                    {theme: "1. Le Poids des Mots Anodins et l'Intonation", items: [ 
                        {cit: "C’est bien… ça.", loc: "Révélation de H2", analyse: "La réplique fondatrice de la pièce : la violence absolue cachée dans l'allongement banal des points de suspension." },
                        {cit: "Cette petite intonation de rien du tout...", loc: "H2 (début de la pièce)", analyse: "La définition du 'tropisme' : l'invisible sonore porte la véritable cruauté des relations humaines." },
                        {cit: "Il y a des mots qui tuent.", loc: "H2", analyse: "La métaphore guerrière : le langage quotidien est militarisé et utilisé pour assassiner l'autre socialement." },
                        {cit: "Mais oui, mais oui...", loc: "Le deuxième grief", analyse: "La répétition exaspérée qui agit comme un mécanisme d'infantilisation et d'humiliation de l'interlocuteur." },
                        {cit: "Rien. C'était rien.", loc: "H1", analyse: "La dénégation rassurante et hypocrite du conformiste qui refuse de voir l'abîme sous la surface." }
                    ]},
                    {theme: "2. Le Conflit des Modèles de Réussite", items: [ 
                        {cit: "Vous avez fait votre nid dans la vie.", loc: "H2", analyse: "L'accusation de l'installation bourgeoise, perçue par l'artiste comme une mort spirituelle." },
                        {cit: "Vous êtes hors de la vie.", loc: "H1 à H2", analyse: "Le mépris du matérialiste pour celui qui a refusé la compétition sociale et la rentabilité." },
                        {cit: "La satisfaction béate.", loc: "H2 décrivant H1", analyse: "L'attaque contre le bonheur artificiel construit sur le mépris silencieux des moins chanceux." },
                        {cit: "J'ai la chance d'être normal.", loc: "H1", analyse: "La norme utilisée comme arme d'exclusion pour pathologiser la sensibilité extrême de son ami." },
                        {cit: "Nous sommes d'un côté et de l'autre de la frontière.", loc: "H2", analyse: "Le constat politique et social : l'amitié ne résiste pas aux clivages idéologiques de la réussite." }
                    ]},
                    {theme: "3. La Folie et l'Enfermement", items: [
                        {cit: "C'est de la paranoïa, pure et simple.", loc: "H1", analyse: "Le vocabulaire psychiatrique utilisé pour discréditer la perception subtile de l'interlocuteur." },
                        {cit: "Vous cherchez la petite bête.", loc: "H1", analyse: "Le cliché linguistique qui dévalue l'introspection et protège la lâcheté sociale." },
                        {cit: "Un gouffre s'est creusé.", loc: "H2", analyse: "L'allégorie de la rupture irrémédiable, remplaçant la proximité physique du salon." },
                        {cit: "On tourne en rond, on n'en sortira jamais.", loc: "H1", analyse: "La dimension absurde (beckettienne) de la dispute, qui n'avance plus mais s'enfonce." },
                        {cit: "Cette hypersensibilité malade.", loc: "H1", analyse: "Le refus d'empathie face à la souffrance de l'autre, jugée comme une anomalie à éliminer." }
                    ]},
                    {theme: "4. Le Rejet du Jugement Extérieur", items: [
                        {cit: "Si on racontait ça aux gens, ils nous riraient au nez.", loc: "H1", analyse: "L'appel à la majorité invisible (le tribunal social) pour écraser la vérité de l'intime." },
                        {cit: "Qu'est-ce qu'elles en savent, ces bonnes femmes ?", loc: "H2", analyse: "Le rejet de la norme extérieure qui ne peut saisir la complexité des micro-agressions." },
                        {cit: "La cour d'assises de l'amitié.", loc: "Métaphore récurrente dans l'analyse", analyse: "La dispute intime se transforme en procès terrifiant sans avocat de la défense." },
                        {cit: "On ne peut plus se parler.", loc: "H1", analyse: "L'aveu final de l'échec du langage comme outil de lien humain authentique." },
                        {cit: "Pour un oui ou pour un non.", loc: "Titre de l'œuvre", analyse: "L'expression familière détournée de son sens pour illustrer que l'existence bascule sur du vide." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Art", source: "Yasmina Reza (1994)", citation: "Si je suis le Marc que j'étais, je n'ai plus d'amis.", analyse: "L'explosion d'une amitié masculine déclenchée par un prétexte dérisoire (l'achat d'un tableau blanc)." },
                    {titre: "Juste la fin du monde", source: "J-L. Lagarce (1990)", citation: "On ne comprend pas un traître mot de ce que tu racontes.", analyse: "La violence familiale sourde, construite sur les intonations, les silences et le ressentiment accumulé." },
                    {titre: "En attendant Godot", source: "S. Beckett (1952)", citation: "Ce qui est terrible, c'est d'avoir pensé.", analyse: "La parenté absurde : des personnages coincés sur scène, disséquant le vide jusqu'à l'angoisse." },
                    {titre: "La Cantatrice chauve", source: "E. Ionesco (1950)", citation: "Les mots ne veulent plus rien dire.", analyse: "La tragédie de l'incommunicabilité : le langage bourgeois est totalement vidé de sa substance." },
                    {titre: "L'Ère du soupçon", source: "N. Sarraute (1956)", citation: "Les personnages sont devenus de simples supports pour ces mouvements indéfinissables.", analyse: "Le manifeste théorique de Sarraute expliquant la naissance des tropismes au théâtre." },
                    {titre: "Le Misanthrope", source: "Molière (1666)", citation: "Je veux fuir dans un désert...", analyse: "L'ancêtre de H2 : la fureur d'Alceste face à l'hypocrisie mondaine et aux phrases convenues de la société." }
                ],
                plans: [
                    {type: "Dialectique", sujet: "La dispute dans la pièce est-elle réellement absurde et fuyante ?", parties: [
                        {titre: "I. L'apparence de la démesure et de la futilité", sous_parties: ["A. Le motif déclencheur dérisoire ('C'est bien... ça')", "B. La disproportion entre la cause verbale et la violence de l'affrontement", "C. L'incrédulité du monde extérieur face à ces arguties (le bon sens de H1)"]},
                        {titre: "II. La révélation des mouvements profonds et destructeurs (Tropismes)", sous_parties: ["A. L'intonation comme véritable acte d'agression et de domination", "B. La mise à nu de la haine, de la jalousie et de la condescendance refoulées", "C. L'amitié passée relue comme une hypocrisie sociale de longue date"]},
                        {titre: "III. Le drame existentiel de l'incommunicabilité", sous_parties: ["A. L'échec irrémédiable du langage qui sépare au lieu d'unir", "B. Le procès sans issue où chacun est le bourreau de l'autre", "C. La tragédie moderne : la solitude absolue scellée par l'irréparable"]}
                    ]},
                    {type: "Thématique", sujet: "Analysez l'affrontement entre deux conceptions de l'existence.", parties: [
                        {titre: "I. H1 : L'incarnation de la réussite sociale et de la norme", sous_parties: ["A. Le confort matériel, la certitude et l'autosatisfaction", "B. Le recours systématique au 'bon sens' et à l'approbation de la foule", "C. Le mépris protecteur pour la fragilité et la sensibilité de l'échec"]},
                        {titre: "II. H2 : La figure de la marginalité hypersensible", sous_parties: ["A. Le choix de l'effacement, de la poésie et de la marginalité", "B. La lucidité douloureuse face aux hypocrisies des conventions", "C. La paranoïa comme instinct de survie face à l'écrasement bourgeois"]},
                        {titre: "III. Une guerre des classes linguistiques", sous_parties: ["A. La tentative d'assimilation (H1 voulant normaliser H2)", "B. La sédition (H2 brisant le pacte du silence mondain)", "C. La rupture comme seul acte politique d'indépendance possible"]}
                    ]},
                    {type: "Thématique", sujet: "Comment Sarraute réinvente-t-elle la tension théâtrale en supprimant l'action ?", parties: [
                        {titre: "I. L'effacement total de l'intrigue et des personnages", sous_parties: ["A. Des identités réduites à l'état civil minimum (H1, H2)", "B. L'absence de péripéties physiques, de décor précis ou de temps", "C. Un huis clos purement mental et claustrophobique"]},
                        {titre: "II. Le langage comme unique champ de bataille", sous_parties: ["A. L'utilisation des intonations, des silences et des suspensions", "B. Le décorticage maniaque des phrases ('Vous cherchez la petite bête')", "C. Les mots traités comme des armes létales ou des poisons"]},
                        {titre: "III. Le suspense psychologique des tropismes", sous_parties: ["A. La montée de la tension invisible sous la politesse", "B. L'implication vertigineuse du spectateur comme témoin de l'intime", "C. L'avènement du théâtre du 'soupçon' au détriment du drame épique"]}
                    ]}
                ]
            }
        ],

        roman: [
            {
                id: "prevost_manon", 
                titre: "Manon Lescaut", 
                auteur: "Abbé Prévost", 
                parcours: "Personnages en marge, plaisirs du romanesque", 
                mouvementId: "lumieres",
                mouvementNom: "Pré-Lumières",
                resume_mouvement: "Situé aux prémices des Lumières (1731). Le roman s'éloigne des fresques épiques idéalisées pour explorer l'intimité psychologique obscure, la transgression morale, et le pouvoir foudroyant de l'argent qui corrompt la noblesse de cœur.",
                presentation_auteur: "L'Abbé Prévost (1697-1763) mène une vie rocambolesque (moine, soldat, faussaire). Son chef-d'œuvre, Manon Lescaut, est aussitôt saisi et condamné au bûcher par la justice pour son complaisant étalage du vice et du crime amoureux.",
                resume_complet: [
                    {partie: "Partie 1 (Chapitres 1 à 6) : Le coup de foudre et les trahisons", texte: "Des Grieux, étudiant modèle, a le coup de foudre à Amiens pour Manon, roturière destinée au couvent. Ils fuient à Paris. Mais Manon a la terreur de la pauvreté. Elle le trompe rapidement avec M. de B... Des Grieux est ramené de force chez son père. Après une repentance austère au séminaire, Manon le séduit à nouveau, le poussant à renier Dieu."},
                    {partie: "Partie 1 (Chapitres 7 à 12) : La bascule dans la criminalité", texte: "Ruinés, ils basculent dans la marge. Des Grieux apprend à tricher aux cartes. Aidés par Lescaut, ils tentent d'escroquer le vieux libertin G...M... Le plan échoue : la police les arrête. Manon est enfermée à l'Hôpital et Des Grieux à Saint-Lazare."},
                    {partie: "Partie 2 (Chapitres 1 à 6) : L'évasion dans le sang", texte: "Des Grieux s'évade de prison avec un pistolet, tuant un portier, puis libère Manon. La spirale infernale reprend : ils tentent d'escroquer le fils de G...M... Arrêtés de nouveau, le père de Des Grieux exige que Manon soit déportée au bagne de Louisiane (Amérique)."},
                    {partie: "Partie 2 (Chapitres 7 à 11) : Rédemption et mort dans le désert", texte: "Ruiné, Des Grieux s'embarque volontairement avec elle. En Amérique, ils trouvent enfin la pureté morale et la fidélité. Mais le neveu du gouverneur convoite Manon. En duel, Des Grieux croit l'avoir tué. Ils fuient dans le désert, où Manon meurt d'épuisement. Des Grieux l'enterre et survit, anéanti."}
                ],
                citations: [
                    {theme: "1. La Fatalité de la Passion", items: [ 
                        {cit: "Elle me parut si charmante que je me trouvai enflammé tout d'un coup.", loc: "Partie 1 (La Rencontre)", analyse: "L'amour n'est pas un sentiment, mais un incendie foudroyant qui annihile la raison." }, 
                        {cit: "Je frémis, comme il arrive lorsqu'on marche la nuit...", loc: "Partie 1 (Évasion du séminaire)", analyse: "Comparaison prémonitoire : la transgression entraîne le héros dans une nuit criminelle." },
                        {cit: "L’amour est une passion innocente.", loc: "Partie 1 (Plaidoirie)", analyse: "L'oxymore argumentatif : la mauvaise foi de Des Grieux tentant de justifier ses vices." },
                        {cit: "J'avais perdu la connaissance de moi-même.", loc: "Partie 1", analyse: "La passion agit comme une aliénation totale de la psychologie classique de l'Honnête homme." },
                        {cit: "Mon âme ne suivit pas la sienne.", loc: "Partie 2 (La mort de Manon)", analyse: "La litote finale la plus célèbre du roman. La survie est une damnation éternelle." }
                    ]},
                    {theme: "2. L'Argent et la Corruption", items: [ 
                        {cit: "Manon était passionnée pour le plaisir ; je l'étais pour elle.", loc: "Partie 1", analyse: "Chiasme cruel révélant l'incompatibilité absolue de leurs buts, unis par le besoin d'argent." },
                        {cit: "Nous mourrons de faim si nous ne faisons de l'argent.", loc: "Partie 1 (Manon)", analyse: "Le cynisme du siècle bourgeois qui brise l'idéalisme romantique du Chevalier." },
                        {cit: "L'or est l'idole des hommes.", loc: "Partie 1 (Des Grieux)", analyse: "Maxime désabusée résumant la force motrice corrompue du Paris du XVIIIe siècle." },
                        {cit: "Je lui trouvais un cœur droit et une conduite honteuse.", loc: "Partie 2", analyse: "L'aveuglement volontaire du narrateur face à la vénalité factuelle de sa maîtresse." },
                        {cit: "Il proposa de se venger de G...M... en le volant.", loc: "Partie 1", analyse: "La transgression bourgeoise justifiée par le ressentiment plutôt que par la nécessité." }
                    ]},
                    {theme: "3. La Transgression et le Crime", items: [
                        {cit: "Je franchis les degrés de la honte sans m'en apercevoir.", loc: "Partie 1", analyse: "La confession de l'ensauvagement moral de l'aristocrate aveuglé." },
                        {cit: "Me lier avec la ligue de l'Industrie.", loc: "Partie 1", analyse: "L'euphémisme pour désigner le syndicat des tricheurs : le vol devient un métier." },
                        {cit: "Je versai le sang de ce malheureux...", loc: "Partie 2 (L'évasion)", analyse: "Le point de non-retour : la noblesse s'abaisse à l'homicide d'un inférieur." },
                        {cit: "Ma foi et mon honneur, tout était sacrifié.", loc: "Partie 1", analyse: "Le renoncement total aux valeurs religieuses et familiales traditionnelles." },
                        {cit: "Il est doux d'escroquer les riches libertins.", loc: "Partie 2", analyse: "La satisfaction amorale de l'arnaqueur qui justifie son vice par celui de ses victimes." }
                    ]},
                    {theme: "4. L'Utopie et la Rédemption", items: [
                        {cit: "L'Amérique nous parut le vrai lieu de notre bonheur.", loc: "Partie 2", analyse: "Le fantasme du Nouveau Monde purificateur, libéré de l'oppression parisienne." },
                        {cit: "Je rompis mon épée, pour m'en servir à creuser.", loc: "Partie 2 (La mort)", analyse: "Le noble détruit le symbole phallique et aristocratique par dénuement absolu." },
                        {cit: "Nos âmes étaient dépouillées des vains ornements...", loc: "Partie 2", analyse: "La rédemption atteinte uniquement par l'anéantissement matériel complet." },
                        {cit: "C'est le Ciel qui me punit.", loc: "Partie 2 (Manon)", analyse: "La conversion morale tardive de la libertine confrontée à la mort." },
                        {cit: "Je ne demandais plus rien à la fortune.", loc: "Partie 2", analyse: "L'ataraxie tragique acquise après l'épuisement total des désirs." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Carmen", source: "P. Mérimée (1845)", citation: "Tu es le diable. — Oui.", analyse: "L'archétype de la femme fatale libre qui entraîne un soldat dans la désertion et le crime." },
                    {titre: "La Dame aux Camélias", source: "Dumas fils (1848)", citation: "Je suis une fille entretenue...", analyse: "La courtisane vénale réhabilitée par son sacrifice amoureux, héritière directe de Manon." },
                    {titre: "Les Liaisons dangereuses", source: "C. de Laclos (1782)", citation: "Conquérir est notre destin.", analyse: "L'amour perverti par les stratégies de destruction et le cynisme de la noblesse." },
                    {titre: "Illusions perdues", source: "H. de Balzac (1837)", citation: "Il faut que la jeunesse s'amuse.", analyse: "La corruption morale d'un idéaliste provincial avalé par les vices de Paris." },
                    {titre: "Lettres Persanes", source: "Montesquieu (1721)", citation: "Les Français ne parlent que d'argent.", analyse: "La critique du système de John Law et de la spéculation qui a ruiné la France à l'époque de Prévost." },
                    {titre: "René", source: "Chateaubriand (1802)", citation: "J'avais un cœur plein de passions...", analyse: "La préfiguration du 'Mal du siècle' romantique à travers la mélancolie des Grieux." }
                ],
                plans: [
                    {type: "Dialectique", sujet: "Ce roman est-il un récit d'une inéluctable dégradation morale ?", parties: [
                        {titre: "I. La chute foudroyante dans le vice et l'illégalité", sous_parties: ["A. La trahison immédiate des idéaux de l'aristocratie (séminaire)", "B. L'acceptation humiliante du proxénétisme et de l'escroquerie", "C. Le basculement vers la criminalité de sang (le meurtre)"]},
                        {titre: "II. Un récit contrebalancé par l'idéalisation de la passion", sous_parties: ["A. L'amour érigé en religion absolue face au divin", "B. La fascination du lecteur pour le couple fusionnel", "C. Le filtre protecteur du récit autobiographique ('Je')"]},
                        {titre: "III. La rédemption finale comme apothéose tragique", sous_parties: ["A. L'exil américain fonctionnant comme un Purgatoire", "B. La sanctification de Manon par sa souffrance", "C. La confession narrative comme acte de pénitence catholique"]}
                    ]},
                    {type: "Thématique", sujet: "En quoi les « plaisirs du romanesque » sont-ils au cœur de l'œuvre ?", parties: [
                        {titre: "I. Un rythme narratif haletant et spectaculaire", sous_parties: ["A. La succession ininterrompue d'évasions rocambolesques", "B. Les enlèvements et les coups de théâtre amoureux", "C. L'absence de longues descriptions statiques"]},
                        {titre: "II. L'attrait esthétique pour la transgression (la Marge)", sous_parties: ["A. La plongée quasi documentaire dans les bas-fonds de Paris", "B. Le charme des personnages marginaux picaresques (Lescaut)", "C. L'observation cynique d'une police corrompue"]},
                        {titre: "III. Le pathos larmoyant et l'exotisme", sous_parties: ["A. La manipulation émotionnelle des pleurs de Des Grieux", "B. L'ouverture cinématographique sur le désert louisianais", "C. La sublime agonie théâtrale sous le sable"]}
                    ]}
                ]
            },
            {
                id: "balzac_peau", 
                titre: "La Peau de chagrin", 
                auteur: "Honoré de Balzac", 
                parcours: "Les romans de l'énergie : création et destruction", 
                mouvementId: "realisme", 
                mouvementNom: "Le Réalisme (et Fantastique)",
                resume_mouvement: "Balzac fonde le réalisme en dépeignant la société post-révolutionnaire avec l'exactitude d'un biologiste (milieux, argent, pouvoir). Cependant, cette œuvre hybride introduit un objet magique oriental pour allégoriser l'autodestruction par le désir.",
                presentation_auteur: "Honoré de Balzac (1799-1850) conçoit 'La Comédie humaine', une fresque de 90 romans classant les espèces sociales. Écrivain acharné (stimulé par des litres de café), il est obsédé par la théorie de l'énergie vitale qui se consume.",
                resume_complet: [
                    {partie: "Partie 1 : Le Talisman (Chapitres 1 à 3)", texte: "Raphaël de Valentin, jeune noble ruiné de 22 ans, s'apprête à se suicider dans la Seine. Il entre par hasard chez un étrange antiquaire qui lui offre un pacte funeste : une Peau de chagrin orientale (un âne sauvage). Cette peau exaucera absolument tous ses désirs ('Vouloir et Pouvoir'), mais à chaque vœu, elle rétrécira, raccourcissant proportionnellement la vie de Raphaël. Ivre de désespoir, il accepte et demande un festin somptueux. Immédiatement invité à une orgie effarante chez le riche Taillefer, il constate le premier rétrécissement de la Peau."},
                    {partie: "Partie 2 : La Femme sans cœur (Chapitres 4 à 8)", texte: "Lors de l'orgie, Raphaël raconte son passé à son ami Émile. Étudiant pauvre, ascète et travailleur, il vivait chichement dans une mansarde, secrètement aimé par la douce Pauline. Mais par ambition mondaine, il est tombé fou amoureux de Foedora, une comtesse riche, splendide mais d'une insensibilité glaciale ('La femme sans cœur', allégorie de la grande société parisienne). Ruiné et humilié par cette passion stérile, il a tout perdu, ce qui l'a mené au suicide."},
                    {partie: "Partie 3 : L'Agonie (Chapitres 9 à 13)", texte: "Devenu immensément riche grâce à la Peau, Raphaël vit cloîtré dans l'angoisse absolue. Pour ne plus rien désirer (et donc ne plus rétrécir la Peau), il s'impose une existence végétative et mécanique, confiant ses décisions à son majordome. Mais il retrouve Pauline, devenue riche, et cède à l'amour. La Peau fond à vue d'œil. Pris de panique, il consulte savants, physiciens et médecins pour étirer la peau, en vain. Dans un accès ultime de folie et de désir pour Pauline, il meurt foudroyé en mordant son épaule, la Peau réduite à néant."}
                ],
                citations: [
                    {theme: "1. Le Pacte Fantastique et le Désir", items: [ 
                        {cit: "Si tu me possèdes, tu posséderas tout, mais ta vie m'appartiendra.", loc: "L'inscription sur la Peau", analyse: "Le contrat faustien : l'incompatibilité tragique entre la réalisation de ses rêves et la survie temporelle." },
                        {cit: "VOULOIR nous brûle et POUVOIR nous détruit ; mais SAVOIR laisse notre faible organisation dans un perpétuel état de calme.", loc: "Le Talisman (L'Antiquaire)", analyse: "La thèse philosophique de Balzac : seule l'ataraxie (l'absence de passion) garantit la longévité." },
                        {cit: "Je veux vivre avec excès !", loc: "Le Talisman (Raphaël)", analyse: "L'hybris de la jeunesse romantique, préférant une incandescence brève à une vie médiocre et longue." },
                        {cit: "À chaque vouloir, je décroîtrai comme tes jours.", loc: "L'inscription sur la Peau", analyse: "La matérialisation physique terrifiante du temps qui s'écoule, mesurable au millimètre." },
                        {cit: "Il tenait le monde, il le pouvait, mais il ne le voulait plus.", loc: "L'Agonie", analyse: "Le paradoxe destructeur : la toute-puissance condamne le héros à l'apathie absolue par peur de mourir." }
                    ]},
                    {theme: "2. La Critique de la Société et de Foedora", items: [ 
                        {cit: "Foedora, c’était la société.", loc: "La Femme sans cœur", analyse: "L'allégorie féroce : la comtesse incarne l'égoïsme, la vanité et la froideur assassine de Paris." },
                        {cit: "L'argent est la religion de cette société.", loc: "Le Talisman", analyse: "Le diagnostic marxiste de Balzac : le veau d'or a remplacé toutes les valeurs spirituelles et nobles." },
                        {cit: "Nous sommes l'époque de la matière.", loc: "L'Agonie (Raphaël)", analyse: "La dénonciation de l'ère industrielle qui assèche l'âme au profit du capital." },
                        {cit: "Elle se laissait adorer, mais elle ne se donnait pas.", loc: "La Femme sans cœur", analyse: "La perversion du désir mondain : la séduction n'est qu'un exercice de pouvoir sadique, sans amour." },
                        {cit: "Un gouffre de richesses et de vices.", loc: "Le Talisman", analyse: "La description de Paris comme une Babylone moderne avalant l'énergie des jeunes idéalistes." }
                    ]},
                    {theme: "3. La Science Dépassée par l'Inconnu", items: [
                        {cit: "Les savants étaient devenus de véritables enfants.", loc: "L'Agonie", analyse: "La faillite de la science rationaliste du XIXe siècle (chimistes, mécaniciens) face au surnaturel." },
                        {cit: "Une force inconnue, supérieure à la matière.", loc: "L'Agonie", analyse: "La reconnaissance, au cœur du roman réaliste, de mystères métaphysiques indéchiffrables." },
                        {cit: "La médecine est une science conjecturale.", loc: "L'Agonie", analyse: "La satire féroce des médecins, héritée de Molière, qui s'écharpent sur le corps de Raphaël sans rien comprendre." },
                        {cit: "Ils mesuraient l'impossible avec leurs compas.", loc: "L'Agonie", analyse: "La vanité du scientisme face au destin et aux forces occultes qui régissent l'humain." },
                        {cit: "La presse hydraulique ne l'aplatit pas d'un cheveu.", loc: "L'Agonie", analyse: "L'échec de l'hyper-technologie face à la dimension sacrée et occulte de la Peau de chagrin." }
                    ]},
                    {theme: "4. L'Agonie et l'Énergie vitale", items: [
                        {cit: "Il vécut comme un automate.", loc: "L'Agonie", analyse: "La mort psychologique qui précède la mort physique : l'absence de désir est une zombification." },
                        {cit: "Pauline, je t'aime et je meurs !", loc: "L'Agonie (Raphaël)", analyse: "L'équation tragique balzacienne : l'amour véritable (le don de soi) est l'ultime combustion mortelle." },
                        {cit: "Il fixait la Peau avec des yeux de fou.", loc: "L'Agonie", analyse: "L'obsession morbide qui remplace toute joie de vivre, illustrant la tyrannie du temps." },
                        {cit: "Sa vie s'échappait par ses regards.", loc: "L'Agonie", analyse: "La théorie des fluides de Balzac : l'énergie de l'individu se dissipe dans chaque expression de son désir." },
                        {cit: "Le moribond mordit le sein de Pauline.", loc: "L'Agonie (La mort)", analyse: "Le retour à l'animalité féroce lors de l'agonie, le désir amoureux se transformant en acte de destruction barbare." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Le Portrait de Dorian Gray", source: "O. Wilde (1890)", citation: "S'il était possible que je reste éternellement jeune, et que ce portrait vieillisse à ma place !", analyse: "Le motif parallèle du transfert magique de l'âme et de la corruption sur un objet matériel." },
                    {titre: "Faust", source: "J. W. von Goethe (1808)", citation: "J'ai étudié hélas ! la philosophie... et me voilà tout aussi sot qu'auparavant.", analyse: "L'archétype du pacte diabolique : l'intellectuel vendant son âme pour accéder à l'expérience charnelle et totale du monde." },
                    {titre: "Illusions perdues", source: "H. de Balzac (1837)", citation: "L'énergie de Lucien se heurta à la muraille d'argent de Paris.", analyse: "Le pendant purement réaliste de La Peau de Chagrin, montrant comment la société broie les jeunes ambitieux." },
                    {titre: "L'Assommoir", source: "É. Zola (1877)", citation: "L'alambic, avec ses sueurs d'alcool...", analyse: "L'alambic de Zola fonctionne comme la Peau de Balzac : une entité quasi-magique qui absorbe la vie des personnages." },
                    {titre: "Madame Bovary", source: "G. Flaubert (1857)", citation: "Elle désirait mourir ou habiter Paris.", analyse: "La même maladie du désir (le bovarysme) qui consume le personnage face à une réalité insatisfaisante." },
                    {titre: "Spleen LXXVIII", source: "C. Baudelaire (1857)", citation: "Le Temps mange la vie.", analyse: "L'angoisse poétique métaphorisée par la Peau balzacienne qui fond inexorablement avec les jours." }
                ],
                plans: [
                    {type: "Dialectique", sujet: "La Peau de chagrin est-il un roman fantastique ou une étude sociale réaliste ?", parties: [
                        {titre: "I. L'omniprésence du surnaturel et du pacte infernal", sous_parties: ["A. Le talisman oriental échappant aux lois physiques", "B. La réalisation instantanée et miraculeuse des vœux", "C. L'ambiance occulte de l'antiquaire (figure méphistophélique)"]},
                        {titre: "II. Une peinture chirurgicale de la société de la Restauration", sous_parties: ["A. L'analyse minutieuse de la misère étudiante (la mansarde)", "B. Le portrait au vitriol de la haute bourgeoisie (Taillefer, Foedora)", "C. La critique du pouvoir écrasant des banquiers et journalistes"]},
                        {titre: "III. Le fantastique comme allégorie de la condition humaine", sous_parties: ["A. La Peau, métaphore matérielle de notre capital d'énergie vitale", "B. La dénonciation de la faillite des sciences modernes", "C. La fusion des genres pour illustrer la tragédie du Désir universel"]}
                    ]},
                    {type: "Thématique", sujet: "Analysez la thématique de la destruction par l'énergie dans le roman.", parties: [
                        {titre: "I. Le constat philosophique : Vouloir vs Savoir", sous_parties: ["A. L'enseignement stoïque de l'antiquaire ignoré par la jeunesse", "B. Le désespoir du désir inassouvi qui mène Raphaël au suicide", "C. L'orgie comme symbole d'une combustion accélérée des sens"]},
                        {titre: "II. L'enfermement dans l'apathie pour survivre", sous_parties: ["A. Le renoncement forcé à toute émotion (mécanisation de la vie)", "B. La terreur panique face au moindre souhait involontaire", "C. L'absurdité du pouvoir absolu dont on ne peut se servir"]},
                        {titre: "III. Le paroxysme final : l'amour fatal", sous_parties: ["A. La réapparition de Pauline rallumant la flamme interdite", "B. L'accélération vertigineuse du rétrécissement de la Peau", "C. La morsure bestiale finale : la victoire écrasante du Désir sur la vie"]}
                    ]},
                    {type: "Thématique", sujet: "Que représente le personnage de Foedora dans l'architecture du roman ?", parties: [
                        {titre: "I. Le symbole de la mondanité parisienne idéalisée", sous_parties: ["A. Le sommet de la richesse, de l'élégance et de la séduction", "B. La projection de toutes les illusions romantiques de Raphaël", "C. L'attrait magnétique des salons pour la jeunesse ambitieuse"]},
                        {titre: "II. 'La Femme sans cœur' : une entité prédatrice", sous_parties: ["A. La froideur manipulatrice d'une coquette qui ne se donne jamais", "B. Le plaisir narcissique de ruiner moralement ses prétendants", "C. La métaphore d'une société capitaliste dénuée d'empathie"]},
                        {titre: "III. Le contrepoint symétrique de Pauline", sous_parties: ["A. L'antithèse absolue : la pureté désintéressée face au vice doré", "B. Le rachat impossible de Raphaël corrompu par son passage chez Foedora", "C. L'échec des deux voies (froideur ou passion) face à la loi de la Peau"]}
                    ]}
                ]
            },
            {
                id: "colette_sido", 
                titre: "Sido suivi de Les Vrilles de la vigne", 
                auteur: "Colette", 
                parcours: "La célébration du monde", 
                mouvementId: "symbolisme", 
                mouvementNom: "XXe siècle / Modernité poétique",
                resume_mouvement: "Une écriture inclassable, organique et sensuelle, affranchie des écoles classiques. Elle brouille la frontière entre autobiographie, poésie en prose et roman, célébrant l'instinct, la nature et l'émancipation féminine face au patriarcat.",
                presentation_auteur: "Sidonie-Gabrielle Colette (1873-1954). Écrivaine libre et scandaleuse pour son époque. Longtemps exploitée par son mari Willy (qui signait ses premiers livres), elle prend son envol par le music-hall et crée une œuvre magistrale centrée sur la chair, l'enfance et sa mère, Sido.",
                resume_complet: [
                    {partie: "Sido - Partie 1 : 'Sido'", texte: "Colette dresse un portrait quasi mythologique de sa mère, Sidonie. Sido est la prêtresse du jardin familial en Bourgogne, une femme puissante, connectée aux forces telluriques, capable de lire le temps dans la couleur du ciel et de commander aux plantes. Elle incarne la liberté absolue et l'amour pur de la création."},
                    {partie: "Sido - Partie 2 & 3 : Le Capitaine et Les Sauvages", texte: "Portrait tendre et mélancolique du père, le Capitaine Colette, amputé de guerre et poète frustré dont la bibliothèque cache des cahiers vides. Puis, évocation de ses frères et sœur (les 'sauvages'), des êtres marginaux, inadaptés au monde social, vivant dans leur bulle musicale ou fantaisiste."},
                    {partie: "Les Vrilles de la vigne (Recueil de courtes nouvelles)", texte: "Ensemble de chroniques où Colette, désormais adulte et séparée de Willy, affirme son indépendance à Paris. Le texte d'ouverture donne la clé : comme la vigne qui rompt les liens qui l'attachent, l'écrivaine célèbre sa liberté retrouvée, son amour pour la mer (la Baie de Somme), les animaux (ses chiens, Toby-Chien), et son corps de femme affranchie du regard masculin."}
                ],
                citations: [
                    {theme: "1. La Figure Maternelle et Solaire de Sido", items: [ 
                        {cit: "Elle était le centre de notre système solaire.", loc: "Sido", analyse: "Métaphore cosmique divinisant la mère comme source absolue de vie et de chaleur." },
                        {cit: "Regarde !", loc: "Sido", analyse: "L'injonction maternelle fondamentale : l'héritage de Sido n'est pas matériel, c'est l'apprentissage du regard poétique sur le monde." },
                        {cit: "Sido, qui savait le langage des bêtes et des plantes...", loc: "Sido", analyse: "La figure de la chamane ou prêtresse panthéiste, en communication directe avec les mystères du vivant." },
                        {cit: "Elle n'a jamais rien possédé en propre.", loc: "Sido", analyse: "Le détachement matériel noble d'une femme qui ne tire sa richesse que de son lien spirituel à la terre." },
                        {cit: "Je la chante de mon mieux.", loc: "Sido", analyse: "L'acte d'écriture assumé comme une liturgie, un hymne lyrique de la fille voué à immortaliser la mère." }
                    ]},
                    {theme: "2. La Célébration Sensuelle de la Nature", items: [ 
                        {cit: "J'appartiens à un pays que j'ai quitté.", loc: "Sido", analyse: "La nostalgie fondatrice du paradis perdu de l'enfance bourguignonne (Saint-Sauveur-en-Puisaye)." },
                        {cit: "Le parfum écrasant du muguet en fleurs.", loc: "Sido", analyse: "L'écriture de la sensation : la synesthésie olfactive domine pour recréer physiquement le souvenir." },
                        {cit: "Ô vent, vent salé, vent du large...", loc: "Les Vrilles de la vigne", analyse: "Apostrophe lyrique et anaphore : la nature sauvage (la mer) comme force purificatrice de l'âme." },
                        {cit: "Une gelée blanche et crissante.", loc: "Sido", analyse: "L'hyper-précision du vocabulaire matériel (ici sonore et tactile) pour faire exister la province." },
                        {cit: "J'ai vu se lever le jour rose et mouillé.", loc: "Les Vrilles de la vigne", analyse: "La personnification érotisée de l'aube, traduisant l'hédonisme permanent de l'auteure." }
                    ]},
                    {theme: "3. L'Émancipation et le Mythe des Vrilles", items: [
                        {cit: "Je ne veux plus me marier, je veux être libre !", loc: "Les Vrilles de la vigne", analyse: "Le cri du cœur féministe rejetant l'aliénation conjugale (son mariage avec Willy)." },
                        {cit: "La vigne a rompu ses vrilles, je suis libre.", loc: "Les Vrilles (Préface)", analyse: "L'allégorie végétale centrale : la douleur de la rupture amoureuse est le prix de la libération artistique." },
                        {cit: "Je veux faire ce que je veux.", loc: "Les Vrilles de la vigne", analyse: "L'impertinence enfantine érigée en philosophie de vie adulte absolue." },
                        {cit: "C'est de moi-même que je tire ma force.", loc: "Les Vrilles de la vigne", analyse: "L'autonomie ontologique revendiquée, refusant le mythe romantique de la femme dépendante." },
                        {cit: "Je regarde mon corps dans le miroir avec une sorte de respect sauvage.", loc: "Les Vrilles", analyse: "La réappropriation de son propre corps féminin, soustrait au regard désirant et jugeant des hommes." }
                    ]},
                    {theme: "4. L'Envers de la Joie : La Mélancolie et la Fuite du Temps", items: [
                        {cit: "C'était un poète silencieux.", loc: "Sido (Le Capitaine)", analyse: "L'hommage douloureux à la figure tragique du père, amputé de ses mots." },
                        {cit: "Les cahiers blancs de mon père.", loc: "Sido", analyse: "Le symbole glaçant de l'œuvre avortée, que Colette rachètera en devenant écrivaine à sa place." },
                        {cit: "Nous étions des sauvages, inadaptés au monde.", loc: "Sido (Les Frères)", analyse: "La fierté de la marginalité familiale, inadaptée aux exigences de la comédie sociale." },
                        {cit: "Le temps passe, le temps s'écoule, irréparable.", loc: "Les Vrilles de la vigne", analyse: "Le topos lyrique du <em>Tempus fugit</em>, adouci par la contemplation de la nature éternelle." },
                        {cit: "Je n'ai pas fini d'être triste.", loc: "Les Vrilles de la vigne", analyse: "Le constat lucide que l'émancipation (les vrilles rompues) n'efface pas la morsure de la solitude." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Les Confessions", source: "J-J. Rousseau (1782)", citation: "Je me rappelle ces jours heureux de mon enfance...", analyse: "L'invention de l'autobiographie moderne et de la nostalgie du paradis naturel que Colette poursuit." },
                    {titre: "Du côté de chez Swann", source: "M. Proust (1913)", citation: "L'odeur de la madeleine trempée dans le thé...", analyse: "L'importance fondamentale de la sensation matérielle et olfactive (la mémoire involontaire) pour ressusciter le temps perdu." },
                    {titre: "Correspondances", source: "C. Baudelaire (1857)", citation: "Les parfums, les couleurs et les sons se répondent.", analyse: "La poésie des synesthésies que Colette applique à la lettre dans ses descriptions de jardins." },
                    {titre: "La Mare au diable", source: "G. Sand (1846)", citation: "La nature est un immense livre...", analyse: "La célébration de la province rurale par une auteure femme affranchie des salons parisiens." },
                    {titre: "Mes forêts", source: "H. Dorion (2021)", citation: "Mes forêts sont des miroirs...", analyse: "L'écho contemporain : le lien viscéral, corporel et quasi maternel tissé entre la femme et le monde végétal." },
                    {titre: "Le Parti pris des choses", source: "F. Ponge (1942)", citation: "Le monde muet est notre patrie.", analyse: "L'attention microscopique portée aux choses triviales de la nature, que Sido pratiquait intuitivement." }
                ],
                plans: [
                    {type: "Dialectique", sujet: "L'écriture de Colette est-elle une simple nostalgie de l'enfance ?", parties: [
                        {titre: "I. L'évocation émerveillée du paradis provincial", sous_parties: ["A. La sanctification du jardin de Saint-Sauveur", "B. La mythologie familiale (Sido, les Sauvages, le Capitaine)", "C. La reconstruction du passé par l'hyper-sensorialité (odeurs, couleurs)"]},
                        {titre: "II. Une œuvre profondément adulte et transgressive (Les Vrilles)", sous_parties: ["A. L'apologie féroce de l'indépendance féminine face au patriarcat", "B. L'exploration crue du désir corporel, du deuil amoureux et de la solitude", "C. La réflexion sur son propre statut d'artiste de music-hall marginale"]},
                        {titre: "III. La fusion des deux : une 'Célébration du monde' réparatrice", sous_parties: ["A. L'héritage de Sido : appliquer le regard de l'enfance au monde adulte", "B. La rédemption de l'échec paternel par la victoire de la fille-écrivaine", "C. La poésie organique comme victoire absolue sur la fuite du temps"]}
                    ]},
                    {type: "Thématique", sujet: "Analysez la fonction de l'allégorie animale et végétale dans l'œuvre.", parties: [
                        {titre: "I. Le végétal comme grille de lecture de l'humain", sous_parties: ["A. La vigne ligotée : puissant symbole de l'enfermement conjugal destructeur", "B. La rupture volontaire des vrilles illustrant l'émancipation vitale douloureuse", "C. L'enracinement à la terre perçu comme garantie de survie morale"]},
                        {titre: "II. Le bestiaire de la sincérité", sous_parties: ["A. Le dialogue direct avec l'animal (Toby-Chien, le chat) comme substitut social", "B. La bête comme double lucide, innocent et bienveillant de la narratrice", "C. La supériorité de l'instinct animal pur face aux hypocrisies parisiennes"]},
                        {titre: "III. Un monde poétiquement décloisonné", sous_parties: ["A. Les humains caractérisés systématiquement par des traits animaux (le père, la mère)", "B. La nature personnifiée qui respire, agit et juge (le vent, l'aube)", "C. L'aboutissement stylistique d'une écriture panthéiste inclassable"]}
                    ]}
                ]
            }
        ],

        idees: [
            {
                id: "laboetie_servitude", 
                titre: "Discours de la servitude volontaire", 
                auteur: "Étienne de La Boétie", 
                parcours: "« Défendre » et « entretenir » la liberté", 
                mouvementId: "humanisme", 
                mouvementNom: "L'Humanisme",
                resume_mouvement: "Vaste mouvement de la Renaissance remettant l'Homme au centre de la philosophie. Face aux tyrannies, l'humanisme prône la liberté naturelle de l'individu, l'esprit critique nourri par l'Antiquité et le refus des dominations aveugles.",
                presentation_auteur: "Étienne de La Boétie (1530-1563) est un jeune magistrat humaniste et l'ami spirituel de Montaigne. Il écrit ce texte fulgurant vers 16 ou 18 ans. Il y analyse non pas le tyran, mais le peuple qui accepte l'oppression, posant les bases de l'insoumission politique.",
                resume_complet: [
                    {partie: "Partie 1 : Le mystère et le scandale de la servitude", texte: "La Boétie part d'un constat effarant : comment se fait-il que des millions d'hommes obéissent docilement à un seul tyran, souvent lâche et chétif ? Il démontre que la tyrannie ne repose pas sur la force militaire du despote, mais sur le consentement passif du peuple. C'est le peuple lui-même qui forge ses propres chaînes et se coupe la gorge."},
                    {partie: "Partie 2 : La nature humaine et la force de la Coutume", texte: "L'auteur affirme que la liberté est inscrite dans l'état de Nature. Si nous sommes naturellement libres et égaux, pourquoi obéir ? La première cause de la servitude est l'habitude (la coutume). Les hommes nés sous le joug ne connaissent pas la liberté et prennent leur esclavage pour l'état naturel. La Boétie appelle à briser ce conditionnement psychologique."},
                    {partie: "Partie 3 : Les stratégies de domination et la pyramide du tyran", texte: "Le tyran 'entretient' la servitude par plusieurs ruses : l'abêtissement du peuple par les jeux et plaisirs (le pain et les jeux), l'utilisation du sacré (se faire passer pour divin), et surtout la corruption. Il crée une pyramide de complices : six favoris dominent six cents hommes, qui en dominent six mille par intérêt financier. La chute du tyran ne nécessite pas d'armes : 'Soyez résolus de ne servir plus, et vous voilà libres'."}
                ],
                citations: [
                    {theme: "1. L'Énigme et le Paradoxe de la Servitude", items: [ 
                        {cit: "C'est le peuple qui s'asservit, qui se coupe la gorge.", loc: "Partie 1", analyse: "La thèse centrale révolutionnaire : la domination politique est un suicide volontaire de la masse." },
                        {cit: "Ils ne sont grands que parce que nous sommes à genoux.", loc: "Partie 1", analyse: "L'image allégorique puissante illustrant la relativité du pouvoir, dépendant uniquement de la posture du sujet." },
                        {cit: "Il est incroyable de voir comme le peuple, dès qu'il est assujetti, tombe soudain dans un tel et si profond oubli de la franchise.", loc: "Partie 2", analyse: "L'effroi du philosophe devant l'amnésie collective et la rapidité de la perte de dignité." },
                        {cit: "Comment il se peut faire que tant d'hommes... souffrent un tyran seul, qui n'a de puissance que celle qu'ils lui donnent ?", loc: "Partie 1", analyse: "La question rhétorique fondatrice qui ouvre l'œuvre et l'histoire de la pensée politique." },
                        {cit: "Vous vous affaiblissez afin qu'il soit plus fort.", loc: "Partie 1", analyse: "Le chiasme conceptuel montrant le transfert d'énergie vitale du peuple vers son bourreau." }
                    ]},
                    {theme: "2. Les Armes du Tyran et la Ruse", items: [ 
                        {cit: "Les théâtres, les jeux, les farces... étaient pour les peuples anciens les appâts de la servitude.", loc: "Partie 3", analyse: "La dénonciation féroce de la culture du divertissement (le 'pain et les jeux') comme outil d'abrutissement politique." },
                        {cit: "Le ressort et le secret de la domination, le soutien et le fondement de la tyrannie... c'est qu'il y a toujours quatre ou cinq hommes qui soutiennent le tyran.", loc: "Partie 3", analyse: "La théorie de la chaîne de complicité : la tyrannie est un système oligarchique structuré par l'avidité matérielle." },
                        {cit: "Ils veulent se faire obéir par la religion et la superstition.", loc: "Partie 3", analyse: "La critique (pré-Lumières) de la mystification théocratique utilisée pour sacraliser le pouvoir absolu." },
                        {cit: "Les tyrans faisaient largesse d'un quart de blé... et c'était pitié d'entendre crier : Vive le Roi !", loc: "Partie 3", analyse: "L'ironie cruelle sur la docilité du peuple qui remercie le maître pour lui rendre une infime partie de ce qu'il a volé." },
                        {cit: "Ils emploient la ruse avant la force.", loc: "Partie 3", analyse: "La lucidité machiavélienne : la manipulation psychologique est plus efficace que la contrainte militaire." }
                    ]},
                    {theme: "3. La Liberté Naturelle et la Coutume", items: [
                        {cit: "La première raison de la servitude volontaire, c'est la coutume.", loc: "Partie 2", analyse: "L'analyse sociologique de l'habitude : le conditionnement éducatif efface l'instinct de liberté." },
                        {cit: "Si nous vivions avec les droits que la nature nous a donnés... nous serions naturellement obéissants aux parents, sujets à la raison, et serfs de personne.", loc: "Partie 2", analyse: "L'idéal humaniste de l'égalité originelle, opposant les lois de la nature à l'aliénation de la monarchie." },
                        {cit: "La nature, la ministre de Dieu... nous a tous faits de même forme.", loc: "Partie 2", analyse: "Le fondement théologique de l'égalité : l'oppression est une hérésie contre la création divine." },
                        {cit: "On ne regrette jamais ce qu'on n'a jamais eu.", loc: "Partie 2", analyse: "La mécanique de l'aliénation intergénérationnelle justifiant l'inaction des peuples colonisés ou soumis de naissance." },
                        {cit: "La liberté est entièrement perdue, et on ne peut la recouvrer qu'en la désirant.", loc: "Partie 1", analyse: "Le passage à l'acte philosophique : l'émancipation est avant tout une volonté intérieure." }
                    ]},
                    {theme: "4. L'Action : Désobéissance et Amitié", items: [
                        {cit: "Soyez résolus de ne servir plus, et vous voilà libres.", loc: "Partie 1", analyse: "La célèbre injonction révolutionnaire fondant le principe de la désobéissance civile non violente." },
                        {cit: "Je ne veux pas que vous le poussiez ni l'ébranliez, mais seulement ne le soutenez plus.", loc: "Partie 1", analyse: "L'incroyable économie de moyens : la chute du despote passe par l'inertie et le retrait du consentement." },
                        {cit: "Entre les méchants, il n'y a pas d'amitié, il y a de la crainte.", loc: "Partie 3", analyse: "La dimension philosophique de l'amour : la vraie fraternité (comme celle avec Montaigne) est impossible dans un système de pouvoir." },
                        {cit: "Le tyran n'est jamais aimé ni n'aime.", loc: "Partie 3", analyse: "Le châtiment moral ultime de l'oppresseur, condamné à la paranoïa et à la solitude absolue." },
                        {cit: "Apprenons donc quelque fois, apprenons à bien faire.", loc: "Conclusion", analyse: "L'appel final humaniste à l'élévation intellectuelle de l'âme pour fuir l'ignominie." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Les Essais (De l'amitié)", source: "Montaigne (1580)", citation: "Parce que c'était lui, parce que c'était moi.", analyse: "La consécration de l'amitié fusionnelle et libre, exacte antithèse de la relation de pouvoir décrite par La Boétie." },
                    {titre: "Le Prince", source: "N. Machiavel (1532)", citation: "Il est plus sûr d'être craint que d'être aimé.", analyse: "Le manuel de la domination politique auquel La Boétie répond en déconstruisant les mécanismes du tyran." },
                    {titre: "Du Contrat Social", source: "J-J. Rousseau (1762)", citation: "L'homme est né libre, et partout il est dans les fers.", analyse: "L'héritage direct des Lumières qui transformera le cri de La Boétie en théorie démocratique." },
                    {titre: "Rhinocéros", source: "E. Ionesco (1959)", citation: "Je ne capitule pas !", analyse: "Le triomphe de la servitude volontaire moderne (le conformisme totalitaire) face à un homme qui refuse de 'servir'." },
                    {titre: "1984", source: "G. Orwell (1949)", citation: "La liberté, c'est la servitude.", analyse: "La mise en application glaçante des théories de La Boétie : l'abrutissement et l'inversion du langage par l'État (Big Brother)." },
                    {titre: "La Désobéissance civile", source: "H. D. Thoreau (1849)", citation: "Je ne suis pas né pour être forcé.", analyse: "Le prolongement du refus d'obéir qui inspirera Gandhi et Martin Luther King." }
                ],
                plans: [
                    {type: "Dialectique", sujet: "Le Discours est-il seulement une attaque contre la figure du tyran ?", parties: [
                        {titre: "I. Une dénonciation évidente des mécanismes de l'oppression", sous_parties: ["A. La description chirurgicale des tares du pouvoir absolu (cruauté, peur)", "B. La déconstruction des ruses du tyran (jeux, religion, apparences)", "C. Le réquisitoire contre la corruption d'une oligarchie pyramidale"]},
                        {titre: "II. Une analyse audacieuse de la lâcheté et de la passivité du peuple", sous_parties: ["A. Le concept provocateur de 'servitude volontaire' (oxymore politique)", "B. Le rôle aliénant de la coutume et de l'oubli de la liberté originelle", "C. La critique de la complaisance des courtisans aveuglés par le profit"]},
                        {titre: "III. Un appel intemporel à l'émancipation par l'intelligence (Humanisme)", sous_parties: ["A. L'affirmation du droit naturel et universel à la liberté", "B. La puissance de l'inertie ('Soyez résolus de ne servir plus')", "C. L'amitié désintéressée comme ultime rempart démocratique"]}
                    ]},
                    {type: "Thématique", sujet: "Analysez comment l'œuvre explique la pérennité et le maintien de la servitude.", parties: [
                        {titre: "I. Le conditionnement psychologique et temporel", sous_parties: ["A. La naissance sous le joug (l'ignorance de l'état naturel libre)", "B. L'habitude qui s'enracine ('la coutume') et paralyse l'instinct de rébellion", "C. La transformation de la lâcheté en une fausse fatalité rassurante"]},
                        {titre: "II. Les stratégies de manipulation massive ('Entretenir')", sous_parties: ["A. L'abrutissement par le loisir (théâtres, jeux, banquets)", "B. Le contrôle par l'idéologie et le sacré (l'usurpation religieuse)", "C. La distribution de miettes ('le quart de blé') pour simuler la générosité"]},
                        {titre: "III. Le verrouillage par la complicité structurelle", sous_parties: ["A. Le réseau d'intérêts (la chaîne des millions de petits tyrans)", "B. L'appât du gain matériel qui détruit toute moralité", "C. La destruction systématique de la fraternité et de la solidarité"]}
                    ]},
                    {type: "Thématique", sujet: "En quoi la notion de « liberté » défendue par La Boétie est-elle d'essence humaniste ?", parties: [
                        {titre: "I. Une loi naturelle et universelle inaliénable", sous_parties: ["A. L'égalité de tous les hommes certifiée par la création divine/Nature", "B. La liberté comme bien supérieur à la vie elle-même", "C. L'argumentation nourrie par l'érudition et les exemples de l'Antiquité"]},
                        {titre: "II. La primauté de la raison sur la force", sous_parties: ["A. Le refus de la rébellion sanglante au profit d'un éveil des consciences", "B. Le combat gagné par le simple 'désir' intellectuel de ne plus obéir", "C. L'instruction ('les gens bien nés') comme vaccin contre la crédulité"]},
                        {titre: "III. La fraternité (l'Amitié) comme socle social", sous_parties: ["A. L'opposition entre l'amour vrai et la peur tyrannique", "B. La solidarité humaine pour contrecarrer la concurrence courtisane", "C. Un texte préparant le terrain des grandes constitutions démocratiques futures"]}
                    ]}
                ]
            },
            {
                id: "fontenelle_mondes", 
                titre: "Entretiens sur la pluralité des mondes", 
                auteur: "Bernard de Fontenelle", 
                parcours: "Le goût de la science", 
                mouvementId: "lumieres", 
                mouvementNom: "Pré-Lumières",
                resume_mouvement: "Situé au carrefour du XVIIe classique et du XVIIIe philosophique. C'est l'aube des Lumières : la curiosité scientifique remplace les dogmes, la méthode de Descartes triomphe, et le savoir sort des universités pour investir les salons.",
                presentation_auteur: "Bernard Le Bouyer de Fontenelle (1657-1757) est le grand vulgarisateur scientifique de son époque. Neveu de Corneille, esprit brillant et mondain, il décide de rendre l'astronomie de Copernic et Descartes accessible à tous, notamment aux femmes, en mêlant science et galanterie.",
                resume_complet: [
                    {partie: "Premier Soir : La fin du géocentrisme", texte: "Dans le parc d'un château, le Narrateur philosophe se promène au clair de lune avec une Marquise élégante et curieuse. Il lui annonce une révolution effrayante mais fascinante : la Terre n'est pas le centre de l'Univers. Il lui explique le système héliocentrique de Copernic (la Terre tourne sur elle-même et autour du Soleil) avec pédagogie et humour."},
                    {partie: "Deuxième et Troisième Soirs : La Lune et le vivant", texte: "Le Narrateur pousse l'hypothèse audacieuse : si la Terre est une planète banale, alors la Lune est aussi une Terre, et elle est probablement habitée par des Sélénites. La Marquise, d'abord choquée par cette atteinte aux dogmes bibliques, se laisse séduire par le vertige de l'imagination scientifique. Le savoir devient une source de plaisir et de rêve poétique."},
                    {partie: "Quatrième et Cinquième Soirs : Vénus, Mercure et l'infini", texte: "L'exploration du système solaire continue. Le Narrateur décrit les conditions de vie imaginaires sur les planètes lointaines (les glaces de Saturne, la chaleur de Vénus) adaptées à leurs habitants. Au cinquième soir, il frappe le grand coup : les étoiles sont d'autres soleils avec leurs propres planètes, ouvrant sur un vertige métaphysique : l'univers est infini."},
                    {partie: "Sixième Soir (Édition tardive) : Le triomphe de la méthode", texte: "La Marquise, désormais 'savante', maîtrise le raisonnement scientifique. Fontenelle achève son entreprise de vulgarisation : l'humanité, devenue minuscule face à l'infini cosmique, retrouve sa grandeur par l'exercice de la Raison. La science a terrassé la peur et les superstitions."}
                ],
                citations: [
                    {theme: "1. La Vulgarisation et le Goût de la Science", items: [ 
                        {cit: "J'ai voulu traiter la philosophie d'une manière qui ne fut point du tout philosophique.", loc: "Préface", analyse: "La déclaration d'intention révolutionnaire : l'abstraction universitaire est remplacée par la légèreté pour attirer un nouveau public." },
                        {cit: "Je ne vous demande que la même application qu'il faut donner à La Princesse de Clèves.", loc: "Préface", analyse: "Le nivellement assumé : l'astronomie n'est pas plus dure à comprendre que les intrigues de l'amour romanesque." },
                        {cit: "La Nature est une grande scène de théâtre.", loc: "Premier Soir", analyse: "La métaphore baroque pour expliquer la mécanique céleste : le scientifique découvre les poulies (lois physiques) cachées derrière le décor." },
                        {cit: "Vous m'avez fait un plaisir extrême de me l'apprendre.", loc: "Troisième Soir (La Marquise)", analyse: "Le triomphe de la méthode : l'acquisition du savoir provoque une jouissance intellectuelle joyeuse (le 'goût')." },
                        {cit: "L'ignorance est le seul mal à craindre.", loc: "Cinquième Soir", analyse: "L'idéal des Lumières en germe : la connaissance comme unique antidote aux peurs humaines." }
                    ]},
                    {theme: "2. La Chute de l'Anthropocentrisme (Copernic)", items: [ 
                        {cit: "Nous sommes sur une planète qui tourne, et nous ne nous en apercevons pas.", loc: "Premier Soir", analyse: "Le vertige cartésien de la relativité : la sensation (l'immobilité de la Terre) est une illusion contredite par la raison." },
                        {cit: "La Terre n'est plus le centre du monde.", loc: "Premier Soir", analyse: "Le scandale cosmologique et religieux affirmé avec une tranquillité déconcertante." },
                        {cit: "Le Soleil est au centre... tout est en ordre.", loc: "Premier Soir", analyse: "La glorification de la rationalité héliocentrique qui remplace le chaos divin complexe par la simplicité physique." },
                        {cit: "Notre vanité veut absolument que tout soit fait pour nous.", loc: "Deuxième Soir", analyse: "L'attaque psychologique contre l'orgueil humain, ridicule face à l'immensité de la galaxie." },
                        {cit: "Nous ne sommes qu'un petit point dans l'univers.", loc: "Cinquième Soir", analyse: "La réduction vertigineuse (rappelant Pascal) de la Terre à un détail insignifiant." }
                    ]},
                    {theme: "3. L'Imagination et la Pluralité des Mondes", items: [
                        {cit: "Je veux bien que la lune soit habitée.", loc: "Deuxième Soir (La Marquise)", analyse: "L'adhésion par l'imagination poétique : la science-fiction naît comme argument philosophique." },
                        {cit: "Chaque étoile est un soleil qui éclaire d'autres mondes.", loc: "Cinquième Soir", analyse: "L'affirmation d'une multiplicité infinie qui détruit le récit biblique de la Création unique." },
                        {cit: "Il y a partout des créatures...", loc: "Troisième Soir", analyse: "Le principe de l'uniformité de la nature : ce qui s'applique ici s'applique à l'infini dans le cosmos." },
                        {cit: "Mon imagination est accablée de cette multitude infinie.", loc: "Cinquième Soir (La Marquise)", analyse: "Le frisson du 'sublime' : la terreur exquise face à l'immensité mathématique qui remplace la terreur religieuse." },
                        {cit: "Je me figure l'univers comme une grande ville.", loc: "Quatrième Soir", analyse: "La métaphore rassurante urbaine pour apprivoiser l'inconnu hostile de l'espace." }
                    ]},
                    {theme: "4. Le Dialogue Mondain et Féminin (La Galanterie)", items: [
                        {cit: "Vous êtes si aimable que je vous croirais quand même vous me diriez des choses moins vraisemblables.", loc: "Premier Soir (La Marquise)", analyse: "L'utilisation de la séduction et du compliment pour faire passer la pilule d'une théorie choquante." },
                        {cit: "Je veux que les femmes puissent lire ce livre.", loc: "Préface", analyse: "Le féminisme intellectuel pionnier : l'accès des femmes aux sciences exactes, jusque-là domaine réservé des clercs." },
                        {cit: "La philosophie est devenue galante.", loc: "Thème central de l'œuvre", analyse: "L'intégration de la science dans la conversation des salons nobles du Siècle de Louis XIV." },
                        {cit: "Ne me parlez plus comme à une savante, parlez-moi comme à une ignorante.", loc: "Premier Soir (La Marquise)", analyse: "L'exigence pédagogique de clarté face à l'obscurité volontaire du jargon universitaire." },
                        {cit: "J'ai ma part de ce tourbillon-là.", loc: "Sixième Soir (La Marquise)", analyse: "L'aboutissement du parcours : la femme s'est approprié le langage (tourbillon cartésien) et l'autorité scientifique." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Micromégas", source: "Voltaire (1752)", citation: "O atomes intelligents, dans lesquels l'Être éternel s'est plu à manifester son adresse...", analyse: "L'héritage direct : le conte philosophique utilisant un géant extraterrestre pour souligner la vanité terrestre." },
                    {titre: "Pensées", source: "Pascal (1670)", citation: "Le silence éternel de ces espaces infinis m'effraie.", analyse: "L'antithèse absolue de Fontenelle : l'infini cosmique génère l'angoisse religieuse au lieu de l'enthousiasme." },
                    {titre: "Discours de la méthode", source: "R. Descartes (1637)", citation: "Je pense, donc je suis.", analyse: "Le socle intellectuel des Entretiens : la victoire de la déduction logique sur les croyances et les sens trompeurs." },
                    {titre: "De la Terre à la Lune", source: "J. Verne (1865)", citation: "Rien n'est impossible.", analyse: "La concrétisation de l'imaginaire de Fontenelle (les voyages interstellaires) propulsée par le progrès technique du XIXe." },
                    {titre: "L'Encyclopédie", source: "Diderot & d'Alembert (1751)", citation: "Le but d'une Encyclopédie est de rassembler les connaissances...", analyse: "Le triomphe politique de la vulgarisation et de la diffusion du savoir initiée par Fontenelle." },
                    {titre: "Le Misanthrope", source: "Molière (1666)", citation: "Je prendrai le parti de rire des hommes.", analyse: "L'atmosphère mondaine et galante des salons (Célimène) que Fontenelle détourne à des fins pédagogiques." }
                ],
                plans: [
                    {type: "Dialectique", sujet: "L'œuvre de Fontenelle n'est-elle qu'un traité d'astronomie déguisé ?", parties: [
                        {titre: "I. Une transmission brillante des connaissances scientifiques réelles", sous_parties: ["A. La défense assumée du système héliocentrique de Copernic", "B. L'explication des lois de la physique de Descartes (les tourbillons)", "C. La méthode pédagogique (analogies, métaphores de l'opéra)"]},
                        {titre: "II. Une œuvre profondément littéraire, poétique et galante", sous_parties: ["A. Le charme du dialogue mondain (le flirt intellectuel avec la Marquise)", "B. La puissance de l'imagination (les descriptions science-fictionnelles des planètes)", "C. L'élégance du style classique pour 'plaire' avant d'instruire"]},
                        {titre: "III. Une audacieuse machine de guerre philosophique (Pré-Lumières)", sous_parties: ["A. La destruction de l'anthropocentrisme (l'homme n'est plus le centre du monde)", "B. La remise en cause implicite des dogmes religieux de la Création", "C. L'émancipation par le doute et l'apologie de la Raison universelle"]}
                    ]},
                    {type: "Thématique", sujet: "Analysez le rôle stratégique du personnage de la Marquise.", parties: [
                        {titre: "I. L'incarnation du public mondain et profane", sous_parties: ["A. Une femme curieuse mais ignorante des théories savantes", "B. L'exigence de clarté (le rejet du jargon universitaire)", "C. Le prétexte à la galanterie et à la douceur de la conversation"]},
                        {titre: "II. La représentante des préjugés à combattre", sous_parties: ["A. Ses peurs initiales face à la perte de l'importance de la Terre", "B. Sa résistance dictée par la religion et l'orgueil humain", "C. Ses objections qui relancent habilement l'argumentation du philosophe"]},
                        {titre: "III. La figure de l'émancipation intellectuelle triomphante", sous_parties: ["A. L'assimilation progressive de la démarche hypothético-déductive", "B. L'enthousiasme final face au vertige de la pluralité des mondes", "C. Le manifeste féministe avant l'heure : l'aptitude totale des femmes aux sciences exactes"]}
                    ]},
                    {type: "Thématique", sujet: "Comment s'exprime le « goût de la science » à travers l'écriture de Fontenelle ?", parties: [
                        {titre: "I. La substitution de l'émerveillement à l'angoisse", sous_parties: ["A. Refus de la terreur pascalienne face à l'infini spatial", "B. La découverte cosmique présentée comme un spectacle grandiose (le théâtre)", "C. L'enthousiasme juvénile face à l'hypothèse de la vie extraterrestre"]},
                        {titre: "II. Le plaisir esthétique et rhétorique (Vulgariser)", sous_parties: ["A. La douceur d'une promenade nocturne dans un parc majestueux", "B. L'utilisation poétique de l'analogie (les vers à soie, les ruches)", "C. La légèreté du ton pour aborder des notions gravitationnelles complexes"]},
                        {titre: "III. Le vertige jubilatoire de la pensée libre", sous_parties: ["A. La satisfaction intellectuelle de comprendre l'horlogerie de l'Univers", "B. Le soulagement de s'affranchir des fausses certitudes ancestrales", "C. La promesse de progrès continus de la Raison humaine"]}
                    ]}
                ]
            },
            {
                id: "graffigny_peruvienne", 
                titre: "Lettres d'une Péruvienne", 
                auteur: "Françoise de Graffigny", 
                parcours: "« un nouvel univers s’est offert à mes yeux »", 
                mouvementId: "lumieres",
                mouvementNom: "Les Lumières",
                resume_mouvement: "La littérature de combat du siècle des Lumières. Face à la censure de la monarchie et de l'Église, les auteurs utilisent le roman épistolaire et le procédé du « regard de l'étranger » pour formuler de féroces critiques sociales, féministes et anticoloniales.",
                presentation_auteur: "Françoise de Graffigny (1695-1758) fuit un mari extrêmement violent en Lorraine pour s'installer à Paris. Elle y devient l'une des figures majeures des salons intellectuels. Son roman, publié en 1747, connaît un succès européen foudroyant.",
                resume_complet: [
                    {partie: "Lettres 1 à 11 : L'Arrachement et le traumatisme spatial", texte: "Zilia, Vierge du Soleil inca, est enlevée par des conquistadors le jour de ses noces avec Aza. Le navire espagnol est intercepté par des Français, dont le chevalier Déterville qui la protège (et s'en éprend). En mer, Zilia est terrifiée par ce 'nouvel univers' technique et flottant. Elle tisse des cordelettes (les quipos) pour 'écrire' son désespoir et sa fidélité à Aza."},
                    {partie: "Lettres 12 à 30 : Le regard clinique sur la France", texte: "Zilia arrive à Paris. Installée dans la haute société, elle déconstruit l'absurdité des mœurs européennes. Son œil 'sauvage' s'attaque à la futilité de la mode, à la vanité de la Cour et à la fausse politesse. Dans les célèbres Lettres 28, 29 et surtout la Lettre 34 (édition 1752), elle livre un réquisitoire mémorable contre l'éducation pathétique réservée aux femmes, traitées comme de simples objets de séduction."},
                    {partie: "Lettres 31 à 41 : La désillusion et l'émancipation", texte: "Zilia maîtrise désormais la lecture et se plonge dans l'immense univers de la bibliothèque. Le coup de théâtre survient : Aza arrive en France, mais il s'est converti au catholicisme et épouse une Espagnole. Anéantie par cette trahison, Zilia rejette néanmoins le mariage de consolation avec Déterville. Elle s'achète une maison de campagne et choisit l'indépendance intellectuelle, le célibat et l'amitié libre."}
                ],
                citations: [
                    {theme: "1. Le Procédé du Regard Étranger (Satire)", items: [ 
                        {cit: "Tout ce que l'on fait dans ce pays-ci... me paraît être en contradiction avec la raison.", loc: "Lettre 12", analyse: "La posture centrale des Lumières : la France 'civilisée' est jugée folle par l'intelligence d'une étrangère." },
                        {cit: "Le souverain s'est rendu possesseur des terres... pour le seul plaisir de les ravager.", loc: "Introduction Historique", analyse: "Dénonciation brutale et sans équivoque de l'impérialisme et des massacres coloniaux espagnols." },
                        {cit: "Ils ont la manie de l'esprit, et c'est ce qui les rend si sots.", loc: "Lettre 29", analyse: "L'antithèse piquante : la critique de la vacuité absolue des salons parisiens où le bavardage remplace l'intelligence." },
                        {cit: "Ce que vous appelez ici la politesse n'est que la coutume d'être faux.", loc: "Lettre 16", analyse: "L'attaque contre l'hypocrisie fondatrice des rapports sociaux en Europe, dénuée de la transparence inca." },
                        {cit: "Un assemblage de couleurs qui ne représentent rien.", loc: "Lettre 15", analyse: "La défamiliarisation : l'incompréhension des miroirs et de la peinture met en question le statut de l'illusion artistique." }
                    ]},
                    {theme: "2. La Révolution de la Condition Féminine", items: [ 
                        {cit: "L'autorité y est toute de la part des hommes, et l'esclavage de celle des femmes.", loc: "Lettre 34", analyse: "Le constat clinique de la domination patriarcale qui régit le droit et les mœurs occidentales." },
                        {cit: "Leur éducation se réduit presque à la politesse des manières...", loc: "Lettre 34", analyse: "L'accusation majeure de Graffigny : on prive délibérément les femmes de savoir pour s'assurer de leur docilité." },
                        {cit: "Vous voudriez que les femmes ne fussent des êtres pensants que pour s'occuper de vous.", loc: "Lettre 34", analyse: "L'apostrophe accusatrice : la dénonciation de l'égoïsme structurel de la société masculine." },
                        {cit: "Le plaisir d'être, ce plaisir oublié... de tant d'aveugles humains.", loc: "Lettre 41", analyse: "L'accomplissement de Zilia qui trouve son salut dans l'autonomie et le célibat volontaire." },
                        {cit: "Il me semble que je n'existe plus que pour moi-même.", loc: "Lettre 40", analyse: "La déclaration solennelle d'indépendance, rompant totalement avec les romans larmoyants où l'héroïne se suicide." }
                    ]},
                    {theme: "3. Le Choc Matériel du « Nouvel Univers »", items: [
                        {cit: "Un nouvel univers s’est offert à mes yeux.", loc: "Lettre (Thème du parcours)", analyse: "L'émerveillement mêlé de terreur face à la perte brutale des repères spatiaux et culturels." },
                        {cit: "Je suis dans une maison qui n'est point attachée à la terre...", loc: "Lettre 2", analyse: "La description naïve d'un navire européen par une princesse terrienne qui n'en a jamais vu." },
                        {cit: "Je ne suis plus qu'un objet de curiosité.", loc: "Lettre 13", analyse: "La réification : la souffrance de l'exilée traitée comme un animal exotique de foire par les nobles." },
                        {cit: "Mes nœuds, ma seule consolation...", loc: "Lettre 10", analyse: "Les quipos incas : la langue maternelle devient l'ultime relique charnelle et identitaire." },
                        {cit: "La peine que j'ai à m'exprimer par des lignes tracées...", loc: "Lettre 16", analyse: "La violence de l'assimilation linguistique : le passage de la culture orale/tactile à l'abstraction de la plume." }
                    ]},
                    {theme: "4. L'Amour Divinisé et la Trahison", items: [
                        {cit: "Tu es mon Dieu, mon univers, mon tout.", loc: "Lettre 1", analyse: "L'idolâtrie absolue de l'amante pré-romantique : l'identité de Zilia est totalement soumise à l'existence d'Aza." },
                        {cit: "Je ne vois que toi, je ne désire que toi.", loc: "Lettres initiales", analyse: "L'obsession passionnelle exclusive qui la protège émotionnellement de l'exil." },
                        {cit: "La trahison d'Aza a brisé mon âme.", loc: "Lettre 39", analyse: "Le choc métaphysique : l'effondrement de l'idéal de pureté inca corrompu par le catholicisme et l'Espagne." },
                        {cit: "Venez apprendre de moi à connaître les plaisirs innocents et durables.", loc: "Lettre 41 (à Déterville)", analyse: "L'inversion du rapport de force : la 'sauvage' devient le guide spirituel de l'aristocrate européen." },
                        {cit: "Mon cœur ne saurait se partager.", loc: "Lettre finale", analyse: "La fidélité paradoxale à son deuil : le refus de remplacer Aza garantit sa liberté retrouvée." }
                    ]}
                ],
                docs_complementaires: [
                    {titre: "Lettres Persanes", source: "Montesquieu (1721)", citation: "Comment peut-on être Persan ?", analyse: "Le modèle absolu de Graffigny : l'utilisation du voyageur oriental (Usbek) pour railler la cour de France." },
                    {titre: "Des Coches (Essais)", source: "Montaigne (1588)", citation: "Nous nous sommes servis de leur ignorance... pour les plier vers la trahison, l'avarice...", analyse: "La dénonciation précoce de la destruction barbare et génocidaire du Nouveau Monde par l'avidité de l'Europe." },
                    {titre: "Déclaration des droits de la femme", source: "Olympe de Gouges (1791)", citation: "La femme naît libre et demeure égale à l'homme en droits.", analyse: "La traduction politique et militante des thèses féministes sur l'éducation avancées par Zilia." },
                    {titre: "Candide (L'Eldorado)", source: "Voltaire (1759)", citation: "C’était le pays d'Eldorado.", analyse: "L'utilisation du mythe inca comme une utopie de tolérance parfaite, construite en miroir inversé de l'Europe." },
                    {titre: "La Princesse de Clèves", source: "Mme de Lafayette (1678)", citation: "Je veux me laisser périr pour ne pas tomber dans les malheurs...", analyse: "Le dénouement identique : le refus radical du mariage pour préserver la paix et l'intégrité de l'âme." },
                    {titre: "Supplément au voyage de Bougainville", source: "Diderot (1772)", citation: "Pleurons, non pas sur le départ, mais sur l'arrivée de ces funestes Européens.", analyse: "Le mythe du Bon Sauvage tahitien victime de l'impérialisme civilisateur hypocrite." }
                ],
                plans: [
                    {type: "Dialectique", sujet: "Le roman n'est-il qu'une simple satire exotique des mœurs du XVIIIe siècle ?", parties: [
                        {titre: "I. Un réquisitoire cinglant contre la société française", sous_parties: ["A. La dénonciation de la vanité, du superflu et de la fausseté de la Cour", "B. La critique féroce de l'éducation aliénante réservée aux femmes (Lettre 34)", "C. Le mépris assumé pour la violence et l'hypocrisie de la colonisation"]},
                        {titre: "II. Un profond drame intime sur l'exil et la perte d'identité", sous_parties: ["A. Le traumatisme du 'nouvel univers' (navire, architecture européenne)", "B. Le quipo comme corde de survie psychologique et mémoire charnelle", "C. L'effondrement de l'idéal amoureux face à la corruption (trahison d'Aza)"]},
                        {titre: "III. La trajectoire philosophique d'une émancipation", sous_parties: ["A. La conquête salvatrice du langage et de la traduction", "B. L'assimilation du savoir via la bibliothèque comme espace de liberté", "C. L'apothéose anti-romanesque (indépendance financière, intellectuelle et sentimentale)"]}
                    ]},
                    {type: "Thématique", sujet: "Analysez les dimensions de l'expérience du « nouvel univers » pour l'héroïne.", parties: [
                        {titre: "I. Le cauchemar physique, sensoriel et matériel", sous_parties: ["A. L'arrachement brutal au Temple du Soleil (viol de l'espace sacré)", "B. La technologie occidentale perçue comme tératologique (navires, miroirs)", "C. L'agression visuelle du confinement parisien"]},
                        {titre: "II. Le choc idéologique et sociologique", sous_parties: ["A. L'incompréhension face à la misère côtoyant l'opulence extrême", "B. L'opposition entre le bavardage français et la vérité inca", "C. La révélation progressive de la misogynie systémique masculine"]},
                        {titre: "III. L'édification d'un espace mental libéré", sous_parties: ["A. La lecture des auteurs français comme bouclier et refuge", "B. L'achat de la maison de campagne (reconstruire un asile personnel)", "C. La fondation d'un 'univers' intérieur basé sur la sororité et la raison"]}
                    ]},
                    {type: "Dialectique", sujet: "La forme épistolaire (les lettres) sert-elle uniquement l'expression de la souffrance amoureuse ?", parties: [
                        {titre: "I. L'héritage évident de la tradition lyrique pathétique", sous_parties: ["A. Le cri lancinant de la séparation et du deuil", "B. L'idolâtrie obsessionnelle du destinataire silencieux (Aza divinisé)", "C. La lettre-fétiche substitut de la présence physique"]},
                        {titre: "II. Le détournement de la lettre en outil d'enquête (Lumières)", sous_parties: ["A. Le carnet anthropologique minutieux sur la faune parisienne", "B. Le témoignage brûlant sur la condition sociale des femmes", "C. Le compte-rendu intellectuel des découvertes philosophiques"]},
                        {titre: "III. Le marqueur matériel de l'émancipation identitaire", sous_parties: ["A. Le passage hautement symbolique de la cordelette (quipo) à la plume", "B. L'acte d'écrire qui devient un but en soi pour construire sa pensée", "C. La lettre finale qui rompt la communication amoureuse pour dicter sa propre loi"]}
                    ]}
                ]
            }
        ]
    }
};