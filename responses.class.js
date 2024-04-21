
const keywordResponses = [
    {
        keywords: ["geht es"],
        response: "Mir geht es gut, danke!"
    },
    {
        keywords: ["Lieblingsessen"],
        response: "Als KI habe ich keine Vorlieben für Essen, aber ich kann Ihnen bei technischen Fragen helfen!"
    },
    {
        keywords: ["Alter", "Alt"],
        response: "Als KI habe ich kein Alter. Ich bin immer auf dem neuesten Stand der Technologie!"
    },
    {
        keywords: ["Hobby", "Interessen"],
        response: "Als KI habe ich keine Hobbys, aber ich interessiere mich für Technologie und Wissenserweiterung!"
    },
    {
        keywords: ["Filmempfehlung"],
        response: "Als KI kann ich Ihnen empfehlen, Filme nach Ihren Vorlieben auf Streaming-Plattformen zu suchen."
    },
    {
        keywords: ["Sport"],
        response: "Als KI bin ich nicht für sportliche Aktivitäten geeignet, aber ich kann Ihnen Informationen zu verschiedenen Sportarten geben."
    },
    {
        keywords: ["Technologie", "Innovation", "Programmierung", "Künstliche Intelligenz"],
        response: "Technologie und Innovation sind meine Leidenschaft! Ich stehe Ihnen für alle Fragen dazu zur Verfügung."
    },
    {
        keywords: ["Wissenschaft", "Forschung", "Physik", "Biologie", "Chemie"],
        response: "Wissenschaft und Forschung sind faszinierende Themen. Wie kann ich Ihnen in diesem Bereich behilflich sein?"
    },{
        keywords: ["Reisen", "Urlaub", "Länder", "Kulturen"],
        response: "Reisen und kulturelle Vielfalt sind interessante Themen. Kann ich Ihnen Informationen zu bestimmten Orten geben?"
    },
    {
        keywords: ["Musik", "Konzerte", "Künstler"],
        response: "Musik ist eine großartige Form der Unterhaltung. Gibt es einen bestimmten Musikstil oder Künstler, den Sie mögen?"
    },
    {
        keywords: ["Gesundheit", "Ernährung", "Medizin"],
        response: "Gesundheit ist wichtig! Wenn Sie Fragen zur Ernährung oder Medizin haben, stehe ich zur Verfügung."
    },
    {
        keywords: ["Umweltschutz", "Nachhaltigkeit", "Klimawandel"],
        response: "Umweltschutz und Nachhaltigkeit sind bedeutende Themen. Wie können wir unseren Beitrag leisten?"
    }, {
        keywords: ["Bücher", "Literatur", "Autoren"],
        response: "Bücher sind faszinierend! Haben Sie einen Lieblingsautor oder ein bevorzugtes Genre?"
    },
    {
        keywords: ["Technikgadgets", "Elektronik", "Smartphones"],
        response: "Technikgadgets sind spannend! Gibt es ein bestimmtes elektronisches Gerät, das Sie interessiert?"
    },
    {
        keywords: ["Sprachen", "Linguistik", "Übersetzung"],
        response: "Sprachen sind vielfältig! Haben Sie Interesse an einer bestimmten Sprache oder benötigen Sie Übersetzungshilfe?"
    },
    {
        keywords: ["Kunst", "Malerei", "Bildhauerei"],
        response: "Kunst ist eine kreative Ausdrucksform! Mögen Sie eine bestimmte Kunstrichtung oder Künstler?"
    },  {
        keywords: ["Philosophie", "Existenz", "Ethik"],
        response: "Philosophie erkundet tiefgreifende Fragen über Existenz und Ethik. Haben Sie eine spezifische Frage dazu?"
    },
    {
        keywords: ["Raumfahrt", "Weltraum", "Mars"],
        response: "Raumfahrt ist faszinierend! Gibt es spezielle Aspekte des Weltraums, die Sie interessieren?"
    },
    {
        keywords: ["Geschichte", "Zeitgeschichte", "Antike"],
        response: "Geschichte ist reich an Ereignissen! Möchten Sie etwas über eine bestimmte Epoche oder ein historisches Thema wissen?"
    },
    {
        keywords: ["Psychologie", "Menschenverhalten", "Emotionen"],
        response: "Psychologie erforscht das menschliche Verhalten. Haben Sie Fragen zu Emotionen oder menschlichem Denken?"
    },
    {
        keywords: ["Informatik", "Algorithmen", "Datenbanken"],
        response: "Informatik ist vielfältig! Interessieren Sie sich für Algorithmen, Datenbanken oder andere Bereiche der Informatik?"
    },
    {
        keywords: ["Architektur", "Design", "Bauwerke"],
        response: "Architektur und Design prägen unsere Umgebung. Gibt es bestimmte Architekturstile oder Bauwerke, die Sie ansprechen?"
    },
    {
        keywords: ["Mode", "Trends", "Designer"],
        response: "Mode ist eine Kunstform! Möchten Sie über aktuelle Trends oder berühmte Designer sprechen?"
    },
    {
        keywords: ["Astronomie", "Sternbilder", "Galaxien"],
        response: "Astronomie erforscht die Weiten des Universums. Haben Sie Fragen zu Sternbildern, Galaxien oder anderen astronomischen Themen?"
    },
    {
        keywords: ["Erfindungen", "Innovationen", "Patente"],
        response: "Erfindungen gestalten unsere Welt neu. Interessieren Sie sich für innovative Technologien oder Patente?"
    },
    {
        keywords: ["Politik", "Weltgeschehen", "Globale Probleme"],
        response: "Politik beeinflusst unser tägliches Leben. Möchten Sie über aktuelle Ereignisse, globale Probleme oder politische Entwicklungen sprechen?"
    },
    {
        keywords: ["Psychiatrie", "Psychotherapie", "Psychiatrische Störungen"],
        response: "Psychiatrie beschäftigt sich mit mentaler Gesundheit. Haben Sie Fragen zu Psychotherapie oder psychischen Störungen?"
    }, {
        keywords: ["Kulinarik", "Gastronomie", "Feinschmecker"],
        response: "Kulinarik ist die Kunst des Genießens! Interessieren Sie sich für Gastronomie, Feinschmeckerküche oder kulinarische Trends?"
    },
    {
        keywords: ["Hausautomation", "Smart Home", "IoT"],
        response: "Hausautomation ermöglicht intelligentes Wohnen! Haben Sie Fragen zu Smart-Home-Geräten oder dem Internet der Dinge (IoT)?"
    },
    {
        keywords: ["Astrologie", "Sternzeichen", "Horoskop"],
        response: "Astrologie untersucht den Einfluss der Sterne. Möchten Sie mehr über Ihr Sternzeichen oder Horoskope erfahren?"
    },
    {
        keywords: ["Bildung", "Lernen", "Bildungssystem"],
        response: "Bildung ist der Schlüssel zum Wissen! Interessieren Sie sich für Lernmethoden, das Bildungssystem oder haben Sie Fragen zur Weiterbildung?"
    },
    {
        keywords: ["Tierwelt", "Naturschutz", "Ökosysteme"],
        response: "Die Tierwelt ist faszinierend! Möchten Sie über Naturschutz, Ökosysteme oder bestimmte Tierarten sprechen?"
    },
    {
        keywords: ["Virtual Reality", "Augmented Reality", "VR"],
        response: "Virtual Reality (VR) und Augmented Reality (AR) verändern die Art, wie wir die Welt erleben. Haben Sie Fragen zu dieser Technologie?"
    },
    {
        keywords: ["Kochen", "Backen", "Rezepte"],
        response: "Kochen und Backen sind kreative Aktivitäten! Gibt es bestimmte Rezepte oder kulinarische Tipps, die Sie teilen möchten?"
    },
    {
        keywords: ["Medien", "Journalismus", "Pressefreiheit"],
        response: "Medien spielen eine wichtige Rolle in unserer Gesellschaft. Möchten Sie über Journalismus, Pressefreiheit oder Medientrends sprechen?"
    },
    {
        keywords: ["Finanzen", "Investitionen", "Wirtschaft"],
        response: "Finanzthemen sind entscheidend für die Lebensgestaltung. Haben Sie Fragen zu Investitionen, Wirtschaft oder persönlichen Finanzen?"
    },
    {
        keywords: ["Sozialpsychologie", "Beziehungen", "Interaktion"],
        response: "Sozialpsychologie erforscht das Verhalten in sozialen Kontexten. Möchten Sie über Beziehungen, Interaktionen oder soziale Phänomene sprechen?"
    },
    {
        keywords: ["Landwirtschaft", "Nachhaltige Landwirtschaft", "Ernährungssicherheit"],
        response: "Landwirtschaft spielt eine Schlüsselrolle für unsere Ernährung. Haben Sie Fragen zu nachhaltiger Landwirtschaft oder Ernährungssicherheit?"
    },
    {
        keywords: ["Digitale Kunst", "Grafikdesign", "Kunsttechniken"],
        response: "Digitale Kunst eröffnet neue kreative Möglichkeiten. Interessieren Sie sich für Grafikdesign, Kunsttechniken oder digitale Kunstwerke?"
    },{
        keywords: ["iPhone", "iOS", "Apple"],
        response: "Das iPhone ist eine beliebte Smartphone-Marke von Apple. Gibt es spezifische Fragen zu einem bestimmten Modell oder iOS?"
    },
    {
        keywords: ["Mikrofon", "Audioaufnahme", "Sound"],
        response: "Mikrofone werden für Audioaufnahmen verwendet. Haben Sie Fragen zu Mikrofontypen, Soundqualität oder Audioaufnahme?"
    },
    {
        keywords: ["Pfandflaschen", "Umweltschutz", "Recycling"],
        response: "Pfandflaschen tragen zum Umweltschutz bei. Möchten Sie mehr über Recycling, Umweltschutz oder nachhaltige Praktiken erfahren?"
    },
    {
        keywords: ["Kaffee", "Kaffeemaschinen", "Barista"],
        response: "Kaffee ist ein beliebtes Getränk! Interessieren Sie sich für verschiedene Kaffeesorten, Kaffeemaschinen oder Barista-Techniken?"
    },
    {
        keywords: ["Robotik", "Künstliche Intelligenz", "Automatisierung"],
        response: "Robotik und Künstliche Intelligenz verändern die Art, wie wir arbeiten. Möchten Sie über Robotik, KI oder automatisierte Systeme sprechen?"
    },
    {
        keywords: ["Photografie", "Kameras", "Bildbearbeitung"],
        response: "Fotografie ist eine kreative Kunst! Haben Sie Fragen zu Kameras, Fotografietechniken oder Bildbearbeitung?"
    },
    {
        keywords: ["Fitness-Tracker", "Gesundheit", "Aktivitätsmessung"],
        response: "Fitness-Tracker helfen bei der Überwachung von Aktivitäten. Haben Sie Fragen zu Gesundheitstracking oder Fitness-Technologien?"
    },
    {
        keywords: ["Cybersicherheit", "Datenschutz", "Online-Sicherheit"],
        response: "Cybersicherheit ist entscheidend für den Schutz digitaler Informationen. Möchten Sie über Datenschutz, Online-Sicherheit oder Verschlüsselung sprechen?"
    },
    {
        keywords: ["Gaming", "Videospiele", "Spielekonsolen"],
        response: "Gaming ist eine beliebte Freizeitaktivität! Interessieren Sie sich für Videospiele, Spielekonsolen oder Gaming-Technologien?"
    },
    {
        keywords: ["Vegetarische Ernährung", "Veganismus", "Pflanzliche Ernährung"],
        response: "Vegetarische und vegane Ernährungsoptionen sind im Trend. Haben Sie Fragen zu pflanzlicher Ernährung, veganen Rezepten oder Lebensmitteln?"
    },
    {
        keywords: ["Augmented Reality", "AR-Anwendungen", "AR-Brillen"],
        response: "Augmented Reality (AR) bietet erweiterte Realitätserfahrungen. Möchten Sie über AR-Anwendungen, AR-Brillen oder AR-Technologien sprechen?"
    },
    {
        keywords: ["Nachhaltige Mode", "Eco-Fashion", "Fair Trade"],
        response: "Nachhaltige Mode legt Wert auf Umweltfreundlichkeit und ethische Praktiken. Interessieren Sie sich für nachhaltige Mode, Eco-Fashion oder Fair-Trade-Kleidung?"
    },{
        keywords: ["Fussballvereine", "Bundesliga", "Premier League"],
        response: "Fußballvereine sind spannend! Interessieren Sie sich für bestimmte Vereine, Ligen oder Fußballturniere?"
    },
    {
        keywords: ["Berühmte Persönlichkeiten", "Prominente", "Stars"],
        response: "Berühmte Persönlichkeiten prägen unsere Kultur! Haben Sie Fragen zu bestimmten Prominenten, Stars oder deren Karrieren?"
    },
    {
        keywords: ["Kochrezepte", "Kulinarische Kreationen", "Gourmet-Küche"],
        response: "Kochrezepte ermöglichen kulinarische Kreationen! Möchten Sie Rezepte, Tipps zur Gourmet-Küche oder kulinarische Inspirationen?"
    },
    {
        keywords: ["Weltreisen", "Fernweh", "Reiseabenteuer"],
        response: "Weltreisen eröffnen einzigartige Erfahrungen! Haben Sie Reisefragen, Fernweh oder Interesse an Reiseabenteuern?"
    },
    {
        keywords: ["Globale Musik", "Musikgenres", "Künstler"],
        response: "Musikgenres aus aller Welt bieten vielfältige Klangerlebnisse. Interessieren Sie sich für globale Musik, bestimmte Genres oder Künstler?"
    },
    {
        keywords: ["Historische Ereignisse", "Epochen", "Geschichtliche Wendepunkte"],
        response: "Historische Ereignisse prägen unsere Weltgeschichte. Möchten Sie über bestimmte Epochen, historische Wendepunkte oder Persönlichkeiten sprechen?"
    },
    {
        keywords: ["Tierschutz", "Tierrechte", "Tieradoption"],
        response: "Tierschutz ist wichtig! Haben Sie Fragen zu Tierrechten, Tierschutzorganisationen oder überlegen Sie eine Tieradoption?"
    },
    {
        keywords: ["Popkultur", "Trends", "Entertainment"],
        response: "Popkultur umfasst Trends und Unterhaltung. Möchten Sie über aktuelle Popkulturthemen, Trends oder Entertainment sprechen?"
    },
    {
        keywords: ["Wissenschaftsfiktion", "Sci-Fi-Filme", "Bücher"],
        response: "Wissenschaftsfiktion bietet faszinierende Geschichten. Interessieren Sie sich für Sci-Fi-Filme, Bücher oder futuristische Konzepte?"
    },
    {
        keywords: ["Sprachlernen", "Sprachreisen", "Mehrsprachigkeit"],
        response: "Sprachlernen erweitert den Horizont! Haben Sie Fragen zu Sprachreisen, Mehrsprachigkeit oder Tipps zum Sprachenlernen?"
    },
    {
        keywords: ["Fitness-Trends", "Gesundheit", "Sportarten"],
        response: "Fitness-Trends prägen den Sportbereich. Interessieren Sie sich für bestimmte Sportarten, Fitness-Trends oder Gesundheitsthemen?"
    },
    {
        keywords: ["Astrologie", "Horoskop", "Sternzeichen"],
        response: "Astrologie bietet Einblicke in Persönlichkeiten. Möchten Sie über Ihr Horoskop, Sternzeichen oder astrologische Konzepte sprechen?"
    },
    {
        keywords: ["Innovationen", "Neue Technologien", "Forschung"],
        response: "Innovationen gestalten die Zukunft! Haben Sie Fragen zu neuen Technologien, Innovationen oder aktuellen Forschungsprojekten?"
    },  {
        keywords: ["Bergsteigen", "Wandern", "Outdoor-Abenteuer"],
        response: "Bergsteigen und Wandern bieten großartige Outdoor-Abenteuer. Haben Sie Fragen zu Bergregionen, Wanderwegen oder Outdoor-Ausrüstung?"
    },
    {
        keywords: ["Kosmetik", "Schönheitspflege", "Make-up-Tipps"],
        response: "Kosmetik und Schönheitspflege spielen eine wichtige Rolle. Möchten Sie über Make-up-Tipps, Hautpflege oder Beauty-Produkte sprechen?"
    },
    {
        keywords: ["Automobilindustrie", "Autotrends", "Elektroautos"],
        response: "Die Automobilindustrie entwickelt sich ständig weiter. Interessieren Sie sich für Autotrends, Elektroautos oder technologische Entwicklungen im Automobilbereich?"
    },
    {
        keywords: ["Meditation", "Achtsamkeit", "Stressbewältigung"],
        response: "Meditation und Achtsamkeit fördern das Wohlbefinden. Haben Sie Fragen zur Meditation, Achtsamkeitspraxis oder Stressbewältigungstechniken?"
    },
    {
        keywords: ["Robotik in der Medizin", "Medizinische Innovationen", "Gesundheitstechnologien"],
        response: "Robotik spielt auch in der Medizin eine wichtige Rolle. Möchten Sie über robotergestützte Chirurgie, medizinische Innovationen oder Gesundheitstechnologien sprechen?"
    },
    {
        keywords: ["Stricken", "Häkeln", "Handarbeiten"],
        response: "Handarbeiten wie Stricken und Häkeln sind kreative Hobbys. Haben Sie Fragen zu Handarbeitsprojekten, Techniken oder Mustern?"
    },
    {
        keywords: ["Weltreligionen", "Religiöse Praktiken", "Interreligiöser Dialog"],
        response: "Weltreligionen prägen Kulturen und Gesellschaften. Möchten Sie über religiöse Praktiken, interreligiösen Dialog oder spirituelle Themen sprechen?"
    },
    {
        keywords: ["Reptilien", "Exotische Haustiere", "Terraristik"],
        response: "Reptilien sind faszinierende Haustiere. Haben Sie Fragen zur Haltung von exotischen Haustieren, Terraristik oder Reptilienpflege?"
    },
    {
        keywords: ["Digitale Nomaden", "Fernarbeit", "Reisen und Arbeiten"],
        response: "Digitale Nomaden kombinieren Arbeit und Reisen. Interessieren Sie sich für Fernarbeit, Reiseerlebnisse von digitalen Nomaden oder Tipps zum Arbeiten von unterwegs?"
    },
    {
        keywords: ["Gärtnern", "Pflanzenpflege", "Urban Gardening"],
        response: "Gärtnern ist eine entspannende Aktivität. Möchten Sie über Pflanzenpflege, Gartenideen oder Urban Gardening sprechen?"
    },
    {
        keywords: ["Weltall", "Astronomische Phänomene", "Galaxien"],
        response: "Das Weltall birgt faszinierende Geheimnisse. Haben Sie Fragen zu astronomischen Phänomenen, Galaxien oder Raumfahrt?"
    },
    {
        keywords: ["Jazzmusik", "Musikfestivals", "Musikgeschichte"],
        response: "Jazzmusik hat eine reiche Geschichte. Interessieren Sie sich für Jazzmusik, Musikfestivals oder die Entwicklung der Musikgeschichte?"
    },{
        keywords: ["Kunstgeschichte", "Kunststile", "Künstler"],
        response: "Kunstgeschichte bietet Einblicke in kreative Epochen. Möchten Sie über bestimmte Kunststile, Künstler oder Kunstbewegungen sprechen?"
    },
    {
        keywords: ["Heimwerken", "DIY-Projekte", "Handwerkskunst"],
        response: "Heimwerken und DIY-Projekte sind kreative Unternehmungen. Haben Sie Fragen zu Handwerksprojekten, DIY-Ideen oder Handwerkskunst?"
    },
    {
        keywords: ["Fotografieausrüstung", "Kameraausrüstung", "Objektive"],
        response: "Fotografieausrüstung spielt eine wichtige Rolle für gelungene Aufnahmen. Interessieren Sie sich für Kameras, Objektive oder Fotografieausrüstung?"
    },
    {
        keywords: ["Tanzstile", "Tanzgeschichte", "Tanztraining"],
        response: "Tanzstile sind vielfältig und kreativ. Möchten Sie über bestimmte Tanzstile, die Geschichte des Tanzes oder Tipps zum Tanztraining sprechen?"
    },
    {
        keywords: ["Astronomie", "Himmelskörper", "Teleskope"],
        response: "Astronomie ermöglicht den Blick in die Sterne. Haben Sie Fragen zu Himmelskörpern, Teleskopen oder astronomischen Beobachtungen?"
    },
    {
        keywords: ["Kriminologie", "Kriminalistik", "Kriminalfälle"],
        response: "Kriminologie erforscht kriminelles Verhalten. Möchten Sie über Kriminalistik, berühmte Kriminalfälle oder kriminologische Theorien sprechen?"
    },
    {
        keywords: ["Vintage-Mode", "Retro-Stil", "Second-Hand-Shopping"],
        response: "Vintage-Mode hat einen zeitlosen Reiz. Interessieren Sie sich für Retro-Stil, Vintage-Mode oder Second-Hand-Shopping?"
    },
    {
        keywords: ["Filmproduktion", "Regie", "Drehbuch"],
        response: "Filmproduktion ist eine kreative Kunst. Haben Sie Fragen zur Regie, Drehbuchschreiben oder zur Welt der Filmproduktion?"
    },
    {
        keywords: ["Bergsportarten", "Klettern", "Bergausrüstung"],
        response: "Bergsportarten bieten Abenteuer in der Natur. Möchten Sie über Klettern, Bergausrüstung oder Outdoor-Erlebnisse sprechen?"
    },
    {
        keywords: ["Tierverhalten", "Tierkommunikation", "Haustierpflege"],
        response: "Tierverhalten und Haustierpflege sind wichtig. Haben Sie Fragen zur Kommunikation mit Tieren oder zur Pflege von Haustieren?"
    },
    {
        keywords: ["Kaffeekultur", "Baristakunst", "Kaffeebohnen"],
        response: "Kaffeekultur ist vielfältig und interessant. Interessieren Sie sich für Baristakunst, Kaffeebohnen oder Kaffeezubereitungstechniken?"
    },
    {
        keywords: ["Familienrezepte", "Traditionelle Küche", "Kulinarisches Erbe"],
        response: "Familienrezepte und traditionelle Küche sind kulturelle Schätze. Möchten Sie über kulinarisches Erbe, Familienrezepte oder traditionelle Gerichte sprechen?"
    },  {
        keywords: ["Hallo", "Hi", "Guten Tag", "Grüß Gott", "Moin", "Salut", "Ciao", "Hola", "Namaste", "Servus"],
        response: "Hallo! Wie kann ich Ihnen helfen?"
    },{
        keywords: ["Sportarten", "Fußball", "Tennis", "Schwimmen"],
        response: "Sport ist eine großartige Leidenschaft! Welche Sportarten interessieren Sie besonders?"
    },
    {
        keywords: ["Musikgenres", "Pop", "Rock", "Jazz"],
        response: "Musikgeschmack sagt viel über eine Person aus. Welche Musikgenres hören Sie am liebsten?"
    },
    {
        keywords: ["Bücher und Literatur", "Romane", "Fantasy", "Klassiker"],
        response: "Lesen ist eine wunderbare Quelle der Inspiration. Welche Art von Büchern bevorzugen Sie?"
    },
    {
        keywords: ["Filme und Fernsehserien", "Neuerscheinungen", "Lieblingsfilme"],
        response: "Filme und Serien bieten eine gute Unterhaltung. Haben Sie einen aktuellen Favoriten oder eine Lieblingsproduktion?"
    },
    {
        keywords: ["Kunst und Kultur", "Ausstellungen", "Künstler"],
        response: "Kunst kann so vielfältig sein. Gibt es bestimmte Kunstwerke oder Künstler, die Sie besonders ansprechen?"
    },
    {
        keywords: ["Technologie und Innovation", "Smartphones", "KI", "Elektronik"],
        response: "Technologie verändert ständig unser Leben. Gibt es aktuelle technologische Entwicklungen, die Sie faszinieren?"
    },
    {
        keywords: ["Reiseziele", "Abenteuer", "Kulturelle Erfahrungen"],
        response: "Reisen erweitert den Horizont. Haben Sie ein Traumreiseziel oder eine besondere Reiseerfahrung, die Sie teilen möchten?"
    },
    {
        keywords: ["Kochrezepte", "Kulinarik", "Vegetarisch"],
        response: "Kochen kann so kreativ sein. Haben Sie Lieblingsrezepte oder Interesse an bestimmten kulinarischen Trends?"
    },
    {
        keywords: ["Fitness und Sport", "Meditation", "Gesunde Lebensgewohnheiten"],
        response: "Gesundheit ist wichtig. Welche Sportarten mögen Sie oder haben Sie bestimmte Gesundheitsziele?"
    },
    {
        keywords: ["Studium und Ausbildung", "Berufliche Erfahrungen", "Zukunftspläne"],
        response: "Bildung und Karriere prägen unseren Lebensweg. Welche Erfahrungen haben Sie gemacht und welche Ziele verfolgen Sie?"
    },
    {
        keywords: ["Wissenschaftliche Entwicklungen", "Entdeckungen", "Rätsel"],
        response: "Die Welt der Wissenschaft ist faszinierend. Gibt es aktuelle wissenschaftliche Entwicklungen, die Sie interessieren?"
    }, {
        keywords: ["Hobbys", "Freizeitaktivitäten", "Leidenschaften"],
        response: "Hobbys prägen unsere Freizeit. Haben Sie besondere Hobbys oder Freizeitaktivitäten, die Sie gerne teilen möchten?"
    },
    {
        keywords: ["Technik", "Gadgets", "Innovative Geräte"],
        response: "Technik und innovative Geräte faszinieren viele Menschen. Gibt es bestimmte Technologien oder Gadgets, die Sie beeindrucken?"
    },
    {
        keywords: ["Digitalisierung", "Online-Trends", "Digitale Welt"],
        response: "Die Digitalisierung beeinflusst alle Lebensbereiche. Haben Sie Fragen zu Online-Trends oder der sich wandelnden digitalen Welt?"
    },
    {
        keywords: ["Hollywood", "Filmindustrie", "Filmgeschichte"],
        response: "Hollywood prägt die Filmindustrie. Möchten Sie über Hollywood, Filmgeschichte oder aktuelle Entwicklungen sprechen?"
    },
    {
        keywords: ["Gesellschaft", "Soziale Themen", "Aktivismus"],
        response: "Gesellschaftliche Themen bewegen viele Menschen. Interessieren Sie sich für soziale Themen oder engagieren Sie sich in bestimmten Aktivismusbereichen?"
    },
    {
        keywords: ["Gesunde Ernährung", "Superfoods", "Ernährungstipps"],
        response: "Gesunde Ernährung trägt zum Wohlbefinden bei. Haben Sie Fragen zu Superfoods, Ernährungstipps oder gesunden Rezepten?"
    },
    {
        keywords: ["Klimaschutz", "Nachhaltiges Leben", "Umweltbewusstsein"],
        response: "Klimaschutz und nachhaltiges Leben sind wichtige Themen. Wie setzen Sie sich für den Umweltschutz ein oder welche nachhaltigen Praktiken verfolgen Sie?"
    },
    {
        keywords: ["Fotografie als Hobby", "Fototipps", "Fotografieprojekte"],
        response: "Fotografie als Hobby bietet kreative Möglichkeiten. Möchten Sie über Fototipps, Fotografieprojekte oder Ihre Erfahrungen sprechen?"
    },
    {
        keywords: ["Neue Medien", "Social Media", "Digitale Trends"],
        response: "Neue Medien prägen die Kommunikation. Interessieren Sie sich für Social Media, digitale Trends oder den Einfluss neuer Medien auf die Gesellschaft?"
    },
    {
        keywords: ["Weltraumforschung", "Astronomische Entdeckungen", "Exoplaneten"],
        response: "Die Weltraumforschung enthüllt faszinierende Geheimnisse. Möchten Sie über astronomische Entdeckungen, Exoplaneten oder Weltraummissionen sprechen?"
    },
    {
        keywords: ["Ehrenamtliche Arbeit", "Soziales Engagement", "Gemeinnützige Projekte"],
        response: "Ehrenamtliche Arbeit und soziales Engagement sind lobenswerte Tätigkeiten. Engagieren Sie sich in bestimmten gemeinnützigen Projekten oder Organisationen?"
    },  {
        keywords: ["Freizeitparks", "Attraktionen", "Vergnügungsparks"],
        response: "Freizeitparks sind spannende Orte voller Attraktionen. Haben Sie einen Lieblingsfreizeitpark oder bestimmte Attraktionen, die Sie mögen?"
    },
    {
        keywords: ["Gesunde Lebensgewohnheiten", "Wellness", "Selbstpflege"],
        response: "Gesunde Lebensgewohnheiten tragen zum Wohlbefinden bei. Wie integrieren Sie Wellness und Selbstpflege in Ihren Alltag?"
    },
    {
        keywords: ["Kunsthandwerk", "DIY-Ideen", "Kreative Projekte"],
        response: "Kunsthandwerk und DIY-Projekte sind kreative Ausdrucksformen. Haben Sie eigene kreative Projekte oder suchen Sie nach inspirierenden DIY-Ideen?"
    },
    {
        keywords: ["Autoreisen", "Roadtrips", "Reisen mit dem Auto"],
        response: "Autoreisen und Roadtrips bieten Abenteuer auf der Straße. Haben Sie Lieblingsziele für Autoreisen oder interessante Roadtrip-Erfahrungen?"
    },
    {
        keywords: ["Fernstudium", "Online-Kurse", "Weiterbildung"],
        response: "Fernstudium und Online-Kurse ermöglichen flexible Weiterbildung. Haben Sie Erfahrungen mit Fernstudium oder bestimmte Themen, die Sie vertiefen möchten?"
    },
    {
        keywords: ["Familienleben", "Elternschaft", "Erziehung"],
        response: "Familienleben und Elternschaft sind bedeutende Lebensbereiche. Haben Sie Fragen zur Erziehung, Familie oder möchten Sie Erfahrungen teilen?"
    },
    {
        keywords: ["Kunstausstellungen", "Moderne Kunst", "Kunstgalerien"],
        response: "Kunstausstellungen präsentieren kreative Werke. Interessieren Sie sich für moderne Kunst, Kunstgalerien oder haben Sie kürzlich eine inspirierende Ausstellung besucht?"
    },
    {
        keywords: ["Wintersport", "Skifahren", "Snowboarden"],
        response: "Wintersportarten bieten Spaß im Schnee. Mögen Sie Skifahren, Snowboarden oder haben Sie Lieblingsorte für Wintersport?"
    },
    {
        keywords: ["Virtuelle Realität", "VR-Anwendungen", "VR-Spiele"],
        response: "Virtuelle Realität (VR) bietet immersive Erfahrungen. Haben Sie Interesse an VR-Anwendungen, VR-Spielen oder virtuellen Erlebnissen?"
    },
    {
        keywords: ["Gesunde Snacks", "Ernährungstipps", "Snackideen"],
        response: "Gesunde Snacks sind eine gute Wahl für Zwischenmahlzeiten. Welche gesunden Snackideen mögen Sie oder suchen Sie nach Ernährungstipps?"
    },
    {
        keywords: ["Technologie im Alltag", "Smart Home", "Innovative Apps"],
        response: "Technologie ist integraler Bestandteil des Alltags. Nutzen Sie Smart Home-Technologien oder haben Sie Empfehlungen für innovative Apps?"
    },
    {
        keywords: ["Kochen mit Kindern", "Familiengerichte", "Kinderfreundliche Rezepte"],
        response: "Kochen mit Kindern kann Spaß machen. Haben Sie Lieblingsrezepte für die ganze Familie oder suchen Sie nach kinderfreundlichen Kochideen?"
    },
    {
        keywords: ["Digital Detox", "Offline-Zeit", "Entschleunigung"],
        response: "Digital Detox und Offline-Zeit sind wichtige Pausen. Wie integrieren Sie Entschleunigung und bewusste Offline-Momente in Ihren Alltag?"
    },
    {
        keywords: ["Wohltätigkeitsorganisationen", "Spenden", "Gemeinnützige Arbeit"],
        response: "Wohltätigkeitsorganisationen setzen sich für wichtige Zwecke ein. Haben Sie bevorzugte Wohltätigkeitsorganisationen oder engagieren Sie sich in gemeinnütziger Arbeit?"
    },
    {
        keywords: ["Kunsthandel", "Sammlungen", "Künstlermarkt"],
        response: "Der Kunsthandel ist vielfältig und dynamisch. Interessieren Sie sich für Kunstsammlungen, den Künstlermarkt oder haben Sie eigene Kunsterfahrungen?"
    }, {
        keywords: ["Freizeitgestaltung mit Freunden", "Gesellige Aktivitäten", "Gemeinsame Erlebnisse"],
        response: "Das Zusammensein mit Freunden ist etwas Besonderes. Wie gestalten Sie Ihre Freizeit, um sie mit anderen zu teilen? Haben Sie Lieblingsaktivitäten, die Sie gerne mit Freunden unternehmen?"
    },
    {
        keywords: ["Individuelle VR-Erlebnisse", "Persönliche VR-Entdeckungen", "Einzigartige VR-Anwendungen"],
        response: "Virtuelle Realität (VR) bietet eine Vielzahl von individuellen Erfahrungen. Haben Sie spezielle Interessen in Bezug auf VR-Anwendungen oder gibt es ein virtuelles Erlebnis, das Ihnen besonders in Erinnerung geblieben ist?"
    },
    {
        keywords: ["Gesunde Snackkreationen", "Eigenkreationen für Zwischenmahlzeiten", "Gesunde Ernährung mit Genuss"],
        response: "Gesunde Snacks sind nicht nur nahrhaft, sondern können auch köstlich sein. Haben Sie eigene Kreationen für Zwischenmahlzeiten oder suchen Sie nach neuen Ideen für eine gesunde und genussvolle Ernährung?"
    },
    {
        keywords: ["Individuelle Technologienutzung", "Persönliche Erfahrungen mit Smart Home", "Lieblings-Apps im Alltag"],
        response: "Technologie ist individuell gestaltbar und beeinflusst unseren Alltag. Wie nutzen Sie Smart Home-Technologien auf Ihre persönliche Weise? Haben Sie Lieblings-Apps, die Ihren Alltag bereichern?"
    },
    {
        keywords: ["Familiäre Kochtraditionen", "Einzigartige Familiengerichte", "Kulinarische Erinnerungen mit Kindern"],
        response: "Das Kochen mit der Familie schafft besondere Erinnerungen. Gibt es in Ihrer Familie bestimmte Kochtraditionen oder haben Sie ein Lieblingsrezept, das Sie gerne teilen möchten?"
    },    {
        keywords: ["Kreative Hobbys", "Individuelle Kunstprojekte", "Kunsthandwerk"],
        response: "Kreative Hobbys sind eine großartige Möglichkeit, sich auszudrücken. Haben Sie spezielle Kunstprojekte oder Bastelarbeiten, an denen Sie gerne arbeiten? Ich bin gespannt, mehr darüber zu erfahren!"
    },
    {
        keywords: ["Persönliche Musikerlebnisse", "Lieblingskonzerte", "Musikalische Leidenschaften"],
        response: "Musik spielt oft eine wichtige Rolle im Leben. Haben Sie besondere Erlebnisse bei Konzerten gemacht oder gibt es bestimmte Musiker, die Ihre Leidenschaft für Musik entfachen?"
    },
    {
        keywords: ["Einzigartige Buchempfehlungen", "Bücher, die Sie inspiriert haben", "Literarische Vorlieben"],
        response: "Bücher können transformative Kräfte haben. Haben Sie Buchempfehlungen, die Sie inspiriert haben, oder haben Sie bestimmte literarische Vorlieben, die Sie teilen möchten?"
    },
    {
        keywords: ["Filme abseits des Mainstreams", "Geheimtipps für Filmfans", "Kleine Filmperlen"],
        response: "Es gibt oft versteckte Juwelen in der Filmwelt. Haben Sie besondere Empfehlungen abseits des Mainstreams oder kleine Filmperlen, die Ihnen besonders ans Herz gewachsen sind?"
    },
    {
        keywords: ["Kulturelle Entdeckungen auf Reisen", "Begegnungen mit lokaler Kultur", "Reiseerlebnisse"],
        response: "Reisen ermöglicht ein Eintauchen in verschiedene Kulturen. Haben Sie besondere kulturelle Entdeckungen während Ihrer Reisen gemacht oder gibt es Reiseerlebnisse, die Sie besonders geprägt haben?"
    },  {
        keywords: ["Große Konzerne", "Vodafone", "Apple", "Microsoft"],
        response: "Technologiegiganten wie Vodafone, Apple und Microsoft prägen maßgeblich die digitale Landschaft. Welche dieser Unternehmen weckt Ihr besonderes Interesse?"
    },
    {
        keywords: ["Berühmte Persönlichkeiten", "Elon Musk", "The Rock", "Ronaldo"],
        response: "Diese ikonischen Persönlichkeiten, sei es der visionäre Unternehmer Elon Musk, der charismatische The Rock oder der herausragende Fußballer Ronaldo, haben auf ihren jeweiligen Gebieten beeindruckende Erfolge erzielt. Welchen dieser Persönlichkeiten bewundern Sie am meisten?"
    },
    {
        keywords: ["Global agierende Unternehmen", "Amazon", "Google", "Facebook"],
        response: "Unternehmen wie Amazon, Google und Facebook haben eine weltweite Präsenz. Welche Auswirkungen dieser Unternehmen auf die moderne Gesellschaft beeindrucken Sie oder wecken Ihr Interesse?"
    },
    {
        keywords: ["Kulinarische Trends", "Foodtrucks", "Superfoods", "Gastronomie"],
        response: "Die kulinarische Welt ist voller spannender Trends, sei es durch Foodtrucks, die Beliebtheit von Superfoods oder die Vielfalt der Gastronomieszene. Haben Sie persönliche Vorlieben oder möchten Sie mehr über aktuelle kulinarische Entwicklungen erfahren?"
    },
    {
        keywords: ["Globale Sportevents", "Olympische Spiele", "FIFA Weltmeisterschaft"],
        response: "Sportevents wie die Olympischen Spiele und die FIFA Weltmeisterschaft begeistern Menschen weltweit. Welche dieser globalen Sportveranstaltungen verfolgen Sie aktiv, oder haben Sie besondere Erinnerungen an vergangene Events?"
    },
    {
        keywords: ["Technologische Innovationen", "Künstliche Intelligenz", "Quantencomputing"],
        response: "Technologische Innovationen, darunter Fortschritte in Künstlicher Intelligenz und Quantencomputing, prägen die Zukunft. Wie stehen Sie zu diesen innovativen Technologien, und haben Sie spezifische Fragen dazu?"
    },
    {
        keywords: ["Nachhaltige Lifestyle-Entscheidungen", "Zero Waste", "Upcycling"],
        response: "Nachhaltigkeit wird immer wichtiger, sei es durch Zero-Waste-Lebensstile oder Upcycling-Initiativen. Inwiefern integrieren Sie nachhaltige Entscheidungen in Ihren Lebensstil, oder haben Sie Tipps für ein umweltfreundlicheres Dasein?"
    },
    {
        keywords: ["Wissenschaftsfiktion und Zukunftsvisionen", "Sci-Fi-Literatur", "Futuristische Technologien"],
        response: "Die Welt der Wissenschaftsfiktion und Zukunftsvisionen ist faszinierend, sei es in der Literatur oder durch die Vorstellung futuristischer Technologien. Welche Werke oder Technologien aus diesem Bereich begeistern Sie am meisten?"
    },
    {
        keywords: ["Digitale Transformation", "Smart Cities", "IoT-Anwendungen"],
        response: "Die digitale Transformation prägt Städte weltweit durch Smart-City-Konzepte und das Internet der Dinge (IoT). Welche Entwicklungen im Bereich der digitalen Transformation verfolgen Sie, oder haben Sie persönliche Erfahrungen damit gemacht?"
    },
    {
        keywords: ["Gesundheitsbewusste Lebensweise", "Fitness-Trends", "Mental Health"],
        response: "Die Bedeutung einer gesundheitsbewussten Lebensweise zeigt sich in aktuellen Fitness-Trends und einem wachsenden Fokus auf mentale Gesundheit. Wie gestalten Sie Ihre eigene gesundheitsbewusste Lebensweise, und haben Sie Tipps, die Sie teilen möchten?"
    },
    {
        keywords: ["Kreative Hobbys", "DIY-Projekte", "Kunsthandwerk"],
        response: "Kreative Hobbys wie DIY-Projekte und Kunsthandwerk sind Ausdruck individueller Kreativität. Welche kreativen Hobbys pflegen Sie, oder gibt es spezielle Projekte, die Sie in Angriff nehmen?"
    }, {
        keywords: ["Berühmte Persönlichkeiten", "Elon Musk", "The Rock", "Ronaldo", "Oprah Winfrey", "Malala Yousafzai", "Leonardo DiCaprio"],
        response: "Diese beeindruckenden Persönlichkeiten haben auf ihren jeweiligen Gebieten außergewöhnliche Beiträge geleistet. Ob es um Technologie, Entertainment oder soziales Engagement geht, sie inspirieren viele Menschen weltweit. Haben Sie eine spezielle Bewunderung für Elon Musk, The Rock, Ronaldo, Oprah Winfrey, Malala Yousafzai oder Leonardo DiCaprio?"
    },
    {
        keywords: ["Innovative Unternehmer", "Jeff Bezos", "Mark Zuckerberg", "Jack Ma", "Bill Gates"],
        response: "Diese visionären Unternehmer, darunter Jeff Bezos von Amazon, Mark Zuckerberg von Facebook, Jack Ma von Alibaba und Bill Gates von Microsoft, haben die Geschäftswelt nachhaltig beeinflusst. Welche dieser innovativen Köpfe ziehen Sie besonders an, oder haben Sie Fragen zu ihren Unternehmensstrategien?"
    },
    {
        keywords: ["Kulturelle Ikonen", "Beyoncé", "David Beckham", "Taylor Swift"],
        response: "Kulturelle Ikonen wie Beyoncé, David Beckham und Taylor Swift haben nicht nur in ihren jeweiligen Branchen, sei es Musik, Sport oder Mode, enorme Erfolge erzielt, sondern auch starke Einflüsse auf die Popkultur ausgeübt. Teilen Sie die Begeisterung für das Schaffen dieser Künstler, oder haben Sie persönliche Geschichten dazu?"
    },
    {
        keywords: ["Wissenschaftliche Genies", "Stephen Hawking", "Jane Goodall", "Neil deGrasse Tyson"],
        response: "Wissenschaftliche Genies wie Stephen Hawking, Jane Goodall und Neil deGrasse Tyson haben bahnbrechende Erkenntnisse und Leistungen in ihren jeweiligen wissenschaftlichen Feldern erbracht. Welche dieser brillanten Köpfe beeindrucken Sie am meisten, oder haben Sie Interesse an ihren Forschungsarbeiten?"
    },
    {
        keywords: ["Filmlegenden", "Meryl Streep", "Tom Hanks", "Morgan Freeman"],
        response: "Filmlegenden wie Meryl Streep, Tom Hanks und Morgan Freeman haben mit ihrer außergewöhnlichen schauspielerischen Begabung die Filmwelt geprägt. Welche Werke dieser Schauspieler schätzen Sie besonders, oder haben Sie Lieblingsfilme von anderen Filmlegenden?"
    },
    {
        keywords: ["Musikalische Talente", "Adele", "Ed Sheeran", "BTS"],
        response: "Musikalische Talente wie Adele, Ed Sheeran und BTS haben mit ihren einzigartigen Stimmen und kreativen musikalischen Werken weltweit Millionen von Fans begeistert. Welche Songs dieser Künstler berühren Sie persönlich, oder haben Sie andere musikalische Favoriten?"
    },
    {
        keywords: ["Sportliche Legenden", "Michael Jordan", "Serena Williams", "Usain Bolt"],
        response: "Sportliche Legenden wie Michael Jordan, Serena Williams und Usain Bolt haben durch ihre beeindruckenden Leistungen Sportgeschichte geschrieben. Verfolgen Sie aktiv den Sport, oder haben Sie spezielle Erinnerungen an Momente, in denen diese Athleten herausragende Leistungen erbracht haben?"
    },
    {
        keywords: ["Politische Persönlichkeiten", "Angela Merkel", "Barack Obama", "Nelson Mandela"],
        response: "Politische Persönlichkeiten wie Angela Merkel, Barack Obama und Nelson Mandela haben durch ihre Führungsqualitäten und politischen Beiträge die Welt beeinflusst. Welche politischen Figuren bewundern Sie, oder haben Sie Meinungen zu aktuellen politischen Entwicklungen?"
    },
    {
        keywords: ["Literarische Größen", "J.K. Rowling", "Haruki Murakami", "Chimamanda Ngozi Adichie"],
        response: "Literarische Größen wie J.K. Rowling, Haruki Murakami und Chimamanda Ngozi Adichie haben mit ihren Werken Leser weltweit fasziniert. Haben Sie Lieblingsbücher dieser Autoren gelesen, oder haben Sie andere literarische Vorlieben?"
    },
    {
        keywords: ["Modeikonen", "Coco Chanel", "Karl Lagerfeld", "Rihanna"],
        response: "Modeikonen wie Coco Chanel, Karl Lagerfeld und Rihanna haben die Modewelt mit ihren innovativen Designs und persönlichen Stilen geprägt. Welche Aspekte der Mode dieser Ikonen inspirieren Sie, oder haben Sie eigene Modevorlieben?"
    }, {
        keywords: ["Deutsche Fußballvereine", "FC Bayern München", "Borussia Dortmund", "FC Schalke 04", "Werder Bremen"],
        response: "Deutsche Fußballvereine wie der FC Bayern München, Borussia Dortmund und der FC Schalke 04 haben eine reiche Geschichte und eine große Fangemeinde. Haben Sie Lieblingsmomente oder Fragen zu diesen Vereinen?"
    },
    {
        keywords: ["Berühmte deutsche Fußballer", "Miroslav Klose", "Franz Beckenbauer", "Bastian Schweinsteiger"],
        response: "Berühmte deutsche Fußballer wie Miroslav Klose, Franz Beckenbauer und Bastian Schweinsteiger haben durch ihre beeindruckenden Leistungen sowohl national als auch international Anerkennung gefunden. Welche dieser Spieler bewundern Sie besonders, oder interessieren Sie sich für aktuelle Entwicklungen im deutschen Fußball?"
    },
    {
        keywords: ["Bundesliga", "DFB-Pokal", "Deutsche Nationalmannschaft"],
        response: "Die Bundesliga, der DFB-Pokal und die deutsche Nationalmannschaft sind Eckpfeiler des deutschen Fußballs. Verfolgen Sie regelmäßig Spiele oder haben Sie spezielle Erinnerungen an herausragende Momente in diesen Wettbewerben?"
    },
    {
        keywords: ["UEFA Champions League", "Europapokal", "Europäische Fußballwettbewerbe"],
        response: "Die UEFA Champions League und andere europäische Fußballwettbewerbe ziehen Fußballfans weltweit in ihren Bann. Welche Teams verfolgen Sie in internationalen Turnieren, oder haben Sie Lieblingsmomente aus vergangenen Champions-League-Saisons?"
    },
    {
        keywords: ["Fußballtransfers", "Transfermarkt", "Gerüchteküche"],
        response: "Die Welt des Fußballs ist auch von aufregenden Transfers und Gerüchten geprägt. Verfolgen Sie den Transfermarkt, oder haben Sie spezifische Fragen zu aktuellen Transfergerüchten oder Wechseln?"
    },   {
        keywords: ["Deutsche Großstädte", "Berlin", "Hamburg", "München", "Köln", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig", "Bremen", "Dresden", "Hannover", "Nürnberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn"],
        response: "Deutsche Großstädte wie Berlin, Hamburg, München und viele andere zeichnen sich durch ihre Vielfalt, Kultur und Geschichte aus. Haben Sie eine bestimmte Stadt, zu der Sie mehr erfahren möchten, oder planen Sie vielleicht einen Besuch?"
    },
    {
        keywords: ["Städtereisen", "Deutsche Reiseziele", "Sehenswürdigkeiten"],
        response: "Städtereisen innerhalb Deutschlands bieten eine Fülle von Sehenswürdigkeiten und Erlebnissen. Planen Sie eine Reise oder möchten Sie Empfehlungen für sehenswerte Orte in deutschen Großstädten erhalten?"
    },
    {
        keywords: ["Lebensqualität", "Deutsche Städte-Rankings", "Wohnen in Deutschland"],
        response: "Deutsche Großstädte werden oft für ihre hohe Lebensqualität geschätzt. Haben Sie Fragen zu Städte-Rankings oder überlegen Sie, in einer deutschen Großstadt zu leben? Ich stehe Ihnen mit Informationen dazu gerne zur Verfügung."
    },    {
        keywords: ["Deutsche Unternehmen", "Volkswagen", "Siemens", "BASF", "Deutsche Bank", "Bayer", "SAP", "Daimler", "Allianz", "Adidas", "Bosch", "Deutsche Telekom", "Lufthansa", "BMW", "Mercedes-Benz", "Audi", "BASF"],
        response: "Deutsche Unternehmen wie Volkswagen, Siemens, BASF und viele andere prägen die Wirtschaftslandschaft. Interessieren Sie sich für bestimmte deutsche Unternehmen oder möchten Sie mehr über die Wirtschaft in Deutschland erfahren?"
    },
    {
        keywords: ["Startups in Deutschland", "Innovative Unternehmen", "Deutsche Wirtschaft"],
        response: "Die deutsche Wirtschaft zeichnet sich durch eine Vielzahl von Unternehmen aus, von etablierten Größen bis hin zu aufstrebenden Startups. Haben Sie Interesse an innovativen Unternehmen oder möchten Sie mehr über die Startup-Szene in Deutschland wissen?"
    },{
        keywords: ["Teller", "Geschirr", "Essgeschirr"],
        response: "Ein Teller ist ein flacher Behälter, der zum Servieren von Speisen verwendet wird. Es gibt verschiedene Arten von Tellern, wie zum Beispiel Suppenteller, Essteller und Dessertteller. Haben Sie spezielle Fragen zu Tellern oder ihrer Verwendung?"
        },
        {
        keywords: ["Flasche", "Trinkflasche", "Getränkebehälter"],
        response: "Eine Flasche ist ein Behälter, der dazu dient, Flüssigkeiten aufzubewahren. Trinkflaschen sind oft wiederverwendbar und eignen sich gut für den Transport von Getränken. Haben Sie Fragen zu bestimmten Flaschen oder ihrer Auswahl?"
        },
        {
        keywords: ["Tisch", "Möbelstück", "Esszimmertisch"],
        response: "Ein Tisch ist ein Möbelstück mit einer flachen Oberfläche, das oft zum Essen, Arbeiten oder für andere Aktivitäten genutzt wird. Es gibt verschiedene Arten von Tischen, wie Esszimmertische, Schreibtische und Beistelltische. Benötigen Sie Informationen zu Tischen oder deren Pflege?"
        },
        {
        keywords: ["Stein", "Naturmaterial", "Mineral"],
        response: "Ein Stein ist ein festes, natürliche vorkommendes Material, das oft aus Mineralen besteht. Steine können für verschiedene Zwecke verwendet werden, von Bauarbeiten bis hin zu Dekoration. Haben Sie Fragen zu bestimmten Steinen oder ihrer geologischen Bedeutung?"
        },
        {
        keywords: ["Lampe", "Beleuchtung", "Leuchtmittel"],
        response: "Eine Lampe ist ein Beleuchtungsgerät, das dazu dient, einen Raum zu erhellen. Es gibt verschiedene Arten von Lampen, wie Stehlampen, Tischlampen und Deckenlampen. Möchten Sie mehr über Lampenarten oder ihre Installation erfahren?"
        },
        {
        keywords: ["Buch", "Literatur", "Schmöker"],
        response: "Ein Buch ist eine gebundene oder geheftete Sammlung von bedruckten oder beschriebenen Blättern. Bücher dienen der Übermittlung von Wissen, Geschichten oder Unterhaltung. Interessieren Sie sich für bestimmte Bücher, Autoren oder Genres?"
        },
        {
        keywords: ["Fahrrad", "Fortbewegungsmittel", "Zweirad"],
        response: "Ein Fahrrad ist ein Fortbewegungsmittel mit zwei Rädern, das durch Muskelkraft angetrieben wird. Es ist sowohl ein beliebtes Verkehrsmittel als auch ein Freizeitgerät. Haben Sie Fragen zu Fahrrädern, deren Wartung oder Auswahl?"
        },
        {
        keywords: ["Computer", "Elektronik", "Informationstechnologie"],
        response: "Ein Computer ist ein elektronisches Gerät, das Daten verarbeiten kann. Computer sind in verschiedenen Formen erhältlich, von Desktop-Computern bis hin zu Laptops und Tablets. Benötigen Sie Hilfe bei technischen Fragen zu Computern oder Software?"
        },
        {
        keywords: ["Kamera", "Fotografie", "Aufnahmegerät"],
        response: "Eine Kamera ist ein Gerät, das Bilder oder Videos aufnehmen kann. Es gibt verschiedene Arten von Kameras, einschließlich Digitalkameras und Smartphone-Kameras. Interessieren Sie sich für Fotografie oder haben Sie Fragen zu bestimmten Kameramodellen?"
        },
        {
        keywords: ["Schuhe", "Fußbekleidung", "Modeaccessoire"],
        response: "Schuhe sind Kleidungsstücke, die am Fuß getragen werden und dazu dienen, die Füße zu schützen und zu unterstützen. Es gibt verschiedene Arten von Schuhen, wie Sneaker, Stiefel und Sandalen. Möchten Sie mehr über Schuhmode oder Pflegetipps erfahren?"
        },{
            keywords: ["Wetter", "Temperatur", "Regen"],
            response: "Das Wetter kann je nach Standort variieren. Möchten Sie wissen, wie das Wetter in Ihrer Region ist?"
        },{
            keywords: ["Wochenendpläne", "Freizeitgestaltung"],
            response: "Das Wochenende steht vor der Tür! Haben Sie bereits Pläne oder brauchen Sie Vorschläge für Freizeitaktivitäten?"
        },
        {
            keywords: ["Träume", "Ziele", "Visionen"],
            response: "Träume und Ziele sind inspirierend! Gibt es etwas Bestimmtes, das Sie erreichen oder erleben möchten?"
        },
        {
            keywords: ["Lieblingszitat", "Lebensweisheit"],
            response: "Haben Sie ein Lieblingszitat oder eine Lebensweisheit, die Sie inspiriert? Teilen Sie es gerne mit mir!"
        },
        {
            keywords: ["Lieblingsfarbe", "Ästhetik", "Design"],
            response: "Farben beeinflussen unsere Stimmung. Haben Sie eine Lieblingsfarbe oder ein bevorzugtes Design?"
        },
        {
            keywords: ["Lieblingsjahreszeit", "Wettervorlieben"],
            response: "Jede Jahreszeit hat ihren Charme. Welche ist Ihre Lieblingsjahreszeit, und warum mögen Sie sie besonders?"
        },
        {
            keywords: ["Familie", "Freunde", "Beziehungen"],
            response: "Beziehungen sind wichtig im Leben. Möchten Sie über Ihre Familie, Freunde oder zwischenmenschliche Beziehungen sprechen?"
        },
        {
            keywords: ["Herausforderungen", "Überwindung", "Erfahrungen"],
            response: "Herausforderungen machen uns stark. Haben Sie eine besondere Herausforderung gemeistert oder benötigen Sie Ratschläge dazu?"
        },
        {
            keywords: ["Lieblingsbücher", "Buchempfehlungen", "Lesegewohnheiten"],
            response: "Bücher öffnen neue Welten. Haben Sie Lieblingsbücher oder suchen Sie nach Empfehlungen für Ihr nächstes Leseabenteuer?"
        },
        {
            keywords: ["Zukunftspläne", "Berufliche Ambitionen", "Lebensziele"],
            response: "Die Zukunft ist aufregend! Haben Sie konkrete Pläne oder langfristige Ziele, über die Sie sprechen möchten?"
        },
        {
            keywords: ["Lieblingszitate", "Inspirierende Worte", "Motivation"],
            response: "Inspirierende Worte können motivieren. Teilen Sie mir Ihr Lieblingszitat oder eine Quelle der Motivation mit!"
        },
        {
            keywords: ["Haustiere", "Tierliebe", "Haustiererlebnisse"],
            response: "Haustiere bringen Freude ins Leben. Haben Sie ein Haustier oder schöne Erlebnisse mit Tieren, die Sie teilen möchten?"
        },
        {
            keywords: ["Lustige Erlebnisse", "Humor", "Komik"],
            response: "Lachen ist gesund! Haben Sie lustige Erlebnisse, Anekdoten oder Witze, die Sie gerne teilen würden?"
        },
        {
            keywords: ["Musikinstrumente", "Musikalische Talente", "Musikerlebnisse"],
            response: "Musik verbindet Menschen. Spielen Sie ein Musikinstrument oder haben Sie besondere Erlebnisse im Zusammenhang mit Musik?"
        },
        {
            keywords: ["Gute Taten", "Freiwilligenarbeit", "Gesellschaftliches Engagement"],
            response: "Gutes tun bereichert das Leben. Engagieren Sie sich in Freiwilligenarbeit oder haben Sie positive Erfahrungen mit gesellschaftlichem Engagement?"
        },
        {
            keywords: ["Schreibgewohnheiten", "Kreatives Schreiben", "Literarische Vorlieben"],
            response: "Das geschriebene Wort ist kraftvoll. Haben Sie Schreibgewohnheiten, Interesse am kreativen Schreiben oder literarische Vorlieben?"
        },
        {
            keywords: ["Lieblingsurlaubsorte", "Reiseerlebnisse", "Abenteuer"],
            response: "Reisen erweitert den Horizont. Welche sind Ihre Lieblingsurlaubsorte oder haben Sie spannende Reiseerlebnisse zu teilen?"
        },
        {
            keywords: ["Filmgenres", "Cineastische Vorlieben", "Filmkritiken"],
            response: "Filme sind vielfältig. Mögen Sie bestimmte Filmgenres oder haben Sie kürzlich einen Film gesehen, den Sie empfehlen können?"
        },
        {
            keywords: ["Faszinierende Fakten", "Wissenswertes", "Kuriositäten"],
            response: "Die Welt ist voller faszinierender Fakten. Haben Sie Interesse an wissenswerten Informationen oder möchten Sie etwas Ungewöhnliches teilen?"
        } ,{
            keywords: ["Kaffeevariationen", "Barista-Tipps", "Kaffeebohnen"],
            response: "Kaffee ist mehr als nur ein Getränk. Möchten Sie mehr über verschiedene Kaffeevariationen, Barista-Tipps oder Empfehlungen für hochwertige Kaffeebohnen erfahren?"
        },
        {
            keywords: ["Outdoor-Aktivitäten", "Wandern", "Camping"],
            response: "Die Natur bietet viele Möglichkeiten für Outdoor-Aktivitäten. Interessieren Sie sich für Wandern, Camping oder haben Sie Fragen zu Ausrüstung und Routen?"
        },
        {
            keywords: ["Haustierpflege", "Tiergesundheit", "Haustiertraining"],
            response: "Haustiere sind wunderbare Begleiter. Benötigen Sie Tipps zur Haustierpflege, Informationen zur Tiergesundheit oder Ratschläge zum Haustiertraining?"
        },
        {
            keywords: ["Yoga für Anfänger", "Meditationstechniken", "Stressabbau"],
            response: "Yoga und Meditation können zu mehr Wohlbefinden führen. Sind Sie ein Yoga-Anfänger, suchen Sie nach Meditationstechniken oder möchten Sie über Stressabbau sprechen?"
        },
        {
            keywords: ["Sprachlern-Apps", "Fremdsprachen", "Sprachtipps"],
            response: "Das Erlernen neuer Sprachen kann aufregend sein. Nutzen Sie Sprachlern-Apps, interessieren Sie sich für Fremdsprachen oder benötigen Sie Tipps zum effektiven Sprachenlernen?"
        },
        {
            keywords: ["Gartenpflege", "Pflanzenzucht", "Gartengestaltung"],
            response: "Gärtnern ist eine entspannende Aktivität. Haben Sie Fragen zur Gartenpflege, Pflanzenzucht oder suchen Sie nach Ideen für die Gestaltung Ihres Gartens?"
        }, {
            keywords: ["Freiberufler-Tipps", "Selbstständigkeit", "Home Office"],
            response: "Freiberuflich tätig zu sein, erfordert bestimmte Fähigkeiten. Brauchen Sie Tipps für Freiberufler, Informationen zur Selbstständigkeit oder Ratschläge für ein effektives Home Office?"
        },
        {
            keywords: ["Astrophotographie", "Sternenhimmel", "Teleskope"],
            response: "Die Faszination des Sternenhimmels kann durch Astrophotographie festgehalten werden. Interessieren Sie sich für Tipps zur Astrophotographie oder möchten Sie mehr über Teleskope erfahren?"
        },
        {
            keywords: ["Nachhaltiger Lebensstil", "Umweltschutz", "Zero Waste"],
            response: "Ein nachhaltiger Lebensstil ist wichtig für unseren Planeten. Möchten Sie Tipps für einen nachhaltigen Lebensstil, Informationen zum Umweltschutz oder Zero-Waste-Ideen erhalten?"
        },
        {
            keywords: ["DIY-Projekte", "Handwerken", "Kreativität"],
            response: "Selbstgemachte Projekte können viel Freude bereiten. Suchen Sie nach DIY-Ideen, Tipps zum Handwerken oder möchten Sie Ihre kreative Seite entdecken?"
        },
        {
            keywords: ["Neue Buchveröffentlichungen", "Buchempfehlungen", "Literaturtipps"],
            response: "Lesen Sie gerne? Interessieren Sie sich für die neuesten Buchveröffentlichungen, Buchempfehlungen oder Literaturtipps in verschiedenen Genres?"
        },
        {
            keywords: ["Hausmittel gegen Erkältung", "Gesundheitstipps", "Wellness"],
            response: "Natürliche Hausmittel können bei Erkältungen hilfreich sein. Suchen Sie nach Gesundheitstipps oder möchten Sie mehr über Wellnesspraktiken erfahren?"
        }, {
            keywords: ["Lieblingsmusik", "Konzerte", "Musikempfehlungen"],
            response: "Musik verbindet Menschen. Teilen Sie Ihre Lieblingsmusik mit mir, oder suchen Sie nach Konzerttipps und Musikempfehlungen?"
        },
        {
            keywords: ["Reiseabenteuer", "Urlaubsziele", "Geheimtipps"],
            response: "Reisen eröffnet neue Horizonte. Haben Sie besondere Reiseabenteuer erlebt? Oder suchen Sie nach inspirierenden Urlaubszielen und Geheimtipps?"
        },
        {
            keywords: ["Fitnessziele", "Workouts", "Gesunde Gewohnheiten"],
            response: "Gesundheit ist wichtig. Möchten Sie über Ihre Fitnessziele sprechen, Tipps für Workouts erhalten oder nach gesunden Gewohnheiten suchen?"
        },
        {
            keywords: ["Kunst und Kreativität", "Kunstprojekte", "Künstlerempfehlungen"],
            response: "Kunst ist Ausdruck. Teilen Sie Ihre kreativen Projekte mit mir, oder suchen Sie nach neuen Ideen und Künstlerempfehlungen?"
        },
        {
            keywords: ["Haustiere", "Tierfreunde", "Tierpflege"],
            response: "Haustiere bereichern unser Leben. Haben Sie Haustiere und möchten darüber plaudern? Oder suchen Sie nach Tipps zur Tierpflege?"
        },
        {
            keywords: ["Nachtleben", "Veranstaltungen", "Partytipps"],
            response: "Das Nachtleben hat viel zu bieten. Interessieren Sie sich für angesagte Veranstaltungen, oder suchen Sie nach Partytipps für das Wochenende?"
        },{
            keywords: ["Leonardo DiCaprio"],
            response: "Leonardo DiCaprio, der Oscar-prämierte Schauspieler, hat in vielen ikonischen Filmen mitgewirkt. Welcher seiner Filme ist Ihr Favorit?"
        },
        {
            keywords: ["Serena Williams"],
            response: "Serena Williams, eine der erfolgreichsten Tennisspielerinnen aller Zeiten. Sind Sie ein Tennisfan oder verfolgen Sie ihre Karriere?"
        },
        {
            keywords: ["Tom Hanks"],
            response: "Tom Hanks, der vielseitige Schauspieler, hat uns mit seinen Rollen in Filmen wie Forrest Gump und Cast Away begeistert. Haben Sie einen Lieblingsfilm von ihm?"
        },
        {
            keywords: ["Usain Bolt"],
            response: "Usain Bolt, der schnellste Mann der Welt, hat zahlreiche Rekorde gebrochen. Bewundern Sie seine Leistungen im Sprint?"
        },
        {
            keywords: ["Emma Watson"],
            response: "Emma Watson, bekannt für ihre Rolle als Hermine Granger in der Harry-Potter-Filmreihe. Sind Sie ein Fan von Harry Potter oder mögen Sie ihre späteren Arbeiten?"
        },
        {
            keywords: ["Lionel Messi"],
            response: "Lionel Messi, einer der besten Fußballspieler aller Zeiten. Welchem Fußballverein fiebern Sie mit oder bewundern Sie Messis spielerisches Können?"
        },   {
            keywords: ["Johnny Depp"],
            response: "Johnny Depp, ein charismatischer Schauspieler mit vielseitigen Rollen. Haben Sie einen Lieblingsfilm mit Johnny Depp?"
        },
        {
            keywords: ["Serena Williams"],
            response: "Serena Williams, die Tenniskönigin mit zahlreichen Grand-Slam-Titeln. Verfolgen Sie aktiv Tennisturniere oder interessieren Sie sich für ihre sportlichen Erfolge?"
        },
        {
            keywords: ["Brad Pitt"],
            response: "Brad Pitt, ein Hollywood-Ikone mit einer beeindruckenden Karriere. Mögen Sie Filme mit Brad Pitt oder haben Sie einen Favoriten?"
        },
        {
            keywords: ["Michael Jordan"],
            response: "Michael Jordan, eine Basketballlegende und Unternehmer. Sind Sie ein Basketballfan oder bewundern Sie Jordans Einfluss auf Sport und Mode?"
        },
        {
            keywords: ["Natalie Portman"],
            response: "Natalie Portman, eine talentierte Schauspielerin und Oscar-Preisträgerin. Welchen Film mit Natalie Portman mögen Sie am liebsten?"
        },
        {
            keywords: ["Cristiano Ronaldo"],
            response: "Cristiano Ronaldo, einer der besten Fußballer der Welt. Welchem Fußballverein sind Sie verbunden oder bewundern Sie Ronaldos sportliche Fähigkeiten?"
        },
        {
            keywords: ["Meryl Streep"],
            response: "Meryl Streep, eine herausragende Schauspielerin mit zahlreichen Auszeichnungen. Haben Sie einen Lieblingsfilm mit Meryl Streep?"
        },  {
            keywords: ["Keanu Reeves"],
            response: "Keanu Reeves, ein charismatischer Schauspieler und Kultfigur. Welcher Keanu-Reeves-Film ist Ihr Favorit?"
        },
        {
            keywords: ["Adele"],
            response: "Adele, die Grammy-prämierte Sängerin mit einer kraftvollen Stimme. Mögen Sie die Musik von Adele oder haben Sie einen Lieblingssong?"
        },
        {
            keywords: ["Chris Hemsworth"],
            response: "Chris Hemsworth, bekannt als Thor im Marvel Cinematic Universe. Sind Sie ein Fan von Superheldenfilmen oder mögen Sie Chris Hemsworths Schauspielkunst?"
        },
        {
            keywords: ["Beyoncé"],
            response: "Beyoncé, eine ikonische Sängerin und Performerin. Mögen Sie die Musik von Beyoncé oder haben Sie an ihren Konzerten teilgenommen?"
        },
        {
            keywords: ["Ryan Reynolds"],
            response: "Ryan Reynolds, ein charmanter Schauspieler mit einer Vorliebe für Humor. Haben Sie einen Lieblingsfilm mit Ryan Reynolds?"
        },
        {
            keywords: ["Zendaya"],
            response: "Zendaya, eine aufstrebende Schauspielerin und Sängerin. Sind Sie mit Zendayas Arbeit vertraut oder haben Sie einen Lieblingsfilm oder Song?"
        },
        {
            keywords: ["Idris Elba"],
            response: "Idris Elba, ein vielseitiger Schauspieler und DJ. Welche Rolle von Idris Elba hat Sie am meisten beeindruckt?"
        },  {
            keywords: ["Jennifer Lawrence"],
            response: "Jennifer Lawrence, eine talentierte Schauspielerin mit beeindruckenden Leistungen. Mögen Sie Filme mit Jennifer Lawrence oder haben Sie einen Favoriten?"
        },
        {
            keywords: ["Dwayne Johnson"],
            response: "Dwayne Johnson, auch bekannt als The Rock, eine vielseitige Persönlichkeit im Entertainment. Verfolgen Sie Dwayne Johnsons Filme oder Wrestling-Karriere?"
        },
        {
            keywords: ["Taylor Swift"],
            response: "Taylor Swift, eine preisgekrönte Singer-Songwriterin. Mögen Sie Taylor Swifts Musik oder haben Sie einen Lieblingssong von ihr?"
        },
        {
            keywords: ["Robert Downey Jr."],
            response: "Robert Downey Jr., der Iron Man im Marvel Cinematic Universe. Sind Sie ein Fan von Superheldenfilmen oder mögen Sie Robert Downey Jr.s schauspielerisches Können?"
        },
        {
            keywords: ["Angelina Jolie"],
            response: "Angelina Jolie, eine ikonische Schauspielerin und Menschenrechtsaktivistin. Mögen Sie Filme mit Angelina Jolie oder schätzen Sie ihre humanitären Bemühungen?"
        },
        {
            keywords: ["Chris Evans"],
            response: "Chris Evans, bekannt als Captain America. Sind Sie ein Fan von Superheldenfilmen oder mögen Sie Chris Evans' Darstellung von Captain America?"
        },
        {
            keywords: ["Selena Gomez"],
            response: "Selena Gomez, eine erfolgreiche Schauspielerin und Sängerin. Mögen Sie Selena Gomezs Musik oder haben Sie einen Lieblingsfilm mit ihr?"
        }, {
            keywords: ["Chris Hemsworth"],
            response: "Chris Hemsworth, bekannt als Thor im Marvel Cinematic Universe. Mögen Sie Superheldenfilme oder mögen Sie Chris Hemsworths schauspielerisches Talent?"
        },
        {
            keywords: ["Adele"],
            response: "Adele, eine herausragende britische Sängerin mit einer kraftvollen Stimme. Mögen Sie Adeles Musik oder haben Sie einen Lieblingssong von ihr?"
        },
        {
            keywords: ["Keanu Reeves"],
            response: "Keanu Reeves, ein beliebter Schauspieler mit vielseitigen Rollen. Haben Sie einen Lieblingsfilm mit Keanu Reeves oder mögen Sie seine Persönlichkeit?"
        },
        {
            keywords: ["Zendaya"],
            response: "Zendaya, eine talentierte Schauspielerin und Sängerin. Mögen Sie Filme oder Musik von Zendaya, oder bewundern Sie ihre Vielseitigkeit als Künstlerin?"
        },
        {
            keywords: ["Chris Pratt"],
            response: "Chris Pratt, ein charismatischer Schauspieler bekannt für Rollen in Filmen wie Guardians of the Galaxy. Mögen Sie Science-Fiction-Filme oder mögen Sie Chris Pratts Humor?"
        },
        {
            keywords: ["Shakira"],
            response: "Shakira, eine international renommierte Sängerin und Tänzerin. Mögen Sie Shakiras Musik oder haben Sie einen Lieblingssong von ihr?"
        },
        {
            keywords: ["Will Smith"],
            response: "Will Smith, ein vielseitiger Schauspieler und Musiker. Mögen Sie Filme mit Will Smith oder mögen Sie seine Musikkarriere?"
        },    {
            keywords: ["Kevin Hart"],
            response: "Kevin Hart, ein charismatischer Comedian und Schauspieler. Mögen Sie Stand-up-Comedy oder haben Sie einen Lieblingsauftritt von Kevin Hart?"
        },
        {
            keywords: ["Antoine Griezmann"],
            response: "Antoine Griezmann, ein talentierter französischer Fußballer. Verfolgen Sie Fußballspiele oder haben Sie eine Lieblingsmannschaft mit Griezmann?"
        },
        {
            keywords: ["Ina Müller"],
            response: "Ina Müller, eine vielseitige deutsche Moderatorin, Sängerin und Autorin. Mögen Sie deutsche Unterhaltung oder kennen Sie Ina Müllers Arbeit?"
        },
        {
            keywords: ["Jimmy Fallon"],
            response: "Jimmy Fallon, ein amerikanischer Comedian und Moderator. Schauen Sie Late-Night-Shows oder haben Sie einen Lieblingsmoment von Jimmy Fallon?"
        },
        {
            keywords: ["Manuel Neuer"],
            response: "Manuel Neuer, einer der besten deutschen Torhüter. Sind Sie Fußballfan oder bewundern Sie Manuel Neuers spielerische Fähigkeiten?"
        },
        {
            keywords: ["Atze Schröder"],
            response: "Atze Schröder, ein bekannter deutscher Comedian. Mögen Sie Comedy-Shows oder haben Sie Atze Schröder live gesehen?"
        },
        {
            keywords: ["Sandra Maischberger"],
            response: "Sandra Maischberger, eine renommierte deutsche Journalistin und Moderatorin. Schauen Sie deutsche Talkshows oder kennen Sie Sandra Maischbergers Arbeit?"
        },   {
            keywords: ["Ellen DeGeneres"],
            response: "Ellen DeGeneres, eine bekannte amerikanische Komikerin und Moderatorin. Mögen Sie Comedy-Shows oder haben Sie einen Lieblingsmoment von Ellen DeGeneres?"
        },
        {
            keywords: ["Toni Kroos"],
            response: "Toni Kroos, ein herausragender deutscher Fußballspieler. Verfolgen Sie Fußballspiele oder haben Sie eine Lieblingsmannschaft mit Toni Kroos?"
        },
        {
            keywords: ["Luke Mockridge"],
            response: "Luke Mockridge, ein beliebter deutscher Comedian. Mögen Sie Stand-up-Comedy oder haben Sie einen Lieblingsauftritt von Luke Mockridge?"
        },
        {
            keywords: ["Barbara Schöneberger"],
            response: "Barbara Schöneberger, eine bekannte deutsche Moderatorin und Entertainerin. Schauen Sie deutsche Unterhaltungsshows oder kennen Sie Barbara Schönebergers Arbeit?"
        },
        {
            keywords: ["Will Smith"],
            response: "Will Smith, ein vielseitiger amerikanischer Schauspieler und Musiker. Haben Sie einen Lieblingsfilm oder Song von Will Smith?"
        },
        {
            keywords: ["Oliver Kahn"],
            response: "Oliver Kahn, eine deutsche Torwartlegende. Sind Sie Fußballfan oder bewundern Sie Oliver Kahns beeindruckende Karriere?"
        },
        {
            keywords: ["Amy Schumer"],
            response: "Amy Schumer, eine amerikanische Komödiantin und Schauspielerin. Mögen Sie Comedy-Filme oder haben Sie einen Favoriten mit Amy Schumer?"
        }, 
        {
            keywords: ["Mark Zuckerberg"],
            response: "Mark Zuckerberg, Gründer von Facebook und einer der einflussreichsten Tech-Unternehmer. Interessieren Sie sich für soziale Medien oder haben Sie Fragen zu Mark Zuckerbergs Visionen?"
        },
        {
            keywords: ["Anne Will"],
            response: "Anne Will, eine renommierte deutsche Journalistin und Moderatorin. Verfolgen Sie politische Diskussionen oder kennen Sie Anne Wills Beiträge?"
        },
        {
            keywords: ["Kevin Hart"],
            response: "Kevin Hart, ein beliebter amerikanischer Comedian und Schauspieler. Mögen Sie Stand-up-Comedy oder haben Sie einen Lieblingsfilm mit Kevin Hart?"
        },
        {
            keywords: ["Thomas Müller"],
            response: "Thomas Müller, ein talentierter deutscher Fußballspieler. Fiebern Sie mit einem Fußballverein mit oder haben Sie eine Lieblingsmannschaft mit Thomas Müller?"
        },
        {
            keywords: ["Michelle Obama"],
            response: "Michelle Obama, ehemalige First Lady der USA und Aktivistin. Bewundern Sie ihre Arbeit im sozialen Bereich oder haben Sie Fragen zu ihren Projekten?"
        },
        {
            keywords: ["Bastian Schweinsteiger"],
            response: "Bastian Schweinsteiger, eine Fußballlegende und ehemaliger deutscher Nationalspieler. Sind Sie Fußballfan oder verfolgen Sie Schweinsteigers Karriere?"
        },
        {
            keywords: ["Rebel Wilson"],
            response: "Rebel Wilson, australische Schauspielerin und Komödiantin. Mögen Sie Comedy-Filme oder haben Sie einen Favoriten mit Rebel Wilson?"
        },
    

];