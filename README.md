# djur
Skapa en sida som skall presentera djur
# Översikt

Skapa en responsiv enkel-sida för ett fiktivt zoo som presenterar djur.  
Använd semantisk HTML (`header`, `nav`, `aside`, `main`, `article`, `figure`, `footer`), CSS Grid eller Flexbox för layout (**inga ramverk**), samt lite JavaScript för att visa mer information via `alert()`.

# Lärandemål

- Öva på semantisk HTML och tillgänglig struktur  
- Bygga responsiva layouter med CSS Grid/Flexbox  
- Implementera enkel filtrering/sökning och UI-interaktioner med JavaScript  
- Organisera filer och kod för tydlighet och underhållbarhet  

# Obligatoriska krav (för godkänt)

- **Header med navigation** (`<header>` + `<nav>`)  
- **Vänsterkolumn** (`<aside>`) för filtrering/sortering/sökning (minimikrav: ett sökfält)  
- **Huvudområde till höger** (`<main>`) där alla djurkort visas  

### Responsivt beteende
- **Mobil:** djurkorten staplas vertikalt (1 kolumn)  
- **Stora skärmar:** djuren visas i rader med **fyra djur per rad**  

### Djurdatastruktur (varje djur har)
- Namn  
- Typ  
- Färg  
- Beskrivning  
- Födelseår  

### Interaktion
- En knapp eller länk “Mer info” som använder `alert()` för att visa ytterligare information  

### Semantik & tillgänglighet
- Rätt taggar  
- `alt`-text för bilder  
- Logisk rubrikordning  
- Grundläggande ARIA-attribut vid behov  

### Begränsningar
- **Inga ramverk** (t.ex. Bootstrap). Använd endast ren HTML/CSS/JS.  

# Bra-att-ha (frivilligt)

- Sökning medan man skriver (debounce)  
- Sorteringsalternativ (namn/år)  
- Tydliga fokusstilar för tangentbord, skip-länk och meningsfulla ARIA-roller/etiketter  
- Modal istället för alert (men alert är tillräckligt)  
- Separata filer för HTML / CSS / JS  
- Bra bilder/bakgrund (Unsplash eller egna resurser)  
