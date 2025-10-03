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


# Overview

Create a responsive single-page site for a fictional zoo that presents animals.  
Use semantic HTML (`header`, `nav`, `aside`, `main`, `article`, `figure`, `footer`), CSS Grid or Flexbox for layout (**no frameworks**), and a bit of JavaScript to show more info via `alert()`.

# Learning Goals

- Practice semantic HTML and accessible structure  
- Build responsive layouts with CSS Grid/Flexbox  
- Implement simple client-side filtering/search and UI interactions with JavaScript  
- Organize files and code for clarity and maintainability  

# Must-Have Requirements (Pass Criteria)

- **Header with navigation** (`<header>` + `<nav>`)  
- **Left column** (`<aside>`) for filtering/sorting/search (at minimum: a search input)  
- **Right main area** (`<main>`) showing all animal cards  

### Responsive behavior
- **Mobile:** animal cards stacked vertically (1 column)  
- **Large screens:** animals displayed in rows with **four animals per row**  

### Animal data model (each animal has)
- Name  
- Type  
- Color  
- Description  
- Year of birth  

### Interaction
- A “More info” control that uses `alert()` to present additional information  

### Semantics & accessibility
- Proper HTML tags  
- `alt` text for images  
- Logical heading order  
- Basic ARIA attributes where appropriate  

### Restrictions
- **No frameworks** (e.g., Bootstrap). Use only plain HTML/CSS/JS.  

# Nice-to-Have (Optional)

- Search as-you-type (debounced)  
- Sort options (name/year)  
- Keyboard focus styles, skip link, and meaningful ARIA roles/labels  
- Modal instead of alert (but alert is acceptable)  
- Separate files for HTML / CSS / JS  
- Good images/background (Unsplash or local assets)  
