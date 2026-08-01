// UI strings. Shop-specific copy (tagline, services, FAQ…) lives in shop.json
// under `de`, not here — this file is identical for every shop we build.
//
// German is written for the Venlo border trade: Kaldenkirchen / Nettetal /
// Straelen customers crossing for a cheaper cut. Kept plain and direct rather
// than formal-corporate, and consistently "du" — a barbershop that sieze-s its
// customers sounds like a bank.

export const UI = {
  nl: {
    htmlLang: 'nl',
    locale: 'nl-NL',
    langName: 'Nederlands',
    langSuggest: 'Deze site is er ook in het Nederlands',
    langSuggestCta: 'Bekijk in het Nederlands',
    langSuggestClose: 'Sluiten',

    // ---- nav + dock ----
    // shop.json stores "Gesloten" as the closed-day marker; swapped at merge time
    closed: 'Gesloten',

    navPrices: 'Prijzen',
    navBook: 'Boeken',
    navWork: 'Werk',
    navReviews: 'Reviews',
    navVisit: 'Bezoek',
    navAppt: 'Afspraak',
    dockCall: 'Bellen',
    dockRoute: 'Route',
    callAria: 'Bel ons',

    // ---- home: hero ----
    whyHeadA: 'Strak geknipt,',
    whyHeadB: 'zonder gedoe.',
    heroBook: 'Boek je afspraak',
    heroSlotsToday: 'Vandaag nog plek vrij',
    openNowUntil: 'Nu open tot {t}',
    opensTodayAt: 'Vandaag open vanaf {t}',
    closedToday: 'Vandaag gesloten',
    // Dutch lowercases weekdays mid-sentence; German capitalises every noun.
    // This lives here rather than in the status script because it is a fact
    // about the language, not about opening hours.
    lowercaseDays: true,
    opensAgain: 'Weer open op {d}',
    googleReviewsCount: 'Google reviews',
    altInterior: 'Interieur van {n}',
    heroWalkIn: 'Vaak morgen al terecht · walk-in mogelijk',
    heroCallNow: 'Bel direct',

    // ---- home: sections ----
    eyebrowWhy: 'Waarom hier',
    faqHeadA: 'Goed om',
    faqHeadB: 'te weten',
    eyebrowPrices: 'Behandelingen',
    pricesTitle: 'Prijzen',
    pricesNote: 'Vaste prijzen. Pinnen en contant, beide prima.',
    eyebrowBefore: 'Het resultaat',
    beforeAfterTitle: 'Voor en na',
    dragToCompare: 'Sleep om te vergelijken',
    labelBefore: 'Voor',
    labelAfter: 'Na',
    eyebrowWork: 'Ons werk',
    workTitle: 'Vers geknipt',
    eyebrowReviews: 'Reviews',
    reviewsTitleA: 'Wat klanten',
    reviewsTitleB: 'ervan vinden',
    googleReviews: 'Google Reviews',
    eyebrowTeam: 'Het team',
    teamTitle: 'Je barbers',
    eyebrowFaq: 'Veelgestelde vragen',
    faqFoot: 'Staat je vraag er niet bij? Bel ons even, we helpen je zo verder.',
    eyebrowVisit: 'Bezoek ons',
    visitHours: 'Openingstijden',
    eyebrowCta: 'Tot snel',
    ctaTitleA: 'Klaar voor een',
    ctaTitleB: 'verse coupe?',
    ctaSub: 'Boek online in 30 seconden, of loop gewoon binnen.',
    ctaBook: 'Afspraak maken',

    // ---- booking: chrome ----
    bookTitle: 'Afspraak maken',
    stepService: 'Dienst',
    stepBarber: 'Barber',
    stepDate: 'Datum',
    stepDetails: 'Gegevens',
    next: 'Volgende',
    sendWhatsApp: 'Versturen via WhatsApp',

    // ---- booking: steps ----
    q1Title: 'Wat wil je laten doen?',
    q1Sub: 'Kies een behandeling om te beginnen.',
    q2Title: 'Bij wie wil je zitten?',
    q2Sub: 'Geen voorkeur? Dan pakken we de eerste die vrij is.',
    q3Title: 'Wanneer schikt het?',
    q3Sub: 'Kies een dag en daarna een tijd.',
    q4Title: 'Bijna klaar',
    q4Sub: 'Nog even je gegevens, dan sturen we het door.',
    formNote: 'Je WhatsApp opent met de afspraak er al in — jij drukt op verzenden.',
    anyBarber: 'Maakt niet uit',
    anyBarberSub: 'Eerste die vrij is',
    firstFree: 'Eerste barber die vrij is',

    // ---- booking: repeat ----
    againTitle: 'Weer hetzelfde?',
    againAt: 'bij',

    // ---- booking: form ----
    fieldName: 'Naam *',
    fieldNamePh: 'Je naam',
    fieldTel: 'Telefoon *',
    telPh: '06 12345678',
    fieldNote: 'Opmerking',
    notePh: 'Bijv. graag kort aan de zijkant',
    altCut: 'Kapsel bij {n}',
    basedOn: 'Gebaseerd op {n} reviews',
    optional: '(optioneel)',
    errInvalid: 'Vul je naam en een geldig telefoonnummer in.',

    // ---- booking: context bar ----
    ctxPickService: 'Kies een dienst',
    ctxPickBarber: 'Kies een barber',
    ctxPickDay: 'Kies een dag',
    ctxPickDayFirst: 'Kies eerst een dag',
    ctxNoSlots: 'Geen tijden meer op deze dag',
    slotsFree: '{n} tijden vrij',

    // ---- booking: done ----
    doneTitle: 'Tot snel!',
    doneSub: '{first}, je aanvraag staat klaar in WhatsApp. Even op verzenden drukken — '
      + 'daarna bevestigt <strong>{shop}</strong> je afspraak zo snel mogelijk.',
    doneBack: 'Welkom terug{name}. Heb je in WhatsApp op verzenden gedrukt? '
      + 'Dan hoor je snel van <strong>{shop}</strong>. Zo niet, dan kan het hieronder alsnog.',
    retryLabel: 'WhatsApp niet geopend?',
    retryBtn: 'Opnieuw proberen',
    addCal: 'Zet in mijn agenda',
    remindMe: 'Herinner me over 4 weken',
    backToSite: 'Terug naar de site',
    ratherCall: 'Liever even bellen?',

    // ---- calendar ----
    calAt: 'bij',
    calBarber: 'Barber',
    calTel: 'Tel',
    calRemind: 'Tijd voor de kapper',
    calLastTime: 'Vorige keer',
    calRebook: 'Opnieuw boeken',

    // ---- WhatsApp message ----
    // Headed as the three questions an owner actually asks when a request
    // lands mid-haircut: when, what, who. Labels beat a compact
    // dot-separated line here — he never has to learn the format, and it
    // reads the same whether it is his first booking or his hundredth.
    // Emoji are the owner's explicit choice. The pipeline is UTF-8 end to
    // end and encodeURIComponent emits correct bytes for every one of these
    // (verified: the barber pole leaves as %F0%9F%92%88). Whether they draw
    // is down to the receiving client owning an emoji font — phones do,
    // WhatsApp Desktop on a bare machine may not. Set emoji:false in a
    // shop's JSON to fall back to a plain-text version of this same layout.
    // Labelled rows: the owner never has to learn a format, and a glance
    // finds the field he wants by its label rather than by position.
    waNew: 'Nieuwe afspraak',
    waService: 'Behandeling',
    waDuration: 'Duur',
    waPrice: 'Prijs',
    waClient: 'Klant',
    waPhoneLbl: 'Telefoon',
    waBarberLbl: 'Barber',
    waNote: 'Opmerking',
    waSource: 'Bron',
    waWebReq: 'Website aanvraag',
    waConfirm: 'Tik op het nummer hierboven om te bellen en te bevestigen.',
  },

  de: {
    htmlLang: 'de',
    locale: 'de-DE',
    langName: 'Deutsch',
    langSuggest: 'Diese Seite gibt es auf Deutsch',
    langSuggestCta: 'Auf Deutsch ansehen',
    langSuggestClose: 'Schließen',

    closed: 'Geschlossen',

    navPrices: 'Preise',
    navBook: 'Termin',
    navWork: 'Arbeiten',
    navReviews: 'Bewertungen',
    navVisit: 'Anfahrt',
    navAppt: 'Termin',
    dockCall: 'Anrufen',
    dockRoute: 'Route',
    callAria: 'Ruf uns an',

    whyHeadA: 'Sauber geschnitten,',
    whyHeadB: 'ohne Umstände.',
    heroBook: 'Termin buchen',
    heroSlotsToday: 'Heute noch Termine frei',
    openNowUntil: 'Jetzt offen bis {t}',
    opensTodayAt: 'Heute offen ab {t}',
    closedToday: 'Heute geschlossen',
    lowercaseDays: false,
    opensAgain: 'Wieder offen am {d}',
    googleReviewsCount: 'Google Bewertungen',
    altInterior: 'Innenraum von {n}',
    heroWalkIn: 'Oft schon morgen · ohne Termin möglich',
    heroCallNow: 'Direkt anrufen',

    eyebrowWhy: 'Warum hier',
    faqHeadA: 'Gut zu',
    faqHeadB: 'wissen',
    eyebrowPrices: 'Leistungen',
    pricesTitle: 'Preise',
    pricesNote: 'Feste Preise. Karte und bar, beides kein Problem.',
    eyebrowBefore: 'Das Ergebnis',
    beforeAfterTitle: 'Vorher und nachher',
    dragToCompare: 'Ziehen zum Vergleichen',
    labelBefore: 'Vorher',
    labelAfter: 'Nachher',
    eyebrowWork: 'Unsere Arbeit',
    workTitle: 'Frisch geschnitten',
    eyebrowReviews: 'Bewertungen',
    reviewsTitleA: 'Was Kunden',
    reviewsTitleB: 'darüber sagen',
    googleReviews: 'Google Bewertungen',
    eyebrowTeam: 'Das Team',
    teamTitle: 'Deine Barber',
    eyebrowFaq: 'Häufige Fragen',
    faqFoot: 'Deine Frage ist nicht dabei? Ruf uns kurz an, wir helfen dir gerne weiter.',
    eyebrowVisit: 'Besuch uns',
    visitHours: 'Öffnungszeiten',
    eyebrowCta: 'Bis bald',
    ctaTitleA: 'Bereit für einen',
    ctaTitleB: 'frischen Schnitt?',
    ctaSub: 'Buche online in 30 Sekunden, oder komm einfach vorbei.',
    ctaBook: 'Termin buchen',

    bookTitle: 'Termin buchen',
    stepService: 'Leistung',
    stepBarber: 'Barber',
    stepDate: 'Datum',
    stepDetails: 'Daten',
    next: 'Weiter',
    sendWhatsApp: 'Über WhatsApp senden',

    q1Title: 'Was sollen wir machen?',
    q1Sub: 'Wähle eine Leistung, um zu starten.',
    q2Title: 'Zu wem möchtest du?',
    q2Sub: 'Keine Präferenz? Dann nehmen wir den, der zuerst frei ist.',
    q3Title: 'Wann passt es dir?',
    q3Sub: 'Wähle einen Tag und danach eine Uhrzeit.',
    q4Title: 'Fast fertig',
    q4Sub: 'Nur noch deine Daten, dann schicken wir es ab.',
    formNote: 'Dein WhatsApp öffnet sich mit dem Termin schon drin — du drückst auf Senden.',
    anyBarber: 'Ist mir egal',
    anyBarberSub: 'Wer zuerst frei ist',
    firstFree: 'Erster freier Barber',

    againTitle: 'Wieder dasselbe?',
    againAt: 'bei',

    fieldName: 'Name *',
    fieldNamePh: 'Dein Name',
    fieldTel: 'Telefon *',
    telPh: '0151 23456789',
    fieldNote: 'Anmerkung',
    notePh: 'Z. B. an den Seiten gerne kurz',
    altCut: 'Haarschnitt bei {n}',
    basedOn: 'Basierend auf {n} Bewertungen',
    optional: '(optional)',
    errInvalid: 'Bitte gib deinen Namen und eine gültige Telefonnummer an.',

    ctxPickService: 'Leistung wählen',
    ctxPickBarber: 'Barber wählen',
    ctxPickDay: 'Tag wählen',
    ctxPickDayFirst: 'Wähle zuerst einen Tag',
    ctxNoSlots: 'Keine Zeiten mehr an diesem Tag',
    slotsFree: '{n} Zeiten frei',

    doneTitle: 'Bis bald!',
    doneSub: '{first}, deine Anfrage liegt fertig in WhatsApp. Nur noch auf Senden drücken — '
      + 'danach bestätigt <strong>{shop}</strong> deinen Termin so schnell wie möglich.',
    doneBack: 'Willkommen zurück{name}. Hast du in WhatsApp auf Senden gedrückt? '
      + 'Dann hörst du bald von <strong>{shop}</strong>. Falls nicht, geht es unten noch mal.',
    retryLabel: 'WhatsApp nicht geöffnet?',
    retryBtn: 'Erneut versuchen',
    addCal: 'In meinen Kalender',
    remindMe: 'In 4 Wochen erinnern',
    backToSite: 'Zurück zur Website',
    ratherCall: 'Lieber kurz anrufen?',

    calAt: 'bei',
    calBarber: 'Barber',
    calTel: 'Tel',
    calRemind: 'Zeit für den Friseur',
    calLastTime: 'Letztes Mal',
    calRebook: 'Neu buchen',

    waNew: 'Neuer Termin',
    waService: 'Behandlung',
    waDuration: 'Dauer',
    waPrice: 'Preis',
    waClient: 'Kunde',
    waPhoneLbl: 'Telefon',
    waBarberLbl: 'Barber',
    waNote: 'Anmerkung',
    waSource: 'Quelle',
    waWebReq: 'Anfrage über die Website',
    waConfirm: 'Tippe auf die Nummer oben, um anzurufen und zu bestätigen.',
  },
};

// Every string is a plain placeholder template so the same dictionary can be
// JSON-serialised into the booking page's client script. fmt fills the blanks.
export const fmt = (str, vars = {}) =>
  String(str).replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? ''));

export const LANGS = ['nl', 'de'];
export const t = (lang) => UI[lang] || UI.nl;
// '' for Dutch (site root), '/de' for German — used to build every internal link.
export const base = (lang) => (lang === 'nl' ? '' : `/${lang}`);
